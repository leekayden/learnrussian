import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 5 — Indirect speech. */
export const u05: Unit = {
  id: "b2-u05",
  level: "b2",
  number: 5,
  title: "Indirect speech: what did he say?",
  topicIds: ["b2-u05-indirect-speech"],
  lessons: [
    {
      id: "b2-u05-l1",
      title: "Statements, questions, commands in reported form",
      topicIds: ["b2-u05-indirect-speech"],
      vocab: ["объяснять", "сообщить", "добавить", "спросить", "ответить", "попросить", "приказать", "признаться", "обещать", "заметить"],
      grammar: [
        {
          title: "Transformations",
          body: `- Statements: Он сказа́л: «Я за́нят» → Он сказа́л, **что** он за́нят.
- Yes/no questions: Он спроси́л: «Ты придёшь?» → Он спроси́л, **приду́ ли я** (ли after the key word).
- Wh-questions keep the question word: Она́ спроси́ла, **где** я был.
- Commands: Он попроси́л, **что́бы** я пришёл. / Он попроси́л меня́ + infinitive.`,
          table: {
            headers: ["Direct", "Indirect"],
            rows: [
              ["Я устал", "Он сказал, что устал"],
              ["Ты придёшь?", "Он спросил, приду ли я"],
              ["Где ты был?", "Она спросила, где я был"],
              ["Уходи!", "Он велел мне уйти"],
            ],
          },
          tip: "No tense shifting like English — Russian keeps the original tense: «Я приду» → сказал, что придёт (person changes, tense stays).",
        },
      ],
      exercises: [
        {
          id: "b2-u05-l1-e1",
          type: "single",
          text: "Он спроси́л, ___. (Will you come? → ли)",
          options: [{ id: "a", label: "приду ли я" }, { id: "b", label: "что приду" }], answer: "a"
        },
        {
          id: "b2-u05-l1-e2",
          type: "single",
          text: "Она́ попроси́ла, ___ я позвони́л.",
          options: [{ id: "a", label: "чтобы" }, { id: "b", label: "что" }], answer: "a"
        },
        {
          id: "b2-u05-l1-e3",
          type: "fill-blank",
          text: "Он сказа́л, ___ он за́нят. *(что)*",
          answers: ["что"],
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "b2-u05-test-1",
      type: "single",
      text: "Она́ спроси́ла, ___. (Где ты живёшь?)",
      options: [{ id: "a", label: "где я живу" }, { id: "b", label: "что я живу" }], answer: "a"
    },
    {
      id: "b2-u05-test-2",
      type: "single",
      text: "Он спроси́л, бу́дет ___ дождь. (ли)",
      options: [{ id: "a", label: "ли" }, { id: "b", label: "что" }], answer: "a"
    },
    {
      id: "b2-u05-test-3",
      type: "true-false",
      text: "Russian indirect speech shifts tenses back like English.",
      answer: false,
    },
    {
      id: "b2-u05-test-4",
      type: "short-answer",
      text: "Report: «Я чита́ю» → Он сказа́л, что ___.",
      answer: "он читает",
    },
  ],
};
