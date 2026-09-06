import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 8 — Adjectives through the cases; plural basics. */
export const u08: Unit = {
  id: "a2-u08",
  level: "a2",
  number: 8,
  title: "Adjectives agree: describing things in all cases",
  topicIds: ["a2-u08-adjectives-plurals"],
  lessons: [
    {
      id: "a2-u08-l1",
      title: "Adjective endings in the nominative",
      topicIds: ["a2-u08-adjectives-plurals"],
      vocab: [
        "красивый",
        "большой",
        "маленький",
        "новый",
        "старый",
        "хороший",
        "плохой",
        "интересный",
        "вкусный",
        "тихий",
      ],
      grammar: [
        {
          title: "The adjective copies the noun",
          body: `An adjective agrees with its noun in **gender, number and case**. Nominative endings:
- masculine: **-ый / -ий** (но́вый, си́ний) — after ж/ш/ч/щ stressed: -о́й (большо́й)
- feminine: **-ая / -яя** (но́вая, си́няя)
- neuter: **-ое / -ее** (но́вое, си́нее)
- plural: **-ые / -ие** (но́вые, си́ние)`,
          table: {
            headers: ["", "hard (новый)", "soft (синий)"],
            rows: [
              ["m", "новый", "синий"],
              ["f", "новая", "синяя"],
              ["n", "новое", "синее"],
              ["pl", "новые", "синие"],
            ],
          },
          examples: [
            { ru: "Краси'вая площадь в вели'ком го'роде.", en: "A beautiful square in a great city." },
          ],
          tip: "-ой after ж/ш/ч/щ under stress: чужо́й, большо́й, хоро́ший is -ий (unstressed иш).",
        },
        {
          title: "Adjectives must stand NEXT to a case-matched noun",
          body: `In the accusative: Я ви́жу **но́вый** дом (masc inanimate), **но́вую** маши́ну (fem acc), **но́вое** письмо́. In prepositional: **в но́вом** до́ме, **в но́вой** кварти́ре.
Full grids live on every adjective's dictionary page.`,
        },
      ],
      exercises: [
        {
          id: "a2-u08-l1-e1",
          type: "single",
          text: "Я живу́ в но́вой кварти́ре. — Which form is correct for «интере́сный» + ки́но?",
          options: [
            { id: "a", label: "интересное кино" },
            { id: "b", label: "интересная кино" },
          ],
          answer: "a",
        },
        {
          id: "a2-u08-l1-e2",
          type: "fill-blank",
          text: "Я ви́жу {{blank}} маши́ну. *(a beautiful car)*",
          answers: ["красивую"],
        },
        {
          id: "a2-u08-l1-e3",
          type: "fill-blank",
          text: "Мы гуля́ем в {{blank}} па́рке. *(a quiet park — prepositional)*",
          answers: ["тихом"],
        },
        {
          id: "a2-u08-l1-e4",
          type: "true-false",
          text: "Plural nominative of но́вый is но́вые.",
          answer: true,
        },
      ],
      drills: [
        { kind: "adjective-case", count: 4, cases: ["acc", "prep"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u08-l2",
      title: "Plurals + мой/этот everywhere",
      topicIds: ["a2-u08-adjectives-plurals"],
      vocab: [
        "дети",
        "родитель",
        "друг",
        "глаз",
        "слово",
        "вещь",
        "день",
        "вопрос",
        "фотография",
        "гость",
      ],
      grammar: [
        {
          title: "Plural nominative & accusative",
          body: `Plural nominative: **-ы / -и** (маши́ны, му́зеи, кни́ги). In the accusative, plural = nominative for **inanimate**; for **animate** nouns the accusative plural copies the genitive plural: Я ви́жу друзе́й (friend → nom pl друзья́, acc pl друзе́й).`,
          table: {
            headers: ["Singular", "Plural (nom)", "Acc pl (inanimate)", "Acc pl (animate)"],
            rows: [
              ["стол", "столы", "столы", "—"],
              ["книга", "книги", "книги", "—"],
              ["друг", "друг", "друг", "друзей"],
              ["кошка", "кошки", "кошки", "кошек"],
            ],
          },
          examples: [
            { ru: "У меня' мно'го друзей.", en: "I have many friends." },
          ],
          tip: "Genitive plural (друзе́й, кни́г, маши́н) is a big topic — B1 unit 1 covers it in full. Today: accusative plural only.",
        },
        {
          title: "мой / твой / ваш / этот in the cases you know",
          body: `Possessives and этот decline like adjectives:
- **мой** → моего́ (gen/acc animate), моему́ (dat), мою́ (fem acc), моём (prep)
- **этот** → э́того, э́тому, э́ту, э́том
- **весь** (all) → всего́, всему́, всю, всём — «Я весь день до́ма» (all day).`,
          examples: [
            { ru: "Я звони'л своему' дру'гу.", en: "I called my (own) friend." },
            { ru: "Э'ту кни'гу я чита'л вче'ра.", en: "I read this book yesterday." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u08-l2-e1",
          type: "single",
          text: "Я ви́жу ___. (my friends — animate plural)",
          options: [
            { id: "a", label: "мои друзья" },
            { id: "b", label: "моих друзей" },
          ],
          answer: "b",
        },
        {
          id: "a2-u08-l2-e2",
          type: "fill-blank",
          text: "{{blank}} кни́гу я купи́л вчера́. *(This book — acc fem)*",
          answers: ["Эту"],
        },
        {
          id: "a2-u08-l2-e3",
          type: "fill-blank",
          text: "Я бу́ду до́ма {{blank}} день. *(all day)*",
          answers: ["весь"],
        },
        {
          id: "a2-u08-l2-e4",
          type: "true-false",
          text: "Accusative plural of inanimate nouns equals the nominative plural.",
          answer: true,
        },
      ],
      drills: [
        { kind: "adjective-case", count: 4, cases: ["acc", "prep"] },
        { kind: "cloze", count: 2 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u08-test-1",
      type: "single",
      text: "Я купи́л ___ су́мку.",
      options: [
        { id: "a", label: "новая" },
        { id: "b", label: "новую" },
        { id: "c", label: "новой" },
      ],
      answer: "b",
    },
    {
      id: "a2-u08-test-2",
      type: "fill-blank",
      text: "Мы были в {{blank}} музе́е. *(a famous museum — знаме́нитый)*",
      answers: ["знаменитом"],
    },
    {
      id: "a2-u08-test-3",
      type: "single",
      text: "Я ви́жу ___. (your parents — animate)",
      options: [
        { id: "a", label: "твои родители" },
        { id: "b", label: "твоих родителей" },
      ],
      answer: "b",
    },
    {
      id: "a2-u08-test-4",
      type: "true-false",
      text: "The feminine nominative singular adjective ending is -ая/-яя.",
      answer: true,
    },
    {
      id: "a2-u08-test-5",
      type: "matching",
      text: "Match the phrase to its case:",
      prompts: [
        { id: "p1", label: "новую машину" },
        { id: "p2", label: "в новом доме" },
        { id: "p3", label: "новый дом" },
      ],
      responses: [
        { id: "r1", label: "accusative" },
        { id: "r2", label: "nominative" },
        { id: "r3", label: "prepositional" },
      ],
      answer: { p1: "r1", p2: "r3", p3: "r2" },
    },
  ],
};
