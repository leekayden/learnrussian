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

  const progress = await prisma.lrLessonProgress.findMany({
    where: { userId, lessonId: { in: lessonIds } },
    select: { lessonId: true, status: true, bestScore: true },
  });
  const byId = new Map(progress.map((p) => [p.lessonId, p]));

  const examId = examTestId(curriculum.level);
  const examRow = byId.get(examId);
  const examPassed = examRow?.status === "completed";

  // The first unit of a level is always open; later units need the
  // previous unit's test passed.
  let previousTestPassed = true;
  const units: UnitLocks[] = curriculum.units.map((unit) => {
    const testId = unitTestId(unit.id);
    const testRow = byId.get(testId);
    const testPassed = testRow?.status === "completed";
    const completed = unit.lessons.every((l) => byId.get(l.id)?.status === "completed");
    const locks: UnitLocks = {
      unlocked: previousTestPassed,
      lessons: unit.lessons.map((l, i) => {
        if (!previousTestPassed) return { unlocked: false, completed: false };
        const lessonUnlocked =
          i === 0 || byId.get(unit.lessons[i - 1].id)?.status === "completed";
        return {
          unlocked: lessonUnlocked,
          completed: byId.get(l.id)?.status === "completed",
        };
      }),
      testUnlocked: previousTestPassed && completed,
      testPassed,
      testScore: testRow?.bestScore ?? null,
      completed,
    };
    if (testPassed) previousTestPassed = true;
    return locks;
  });

  return {
    units,
    examUnlocked: units.every((u) => u.testPassed),
    examPassed,
    examScore: examRow?.bestScore ?? null,
    nextLevelUnlocked: examPassed,
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
