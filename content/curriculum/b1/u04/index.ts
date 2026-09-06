import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 4 — Aspect II: pair formation and infinitive aspect. */
export const u04: Unit = {
  id: "b1-u04",
  level: "b1",
  number: 4,
  title: "Aspect II: building pairs, choosing infinitives",
  topicIds: ["b1-u04-aspect-2"],
  lessons: [
    {
      id: "b1-u04-l1",
      title: "-ыва-/-ива- and other pair makers",
      topicIds: ["b1-u04-aspect-2"],
      vocab: ["рассказывать", "рассказать", "показывать", "показать", "проверять", "проверить", "выполнять", "выполнить", "давать", "дать"],
      grammar: [
        {
          title: "The imperfective-making suffixes",
          body: `Going perfective → imperfective often inserts **-ыва-/-ива-**:
- рассказа́ть → расска́зывать, показа́ть → пока́зывать
- проверить → проверя́ть, выполнить → выполня́ть
Also: **-ва-** after да-/зна- (дать → дава́ть, узна́ть → узнава́ть), and **-ну-** perfectives for a single jab (крича́ть → кри́кнуть).`,
          table: {
            headers: ["Perfective", "Imperfective"],
            rows: [
              ["рассказать", "рассказывать"],
              ["дать", "давать"],
              ["крикнуть", "кричать"],
              ["решить", "решать"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u04-l1-e1",
          type: "matching",
          text: "Match the pair:",
          prompts: [
            { id: "p1", label: "показать" },
            { id: "p2", label: "давать" },
            { id: "p3", label: "крикнуть" },
          ],
          responses: [
            { id: "r1", label: "кричать" },
            { id: "r2", label: "показывать" },
            { id: "r3", label: "дать" },
          ],
          answer: { p1: "r2", p2: "r3", p3: "r1" },
        },
        {
          id: "b1-u04-l1-e2",
          type: "true-false",
          text: "расска́зывать is imperfective.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u04-l2",
      title: "Aspect after начинать, удаваться, and memory verbs",
      topicIds: ["b1-u04-aspect-2"],
      vocab: ["удаться", "удаваться", "забыть", "вспомнить", "успеть", "опоздать", "кончить", "бросить", "привыкнуть", "нравиться"],
      grammar: [
        {
          title: "Which infinitive after which verb",
          body: `- **нача́ть / ста́ть / ко́нчить + IMPERFECTIVE** (start/stop the process): на́чал чита́ть, ко́нчил писа́ть.
- **удава́ться / уда́ться + infinitive** — to manage: Мне удало́сь купи́ть биле́ты. (dative + perfective infinitive!)
- **забы́ть / успе́ть / уда́ться + perfective** — the completed act: Я забы́л закро́ть окно́.
- **привы́кнуть + imperfective infinitive** — got used to: Он привы́к вста́вать ра́но.`,
          examples: [
            { ru: "Нам наконе'ц удало'сь дозвони'ться.", en: "We finally managed to get through." },
          ],
          tip: "After забы́ть/успе́ть use the perfective (forgot to DO the deed); after привы́кнуть/надо́есть use the imperfective (habit).",
        },
      ],
      exercises: [
        {
          id: "b1-u04-l2-e1",
          type: "single",
          text: "Он на́чал ___, но сра́зу же переста́л.",
          options: [{ id: "a", label: "читать" }, { id: "b", label: "прочитать" }], answer: "a"
        },
        {
          id: "b1-u04-l2-e2",
          type: "single",
          text: "Я не ___ купи́ть хле́б. (didn't manage — perfective)",
          options: [{ id: "a", label: "успел" }, { id: "b", label: "успеваю" }], answer: "a"
        },
        {
          id: "b1-u04-l2-e3",
          type: "fill-blank",
          text: "Мне наконе́ц ___ доста́ть биле́ты. *(удало́сь)*",
          answers: ["удалось"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u04-test-1",
      type: "single",
      text: "Imperfective partner of реши́ть:",
      options: [{ id: "a", label: "решать" }, { id: "b", label: "решу" }], answer: "a"
    },
    {
      id: "b1-u04-test-2",
      type: "single",
      text: "Мне удало́сь ___. (perfective infinitive)",
      options: [{ id: "a", label: "купить" }, { id: "b", label: "покупать" }], answer: "a"
    },
    {
      id: "b1-u04-test-3",
      type: "true-false",
      text: "ко́нчить + imperfective infinitive.",
      answer: true,
    },
    {
      id: "b1-u04-test-4",
      type: "short-answer",
      text: "He got used to getting up early: (Он привы́к…)",
      answer: "он привык вставать рано",
    },
  ],
};
