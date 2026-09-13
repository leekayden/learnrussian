import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 4 — Aspect II, one step at a time. */
export const u04: Unit = {
  id: "b1-u04",
  level: "b1",
  number: 4,
  title: "Aspect II: building pairs, choosing infinitives",
  topicIds: ["b1-u04-aspect-2"],
  lessons: [
    {
      id: "b1-u04-l1",
      title: "Step 1: -ыва- / -ива- pair makers",
      topicIds: ["b1-u04-aspect-2"],
      vocab: ["рассказывать", "рассказать", "показывать", "показать", "проверять", "проверить", "выполнять", "выполнить", "давать", "дать"],
      grammar: [
        {
          title: "Perfective → imperfective by suffix",
          body: `A2 treated perfective prefixes as simple 'done' markers. Now look at how pairs are manufactured the other way: take a perfective verb and insert a suffix — -ыва-/-ива- — to manufacture its imperfective partner: рассказа́ть → расска́зывать, показа́ть → пока́зывать.- рассказа́ть → расска́зывать (-ыва-)
- показа́ть → пока́зывать
- провери́ть → проверя́ть (-я-)
- дать → дава́ть (-ва-); узна́ть → узнава́ть
- **-ну-** perfectives for a single jab: кри́кнуть (vs крича́ть)`,
          plain: `Most Russian verbs come in pairs: one for getting it done, one for the ongoing version. Spot -ыва- or -ива- in the middle and you know you have the "in progress" partner.`,
          why: "The -ыва-/-ива- suffix is the productive imperfective machine: whenever Russian needs a habitual/process partner for a newer perfective verb, this is the mold it reaches for. Recognising it turns hundreds of unfamiliar verbs into known pairs.",

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
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u04-l2",
      title: "Step 2: infinitive aspect after на́чать, уда́ться, забы́ть",
      topicIds: ["b1-u04-aspect-2"],
      vocab: ["удаться", "удаваться", "забыть", "вспомнить", "успеть", "опоздать", "кончить", "бросить", "привыкнуть", "надоедать"],
      grammar: [
        {
          title: "Which infinitive follows which verb",
          body: `The hardest aspect choice is on infinitives, because the governing verb decides: на́чну and ко́нчу take imperfective (they frame a process), while уда́ться and успе́ть take perfective (they announce a result). The verbs themselves are the rulebook.- **на́чать / ста́ть / ко́нчить + IMPERFECTIVE**: на́чал чита́ть, ко́нчил писа́ть
- **удава́ться / уда́ться + infinitive** (dative experiencer): Мне удало́сь купи́ть биле́ты.
- **забы́ть / успе́ть + PERFECTIVE**: Я забы́л закро́ть окно́.
- **привы́кнуть + IMPERFECTIVE**: Он привы́к встава́ть ра́но.`,
          plain: `Verbs like "start" and "finish" want the everyday, in-progress form of the next verb; verbs like "manage" and "succeed" want the get-it-done form. The first verb is the giveaway — memorise its preference.`,
          why: "Each governing verb carries its own logic: start/finish apply to processes, so they grab imperfective infinitives; manage/succeed apply to achievements, so they grab perfective ones. English hides this with 'to'; Russian exposes it.",

          table: {
            headers: ["Verb", "Infinitive aspect"],
            rows: [
              ["начать / кончить", "imperfective"],
              ["удаться", "perfective (result)"],
              ["забыть / успеть", "perfective"],
              ["привыкнуть / надоедать", "imperfective (habit)"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u04-l2-e1",
          type: "single",
          text: "Он на́чал ___, но сра́зу же переста́л.",
          options: [{ id: "a", label: "читать" }, { id: "b", label: "прочитать" }], answer: "a",
        },
        {
          id: "b1-u04-l2-e2",
          type: "single",
          text: "Я не ___ купи́ть хле́б. (didn't manage)",
          options: [{ id: "a", label: "успел" }, { id: "b", label: "успеваю" }], answer: "a",
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
      id: "b1-u04-test-1", type: "single",
      text: "Imperfective partner of реши́ть:",
      options: [{ id: "a", label: "решать" }, { id: "b", label: "решу" }], answer: "a",
    },
    {
      id: "b1-u04-test-2", type: "single",
      text: "Мне удало́сь ___. (perfective infinitive)",
      options: [{ id: "a", label: "купить" }, { id: "b", label: "покупать" }], answer: "a",
    },
    {
      id: "b1-u04-test-3", type: "true-false",
      text: "ко́нчить + imperfective infinitive.",
      answer: true,
    },
    {
      id: "b1-u04-test-4", type: "short-answer",
      text: "He got used to getting up early: (Он привы́к…)",
      answer: "он привык вставать рано",
    },
  ],
};
