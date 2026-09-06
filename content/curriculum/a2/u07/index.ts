import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 7 — Aspect I: the big idea. */
export const u07: Unit = {
  id: "a2-u07",
  level: "a2",
  number: 7,
  title: "Aspect I: doing vs. getting it done",
  topicIds: ["a2-u07-aspect-1"],
  lessons: [
    {
      id: "a2-u07-l1",
      title: "Two verbs for every action",
      topicIds: ["a2-u07-aspect-1"],
      vocab: [
        "делать",
        "сделать",
        "читать",
        "прочитать",
        "писать",
        "написать",
        "покупать",
        "купить",
        "решать",
        "решить",
      ],
      grammar: [
        {
          title: "The core idea",
          body: `Most Russian verbs come in **pairs**: imperfective (the process) and perfective (the result):
- де́лать → сде́лать (to do → to get done)
- чита́ть → прочита́ть (to read → to read through/finish)
**Imperfective** = process, habit, repetition, attempt. **Perfective** = completed result, one whole event. The perfective has NO present tense — its "present" forms are future.`,
          table: {
            headers: ["Question", "Aspect", "Example"],
            rows: [
              ["What were you doing?", "imperfective", "Я читал книгу"],
              ["Did you finish it?", "perfective", "Я прочитал книгу"],
              ["I read every day", "imperfective", "Я читаю каждый день"],
              ["I'll read it tonight (finish)", "perfective", "Я прочитаю её вечером"],
            ],
          },
          examples: [
            { ru: "Вчера' я читал, но не прочита'л.", en: "Yesterday I was reading but didn't finish." },
            { ru: "Она' реши'ла зада'чу.", en: "She solved the problem (result!)." },
          ],
          tip: "Negated past «не читал» vs «не прочита́л»: didn't read (at all/maybe) vs didn't finish (but tried).",
        },
        {
          title: "How pairs are built",
          body: `Common patterns (learn the verb, not the rule):
- prefix по-/с-/на-/за-/вы-/у- on the imperfective: де́лать → сде́лать, писа́ть → написа́ть, чита́ть → прочита́ть
- the pair partner is in the dictionary: each verb's page shows its partner (verbs.aspect + partner).`,
          examples: [
            { ru: "Я купи'л хлеб по доро'ге домой.", en: "I bought bread on the way home." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u07-l1-e1",
          type: "single",
          text: "Вчера́ ве́чером я ___ письмо́ и отпра́вил его. (wrote and sent — result)",
          options: [
            { id: "a", label: "писал" },
            { id: "b", label: "написал" },
          ],
          answer: "b",
        },
        {
          id: "a2-u07-l1-e2",
          type: "single",
          text: "Он до́лго ___ и, наконе́ц, ___ зада́чу. (решать / решить)",
          options: [
            { id: "a", label: "решал — решил" },
            { id: "b", label: "решил — решал" },
          ],
          answer: "a",
        },
        {
          id: "a2-u07-l1-e3",
          type: "fill-blank",
          text: "Ка́ждый день я {{blank}} но́вости. *(Every day I read the news — habit)*",
          answers: ["читаю"],
        },
        {
          id: "a2-u07-l1-e4",
          type: "true-false",
          text: "The perfective verb has no present tense.",
          answer: true,
          explanation: "Perfective present forms ARE the future.",
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_pl3"] },
        { kind: "cloze", count: 3 },
      ],
    },
    {
      id: "a2-u07-l2",
      title: "Aspect in questions, negatives and the future",
      topicIds: ["a2-u07-aspect-1"],
      vocab: [
        "начинать",
        "начать",
        "заканчивать",
        "закончить",
        "продолжать",
        "забыть",
        "забывать",
        "успеть",
        "получить",
        "получать",
      ],
      grammar: [
        {
          title: "Choosing in the past: was there a result?",
          body: `Ask: was the action **completed**?
- Ты **купи́л** биле́ты? — Did you buy (get) the tickets? (result expected)
- — Нет, не купи́л. — No, didn't manage to (imperfective negates the RESULT).
Announcements of success use perfective: Я сдал экза́мен!`,
          examples: [
            { ru: "Ты зако'нчил докла'д? — Ещё нет.", en: "Have you finished the report? — Not yet." },
          ],
        },
        {
          title: "Future choices",
          body: `- **бу́ду + infinitive** — process/plan: За́втра бу́ду гото́виться к экза́мену.
- **perfective future** — a completed act: Я куплю́ биле́ты сего́дня.
Negative future: **не бу́ду + imperfective** (Я не бу́ду кури́ть) — the perfective has no negative future for "won't get it done" except fixed uses.`,
          examples: [
            { ru: "Я на'чну учи'ть кита'йский в сле'дующем году'.", en: "I'll start learning Chinese next year." },
          ],
          tip: "нача́ть/зако́нчить + imperfective infinitive: на́чну чита́ть (start reading), зако́нчу писа́ть (finish writing). The ASPECT lives in на́чну/зако́нчу, the process in the infinitive.",
        },
      ],
      exercises: [
        {
          id: "a2-u07-l2-e1",
          type: "single",
          text: "— Ты купи́л хле́б? — Нет, не ___. (didn't get round to it)",
          options: [
            { id: "a", label: "купил" },
            { id: "b", label: "куплю" },
          ],
          answer: "a",
          explanation: "The negation of a perfective past denies the result — but the verb stays perfective after «не» in the past: не купи́л.",
        },
        {
          id: "a2-u07-l2-e2",
          type: "single",
          text: "За́втра я ___ э́тот рома́н за два ча́са. (I'll finish reading — perfective)",
          options: [
            { id: "a", label: "буду читать" },
            { id: "b", label: "прочитаю" },
          ],
          answer: "b",
        },
        {
          id: "a2-u07-l2-e3",
          type: "fill-blank",
          text: "Он на́чал {{blank}} в пять и зако́нчил в семь. *(He started working at five and finished at seven.)*",
          answers: ["работать"],
        },
        {
          id: "a2-u07-l2-e4",
          type: "true-false",
          text: "«Я не бу́ду смотре́ть э́тот фи́льм» — here смотре́ть is imperfective because the decision is about the process.",
          answer: true,
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_sg2", "presfut_pl3"] },
        { kind: "cloze", count: 2 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u07-test-1",
      type: "single",
      text: "Он ___ но́вый до́м в про́шлом году́. (built — result)",
      options: [
        { id: "a", label: "строил" },
        { id: "b", label: "построил" },
      ],
      answer: "b",
    },
    {
      id: "a2-u07-test-2",
      type: "single",
      text: "Ка́ждый ве́чер она́ ___ журна́лы.",
      options: [
        { id: "a", label: "прочитывает" },
        { id: "b", label: "читает" },
      ],
      answer: "b",
    },
    {
      id: "a2-u07-test-3",
      type: "short-answer",
      text: "Say in Russian: (Yesterday I wrote a letter. — result)",
      answer: "вчера я написал письмо",
    },
    {
      id: "a2-u07-test-4",
      type: "true-false",
      text: "«Я хочу́ купи́ть хлеб» — купить is perfective; the intent is a completed purchase.",
      answer: true,
    },
    {
      id: "a2-u07-test-5",
      type: "fill-blank",
      text: "Мы на́чали {{blank}} ру́сский в ма́е. *(We started learning Russian in May.)*",
      answers: ["учить"],
      accept: [["изучать"]],
    },
    {
      id: "a2-u07-test-6",
      type: "single",
      text: "За́втра в де́вять я ___ докла́д. (I'll be writing — process)",
      options: [
        { id: "a", label: "буду писать" },
        { id: "b", label: "напишу" },
      ],
      answer: "a",
    },
  ],
};
