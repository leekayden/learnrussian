import { HandwritingExplorer } from "@/components/handwriting-explorer";

export const metadata = { title: "Handwriting — learnrussian" };

export default function HandwritingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Handwriting</h1>
        <p className="text-muted-foreground">
          The whole Cyrillic alphabet with stroke-order animations. Start with
          print to learn the shapes, then switch to cursive (прописи) — the
          style Russians actually write in.
        </p>
      </div>
      <HandwritingExplorer />
    </div>
  );
}
