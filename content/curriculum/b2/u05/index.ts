import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 5 — Indirect speech, one step at a time. */
export const u05: Unit = {
  id: "b2-u05",
  level: "b2",
  number: 5,
  title: "Indirect speech: what did he say?",
  topicIds: ["b2-u05-indirect-speech"],
  lessons: [
    {
      id: "b2-u05-l1",
      title: "Step 1: statements and questions",
      topicIds: ["b2-u05-indirect-speech"],
      vocab: ["объяснять", "сообщить", "добавить", "спросить", "ответить", "занятость", "прийти", "узнать", "интересно", "позвонить"],
      grammar: [
        {
          title: "что for statements, ли for yes/no questions",
          body: `Indirect speech: statements take что (Он сказа́л, что за́нят), yes/no questions take ли (Он спроси́л, приду́ ли я), wh-questions keep their word (спроси́л, где я был). Crucially, NO tense shifting — Russian reports speech in its original tense.- Statements: Он сказа́л: «Я за́нят» → Он сказа́л, **что** он за́нят.
- Yes/no questions: Он спроси́л: «Ты придёшь?» → Он спроси́л, **приду́ ли я** (ли after the key word).
- Wh-questions keep the question word: Она́ спроси́ла, **где** я был.
NO tense shifting — Russian keeps the original tense, changes only person.`,
          why: "English backshifts tenses in reported speech (*'I am busy' → he said he WAS busy*); Russian refuses. The reported words are treated as quoted reality, not re-timed. Only the person changes — everything else stands as the original speaker said it.",

          table: {
            headers: ["Direct", "Indirect"],
            rows: [
              ["Я устал", "Он сказал, что устал"],
              ["Ты придёшь?", "Он спросил, приду ли я"],
              ["Где ты был?", "Она спросила, где я был"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b2-u05-l1-e1",
          type: "single",
          text: "Он спроси́л, ___. (Will you come? → ли)",
          options: [{ id: "a", label: "приду ли я" }, { id: "b", label: "что приду" }], answer: "a",
        },
        {
          id: "b2-u05-l1-e2",
          type: "single",
          text: "Она́ спроси́ла, ___. (Где ты живёшь?)",
          options: [{ id: "a", label: "где я живу" }, { id: "b", label: "что я живу" }], answer: "a",
        },
        {
          id: "b2-u05-l1-e3",
          type: "short-answer",
          text: "Report: «Я чита́ю» → Он сказа́л, что ___.",
          answer: "он читает",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b2-u05-l2",
      title: "Step 2: commands — что́бы and infinitive reports",
      topicIds: ["b2-u05-indirect-speech"],
      vocab: ["попросить", "приказать", "велеть", "просьба", "уйти", "прийти", "позвонить", "немедленно", "требовать", "подчиниться"],
      grammar: [
        {
          title: "Reporting commands",
          body: `Commands are reported with что́бы + past (Она́ попроси́ла, что́бы я позвони́л) or with a direct infinitive after проси́ть/веле́ть/приказа́ть (Он веле́л мне уйти́). Stronger verbs sound more authoritarian: веле́ть and приказа́ть belong to bosses and fairy-tale tsars.- **Он попроси́л, что́бы я пришёл.** (что́бы + past)
- **Он попроси́л меня́ + infinitive**: Он попроси́л меня́ позвони́ть.
- Stronger verbs: веле́ть, приказа́ть, тре́бовать + что́бы / infinitive:
  Он веле́л мне уйти́. — He ordered me to leave.`,
          why: "The что́бы-frame treats the command as a demanded unreal event — hypothetical particle inside, past form outside. The bare-infinitive frame treats it as an order transmitted verbatim. Register and power live in the choice.",

          table: {
            headers: ["Direct", "Indirect"],
            rows: [
              ["Уходи!", "Он велел мне уйти"],
              ["Позвони мне", "Она попросила, чтобы я позвонил"],
            ],
          },
          tip: "Both frames work; что́бы feels a bit softer/longer, bare infinitive brisker.",
        },
      ],
      exercises: [
        {
          id: "b2-u05-l2-e1",
          type: "single",
          text: "Она́ попроси́ла, ___ я позвони́л.",
          options: [{ id: "a", label: "чтобы" }, { id: "b", label: "что" }], answer: "a",
        },
        {
          id: "b2-u05-l2-e2",
          type: "single",
          text: "Он веле́л мне ___. (уйти́)",
          options: [{ id: "a", label: "уйти" }, { id: "b", label: "ухожу" }], answer: "a",
        },
        {
          id: "b2-u05-l2-e3",
          type: "true-false",
          text: "Russian indirect speech shifts tenses back like English.",
          answer: false,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u05-test-1", type: "single",
      text: "Она́ спроси́ла, ___. (Где ты живёшь?)",
      options: [{ id: "a", label: "где я живу" }, { id: "b", label: "что я живу" }], answer: "a",
    },
    {
      id: "b2-u05-test-2", type: "single",
      text: "Он спроси́л, бу́дет ___ дождь. (ли)",
      options: [{ id: "a", label: "ли" }, { id: "b", label: "что" }], answer: "a",
    },
    {
      id: "b2-u05-test-3", type: "true-false",
      text: "Russian indirect speech shifts tenses back like English.",
      answer: false,
    },
    {
      id: "b2-u05-test-4", type: "short-answer",
      text: "Report: «Я чита́ю» → Он сказа́л, что ___.",
      answer: "он читает",
    },
  ],
};
