import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 12 — Reflexive verbs, imperatives, modals. A2 wrap-up. */
export const u12: Unit = {
  id: "a2-u12",
  level: "a2",
  number: 12,
  title: "-ся verbs, commands and must/may",
  topicIds: ["a2-u12-reflexives-imperatives-modals"],
  lessons: [
    {
      id: "a2-u12-l1",
      title: "Reflexive -ся verbs you already use",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: [
        "просыпаться",
        "одеваться",
        "умываться",
        "заниматься",
        "учиться",
        "встречаться",
        "находиться",
        "оставаться",
        "улыбаться",
        "гордиться",
      ],
      grammar: [
        {
          title: "-ся / -сь: the verb turns back",
          body: `Add **-ся** (after consonant) / **-сь** (after vowel) to say the action relates back to the subject:
- я умыва́юсь, ты умыва́ешься, они́ умыва́ются (wash oneself)
- после гласной: учу́сь, учи́шься, у́чатся
Meanings: true reflexive (одева́ться — dress oneself), reciprocal (встреча́ться — meet each other), "engage in" (занима́ться спо́ртом — do sports), staying (остава́ться), located (находи́ться).`,
          table: {
            headers: ["Person", "заниматься"],
            rows: [
              ["я", "занимаюсь"],
              ["ты", "занимаешься"],
              ["он / она", "занимается"],
              ["мы / вы / они", "занимаемся / занимаетесь / занимаются"],
            ],
          },
          examples: [
            { ru: "Я занима'юсь спо'ртом два ра'за в неде'лю.", en: "I work out twice a week." },
            { ru: "Музе'й нахо'дится в це'нтре.", en: "The museum is located in the centre." },
          ],
          tip: "занима́ться + instrumental: занима́ться спо́ртом, му́зыкой. гордиться + instrumental: горжу́сь бра́том.",
        },
      ],
      exercises: [
        {
          id: "a2-u12-l1-e1",
          type: "single",
          text: "Я ___ в шесть часо́в утра́. (wake up)",
          options: [
            { id: "a", label: "просыпаюсь" },
            { id: "b", label: "просыпаешься" },
          ],
          answer: "a",
        },
        {
          id: "a2-u12-l1-e2",
          type: "single",
          text: "Где вы ___? (study)",
          options: [
            { id: "a", label: "учитесь" },
            { id: "b", label: "учишься" },
          ],
          answer: "a",
        },
        {
          id: "a2-u12-l1-e3",
          type: "fill-blank",
          text: "Мы ___ в па́рке по суббо́там. *(We meet in the park on Saturdays.)*",
          answers: ["встречаемся"],
        },
        {
          id: "a2-u12-l1-e4",
          type: "true-false",
          text: "After a vowel -ся becomes -сь: «она́ учится».",
          answer: true,
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["presfut_sg1", "presfut_pl3"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u12-l2",
      title: "Imperatives: saying what to do",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: [
        "сказать",
        "повторить",
        "открыть",
        "закрыть",
        "слушать",
        "смотреть",
        "ждать",
        "писать",
        "читать",
        "идти",
      ],
      grammar: [
        {
          title: "Building the imperative",
          body: `Take the present stem (3rd person plural minus -ут/-ят):
- чита́ют → чита́й / чита́йте; говори́т → говори́ / говори́те
- -сь stays: умыва́йся, одева́йтесь
- **-те** = plural or polite: Скажи́те, пожа́луйста!
- Perfective imperative = for one-time, complete commands: Купи́ хлеб! Скажи́ ему́.`,
          table: {
            headers: ["Verb", "ты", "вы"],
            rows: [
              ["читать", "читай", "читайте"],
              ["говорить", "говори", "говорите"],
              ["сесть", "сядь", "сядьте"],
              ["встать", "встань", "встаньте"],
            ],
          },
          examples: [
            { ru: "Скажи'те, где вокза'л?", en: "Tell me, where is the station?" },
            { ru: "Откро'йте кни'ги на страни'це де'сять.", en: "Open your books to page ten." },
          ],
          tip: "Negative commands use **не + imperfective**: Не говори́ гро́мко. (Don't speak loudly.)",
        },
        {
          title: "давай + let's",
          body: `**Дава́й / Дава́йте + perfective future or infinitive**:
- Дава́й пойдём! — Let's go!
- Дава́йте поговори́м. — Let's talk.
- Дава́й чита́ть. — Let's read.`,
        },
      ],
      exercises: [
        {
          id: "a2-u12-l2-e1",
          type: "single",
          text: "___ , пожа́луйста, э́то сло́во! (Repeat — polite)",
          options: [
            { id: "a", label: "Повторите" },
            { id: "b", label: "Повтори" },
          ],
          answer: "a",
        },
        {
          id: "a2-u12-l2-e2",
          type: "single",
          text: "Не ___ сюда́! (Don't come)",
          options: [
            { id: "a", label: "приди" },
            { id: "b", label: "приходи" },
          ],
          answer: "b",
          explanation: "Negative commands take the imperfective: не приходи́.",
        },
        {
          id: "a2-u12-l2-e3",
          type: "fill-blank",
          text: "___ сначала́! *(Let's start!)*",
          answers: ["Давай"],
        },
        {
          id: "a2-u12-l2-e4",
          type: "true-false",
          text: "«Ся́дь» is the informal imperative of сесть.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "a2-u12-l3",
      title: "Modals: can, must, may — and A2 exam prep",
      topicIds: ["a2-u12-reflexives-imperatives-modals"],
      vocab: [
        "должен",
        "можно",
        "нужно",
        "надо",
        "нельзя",
        "пора",
        "стоить",
        "мочь",
        "долженствовать",
        "получаться",
      ],
      grammar: [
        {
          title: "должен, была должна, will have to",
          body: `**должен / должнá / должнó / должн** (short-form agreement!) + infinitive = obligation:
- Я до́лжен идти́. — I must go (male). Она́ должнá звони́ть.
- Past: был / была́ / должны́ бы́ли + inf: Я до́лжен был... = I was supposed to.
- Future: бу́ду до́лжен...`,
          examples: [
            { ru: "Вы должны' извиня'ться.", en: "You must apologise." },
            { ru: "Она' должна' была' позвони'ть.", en: "She was supposed to call." },
          ],
          tip: "должен is a short adjective — it agrees in gender and number, not person: я/он до́лжен, она́ должнá, они́ должны́.",
        },
        {
          title: "можно / нельзя / стоит",
          body: `- **Можно + inf?** — May I…? Здесь мо́жно фотографи́ровать? (add dative for the person: Мо́жно мне войти́?)
- **Нельзя́** — must not / may not.
- **Стои́т** — it's worth: Стои́т посмотре́ть э́тот фильм.`,
        },
      ],
      exercises: [
        {
          id: "a2-u12-l3-e1",
          type: "single",
          text: "Я ___ сего́дня рабо́тать. (must — male)",
          options: [
            { id: "a", label: "должен" },
            { id: "b", label: "должна" },
          ],
          answer: "a",
        },
        {
          id: "a2-u12-l3-e2",
          type: "single",
          text: "___ мне спроси́ть?",
          options: [
            { id: "a", label: "Можно" },
            { id: "b", label: "Должен" },
          ],
          answer: "a",
        },
        {
          id: "a2-u12-l3-e3",
          type: "fill-blank",
          text: "Де́ти ___ отдыха́ть. *(Children must rest.)*",
          answers: ["должны"],
        },
        {
          id: "a2-u12-l3-e4",
          type: "true-false",
          text: "«Стои́т посмотре́ть» means “it's worth watching”.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u12-test-1",
      type: "single",
      text: "Она́ ___ в де́сять. (wakes up)",
      options: [
        { id: "a", label: "просыпается" },
        { id: "b", label: "просыпаются" },
      ],
      answer: "a",
    },
    {
      id: "a2-u12-test-2",
      type: "single",
      text: "___ , пожа́луйста, дверь! (Close — polite)",
      options: [
        { id: "a", label: "Закройте" },
        { id: "b", label: "Закрой" },
      ],
      answer: "a",
    },
    {
      id: "a2-u12-test-3",
      type: "short-answer",
      text: "Say politely: (Repeat, please!)",
      answer: "повторите пожалуйста",
    },
    {
      id: "a2-u12-test-4",
      type: "fill-blank",
      text: "Не ___ гро́мко! *(Don't talk loudly!)*",
      answers: ["говорите"],
    },
    {
      id: "a2-u12-test-5",
      type: "true-false",
      text: "«Он должнá позвони́ть» is wrong; it should be «Он до́лжен позвони́ть».",
      answer: true,
    },
    {
      id: "a2-u12-test-6",
      type: "ordering",
      text: "Build: **Let's go to the museum!**",
      items: [
        { id: "1", label: "Давай" },
        { id: "2", label: "пойдём" },
        { id: "3", label: "в музей" },
      ],
      answer: ["1", "2", "3"],
    },
    {
      id: "a2-u12-test-7",
      type: "matching",
      text: "Modal → meaning:",
      prompts: [
        { id: "p1", label: "нельзя" },
        { id: "p2", label: "можно" },
        { id: "p3", label: "стоит" },
      ],
      responses: [
        { id: "r1", label: "is worth" },
        { id: "r2", label: "must not" },
        { id: "r3", label: "may / is allowed" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
