import Link from "next/link";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { getLevel } from "@/lib/curriculum/content";
import { computeLevelLocks } from "@/lib/curriculum/locks";
import { LEVEL_LABELS, type Level } from "@/lib/curriculum/types";
import { responseText } from "@/lib/curriculum/grade";
import { renderRu } from "@/lib/russian";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SuspendedCardList } from "@/components/suspended-card-list";

export const metadata = { title: "Progress — learnrussian" };

const RATING_LABELS = ["", "Again", "Hard", "Good", "Easy"] as const;
const RATING_STYLES = [
  "",
  "border-red-500/40 text-red-600 dark:text-red-400",
  "border-orange-500/40 text-orange-600 dark:text-orange-400",
  "border-green-600/40 text-green-700 dark:text-green-400",
  "border-blue-500/40 text-blue-600 dark:text-blue-400",
] as const;

function timeAgo(d: Date): string {
  const s = Math.floor((Date.now() - d.getTime()) / 1000);
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

function fmtMinutes(m: number): string {
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

export default async function ProgressPage() {
  const { user, profile } = await requireUser();
  const show = !!profile.showStress;

  const [attempts, activity, mastery, reviewLogs, suspended, slips] = await Promise.all([
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
    prisma.lrReviewLog.findMany({
      where: { userId: user.id },
      orderBy: { reviewedAt: "desc" },
      take: 10,
      include: { card: { select: { wordId: true, kind: true } } },
    }),
    prisma.lrSrsCard.findMany({
      where: { userId: user.id, suspended: true },
      orderBy: { createdAt: "asc" },
      take: 30,
      select: { id: true, wordId: true, kind: true },
    }),
    prisma.lrExerciseAttempt.findMany({
      where: { userId: user.id, correct: false, prompt: { not: null } },
      orderBy: { createdAt: "desc" },
      take: 8,
      select: { id: true, prompt: true, answer: true, response: true, createdAt: true },
    }),
  ]);

  const reviewWordIds = [
    ...new Set([
      ...reviewLogs.map((l) => l.card.wordId),
      ...suspended.map((c) => c.wordId),
    ]),
  ];
  const words = reviewWordIds.length
    ? await prisma.word.findMany({
        where: { id: { in: reviewWordIds } },
        select: { id: true, accented: true },
      })
    : [];
  const wordById = new Map(words.map((w) => [w.id, w]));

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
  const totalMinutes = activity.reduce((n, a) => n + a.minutes, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Progress</h1>
        <p className="text-muted-foreground">
          {totalXp} XP · {fmtMinutes(totalMinutes)} studied in the last two weeks ·{" "}
          {profile.streakCount}-day streak
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
                        title={`${a.xp} XP · ${a.minutes} min`}
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
                {m.lastPracticed ? (
                  <span className="w-14 shrink-0 text-right text-xs text-muted-foreground">
                    {timeAgo(m.lastPracticed)}
                  </span>
                ) : null}
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

      {slips.length ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent slips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {slips.map((s) => (
              <div key={s.id} className="text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">{renderRu(s.prompt ?? "", show)}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {timeAgo(s.createdAt)}
                  </span>
                </div>
                <div className="mt-0.5 text-red-600 dark:text-red-400">
                  You: {s.response == null ? "—" : responseText(s.response as never)}
                </div>
                {s.answer ? (
                  <div className="text-green-700 dark:text-green-400">
                    Answer: {renderRu(s.answer, show)}
                  </div>
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}

      {reviewLogs.length ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent reviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {reviewLogs.map((l) => {
              const w = wordById.get(l.card.wordId);
              return (
                <div key={l.id} className="flex items-center gap-3 text-sm">
                  {w ? (
                    <Link
                      href={`/dictionary/${w.id}`}
                      className="w-40 shrink-0 truncate font-medium hover:text-primary"
                    >
                      {renderRu(w.accented, show)}
                    </Link>
                  ) : (
                    <span className="w-40 shrink-0 truncate text-muted-foreground">—</span>
                  )}
                  <span className="w-24 shrink-0 text-muted-foreground">{l.card.kind}</span>
                  <Badge variant="outline" className={RATING_STYLES[l.rating]}>
                    {RATING_LABELS[l.rating]}
                  </Badge>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {timeAgo(l.reviewedAt)}
                  </span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ) : null}

      {suspended.length ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Suspended cards</CardTitle>
          </CardHeader>
          <CardContent>
            <SuspendedCardList
              items={suspended.map((c) => ({
                cardId: c.id,
                wordId: c.wordId,
                accented: wordById.get(c.wordId)?.accented ?? "—",
                kind: c.kind,
              }))}
              showStress={show}
            />
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
