import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 5 — -ся verbs: the full system. */
export const u05: Unit = {
  id: "b1-u05",
  level: "b1",
  number: 5,
  title: "-ся verbs: six meanings behind one suffix",
  topicIds: ["b1-u05-reflexives-full"],
  lessons: [
    {
      id: "b1-u05-l1",
      title: "True reflexive, reciprocal, middle",
      topicIds: ["b1-u05-reflexives-full"],
      vocab: ["одеваться", "мыть", "умываться", "брить", "бриться", "знакомить", "знакомиться", "обнимать", "собираться", "купаться"],
      grammar: [
        {
          title: "Three core meanings",
          body: `**True reflexive** — action on oneself: мыть → мы́ться (wash oneself), одева́ться, бри́ться.
**Reciprocal** — each other: знако́мить → знако́миться (meet/get acquainted), обнима́ться, ви́деться (Мы ре́дко ви́димся).
**Middle** — for oneself / in one's own interest: собира́ться (get ready), купа́ться (have a swim), приче́сываться.`,
          table: {
            headers: ["Verb", "Type", "Meaning"],
            rows: [
              ["умываться", "reflexive", "wash oneself"],
              ["знакомиться", "reciprocal", "get acquainted"],
              ["купаться", "middle", "go swimming"],
              ["находиться", "passive-like", "be located"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u05-l1-e1",
          type: "matching",
          text: "Type of -ся use:",
          prompts: [
            { id: "p1", label: "Они́ познако́мились в шко́ле" },
            { id: "p2", label: "Она́ одева́ется бы́стро" },
            { id: "p3", label: "Музе́й нахо́дится в це́нтре" },
          ],
          responses: [
            { id: "r1", label: "passive-like" },
            { id: "r2", label: "reciprocal" },
            { id: "r3", label: "reflexive" },
          ],
          answer: { p1: "r2", p2: "r3", p3: "r1" },
        },
        {
          id: "b1-u05-l1-e2",
          type: "true-false",
          text: "Мы ре́дко ви́димся = we rarely see each other.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u05-l2",
      title: "Passive -ся, emotion verbs, -сь after vowels",
      topicIds: ["b1-u05-reflexives-full"],
      vocab: ["строить", "строиться", "продавать", "продаваться", "радоваться", "бояться", "надеяться", "улыбнуться", "гордиться", "интересоваться"],
      grammar: [
        {
          title: "Passive -ся and emotion verbs",
          body: `**Passive**: the thing is the subject, agent optional: Э́тот дом стро́ится у́же... clearer: До́м стро́ится (the house is being built), Продаю́тся я́блоки (apples are sold).
**Emotion / attitude verbs** govern cases:
- ра́доваться / горди́ться + **instrumental**: ра́дуюсьве́стям... ра́дуюсь но́востям, горжу́сьcountries? — горжусь страной
- боя́ться + **genitive**: бою́сь темноты́
- наде́яться **на + acc**: наде́юсь на тебя́
- интересова́ться + **instrumental**: интересу́юсь исто́рией`,
          examples: [
            { ru: "Здесь продаю'тся све'жие фру'кты.", en: "Fresh fruit is sold here." },
            { ru: "Я не бою'сь тру'дностей.", en: "I'm not afraid of difficulties." },
          ],
          tip: "Spelling: after a vowel the suffix is -сь: учу́сь? — no wait, that's consonant; after vowel: попроси́ла → попросила́сь? Just: она́ купа́лась, они́ купа́лись, я купа́лась (f).",
        },
      ],
      exercises: [
        {
          id: "b1-u05-l2-e1",
          type: "single",
          text: "Я горжу́сь ___. (его́ успе́хи, instrumental)",
          options: [{ id: "a", label: "его успехами" }, { id: "b", label: "его успехов" }], answer: "a"
        },
        {
          id: "b1-u05-l2-e2",
          type: "single",
          text: "Она́ бои́тся ___. (со́баки)",
          options: [{ id: "a", label: "собак" }, { id: "b", label: "собаку" }], answer: "a"
        },
        {
          id: "b1-u05-l2-e3",
          type: "fill-blank",
          text: "Мы наде́емся ___ лу́чшее. *(на + acc)*",
          answers: ["на"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u05-test-1",
      type: "single",
      text: "Э́тот заво́д ___ в 1980-х. (was built — passive -ся)",
      options: [{ id: "a", label: "строился" }, { id: "b", label: "построил" }], answer: "a"
    },
    {
      id: "b1-u05-test-2",
      type: "single",
      text: "Она́ интересу́ется ___. (му́зыка, instrumental)",
      options: [{ id: "a", label: "музыкой" }, { id: "b", label: "музыку" }], answer: "a"
    },
    {
      id: "b1-u05-test-3",
      type: "true-false",
      text: "бойся + accusative: бою́сь соба́ку.",
      answer: false,
      explanation: "Genitive: бою́сь соба́ки.",
    },
    {
      id: "b1-u05-test-4",
      type: "short-answer",
      text: "We rarely see each other: (Мы ре́дко…)",
      answer: "мы редко видимся",
    },
  ],
};
