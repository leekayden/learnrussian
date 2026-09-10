import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 12 — Aspect in negation, modals of possibility + B2 wrap-up. */
export const u12: Unit = {
  id: "b2-u12",
  level: "b2",
  number: 12,
  title: "Negation, possibility and B2 wrap-up",
  topicIds: ["b2-u12-negation-possibility"],
  lessons: [
    {
      id: "b2-u12-l1",
      title: "не было / не удалось / не приходится + genitive after negation",
      topicIds: ["b2-u12-negation-possibility"],
      vocab: ["отсутствовать", "пребывать", "обстоятельство", "необходимость", "уклоняться", "отрицать", "опровергать", "сомневаться", "вряд", "едва"],
      grammar: [
        {
          title: "Genitive under negation",
          body: `Genitive under negation: Я не чита́л э́той статьи́ (alongside э́ту статью́). Total negation uses ни + gen: не сказа́л ни сло́ва. The probability ladder: обяза́тельно → на́верное → вря́д ли → ни за что. Сомнева́ться в + prep, отрица́ть + acc.

Accusative objects often flip to **genitive** under negation (especially abstract/indefinite things):
- Я чита́л э́ту статью́ → Я не чита́л э́той статьи́.
- Он не зна́ет ни одного́ слова́. (ni + gen for total negation)
Optional but stylish; with concrete definite objects accusative stays: Я не чита́л э́ту статью́ (also fine).`,
          why: "Genitive under negation is the grammar of absence: if the object never got received, it stays 'unpossessed' — genitive territory. Optional with concrete objects, near-obligatory with abstract ones (нет вре́мени).",
          examples: [
            { ru: "Он не сказа'л ни сло'ва.", en: "He didn't say a single word." },
          ],
          tip: "ни одного́ / ни разу strengthen total negation; keep the verb's не too.",
        },
        {
          title: "Probability scale",
          body: `Probability markers show your confidence: обяза́тельно (certainly), на́верное/вероя́тно (probably), вря́д ли/едва́ ли (unlikely), ни за что (no way). Сомнева́ться в + prep doubts the thing; отрица́ть + acc denies the charge.

- ** обяза́тельно** (certainly) → **probably на́верное / вероя́тно** → **вряд ли / едва́ ли** (unlikely) → **ни за что** (no way).
- сомнева́ться в + prep: Я сомнева́юсь в э́том.
- отрицать + acc: Он отрица́ет свою́ вину́.`,
          why: "The в + prepositional after сомнева́ться treats doubt as a location — you stand inside uncertainty about it. And ни за что literally promises not-for-anything — you would not do it for any price. Russian probability is full of tiny arguments.",
        },
      ],
      exercises: [
        {
          id: "b2-u12-l1-e1",
          type: "single",
          text: "Он не сказа́л ___. (ни слова)",
          options: [{ id: "a", label: "ни слова" }, { id: "b", label: "не слова" }], answer: "a"
        },
        {
          id: "b2-u12-l1-e2",
          type: "single",
          text: "Я ___ в его́ искре́нности. (doubt + prep)",
          options: [{ id: "a", label: "сомневаюсь" }, { id: "b", label: "отрицаю" }], answer: "a"
        },
        {
          id: "b2-u12-l1-e3",
          type: "fill-blank",
          text: "___ ли он успе́ет? *(unlikely)*",
          answers: ["Вряд"],
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "b2-u12-test-1",
      type: "single",
      text: "Total negation: он не сде́лал ___ оши́бок.",
      options: [{ id: "a", label: "ни одной" }, { id: "b", label: "не одной" }], answer: "a"
    },
    {
      id: "b2-u12-test-2",
      type: "single",
      text: "Under negation «покупать газету» may become:",
      options: [{ id: "a", label: "не покупать газеты" }, { id: "b", label: "не покупать газету only" }], answer: "a",
      explanation: "Genitive is the stylistically marked option; accusative also grammatical.",
    },
    {
      id: "b2-u12-test-3",
      type: "short-answer",
      text: "I doubt his honesty: (Я сомнева́юсь…)",
      answer: "я сомневаюсь в его честности",
    },
  ],
};
