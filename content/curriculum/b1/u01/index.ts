import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 1 — Plurals in all six cases. */
export const u01: Unit = {
  id: "b1-u01",
  level: "b1",
  number: 1,
  title: "Plurals everywhere: the six-case map",
  topicIds: ["b1-u01-plurals"],
  lessons: [
    {
      id: "b1-u01-l1",
      title: "Nominative & accusative plural",
      topicIds: ["b1-u01-plurals"],
      vocab: ["студент", "студентка", "преподаватель", "окно", "здание", "газета", "журнал", "ручка", "тетрадь", "словарь"],
      grammar: [
        {
          title: "Building the plural",
          body: `Nominative plural: masculine hard → **-ы** (студе́нты), **-й/-ь** → **-и** (музе́и, преподаватели), feminine **-а/-я** → **-ы/-и** (газе́ты, тетра́ди), neuter **-о/-е** → **-а/-я** (окна́, зда́ния).
Spelling rule: after к,г,х,ж,ш,ч,щ → **-и** (кни́ги, враги́).`,
          table: {
            headers: ["Sg", "Pl", "Sg", "Pl"],
            rows: [
              ["студент", "студенты", "газета", "газеты"],
              ["музей", "музеи", "тетрадь", "тетради"],
              ["окно", "окна", "здание", "здания"],
            ],
          },
          examples: [
            { ru: "Студе'нты чита'ют журна'лы.", en: "The students are reading magazines." },
          ],
          tip: "Irregulars to learn now: де́нь → дни, друг → друзья́, сын → сыновья́, брат → бра́тья. Mobile vowels drop out: продаве́ц → продавцы́.",
        },
        {
          title: "Accusative plural: inanimate vs animate",
          body: `Inanimate accusative plural = nominative plural (Я чита́ю журна́лы).
**Animate** accusative = genitive plural: Я ви́жу студенто́в (m), студенток (f), друзей (from друг).`,
          examples: [
            { ru: "Я ви'жу на'ших преподава'телей.", en: "I see our teachers." },
          ],
        },
      ],
      exercises: [
        {
          id: "b1-u01-l1-e1",
          type: "single",
          text: "В кла́ссе сидя́т ___. (студе́нты — accusative needed?)",
          options: [
            { id: "a", label: "Я вижу студентов" },
            { id: "b", label: "Я вижу студенты" },
          ],
          answer: "a",
        },
        {
          id: "b1-u01-l1-e2",
          type: "fill-blank",
          text: "У меня́ два́дцать но́вых {{blank}}. *(дру́зья → gen pl after numerals 5+)*",
          answers: ["друзей"],
        },
        {
          id: "b1-u01-l1-e3",
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
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u01-l2",
      title: "Genitive, dative, instrumental, prepositional plural",
      topicIds: ["b1-u01-plurals"],
      vocab: ["вопрос", "ответ", "пример", "ошибка", "слово", "страница", "глава", "письмо", "деньги", "известие"],
      grammar: [
        {
          title: "One ending set for all genders",
          body: `The great simplification: in dative, instrumental and prepositional plural, all genders share endings:
- **Dative: -ам / -ям** (студе́нтам, кни́гам, зда́ниям)
- **Instrumental: -ами / -ями** (студе́нтами, кни́гами, две́рями)
- **Prepositional: -ах / -ях** (о студе́нтах, в кни́гах, в зда́ниях)`,
          table: {
            headers: ["Case", "Ending", "Example"],
            rows: [
              ["dative", "-ам/-ям", "Я помогаю студентам"],
              ["instrumental", "-ами/-ями", "Я говорю со студентами"],
              ["prepositional", "-ах/-ях", "Мы говорим о студентах"],
            ],
          },
          examples: [
            { ru: "Де'ти игра'ют с роди'телями.", en: "The children are playing with (their) parents." },
          ],
          tip: "Prepositional -ья nouns keep the soft sign lost in nom plural: стулья → о сту́льях, друзья́ → о друзья́х.",
        },
        {
          title: "Genitive plural: the hardest ending in Russian",
          body: `Rules of thumb:
- masculine hard → **-ов** (студе́нтов), -й/-ь → **-ев/-ей** (музе́ев, преподавателей)
- feminine **-а** → drop (кни́га → кни́г), **-я** → **-ь** (пе́сня → пе́сен), **-ь** → **-ей** (тетра́дей)
- neuter **-о** → drop, restore mobile vowel (окно́ → о́кон), **-е** → **-ей** (мо́ре → море́й)
- Always-genitive words: мно́го, ма́ло, не́сколько, ско́лько, 5+`,
          table: {
            headers: ["Nom pl", "Gen pl", "Type"],
            rows: [
              ["студенты", "студентов", "-ов"],
              ["музеи", "музеев", "-ев"],
              ["книги", "книг", "drop -а"],
              ["песни", "песен", "mobile vowel"],
              ["окна", "окон", "mobile vowel"],
              ["здания", "зданий", "-ий"],
            ],
          },
          examples: [
            { ru: "Она' купи'ла пять тетра'дей.", en: "She bought five notebooks." },
          ],
          tip: "Some nouns only exist in plural: де́ньги (gen: де́нег), но́вости (gen: изве́стий), часы́ (gen: часов).",
        },
      ],
      exercises: [
        {
          id: "b1-u01-l2-e1",
          type: "single",
          text: "Я говори́л со всеми ___. (студе́нты)",
          options: [
            { id: "a", label: "студентами" },
            { id: "b", label: "студентах" },
            { id: "c", label: "студентам" },
          ],
          answer: "a",
        },
        {
          id: "b1-u01-l2-e2",
          type: "fill-blank",
          text: "У него́ мно́го ___. *(во́просы)*",
          answers: ["вопросов"],
        },
        {
          id: "b1-u01-l2-e3",
          type: "fill-blank",
          text: "Мы говори́ли о ___. *(известия — pl-only news)*",
          answers: ["известиях"],
        },
        {
          id: "b1-u01-l2-e4",
          type: "true-false",
          text: "Genitive plural of газе́та is газе́т (drop the final -а).",
          answer: true,
        },
      ],
      drills: [
        { kind: "noun-case", count: 6 },
        { kind: "cloze", count: 2 },
      ],
    },
  ],

  test: [
    {
      id: "b1-u01-test-1",
      type: "single",
      text: "Де́ти игра́ют во дворе́ без ___. (взро́слые)",
      options: [
        { id: "a", label: "взрослых" },
        { id: "b", label: "взрослые" },
        { id: "c", label: "взрослым" },
      ],
      answer: "a",
      explanation: "без + gen pl: взро́слых.",
    },
    {
      id: "b1-u01-test-2",
      type: "short-answer",
      text: "5 + ___ (окно́, gen pl)",
      answer: "окон",
    },
    {
      id: "b1-u01-test-3",
      type: "single",
      text: "Он гордится ___. (его́ де́ти)",
      options: [
        { id: "a", label: "его детьми" },
        { id: "b", label: "его детей" },
        { id: "c", label: "его детьми" },
      ],
      answer: "a",
    },
    {
      id: "b1-u01-test-4",
      type: "true-false",
      text: "Dative plural: все гендеры, один набор окончаний (-ам/-ям).",
      answer: true,
    },
    {
      id: "b1-u01-test-5",
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
    {
      id: "b1-u01-test-6",
      type: "short-answer",
      text: "Translate: (I read a lot of books.)",
      answer: "я много читаю книг",
      accept: ["я много читал книг", "я много читаю книги"],
    },
  ],
};
