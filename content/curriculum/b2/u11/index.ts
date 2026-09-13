import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 11 — Register, one step at a time. */
export const u11: Unit = {
  id: "b2-u11",
  level: "b2",
  number: 11,
  title: "Register: colloquial vs formal Russian",
  topicIds: ["b2-u11-register"],
  lessons: [
    {
      id: "b2-u11-l1",
      title: "Step 1: colloquial syntax — разве, неужели, ellipsis",
      topicIds: ["b2-u11-register"],
      vocab: ["разве", "неужели", "авось", "наверное", "пожалуй", "кофе", "часть", "простите", "улица", "странно"],
      grammar: [
        {
          title: "How spoken Russian saves effort",
          body: `Spoken Russian saves effort: surprise questions with ра́зве/неуже́ли (Ра́зве ты не знал?), ellipsis with the verb dropped but cases intact (Мне бы ко́фе), and а́вось for hopeful fatalism (А́вось повезёт).

- Surprise questions: **Ра́зве ты не знал?** (Surely you didn't know?), **Неуже́ли он согласи́лся?**
- Ellipsis — the verb drops, cases stay: **Мне бы ко́фе.** (I'd like coffee), **Ему́ не до э́того.**
- **А́вось** — hoping for the best: А́вось повезёт.`,
          plain: `In casual speech Russians drop the verb and let the word endings do the work: мне бы кофе says it all. Use разве and неужели when a fact surprises you.`,
          why: "Ellipsis is grammatical, not sloppy: the dative «мне» plus a bare noun is a complete utterance because case endings carry the meaning the verb would. English needs 'I would like'; Russian's case system makes the verb redundant.",
          examples: [
            { ru: "Мне бы ко'фе и что'-нибу'дь к ча'ю.", en: "I'd like a coffee and something to go with it." },
          ],
          tip: "Ellipsis is grammatical: the dative «мне» plus bare noun is a complete utterance in speech.",
        },
      ],
      exercises: [
        {
          id: "b2-u11-l1-e1",
          type: "single",
          text: "«Мне бы ко́фе» omits:",
          options: [{ id: "a", label: "the verb (я хотел бы)" }, { id: "b", label: "the object" }], answer: "a",
        },
        {
          id: "b2-u11-l1-e2",
          type: "single",
          text: "«Ра́зве ты не знал?» expresses:",
          options: [{ id: "a", label: "surprise that he DIDN'T know" }, { id: "b", label: "a formal request" }], answer: "a",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b2-u11-l2",
      title: "Step 2: formal — предполага́ется, не допуска́ется, headlines",
      topicIds: ["b2-u11-register"],
      vocab: ["предполагаться", "допускаться", "объявление", "инструкция", "заявление", "открыть", "станция", "официальный", "документ", "правило"],
      grammar: [
        {
          title: "The grammar of officialdom",
          body: `Officialdom has its own grammar: предполага́ется (it is assumed), сле́дует (one should), не допуска́ется (is not permitted), headline infinitives (Откры́ть станцию к ма́ю), and signs like Тре́буется (Wanted).

- Impersonal officialese: **предполага́ется** (it is assumed), **сле́дует** (one should), **не допуска́ется** (is not permitted).
- Headlines use infinitives / verbless noun strings: **«Откры́ть станцию к ма́ю»**, **«Встре́ча в Кремле́: что изве́стно»**.
- Set public signs: **Тре́буется** (Wanted), **Ка́сса**, **Ухо́д отсю́да воспрещён** (bookish).`,
          plain: `Official Russian avoids naming people — signs and rules lean on fixed phrases like следует and не допускается. Learn these as whole chunks; you will meet them on every form and door.`,
          why: "Official Russian is impersonal on principle: responsibility dissolves into the institution. Предполага́ется has no subject because nobody person is claiming it. Headlines use infinitives to freeze the future into a plan. Learning the register means learning who is allowed NOT to appear in the sentence.",
          examples: [
            { ru: "Не допуска'ется кури'ть.", en: "Smoking is not permitted." },
          ],
          tip: "Канцеляри́т in casual speech sounds robotic — parody uses it on purpose.",
        },
      ],
      exercises: [
        {
          id: "b2-u11-l2-e1",
          type: "single",
          text: "Formal 'one should':",
          options: [{ id: "a", label: "следует" }, { id: "b", label: "надо бы" }], answer: "a",
        },
        {
          id: "b2-u11-l2-e2",
          type: "single",
          text: "«Откры́ть станцию к ма́ю» is a:",
          options: [{ id: "a", label: "headline infinitive" }, { id: "b", label: "polite request" }], answer: "a",
        },
        {
          id: "b2-u11-l2-e3",
          type: "true-false",
          text: "«Мне бы ко́фе» is appropriate in a formal report.",
          answer: false,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u11-test-1", type: "single",
      text: "Formal 'one should':",
      options: [{ id: "a", label: "следует" }, { id: "b", label: "надо бы" }], answer: "a",
    },
    {
      id: "b2-u11-test-2", type: "single",
      text: "«Мне бы ко́фе» is:",
      options: [{ id: "a", label: "colloquial ellipsis" }, { id: "b", label: "formal" }], answer: "a",
    },
    {
      id: "b2-u11-test-3", type: "true-false",
      text: "Headlines use infinitive constructions: «Открыть станцию к ма́ю».",
      answer: true,
    },
  ],
};
