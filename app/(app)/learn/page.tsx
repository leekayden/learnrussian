import Link from "next/link";
import { requireUser } from "@/lib/session";
import { CURRICULUM } from "@/lib/curriculum/content";
import { computeLevelLocks } from "@/lib/curriculum/locks";
import { LEVELS, LEVEL_LABELS, LEVEL_DESCRIPTIONS, type Level } from "@/lib/curriculum/types";
import { getDueCount, getNewCount } from "@/lib/curriculum/locks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Sparkles } from "lucide-react";

export const metadata = { title: "Learn — learnrussian" };

/** A level is open if it is a2, or the previous level's exam was passed. */
async function levelUnlocked(level: Level, userId: string): Promise<boolean> {
  const idx = LEVELS.indexOf(level);
  if (idx <= 0) return true;
  const prev = CURRICULUM[LEVELS[idx - 1]];
  const locks = await computeLevelLocks(prev, userId);
  return locks.examPassed || prev.units.length === 0;
}

export default async function LearnPage() {
  const { user } = await requireUser();

  const cards = await Promise.all(
    LEVELS.map(async (level) => {
      const curriculum = CURRICULUM[level];
      const unlocked = await levelUnlocked(level, user.id);
      const locks = await computeLevelLocks(curriculum, user.id);
      const totalLessons = curriculum.units.reduce((n, u) => n + u.lessons.length, 0);
      const doneLessons = locks.units.reduce(
        (n, u) => n + u.lessons.filter((l) => l.completed).length,
        0,
      );
      return { level, curriculum, unlocked, totalLessons, doneLessons, locks };
    }),
  );
  const due = await getDueCount(user.id);
  const fresh = await getNewCount(user.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Learn</h1>
          <p className="text-muted-foreground">
            Grammar-first units from A2 to C1. Small lessons, steady progress.
          </p>
        </div>
        {due + fresh > 0 ? (
          <Link
            href="/review"
            className="flex items-center gap-2 rounded-lg border bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            <Sparkles className="size-4" />
            {due} due · {fresh} new — review
          </Link>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map(({ level, curriculum, unlocked, totalLessons, doneLessons, locks }) => (
          <Card key={level} className={unlocked ? "" : "opacity-60"}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">{LEVEL_LABELS[level]}</span>
                {!unlocked ? <Lock className="size-4 text-muted-foreground" /> : null}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{LEVEL_DESCRIPTIONS[level]}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{curriculum.units.length} units</Badge>
                <Badge variant="outline">{totalLessons} lessons</Badge>
                {totalLessons > 0 ? (
                  <Badge variant="secondary">
                    {doneLessons}/{totalLessons} done
                  </Badge>
                ) : null}
                {unlocked && locks.units.length > 0 ? (
                  <Link
                    href={`/learn/${level}`}
                    className="ml-auto text-sm font-medium text-primary hover:underline"
                  >
                    {doneLessons > 0 ? "Continue" : "Start"} →
                  </Link>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
