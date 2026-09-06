"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import { isCorrect, type ExerciseResponse } from "@/lib/curriculum/grade";
import type { Exercise } from "@/lib/curriculum/types";
import { XP_EXERCISE } from "@/lib/curriculum/xp";

async function recordActivityXp(userId: string, xp: number) {
  const now = new Date();
  const day = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  await prisma.lrDailyActivity.upsert({
    where: { userId_day: { userId, day } },
    create: { userId, day, xp, lessonsDone: 0, reviewsDone: 0 },
    update: { xp: { increment: xp } },
  });
}

/** Record a free-practice session: attempts + XP, no lesson progress. */
export async function savePracticeResult(
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<{ correct: number; total: number; xpEarned: number }> {
  const session = await requireSession();
  let correct = 0;
  const rows: {
    userId: string;
    lessonId: string | null;
    exerciseId: string;
    exerciseType: string;
    correct: boolean;
    response: never;
  }[] = [];
  for (const ex of exercises) {
    const ok = isCorrect(ex, responses[ex.id] ?? "");
    if (ok) correct++;
    rows.push({
      userId: session.user.id,
      lessonId: null,
      exerciseId: ex.id.slice(0, 80),
      exerciseType: ex.type,
      correct: ok,
      response: (responses[ex.id] ?? null) as never,
    });
  }
  await prisma.lrExerciseAttempt.createMany({ data: rows });
  const xpEarned = correct * XP_EXERCISE;
  await recordActivityXp(session.user.id, xpEarned);
  return { correct, total: exercises.length, xpEarned };
}

export type PlacementResult = {
  recommendedLevel: "a2" | "b1" | "b2" | "c1";
  score: number;
  a2Score: number;
  b1Score: number;
  b2Score: number;
};

/** Grade the placement test (id prefix a2-/b1-/b2- marks the section). */
export async function savePlacementResult(
  exercises: Exercise[],
  responses: Record<string, ExerciseResponse>,
): Promise<PlacementResult> {
  const session = await requireSession();
  let a2 = { ok: 0, n: 0 };
  let b1 = { ok: 0, n: 0 };
  let b2 = { ok: 0, n: 0 };
  for (const ex of exercises) {
    const ok = isCorrect(ex, responses[ex.id] ?? "");
    const bucket = ex.id.startsWith("a2-") ? a2 : ex.id.startsWith("b1-") ? b1 : b2;
    bucket.n++;
    if (ok) bucket.ok++;
  }
  const pct = (b: { ok: number; n: number }) => (b.n ? Math.round((b.ok / b.n) * 100) : 0);
  const a2Score = pct(a2);
  const b1Score = pct(b1);
  const b2Score = pct(b2);

  let recommendedLevel: PlacementResult["recommendedLevel"] = "a2";
  if (a2Score >= 80 && b1Score >= 60) recommendedLevel = "b1";
  if (a2Score >= 85 && b1Score >= 75 && b2Score >= 50) recommendedLevel = "b2";
  const overall = Math.round(
    ((a2Score * a2.n + b1Score * b1.n + b2Score * b2.n) /
      Math.max(1, a2.n + b1.n + b2.n)) || 0,
  );

  await prisma.lrProfile.update({
    where: { userId: session.user.id },
    data: { currentLevel: recommendedLevel.toUpperCase(), placementDone: true },
  });
  return { recommendedLevel, score: overall, a2Score, b1Score, b2Score };
}
