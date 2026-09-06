import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 1 — Aspect in infinitives, imperatives, negation. */
export const u01: Unit = {
  id: "c1-u01",
  level: "c1",
  number: 1,
  title: "Aspect at the edge: infinitives and imperatives",
  topicIds: ["c1-u01-aspect-infinitives"],
  lessons: [
    {
      id: "c1-u01-l1",
      title: "Negated infinitives and imperative aspect nuance",
      topicIds: ["c1-u01-aspect-infinitives"],
      vocab: ["решаться", "отказаться", "отказываться", "забыть", "упоминать", "вспоминать", "советовать", "отсоветовать", "собираться", "намереваться"],
      grammar: [
        {
          title: "Which infinitive after не надо / не стоит / избегать",
          body: `After negated modal words the **imperfective** forbids the action as a general practice: Не на́до кури́ть (don't smoke — ever), Не сто́ит спо́рить.
The **perfective** after negation forbids ONE specific deed: Не на́до купи́ть э́ту кварти́ру! (this particular one).
**избега́ть + gerund**: избега́й встреча́ться с ним. (gerund-object, genitive verb avoid)`,
          examples: [
            { ru: "Не на'до бы'ло сказа'ть э'того. (you shouldn't have — perfective!)", en: "You shouldn't have said that." },
          ],
          tip: "The perfective after не на́до = regret about a deed DONE. The imperfective = general advice against a habit.",
        },
        {
          title: "Imperative aspect beyond basics",
          body: `- Perfective imperative = one concrete order: Закро́й окно́!
- Imperfective imperative = process, politeness, or 'start doing': Расска́зывай! (Go on, tell me!), Сади́тесь (please sit — inviting, not ordering).
- Double negation of purpose: Ни в ко́ем слу́чае не согласи́тесь! (under no circumstances agree — perfective for the single deed).`,
        },
      ],
      exercises: [
        {
          id: "c1-u01-l1-e1",
          type: "single",
          text: "Не на́до ___ э́ту кварти́ру! (this one — perfective)",
          options: [{ id: "a", label: "купить" }, { id: "b", label: "покупать" }], answer: "a"
        },
        {
          id: "c1-u01-l1-e2",
          type: "single",
          text: "Не на́до так мно́го ___. (smoke — habit)",
          options: [{ id: "a", label: "курить" }, { id: "b", label: "закурить" }], answer: "a"
        },
        {
          id: "c1-u01-l1-e3",
          type: "true-false",
          text: "«Расска́зывай!» can be an enthusiastic 'Go on, tell me!' rather than an order.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "c1-u01-test-1",
      type: "single",
      text: "Не сто́ит ___ на до́ждь. (blame — general)",
      options: [{ id: "a", label: "жаловаться" }, { id: "b", label: "пожаловаться" }], answer: "a"
    },
    {
      id: "c1-u01-test-2",
      type: "short-answer",
      text: "You shouldn't have called him: (Не на́до бы́ло…)",
      answer: "не надо было ему звонить",
    },
    {
      id: "c1-u01-test-3",
      type: "true-false",
      text: "Imperfective imperative can express an invitation (Сади́тесь).",
      answer: true,
    },
  ],
};
