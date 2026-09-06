import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 12 — C2 integrated review. */
export const u12: Unit = {
  id: "c2-u12",
  level: "c2",
  number: 12,
  title: "C2 integrated review: all systems at once",
  topicIds: ["c2-u12-integrated"],
  lessons: [
    {
      id: "c2-u12-l1",
      title: "Mixed transformations: partitive, locative, particles",
      topicIds: ["c2-u12-integrated"],
      vocab: ["чай", "сад", "домик", "частица", "часть", "идиома", "выражение", "стиль", "контекст", "тон"],
      grammar: [
        {
          title: "One paragraph, every C2 device",
          body: `Test-sentence surgery across all of unit 1–11:
- partitive: налива́й **ча́ю**;
- second locative: в **саду́** стои́т **до́мик**;
- particles: он, **мол**, не знал; **же** я предупрежда́л;
- idioms: заруби́ **на носу́**; бить **баклу́ши**;
- instrumental: **у́тром**; **был врачо́м**.
Practice = spot, explain, and reproduce each device in your own sentences.`,
        },
      ],
      exercises: [
        {
          id: "c2-u12-l1-e1",
          type: "single",
          text: "«Налива́й ча́ю» — the -у form stresses:",
          options: [{ id: "a", label: "an indefinite portion" }, { id: "b", label: "the sort of tea" }], answer: "a"
        },
        {
          id: "c2-u12-l1-e2",
          type: "single",
          text: "«Зару́би на носу́» — correct?",
          options: [{ id: "a", label: "yes, frozen dative" }, { id: "b", label: "no, must be на нос" }], answer: "a"
        },
        {
          id: "c2-u12-l1-e3",
          type: "single",
          text: "«В саду́ до́мик» combines:",
          options: [{ id: "a", label: "second locative + diminutive" }, { id: "b", label: "partitive + pejorative" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u12-l2",
      title: "Final editing pass",
      topicIds: ["c2-u12-integrated"],
      vocab: ["редактировать", "стиль", "тон", "жанр", "контекст", "адресат", "канцелярит", "разговорный", "книжный", "нейтральный"],
      grammar: [
        {
          title: "Edit like a native editor",
          body: `Take a clumsy paragraph and fix: register clashes (канцеляри́т in dialogue), wrong aspect in performatives, non-frozen idiom swaps, parcellation in formal prose. The C2 exam below samples the same skills.`,
        },
      ],
      exercises: [
        {
          id: "c2-u12-l2-e1",
          type: "single",
          text: "A «канцеляри́т» phrase in a friendly letter should be:",
          options: [{ id: "a", label: "replaced with neutral phrasing" }, { id: "b", label: "kept for precision" }], answer: "a"
        },
        {
          id: "c2-u12-l2-e2",
          type: "single",
          text: "Parcellation («Пришёл. Поздно.») suits:",
          options: [{ id: "a", label: "prose and speech" }, { id: "b", label: "legal documents" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u12-test-1",
      type: "single",
      text: "Register clash is when:",
      options: [{ id: "a", label: "канцелярит appears in casual speech" }, { id: "b", label: "idioms appear in fiction" }], answer: "a"
    },
    {
      id: "c2-u12-test-2",
      type: "single",
      text: "«выдаю́щийся» + genitive complement is:",
      options: [{ id: "a", label: "impossible — it's a frozen adjective" }, { id: "b", label: "required" }], answer: "a"
    },
    {
      id: "c2-u12-test-3",
      type: "true-false",
      text: "«на носу́» (figurative: imminent) and «на носу» (literal: on the nose) both exist.",
      answer: false,
      explanation: "Figurative imminent = на носу́; literal on-the-nose = на носе́.",
    },
  ],
};
