import { prisma } from "@/lib/prisma";
import type { Exercise, Option } from "@/lib/curriculum/types";
import { withStress } from "@/lib/russian";

export type DrillKind =
  | "conjugation"
  | "noun-case"
  | "adjective-case"
  | "comparative"
  | "cloze";

export interface DrillSpec {
  kind: DrillKind;
  count: number;
  /** Restrict verb slots, e.g. ["presfut_sg1", "past_f"]. */
  slots?: string[];
  /** Restrict noun/adjective cases, e.g. ["gen", "dat"]. */
  cases?: string[];
  /** Prefer (and only use) these dictionary word ids. */
  wordIds?: number[];
  /** Sentence CEFR level for cloze. */
  sentenceLevel?: string;
}

export interface DrillContext {
  lessonId: string;
  topicId: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CASE_LABELS: Record<string, string> = {
  nom: "nominative",
  gen: "genitive",
  dat: "dative",
  acc: "accusative",
  inst: "instrumental",
  prep: "prepositional",
};

const PERSON_LABELS: Record<string, string> = {
  presfut_sg1: "я",
  presfut_sg2: "ты",
  presfut_sg3: "он/она́",
  presfut_pl1: "мы",
  presfut_pl2: "вы",
  presfut_pl3: "они́",
  past_m: "он (past)",
  past_f: "она́ (past)",
  past_n: "оно́ (past)",
  past_pl: "они́ (past)",
  imperative_sg: "imperative — ты",
  imperative_pl: "imperative — вы",
};

function typeIn(
  ctx: DrillContext,
  n: number,
  prompt: string,
  answer: string,
  explanation: string,
): Exercise {
  return {
    id: `${ctx.lessonId}-gen-${ctx.topicId}-${n}`,
    type: "short-answer",
    text: prompt,
    answer,
    explanation,
    points: 1,
  };
}

/** Conjugation drills from ru_verb_* forms. */
export async function generateConjugationDrills(
  spec: DrillSpec,
  ctx: DrillContext,
): Promise<Exercise[]> {
  const slots = spec.slots ?? Object.keys(PERSON_LABELS);
  const verbs = await prisma.verb.findMany({
    where: {
      word: {
        disabled: false,
        rank: { not: null, lte: 2500 },
        ...(spec.wordIds?.length ? { id: { in: spec.wordIds } } : {}),
      },
    },
    include: { word: { include: { forms: true } } },
    orderBy: { word: { rank: "asc" } },
    take: 120,
  });
  const usable = verbs.filter((v) => v.word.forms.length > 0);
  if (!usable.length) return [];

  const exercises: Exercise[] = [];
  const pool = shuffle(usable);
  let guard = 0;
  for (let i = 0; i < spec.count && pool.length; ) {
    if (++guard > spec.count * 12) break;
    const verb = pool[i % pool.length];
    // Only use slots this verb actually has.
    const available = slots.filter((slot) =>
      verb.word.forms.some((f) => f.formType === `ru_verb_${slot}`),
    );
    if (!available.length) {
      pool.splice(i % pool.length, 1);
      continue;
    }
    const slot = available[Math.floor(Math.random() * available.length)];
    const form = verb.word.forms.find((f) => f.formType === `ru_verb_${slot}`)!;
    const prompt = `**${withStress(verb.word.accented)}** — form for **${PERSON_LABELS[slot] ?? slot}**`;
    exercises.push(
      typeIn(
        ctx,
        exercises.length,
        prompt,
        form.formBare,
        `${withStress(verb.word.accented)} → ${PERSON_LABELS[slot] ?? slot}: ${withStress(form.form)}`,
      ),
    );
    i++;
  }
  return exercises.slice(0, spec.count);
}

/** Noun case drills from ru_noun_sg/pl_* forms. */
export async function generateNounCaseDrills(
  spec: DrillSpec,
  ctx: DrillContext,
): Promise<Exercise[]> {
  const cases = spec.cases ?? Object.keys(CASE_LABELS);
  const numbers = ["sg", "pl"] as const;
  const nouns = await prisma.noun.findMany({
    where: {
      word: {
        disabled: false,
        rank: { not: null, lte: 2000 },
        ...(spec.wordIds?.length ? { id: { in: spec.wordIds } } : {}),
      },
      sgOnly: false,
      plOnly: false,
    },
    include: { word: { include: { forms: true } } },
    orderBy: { word: { rank: "asc" } },
    take: 150,
  });
  const usable = nouns.filter((n) => n.word.forms.length > 0 && n.gender !== "pl");
  if (!usable.length) return [];

  const exercises: Exercise[] = [];
  const pool = shuffle(usable);
  for (let i = 0; i < spec.count * 3 && exercises.length < spec.count; i++) {
    if (i >= pool.length * 3) break;
    const noun = pool[i % pool.length];
    const num = numbers[Math.floor(Math.random() * numbers.length)];
    const cs = cases[Math.floor(Math.random() * cases.length)];
    const formType = `ru_noun_${num}_${cs}`;
    const form = noun.word.forms.find((f) => f.formType === formType);
    if (!form || form.formBare === noun.word.bare && num === "sg" && cs === "nom") continue;
    const prompt = `**${withStress(noun.word.accented)}** (${noun.gender}) — **${num === "sg" ? "singular" : "plural"} ${CASE_LABELS[cs]}**`;
    exercises.push(
      typeIn(
        ctx,
        exercises.length,
        prompt,
        form.formBare,
        `${withStress(noun.word.accented)} → ${num === "sg" ? "sg" : "pl"} ${CASE_LABELS[cs]}: ${withStress(form.form)}`,
      ),
    );
  }
  return exercises.slice(0, spec.count);
}

/** Adjective case drills from ru_adj_* forms. */
export async function generateAdjectiveCaseDrills(
  spec: DrillSpec,
  ctx: DrillContext,
): Promise<Exercise[]> {
  const cases = spec.cases ?? Object.keys(CASE_LABELS);
  const genders = ["m", "f", "n", "pl"] as const;
  const adjectives = await prisma.adjective.findMany({
    where: {
      word: {
        disabled: false,
        rank: { not: null, lte: 2000 },
        ...(spec.wordIds?.length ? { id: { in: spec.wordIds } } : {}),
      },
    },
    include: { word: { include: { forms: true } } },
    orderBy: { word: { rank: "asc" } },
    take: 150,
  });
  const usable = adjectives.filter((a) => a.word.forms.length > 0);
  if (!usable.length) return [];

  const exercises: Exercise[] = [];
  const pool = shuffle(usable);
  for (let i = 0; i < spec.count * 3 && exercises.length < spec.count; i++) {
    const adj = pool[i % pool.length];
    const g = genders[Math.floor(Math.random() * genders.length)];
    const cs = cases[Math.floor(Math.random() * cases.length)];
    const form = adj.word.forms.find((f) => f.formType === `ru_adj_${g}_${cs}`);
    if (!form || form.formBare === adj.word.bare) continue;
    const gLabel = g === "m" ? "masculine" : g === "f" ? "feminine" : g === "n" ? "neuter" : "plural";
    const prompt = `**${withStress(adj.word.accented)}** — **${gLabel} ${CASE_LABELS[cs]}**`;
    exercises.push(
      typeIn(
        ctx,
        exercises.length,
        prompt,
        form.formBare,
        `${withStress(adj.word.accented)} → ${gLabel} ${CASE_LABELS[cs]}: ${withStress(form.form)}`,
      ),
    );
  }
  return exercises.slice(0, spec.count);
}

/** Comparative formation drills. */
export async function generateComparativeDrills(
  spec: DrillSpec,
  ctx: DrillContext,
): Promise<Exercise[]> {
  const adjectives = await prisma.adjective.findMany({
    where: {
      incomparable: null,
      word: {
        disabled: false,
        rank: { not: null, lte: 3000 },
        ...(spec.wordIds?.length ? { id: { in: spec.wordIds } } : {}),
      },
    },
    include: { word: { include: { forms: { where: { formType: "ru_adj_comparative" } } } } },
    orderBy: { word: { rank: "asc" } },
    take: 120,
  });
  const usable = adjectives.filter((a) => a.word.forms.length > 0);
  const exercises: Exercise[] = [];
  for (const adj of shuffle(usable).slice(0, spec.count)) {
    const form = adj.word.forms[0];
    exercises.push(
      typeIn(
        ctx,
        exercises.length,
        `**${withStress(adj.word.accented)}** — comparative`,
        form.formBare,
        `${withStress(adj.word.accented)} → ${withStress(form.form)}`,
      ),
    );
  }
  return exercises;
}

/** Sentence cloze drills from level-tagged example sentences. */
export async function generateClozeDrills(
  spec: DrillSpec,
  ctx: DrillContext,
): Promise<Exercise[]> {
  const wordIds = spec.wordIds ?? [];
  if (!wordIds.length) return [];
  const rows = await prisma.sentenceWord.findMany({
    where: {
      wordId: { in: wordIds },
      sentence: {
        disabled: false,
        translation: { is: { tlEn: { not: "" } } },
        ...(spec.sentenceLevel ? { level: { in: [spec.sentenceLevel, ""] } } : {}),
      },
    },
    include: {
      word: { select: { bare: true, accented: true } },
      sentence: { include: { translation: { select: { tlEn: true } } } },
    },
    take: 200,
  });
  const exercises: Exercise[] = [];
  const seenSentences = new Set<number>();
  for (const row of shuffle(rows)) {
    if (exercises.length >= spec.count) break;
    if (seenSentences.has(row.sentenceId)) continue;
    seenSentences.add(row.sentenceId);
    const ru = row.sentence.ru;
    let s = row.start;
    let e = row.start + row.length;
    while (s < e && !/[а-яёА-ЯЁ]/.test(ru[s] ?? "")) s++;
    while (e > s && !/[а-яёА-ЯЁ]/.test(ru[e - 1] ?? "")) e--;
    if (e <= s) continue;
    const answer = ru.slice(s, e);
    if (!answer) continue;
    const text = `${ru.slice(0, s)}{{blank}}${ru.slice(e)}\n\n*${row.sentence.translation?.tlEn ?? ""}*`;
    exercises.push({
      id: `${ctx.lessonId}-gen-${ctx.topicId}-cloze-${exercises.length}`,
      type: "fill-blank",
      text,
      answers: [answer],
      caseInsensitive: true,
      explanation: `${withStress(row.sentence.ru)}`,
      points: 1,
    });
  }
  return exercises;
}

/** Run a set of drill specs. */
export async function generateDrills(
  specs: DrillSpec[],
  ctx: DrillContext,
): Promise<Exercise[]> {
  const out: Exercise[] = [];
  for (const spec of specs) {
    switch (spec.kind) {
      case "conjugation":
        out.push(...(await generateConjugationDrills(spec, ctx)));
        break;
      case "noun-case":
        out.push(...(await generateNounCaseDrills(spec, ctx)));
        break;
      case "adjective-case":
        out.push(...(await generateAdjectiveCaseDrills(spec, ctx)));
        break;
      case "comparative":
        out.push(...(await generateComparativeDrills(spec, ctx)));
        break;
      case "cloze":
        out.push(...(await generateClozeDrills(spec, ctx)));
        break;
    }
  }
  return out;
}

export function option(id: string, label: string): Option {
  return { id, label };
}
