import { randomUUID } from "crypto";

import { prisma } from "@/lib/prisma";
import { isCorrect, type ExerciseResponse } from "@/lib/curriculum/grade";
import type { Exercise, Level } from "@/lib/curriculum/types";
import { PASS_LESSON, PASS_TEST } from "@/lib/curriculum/types";
import {
  XP_LESSON,
  XP_EXERCISE,
  XP_REVIEW,
  XP_UNIT_TEST,
  XP_EXAM,
} from "@/lib/curriculum/xp";

// Persistence core for quiz results. Both the server actions (native quizzes)
// and the quiz-renderer results webhook route call these, so external attempts
// earn exactly the same credit as native ones.

const CARD_KINDS = ["recog", "produce", "cloze", "audio"] as const;

export function todayLocal(localDate?: string): string {
  // Client sends its local YYYY-MM-DD; fall back to server UTC date.
  if (localDate && /^\d{4}-\d{2}-\d{2}$/.test(localDate)) return localDate;
  return new Date().toISOString().slice(0, 10);
}

function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export async function recordActivity(
  userId: string,
  localDate: string,
  xp: number,
  patch: { lessonsDone?: number; reviewsDone?: number },
) {
  const day = new Date(localDate + "T00:00:00Z");
  await prisma.lrDailyActivity.upsert({
    where: { userId_day: { userId, day } },
    create: {
      userId,
      day,
      xp,
      lessonsDone: patch.lessonsDone ?? 0,
      reviewsDone: patch.reviewsDone ?? 0,
    },
    update: {
      xp: { increment: xp },
      lessonsDone: { increment: patch.lessonsDone ?? 0 },
      reviewsDone: { increment: patch.reviewsDone ?? 0 },
    },
  });

  const profile = await prisma.lrProfile.findUnique({ where: { userId } });
  if (!profile) return null;
  const today = todayLocal(localDate);
  if (profile.lastActiveDate?.toISOString().slice(0, 10) === today) {
    return profile.streakCount;
  }
  const yesterday = addDays(today, -1);
  const last = profile.lastActiveDate?.toISOString().slice(0, 10);
  const streak = last === yesterday ? profile.streakCount + 1 : 1;
  await prisma.lrProfile.update({
    where: { userId },
    data: { lastActiveDate: new Date(today + "T00:00:00Z"), streakCount: streak },
  });
  return streak;
}

export async function gradeAll(exercises: Exercise[], responses: Record<string, ExerciseResponse>) {
  const perExercise = exercises.map((ex) => ({
    exercise: ex,
    correct: isCorrect(ex, responses[ex.id] ?? (ex.type === "true-false" ? false : "")),
  }));
  const correct = perExercise.filter((r) => r.correct).length;
  const score = exercises.length ? Math.round((correct / exercises.length) * 100) : 0;
  return { perExercise, correct, score };
}

async function logAttempts(
  userId: string,
  lessonId: string | null,
  perExercise: { exercise: Exercise; correct: boolean }[],
  responses: Record<string, ExerciseResponse>,
) {
  await prisma.lrExerciseAttempt.createMany({
    data: perExercise.map(({ exercise, correct }) => ({
      userId,
      lessonId,
      exerciseId: exercise.id.slice(0, 80),
      exerciseType: exercise.type,
      correct,
      response: (responses[exercise.id] ?? null) as never,
    })),
  });
}

export type ApplyResult = {
  score: number;
  correct: number;
  total: number;
  completed?: boolean;
  passed?: boolean;
  xpEarned: number;
  streak: number;
  newCards?: number;
};

