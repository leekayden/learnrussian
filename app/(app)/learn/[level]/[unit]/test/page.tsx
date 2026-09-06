import Link from "next/link";
import { notFound } from "next/navigation";
import { getUnit } from "@/lib/curriculum/content";
import { LEVELS, type Level, PASS_TEST } from "@/lib/curriculum/types";
import { saveTestResult } from "@/app/actions/progress";
import { ExerciseRunner } from "@/components/practice/exercise-runner";

export default async function UnitTestPage({
  params,
}: PageProps<"/learn/[level]/[unit]/test">) {
  const { level, unit } = await params;
  if (!LEVELS.includes(level as Level)) notFound();
  const lv = level as Level;
  const unitData = getUnit(lv, Number(unit));
  if (!unitData) notFound();
  if (unitData.test.length === 0) {
    return (
      <div className="rounded-xl border bg-card p-8 text-center">
        <p className="font-medium">This unit test is not written yet.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          It will appear here as soon as the unit's content is complete.
        </p>
        <Link
          href={`/learn/${lv}/${unitData.number}`}
          className="mt-4 inline-block text-sm text-primary hover:underline"
        >
          ← Back to the unit
        </Link>
      </div>
    );
  }

  const submit = saveTestResult.bind(null, `${unitData.id}-test`);

  return (
    <div className="space-y-6">
      <div>
        <Link
          href={`/learn/${lv}/${unitData.number}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Unit {unitData.number}. {unitData.title}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Unit {unitData.number} test
        </h1>
        <p className="text-muted-foreground">
          Everything from this unit. Score ≥{PASS_TEST}% to unlock the next unit.
        </p>
      </div>
      <ExerciseRunner
        exercises={unitData.test}
        submit={submit}
        exportTitle={`${unitData.id}-test`}
        onDoneHref={`/learn/${lv}`}
        onDoneLabel="Back to the level →"
        passPercent={PASS_TEST}
      />
    </div>
  );
}
