"use client";

import { useEffect, useMemo, useState } from "react";
import { Volume2, X } from "lucide-react";

import { StrokeLetterPlayer } from "@/components/stroke-letter-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ALPHABET, LETTER_COUNT_NOTE, getLetterStrokes, type LetterStyle } from "@/content/cyrillic-strokes";
import { cn } from "@/lib/utils";

function speakRu(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ru-RU";
  u.rate = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const ru = voices.find((v) => v.lang.startsWith("ru"));
  if (ru) u.voice = ru;
  window.speechSynthesis.speak(u);
}

type Selection = { upper: string; lower: string; isUpper: boolean };

function AlphabetGrid({
  selected,
  onSelect,
}: {
  selected: Selection | null;
  onSelect: (s: Selection) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-11">
      {ALPHABET.map((l) => {
        const active = selected?.upper === l.upper;
        return (
          <button
            key={l.upper}
            type="button"
            onClick={() => onSelect({ upper: l.upper, lower: l.lower, isUpper: false })}
            className={cn(
              "group flex aspect-[5/6] flex-col items-center justify-center rounded-xl border border-border/80 bg-card transition-all",
              "hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm",
              "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
              active && "-translate-y-0.5 border-foreground/40 bg-accent shadow-sm ring-1 ring-foreground/15",
            )}
          >
            <span className="text-xl leading-none sm:text-2xl">{l.upper}</span>
            <span className="text-lg leading-tight text-muted-foreground sm:text-xl">{l.lower}</span>
            <span className="mt-0.5 max-w-full truncate px-1 text-[10px] text-muted-foreground">
              {l.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function DetailPanel({
  sel,
  style,
  onCaseChange,
  onClose,
}: {
  sel: Selection;
  style: LetterStyle;
  onCaseChange: (isUpper: boolean) => void;
  onClose: () => void;
}) {
  const info = useMemo(() => ALPHABET.find((l) => l.upper === sel.upper), [sel.upper]);
  const char = sel.isUpper ? sel.upper : sel.lower;
  const strokes = getLetterStrokes(char, style);

  return (
    <Card className="min-h-[460px] overflow-visible">
      <CardHeader className="relative">
        <CardTitle className="flex min-h-8 items-center gap-2 pr-16">
          <span className="text-3xl">{sel.upper}</span>
          <span className="text-2xl text-muted-foreground">{sel.lower}</span>
          <span className="text-base font-normal text-muted-foreground">— {info?.name}</span>
        </CardTitle>
        <div className="mt-1 flex min-h-6 flex-wrap gap-1 pr-16">
          <Badge variant="secondary" className="capitalize">
            {style}
          </Badge>
          <Badge variant="outline">{sel.isUpper ? "uppercase" : "lowercase"}</Badge>
          <Badge variant="outline">
            {strokes?.length ? `${strokes.length} stroke${strokes.length === 1 ? "" : "s"}` : "—"}
          </Badge>
        </div>
        <CardAction className="absolute top-3 right-3 flex gap-0.5">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => speakRu(`${sel.upper}, ${sel.lower}`)}
            title="Pronounce"
          >
            <Volume2 className="size-4" />
          </Button>
          <Button variant="ghost" size="icon-sm" onClick={onClose} title="Close">
            <X className="size-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3 pb-5">
        <div className="flex h-[250px] w-full items-start justify-center">
          <StrokeLetterPlayer key={`${char}-${style}`} char={char} style={style} size={210} autoPlay />
        </div>

        <div className="flex rounded-lg bg-muted p-0.5">
          {([false, true] as const).map((isUpper) => (
            <button
              key={String(isUpper)}
              type="button"
              onClick={() => onCaseChange(isUpper)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                sel.isUpper === isUpper
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isUpper ? "Uppercase" : "Lowercase"}
            </button>
          ))}
        </div>

        <div className="w-full space-y-1 text-sm">
          <p>
            <span className="font-medium">Sounds like: </span>
            <span className="text-muted-foreground">{info?.sound}</span>
          </p>
          {info?.hint ? (
            <p className="text-muted-foreground">{info.hint}</p>
          ) : null}
        </div>
        <p className="text-[11px] text-muted-foreground/70">{LETTER_COUNT_NOTE}</p>
      </CardContent>
    </Card>
  );
}

const TIPS: { title: string; body: string }[] = [
  {
    title: "Top to bottom, left to right",
    body: "Russian stroke order follows the same rules you learned in school: start strokes at the top, move left to right, and finish bowls with a small exit hook that lets the next letter connect.",
  },
  {
    title: "False friends everywhere",
    body: "В sounds like V, Н sounds like N, Р sounds like R, С sounds like S, and У sounds like oo. Train your eye early — the sooner you stop reading them as B, H, P, C and Y, the faster everything else gets.",
  },
  {
    title: "Cursive is a different alphabet",
    body: "In handwriting, и ш м л п т all become strings of similar-looking loops (шшш looks like uuuu). Russians mostly write in cursive, so once you can read print, spend a few minutes a day on the Cursive tab.",
  },
  {
    title: "The quiet letters",
    body: "ъ (hard sign) and ь (soft sign) have no sound of their own. ь softens the consonant before it (ль is a soft l), while ъ just separates a prefix from the rest of the word.",
  },
];

export function HandwritingExplorer() {
  const [style, setStyle] = useState<LetterStyle>("print");
  const [selected, setSelected] = useState<Selection | null>(null);

  useEffect(() => {
    if (!selected) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg bg-muted p-0.5">
          {(["print", "cursive"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStyle(s)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium capitalize transition-colors",
                style === s
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s === "print" ? "Print" : "Cursive (прописи)"}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Click any letter to watch it written stroke by stroke.
        </p>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <AlphabetGrid selected={selected} onSelect={setSelected} />
        <div className="lg:sticky lg:top-20">
          {selected ? (
            <DetailPanel
              sel={selected}
              style={style}
              onCaseChange={(isUpper) => setSelected({ ...selected, isUpper })}
              onClose={() => setSelected(null)}
            />
          ) : (
            <Card className="min-h-[460px]">
              <CardHeader>
                <CardTitle className="text-muted-foreground">Stroke order</CardTitle>
              </CardHeader>
              <CardContent className="flex h-[300px] flex-col items-center justify-center gap-2 text-center">
                <p className="text-sm text-muted-foreground">Select a letter from the chart</p>
                <p className="text-xs text-muted-foreground/70">
                  The stroke animation appears here
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {TIPS.map((t) => (
          <Card key={t.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{t.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
