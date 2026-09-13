import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 5 — -ся verbs, one step at a time. */
export const u05: Unit = {
  id: "b1-u05",
  level: "b1",
  number: 5,
  title: "-ся verbs: six meanings behind one suffix",
  topicIds: ["b1-u05-reflexives-full"],
  lessons: [
    {
      id: "b1-u05-l1",
      title: "Step 1: reflexive, reciprocal, middle",
      topicIds: ["b1-u05-reflexives-full"],
      vocab: ["одеваться", "умываться", "бриться", "знакомиться", "обниматься", "видеться", "собираться", "купаться", "причёсываться", "познакомиться"],
      grammar: [
        {
          title: "Three core meanings",
          body: `-ся has four jobs (reflexive, reciprocal, engage-in, located) — and one spelling rule: after a consonant -ся, after a vowel -сь. Он купа́лся, она́ купа́лась. The rule is mechanical; the meanings need context.- **True reflexive** — action on oneself: мы́ться, одева́ться, бри́ться
- **Reciprocal** — each other: знако́миться, обнима́ться, ви́деться (Мы ре́дко ви́димся.)
- **Middle** — for oneself: собира́ться (get ready), купа́ться (go swimming)`,
          plain: `Think of -ся as a tiny "self" tag: the action bounces back on the doer, two people do it to each other, or it marks a routine like getting dressed. Context decides which.`,
          why: "-ся is a worn-down stub of the old pronoun сябе (self), glued onto verb endings centuries ago. That is why one suffix covers 'myself', 'each other' and nothing-in-particular — context picks the reading, and Russian is comfortable with that ambiguity in a way English is not.",

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
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u05-l2",
      title: "Step 2: passive -ся and emotion verbs",
      topicIds: ["b1-u05-reflexives-full"],
      vocab: ["строить", "строиться", "продавать", "радоваться", "бояться", "надеяться", "улыбнуться", "гордиться", "интересоваться", "фрукт"],
      grammar: [
        {
          title: "The thing becomes the subject",
          body: `The same -ся builds passives: До́м стро́ится (the house is being built), Здесь продаю́тся фру́кты. The thing acted upon becomes the subject — exactly like the English passive, but without any 'be' verb.- **Passive -ся**: До́м стро́ится (being built). Здесь продаю́тся фру́кты (are sold).
- **Emotion verbs govern cases**:
  - ра́доваться / горди́ться + **instrumental**: горжу́сь страно́й
  - боя́ться + **genitive**: бою́сь темноты́
  - наде́яться **на + acc**: наде́юсь на тебя́
  - интересова́ться + **instrumental**: интересу́юсь исто́рией`,
          plain: `To say a house "is being built", Russian just adds -ся — no helping verb needed. Feeling verbs like гордиться demand their own fixed noun form, so memorise each one with its partner.`,
          why: "Passive -ся exists because Russian can passivise any imperfective verb without a participle — no auxiliary needed. That is why official Russian leans on it: it is shorter than the English passive and available in every tense for free. Watch the case government of emotion verbs too: горди́ться + instrumental, боя́ться + genitive — they pair with cases, not prepositions.",

          table: {
            headers: ["Verb", "Government"],
            rows: [
              ["гордиться", "+ instrumental"],
              ["бояться", "+ genitive"],
              ["надеяться", "на + accusative"],
              ["интересоваться", "+ instrumental"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u05-l2-e1",
          type: "single",
          text: "Я горжу́сь ___. (его́ успе́хи)",
          options: [{ id: "a", label: "его успехами" }, { id: "b", label: "его успехов" }], answer: "a",
        },
        {
          id: "b1-u05-l2-e2",
          type: "single",
          text: "Она́ бои́тся ___. (со́баки)",
          options: [{ id: "a", label: "собак" }, { id: "b", label: "собаку" }], answer: "a",
        },
        {
          id: "b1-u05-l2-e3",
          type: "fill-blank",
          text: "Мы наде́емся ___ лу́чшее.",
          answers: ["на"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u05-test-1", type: "single",
      text: "Э́тот заво́д ___ в 1980-х. (passive -ся, past)",
      options: [{ id: "a", label: "строился" }, { id: "b", label: "построил" }], answer: "a",
    },
    {
      id: "b1-u05-test-2", type: "single",
      text: "Она́ интересу́ется ___. (му́зыка)",
      options: [{ id: "a", label: "музыкой" }, { id: "b", label: "музыку" }], answer: "a",
    },
    {
      id: "b1-u05-test-3", type: "true-false",
      text: "бою́сь соба́ку — accusative is correct.",
      answer: false,
      explanation: "Genitive: бою́сь соба́ки.",
    },
    {
      id: "b1-u05-test-4", type: "short-answer",
      text: "We rarely see each other: (Мы ре́дко…)",
      answer: "мы редко видимся",
    },
  ],
};
