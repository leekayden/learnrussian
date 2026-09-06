import { requireUser } from "@/lib/session";
import { generateDrills } from "@/lib/curriculum/generate";
import { savePracticeResult } from "@/app/actions/practice";
import { PracticeHub } from "@/components/practice/practice-hub";

export const metadata = { title: "Practice — learnrussian" };

const KIND_TO_SPEC: Record<
  string,
  Parameters<typeof generateDrills>[0][number]
> = {
  conjugation: { kind: "conjugation", count: 10 },
  "noun-case": { kind: "noun-case", count: 10 },
  "adjective-case": { kind: "adjective-case", count: 10 },
  comparative: { kind: "comparative", count: 10 },
  cloze: { kind: "cloze", count: 10 },
};

export default async function PracticePage() {
  const { profile } = await requireUser();

  async function start(kind: string, level: string) {
    "use server";
    const spec = {
      ...KIND_TO_SPEC[kind],
      sentenceLevel: level,
    };
    const exercises = await generateDrills([spec], {
      lessonId: `practice-${kind}`,
      topicId: `practice-${kind}`,
    });
    return exercises;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Practice</h1>
        <p className="text-muted-foreground">
          Free drills beyond the curriculum — pick a muscle and train it.
        </p>
      </div>
      <PracticeHub start={start} />
    </div>
  );
}
