import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 7 — Aspect I, one step at a time. */
export const u07: Unit = {
  id: "a2-u07",
  level: "a2",
  number: 7,
  title: "Aspect I: doing vs. getting it done",
  topicIds: ["a2-u07-aspect-1"],
  lessons: [
    {
      id: "a2-u07-l1",
      title: "Step 1: two verbs for every action",
      topicIds: ["a2-u07-aspect-1"],
      vocab: ["делать", "сделать", "читать", "прочитать", "писать", "написать", "решать", "решить", "процесс", "результат"],
      grammar: [
        {
          title: "Process vs result",
          body: `Most verbs come in pairs:
- **Imperfective** = the process, habit, repetition: де́лать, чита́ть
- **Perfective** = the completed result: сде́лать, прочита́ть
- «Вчера́ я чита́л, но не прочита́л.» — I was reading but didn't finish.
The perfective has NO present tense — its present forms are future.`,
          table: {
            headers: ["Question", "Aspect", "Example"],
            rows: [
              ["What were you doing?", "imperfective", "Я читал книгу"],
              ["Did you finish it?", "perfective", "Я прочитал книгу"],
              ["I read every day", "imperfective", "Я читаю каждый день"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u07-l1-e1",
          type: "single",
          text: "Ка́ждый день я ___. (habit)",
          options: [{ id: "a", label: "читаю" }, { id: "b", label: "прочитаю" }], answer: "a",
        },
        {
          id: "a2-u07-l1-e2",
          type: "single",
          text: "Он до́лго ___, наконе́ц ___ зада́чу.",
          options: [{ id: "a", label: "решал — решил" }, { id: "b", label: "решил — решал" }], answer: "a",
        },
        {
          id: "a2-u07-l1-e3",
          type: "true-false",
          text: "The perfective has no present tense.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u07-l2",
      title: "Step 2: how pairs are built (prefixes по-, с-, на-, за-, вы-)",
      topicIds: ["a2-u07-aspect-1"],
      vocab: ["покупать", "купить", "письмо", "отправлять", "отправить", "делать", "сделать", "выпить", "заказать", "заказывать"],
      grammar: [
        {
          title: "Perfective = imperfective + prefix",
          body: `- де́лать → **с**де́лать
- писа́ть → **на**писа́ть
- чита́ть → **про**чита́ть
- покупа́ть → купи́ть (suppletive — learn it)
- пить → **вы**пить; заказа́ть/заказа́ть pair`,
          table: {
            headers: ["Imperfective", "Perfective"],
            rows: [
              ["делать", "сделать"],
              ["писать", "написать"],
              ["читать", "прочитать"],
              ["покупать", "купить"],
            ],
          },
          tip: "The dictionary links every pair (verbs.partner). Learn pairs as single vocabulary items.",
        },
      ],
      exercises: [
        {
          id: "a2-u07-l2-e1",
          type: "matching",
          text: "Match the pair:",
          prompts: [
            { id: "p1", label: "писать" },
            { id: "p2", label: "делать" },
            { id: "p3", label: "покупать" },
          ],
          responses: [
            { id: "r1", label: "сделать" }, { id: "r2", label: "написать" }, { id: "r3", label: "купить" },
          ],
          answer: { p1: "r2", p2: "r1", p3: "r3" },
        },
        {
          id: "a2-u07-l2-e2",
          type: "true-false",
          text: "«вы́пить» is the perfective of пить.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u07-l3",
      title: "Step 3: choosing in the past — was there a result?",
      topicIds: ["a2-u07-aspect-1"],
      vocab: ["письмо", "написал", "покупать", "билеты", "экзамен", "сдал", "сдавал", "готовился", "закончил", "ещё"],
      grammar: [
        {
          title: "Ask: did it get done?",
          body: `- Ты **купи́л** биле́ты? — Did you get the tickets? (result expected)
- — Нет, не купи́л. — Didn't manage (perfective negated past denies the RESULT).
- Я сдал экза́мен! — I passed! (achievement = perfective)
- Я гото́вился, но не сдил… гото́вился, но не сдал. — prepared but didn't pass.`,
          examples: [
            { ru: "Ты зако'нчил докла'д? — Ещё нет.", en: "Finished the report? — Not yet." },
          ],
          tip: "Negated perfective past («не купи́л») = tried/expected, failed. Negated imperfective («не чита́л») = didn't even do it.",
        },
      ],
      exercises: [
        {
          id: "a2-u07-l3-e1",
          type: "single",
          text: "— Ты купи́л хле́б? — Нет, не ___.",
          options: [{ id: "a", label: "купил" }, { id: "b", label: "покупал" }], answer: "a",
          explanation: "Both occur; не купи́л = the expected purchase didn't happen.",
        },
        {
          id: "a2-u07-l3-e2",
          type: "single",
          text: "Я сдал экза́мен! — which aspect and why?",
          options: [{ id: "a", label: "perfective — achievement" }, { id: "b", label: "imperfective — process" }], answer: "a",
        },
        {
          id: "a2-u07-l3-e3",
          type: "true-false",
          text: "«Я гото́вился» describes preparation (process).",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u07-l4",
      title: "Step 4: choosing in the future + нача́ть / ко́нчить",
      topicIds: ["a2-u07-aspect-1"],
      vocab: ["начинать", "начать", "заканчивать", "закончить", "продолжать", "забыть", "успеть", "получить", "получать", "собираться"],
      grammar: [
        {
          title: "Two futures",
          body: `- **бу́ду + imperfective infinitive** — process/plan: За́втра бу́ду гото́виться.
- **perfective present-form** — one completed act: Я куплю́ биле́ты.
- Negative future: **не бу́ду + imperfective**: Я не бу́ду кури́ть.
- **на́чну / ко́нчу + imperfective infinitive**: на́чну чита́ть, ко́нчу писа́ть.`,
          examples: [
            { ru: "Я начну' учи'ть кита'йский.", en: "I'll start learning Chinese." },
          ],
          tip: "на́чну/ко́нчу grab the IMPERFECTIVE infinitive — the process starts/ends, not the result.",
        },
      ],
      exercises: [
        {
          id: "a2-u07-l4-e1",
          type: "single",
          text: "За́втра я ___ э́тот рома́н за два ча́са. (finish reading)",
          options: [{ id: "a", label: "прочитаю" }, { id: "b", label: "буду читать" }], answer: "a",
        },
        {
          id: "a2-u07-l4-e2",
          type: "single",
          text: "Он на́чал ___, но сра́зу переста́л.",
          options: [{ id: "a", label: "читать" }, { id: "b", label: "прочитать" }], answer: "a",
        },
        {
          id: "a2-u07-l4-e3",
          type: "fill-blank",
          text: "Я не ___ ___ кури́ть. *(won't smoke — буду + inf)*",
          answers: ["буду", "курить"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u07-test-1", type: "single",
      text: "Он ___ но́вый до́м в про́шлом году́. (result)",
      options: [{ id: "a", label: "построил" }, { id: "b", label: "строил" }], answer: "a",
    },
    {
      id: "a2-u07-test-2", type: "single",
      text: "Ка́ждый ве́чер она́ ___ журна́лы.",
      options: [{ id: "a", label: "читает" }, { id: "b", label: "прочитает" }], answer: "a",
    },
    {
      id: "a2-u07-test-3", type: "short-answer",
      text: "Say: Yesterday I wrote a letter. (result)",
      answer: "вчера я написал письмо",
    },
    {
      id: "a2-u07-test-4", type: "true-false",
      text: "«хочу́ купи́ть» — the intent is a completed purchase.",
      answer: true,
    },
    {
      id: "a2-u07-test-5", type: "fill-blank",
      text: "Мы на́чали ___ ру́сский в ма́е.",
      answers: ["учить"],
    },
    {
      id: "a2-u07-test-6", type: "single",
      text: "За́втра в де́вять я ___ докла́д. (process)",
      options: [{ id: "a", label: "буду писать" }, { id: "b", label: "напишу" }], answer: "a",
    },
  ],
};
