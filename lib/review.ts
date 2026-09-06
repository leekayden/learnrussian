import { prisma } from "@/lib/prisma";

export type ReviewItem = {
  cardId: string;
  kind: "recog" | "produce" | "cloze" | "audio";
  wordId: number;
  bare: string;
  accented: string;
  audio: string;
  senses: string[];
  /** For cloze: sentence with {{blank}} and the expected surface form. */
  cloze?: { text: string; answer: string };
  /** For recog/audio multiple choice. */
  options?: { id: string; label: string }[];
  answerOptionId?: string;
  isNew: boolean;
};

const DUE_LIMIT = 15;
const NEW_LIMIT = 10;

export async function buildReviewBatch(
  userId: string,
  userLevel: string,
): Promise<{ items: ReviewItem[]; dueCount: number; newCount: number }> {
  const now = new Date();
  const [due, fresh] = await Promise.all([
    prisma.lrSrsCard.findMany({
      where: { userId, suspended: false, state: { not: 0 }, due: { lte: now } },
      orderBy: { due: "asc" },
      take: DUE_LIMIT,
    }),
    prisma.lrSrsCard.findMany({
      where: { userId, suspended: false, state: 0 },
      orderBy: { createdAt: "asc" },
      take: NEW_LIMIT,
    }),
  ]);

  const all = [...due, ...fresh];
  const dueCount = due.length;
  const newCount = fresh.length;
  if (!all.length) return { items: [], dueCount: 0, newCount: 0 };

  const wordIds = [...new Set(all.map((c) => c.wordId))];
  const words = await prisma.word.findMany({
    where: { id: { in: wordIds } },
    include: {
      senses: { where: { lang: "en" }, orderBy: { position: "asc" }, take: 3 },
    },
  });
  const wordById = new Map(words.map((w) => [w.id, w]));

  // Example sentences for cloze cards (one per word, level-matched).
  const clozeWordIds = [...new Set(all.filter((c) => c.kind === "cloze").map((c) => c.wordId))];
  const sentenceRows = clozeWordIds.length
    ? await prisma.sentenceWord.findMany({
        where: {
          wordId: { in: clozeWordIds },
          sentence: {
            disabled: false,
            translation: { is: { tlEn: { not: "" } } },
            level: { in: [userLevel, ""] },
          },
        },
        include: {
          sentence: { include: { translation: { select: { tlEn: true } } } },
        },
        take: clozeWordIds.length * 6,
      })
    : [];
  const clozeByWord = new Map<number, { text: string; answer: string }>();
  for (const row of sentenceRows) {
    if (clozeByWord.has(row.wordId)) continue;
    const ru = row.sentence.ru;
    let s = row.start;
    let e = row.start + row.length;
    while (s < e && !/[а-яёА-ЯЁ]/.test(ru[s] ?? "")) s++;
    while (e > s && !/[а-яёА-ЯЁ]/.test(ru[e - 1] ?? "")) e--;
    if (e <= s) continue;
    const answer = ru.slice(s, e);
    if (!answer) continue;
    clozeByWord.set(row.wordId, {
      text: `${ru.slice(0, s)}{{blank}}${ru.slice(e)}\n\n*${row.sentence.translation?.tlEn ?? ""}*`,
      answer,
    });
    if (clozeByWord.size >= clozeWordIds.length) break;
  }

  // Distractor pool for multiple choice.
  const pool = await prisma.translation.findMany({
    where: { lang: "en", word: { disabled: false, rank: { not: null, lte: 1500 } } },
    include: { word: { select: { id: true, bare: true, accented: true } } },
    orderBy: { id: "asc" },
    take: 400,
  });

  function pickDistractorSenses(excludeWordId: number, n: number): string[] {
    const out: string[] = [];
    let guard = 0;
    while (out.length < n && guard++ < 60) {
      const t = pool[Math.floor(Math.random() * pool.length)];
      if (!t || t.word.id === excludeWordId) continue;
      if (out.includes(t.tl)) continue;
      out.push(t.tl);
    }
    return out;
  }
  function pickDistractorWords(excludeWordId: number, n: number) {
    const out: { id: string; label: string }[] = [];
    let guard = 0;
    while (out.length < n && guard++ < 60) {
      const t = pool[Math.floor(Math.random() * pool.length)];
      if (!t || t.word.id === excludeWordId) continue;
      if (out.some((o) => o.label === t.word.accented)) continue;
      out.push({ id: String(t.word.id), label: t.word.accented });
    }
    return out;
  }

  const items = all.map((card): ReviewItem | null => {
    const w = wordById.get(card.wordId);
    if (!w) return null;
    const senses = w.senses.map((s) => s.tl);
    const item: ReviewItem = {
      cardId: card.id,
      kind: card.kind as ReviewItem["kind"],
      wordId: w.id,
      bare: w.bare,
      accented: w.accented,
      audio: w.audio,
      senses,
      isNew: card.state === 0,
    };
    if (card.kind === "cloze") {
      item.cloze = clozeByWord.get(w.id) ?? undefined;
      // No sentence available → degrade to produce.
      if (!item.cloze) item.kind = "produce";
    }
    if (item.kind === "recog") {
      const correctLabel = senses[0] ?? w.bare;
      const distractors = pickDistractorSenses(w.id, 3);
      const opts = [
        { id: "correct", label: correctLabel },
        ...distractors.map((d, i) => ({ id: `d${i}`, label: d })),
      ];
      // Shuffle deterministically enough for display.
      opts.sort(() => Math.random() - 0.5);
      item.options = opts;
      item.answerOptionId = "correct";
    }
    if (item.kind === "audio") {
      const opts = [
        { id: String(w.id), label: w.accented },
        ...pickDistractorWords(w.id, 3),
      ];
      opts.sort(() => Math.random() - 0.5);
      item.options = opts;
      item.answerOptionId = String(w.id);
    }
    return item;
  });

  return {
    items: items.filter(Boolean) as ReviewItem[],
    dueCount,
    newCount,
  };
}
