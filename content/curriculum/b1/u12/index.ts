import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 12 — Word formation. */
export const u12: Unit = {
  id: "b1-u12",
  level: "b1",
  number: 12,
  title: "Word formation: making your own words",
  topicIds: ["b1-u12-word-formation"],
  lessons: [
    {
      id: "b1-u12-l1",
      title: "Noun suffixes: -тель, -ние, -ость, -изм",
      topicIds: ["b1-u12-word-formation"],
      vocab: ["писатель", "учитель", "строитель", "чтение", "письмо", "строительство", "радость", "молодость", "слабость", "туризм"],
      grammar: [
        {
          title: "Agent nouns and process nouns",
          body: `- **-тель** = doer: писа́ть → писа́тель, учи́ть → учи́тель, строи́ть → строи́тель.
- **-ние / -тие** = the process (of perfective verbs): чита́ть → чте́ние, строи́ть → строи́тельство, писа́ть → писа́ние (rare) / письмо́ (result).
- **-ость** (adj → abstract noun): ра́достный → ра́дость, молодо́й → мо́лодость, сле́пой → слепота́.
- **-изм** = -ism: тури́зм, капитали́зм, федерали́зм.`,
          table: {
            headers: ["Base", "Derived", "Meaning"],
            rows: [
              ["писать", "писатель", "writer"],
              ["читать", "чтение", "reading"],
              ["молодой", "молодость", "youth"],
              ["турист", "туризм", "tourism"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u12-l1-e1",
          type: "matching",
          text: "Form the noun:",
          prompts: [
            { id: "p1", label: "учить → doer" },
            { id: "p2", label: "читать → process" },
            { id: "p3", label: "молодой → abstract" },
          ],
          responses: [
            { id: "r1", label: "молодость" },
            { id: "r2", label: "учитель" },
            { id: "r3", label: "чтение" },
          ],
          answer: { p1: "r2", p2: "r3", p3: "r1" },
        },
        {
          id: "b1-u12-l1-e2",
          type: "true-false",
          text: "-ние nouns come mostly from perfective verbs.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u12-l2",
      title: "Adjective suffixes and verbs from adjectives",
      topicIds: ["b1-u12-word-formation"],
      vocab: ["городской", "русский", "детский", "синий", "красивый", "привычный", "терпеливый", "счастливый", "белеть", "чернеть"],
      grammar: [
        {
          title: "-ск-, -н-, -лив-",
          body: `- **-ск-**: го́род → городско́й, де́ти → де́тский, ру́сский.
- **-н-**: де́тство → де́тский? classic: пу́стой → пусты́нный (desert-like).
- **-лив-** = inclined to: терпе́ть → терпе́ливый, говори́ть → говорли́вый, сча́стье → счастли́вый.
- Verbs from adjectives: **беле́ть / черне́ть** (to turn white/black), старе́ть (grow old), молоде́ть.`,
          examples: [
            { ru: "На рассве'те не'бо ста'ло розове'ть.", en: "At dawn the sky began to turn pink." },
          ],
        },
      ],
      exercises: [
        {
          id: "b1-u12-l2-e1",
          type: "single",
          text: "Де́тский = relating to ___.",
          options: [{ id: "a", label: "дети" }, { id: "b", label: "древо" }], answer: "a"
        },
        {
          id: "b1-u12-l2-e2",
          type: "single",
          text: "Which verb means “to turn grey”? (се́рый)",
          options: [{ id: "a", label: "сереть" }, { id: "b", label: "серый" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u12-test-1",
      type: "single",
      text: "Writer = писа́ть + ___",
      options: [{ id: "a", label: "-тель" }, { id: "b", label: "-ние" }], answer: "a"
    },
    {
      id: "b1-u12-test-2",
      type: "short-answer",
      text: "Abstract noun of краси́вый:",
      answer: "красота",
    },
    {
      id: "b1-u12-test-3",
      type: "true-false",
      text: "терпе́ливый = patient.",
      answer: true,
    },
    {
      id: "b1-u12-test-4",
      type: "matching",
      text: "Base → derived:",
      prompts: [
        { id: "p1", label: "строить" },
        { id: "p2", label: "счастливый" },
        { id: "p3", label: "белый" },
      ],
      responses: [
        { id: "r1", label: "белеть" },
        { id: "r2", label: "строительство" },
        { id: "r3", label: "счастье" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
