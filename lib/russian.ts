/**
 * Russian text helpers shared by dictionary, lessons, and drills.
 *
 * The dictionary stores stress as an ASCII apostrophe placed AFTER the
 * stressed vowel ("сказа'ть"). For display we convert it to a combining
 * acute over the vowel (ска́та…): "сказа'ть" -> "сказа́ть".
 */

const ACUTE = "\u0301";
const CYRILLIC_VOWELS = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";

/** "сказа'ть" -> "сказа́ть" (combining acute after the stressed vowel).
 * Apostrophes NOT following a Cyrillic vowel (English "don't") are kept. */
export function withStress(s: string): string {
  let out = "";
  for (const ch of s) {
    if (ch === "'") {
      const prev = [...out].pop();
      if (prev && CYRILLIC_VOWELS.includes(prev) && !out.endsWith(ACUTE)) {
        out += ACUTE;
        continue;
      }
      out += ch;
    } else {
      out += ch;
    }
  }
  return out;
}

/** "сказа'ть" -> "сказать" — bare form used for typed-answer comparison. */
export function stripStress(s: string): string {
  return s.replace(/'/g, "");
}

/** Normalization for grading typed answers: lowercase, ё→е, trimmed. */
export function normalizeRu(s: string): string {
  return stripStress(s).toLowerCase().replace(/ё/g, "е").replace(/\s+/g, " ").trim();
}

export const POS_LABELS: Record<string, string> = {
  noun: "noun",
  verb: "verb",
  adjective: "adjective",
  adverb: "adverb",
  pronoun: "pronoun",
  other: "other",
  expression: "expression",
  preposition: "preposition",
  conjunction: "conjunction",
  participle: "participle",
  numeral: "numeral",
  interjection: "interjection",
  "predicative": "predicative",
};

export function posLabel(type: string | null | undefined): string {
  if (!type) return "other";
  return POS_LABELS[type] ?? type;
}

const CASES = ["nominative", "genitive", "dative", "accusative", "instrumental", "prepositional"] as const;

const CASE_CODES: Record<(typeof CASES)[number], string> = {
  nominative: "nom",
  genitive: "gen",
  dative: "dat",
  accusative: "acc",
  instrumental: "inst",
  prepositional: "prep",
};

const PERSONS: Record<string, string> = {
  sg1: "я",
  sg2: "ты",
  sg3: "он / она́ / оно́",
  pl1: "мы",
  pl2: "вы",
  pl3: "они́",
};

const PAST: Record<string, string> = {
  m: "он",
  f: "она́",
  n: "оно́",
  pl: "они́",
};

const SHORT: Record<string, string> = { m: "m", f: "f", n: "n", pl: "pl" };

export type FormEntry = { formType: string; form: string; formBare: string };

export type FormTables = {
  /** Noun: singular by case. */
  nounSingular?: { label: string; form: string; formBare: string }[];
  nounPlural?: { label: string; form: string; formBare: string }[];
  /** Adjective: case × gender grid rows. */
  adjectiveGrid?: { case: string; m?: FormEntry; f?: FormEntry; n?: FormEntry; pl?: FormEntry }[];
  adjectiveShort?: { label: string; form: string; formBare: string }[];
  adjectiveComparative?: { label: string; form: string; formBare: string }[];
  verbPresentFuture?: { label: string; form: string; formBare: string }[];
  verbPast?: { label: string; form: string; formBare: string }[];
  verbImperative?: { label: string; form: string; formBare: string }[];
  verbParticiples?: { label: string; form: string; formBare: string }[];
  verbGerunds?: { label: string; form: string; formBare: string }[];
  other?: { label: string; form: string; formBare: string }[];
};

function row(formType: string, entries: Map<string, FormEntry>, label: string) {
  const e = entries.get(formType);
  return e ? { label, form: withStress(e.form), formBare: e.formBare } : undefined;
}

/** Build display tables from the dictionary's 62 form types. */
export function buildFormTables(entries: FormEntry[], type: string | null): FormTables {
  const byType = new Map<string, FormEntry>();
  // Lower position wins when a form type repeats.
  for (const e of entries) {
    const prev = byType.get(e.formType);
    if (!prev) byType.set(e.formType, e);
  }
  const t: FormTables = {};

  if (type === "noun") {
    t.nounSingular = CASES.map((c) => row(`ru_noun_sg_${CASE_CODES[c]}`, byType, c)).filter(
      Boolean,
    ) as FormTables["nounSingular"];
    t.nounPlural = CASES.map((c) => row(`ru_noun_pl_${CASE_CODES[c]}`, byType, c)).filter(
      Boolean,
    ) as FormTables["nounPlural"];
  }

  if (type === "adjective") {
    t.adjectiveGrid = CASES.map((c) => ({
      case: c,
      m: byType.get(`ru_adj_m_${CASE_CODES[c]}`),
      f: byType.get(`ru_adj_f_${CASE_CODES[c]}`),
      n: byType.get(`ru_adj_n_${CASE_CODES[c]}`),
      pl: byType.get(`ru_adj_pl_${CASE_CODES[c]}`),
    })).filter((r) => r.m || r.f || r.n || r.pl);
    const short = (["m", "f", "n", "pl"] as const)
      .map((g) => row(`ru_adj_short_${g}`, byType, `short ${SHORT[g]}`))
      .filter(Boolean) as FormTables["adjectiveShort"];
    if (short && short.length) t.adjectiveShort = short;
    const comp = [
      row("ru_adj_comparative", byType, "comparative"),
      row("ru_adj_superlative", byType, "superlative"),
    ].filter(Boolean) as FormTables["adjectiveComparative"];
    if (comp && comp.length) t.adjectiveComparative = comp;
  }

  if (type === "verb") {
    t.verbPresentFuture = Object.entries(PERSONS)
      .map(([k, label]) => row(`ru_verb_presfut_${k}`, byType, label))
      .filter(Boolean) as FormTables["verbPresentFuture"];
    t.verbPast = Object.entries(PAST)
      .map(([k, label]) => row(`ru_verb_past_${k}`, byType, label))
      .filter(Boolean) as FormTables["verbPast"];
    const imperative = [
      row("ru_verb_imperative_sg", byType, "imperative (ты)"),
      row("ru_verb_imperative_pl", byType, "imperative (вы)"),
    ].filter(Boolean) as FormTables["verbImperative"];
    if (imperative && imperative.length) t.verbImperative = imperative;
    const participles = [
      row("ru_verb_participle_active_present", byType, "active present"),
      row("ru_verb_participle_active_past", byType, "active past"),
      row("ru_verb_participle_passive_present", byType, "passive present"),
      row("ru_verb_participle_passive_past", byType, "passive past"),
    ].filter(Boolean) as FormTables["verbParticiples"];
    if (participles && participles.length) t.verbParticiples = participles;
    const gerunds = [
      row("ru_verb_gerund_present", byType, "imperfective"),
      row("ru_verb_gerund_past", byType, "perfective"),
    ].filter(Boolean) as FormTables["verbGerunds"];
    if (gerunds && gerunds.length) t.verbGerunds = gerunds;
  }

  const known = new Set([
    ...CASES.flatMap((c) => [`ru_noun_sg_${CASE_CODES[c]}`, `ru_noun_pl_${CASE_CODES[c]}`]),
    ...CASES.flatMap((c) =>
      ["m", "f", "n", "pl"].map((g) => `ru_adj_${g}_${CASE_CODES[c]}`),
    ),
    ...["m", "f", "n", "pl"].map((g) => `ru_adj_short_${g}`),
    "ru_adj_comparative",
    "ru_adj_superlative",
    ...Object.keys(PERSONS).map((k) => `ru_verb_presfut_${k}`),
    ...Object.keys(PAST).map((k) => `ru_verb_past_${k}`),
    "ru_verb_imperative_sg",
    "ru_verb_imperative_pl",
    "ru_verb_participle_active_present",
    "ru_verb_participle_active_past",
    "ru_verb_participle_passive_present",
    "ru_verb_participle_passive_past",
    "ru_verb_gerund_present",
    "ru_verb_gerund_past",
    "ru_base",
  ]);
  const other = entries
    .filter((e) => !known.has(e.formType))
    .map((e) => ({ label: e.formType, form: withStress(e.form), formBare: e.formBare }));
  if (other.length) t.other = other;
  return t;
}

export const GENDER_LABELS: Record<string, string> = {
  m: "masculine",
  f: "feminine",
  n: "neuter",
  pl: "plural-only",
};

export const ASPECT_LABELS: Record<string, string> = {
  imperfective: "imperfective",
  perfective: "perfective",
  both: "two-handed (monodirectional pair)",
};
