"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Ear, Eye, PenLine, Sparkles, X } from "lucide-react";
import { toast } from "sonner";
import type { ReviewItem } from "@/lib/review";
import { normalizeRu, withStress } from "@/lib/russian";
import { gradeCard } from "@/app/actions/progress";
import { AudioButton } from "@/components/audio-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Phase = "prompt" | "revealed" | "done";

const RATINGS = [
  { id: 1, label: "Again", hint: "forgot it", tone: "border-red-500/40 hover:bg-red-500/10" },
  { id: 2, label: "Hard", hint: "barely", tone: "border-orange-500/40 hover:bg-orange-500/10" },
  { id: 3, label: "Good", hint: "knew it", tone: "border-green-600/40 hover:bg-green-500/10" },
  { id: 4, label: "Easy", hint: "instantly", tone: "border-blue-500/40 hover:bg-blue-500/10" },
] as const;

function kindLabel(kind: ReviewItem["kind"]) {
  switch (kind) {
    case "recog":
      return { icon: Eye, text: "Recognise" };
    case "produce":
      return { icon: PenLine, text: "Produce" };
    case "cloze":
      return { icon: PenLine, text: "Fill the blank" };
    case "audio":
      return { icon: Ear, text: "Listen" };
  }
}

export function ReviewRunner({ items }: { items: ReviewItem[] }) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("prompt");
  const [typed, setTyped] = useState("");
  const [blank, setBlank] = useState("");
  const [choice, setChoice] = useState<string | null>(null);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  const item = items[idx];

  const revealedCorrect = useMemo(() => {
    if (!item || phase !== "revealed") return false;
    switch (item.kind) {
      case "recog":
      case "audio":
        return choice === item.answerOptionId;
      case "produce":
        return normalizeRu(typed) === normalizeRu(item.bare);
      case "cloze":
        return item.cloze ? normalizeRu(blank) === normalizeRu(item.cloze.answer) : false;
    }
  }, [item, phase, choice, typed, blank]);

  if (!items.length) {
    return (
      <div className="rounded-xl border bg-card p-10 text-center">
        <Sparkles className="mx-auto size-8 text-primary" />
        <p className="mt-3 font-medium">Nothing to review right now.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Complete a lesson to add words to your deck, or come back when cards are due.
        </p>
        <Link href="/learn" className="mt-4 inline-block text-sm text-primary hover:underline">
          Go to lessons →
        </Link>
      </div>
    );
  }

  if (phase === "done" || !item) {
    return (
      <div className="rounded-xl border bg-card p-10 text-center">
        <div className="text-4xl font-semibold">{doneCount}</div>
        <p className="mt-1 text-muted-foreground">cards reviewed. До встре́чи!</p>
        <div className="mt-5 flex justify-center gap-2">
          <Link
            href="/dashboard"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Back to dashboard
          </Link>
          <Link
            href="/learn"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Continue learning
          </Link>
        </div>
      </div>
    );
  }

  const meta = kindLabel(item.kind);

  async function rate(rating: number) {
    try {
      await gradeCard({ cardId: item.cardId, rating });
    } catch {
      toast.error("Could not save the review");
      return;
    }
    setDoneCount((d) => d + 1);
    setIdx((i) => i + 1);
    setPhase("prompt");
    setTyped("");
    setBlank("");
    setChoice(null);
  }

  function reveal() {
    let correct = false;
    switch (item.kind) {
      case "recog":
      case "audio":
        correct = choice === item.answerOptionId;
        break;
      case "produce":
        correct = normalizeRu(typed) === normalizeRu(item.bare);
        break;
      case "cloze":
        correct = item.cloze ? normalizeRu(blank) === normalizeRu(item.cloze.answer) : false;
        break;
    }
    setWasCorrect(correct);
    setPhase("revealed");
  }

  const canReveal =
    item.kind === "recog" || item.kind === "audio"
      ? choice !== null
      : item.kind === "produce"
        ? typed.trim().length > 0
        : blank.trim().length > 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Progress value={(idx / items.length) * 100} />
        <span className="shrink-0 text-sm text-muted-foreground">
          {idx + 1} / {items.length}
        </span>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <meta.icon className="size-3.5" />
          {meta.text}
          {item.isNew ? (
            <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">new</span>
          ) : null}
        </div>

        <div className="mt-4 space-y-4">
          {item.kind === "recog" ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-semibold">{withStress(item.accented)}</span>
                <AudioButton text={item.bare} audioUrl={item.audio} />
              </div>
              <div className="grid gap-2">
                {(item.options ?? []).map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    disabled={phase === "revealed"}
                    onClick={() => setChoice(o.id)}
                    className={cn(
                      "rounded-lg border px-4 py-2.5 text-left transition-colors hover:bg-accent",
                      choice === o.id && "border-primary bg-primary/5",
                      phase === "revealed" &&
                        o.id === item.answerOptionId &&
                        "border-green-600 bg-green-500/10",
                    )}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {item.kind === "audio" ? (
            <>
              <div className="flex items-center gap-3">
                <AudioButton text={item.bare} audioUrl={item.audio} size="icon-lg" />
                <span className="text-sm text-muted-foreground">Listen — which word is it?</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(item.options ?? []).map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    disabled={phase === "revealed"}
                    onClick={() => setChoice(o.id)}
                    className={cn(
                      "rounded-lg border px-4 py-2.5 transition-colors hover:bg-accent",
                      choice === o.id && "border-primary bg-primary/5",
                      phase === "revealed" &&
                        o.id === item.answerOptionId &&
                        "border-green-600 bg-green-500/10",
                    )}
                  >
                    {withStress(o.label)}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {item.kind === "produce" ? (
            <>
              <p className="text-lg">Say it in Russian:</p>
              <p className="text-xl font-medium">{item.senses.join(", ")}</p>
              <Input
                value={typed}
                disabled={phase === "revealed"}
                onChange={(e) => setTyped(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canReveal && phase === "prompt") reveal();
                }}
                className="max-w-sm text-lg"
                placeholder="по-русски…"
                autoComplete="off"
              />
            </>
          ) : null}

          {item.kind === "cloze" && item.cloze ? (
            <ClozeView
              text={item.cloze.text}
              value={blank}
              disabled={phase === "revealed"}
              onChange={setBlank}
              onSubmit={() => canReveal && phase === "prompt" && reveal()}
            />
          ) : null}
        </div>

        {phase === "prompt" ? (
          <div className="mt-5 flex justify-end">
            <Button onClick={reveal} disabled={!canReveal}>
              <Check className="size-4" /> Show answer
            </Button>
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            <div
              className={cn(
                "rounded-lg border p-3 text-sm",
                revealedCorrect
                  ? "border-green-600/30 bg-green-500/10 text-green-700 dark:text-green-400"
                  : "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
              )}
            >
              <div className="flex items-center gap-2 font-medium">
                {wasCorrect || revealedCorrect ? <Check className="size-4" /> : <X className="size-4" />}
                {revealedCorrect
                  ? "Верно!"
                  : `Answer: ${withStress(item.kind === "cloze" && item.cloze ? item.cloze.answer : item.accented)}`}
              </div>
              {item.senses.length ? (
                <div className="mt-1 text-muted-foreground">{item.senses.join(", ")}</div>
              ) : null}
            </div>
            <p className="text-xs text-muted-foreground">How well did you know it?</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {RATINGS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => rate(r.id)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-center transition-colors",
                    r.tone,
                  )}
                >
                  <div className="text-sm font-medium">{r.label}</div>
                  <div className="text-xs text-muted-foreground">{r.hint}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ClozeView({
  text,
  value,
  disabled,
  onChange,
  onSubmit,
}: {
  text: string;
  value: string;
  disabled: boolean;
  onChange: (v: string) => void;
  onSubmit: () => void;
}) {
  const parts = text.split("{{blank}}");
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5 text-lg">
        <span className="whitespace-pre-wrap">{parts[0]}</span>
        <Input
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !disabled) onSubmit();
          }}
          className="inline-block w-40 text-center"
          autoComplete="off"
        />
        {parts[1] ? (
          <span className="whitespace-pre-wrap">
            {parts[1].split("\n").map((line, i) => (
              <span key={i} className={i === 0 ? "" : "block text-sm text-muted-foreground"}>
                {i === 0 ? line : line.replace(/^\*(.*)\*$/, "$1")}
              </span>
            ))}
          </span>
        ) : null}
      </div>
    </div>
  );
}
