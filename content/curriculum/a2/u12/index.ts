import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 12 — Reflexives, imperatives, modals, one step at a time. */
export const u12: Unit = {
  id: "a2-u12",
  level: "a2",
  number: 12,
  title: "-ся verbs, commands and must/may",
  topicIds: ["a2-u12-reflexives-imperatives-modals"],
  lessons: [
    {
      id: "a2-u12-l1",
      title: "Step 1: what -ся means",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: ["просыпаться", "одеваться", "умываться", "заниматься", "учиться", "встречаться", "находиться", "оставаться", "улыбаться", "гордиться"],
      grammar: [
        {
          title: "Four jobs of -ся",
          body: `- **True reflexive**: одева́ться (dress oneself), умыва́ться
- **Reciprocal**: встреча́ться (meet each other), ви́деться
- **Engage in**: занима́ться спо́ртом (do sports)
- **Located / stayed**: находи́ться (be located), остава́ться`,
          table: {
            headers: ["Verb", "Meaning"],
            rows: [
              ["заниматься", "to study / do"],
              ["учиться", "to study (be a student)"],
              ["находиться", "to be located"],
              ["оставаться", "to stay"],
            ],
          },
          tip: "занима́ться + instrumental: занима́ться спо́ртом, му́зыкой. горди́ться + instrumental: горжуса́ бра́том.",
        },
      ],
      exercises: [
        {
          id: "a2-u12-l1-e1",
          type: "single",
          text: "Я ___ в шесть утра́. (wake up)",
          options: [{ id: "a", label: "просыпаюсь" }, { id: "b", label: "просыпаешься" }], answer: "a",
        },
        {
          id: "a2-u12-l1-e2",
          type: "single",
          text: "Где вы ___? (study)",
          options: [{ id: "a", label: "учитесь" }, { id: "b", label: "учишься" }], answer: "a",
        },
        {
          id: "a2-u12-l1-e3",
          type: "fill-blank",
          text: "Мы ___ в па́рке по суббо́там. *(meet each other)*",
          answers: ["встречаемся"],
        },
      ],
      drills: [{ kind: "conjugation", count: 3, slots: ["presfut_sg1", "presfut_pl3"] }, { kind: "cloze", count: 2 }],
    },
    {
      id: "a2-u12-l2",
      title: "Step 2: -сь after vowels",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: ["купаться", "улыбаться", "надеяться", "учиться", "остаться", "бояться", "смеяться", "просыпаться", "заниматься", "одеваться"],
      grammar: [
        {
          title: "After a vowel -ся becomes -сь",
          body: `- Он купа́лся, она́ купа́**лась**, они́ купа́лись
- я учу́**сь**, ты учи́**шься**, они́ у́чат**ся**
Consonant → -ся; vowel → -сь. That's the whole rule.`,
          table: {
            headers: ["Form", "Verb"],
            rows: [
              ["он", "купался (-ся)"],
              ["она", "купалась (-сь)"],
              ["я (f)", "купалась"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u12-l2-e1",
          type: "single",
          text: "Она́ давно́ ___. (washed — feminine)",
          options: [{ id: "a", label: "куплась" }, { id: "b", label: "купался" }], answer: "a",
        },
        {
          id: "a2-u12-l2-e2",
          type: "single",
          text: "After a vowel use:",
          options: [{ id: "a", label: "-сь" }, { id: "b", label: "-ся" }], answer: "a",
        },
        {
          id: "a2-u12-l2-e3",
          type: "true-false",
          text: "«он учится» ends in -ся after a consonant+я? — correct spelling is у́чится.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u12-l3",
      title: "Step 3: building the imperative",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: ["сказать", "повторить", "открыть", "закрыть", "слушать", "смотреть", "ждать", "читать", "сесть", "встать"],
      grammar: [
        {
          title: "Present stem + -й/-и/-те",
          body: `- чита́ют → чита́й / чита́йте; говори́т → говори́ / говори́те
- **-те** = plural or polite: Скажи́те, пожа́луйста!
- Perfective imperative = one concrete order: Купи́ хлеб! Скажи́ ему́.
- -ся stays: умыва́йся, одева́йтесь`,
          table: {
            headers: ["Verb", "ты", "вы"],
            rows: [
              ["читать", "читай", "читайте"],
              ["говорить", "говори", "говорите"],
              ["сесть", "сядь", "сядьте"],
              ["встать", "встань", "встаньте"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u12-l3-e1",
          type: "single",
          text: "___ , пожа́луйста, э́то сло́во! (polite)",
          options: [{ id: "a", label: "Повторите" }, { id: "b", label: "Повтори" }], answer: "a",
        },
        {
          id: "a2-u12-l3-e2",
          type: "single",
          text: "___ , пожа́луйста, дверь! (polite: close)",
          options: [{ id: "a", label: "Закройте" }, { id: "b", label: "Закрой" }], answer: "a",
        },
        {
          id: "a2-u12-l3-e3",
          type: "short-answer",
          text: "Say politely: Repeat, please!",
          answer: "повторите пожалуйста",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u12-l4",
      title: "Step 4: negative commands + давай",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: ["опаздывать", "громко", "сюда", "приходить", "давай", "давайте", "поговорить", "сначала", "начать", "идти"],
      grammar: [
        {
          title: "не + imperfective; давай + perfective",
          body: `- Negative commands take the **imperfective**: Не говори́ гро́мко! Не приходи́ сюда́!
- **Дава́й / Дава́йте + perfective future or infinitive** = let's: Дава́й пойдём! Дава́йте поговори́ть.`,
          examples: [
            { ru: "Не опа'здывай!", en: "Don't be late!" },
          ],
          tip: "Perfective after не would forbid a single completed act — rare; the everyday ban is imperfective.",
        },
      ],
      exercises: [
        {
          id: "a2-u12-l4-e1",
          type: "single",
          text: "Не ___ сюда́! (don't come)",
          options: [{ id: "a", label: "приходи" }, { id: "b", label: "приди" }], answer: "a",
        },
        {
          id: "a2-u12-l4-e2",
          type: "fill-blank",
          text: "___ сначала́! *(Let's start!)*",
          answers: ["Давай"],
        },
        {
          id: "a2-u12-l4-e3",
          type: "true-false",
          text: "«Ся́дь» is the informal imperative of сесть.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u12-l5",
      title: "Step 5: должен + можно / нельзя / стоит",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: ["должен", "должна", "должны", "можно", "нельзя", "стоит", "извиняться", "спросить", "посмотреть", "согласиться"],
      grammar: [
        {
          title: "Obligation and permission",
          body: `- **до́лжен / должнá / должны́** + infinitive (agrees in gender/number, NOT person): Я до́лжен идти́. Она́ должнá звони́ть.
- **Можно + inf?** — May I? (Мо́жно мне войти́?)
- **Нельзя́** — must not. **Стои́т посмотре́ть** — worth watching.`,
          examples: [
            { ru: "Вы должны' извиня'ться.", en: "You must apologise." },
          ],
          tip: "должен is a short adjective: я/он до́лжен, она́ должнá, они́ должны́.",
        },
      ],
      exercises: [
        {
          id: "a2-u12-l5-e1",
          type: "single",
          text: "Я ___ сего́дня рабо́тать. (male)",
          options: [{ id: "a", label: "должен" }, { id: "b", label: "должна" }], answer: "a",
        },
        {
          id: "a2-u12-l5-e2",
          type: "single",
          text: "___ мне спроси́ть?",
          options: [{ id: "a", label: "Можно" }, { id: "b", label: "Должен" }], answer: "a",
        },
        {
          id: "a2-u12-l5-e3",
          type: "fill-blank",
          text: "Де́ти ___ отдыха́ть. *(must)*",
          answers: ["должны"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u12-test-1", type: "single",
      text: "Она́ ___ в де́сять. (wakes up)",
      options: [{ id: "a", label: "просыпается" }, { id: "b", label: "просыпаются" }], answer: "a",
    },
    {
      id: "a2-u12-test-2", type: "single",
      text: "___ , пожа́луйста, дверь! (polite: close)",
      options: [{ id: "a", label: "Закройте" }, { id: "b", label: "Закрой" }], answer: "a",
    },
    {
      id: "a2-u12-test-3", type: "short-answer",
      text: "Say politely: Repeat, please!",
      answer: "повторите пожалуйста",
    },
    {
      id: "a2-u12-test-4", type: "fill-blank",
      text: "Не ___ гро́мко! *(talk — plural)*",
      answers: ["говорите"],
    },
    {
      id: "a2-u12-test-5", type: "true-false",
      text: "«Он должнá позвони́ть» is wrong; correct is «Он до́лжен позвони́ть».",
      answer: true,
    },
    {
      id: "a2-u12-test-6", type: "ordering",
      text: "Build: **Let's go to the museum!**",
      items: [
        { id: "1", label: "Давай" }, { id: "2", label: "пойдём" }, { id: "3", label: "в музей" },
      ],
      answer: ["1", "2", "3"],
    },
    {
      id: "a2-u12-test-7", type: "matching",
      text: "Modal → meaning:",
      prompts: [
        { id: "p1", label: "нельзя" }, { id: "p2", label: "можно" }, { id: "p3", label: "стоит" },
      ],
      responses: [
        { id: "r1", label: "is worth" }, { id: "r2", label: "must not" }, { id: "r3", label: "may / is allowed" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
