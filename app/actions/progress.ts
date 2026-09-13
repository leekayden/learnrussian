"use server";

import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import type { ExerciseResponse } from "@/lib/curriculum/grade";
import type { Exercise } from "@/lib/curriculum/types";
import { newCard, review, toFsrsCard } from "@/lib/srs";
import { XP_REVIEW } from "@/lib/curriculum/xp";
import {
  applyLessonResult,
  applyTestResult,
  recordActivity,
  todayLocal,
  type ApplyResult,
} from "@/lib/quiz-apply";

const CARD_KINDS = ["recog", "produce", "cloze", "audio"] as const;

/** Grade a lesson attempt, persist progress/XP/mastery, and create SRS cards. */
export async function submitLesson(
  level: "a2" | "b1" | "b2" | "c1" | "c2",
  unitNumber: number,
  lessonNumber: number,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<ApplyResult> {
  const session = await requireSession();
  return applyLessonResult(session.user.id, level, unitNumber, lessonNumber, exercises, responses);
}

/** Grade a unit test or level exam. */
export async function saveTestResult(
  /** "a2-u01-test" or "a2-exam" */
  testId: string,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<ApplyResult> {
  const session = await requireSession();
  return applyTestResult(session.user.id, testId, exercises, responses);
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
