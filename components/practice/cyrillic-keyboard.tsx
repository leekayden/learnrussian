"use client";

import { useMemo, useRef, useState } from "react";
import { Keyboard } from "lucide-react";

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

const PALETTE = [
  "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й",
  "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф",
  "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я",
];

/** Greedy longest-match transliteration of trailing Latin input. */
export function translitTail(value: string, maxLook = 4): { value: string; changed: boolean } {
  const tailStart = Math.max(0, value.length - maxLook - 1);
  let head = value.slice(0, tailStart);
  let tail = value.slice(tailStart);
  let changed = false;
  // Walk the tail; at each position try the longest Latin run that maps.
  let i = 0;
  let out = "";
  while (i < tail.length) {
    let matched = "";
    for (let len = 4; len >= 1; len--) {
      const sub = tail.slice(i, i + len).toLowerCase();
      if (sub.length === len && RU_MAP[sub]) {
        // Preserve capitalisation of the first letter.
        const mapped = RU_MAP[sub];
        matched =
          tail[i] === tail[i].toUpperCase() && tail[i].toLowerCase() !== tail[i]
            ? mapped.toUpperCase()
            : mapped;
        i += len;
        changed = true;
        break;
      }
    }
    if (!matched) {
      out += tail[i];
      i += 1;
    } else {
      out += matched;
    }
  }
  // If nothing converted, keep the original tail.
  return { value: changed ? head + out : value, changed };
}

/**
 * Cyrillic input helper: a click-to-insert letter palette plus a Latin
 * transliteration IME bound to a controlled input.
 */
export function CyrillicKeyboard({
  targetRef,
  value,
  onChange,
  enabled = true,
}: {
  targetRef: React.RefObject<HTMLInputElement | null>;
  value: string;
  onChange: (next: string) => void;
  enabled?: boolean;
}) {
  const [open, setOpen] = useState(false);

  if (!enabled) return null;

  function insertAtCursor(letter: string) {
    const el = targetRef.current;
    if (!el) {
      onChange(value + letter);
      return;
    }
    const start = el.selectionStart ?? value.length;
    const end = el.selectionEnd ?? value.length;
    const next = value.slice(0, start) + letter + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + letter.length, start + letter.length);
    });
  }

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        title="Toggle Cyrillic keyboard (you can also type with Latin transliteration: shch→щ, zh→ж, ya→я …)"
      >
        <Keyboard className="size-3.5" />
        Русская клавиатура
      </button>
      {open ? (
        <div className="mt-2 flex max-w-md flex-wrap gap-1 rounded-lg border bg-muted/40 p-2">
          {PALETTE.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => insertAtCursor(letter)}
              className="h-8 w-8 rounded border bg-card text-sm hover:bg-accent"
            >
              {letter}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Hook: wraps onChange to apply the translit IME to typed input. */
export function useTranslit(onChange: (next: string) => void) {
  const lastValue = useRef("");
  return useMemo(
    () => (next: string) => {
      // Only apply transliteration when Latin letters were just added.
      if (next.length > lastValue.current.length) {
        const { value, changed } = translitTail(next);
        lastValue.current = value;
        onChange(changed ? value : next);
        return;
      }
      lastValue.current = next;
      onChange(next);
    },
    [onChange],
  );
}
