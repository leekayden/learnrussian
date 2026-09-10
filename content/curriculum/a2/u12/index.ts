import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 12 — Reflexives, imperatives, modals, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
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
          body: `That little suffix **-ся** (pronounced -sya) attaches to verbs and reroutes their action. It has four distinct jobs, and you already use two of them daily:

- **True reflexive** — the action bounces back onto the doer: одева́ться (dress oneself), умыва́ться (wash oneself), бри́ться (shave).
- **Reciprocal** — the parties do it *to each other*: встреча́ться (meet each other), ви́деться (see each other), обнима́ться (hug).
- **Engage in**: занима́ться спо́ртом (do sports), занима́ться му́зыкой.
- **Located / stayed**: находи́ться (be located — «Музе́й нахо́дится в це́нтре»), остава́ться (stay).

English signals the first two with a separate word (*myself*, *each other*); Russian folds them into the verb. There is no separate word to memorise — just the ending.`,
          why: `-ся is a worn-down stub of the old reflexive pronoun *сябе* (self). It glued onto the ends of verbs and stayed there. That is why one suffix can mean "myself", "each other", or nothing in particular — it is one pronoun squeezed into grammar over centuries, and context picks the reading.`,
          table: {
            headers: ["Verb", "Meaning"],
            rows: [
              ["заниматься", "to study / do"],
              ["учиться", "to study (be a student)"],
              ["находиться", "to be located"],
              ["оставаться", "to stay"],
            ],
          },
          examples: [
            { ru: "Я просыпа'юсь в семь без буди'льника.", en: "I wake up at seven without an alarm." },
            { ru: "Мы занима'емся спо'ртом по вечера'м.", en: "We work out in the evenings — занима́ться + instrumental." },
          ],
          tip: "занима́ться and горди́ться both demand the **instrumental**: занима́ться спо́ртом, горди́ться бра́том. English says *do sports* with no preposition and *proud of* with *of* — Russian says neither; it uses the instrumental. Verb + case travel in pairs.",
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
          body: `Pure spelling euphony: after a **consonant** the suffix is **-ся**; after a **vowel** it is **-сь**:

- Он купа́**лся**, она́ купа́**лась**, они́ купа́**лись**
- Я учу́**сь**, ты у́чишь**ся**, они́ у́чат**ся**

In the past tense the letter before -ся/-сь is always -л- (a consonant), so masculine forms keep -ся (он купа́лся) while feminine forms get -сь (она́ купа́лась). The rule is mechanical — no exceptions, no stress tricks.`,
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
          body: `The imperative is built from the **они-form of the present**, minus its ending:

- чита́ют → чита́- → чита́й (informal) / чита́йте (plural/polite)
- говори́т → говори́ / говори́те

If the stem ends in a consonant, add **-и**: сесть →сядут→ ся́дь, встать → вста́нь. The -ся suffix carries along: умыва́йся, одева́йтесь.

The **-те** form is not "louder" — it is for several people AND for politeness with one person, exactly like вы. A shop assistant says «повтори́те», a coach says «повтори́».

**Perfective imperatives** give one concrete instruction: Купи́ хлеб! Скажи́ ему́ пра́вду! — they ask for a single completed act, not an ongoing effort.`,
          why: `Why build from the они-form? Because the stem that shows up in «они́ чита́ют» is the verb's true skeleton — the same skeleton the past participle used. Taking it minus the ending and adding -й/-и gives the imperative with almost no effort. Verbs whose они-form surprises you (даду́т) will have surprising imperatives (дай) — the skeleton never lies.`,
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
          body: `Negative commands take the **imperfective** imperative: Не говори́ гро́мко! (Don't speak loudly — stop that behaviour), Не приходи́ сюда́! The imperfective forbids the *activity*.

**Дава́й / Дава́йте** builds invitations: дава́й + perfective future (Дава́й пойдём!) or дава́й + infinitive (Дава́йте поговори́ть). Both patterns are on the street every day. Дава́йте is the polite/plural version; use it with anyone you would call вы.`,
          examples: [
            { ru: "Не опа'здывай!", en: "Don't be late!" },
            { ru: "Дава'йте начнём!", en: "Let's get started!" },
          ],
          tip: "Why imperfective after «не»? Because «Не опозда́й!» would target one specific completed lateness — it exists (a warning: mind you don't end up late) but the everyday ban on a behaviour is imperfective. If you catch yourself saying «Не купи́ хлеб!», ask: am I banning bread-shopping in general (не покупа́й) or warning about one fateful purchase (не купи́)?",
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
      vocab: ["должен", "можно", "нельзя", "извиняться", "спросить", "посмотреть", "согласиться", "обязательно", "правило", "совет"],
      grammar: [
        {
          title: "Obligation and permission",
          body: `**до́лжен / должна́ / должны́ + infinitive** = must / have to. It agrees in gender and number — never in person: Я до́лжен, ты до́лжен, она́ должнá, мы должны́. (Past: был до́лжен... был + должен + inf.)

The impersonal set needs the dative person (from Unit 4): **Мне нужно рабо́тать**, **Мо́жно войти́?**, **Здесь нельзя́ кури́ть**. And **сто́ит** = it is worth: **Стои́т посмотре́ть** — worth watching.

The difference between до́лжен and ну́жно is subtle: до́лжен carries personal duty or a promise made; ну́жно carries objective necessity. «Я до́лжен позвони́ть ма́ме» (I promised), «Ну́жно позвони́ть в банк» (the situation demands it).`,
          why: `до́лжен is a short-form adjective (from долг, debt) — literally "in-debt for doing X". That is why it agrees like an adjective (gender/number) and never like a verb (person). Short adjectives were predicates in Old Russian — saying «он до́лжен» was "he is in-debt" — and the +infinitive glue came later. Grammar fossils again.`,
          table: {
            headers: ["Word", "Meaning", "Example"],
            rows: [
              ["должен", "must (personal duty)", "Я должен позвонить"],
              ["нужно", "need (objective)", "Нужно учиться"],
              ["можно", "may", "Можно войти?"],
              ["нельзя", "must not", "Нельзя опаздывать"],
              ["стоит", "is worth", "Стоит попробовать"],
            ],
          },
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
