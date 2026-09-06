import { savePlacementResult } from "@/app/actions/practice";
import { placement } from "@/content/placement";
import { PlacementRunner } from "@/components/practice/placement-runner";

export const metadata = { title: "Placement — learnrussian" };

export default function PlacementPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Placement test</h1>
        <p className="text-muted-foreground">
          24 questions from A2 to B2 — answer what you can, skip nothing, guess
          freely. We&apos;ll recommend a starting level.
        </p>
      </div>
      <PlacementRunner exercises={placement} submit={savePlacementResult} />
    </div>
  );
}
