"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import type { ExerciseResponse } from "@/lib/curriculum/grade";
import type { Exercise } from "@/lib/curriculum/types";
import { review, toFsrsCard } from "@/lib/srs";
import { XP_REVIEW } from "@/lib/curriculum/xp";
import {
  applyLessonResult,
  applyTestResult,
  recordActivity,
  todayLocal,
  type ApplyResult,
} from "@/lib/quiz-apply";

/** Grade a lesson attempt, persist progress/XP/mastery, and create SRS cards. */
export async function submitLesson(
  level: "a2" | "b1" | "b2" | "c1" | "c2",
  unitNumber: number,
  lessonNumber: number,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
  localDate?: string,
): Promise<ApplyResult> {
  const session = await requireSession();
  return applyLessonResult(
    session.user.id,
    level,
    unitNumber,
    lessonNumber,
    exercises,
    responses,
    localDate,
  );
}

/** Grade a unit test or level exam. */
export async function saveTestResult(
  /** "a2-u01-test" or "a2-exam" */
  testId: string,
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
  localDate?: string,
): Promise<ApplyResult> {
  const session = await requireSession();
  return applyTestResult(session.user.id, testId, exercises, responses, localDate);
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

/** Suspend (bury) or restore an SRS card. Suspended cards are skipped by
 * review batches until restored. */
export async function setCardSuspended(
  cardId: string,
  suspended: boolean,
): Promise<{ ok: true }> {
  const session = await requireSession();
  const row = await prisma.lrSrsCard.findUnique({
    where: { id: cardId },
    select: { userId: true },
  });
  if (!row || row.userId !== session.user.id) throw new Error("Card not found");
  await prisma.lrSrsCard.update({
    where: { id: cardId },
    data: { suspended },
  });
  return { ok: true };
}

/** Add wall-clock study minutes (elapsed while a drill/review session was
 * open) to today's activity. Fire-and-forget from the runners. */
export async function logStudyMinutes(
  minutes: number,
  localDate?: string,
): Promise<{ ok: true }> {
  if (!Number.isFinite(minutes) || minutes < 1) return { ok: true };
  const session = await requireSession();
  await recordActivity(session.user.id, todayLocal(localDate), 0, {
    minutes: Math.min(240, Math.round(minutes)),
  });
  return { ok: true };
}
