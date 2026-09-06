import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 2 — Case synonymy II: predicative instrumental, adverbial instrumental. */
export const u02: Unit = {
  id: "c2-u02",
  level: "c2",
  number: 2,
  title: "Case synonymy II: the instrumental's secret lives",
  topicIds: ["c2-u02-instrumental-synonymy"],
  lessons: [
    {
      id: "c2-u02-l1",
      title: "Predicative instrumental: был врачо́м vs был врач",
      topicIds: ["c2-u02-instrumental-synonymy"],
      vocab: ["врач", "инженер", "солдат", "студент", "директор", "секретарь", "товарищ", "приятель", "знакомый", "человек"],
      grammar: [
        {
          title: "быть + nominative vs instrumental",
          body: `Both «Он был врач» and «Он был врачо́м» are correct — but not the same:
- **Nominative** (Он был врач): a *plain fact* of biography, no evaluation, often about the past only.
- **Instrumental** (Он был врачо́м): a *characteristic/role during that time*, implying duration or classification: «В де́тстве он был больны́м ребёном».
With стать/казаться/оказаться/являться the instrumental is REQUIRED.`,
          table: {
            headers: ["Form", "Nuance"],
            rows: [
              ["Он был врач (nom)", "bare fact: he was a doctor"],
              ["Он был врачом (instr)", "role/classification during that period"],
              ["Он хороший врач (nom, present)", "present-tense plain predicate"],
            ],
          },
          tip: "Negation: «Он не был врачо́м» (characteristic denied) vs «Он не врач» (simple denial). The instrumental reads more bookish.",
        },
      ],
      exercises: [
        {
          id: "c2-u02-l1-e1",
          type: "single",
          text: "Which sentence evaluates the period as a characteristic?",
          options: [
            { id: "a", label: "В молодости он был солдатом" },
            { id: "b", label: "В молодости он был солдат" },
          ],
          answer: "a"
        },
        {
          id: "c2-u02-l1-e2",
          type: "true-false",
          text: "«Он оказался дурако́м» requires the instrumental.",
          answer: true,
          explanation: "оказаться always governs instrumental in predication.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u02-l2",
      title: "Adverbial instrumental: у́тром, ле́том, бего́м, столбо́м",
      topicIds: ["c2-u02-instrumental-synonymy"],
      vocab: ["утро", "вечер", "лето", "зима", "весна", "осень", "бег", "шёпот", "крик", "столб"],
      grammar: [
        {
          title: "Instrumental as adverb",
          body: `Time and manner instrumental without prepositions:
- Time: **у́тром** (in the morning), **о́сенью**, **весно́й**, **но́чью**.
- Manner: **бего́м** (at a run), **шёпотом** (in a whisper), **по́лзком** (crawling), **кри́ком** (with a shout).
- Simile: **сто́ять столбо́м** (stand like a post).
In short: the instrumental turns nouns into adverbs of time and manner.`,
          examples: [
            { ru: "У'тром я иду' в парк бего'м.", en: "In the morning I jog to the park." },
            { ru: "Он стоя'л столбо'м от удивле'ния.", en: "He stood rooted like a post in astonishment." },
          ],
          tip: "Seasons: ле́том, зимо́й, весно́й, о́сенью — all instrumental, no preposition. «в ле́то» means something else entirely (into the summer, archaic).",
        },
      ],
      exercises: [
        {
          id: "c2-u02-l2-e1",
          type: "single",
          text: "___ мы е́здим на да́чу. (in summer)",
          options: [{ id: "a", label: "Летом" }, { id: "b", label: "В лето" }], answer: "a"
        },
        {
          id: "c2-u02-l2-e2",
          type: "single",
          text: "Он вошёл ___ (in a whisper):",
          options: [{ id: "a", label: "шёпотом" }, { id: "b", label: "в шёпот" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u02-test-1",
      type: "single",
      text: "Which marks a role during a period?",
      options: [{ id: "a", label: "она была секретарём" }, { id: "b", label: "она была секретарь" }], answer: "a"
    },
    {
      id: "c2-u02-test-2",
      type: "single",
      text: "«в углу́» is:",
      options: [{ id: "a", label: "second locative (stressed -у)" }, { id: "b", label: "dative" }], answer: "a"
    },
    {
      id: "c2-u02-test-3",
      type: "short-answer",
      text: "In winter (no preposition):",
      answer: "зимой",
    },
  ],
};
