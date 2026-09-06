import type { Exercise } from "@/lib/curriculum/types";
import { normalizeRu } from "@/lib/russian";

export type ExerciseResponse =
  | string // single: option id
  | string[] // multiple: option ids / ordering: ordered ids
  | boolean
  | Record<string, string>; // matching

/** Pure grading shared by the client (instant feedback) and server actions. */
export function isCorrect(ex: Exercise, response: ExerciseResponse): boolean {
  switch (ex.type) {
    case "single":
      return typeof response === "string" && response === ex.answer;
    case "multiple": {
      if (!Array.isArray(response)) return false;
      const a = [...response].sort().join(",");
      const b = [...ex.answers].sort().join(",");
      return a === b;
    }
    case "true-false":
      return response === ex.answer;
    case "short-answer": {
      if (typeof response !== "string") return false;
      const accepted = [ex.answer, ...(ex.accept ?? [])].map(normalizeRu);
      return accepted.includes(normalizeRu(response));
    }
    case "ordering":
      return (
        Array.isArray(response) &&
        response.length === ex.answer.length &&
        response.every((id, i) => id === ex.answer[i])
      );
    case "fill-blank": {
      if (typeof response !== "string") return false;
      const parts = response.split("\u0000"); // blanks joined with NUL by runner
      const canonical = ex.answers.map(normalizeRu);
      return canonical.every((ans, i) => {
        const given = normalizeRu(parts[i] ?? "");
        if (!given) return false;
        if (given === ans) return true;
        return (ex.accept?.[i] ?? []).some((alt) => normalizeRu(alt) === given);
      });
    }
    case "matching": {
      if (typeof response !== "object" || response === null || Array.isArray(response))
        return false;
      return Object.entries(ex.answer).every(([p, r]) => response[p] === r);
    }
    default:
      return false;
  }
}

/** Split a fill-blank text into [before, "{{blank}}", between, ...] segments. */
export function fillBlankSegments(text: string): { before: string; blanks: string[] } {
  const blanks: string[] = [];
  let rest = text;
  let before = "";
  const re = /\{\{blank\}\}/;
  const first = rest.search(re);
  if (first >= 0) before = rest.slice(0, first);
  while (re.test(rest)) {
    rest = rest.replace(re, "");
    const next = rest.search(re);
    if (next >= 0) {
      blanks.push(rest.slice(0, next));
      rest = rest.slice(next);
    } else {
      blanks.push(rest);
      rest = "";
    }
  }
  return { before, blanks };
}

/** Count blanks in a fill-blank text. */
export function countBlanks(text: string): number {
  return (text.match(/\{\{blank\}\}/g) ?? []).length;
}
