import { prisma } from "@/lib/prisma";
import { buildFormTables, stripStress, type FormEntry } from "@/lib/russian";

export type SearchResult = {
  id: number;
  bare: string;
  accented: string;
  type: string | null;
  level: string | null;
  rank: number | null;
  senses: string[];
};

const isCyrillic = (s: string) => /[\u0400-\u04FF]/.test(s);

/** Fold a user query / stored form to a comparable key: no stress marks,
 * ё→е, lowercase, trimmed. */
function foldRu(s: string): string {
  return stripStress(s).toLowerCase().replace(/ё/g, "е").trim();
}

/**
 * Relevance tiers (higher wins; frequency `rank` breaks ties):
 *   100  bare is exactly the query
 *    98  accented form (stress folded) is exactly the query
 *    90  bare starts with the query ("сказ" → "сказать")
 *    82  an inflected form (words_forms) is exactly the query ("сказала")
 *    72  an inflected form starts with the query
 *    60  bare contains the query ("сказ" → "пересказ")
 *    48  an English gloss starts with the query ("boo" → "book")
 *    44  an English gloss has the query at a word boundary
 *    38  an English gloss contains the query
 *    28  usage_en contains the query
 */
function scoreCandidate(
  w: { bare: string; accented: string; forms: { formBare: string; form: string }[]; senses: { tl: string }[]; usageEn: string | null },
  q: string,
  qFold: string,
): number {
  let best = 0;
  const better = (s: number) => {
    if (s > best) best = s;
  };

  const bareFold = foldRu(w.bare);
  if (bareFold === qFold) better(100);
  else if (bareFold.startsWith(qFold)) better(90);
  else if (bareFold.includes(qFold)) better(60);

  const accentedFold = foldRu(w.accented);
  if (accentedFold === qFold) better(98);

  for (const f of w.forms) {
    const fFold = foldRu(f.formBare || f.form);
    if (fFold === qFold) better(82);
    else if (fFold.startsWith(qFold)) better(72);
  }

  for (const s of w.senses) {
    const tl = s.tl.toLowerCase();
    if (tl.startsWith(q)) better(48);
    else if (new RegExp(`(?:^|[^a-z])${escapeRegExp(q)}`, "i").test(tl)) better(44);
    else if (tl.includes(q)) better(38);
  }

  if (w.usageEn && w.usageEn.toLowerCase().includes(q)) better(28);

  return best;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const SENSE_INCLUDE = {
  senses: { where: { lang: "en" }, orderBy: { position: "asc" as const }, take: 2 },
};

/** Checked once per process: without the form_bare index the inflected-form
 * tier would full-scan 1.7M rows, so it skips itself if the index is absent. */
let formIndexExists: Promise<boolean> | null = null;
function hasFormIndex(): Promise<boolean> {
  formIndexExists ??= prisma.$queryRaw<{ present: number }[]>`
    SELECT COUNT(*) AS present FROM information_schema.STATISTICS
    WHERE table_schema = DATABASE() AND table_name = 'words_forms' AND index_name = 'idx_words_forms_form_bare'
  `.then((rows) => rows[0].present > 0).catch(() => false);
  return formIndexExists;
}

export async function searchDictionary(
  query: string,
  opts: { type?: string; level?: string; take?: number } = {},
): Promise<SearchResult[]> {
  const q = query.trim();
  if (!q) return [];
  const qFold = foldRu(q);
  const cyr = isCyrillic(q);
  const wordFilter = {
    disabled: false,
    ...(opts.type ? { type: opts.type } : {}),
    ...(opts.level ? { level: opts.level } : {}),
  };
  const take = opts.take ?? 30;
  const orderBy = [{ rank: { sort: "asc" as const, nulls: "last" as const } }, { bare: "asc" as const }];
  const formsIndexed = await hasFormIndex();

  // Candidate tiers — the scoring pass below decides the final order, the
  // queries just fetch a bounded superset of plausible matches.
  const [barePrefix, forms, bareContains, glossPrefix, glossContains, usage] = await Promise.all([
    cyr
      ? prisma.word.findMany({
          where: { ...wordFilter, bare: { startsWith: q } },
          include: { ...SENSE_INCLUDE, forms: { select: { formBare: true, form: true } } },
          orderBy,
          take,
        })
      : Promise.resolve([]),
    cyr && formsIndexed
      ? prisma.word.findMany({
          where: { ...wordFilter, forms: { some: { formBare: { startsWith: q } } } },
          include: { ...SENSE_INCLUDE, forms: { where: { formBare: { startsWith: q } }, select: { formBare: true, form: true }, take: 3 } },
          orderBy,
          take,
        })
      : Promise.resolve([]),
    cyr && q.length >= 2
      ? prisma.word.findMany({
          where: { ...wordFilter, bare: { contains: q } },
          include: { ...SENSE_INCLUDE, forms: { select: { formBare: true, form: true } } },
          orderBy,
          take,
        })
      : Promise.resolve([]),
    prisma.word.findMany({
      where: { ...wordFilter, senses: { some: { lang: "en", tl: { startsWith: q } } } },
      include: { ...SENSE_INCLUDE, forms: { select: { formBare: true, form: true } } },
      orderBy,
      take,
    }),
    q.length >= 2
      ? prisma.word.findMany({
          where: { ...wordFilter, senses: { some: { lang: "en", tl: { contains: q } } } },
          include: { ...SENSE_INCLUDE, forms: { select: { formBare: true, form: true } } },
          orderBy,
          take,
        })
      : Promise.resolve([]),
    q.length >= 3
      ? prisma.word.findMany({
          where: { ...wordFilter, usageEn: { contains: q } },
          include: { ...SENSE_INCLUDE, forms: { select: { formBare: true, form: true } } },
          orderBy,
          take: 20,
        })
      : Promise.resolve([]),
  ]);

  const best = new Map<number, { w: (typeof barePrefix)[number]; score: number }>();
  const consider = (list: typeof barePrefix) => {
    for (const w of list) {
      const score = scoreCandidate(w, q.toLowerCase(), qFold);
      if (score <= 0) continue;
      const prev = best.get(w.id);
      if (!prev || score > prev.score) best.set(w.id, { w, score });
    }
  };
  consider(barePrefix);
  consider(forms);
  consider(bareContains);
  consider(glossPrefix);
  consider(glossContains);
  consider(usage);

  const merged = [...best.values()]
    .sort(
      (a, b) =>
        b.score - a.score ||
        (a.w.rank ?? 1e9) - (b.w.rank ?? 1e9) ||
        a.w.bare.length - b.w.bare.length ||
        a.w.bare.localeCompare(b.w.bare),
    )
    .slice(0, take);

  return merged.map(({ w }) => ({
    id: w.id,
    bare: w.bare,
    accented: w.accented,
    type: w.type,
    level: w.level,
    rank: w.rank,
    senses: w.senses.map((t) => t.tl),
  }));
}

export type WordDetail = Awaited<ReturnType<typeof getWordDetail>>;

export async function getWordDetail(id: number) {
  const word = await prisma.word.findUnique({
    where: { id },
    include: {
      senses: { where: { lang: "en" }, orderBy: { position: "asc" } },
      forms: { orderBy: [{ formType: "asc" }, { position: "asc" }] },
      noun: true,
      verb: true,
      adjective: true,
      relsFrom: {
        include: {
          relWord: { select: { id: true, bare: true, accented: true, type: true } },
        },
      },
      relsTo: {
        include: {
          word: { select: { id: true, bare: true, accented: true, type: true } },
        },
      },
      sentenceWords: {
        where: { sentence: { disabled: false } },
        include: {
          sentence: { include: { translation: { select: { tlEn: true } } } },
        },
        take: 8,
      },
      derivatives: {
        select: { id: true, bare: true, accented: true, type: true, disabled: true },
        where: { disabled: false },
        take: 12,
      },
      tagWords: { include: { tag: true } },
    },
  });
  if (!word) return null;

  const formEntries: FormEntry[] = word.forms.map((f) => ({
    formType: f.formType,
    form: f.form,
    formBare: f.formBare,
  }));

  const related = [
    ...word.relsFrom.map((r) => ({
      relation: r.relation ?? "related",
      word: r.relWord,
    })),
    ...word.relsTo.map((r) => ({
      relation: r.relation === "synonym" ? "synonym" : "related",
      word: r.word,
    })),
  ];

  return {
    id: word.id,
    bare: word.bare,
    accented: word.accented,
    audio: word.audio,
    type: word.type,
    level: word.level,
    rank: word.rank,
    usageEn: word.usageEn,
    gender: word.noun?.gender ?? null,
    animate: word.noun?.animate ?? null,
    aspect: word.verb?.aspect ?? null,
    aspectPartner: word.verb?.partner ?? null,
    incomparable: word.adjective?.incomparable ?? null,
    senses: word.senses.map((s) => ({
      tl: s.tl,
      info: s.info,
      exampleRu: s.exampleRu,
      exampleTl: s.exampleTl,
    })),
    forms: buildFormTables(formEntries, word.type),
    related,
    sentences: word.sentenceWords
      .map((sw) => ({
        id: sw.sentenceId,
        ru: sw.sentence.ru,
        en: sw.sentence.translation?.tlEn ?? null,
      }))
      .filter((s) => s.en),
    derivatives: word.derivatives.filter((d) => !d.disabled),
    tags: word.tagWords.map((tw) => tw.tag.nameEn).filter(Boolean) as string[],
  };
}
