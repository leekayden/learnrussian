import { prisma } from "@/lib/prisma";
import { buildFormTables, type FormEntry } from "@/lib/russian";

export type SearchResult = {
  id: number;
  bare: string;
  accented: string;
  type: string | null;
  level: string | null;
  rank: number | null;
  senses: string[];
};

export async function searchDictionary(
  query: string,
  opts: { type?: string; level?: string; take?: number } = {},
): Promise<SearchResult[]> {
  const q = query.trim();
  if (!q) return [];
  const wordFilter = {
    disabled: false,
    ...(opts.type ? { type: opts.type } : {}),
    ...(opts.level ? { level: opts.level } : {}),
  };
  // Exact / prefix matches first, then broader contains matches.
  const [exact, contains] = await Promise.all([
    prisma.word.findMany({
      where: {
        ...wordFilter,
        OR: [{ bare: q }, { bare: { startsWith: q } }],
      },
      include: {
        senses: { where: { lang: "en" }, orderBy: { position: "asc" }, take: 2 },
      },
      orderBy: [{ rank: { sort: "asc", nulls: "last" } }, { bare: "asc" }],
      take: opts.take ?? 30,
    }),
    q.length >= 2
      ? prisma.word.findMany({
          where: {
            ...wordFilter,
            AND: [{ NOT: { bare: { startsWith: q } } }],
            OR: [
              { senses: { some: { lang: "en", tl: { contains: q } } } },
              { usageEn: { contains: q } },
            ],
          },
          include: {
            senses: { where: { lang: "en" }, orderBy: { position: "asc" }, take: 2 },
          },
          orderBy: [{ rank: { sort: "asc", nulls: "last" } }, { bare: "asc" }],
          take: opts.take ?? 30,
        })
      : Promise.resolve([]),
  ]);
  const seen = new Set(exact.map((w) => w.id));
  const merged = [...exact, ...contains.filter((w) => !seen.has(w.id))];
  return merged.slice(0, opts.take ?? 30).map((w) => ({
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
