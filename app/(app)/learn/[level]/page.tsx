import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/session";
import { getLevel } from "@/lib/curriculum/content";
import { computeLevelLocks } from "@/lib/curriculum/locks";
import { LEVELS, LEVEL_LABELS, LEVEL_DESCRIPTIONS, type Level } from "@/lib/curriculum/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, CheckCircle2, Circle, FileCheck2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function LearnLevelPage({ params }: PageProps<"/learn/[level]">) {
  const { level } = await params;
  if (!LEVELS.includes(level as Level)) notFound();
  const lv = level as Level;
  const { user } = await requireUser();
  const curriculum = getLevel(lv);
  const locks = await computeLevelLocks(curriculum, user.id);

  return (
    <div className="space-y-6">
      <div>
        <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground">
          ← All levels
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Level {LEVEL_LABELS[lv]} — {curriculum.units.length} units
        </h1>
        <p className="text-muted-foreground">{LEVEL_DESCRIPTIONS[lv]}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {curriculum.units.map((unit, i) => {
          const lock = locks.units[i];
          const done = lock.lessons.filter((l) => l.completed).length;
          return (
            <Card key={unit.id} className={cn(!lock.unlocked && "opacity-60")}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  <span>
                    Unit {unit.number}. {unit.title}
                  </span>
                  {!lock.unlocked ? (
                    <Lock className="size-4 text-muted-foreground" />
                  ) : lock.testPassed ? (
                    <CheckCircle2 className="size-4 text-green-600" />
                  ) : (
                    <Circle className="size-4 text-muted-foreground" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline">
                    {done}/{unit.lessons.length} lessons
                  </Badge>
                  {lock.testScore !== null ? (
                    <Badge variant={lock.testPassed ? "secondary" : "outline"}>
                      test {lock.testScore}%
                    </Badge>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  {lock.unlocked ? (
                    <>
                      <Link
                        href={`/learn/${lv}/${unit.number}`}
                        className="rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
                      >
                        Open unit
                      </Link>
                      {lock.testUnlocked ? (
                        <Link
                          href={`/learn/${lv}/${unit.number}/test`}
                          className="rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
                        >
                          <FileCheck2 className="inline size-4" /> Unit test
                        </Link>
                      ) : null}
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Pass the previous unit's test (≥80%) to unlock.
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {curriculum.units.length > 0 && locks.examUnlocked ? (
        <Card className={cn(locks.examPassed && "border-green-600/40")}>
          <CardHeader>
            <CardTitle className="text-base">
              Level {LEVEL_LABELS[lv]} exam {locks.examPassed ? "— passed 🎉" : ""}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {locks.examPassed ? (
              <p className="text-sm text-muted-foreground">
                Level {LEVEL_LABELS[lv]} complete. The next level is open.
              </p>
            ) : (
              <Link
                href={`/learn/${lv}/exam`}
                className="rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
              >
                Take the {LEVEL_LABELS[lv]} exam (≥80% unlocks the next level)
              </Link>
            )}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
