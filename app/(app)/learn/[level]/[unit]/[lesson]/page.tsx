import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/session";
import { getLesson, getLevel, resolveVocab } from "@/lib/curriculum/content";
import { computeLevelLocks } from "@/lib/curriculum/locks";
import { generateDrills } from "@/lib/curriculum/generate";
import { LEVELS, type Level } from "@/lib/curriculum/types";
import { submitLesson } from "@/app/actions/progress";
import { ExerciseRunner, Md } from "@/components/practice/exercise-runner";
import { AudioButton } from "@/components/audio-button";
import { withStress, GENDER_LABELS } from "@/lib/russian";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default async function LessonPage({
  params,
}: PageProps<"/learn/[level]/[unit]/[lesson]">) {
  const { level, unit, lesson: lessonParam } = await params;
  if (!LEVELS.includes(level as Level)) notFound();
  const lv = level as Level;
  const unitNumber = Number(unit);
  const lessonNumber = Number(lessonParam);
  const found = getLesson(lv, unitNumber, lessonNumber);
  if (!found) notFound();
  const { unit: unitData, lesson } = found;

  const { user } = await requireUser();
  const locks = await computeLevelLocks(getLevel(lv), user.id);
  const lock = locks.units[unitData.number - 1];
  const lessonLock = lock?.lessons[lessonNumber - 1];
  if (!lessonLock?.unlocked) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 py-10">
          <Lock className="size-6 text-muted-foreground" />
          <p className="text-muted-foreground">This lesson is still locked.</p>
          <Link
            href={`/learn/${lv}/${unitData.number}`}
            className="text-sm text-primary hover:underline"
          >
            ← Back to the unit
          </Link>
        </CardContent>
      </Card>
    );
  }

  // Vocabulary + runtime drills.
  const { resolved } = await resolveVocab(lesson.vocab);
  const wordIds = resolved.map((w) => w.id);
  const drills = await generateDrills(
    (lesson.drills ?? []).map((d) => ({ ...d, wordIds })),
    { lessonId: lesson.id, topicId: lesson.topicIds[0] ?? lesson.id },
  );
  const exercises = [...lesson.exercises, ...drills];

  const submit = submitLesson.bind(null, lv, unitNumber, lessonNumber);

  return (
    <div className="space-y-8">
      <div>
        <Link
          href={`/learn/${lv}/${unitData.number}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Unit {unitData.number}. {unitData.title}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{lesson.title}</h1>
      </div>

      {/* ── Notes ─────────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Notes</h2>
        {lesson.grammar.map((block, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{block.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Md text={block.body} />
              {block.table ? (
                <div className="overflow-x-auto rounded-lg border">
                  {block.table.caption ? (
                    <div className="border-b bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground">
                      {block.table.caption}
                    </div>
                  ) : null}
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/30">
                        {block.table.headers.map((h, hi) => (
                          <th key={hi} className="px-3 py-2 text-left font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map((row, ri) => (
                        <tr key={ri} className="border-b last:border-0">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={
                                ci === 0
                                  ? "px-3 py-1.5 text-muted-foreground"
                                  : "px-3 py-1.5 font-medium"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {block.examples ? (
                <div className="space-y-1.5">
                  {block.examples.map((e, ei) => (
                    <div key={ei} className="border-l-2 pl-3 text-sm">
                      {withStress(e.ru)}
                      <span className="block text-muted-foreground">{e.en}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              {block.tip ? (
                <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm">
                  <span className="font-medium">⚠ Watch out: </span>
                  {block.tip}
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ── Vocabulary ────────────────────────────────────────── */}
      {resolved.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">
            New words <span className="text-sm font-normal text-muted-foreground">({resolved.length})</span>
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {resolved.map((w) => (
              <Link
                key={w.id}
                href={`/dictionary/${w.id}`}
                className="flex items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-accent"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium">{withStress(w.accented)}</span>
                    {w.gender ? (
                      <Badge variant="secondary">{GENDER_LABELS[w.gender]}</Badge>
                    ) : null}
                    {w.aspect ? <Badge variant="secondary">{w.aspect}</Badge> : null}
                  </div>
                  <div className="truncate text-sm text-muted-foreground">
                    {w.senses.join(", ")}
                  </div>
                </div>
                <AudioButton text={w.bare} audioUrl={w.audio} />
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* ── Practice ──────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Practice</h2>
        <p className="text-sm text-muted-foreground">
          Score ≥70% to complete the lesson and add the new words to your review deck.
        </p>
        <ExerciseRunner
          exercises={exercises}
          submit={submit}
          exportTitle={`${lv}-u${String(unitNumber).padStart(2, "0")}-l${lessonNumber} ${lesson.title}`}
          onDoneHref={
            lessonNumber < unitData.lessons.length
              ? `/learn/${lv}/${unitData.number}/${lessonNumber + 1}`
              : `/learn/${lv}/${unitData.number}/test`
          }
          onDoneLabel={
            lessonNumber < unitData.lessons.length
              ? "Next lesson →"
              : "Take the unit test →"
          }
        />
      </section>
    </div>
  );
}
