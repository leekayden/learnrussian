import { prisma } from "@/lib/prisma";
import type { Level, LevelCurriculum } from "@/lib/curriculum/types";
import { PASS_TEST } from "@/lib/curriculum/types";

export type UnitLocks = {
  unlocked: boolean;
  /** Per lesson index. */
  lessons: { unlocked: boolean; completed: boolean }[];
  testUnlocked: boolean;
  testPassed: boolean;
  testScore: number | null;
  completed: boolean;
};

export type LevelLocks = {
  units: UnitLocks[];
  examUnlocked: boolean;
  examPassed: boolean;
  examScore: number | null;
  /** The next level exists and is unlocked. */
  nextLevelUnlocked: boolean;
  /** Free-navigation setting: every lesson, test and level is open. */
  unlockAll: boolean;
};

export function unitTestId(unitId: string): string {
  return `${unitId}-test`;
}

export function examTestId(level: Level): string {
  return `${level}-exam`;
}

/** Compute what the user may open for a level given their progress rows. */
export async function computeLevelLocks(
  curriculum: LevelCurriculum,
  userId: string,
): Promise<LevelLocks> {
  const lessonIds = curriculum.units.flatMap((u) => [
    ...u.lessons.map((l) => l.id),
    unitTestId(u.id),
  ]);
  lessonIds.push(examTestId(curriculum.level));

  const [unlockAll, progress] = await Promise.all([
    prisma.lrProfile
      .findUnique({ where: { userId }, select: { unlockAll: true } })
      .then((p) => p?.unlockAll ?? false),
    prisma.lrLessonProgress.findMany({
      where: { userId, lessonId: { in: lessonIds } },
      select: { lessonId: true, status: true, bestScore: true },
    }),
  ]);
  const byId = new Map(progress.map((p) => [p.lessonId, p]));

  const examId = examTestId(curriculum.level);
  const examRow = byId.get(examId);
  const examPassed = examRow?.status === "completed";

  const units: UnitLocks[] = curriculum.units.map((unit) => {
    const testId = unitTestId(unit.id);
    const testRow = byId.get(testId);
    const testPassed = testRow?.status === "completed";
    const completed = unit.lessons.every((l) => byId.get(l.id)?.status === "completed");
    return {
      unlocked: true,
      lessons: unit.lessons.map((l) => ({
        unlocked: true,
        completed: byId.get(l.id)?.status === "completed",
      })),
      testUnlocked: true,
      testPassed,
      testScore: testRow?.bestScore ?? null,
      completed,
    };
  });

  if (unlockAll) {
    // Free navigation: everything is open; completion flags stay truthful.
    return {
      units,
      examUnlocked: true,
      examPassed,
      examScore: examRow?.bestScore ?? null,
      nextLevelUnlocked: true,
      unlockAll: true,
    };
  }

  // The first unit of a level is always open; later units need the
  // previous unit's test passed.
  let previousTestPassed = true;
  for (const [i, unit] of curriculum.units.entries()) {
    const testPassed = units[i].testPassed;
    units[i].unlocked = previousTestPassed;
    units[i].lessons = unit.lessons.map((l, li) => {
      if (!previousTestPassed) return { unlocked: false, completed: false };
      const lessonUnlocked =
        li === 0 || byId.get(unit.lessons[li - 1].id)?.status === "completed";
      return {
        unlocked: lessonUnlocked,
        completed: byId.get(l.id)?.status === "completed",
      };
    });
    units[i].testUnlocked = previousTestPassed && units[i].completed;
    // The next unit only opens once this unit's test is passed.
    previousTestPassed = testPassed;
  }

  return {
    units,
    examUnlocked: units.every((u) => u.testPassed),
    examPassed,
    examScore: examRow?.bestScore ?? null,
    nextLevelUnlocked: examPassed,
    unlockAll: false,
  };
}

/** Aggregate helpers for dashboards. */
export async function getDueCount(userId: string): Promise<number> {
  return prisma.lrSrsCard.count({
    where: { userId, suspended: false, due: { lte: new Date() }, state: { not: 0 } },
  });
}

export async function getNewCount(userId: string): Promise<number> {
  return prisma.lrSrsCard.count({
    where: { userId, suspended: false, state: 0 },
  });
}

export function passedTest(bestScore: number | null): boolean {
  return (bestScore ?? 0) >= PASS_TEST;
}
