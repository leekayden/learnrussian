import Link from "next/link";
import { requireUser } from "@/lib/session";
import { CURRICULUM } from "@/lib/curriculum/content";
import { computeLevelLocks, getDueCount, getNewCount } from "@/lib/curriculum/locks";
import { LEVELS, LEVEL_LABELS, type Level } from "@/lib/curriculum/types";
import { prisma } from "@/lib/prisma";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Sparkles, BookOpen, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = { title: "Dashboard — learnrussian" };

export default async function DashboardPage() {
  const { user, profile } = await requireUser();

  const now = new Date();
  const todayUtc = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()),
  );
  const [due, fresh, todayActivity, progressRows] = await Promise.all([
    getDueCount(user.id),
    getNewCount(user.id),
    prisma.lrDailyActivity.findUnique({
      where: { userId_day: { userId: user.id, day: todayUtc } },
    }),
    prisma.lrLessonProgress.findMany({ where: { userId: user.id } }),
  ]);

  const currentLevel = (profile.currentLevel.toLowerCase() as Level) ?? "a2";
  const locks = await computeLevelLocks(CURRICULUM[currentLevel], user.id);
  const completedLessons = progressRows.filter(
    (p) => p.status === "completed" && p.lessonId.includes("-l"),
  ).length;
  const totalLessons = CURRICULUM[currentLevel].units.reduce(
    (n, u) => n + u.lessons.length,
    0,
  );

  // Next lesson: first unit whose test isn't passed → first not-completed lesson.
  let next: { unitNumber: number; lessonNumber: number; title: string } | null = null;
  for (let i = 0; i < CURRICULUM[currentLevel].units.length; i++) {
    const unit = CURRICULUM[currentLevel].units[i];
    const lock = locks.units[i];
    if (!lock?.unlocked) break;
    const idx = lock.lessons.findIndex((l) => !l.completed);
    if (idx >= 0) {
      next = { unitNumber: unit.number, lessonNumber: idx + 1, title: unit.lessons[idx].title };
      break;
    }
    if (!lock.testPassed) {
      next = { unitNumber: unit.number, lessonNumber: 0, title: `Unit ${unit.number} test` };
      break;
    }
  }

  const weakTopics = await prisma.lrGrammarMastery.findMany({
    where: { userId: user.id, score: { lt: 70 } },
    orderBy: { score: "asc" },
    take: 3,
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Приве́т, {user.name.split(" ")[0]}!
          </h1>
          <p className="text-muted-foreground">
            Level {profile.currentLevel} · {completedLessons}
            {totalLessons ? ` of ${totalLessons}` : ""} lessons at this level
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1.5 text-sm font-medium text-orange-600 dark:text-orange-400">
            <Flame className="size-4" /> {profile.streakCount}-day streak
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
            <TrendingUp className="size-4" /> {todayActivity?.xp ?? 0} / {profile.dailyGoalXp} XP today
          </span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen className="size-4 text-primary" /> Continue
            </CardTitle>
          </CardHeader>
          <CardContent>
            {next ? (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium">{next.title}</p>
                  <p className="text-sm text-muted-foreground">
                    Unit {next.unitNumber}
                    {next.lessonNumber ? `, lesson ${next.lessonNumber}` : " test"}
                  </p>
                </div>
                <Link
                  href={
                    next.lessonNumber
                      ? `/learn/${currentLevel}/${next.unitNumber}/${next.lessonNumber}`
                      : `/learn/${currentLevel}/${next.unitNumber}/test`
                  }
                  className={buttonVariants()}
                >
                  {next.lessonNumber ? "Continue lesson" : "Take the test"}
                </Link>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                All available lessons at this level are complete.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="size-4 text-primary" /> Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">{due}</div>
            <p className="text-sm text-muted-foreground">{fresh} new cards waiting</p>
            <Link href="/review" className={cn(buttonVariants({ className: "w-full mt-3" }))}>
              Start review
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Levels</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {LEVELS.map((lv) => (
              <Link
                key={lv}
                href={`/learn/${lv}`}
                className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-accent"
              >
                {LEVEL_LABELS[lv]}
              </Link>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Needs practice</CardTitle>
          </CardHeader>
          <CardContent>
            {weakTopics.length ? (
              <div className="space-y-2">
                {weakTopics.map((t) => (
                  <div key={t.topicId} className="flex items-center justify-between text-sm">
                    <span>{t.topicId}</span>
                    <span className="text-muted-foreground">{t.score}%</span>
                  </div>
                ))}
                <Link href="/practice" className="inline-block text-sm text-primary hover:underline">
                  Practice now →
                </Link>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No weak topics yet — complete lessons to build your mastery map.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
