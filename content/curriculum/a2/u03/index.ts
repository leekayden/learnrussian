import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 3 — Genitive singular, one step at a time. */
export const u03: Unit = {
  id: "a2-u03",
  level: "a2",
  number: 3,
  title: "The genitive: of, from, without",
  topicIds: ["a2-u03-genitive-sg"],
  lessons: [
    {
      id: "a2-u03-l1",
      title: "Step 1: masculine genitive — whose is it?",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["машина", "телефон", "ключ", "брат", "отец", "друг", "дом", "роман", "автор", "учитель"],
      grammar: [
        {
          title: "Masculine → -а / -я",
          body: `“Whose? Of what?” — masculine nouns add **-а** (hard) or **-я** (soft -й/-ь):
- телефо́н → телефо́на; музе́й → музе́я; учи́тель → учи́теля
- Э́то маши́на **бра́та**. — This is my brother's car.
- Ключ **о́т до́ма** — the key to the house.`,
          table: {
            headers: ["Nominative", "Genitive"],
            rows: [
              ["брат", "брата"],
              ["телефон", "телефона"],
              ["учитель", "учителя"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u03-l1-e1",
          type: "single",
          text: "Э́то маши́на ___. (отец)",
          options: [{ id: "a", label: "отца" }, { id: "b", label: "отец" }], answer: "a",
        },
        {
          id: "a2-u03-l1-e2",
          type: "fill-blank",
          text: "рома́н ___. *(of the writer — писа́тель)*",
          answers: ["писателя"],
        },
        {
          id: "a2-u03-l1-e3",
          type: "true-false",
          text: "«Ключ от до́ма» — дом stays nominative.",
          answer: false,
          explanation: "от + genitive: до́ма.",
        },
      ],
      drills: [{ kind: "noun-case", count: 4, cases: ["gen"] }],
    },
    {
      id: "a2-u03-l2",
      title: "Step 2: feminine & neuter genitive",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["сестра", "мать", "книга", "песня", "молоко", "море", "время", "подруга", "тетрадь", "имя"],
      grammar: [
        {
          title: "-ы / -и / -а / -я",
          body: `- feminine **-а → -ы**: маши́на → маши́ны; **-я → -и**: пе́сня → пе́сни; **-ь → -и**: тетра́дь → тетра́ди
- neuter **-о → -а**: молоко́ → молока́; **-е → -я**: мо́ре → мо́ря
- Spelling: after к,г,х,ж,ш,ч → always **-и** (подру́га → подру́ги)
- **-мя** nouns: вре́мя → вре́мени, и́мя → и́мени`,
          table: {
            headers: ["Nominative", "Genitive"],
            rows: [
              ["машина", "машины"],
              ["песня", "песни"],
              ["молоко", "молока"],
              ["море", "моря"],
              ["время", "времени"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u03-l2-e1",
          type: "single",
          text: "У меня́ нет ___. (вре́мя)",
          options: [{ id: "a", label: "времени" }, { id: "b", label: "время" }], answer: "a",
        },
        {
          id: "a2-u03-l2-e2",
          type: "fill-blank",
          text: "книга ___. *(of the sister)*",
          answers: ["сестры"],
        },
        {
          id: "a2-u03-l2-e3",
          type: "true-false",
          text: "After к/г/х write -и: подру́ги.",
          answer: true,
        },
      ],
      drills: [{ kind: "noun-case", count: 4, cases: ["gen"] }],
    },
    {
      id: "a2-u03-l3",
      title: "Step 3: у меня есть / у меня нет",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["есть", "нет", "деньги", "время", "машина", "ключ", "собака", "брат", "вопрос", "ответ"],
      grammar: [
        {
          title: "Possession lives at у + person",
          body: `- Have: **У меня́ есть** + nominative thing: У меня́ есть соба́ка.
- Have not: **У меня́ нет** + GENITIVE thing: У меня́ нет соба́ки.
- Past: У меня́ **была́** соба́ка. (быть agrees with the thing)
Person goes genitive too: **у бра́та**, **у сестры́**, **у нас**.`,
          table: {
            headers: ["Pattern", "Example"],
            rows: [
              ["У + gen + есть + nom", "У брата есть машина"],
              ["У + gen + нет + gen", "У брата нет машины"],
            ],
          },
          tip: "де́ньги is plural-only; genitive де́нег: «У меня́ нет де́нег» — memorise the chunk.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l3-e1",
          type: "single",
          text: "У меня́ нет ___. (ключ)",
          options: [{ id: "a", label: "ключа" }, { id: "b", label: "ключ" }], answer: "a",
        },
        {
          id: "a2-u03-l3-e2",
          type: "fill-blank",
          text: "___ есть вре́мя? *(Do you have time?)*",
          answers: ["У тебя"],
        },
        {
          id: "a2-u03-l3-e3",
          type: "true-false",
          text: "«У меня́ нет де́нег» is correct.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u03-l4",
      title: "Step 4: quantities want the genitive",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["много", "мало", "несколько", "килограмм", "литр", "чашка", "бутылка", "стакан", "пачка", "яблоко"],
      grammar: [
        {
          title: "мно́го / ма́ло / measures + gen",
          body: `- **мно́го / ма́ло / не́сколько + genitive**: мно́го рабо́ты, ма́ло вре́мени
- Measures: **килогра́мм я́блок**, **ли́тр молока́**, **ча́шка ча́я**, **буты́лка воды́**
- Nuance: «Я хочу́ воды́» = some water; «Я хочу́ во́ду» = that particular water.`,
          table: {
            headers: ["Measure", "Genitive"],
            rows: [
              ["чашка", "чая"],
              ["литр", "молока"],
              ["килограмм", "яблок"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u03-l4-e1",
          type: "single",
          text: "У меня́ мно́го ___. (рабо́та)",
          options: [{ id: "a", label: "работы" }, { id: "b", label: "работу" }], answer: "a",
        },
        {
          id: "a2-u03-l4-e2",
          type: "fill-blank",
          text: "Ча́шка ___, пожа́луйста. *(tea)*",
          answers: ["чая"],
        },
        {
          id: "a2-u03-l4-e3",
          type: "fill-blank",
          text: "Купи́ килогра́мм ___. *(apples)*",
          answers: ["яблок"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u03-l5",
      title: "Step 5: the genitive preposition family",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["из", "с", "от", "до", "после", "без", "для", "около", "у", "против"],
      grammar: [
        {
          title: "Eight prepositions, one case",
          body: `- **из / с / от** = from: из Росси́и, с рабо́ты, от дру́га
- **до / по́сле** = until / after: до пяти́, по́сле уро́ка
- **для / без / о́коло / у / про́тив** = for / without / near / by / against
All of them + **genitive**, no exceptions.`,
          table: {
            headers: ["Preposition", "Example"],
            rows: [
              ["из", "из Лондона"],
              ["до", "до вечера"],
              ["без", "без сахара"],
              ["около", "около дома"],
            ],
          },
          tip: "«До за́втра!» — until tomorrow — a farewell built on до + gen.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l5-e1",
          type: "single",
          text: "Я приду́ по́сле ___. (уро́к)",
          options: [{ id: "a", label: "урока" }, { id: "b", label: "урок" }], answer: "a",
        },
        {
          id: "a2-u03-l5-e2",
          type: "fill-blank",
          text: "Это пода́рок для ___. *(mother — ма́ть → ма́тери)*",
          answers: ["матери"],
        },
        {
          id: "a2-u03-l5-e3",
          type: "fill-blank",
          text: "Магази́н о́коло ___. *(house)*",
          answers: ["дома"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u03-test-1", type: "single",
      text: "У меня́ нет ___. (car)",
      options: [{ id: "a", label: "машины" }, { id: "b", label: "машину" }], answer: "a",
    },
    {
      id: "a2-u03-test-2", type: "short-answer",
      text: "Whose phone? — «телефо́н бра́та» means:",
      answer: "брата телефон",
      accept: ["the brother's phone", "brother's phone"],
    },
    {
      id: "a2-u03-test-3", type: "short-answer",
      text: "Translate: «Я из Росси́и.»",
      answer: "я из россии",
    },
    {
      id: "a2-u03-test-4", type: "fill-blank",
      text: "Ча́шка ___, пожа́луйста.",
      answers: ["чая"],
    },
    {
      id: "a2-u03-test-5", type: "true-false",
      text: "«О́коло до́ма» uses the genitive.",
      answer: true,
    },
    {
      id: "a2-u03-test-6", type: "matching",
      text: "Preposition → meaning:",
      prompts: [
        { id: "p1", label: "без" }, { id: "p2", label: "для" }, { id: "p3", label: "по́сле" }, { id: "p4", label: "о́коло" },
      ],
      responses: [
        { id: "r1", label: "after" }, { id: "r2", label: "without" }, { id: "r3", label: "near" }, { id: "r4", label: "for" },
      ],
      answer: { p1: "r2", p2: "r4", p3: "r1", p4: "r3" },
    },
    {
      id: "a2-u03-test-7", type: "short-answer",
      text: "Genitive plural: ключи́ → (нет ___)",
      answer: "ключей",
    },
  ],
};
