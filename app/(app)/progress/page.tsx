import Link from "next/link";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { CURRICULUM, getLevel } from "@/lib/curriculum/content";
import { computeLevelLocks } from "@/lib/curriculum/locks";
import { LEVELS, LEVEL_LABELS, type Level } from "@/lib/curriculum/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Progress — learnrussian" };

export default async function ProgressPage() {
  const { user, profile } = await requireUser();

  const [attempts, activity, mastery] = await Promise.all([
    prisma.lrExerciseAttempt.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 200,
    }),
    prisma.lrDailyActivity.findMany({
      where: { userId: user.id },
      orderBy: { day: "desc" },
      take: 14,
    }),
    prisma.lrGrammarMastery.findMany({
      where: { userId: user.id },
      orderBy: { score: "asc" },
    }),
  ]);

  const current = (profile.currentLevel.toLowerCase() as Level) || "a2";
  const curriculum = getLevel(current);
  const locks = await computeLevelLocks(curriculum, user.id);
  const doneLessons = locks.units.reduce(
    (n, u) => n + u.lessons.filter((l) => l.completed).length,
    0,
  );
  const totalLessons = curriculum.units.reduce((n, u) => n + u.lessons.length, 0);

  const byType = new Map<string, { ok: number; n: number }>();
  for (const a of attempts) {
    const b = byType.get(a.exerciseType) ?? { ok: 0, n: 0 };
    b.n++;
    if (a.correct) b.ok++;
    byType.set(a.exerciseType, b);
  }
  const accuracyByType = [...byType.entries()].map(([t, b]) => ({
    type: t,
    pct: b.n ? Math.round((b.ok / b.n) * 100) : 0,
    n: b.n,
  }));

  const topicName = (id: string) =>
    id
      .split("-")
      .slice(2)
      .join(" ")
      .replace(/-/g, " ") || id;

  const totalXp = activity.reduce((n, a) => n + a.xp, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Progress</h1>
        <p className="text-muted-foreground">
          {totalXp} XP in the last two weeks · {profile.streakCount}-day streak
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Level {LEVEL_LABELS[current]}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Progress value={totalLessons ? (doneLessons / totalLessons) * 100 : 0} />
            <p className="text-sm text-muted-foreground">
              {doneLessons} of {totalLessons} lessons ·{" "}
              {locks.units.filter((u) => u.testPassed).length} unit tests passed
            </p>
            <Link href={`/learn/${current}`} className="inline-block text-sm text-primary hover:underline">
              Continue →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Last 14 days</CardTitle>
          </CardHeader>
          <CardContent>
            {activity.length ? (
              <div className="flex items-end gap-1.5">
                {[...activity].reverse().map((a) => {
                  const max = Math.max(...activity.map((x) => x.xp), profile.dailyGoalXp);
                  return (
                    <div key={a.day.toISOString()} className="flex flex-1 flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t bg-primary/70"
                        style={{ height: `${Math.max(4, (a.xp / max) * 72)}px` }}
                        title={`${a.xp} XP`}
                      />
                      <span className="text-[10px] text-muted-foreground">{a.day.getDate()}</span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No activity yet.</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Grammar mastery</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {mastery.length ? (
            mastery.map((m) => (
              <div key={m.topicId} className="flex items-center gap-3">
                <span className="w-56 shrink-0 truncate text-sm">{topicName(m.topicId)}</span>
                <Progress value={m.score} className="flex-1" />
                <Badge variant={m.score >= 70 ? "secondary" : "outline"}>{m.score}%</Badge>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Complete lessons to fill your mastery map.
            </p>
          )}
        </CardContent>
      </Card>

      {accuracyByType.length ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Accuracy by exercise type</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {accuracyByType.map((a) => (
              <div key={a.type} className="flex items-center gap-3">
                <span className="w-40 shrink-0 text-sm">{a.type}</span>
                <Progress value={a.pct} className="flex-1" />
                <span className="w-24 text-right text-sm text-muted-foreground">
                  {a.pct}% ({a.n})
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
