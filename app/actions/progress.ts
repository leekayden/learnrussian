"use server";

import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import { isCorrect, type ExerciseResponse } from "@/lib/curriculum/grade";
import type { Exercise } from "@/lib/curriculum/types";
import { PASS_LESSON, PASS_TEST } from "@/lib/curriculum/types";
import { newCard, review, toFsrsCard } from "@/lib/srs";
import {
  XP_LESSON,
  XP_EXERCISE,
  XP_REVIEW,
  XP_UNIT_TEST,
  XP_EXAM,
} from "@/lib/curriculum/xp";

const CARD_KINDS = ["recog", "produce", "cloze", "audio"] as const;

function todayLocal(localDate?: string): string {
  // Client sends its local YYYY-MM-DD; fall back to server UTC date.
  if (localDate && /^\d{4}-\d{2}-\d{2}$/.test(localDate)) return localDate;
  return new Date().toISOString().slice(0, 10);
}

function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

async function recordActivity(
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

async function gradeAll(exercises: Exercise[], responses: Record<string, ExerciseResponse>) {
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

export type SubmitResult = {
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
export async function submitLesson(
  level: "a2" | "b1" | "b2" | "c1" | "c2",
  unitNumber: number,
  lessonNumber: number,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<SubmitResult> {
  const session = await requireSession();
  const userId = session.user.id;

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

/** Attach SRS cards for a lesson's vocab words. Called by the lesson page flow. */
export async function createLessonCards(
  args: { lessonId: string; words: { id: number; bare: string; senses: string[]; exampleRu: string | null }[] },
): Promise<{ created: number }> {
  const session = await requireSession();
  const userId = session.user.id;
  const now = new Date();
  let created = 0;
  for (const w of args.words) {
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
          stability: 0,
          difficulty: 0,
          step: 0,
        },
      });
      created++;
    }
  }
  return { created };
}

/** Grade a unit test or level exam. */
export async function saveTestResult(
  /** "a2-u01-test" or "a2-exam" */
  testId: string,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<SubmitResult> {
  const session = await requireSession();
  const userId = session.user.id;
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

/** Grade one SRS card with the FSRS scheduler. */
export async function gradeCard(
  args: { cardId: string; rating: number; localDate?: string },
): Promise<{ due: Date; state: number }> {
  const session = await requireSession();
  const userId = session.user.id;
  const row = await prisma.lrSrsCard.findUnique({ where: { id: args.cardId } });
  if (!row || row.userId !== userId) throw new Error("Card not found");

  const grade = Math.min(4, Math.max(1, args.rating)) as 1 | 2 | 3 | 4;
  const card = toFsrsCard(row);
  const { card: updated, log } = review(card, grade);

  await prisma.lrSrsCard.update({
    where: { id: args.cardId },
    data: {
      state: updated.state,
      due: updated.due,
      stability: updated.stability,
      difficulty: updated.difficulty,
      step: updated.learning_steps ?? 0,
      reps: updated.reps,
      lapses: updated.lapses,
      lastReview: log.review,
    },
  });
  await prisma.lrReviewLog.create({
    data: {
      cardId: args.cardId,
      userId,
      rating: grade,
      reviewedAt: log.review,
      scheduledDays: log.scheduled_days,
      elapsedDays: log.elapsed_days,
    },
  });
  await recordActivity(userId, todayLocal(args.localDate), XP_REVIEW, { reviewsDone: 1 });
  return { due: updated.due, state: updated.state };
}

/** Mark a lesson's SRS cards as seen when they're created (keeps types tidy). */
export async function ensureNewCards(userId: string) {
  const count = await prisma.lrSrsCard.count({ where: { userId, state: 0 } });
  return count;
}

