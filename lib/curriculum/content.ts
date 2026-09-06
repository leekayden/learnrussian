import { prisma } from "@/lib/prisma";
import type { Level, LevelCurriculum } from "@/lib/curriculum/types";
import { LEVELS } from "@/lib/curriculum/types";

import { a2 } from "@/content/curriculum/a2";
import { b1 } from "@/content/curriculum/b1";
import { b2 } from "@/content/curriculum/b2";
import { c1 } from "@/content/curriculum/c1";
import { c2 } from "@/content/curriculum/c2";

export const CURRICULUM: Record<Level, LevelCurriculum> = { a2, b1, b2, c1, c2 };

export function getLevel(level: Level): LevelCurriculum {
  return CURRICULUM[level];
}

export function getUnit(level: Level, unitNumber: number) {
  return CURRICULUM[level].units.find((u) => u.number === unitNumber) ?? null;
}

export function getLesson(level: Level, unitNumber: number, lessonNumber: number) {
  const unit = getUnit(level, unitNumber);
  const lesson = unit?.lessons[lessonNumber - 1] ?? null;
  if (!unit || !lesson) return null;
  return { unit, lesson, index: lessonNumber - 1 };
}

export function allLessons(level: Level) {
  return CURRICULUM[level].units.flatMap((u) =>
    u.lessons.map((l) => ({ unit: u, lesson: l })),
  );
}

export function totalLessonCount(): number {
  return LEVELS.reduce((n, lv) => n + allLessons(lv).length, 0);
}

/** Resolve lesson vocab words (bare forms) to dictionary entries. */
export async function resolveVocab(bare: string[]) {
  const unique = [...new Set(bare)];
  if (!unique.length) return { resolved: [], missing: [] as string[] };
  const rows = await prisma.word.findMany({
    where: { bare: { in: unique }, disabled: false },
    include: {
      senses: { where: { lang: "en" }, orderBy: { position: "asc" }, take: 2 },
      verb: { select: { aspect: true } },
      noun: { select: { gender: true } },
    },
    orderBy: [{ rank: { sort: "asc", nulls: "last" } }],
  });
  const byBare = new Map<string, (typeof rows)[number]>();
  for (const r of rows) if (!byBare.has(r.bare)) byBare.set(r.bare, r);
  return {
    resolved: unique
      .map((b) => byBare.get(b))
      .filter(Boolean)
      .map((w) => ({
        id: w!.id,
        bare: w!.bare,
        accented: w!.accented,
        audio: w!.audio,
        type: w!.type,
        level: w!.level,
        rank: w!.rank,
        gender: w!.noun?.gender ?? null,
        aspect: w!.verb?.aspect ?? null,
        senses: w!.senses.map((s) => s.tl),
      })),
    missing: unique.filter((b) => !byBare.has(b)),
  };
}
