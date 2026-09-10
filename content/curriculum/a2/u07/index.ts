import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 7 — Aspect I, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
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
          title: "Process vs result — the idea that organises all of Russian",
          body: `Here is the concept that separates beginners from everyone else: for most actions Russian has **two verbs**, not one. They are called **aspect partners**.

- The **imperfective** (несовершенный вид) describes the action as a *process or habit*: де́лать, чита́ть, писа́ть. It answers *what were you doing?* and *what do you do regularly?* It says nothing about whether the job ever got finished.
- The **perfective** (совершенный вид) describes the action as a *completed whole*: сде́лать, прочита́ть, написа́ть. It answers *did you get it done?* One event, start to finish, result achieved.

Compare:
- «Вчера́ я чита́л, но не прочита́л.» — Yesterday I was reading but didn't finish. (process happened, result didn't)
- «Я уже́ прочита́л.» — I've already read it. (done)

English gets by with one verb plus helper words (*was reading* / *have read* / *managed to read*). Russian builds the distinction directly into the verb. Every single verb you learn from now on comes with an aspect label — treat the pair as one vocabulary item.`,
          why: `Why does Russian need this? Because without helper verbs like *was/have/managed*, Russian needs some other machine to distinguish "I was reading" from "I read it". Aspect is that machine — baked into the verb itself. It is arguably the deepest feature of the language, and the habits you build now will pay off through C1.`,
          table: {
            headers: ["Question", "Aspect", "Example"],
            rows: [
              ["What were you doing?", "imperfective", "Я читал книгу"],
              ["Did you finish it?", "perfective", "Я прочитал книгу"],
              ["I read every day", "imperfective", "Я читаю каждый день"],
            ],
          },
          examples: [
            { ru: "Вче' я весь ве'чер писа'л.email'ы.", en: "Last night I spent the whole evening writing emails — process, no claim of completion." },
            { ru: "Я написа'л три пи'сьма и лег спать.", en: "I wrote three letters and went to bed — result achieved." },
          ],
          tip: "Don't translate aspect word-for-word. Instead ask one question: **is the action presented as done or not?** Done → perfective. Everything else (process, habit, attempt, intention) → imperfective. That single question resolves 80% of choices.",
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
          title: "Perfective = imperfective + prefix (usually)",
          body: `The most common way to make a perfective partner is to bolt a **prefix** onto the imperfective:

- де́лать → **с**де́лать (just get it done)
- писа́ть → **на**писа́ть (produce a text)
- чита́ть → **про**чита́ть (read through)
- пить → **вы**пить (drink up)

Some pairs change more than a prefix: покупа́ть → **купи́ть** (the whole stem swaps — these are called suppletive pairs and simply need memorising). The dictionary does the bookkeeping for you: every verb's page lists its aspect partner (that is the `partner` field in our database), so you never have to guess.`,
          table: {
            headers: ["Imperfective", "Perfective"],
            rows: [
              ["делать", "сделать"],
              ["писать", "написать"],
              ["читать", "прочитать"],
              ["покупать", "купить"],
            ],
          },
          examples: [
            { ru: "Она' заказа'ла то'рт на суббо'ту.", en: "She ordered a cake for Saturday — perfective: the order is placed." },
            { ru: "Я заказа'ю то'рт, а ты купи' свечи'.", en: "I'll order the cake and you buy candles — same logic in the future." },
          ],
          tip: "The trap: assuming the prefix is meaningless decoration. Prefixes usually add a shade (за- = start, по- = do for a while) — but in these basic pairs the perfective simply means *done*. Save the fine-grained prefix semantics for B2; for now, learn pairs as units.",
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
      vocab: ["письмо", "написать", "покупать", "билет", "экзамен", "сдать", "сдавать", "готовиться", "закончить", "ещё"],
      grammar: [
        {
          title: "Ask: did it get done?",
          body: `In the past, choose your aspect by asking one question — **did the action reach its result?**

- «Ты **купи́л** биле́ты?» — Did you get the tickets? (result expected → perfective)
- «— Нет, не купи́л.» — No, didn't manage it. (the perfective negated denies the RESULT)
- «Я сдал экза́мен!» — I passed! (achievements are perfective, always)
- «Я гото́вился, но не сдал.» — I prepared but didn't pass. (process = imperfective)

There is a second distinction hiding here. «Я не чита́л э́ту кни́гу» (imperfective) = I never read it at all. «Я не прочита́л» (perfective) = I didn't finish it. Negation + aspect lets you say very precise things about very little.`,
          why: `The negated perfective is subtle but learnable: a perfective verb claims a completed event, so negating it denies exactly that completion — *the result didn't happen*. The negated imperfective denies the process itself. English forces you to paraphrase ("didn't manage to read" vs "never read it"); Russian just flips the aspect.`,
          table: {
            headers: ["Sentence", "Reading"],
            rows: [
              ["Я не читал книгу", "I never read it"],
              ["Я не прочитал книгу", "I didn't finish it"],
              ["Я сдал экзамен", "I passed (achievement)"],
            ],
          },
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
      title: "Step 4: choosing in the future + на́чать / ко́нчить",
      topicIds: ["a2-u07-aspect-1"],
      vocab: ["начинать", "начать", "заканчивать", "закончить", "продолжать", "забыть", "успеть", "получить", "получать", "собираться"],
      grammar: [
        {
          title: "Two futures",
          body: `The two aspects build the future differently:

- **Imperfective**: бу́ду + infinitive — За́втра бу́ду гото́виться к экза́мену. (process/plan)
- **Perfective**: present endings, future meaning — Я куплю́ биле́ты сего́дня. (one completed act)

Negative future: **не бу́ду + imperfective** — Я не бу́ду кури́ть. (I won't smoke / won't be smoking)

And a construction you will use constantly: **на́чну / ко́нчу + imperfective infinitive** — на́чну чита́ть (I'll start reading), ко́нчу писа́ть (I'll finish writing). The aspect lives in на́чну/ко́нчу; the infinitive stays imperfective because it names the process being started or ended.`,
          why: `Why must на́чать take an imperfective infinitive? Because starting and finishing apply to *processes* — you cannot "start a completed action", you start the doing of it. The perfective partner (нача́ть + прочита́ть) sounds wrong to natives for the same logical reason. Aspect choices often reduce to simple logic once you see what each form claims.`,
          table: {
            headers: ["Pattern", "Example"],
            rows: [
              ["буду + impf inf", "буду готовиться"],
              ["perf present", "куплю билеты"],
              ["не буду + impf inf", "не буду курить"],
              ["начну / кончу + impf inf", "начну читать"],
            ],
          },
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
