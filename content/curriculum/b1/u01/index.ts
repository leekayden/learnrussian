import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 1 — Plurals, one step at a time. */
export const u01: Unit = {
  id: "b1-u01",
  level: "b1",
  number: 1,
  title: "Plurals everywhere: the six-case map",
  topicIds: ["b1-u01-plurals"],
  lessons: [
    {
      id: "b1-u01-l1",
      title: "Step 1: nominative plural",
      topicIds: ["b1-u01-plurals"],
      vocab: ["студент", "музей", "газета", "тетрадь", "окно", "здание", "преподаватель", "книга", "ручка", "словарь"],
      grammar: [
        {
          title: "One plural per gender — with overlaps",
          body: `In English, pluralising is one move: add -s. Russian has four moves, assigned by the noun's gender — the same gender you read off the ending in A2:

- masculine hard → **-ы** (студе́нты); **-й/-ь** → **-и** (музе́и, преподаватели)
- feminine **-а → -ы**, **-я/-ь → -и** (газе́ты, тетра́ди)
- neuter **-о → -а**, **-е → -я** (окна́, зда́ния)
- Spelling: after к,г,х,ж,ш,ч,щ → **-и** (кни́ги, враги́)

Notice that feminine -а and neuter -о pluralise by *swapping* their vowel, not adding to it. And the spelling rule you met with verbs (я учу́) returns here unchanged: hushers and к/г/х demand -и.`,
          why: `The ending -ы/-и goes back to an old plural that behaved like a collective — Russians heard "students" as a crowd of student-kind, and crowds took their own form. The gender overlap (газеты vs студенты both -ы) is why you always need the noun's gender first.`,

          table: {
            headers: ["Sg", "Pl", "Sg", "Pl"],
            rows: [
              ["студент", "студенты", "газета", "газеты"],
              ["музей", "музеи", "тетрадь", "тетради"],
              ["окно", "окна", "здание", "здания"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u01-l1-e1",
          type: "matching",
          text: "Singular → plural:",
          prompts: [
            { id: "p1", label: "окно" },
            { id: "p2", label: "тетрадь" },
            { id: "p3", label: "музей" },
          ],
          responses: [
            { id: "r1", label: "музеи" },
            { id: "r2", label: "окна" },
            { id: "r3", label: "тетради" },
          ],
          answer: { p1: "r2", p2: "r3", p3: "r1" },
        },
        {
          id: "b1-u01-l1-e2",
          type: "true-false",
          text: "«кни́ги» (plural of кни́га) is spelled with -и.",
          answer: true,
          explanation: "After к always -и.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u01-l2",
      title: "Step 2: irregular plurals and mobile vowels",
      topicIds: ["b1-u01-plurals"],
      vocab: ["друг", "брат", "сын", "день", "стул", "продавец", "город", "сестра", "дочь", "мать"],
      grammar: [
        {
          title: "Learn these twelve by heart",
          body: `Time to meet the outlaws. About a dozen of the most frequent masculine nouns build their plural with an ancient suffix **-ьj-** (written -ья/-ье), a leftover of the Old Russian dual number — and a handful more play hide-and-seek with a vowel:
- **друг → друзья́**, **брат → бра́тья**, **сын → сыновья́**, **де́ньги** (pl only)
- **стул → сту́лья**, **де́рево → дере́вья**
- Mobile vowel drops: **продаве́ц → продавцы́**, **о́кно → о́кна** (о returns in gen pl)
- **мать → до́чери / ма́тери** — дочь → до́чери, мать → ма́тери`,
          why: `These irregulars are not random: the -ья suffix once marked collectives of kin — бра́тья, sons of one father. Russian kinship vocabulary froze in its oldest grammar, which is why the words you use most about people are the least regular.`,

          table: {
            headers: ["Singular", "Plural"],
            rows: [
              ["друг", "друзья"],
              ["брат", "братья"],
              ["сын", "сыновья"],
              ["стул", "стулья"],
              ["мать", "матери"],
            ],
          },
          tip: "Some nouns only exist in plural: де́ньги, но́вости, часы́, кани́кулы.",
        },
      ],
      exercises: [
        {
          id: "b1-u01-l2-e1",
          type: "matching",
          text: "Singular → plural:",
          prompts: [
            { id: "p1", label: "друг" },
            { id: "p2", label: "сын" },
            { id: "p3", label: "стул" },
          ],
          responses: [
            { id: "r1", label: "стулья" },
            { id: "r2", label: "друзья" },
            { id: "r3", label: "сыновья" },
          ],
          answer: { p1: "r2", p2: "r3", p3: "r1" },
        },
        {
          id: "b1-u01-l2-e2",
          type: "true-false",
          text: "«браты» is the normal plural of бра́т.",
          answer: false,
          explanation: "The normal plural is бра́тья; бра́ты appears only jocularly/technically.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u01-l3",
      title: "Step 3: accusative plural — animate vs inanimate",
      topicIds: ["b1-u01-plurals"],
      vocab: ["читать", "журнал", "видеть", "студент", "студентка", "друг", "встречать", "знать", "кошка", "собака"],
      grammar: [
        {
          title: "Two accusative plurals",
          body: `One plural is not enough: the accusative splits by animacy, the distinction English never makes. The test from A2 still works — can it walk away and complain?

- **Inanimate** = nominative plural: Я чита́ю журна́лы.
- **Animate** = genitive plural: Я ви́жу студенто́в, студенток, друзе́й.`,
          why: `Animacy reflects an old intuition: beings that can act back were promoted to receiver status. Russian drew the line between walking-and-protesting and everything else — and applies it to chess pieces, consistent to the point of absurdity.`,

          table: {
            headers: ["Noun", "Accusative plural"],
            rows: [
              ["журналы (inan)", "журналы"],
              ["студенты (anim)", "студентов"],
              ["друзья (anim)", "друзей"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u01-l3-e1",
          type: "single",
          text: "Я ви́жу ___.",
          options: [{ id: "a", label: "студентов" }, { id: "b", label: "студенты" }], answer: "a",
        },
        {
          id: "b1-u01-l3-e2",
          type: "single",
          text: "Я чита́ю ___.",
          options: [{ id: "a", label: "журналы" }, { id: "b", label: "журналов" }], answer: "a",
        },
        {
          id: "b1-u01-l3-e3",
          type: "fill-blank",
          text: "Она́ встре́тила ___. *(friends)*",
          answers: ["друзей"],
        },
      ],
      drills: [{ kind: "noun-case", count: 3, cases: ["acc"] }, { kind: "cloze", count: 2 }],
    },
    {
      id: "b1-u01-l4",
      title: "Step 4: dative, instrumental, prepositional plural",
      topicIds: ["b1-u01-plurals"],
      vocab: ["помогать", "говорить", "гордиться", "заниматься", "вопрос", "родители", "дети", "слово", "письмо", "глава"],
      grammar: [
        {
          title: "All genders share one set",
          body: `Good news for a change: in the dative, instrumental and prepositional, **every gender collapses into one ending set**. This is the most forgiving corner of the plural system:

- **Dative: -ам/-ям** (студе́нтам, кни́гам, зда́ниям)
- **Instrumental: -ами/-ями** (студе́нтами, две́рями)
- **Prepositional: -ах/-ях** (о студе́нтах, в кни́гах, в зда́ниях)
Prepositional -ья nouns keep the ь: сту́лья → о сту́льях.`,
          why: `Why one ending set for all genders? These cases descend from an older plural that never cared about gender. The genitive plural (next step) is where genders stayed separate — which is exactly why it is so much harder.`,

          table: {
            headers: ["Case", "Ending", "Example"],
            rows: [
              ["dative", "-ам/-ям", "Я помогаю студентам"],
              ["instrumental", "-ами/-ями", "Я говорю со студентами"],
              ["prepositional", "-ах/-ях", "Мы говорим о студентах"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u01-l4-e1",
          type: "single",
          text: "Я говори́л со все́ми ___. (студе́нты)",
          options: [{ id: "a", label: "студентами" }, { id: "b", label: "студентах" }], answer: "a",
        },
        {
          id: "b1-u01-l4-e2",
          type: "fill-blank",
          text: "Де́ти игра́ют с ___. *(parents)*",
          answers: ["родителями"],
        },
        {
          id: "b1-u01-l4-e3",
          type: "true-false",
          text: "Dative plural: one ending set for every gender.",
          answer: true,
        },
      ],
      drills: [{ kind: "noun-case", count: 4 }, { kind: "cloze", count: 2 }],
    },
    {
      id: "b1-u01-l5",
      title: "Step 5: genitive plural — the boss level",
      topicIds: ["b1-u01-plurals"],
      vocab: ["много", "мало", "несколько", "сколько", "книга", "песня", "здание", "окно", "студент", "музей"],
      grammar: [
        {
          title: "Five patterns cover most of it",
          body: `Here it is — the chart that decides whether your Russian reads native. The genitive plural is required after мно́го, ма́ло, не́сколько, ско́лько and every numeral from 5 up, and its endings follow five patterns:

- masculine hard → **-ов** (студе́нтов); -й/-ь → **-ев/-ей** (музе́ев, преподавателей)
- feminine **-а → drop** (кни́г), **-я → -ь** (пе́сен), **-ь → -ей** (тетра́дей)
- neuter **-о → drop** (о́кон), **-е → -ей** (море́й), **-ие → -ий** (зда́ний)
- Always: **мно́го / ма́ло / не́сколько / ско́лько / 5+ + gen pl**`,
          why: `The drop-the-vowel pattern (книг from книга) is the mobile-vowel phenomenon: vowels strong in the singular weaken and vanish in the plural. Some plurals look "too short" because the old skeleton shows through.`,

          table: {
            headers: ["Nom pl", "Gen pl", "Pattern"],
            rows: [
              ["студенты", "студентов", "-ов"],
              ["книги", "книг", "drop -а"],
              ["песни", "песен", "mobile vowel"],
              ["здания", "зданий", "-ий"],
            ],
          },
          tip: "де́ньги → де́нег, но́вости → но́востей, часы́ → часо́в: learn pl-only nouns as chunks.",
        },
      ],
      exercises: [
        {
          id: "b1-u01-l5-e1",
          type: "single",
          text: "У него́ мно́го ___. (во́просы)",
          options: [{ id: "a", label: "вопросов" }, { id: "b", label: "вопросы" }], answer: "a",
        },
        {
          id: "b1-u01-l5-e2",
          type: "fill-blank",
          text: "Она́ купи́ла пять ___. *(notebooks)*",
          answers: ["тетрадей"],
        },
        {
          id: "b1-u01-l5-e3",
          type: "matching",
          text: "Nom pl → gen pl:",
          prompts: [
            { id: "p1", label: "друзья" },
            { id: "p2", label: "книги" },
            { id: "p3", label: "здания" },
          ],
          responses: [
            { id: "r1", label: "зданий" },
            { id: "r2", label: "друзей" },
            { id: "r3", label: "книг" },
          ],
          answer: { p1: "r2", p2: "r3", p3: "r1" },
        },
      ],
      drills: [{ kind: "noun-case", count: 4, cases: ["gen"] }, { kind: "cloze", count: 2 }],
    },
  ],

  test: [
    {
      id: "b1-u01-test-1", type: "single",
      text: "Де́ти игра́ют во дворе́ без ___. (взро́слые)",
      options: [{ id: "a", label: "взрослых" }, { id: "b", label: "взрослые" }], answer: "a",
      explanation: "без + gen pl: взро́слых.",
    },
    {
      id: "b1-u01-test-2", type: "short-answer",
      text: "5 + ___ (окно́, gen pl)",
      answer: "окон",
    },
    {
      id: "b1-u01-test-3", type: "single",
      text: "Он горди́тся ___. (его́ де́ти)",
      options: [{ id: "a", label: "его детьми" }, { id: "b", label: "его детей" }], answer: "a",
    },
    {
      id: "b1-u01-test-4", type: "true-false",
      text: "Dative plural: one ending set for all genders (-ам/-ям).",
      answer: true,
    },
    {
      id: "b1-u01-test-5", type: "matching",
      text: "Nom pl → gen pl:",
      prompts: [
        { id: "p1", label: "друзья" }, { id: "p2", label: "книги" }, { id: "p3", label: "здания" },
      ],
      responses: [
        { id: "r1", label: "зданий" }, { id: "r2", label: "друзей" }, { id: "r3", label: "книг" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
    {
      id: "b1-u01-test-6", type: "short-answer",
      text: "Translate: (I read a lot of books.)",
      answer: "я много читаю книг",
      accept: ["я много читал книг", "я много читаю книги"],
    },
  ],
};
