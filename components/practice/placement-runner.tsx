"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import type { Exercise } from "@/lib/curriculum/types";
import type { PlacementResult } from "@/app/actions/practice";
import { isCorrect, type ExerciseResponse } from "@/lib/curriculum/grade";
import { ExerciseRunner, Md } from "@/components/practice/exercise-runner";
import { Button } from "@/components/ui/button";

export function PlacementRunner({
  exercises,
  submit,
}: {
  exercises: Exercise[];
  submit: (exercises: Exercise[], responses: Record<string, ExerciseResponse>) => Promise<PlacementResult>;
}) {
  const [result, setResult] = useState<PlacementResult | null>(null);

  if (result) {
    const levelCopy: Record<string, string> = {
      a2: "Start at A2 — the foundations units will consolidate everything.",
      b1: "Strong A2! Start at B1 — plurals, participles and complex sentences await.",
      b2: "Impressive. Start at B2 — aspect semantics, indirect speech, style.",
      c1: "The placement tops out at B2 — take the B2 exam in Learn to unlock C1.",
    };
    return (
      <div className="rounded-xl border bg-card p-8 text-center">
        <div className="text-5xl font-semibold">{result.score}%</div>
        <p className="mt-3 text-lg font-medium">
          Recommended start: <span className="text-primary">{result.recommendedLevel.toUpperCase()}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          A2 {result.a2Score}% · B1 {result.b1Score}% · B2 {result.b2Score}%
        </p>
        <p className="mt-4 text-sm">{levelCopy[result.recommendedLevel]}</p>
        <Link href="/dashboard" className="mt-6 inline-block">
          <Button>
            To the dashboard <ChevronRight className="size-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <ExerciseRunner
      exercises={exercises}
      submit={async (ex, responses) => {
        const r = await submit(ex, responses);
        setResult(r);
        return {
          score: r.score,
          correct: r.score,
          total: 100,
          xpEarned: 0,
          streak: 0,
          passed: true,
        };
      }}
      passPercent={100}
    />
  );
}
