import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 8 — Adjectives agree, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
export const u08: Unit = {
  id: "a2-u08",
  level: "a2",
  number: 8,
  title: "Adjectives agree: describing things in all cases",
  topicIds: ["a2-u08-adjectives-plurals"],
  lessons: [
    {
      id: "a2-u08-l1",
      title: "Step 1: adjective endings in the nominative",
      topicIds: ["a2-u08-adjectives-plurals"],
      vocab: ["красивый", "большой", "маленький", "новый", "старый", "хороший", "интересный", "вкусный", "тихий", "синий"],
      grammar: [
        {
          title: "Copy the noun's gender",
          body: `In English an adjective is a lazy word — *a new car*, *a new idea*, *new books*: the form never changes. Russian adjectives are workers: they **copy the gender, number and case** of whatever they describe. This agreement is called согласова́ние, and it is why the dictionary gives you a whole grid per adjective.

In the nominative (dictionary) case:
- masculine: **-ый/-ий**, and after ж/ш/ч/щ a stressed **-ой** (большо́й, чужо́й) — хоро́ший keeps -ий because its stress moved inside
- feminine: **-ая/-яя** (но́вая, си́няя)
- neuter: **-ое/-ее** (но́вое, си́нее)
- plural: **-ые/-ие** (но́вые, си́ние) — plural covers all genders at once

There are two families: **hard** (но́вый, with ы) and **soft** (си́ний, with и after a soft н). They mirror each other perfectly — learn one and you get the other free.`,
          why: `Why do adjectives bother? Because Russian word order is flexible — «но́вый дом» and «дом но́вый» are both possible — so the endings are what bind the adjective to its noun. Agreement is not decoration; it is the glue that tells the listener which words travel together.`,
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
            { ru: "Краси'вая площадь в ста'ром го'роде.", en: "A beautiful square in an old city — both adjectives agree." },
            { ru: "Она' купи'ла си'нее пла'тье.", en: "She bought a blue dress — neuter." },
          ],
          tip: "The -ой masculine forms (большо́й, молодо́й) trip people because they look feminine. The rule: stressed ending after ж/ш/ч/щ → -о́й. Unstressed → -ий (хоро́ший has moved its stress inside the word, which is why it keeps -ий).",
        },
      ],
      exercises: [
        {
          id: "a2-u08-l1-e1",
          type: "single",
          text: "Correct for «интере́сный» + ки́но:",
          options: [{ id: "a", label: "интересное кино" }, { id: "b", label: "интересная кино" }], answer: "a",
        },
        {
          id: "a2-u08-l1-e2",
          type: "single",
          text: "Feminine of но́вый:",
          options: [{ id: "a", label: "новая" }, { id: "b", label: "новое" }], answer: "a",
        },
        {
          id: "a2-u08-l1-e3",
          type: "true-false",
          text: "Plural nominative of но́вый is но́вые.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u08-l2",
      title: "Step 2: adjectives in the accusative",
      topicIds: ["a2-u08-adjectives-plurals"],
      vocab: ["новый", "красивый", "машина", "сумка", "книга", "видеть", "купить", "большой", "старый", "учитель"],
      grammar: [
        {
          title: "Match the noun's accusative",
          body: `An adjective in the accusative copies whatever its noun did:

- masculine inanimate: no change — Я ви́жу **но́вый** дом
- feminine: **-ую/-юю** — Я купи́л **но́вую** маши́ну
- neuter: no change — **но́вое** письмо́
- masculine **animate**: **-ого** — Я ви́жу **но́вого** учителя́ (the adjective goes genitive-like, just like the noun did in Unit 2 Step 3)`,
          why: "The animate accusative for adjectives mirrors the noun: novost stays novyj, but uchitel becomes novogo. The adjective cannot dodge what its noun does — agreement is obligatory in every case, which is why the dictionary gives the whole grid.",
          table: {
            headers: ["Phrase", "Case"],
            rows: [
              ["новый дом", "acc (m inan = nom)"],
              ["новую машину", "acc (f)"],
              ["нового учителя", "acc (m animate)"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u08-l2-e1",
          type: "fill-blank",
          text: "Я ви́жу ___ маши́ну. *(beautiful)*",
          answers: ["красивую"],
        },
        {
          id: "a2-u08-l2-e2",
          type: "single",
          text: "Я купи́л ___ слова́рь. (new, masc inanimate)",
          options: [{ id: "a", label: "новый" }, { id: "b", label: "новую" }], answer: "a",
        },
        {
          id: "a2-u08-l2-e3",
          type: "true-false",
          text: "«Я ви́жу но́вого учи́теля» — animate accusative.",
          answer: true,
        },
      ],
      drills: [{ kind: "adjective-case", count: 4, cases: ["acc"] }, { kind: "cloze", count: 2 }],
    },
    {
      id: "a2-u08-l3",
      title: "Step 3: adjectives in the prepositional",
      topicIds: ["a2-u08-adjectives-plurals"],
      vocab: ["гулять", "парк", "квартира", "город", "знаменитый", "тихий", "музей", "работать", "жить", "учиться"],
      grammar: [
        {
          title: "After в/на/о: -ом / -ой / -ых",
          body: `- masculine/neuter: **-ом/-ем** — в но́вом до́ме, в но́вом письме́
- feminine: **-ой/-ей** — в но́вой кварти́ре
- plural: **-ых/-их** — в но́вых дома́х, в си́них джи́нсах

Prepositional is the easiest accusative-follow-up: once you know в + prepositional (Unit 2), the adjective simply follows its noun into the same case.`,
          why: "Prepositional is where adjective agreement becomes routine: after a couple of weeks the endings feel automatic because they repeat across every adjective. There are only two shapes (-om for m/n, -oj for f) — the plural -ykh arrives next step.",
          table: {
            headers: ["Nominative", "Prepositional"],
            rows: [
              ["новый дом", "в новом доме"],
              ["новая квартира", "в новой квартире"],
              ["новые дома", "в новых домах"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u08-l3-e1",
          type: "fill-blank",
          text: "Мы гуля́ем в ___ па́рке. *(quiet)*",
          answers: ["тихом"],
        },
        {
          id: "a2-u08-l3-e2",
          type: "fill-blank",
          text: "Мы были в ___ музе́е. *(famous — знаме́нитый)*",
          answers: ["знаменитом"],
        },
        {
          id: "a2-u08-l3-e3",
          type: "true-false",
          text: "Feminine prepositional: -ой (в но́вой кварти́ре).",
          answer: true,
        },
      ],
      drills: [{ kind: "adjective-case", count: 4, cases: ["prep"] }, { kind: "cloze", count: 2 }],
    },
    {
      id: "a2-u08-l4",
      title: "Step 4: plurals — nominative & accusative",
      topicIds: ["a2-u08-adjectives-plurals"],
      vocab: ["студент", "ребёнок", "друг", "глаз", "слово", "вещь", "вопрос", "фотография", "гость", "день"],
      grammar: [
        {
          title: "Plural -ы/-и; animate accusative = genitive",
          body: `- Nominative plural: **-ы/-и** (столы́, му́зеи, кни́ги) — after к,г,х,ж,ш,ч always **-и**
- Accusative plural of **inanimate** = nominative: Я чита́ю кни́ги.
- Accusative plural of **animate** = genitive plural: Я ви́жу друзе́й, студе́нтов.

The animate rule now applies to plurals too — and the genitive plural endings (Step 5 in B1 unit 1) are genuinely the hardest chart in the language. For now: recognise the split, master the forms you meet.`,
          why: "The irregular plurals (druz'ya, deti, lyudi) are among the most frequent words in the language — which is exactly why they survived irregular. Frequent words resist regularisation; you meet them too often to forget.",
          table: {
            headers: ["Singular", "Plural (nom)", "Acc pl"],
            rows: [
              ["стол", "столы", "столы"],
              ["книга", "книги", "книги"],
              ["друг", "друзья", "друзей (animate!)"],
            ],
          },
          tip: "Irregulars to know on sight: де́нь → дни, друг → друзья́, брат → бра́тья, сын → сыновья́, стул → сту́лья, ребе́нок → де́ти.",
        },
      ],
      exercises: [
        {
          id: "a2-u08-l4-e1",
          type: "single",
          text: "Я ви́жу ___. (my friends — animate)",
          options: [{ id: "a", label: "моих друзей" }, { id: "b", label: "мои друзья" }], answer: "a",
        },
        {
          id: "a2-u08-l4-e2",
          type: "fill-blank",
          text: "Я чита́ю ___. *(journals)*",
          answers: ["журналы"],
        },
        {
          id: "a2-u08-l4-e3",
          type: "true-false",
          text: "Accusative plural of inanimate equals nominative plural.",
          answer: true,
        },
      ],
      drills: [{ kind: "noun-case", count: 3, cases: ["acc"] }, { kind: "cloze", count: 2 }],
    },
    {
      id: "a2-u08-l5",
      title: "Step 5: мой, этот, весь — pronouns that decline",
      topicIds: ["a2-u08-adjectives-plurals"],
      vocab: ["мой", "твой", "ваш", "наш", "этот", "весь", "всё", "все", "свой", "такой"],
      grammar: [
        {
          title: "Pronouns agree like adjectives",
          body: `Possessives (мой, твой, наш, ваш), demonstratives (этот) and the useful весь (all) decline **exactly like adjectives** — they are adjectives in disguise:

- **мой** → моего́ (gen/acc anim), моему́ (dat), мою́ (fem acc), моём (prep)
- **этот** → э́того, э́тому, э́ту, э́том
- **весь** → всего́, всю, всему́, всём — «весь день» (all day), «вся семья́» (the whole family)

One nuance: его/её/их (his/her/their) **never change**. They are frozen genitives and stay that way in every case: Я ви́жу его́ сестру́, Я говорю́ с его́ сестро́й — его́ stays его́.`,
          why: `Why do мой and наш decline while его/её/их do not? Because мой/наш are originally adjective-like pronouns (they agree), while его/её/их are frozen genitives of он/она/они — already in a case, so nothing further happens to them. Etymology explains the asymmetry.`,
          table: {
            headers: ["Nominative", "Accusative", "Prepositional"],
            rows: [
              ["этот дом", "этот дом", "в этом доме"],
              ["эта книга", "эту книгу", "об этой книге"],
              ["мой друг", "моего друга", "о моём друге"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u08-l5-e1",
          type: "fill-blank",
          text: "___ кни́гу я купи́л вчера́. *(this — acc fem)*",
          answers: ["Эту"],
        },
        {
          id: "a2-u08-l5-e2",
          type: "fill-blank",
          text: "Я бу́ду до́ма ___ день. *(all)*",
          answers: ["весь"],
        },
        {
          id: "a2-u08-l5-e3",
          type: "single",
          text: "Я ви́жу ___. (your parents — animate pl)",
          options: [{ id: "a", label: "твоих родителей" }, { id: "b", label: "твои родители" }], answer: "a",
        },
      ],
      drills: [{ kind: "adjective-case", count: 3, cases: ["acc", "prep"] }, { kind: "cloze", count: 2 }],
    },
  ],

  test: [
    {
      id: "a2-u08-test-1", type: "single",
      text: "Я купи́л ___ су́мку.",
      options: [{ id: "a", label: "новую" }, { id: "b", label: "новой" }], answer: "a",
    },
    {
      id: "a2-u08-test-2", type: "fill-blank",
      text: "Мы были в ___ музе́е. *(знаме́нитый)*",
      answers: ["знаменитом"],
    },
    {
      id: "a2-u08-test-3", type: "single",
      text: "Я ви́жу ___. (your parents)",
      options: [{ id: "a", label: "твоих родителей" }, { id: "b", label: "твои родители" }], answer: "a",
    },
    {
      id: "a2-u08-test-4", type: "true-false",
      text: "Feminine nominative singular adjective ending is -ая/-яя.",
      answer: true,
    },
    {
      id: "a2-u08-test-5", type: "matching",
      text: "Phrase → case:",
      prompts: [
        { id: "p1", label: "новую машину" }, { id: "p2", label: "в новом доме" }, { id: "p3", label: "новый дом" },
      ],
      responses: [
        { id: "r1", label: "accusative" }, { id: "r2", label: "nominative" }, { id: "r3", label: "prepositional" },
      ],
      answer: { p1: "r1", p2: "r3", p3: "r2" },
    },
  ],
};
