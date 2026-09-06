import Link from "next/link";
import { notFound } from "next/navigation";
import { getLevel } from "@/lib/curriculum/content";
import { LEVELS, type Level, LEVEL_LABELS, PASS_TEST } from "@/lib/curriculum/types";
import { saveTestResult } from "@/app/actions/progress";
import { ExerciseRunner } from "@/components/practice/exercise-runner";

export default async function LevelExamPage({ params }: PageProps<"/learn/[level]/exam">) {
  const { level } = await params;
  if (!LEVELS.includes(level as Level)) notFound();
  const lv = level as Level;
  const curriculum = getLevel(lv);
  if (curriculum.exam.length === 0) {
    return (
      <div className="rounded-xl border bg-card p-8 text-center">
        <p className="font-medium">The {LEVEL_LABELS[lv]} exam is not written yet.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          It unlocks after all unit tests are passed, once the level's content is complete.
        </p>
        <Link href={`/learn/${lv}`} className="mt-4 inline-block text-sm text-primary hover:underline">
          ← Back to the level
        </Link>
      </div>
    );
  }

  const submit = saveTestResult.bind(null, `${lv}-exam`);

  return (
    <div className="space-y-6">
      <div>
        <Link href={`/learn/${lv}`} className="text-sm text-muted-foreground hover:text-foreground">
          ← Level {LEVEL_LABELS[lv]}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Level {LEVEL_LABELS[lv]} exam
        </h1>
        <p className="text-muted-foreground">
          Covers the whole level. Score ≥{PASS_TEST}% to unlock the next level.
        </p>
      </div>
      <ExerciseRunner
        exercises={curriculum.exam}
        submit={submit}
        exportTitle={`${lv}-exam`}
        onDoneHref={`/learn/${lv}`}
        onDoneLabel="Back to the level →"
        passPercent={PASS_TEST}
      />
    </div>
  );
}
