import { getLesson, getLevel } from "@/lib/curriculum/content";
import { LEVELS, type Level, type Exercise } from "@/lib/curriculum/types";
import { exercisesToRendererQuiz } from "@/lib/quiz-export";
import type { RendererQuiz } from "@/lib/quiz-schema";

// Builders for quizzes pushed to quiz-renderer. External ids are scoped so the
// results webhook can map an attempt back to exactly one persistence target:
//   lr:lesson:{lessonId}    → LrLessonProgress upsert (lesson flow)
//   lr:unit-test:{unitId}   → LrLessonProgress ("<unitId>-test")
//   lr:exam:{level}         → LrLessonProgress ("<level>-exam")
//
// Generated drills (lib/curriculum/generate.ts) are randomised on every page
// load and cannot be reconstructed at callback time, so lesson quizzes contain
// the lesson's static exercises only — same as the file export does.

export type ExternalQuizKind = "lesson" | "unit-test" | "level-exam";

export function externalQuizId(kind: ExternalQuizKind, refId: string): string {
  return `lr:${kind}:${refId}`;
}

export function parseExternalQuizId(
  id: string,
): { kind: ExternalQuizKind; refId: string } | null {
  const match = /^lr:(lesson|unit-test|level-exam):(.+)$/.exec(id);
  if (!match) return null;
  return { kind: match[1] as ExternalQuizKind, refId: match[2]! };
}

export function returnUrlFor(kind: ExternalQuizKind, refId: string): string | undefined {
  const origin = (
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL ??
    process.env.BETTER_AUTH_URL ??
    "http://localhost:3000"
  ).replace(/\/$/, "")

  // `?qr=1` makes the destination page show the applied Quiz Renderer result.
  if (kind === "lesson") {
    const lesson = findLessonById(refId);
    if (!lesson) return undefined;
    const { level, unitNumber, lessonNumber } = lesson;
    return `${origin}/learn/${level}/${unitNumber}/${lessonNumber}?qr=1`;
  }
  if (kind === "unit-test") {
    const unit = findUnitById(refId);
    if (!unit) return undefined;
    return `${origin}/learn/${unit.level}/${unit.number}/test?qr=1`;
  }
  return `${origin}/learn/${refId}/exam?qr=1`;
}

function findLessonById(
  lessonId: string,
): { level: Level; unitNumber: number; lessonNumber: number; exercises: Exercise[]; title: string } | null {
  for (const level of LEVELS) {
    const curriculum = getLevel(level);
    for (const unit of curriculum.units) {
      const lessonIndex = unit.lessons.findIndex((l) => l.id === lessonId);
      if (lessonIndex >= 0) {
        return {
          level,
          unitNumber: unit.number,
          lessonNumber: lessonIndex + 1,
          exercises: unit.lessons[lessonIndex]!.exercises,
          title: unit.lessons[lessonIndex]!.title,
        };
      }
    }
  }
  return null;
}

function findUnitById(unitId: string): { level: Level; number: number; exercises: Exercise[]; title: string } | null {
  for (const level of LEVELS) {
    const unit = getLevel(level).units.find((u) => u.id === unitId);
    if (unit) return { level, number: unit.number, exercises: unit.test, title: unit.title };
  }
  return null;
}

/**
 * Resolves the canonical exercise set for an external quiz id — the same
 * exercise arrays the quizzes were built from — so the results callback can
 * re-grade responses locally.
 */
export function findExternalQuizSource(
  kind: ExternalQuizKind,
  refId: string,
): { exercises: Exercise[]; level: Level; unitNumber: number; lessonNumber: number } | null {
  if (kind === "lesson") {
    const found = findLessonById(refId);
    if (!found) return null;
    return {
      exercises: found.exercises,
      level: found.level,
      unitNumber: found.unitNumber,
      lessonNumber: found.lessonNumber,
    };
  }
  if (kind === "unit-test") {
    const found = findUnitById(refId);
    if (!found) return null;
    return { exercises: found.exercises, level: found.level, unitNumber: found.number, lessonNumber: 0 };
  }
  const level = refId.toLowerCase() as Level;
  if (!LEVELS.includes(level)) return null;
  return { exercises: getLevel(level).exam, level, unitNumber: 0, lessonNumber: 0 };
}

export async function buildExternalQuiz(
  kind: ExternalQuizKind,
  refId: string,
): Promise<RendererQuiz | null> {
  let title: string;
  let exercises: Exercise[];

  if (kind === "lesson") {
    const found = findLessonById(refId);
    if (!found || !found.exercises.length) return null;
    title = found.title;
    exercises = found.exercises;
  } else if (kind === "unit-test") {
    const found = findUnitById(refId);
    if (!found || !found.exercises.length) return null;
    title = `Unit test — ${found.title}`;
    exercises = found.exercises;
  } else {
    const level = refId.toLowerCase() as Level;
    if (!LEVELS.includes(level)) return null;
    const exam = getLevel(level).exam;
    if (!exam.length) return null;
    title = `${level.toUpperCase()} level exam`;
    exercises = exam;
  }

  const quiz = exercisesToRendererQuiz(
    title,
    "Pushed from learnrussian — results return automatically with full credit.",
    exercises,
  );
  return { ...quiz, id: externalQuizId(kind, refId) };
}
