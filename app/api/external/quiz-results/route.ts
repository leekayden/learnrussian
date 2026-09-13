import { requireSession } from "@/lib/session";
import { verifyResultWebhook } from "@/lib/external/quiz-renderer";
import {
  findExternalQuizSource,
  parseExternalQuizId,
} from "@/lib/external/quiz-builders";
import { applyLessonResult, applyTestResult, gradeAll } from "@/lib/quiz-apply";
import type { ExerciseResponse } from "@/lib/curriculum/grade";
import type { Level } from "@/lib/curriculum/types";
import { prisma } from "@/lib/prisma";

// Results webhook from quiz-renderer. The payload is HMAC-signed by
// quiz-renderer; we re-grade the responses locally against the curriculum
// before applying any credit, so a tampered score grants nothing.

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await verifyResultWebhook(request);
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 401 });
  }

  const attemptId = typeof body.attemptId === "string" ? body.attemptId : null;
  const externalUserId = typeof body.externalUserId === "string" ? body.externalUserId : null;
  const externalQuizId = typeof body.externalQuizId === "string" ? body.externalQuizId : null;
  const rawResponses = (body.responses ?? {}) as Record<string, unknown>;

  if (!attemptId || !externalUserId || !externalQuizId) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Idempotency: a redelivered webhook must not apply credit twice.
  const existing = await prisma.externalQuizResult.findUnique({ where: { attemptId } });
  if (existing) {
    return Response.json({ ok: true, duplicate: true, score: existing.score });
  }

  const parsed = parseExternalQuizId(externalQuizId);
  if (!parsed) {
    return Response.json({ error: `Unknown externalQuizId: ${externalQuizId}` }, { status: 400 });
  }
  const { kind, refId } = parsed;

  const source = findExternalQuizSource(kind, refId);
  if (!source) {
    return Response.json({ error: `Unknown quiz source: ${externalQuizId}` }, { status: 400 });
  }
  const exercises = source.exercises;
  if (!exercises.length) {
    return Response.json({ error: "Quiz has no exercises anymore" }, { status: 409 });
  }

  // Adapt renderer responses to native grading conventions: quiz-renderer
  // sends fill-blank answers as arrays; the native grader expects the blanks
  // joined with NUL. Everything else (option ids, arrays, booleans, pair maps)
  // matches 1:1.
  const responses: Record<string, ExerciseResponse> = {};
  for (const ex of exercises) {
    const r = rawResponses[ex.id];
    if (r === undefined) continue;
    if (ex.type === "fill-blank" && Array.isArray(r)) {
      responses[ex.id] = r.map((v) => (typeof v === "string" ? v : "")).join("\u0000");
    } else {
      responses[ex.id] = r as ExerciseResponse;
    }
  }

  // Re-grade locally — the webhook score is advisory only.
  const { score } = await gradeAll(exercises, responses);

  const user = await prisma.user.findUnique({ where: { id: externalUserId }, select: { id: true } });
  if (!user) {
    return Response.json({ error: "Unknown user" }, { status: 400 });
  }

  try {
    if (kind === "lesson") {
      const { level, unitNumber, lessonNumber } = source as {
        level: Level;
        unitNumber: number;
        lessonNumber: number;
      };
      await applyLessonResult(externalUserId, level, unitNumber, lessonNumber, exercises, responses);
    } else {
      const testId = kind === "unit-test" ? `${refId}-test` : refId;
      await applyTestResult(externalUserId, testId, exercises, responses);
    }
  } catch (err) {
    console.error("Failed to apply external quiz result:", err);
    return Response.json({ error: "Failed to apply result" }, { status: 500 });
  }

  await prisma.externalQuizResult.create({
    data: {
      userId: externalUserId,
      attemptId,
      externalQuizId,
      score,
      responses: responses as object,
    },
  });

  return Response.json({ ok: true, score });
}
