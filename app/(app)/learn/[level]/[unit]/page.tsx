import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/session";
import { getLevel, getUnit } from "@/lib/curriculum/content";
import { computeLevelLocks } from "@/lib/curriculum/locks";
import { LEVELS, type Level } from "@/lib/curriculum/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, FileCheck2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function UnitPage({ params }: PageProps<"/learn/[level]/[unit]">) {
  const { level, unit } = await params;
  if (!LEVELS.includes(level as Level)) notFound();
  const lv = level as Level;
  const unitNumber = Number(unit);
  const unitData = getUnit(lv, unitNumber);
  if (!unitData) notFound();

  const { user } = await requireUser();
  const locks = await computeLevelLocks(getLevel(lv), user.id);
  const lock = locks.units[unitData.number - 1];
  if (!lock) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href={`/learn/${lv}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Level {lv.toUpperCase()}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Unit {unitData.number}. {unitData.title}
        </h1>
      </div>

      <div className="grid gap-3">
        {unitData.lessons.map((lesson, i) => {
          const l = lock.lessons[i];
          if (!l) return null;
          return (
            <Card key={lesson.id} className={cn(!l.unlocked && "opacity-60")}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-base">
                  <span>
                    {i + 1}. {lesson.title}
                  </span>
                  {l.completed ? (
                    <CheckCircle2 className="size-5 text-green-600" />
                  ) : l.unlocked ? (
                    <Circle className="size-5 text-muted-foreground" />
                  ) : (
                    <Lock className="size-4 text-muted-foreground" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{lesson.vocab.length} new words</Badge>
                <Badge variant="outline">
                  {lesson.grammar.length} note{lesson.grammar.length === 1 ? "" : "s"}
                </Badge>
                {l.unlocked ? (
                  <Link
                    href={`/learn/${lv}/${unitData.number}/${i + 1}`}
                    className="ml-auto rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {l.completed ? "Review lesson" : "Start lesson"}
                  </Link>
                ) : (
                  <span className="ml-auto text-sm text-muted-foreground">
                    Finish the previous lesson first.
                  </span>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className={cn(!lock.testUnlocked && "opacity-60")}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <FileCheck2 className="size-4" /> Unit test
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          {lock.testPassed ? (
            <Badge variant="secondary">passed · {lock.testScore}%</Badge>
          ) : null}
          {lock.testUnlocked ? (
            <Link
              href={`/learn/${lv}/${unitData.number}/test`}
              className="rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
            >
              {lock.testPassed ? "Retake" : "Take"} the test (≥80% unlocks the next unit)
            </Link>
          ) : (
            <span className="text-sm text-muted-foreground">
              Complete all lessons to unlock the test.
            </span>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
