"use client";

import { useState } from "react";
import { CornerDownLeft, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

// Ported from quiz-renderer lib/translit.ts — greedy longest-match Latin→Cyrillic.
const RU_MAP: Record<string, string> = {
  shch: "щ",
  sch: "щ",
  zh: "ж",
  kh: "х",
  ts: "ц",
  ch: "ч",
  sh: "ш",
  ya: "я",
  yu: "ю",
  yo: "ё",
  ja: "я",
  ju: "ю",
  jo: "ё",
  ye: "е",
  a: "а",
  b: "б",
  v: "в",
  g: "г",
  d: "д",
  e: "е",
  z: "з",
  i: "и",
  y: "ы",
  k: "к",
  l: "л",
  m: "м",
  n: "н",
  o: "о",
  p: "п",
  r: "р",
  s: "с",
  t: "т",
  u: "у",
  f: "ф",
  h: "х",
  c: "ц",
  w: "в",
  x: "кс",
  j: "й",
};

const RU_MAX = Math.max(...Object.keys(RU_MAP).map((k) => k.length));

export const RUSSIAN_PALETTE = [
  "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й",
  "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф",
  "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я",
];

/** Greedy longest-match over RU_MAP; unknown characters pass through. */
export function transliterate(input: string): string {
  let out = "";
  let i = 0;
  while (i < input.length) {
    let matched = false;
    for (let len = Math.min(RU_MAX, input.length - i); len >= 1; len--) {
      const key = input.slice(i, i + len).toLowerCase();
      if (Object.prototype.hasOwnProperty.call(RU_MAP, key)) {
        out += RU_MAP[key];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += input[i];
      i++;
    }
  }
  return out;
}

/**
 * Russian keyboard helper (port of quiz-renderer's VirtualKeyboard):
 * a draft box where you type Latin and watch the live Cyrillic conversion,
 * plus a click-to-insert letter palette. Inserted text is appended to the
 * target answer via onInsert.
 */
export function RuKeyboard({
  onInsert,
  disabled,
  defaultOpen = false,
}: {
  onInsert: (text: string) => void;
  disabled?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [draft, setDraft] = useState("");

  const converted = transliterate(draft);

  function insertAndClear() {
    if (!converted) return;
    onInsert(converted);
    setDraft("");
  }

  return (
    <div className="mt-1.5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        disabled={disabled}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
          open && "border-primary text-primary",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <Languages className="size-3.5" />
        Русская клавиатура
      </button>

      {open ? (
        <div className="mt-2 space-y-3 rounded-lg border border-border bg-muted/30 p-3">
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  insertAndClear();
                }
              }}
              placeholder="privet, shch, ponyal…"
              className="w-44 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <span className="min-h-[1.75rem] flex-1 truncate rounded-md border border-primary/30 bg-background px-2.5 py-1 text-sm font-medium">
              {converted || <span className="text-muted-foreground">…</span>}
            </span>
            <button
              type="button"
              onClick={insertAndClear}
              disabled={!converted}
              title="Append to your answer"
              className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium disabled:opacity-50"
            >
              <CornerDownLeft className="size-3.5" />
              Вставить
            </button>
          </div>

          <div className="flex flex-wrap gap-1">
            {RUSSIAN_PALETTE.map((ch) => (
              <button
                key={ch}
                type="button"
                onClick={() => onInsert(ch)}
                className="flex h-7 w-7 items-center justify-center rounded border border-border bg-background text-sm hover:border-primary hover:bg-muted"
              >
                {ch}
              </button>
            ))}
          </div>

          <p className="text-[11px] text-muted-foreground">
            Type Latin (&laquo;privet&raquo;, &laquo;shch&raquo;, &laquo;ponyal&raquo;), press
            Enter or Вставить to append it to your answer — or tap letters directly.
          </p>
        </div>
      ) : null}
    </div>
  );
}