/** Grade a lesson attempt, persist progress/XP/mastery, and create SRS cards. */
export async function applyLessonResult(
  userId: string,
  level: Level,
  unitNumber: number,
  lessonNumber: number,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<ApplyResult> {
  const { getLesson } = await import("@/lib/curriculum/content");
  const found = getLesson(level, unitNumber, lessonNumber);
  if (!found) throw new Error("Lesson not found");
  const { lesson } = found;

  const { perExercise, correct, score } = await gradeAll(exercises, responses);
  const completed = score >= PASS_LESSON;

  const existing = await prisma.lrLessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
  });
  await prisma.lrLessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
    create: {
      userId,
      lessonId: lesson.id,
      status: completed ? "completed" : "in_progress",
      bestScore: score,
      attempts: 1,
      completedAt: completed ? new Date() : null,
    },
    update: {
      status: completed || existing?.status === "completed" ? "completed" : "in_progress",
      bestScore: Math.max(score, existing?.bestScore ?? 0),
      attempts: { increment: 1 },
      completedAt: completed ? (existing?.completedAt ?? new Date()) : existing?.completedAt,
    },
  });

  for (const topicId of lesson.topicIds) {
    const prev = await prisma.lrGrammarMastery.findUnique({
      where: { userId_topicId: { userId, topicId } },
    });
    const newScore = Math.round((prev?.score ?? 0) * 0.5 + score * 0.5);
    await prisma.lrGrammarMastery.upsert({
      where: { userId_topicId: { userId, topicId } },
      create: { userId, topicId, score: newScore, reps: 1, lastPracticed: new Date() },
      update: { score: newScore, reps: { increment: 1 }, lastPracticed: new Date() },
    });
  }

  await logAttempts(userId, lesson.id, perExercise, responses);

  const firstCompletion = completed && existing?.status !== "completed";
  const xpEarned = (firstCompletion ? XP_LESSON : 0) + correct * XP_EXERCISE;
  const streak = await recordActivity(userId, todayLocal(undefined), xpEarned, {
    lessonsDone: 1,
  });

  // SRS cards: 4 kinds per vocab word, on first completion.
  let newCards = 0;
  if (firstCompletion && lesson.vocab.length) {
    const { resolveVocab } = await import("@/lib/curriculum/content");
    const { resolved } = await resolveVocab(lesson.vocab);
    const now = new Date();
    for (const w of resolved) {
      for (const kind of CARD_KINDS) {
        const exists = await prisma.lrSrsCard.findUnique({
          where: { userId_wordId_kind: { userId, wordId: w.id, kind } },
        });
        if (exists) continue;
        await prisma.lrSrsCard.create({
          data: {
            id: randomUUID(),
            userId,
            wordId: w.id,
            kind,
            state: 0,
            due: now,
          },
        });
        newCards++;
      }
    }
  }

  return {
    score,
    correct,
    total: exercises.length,
    completed,
    xpEarned,
    newCards,
    streak: streak ?? 0,
  };
}

/** Grade a unit test or level exam. */
export async function applyTestResult(
  userId: string,
  /** "a2-u01-test" or "a2-exam" */
  testId: string,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<ApplyResult> {
  const { perExercise, correct, score } = await gradeAll(exercises, responses);
  const passed = score >= PASS_TEST;
  const isExam = testId.endsWith("-exam");

  await prisma.lrLessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId: testId } },
    create: {
      userId,
      lessonId: testId,
      status: passed ? "completed" : "in_progress",
      bestScore: score,
      attempts: 1,
      completedAt: passed ? new Date() : null,
    },
    update: {
      status: passed ? "completed" : "in_progress",
      attempts: { increment: 1 },
      completedAt: passed ? new Date() : null,
    },
  });
  // bestScore = max
  const row = await prisma.lrLessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: testId } },
  });
  if (row && row.bestScore < score) {
    await prisma.lrLessonProgress.update({
      where: { userId_lessonId: { userId, lessonId: testId } },
      data: { bestScore: score },
    });
  }

  await logAttempts(userId, testId, perExercise, responses);

  const xpEarned = (isExam ? XP_EXAM : XP_UNIT_TEST) + correct * XP_EXERCISE;
  const streak = await recordActivity(userId, todayLocal(undefined), xpEarned, {
    lessonsDone: 1,
  });
  return { score, correct, total: exercises.length, passed, xpEarned, streak: streak ?? 0 };
}
