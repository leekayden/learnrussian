import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 1 — Aspect at the edge, one step at a time. */
export const u01: Unit = {
  id: "c1-u01",
  level: "c1",
  number: 1,
  title: "Aspect at the edge: infinitives and imperatives",
  topicIds: ["c1-u01-aspect-infinitives"],
  lessons: [
    {
      id: "c1-u01-l1",
      title: "Step 1: negated infinitives — не надо + which aspect?",
      topicIds: ["c1-u01-aspect-infinitives"],
      vocab: ["решаться", "отказаться", "отказываться", "забыть", "упоминать", "вспоминать", "советовать", "отсоветовать", "собираться", "намереваться"],
      grammar: [
        {
          title: "General ban vs one specific deed",
          body: `The perfective imperative gives one concrete order (Закро́й окно́!), the imperfective invites or launches a process (Сади́тесь — please sit; Расска́зывай — go on, tell me). Choosing between them is choosing between an order and an invitation.

After negated modal words:
- **Imperfective** forbids the practice: Не на́до кури́ть (don't smoke — ever), Не сто́ит спо́рить.
- **Perfective** forbids ONE specific deed, often with regret that it already happened: Не на́до бы́ло купи́ть э́ту кварти́ру! (shouldn't have bought THIS one)
- **избега́ть + gerund**: избега́й встреча́ться с ним.`,
          why: "Aspect polices the imperative like everything else: perfective = one bounded act, imperfective = the activity itself. «Сади́тесь» at dinner is hospitality; «Сядь!» is a drill sergeant. Same verb, different world.",

          table: {
            headers: ["Form", "Meaning"],
            rows: [
              ["Не надо курить", "don't smoke (habit)"],
              ["Не надо было купить", "shouldn't have bought (that deed)"],
            ],
          },
          tip: "The perfective after не на́до = regret about a deed DONE. Imperfective = advice against a habit.",
        },
      ],
      exercises: [
        {
          id: "c1-u01-l1-e1",
          type: "single",
          text: "Не на́до ___ э́ту кварти́ру! (this one — perfective)",
          options: [{ id: "a", label: "купить" }, { id: "b", label: "покупать" }], answer: "a",
        },
        {
          id: "c1-u01-l1-e2",
          type: "single",
          text: "Не на́до так мно́го ___. (smoke — habit)",
          options: [{ id: "a", label: "курить" }, { id: "b", label: "закурить" }], answer: "a",
        },
        {
          id: "c1-u01-l1-e3",
          type: "true-false",
          text: "«Не на́до бы́ло говори́ть» implies you DID speak and regret it.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c1-u01-l2",
      title: "Step 2: imperative aspect beyond basics",
      topicIds: ["c1-u01-aspect-infinitives"],
      vocab: ["закрыть", "рассказывать", "садиться", "сесть", "случай", "согласиться", "входить", "выходить", "сразу", "давай"],
      grammar: [
        {
          title: "Perfective = order; imperfective = invitation",
          body: `Negated modals split by aspect: Не на́до кури́ть (don't smoke — ever) vs Не на́до бы́ло купи́ть (shouldn't have bought — that one deed). The imperfective bans a habit; the perfective regrets one completed act.

- Perfective imperative = one concrete order: **Закро́й окно́!**
- Imperfective imperative = process, politeness, 'start doing': **Расска́зывай!** (Go on, tell me!), **Сади́тесь** (please sit — inviting, not ordering)
- Double forbidding: **Ни в ко́ем слу́чае не согласи́тесь!** (under no circumstances agree — perfective for the single deed)`,
          why: "The perfective after не на́до implies the deed ALREADY happened — it is regret spoken aloud. The imperfective version is advice against a practice. Same two words, different timelines.",
          examples: [
            { ru: "Расска'зывай, не оста'навливайся!", en: "Go on telling, don't stop!" },
          ],
          tip: "«Сади́тесь» at dinner is hospitality (imperfective), «Сядь!» is an order (perfective).",
        },
      ],
      exercises: [
        {
          id: "c1-u01-l2-e1",
          type: "single",
          text: "Гость колеблется: «___, пожа́луйста!» (sit — invitation)",
          options: [{ id: "a", label: "Садитесь" }, { id: "b", label: "Сядьте" }], answer: "a",
        },
        {
          id: "c1-u01-l2-e2",
          type: "single",
          text: "«Расска́зывай!» can be an enthusiastic 'Go on, tell me!' rather than an order.",
          options: [{ id: "a", label: "true" }, { id: "b", label: "false" }], answer: "a",
        },
        {
          id: "c1-u01-l2-e3",
          type: "true-false",
          text: "«Ни в ко́ем слу́чае не согласи́тесь» uses the imperfective.",
          answer: false,
          explanation: "It forbids one specific act → perfective не согласи́тесь.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u01-test-1", type: "single",
      text: "Не сто́ит ___ на до́ждь. (blame — general)",
      options: [{ id: "a", label: "жаловаться" }, { id: "b", label: "пожаловаться" }], answer: "a",
    },
    {
      id: "c1-u01-test-2", type: "short-answer",
      text: "You shouldn't have called him: (Не на́до бы́ло…)",
      answer: "не надо было ему звонить",
    },
    {
      id: "c1-u01-test-3", type: "true-false",
      text: "Imperfective imperative can express an invitation (Сади́тесь).",
      answer: true,
    },
  ],
};
