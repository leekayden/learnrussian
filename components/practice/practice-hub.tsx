"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { DrillKind } from "@/lib/curriculum/generate";
import { savePracticeResult } from "@/app/actions/practice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExerciseRunner, type SubmitResult } from "@/components/practice/exercise-runner";
import type { Exercise } from "@/lib/curriculum/types";

const KINDS: { id: DrillKind; title: string; description: string }[] = [
  { id: "conjugation", title: "Verb conjugation", description: "Endless drills: any verb × person × tense, straight from the dictionary." },
  { id: "noun-case", title: "Noun cases", description: "Decline nouns in any of the six cases, singular and plural." },
  { id: "adjective-case", title: "Adjective cases", description: "Adjective agreement grids: gender × case." },
  { id: "comparative", title: "Comparatives", description: "Form the comparative of common adjectives." },
  { id: "cloze", title: "Sentence cloze", description: "Fill the missing word in real example sentences." },
];

export function PracticeHub({
  start,
  keyboard = true,
}: {
  start: (kind: DrillKind, level: string) => Promise<Exercise[]>;
  keyboard?: boolean;
}) {
  const [kind, setKind] = useState<DrillKind | null>(null);
  const [level, setLevel] = useState("A2");
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[] | null>(null);

  async function begin(k: DrillKind, lv: string) {
    setLoading(true);
    setKind(k);
    setLevel(lv);
    try {
      const ex = await start(k, lv);
      if (!ex.length) {
        toast.error("No data for that drill — try another level");
        setKind(null);
      } else {
        setExercises(ex);
      }
    } catch {
      toast.error("Could not build a drill set");
      setKind(null);
    } finally {
      setLoading(false);
    }
  }

  if (exercises && kind) {
    return (
      <ExerciseRunner
        exercises={exercises}
        submit={async (_ex, responses) => {
          const r = await savePracticeResult(exercises, responses);
          const result: SubmitResult = {
            ...r,
            score: Math.round((r.correct / r.total) * 100) || 0,
            streak: 0,
          };
          return result;
        }}
        exportTitle={`practice-${kind}-${level}`}
        keyboard={keyboard}
        onDoneHref="/practice"
        onDoneLabel="Another drill →"
        passPercent={100}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {["A2", "B1", "B2", "C1", "C2"].map((lv) => (
          <Button
            key={lv}
            variant={level === lv ? "default" : "outline"}
            size="sm"
            onClick={() => setLevel(lv)}
          >
            {lv}
          </Button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {KINDS.map((k) => (
          <Card key={k.id} className="transition-colors hover:bg-accent/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{k.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">{k.description}</p>
              <Button
                size="sm"
                variant="outline"
                disabled={loading}
                onClick={() => begin(k.id, level)}
              >
                {loading && kind === k.id ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : null}
                Drill 10 · {level}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Every drill is generated live from the dictionary — the same exercise set
        never repeats. Finished sets can be exported for the quiz-renderer app.
      </p>
    </div>
  );
}
