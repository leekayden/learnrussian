import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 3 — Genitive singular: possession, absence, quantity. */
export const u03: Unit = {
  id: "a2-u03",
  level: "a2",
  number: 3,
  title: "The genitive: of, from, without",
  topicIds: ["a2-u03-genitive-sg"],
  lessons: [
    {
      id: "a2-u03-l1",
      title: "Genitive endings: whose is it?",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: [
        "машина",
        "телефон",
        "ключ",
        "сумка",
        "деньги",
        "чай",
        "сахар",
        "молоко",
        "хлеб",
        "вода",
      ],
      grammar: [
        {
          title: "What the genitive does",
          body: `The **genitive** answers "whose?" / "of what?" — and much more: absence (нет), quantity (мно́го), and after prepositions до, по́сле, без, для, о́коло, у, от, из, с (from).
Endings (singular):
- masculine consonant → **+а** (до́м → до́ма, телефо́н → телефо́на)
- masculine **-й / -ь** → **-я** (музе́й → музе́я, слова́рь → словаря́)
- feminine **-а** → **-ы** (маши́на → маши́ны)
- feminine **-я / -ь** → **-и** (пе́сня → пе́сни, пло́щадь → пло́щади)
- neuter **-о** → **-а**, **-е** → **-я** (молоко́ → молока́, мо́ре → мо́ря)`,
          table: {
            caption: "Genitive singular endings",
            headers: ["Type", "Nominative", "Genitive"],
            rows: [
              ["masc (hard)", "дом", "дома"],
              ["masc (soft/й)", "музей", "музея"],
              ["fem -а → -ы", "машина", "машины"],
              ["fem -я → -и", "песня", "песни"],
              ["neut -о → -а", "молоко", "молока"],
              ["neut -е → -я", "море", "моря"],
            ],
          },
          examples: [
            { ru: "Э'то маши'на бра'та.", en: "This is (my) brother's car." },
            { ru: "Где ключ о'т до'ма?", en: "Where is the key to the house?" },
          ],
          tip: "Spelling rule: after к, г, х, ж, ш, ч the feminine genitive is always **-и**, never -ы (кни́га → кни́ги, подру́га → подру́ги).",
        },
        {
          title: "у + genitive: 'have' in Russian",
          body: `Russian has no verb "to have". Instead: **у + genitive person + есть + thing**:
- У меня́ есть маши́на. — I have a car. (literally: by me there is a car)
- У тебя́ есть ключ? — Do you have a key?
- У бра́та есть телефо́н. — (My) brother has a phone.
Negation: **У меня́ нет + genitive** — У меня́ нет вре́мени. (I have no time — вре́мя → вре́мени, an -мя noun.)`,
          examples: [
            { ru: "У вас есть вода'?", en: "Do you have water?" },
            { ru: "У меня' нет де'нег.", en: "I have no money." },
          ],
          tip: "де́ньги is plural-only; its genitive is де́нег. Learn у меня́ нет де́нег as a chunk.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l1-e1",
          type: "single",
          text: "Э́то маши́на ___. (of my father — отец)",
          options: [
            { id: "a", label: "отец" },
            { id: "b", label: "отца" },
            { id: "c", label: "отцу" },
          ],
          answer: "b",
        },
        {
          id: "a2-u03-l1-e2",
          type: "single",
          text: "У меня́ нет ___. (time — вре́мя)",
          options: [
            { id: "a", label: "время" },
            { id: "b", label: "времени" },
            { id: "c", label: "время́" },
          ],
          answer: "b",
          explanation: "-мя nouns → -мени in genitive.",
        },
        {
          id: "a2-u03-l1-e3",
          type: "fill-blank",
          text: "Чай без {{blank}}, пожа́луйста. *(Tea without sugar, please.)*",
          answers: ["сахара"],
        },
        {
          id: "a2-u03-l1-e4",
          type: "fill-blank",
          text: "У {{blank}} есть соба́ка. *(My sister has a dog.)*",
          answers: ["сестры"],
        },
        {
          id: "a2-u03-l1-e5",
          type: "true-false",
          text: "«Кни́га бра́та» means “the brother's book”.",
          answer: true,
        },
      ],
      drills: [
        { kind: "noun-case", count: 5, cases: ["gen"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u03-l2",
      title: "Quantities, dates and the genitive",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: [
        "килограмм",
        "литр",
        "бутылка",
        "пачка",
        "штука",
        "метр",
        "минута",
        "час",
        "неделя",
        "месяц",
      ],
      grammar: [
        {
          title: "Numbers 2+, quantities, мно́го / ма́ло",
          body: `After words of quantity use the genitive:
- **мно́го / ма́ло / не́сколько + gen.**: мно́го воды́, ма́ло вре́мени
- measures: **килогра́мм хлеба, ли́тр молока́, ча́шка ча́я** (ча́шка is feminine → ча́й becomes ча́я? — ча́й is masculine: ча́шки ча́я — the counted noun is genitive: ча́я)
- **1 + nominative, but 2-4 need a special form (unit 11)** — for now: не́сколько дне́й (several days)`,
          examples: [
            { ru: "Дай, пожа'луйста, килогра'мм я'блок.", en: "Give me a kilo of apples, please." },
            { ru: "У меня' мно'го рабо'ты.", en: "I have a lot of work." },
          ],
          tip: "Use the genitive after a quantity — not the accusative. «Я хочу́ воды́» = some water; «Я хочу́ во́ду» = THE water (all of it). Both exist; quantity-flavoured requests prefer genitive.",
        },
        {
          title: "From, after, until, for",
          body: `These prepositions always take the genitive:
- **из / с / от** = from: из Росси́и (from Russia), с рабо́ты (from work), от дру́га (from a friend)
- **до / по́сле** = until / after: до пяти́, по́сле уро́ка
- **для / без / о́коло / у** = for / without / near / by: для ма́мы, без пробле́м, о́коло до́ма, у окна́`,
          examples: [
            { ru: "Я возвраща'юсь с рабо'ты в семь.", en: "I come back from work at seven." },
            { ru: "По'сле у'жина мы смотрим фи'льм.", en: "After dinner we watch a film." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u03-l2-e1",
          type: "single",
          text: "Я приду́ по́сле ___. (the lesson)",
          options: [
            { id: "a", label: "урок" },
            { id: "b", label: "урока" },
            { id: "c", label: "уроку" },
          ],
          answer: "b",
        },
        {
          id: "a2-u03-l2-e2",
          type: "single",
          text: "У мена́ мно́го ___. (work — рабо́та)",
          options: [
            { id: "a", label: "работы" },
            { id: "b", label: "работу" },
            { id: "c", label: "работе" },
          ],
          answer: "a",
        },
        {
          id: "a2-u03-l2-e3",
          type: "fill-blank",
          text: "Это пода́рок для {{blank}}. *(This is a present for my mother.)*",
          answers: ["матери"],
          explanation: "мать → genitive ма́тери (special).",
        },
        {
          id: "a2-u03-l2-e4",
          type: "fill-blank",
          text: "Магази́н на́ходится о́коло {{blank}}. *(The shop is near the house.)*",
          answers: ["дома"],
        },
        {
          id: "a2-u03-l2-e5",
          type: "true-false",
          text: "«До за́втра» means “until tomorrow”.",
          answer: true,
          explanation: "до + genitive: до за́втра — a fixed farewell expression.",
        },
      ],
      drills: [
        { kind: "noun-case", count: 5, cases: ["gen"] },
        { kind: "cloze", count: 2 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u03-test-1",
      type: "single",
      text: "У меня́ нет ___. (car)",
      options: [
        { id: "a", label: "машина" },
        { id: "b", label: "машины" },
        { id: "c", label: "машину" },
      ],
      answer: "b",
    },
    {
      id: "a2-u03-test-2",
      type: "short-answer",
      text: "Whose phone is it? — «телефо́н бра́та» means:",
      answer: "брата телефон",
      accept: ["the brother's phone", "brother's phone"],
    },
    {
      id: "a2-u03-test-3",
      type: "short-answer",
      text: "Translate: «Я из Росси́и.»",
      answer: "i am from russia",
      accept: ["i'm from russia", "i am from russia"],
    },
    {
      id: "a2-u03-test-4",
      type: "fill-blank",
      text: "Ча́шка {{blank}}, пожа́луйста. *(A cup of tea, please.)*",
      answers: ["чая"],
    },
    {
      id: "a2-u03-test-5",
      type: "true-false",
      text: "«О́коло до́ма» uses the genitive case.",
      answer: true,
    },
    {
      id: "a2-u03-test-6",
      type: "matching",
      text: "Preposition → meaning:",
      prompts: [
        { id: "p1", label: "без" },
        { id: "p2", label: "для" },
        { id: "p3", label: "по́сле" },
        { id: "p4", label: "о́коло" },
      ],
      responses: [
        { id: "r1", label: "after" },
        { id: "r2", label: "without" },
        { id: "r3", label: "near" },
        { id: "r4", label: "for" },
      ],
      answer: { p1: "r2", p2: "r4", p3: "r1", p4: "r3" },
    },
    {
      id: "a2-u03-test-7",
      type: "short-answer",
      text: "У тебя́ есть __? (keys — plural key «ключи́», genitive «ключе́й» — write the genitive)",
      answer: "ключей",
    },
  ],
};
