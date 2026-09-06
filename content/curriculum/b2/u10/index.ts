import type { Unit } from "@/lib/curriculum/types";

/** B2 · Units 10–12: comparatives, discourse, register. */
export const u10: Unit = {
  id: "b2-u10",
  level: "b2",
  number: 10,
  title: "Comparatives and superlatives in full",
  topicIds: ["b2-u10-comparatives"],
  lessons: [
    {
      id: "b2-u10-l1",
      title: "than, the-more-the-better, comparative + genitive",
      topicIds: ["b2-u10-comparatives"],
      vocab: ["лучше", "хуже", "больше", "меньше", "сравнение", "качество", "эффективность", "заметно", "значительно", "гораздо"],
      grammar: [
        {
          title: "Comparative + genitive vs чем",
          body: `- Short comparative + **genitive**: Он умне́е меня́ (= умне́е, чем я).
- **чем** before nouns with any case: Это важне́е, **чем** э́то.
- **горáздо / значи́тельно / мно́го + comparative** = much better: мно́го лу́чше.
- **чем…, тем…**: Чем бо́льше, тем лу́чше. — The more, the better.
- Superlative: **са́мый** (most common), наибо́лее (formal), -ейший (emphatic): важне́йший.`,
          examples: [
            { ru: "Новый мост значи'тельно длинне'е ста'рого.", en: "The new bridge is considerably longer than the old one." },
          ],
          tip: "After a short comparative the second element goes GENITIVE: красивее города́ — not «красивее город».",
        },
      ],
      exercises: [
        {
          id: "b2-u10-l1-e1",
          type: "single",
          text: "Он ста́рше ___. (я)",
          options: [{ id: "a", label: "меня" }, { id: "b", label: "я" }], answer: "a"
        },
        {
          id: "b2-u10-l1-e2",
          type: "fill-blank",
          text: "Чем ___, тем ___ ___ ___. *(The sooner, the better)*",
          answers: ["скорее"],
        },
        {
          id: "b2-u10-l1-e3",
          type: "true-false",
          text: "наибо́лее suits academic style; са́мый is neutral.",
          answer: true,
        },
      ],
      drills: [{ kind: "comparative", count: 5 }, { kind: "cloze", count: 2 }],
    },
  ],

  test: [
    {
      id: "b2-u10-test-1",
      type: "single",
      text: "Эта задача ___ той.",
      options: [{ id: "a", label: "сложнее" }, { id: "b", label: "более сложнее" }], answer: "a"
    },
    {
      id: "b2-u10-test-2",
      type: "short-answer",
      text: "The more the better: (Чем…, тем…)",
      answer: "чем больше тем лучше",
    },
    {
      id: "b2-u10-test-3",
      type: "true-false",
      text: "«гораздо лучше» = much better.",
      answer: true,
    },
  ],
};
