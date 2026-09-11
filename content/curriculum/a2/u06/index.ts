import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 6 — Past & future, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
export const u06: Unit = {
  id: "a2-u06",
  level: "a2",
  number: 6,
  title: "Yesterday and tomorrow: past and future",
  topicIds: ["a2-u06-past-future"],
  lessons: [
    {
      id: "a2-u06-l1",
      title: "Step 1: the past tense — one stem, four endings",
      topicIds: ["a2-u06-past-future"],
      vocab: ["вчера", "давно", "недавно", "читать", "работать", "гулять", "смотреть", "слушать"],
      grammar: [
        {
          title: "Drop -ть, add -л/-ла/-ло/-ли",
          body: `After the six-endings system of the present, the past will feel like a holiday. There are **no person endings at all** — only gender and number:

- **-л** for he (and for я, if the speaker is male)
- **-ла** for she (and for я, if female)
- **-ло** for it (neuter)
- **-ли** for they — and also for мы, вы, and polite вы

So a woman says «Я чита́ла», a man says «Я чита́л» — the same sentence, and the ending reveals the speaker's gender. English never does that; Russian does it every time anyone talks about themselves in the past.

Formation: infinitive minus **-ть**, plus the ending.чита́ть → чита́-л / чита́-ла / чита́-ли. That is the whole machinery.`,
          why: `Why so simple? Because the past tense in Russian descends from an old participle («the one who did») that agreed in gender like an adjective — which is exactly why the endings -л/-ла/-ло/-ли look like short adjectives. The person (я/ты/он) was originally shown by a helper word that fell away, leaving gender agreement behind. You are seeing grammar archaeology every time you say «чита́л».`,
          table: {
            headers: ["Subject", "Form"],
            rows: [
              ["я (m) / он", "работал"],
              ["я (f) / она", "работала"],
              ["оно", "работало"],
              ["мы / вы / они", "работали"],
            ],
          },
          examples: [
            { ru: "Вчера' я гуля'л по це'нтру.", en: "Yesterday I strolled through the centre — male speaker." },
            { ru: "Мы слу'шали ле'кцию вчерa'.", en: "We listened to a lecture yesterday — -ли for мы." },
          ],
          tip: "Verbs ending in **-чь** and mono-syllabic stems do something special: мочь → мог/могла́, беречь → берёг/берегла́. The ь disappears and a guttural consonant surfaces. They are few, frequent, and worth memorising as singles.",
        },
      ],
      exercises: [
        {
          id: "a2-u06-l1-e1",
          type: "single",
          text: "Вчера́ она́ ___ в кино́. (ходи́ть)",
          options: [{ id: "a", label: "ходила" }, { id: "b", label: "ходил" }], answer: "a",
        },
        {
          id: "a2-u06-l1-e2",
          type: "single",
          text: "Мы ___ до́ма. (быть)",
          options: [{ id: "a", label: "были" }, { id: "b", label: "был" }], answer: "a",
        },
        {
          id: "a2-u06-l1-e3",
          type: "short-answer",
          text: "A woman says “I worked a lot”:",
          answer: "я много работала",
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["past_m", "past_f", "past_pl"] },
      ],
    },
    {
      id: "a2-u06-l2",
      title: "Step 2: быть in the past — у меня была машина",
      topicIds: ["a2-u06-past-future"],
      vocab: ["быть", "машина", "квартира", "дача", "время", "телевизор", "собака", "работа"],
      grammar: [
        {
          title: "был / была / было / были agree with the THING",
          body: `Two jobs for the past of быть:

**1. Location/fact**: Вчера́ я **был** до́ма. — Yesterday I was at home. (был agrees with the speaker: male был, female была́)

**2. Possession**: **У меня́ бы́ла маши́на.** — I had a car. Here бы́ла agrees with **маши́на** — the THING — because in the у-construction the thing is the grammatical subject. «У меня́ был телефи́н» (masc), «было вре́мя» (neut), «были ключи́» (plural).

This is the mirror image of English, where *I* is clearly the subject of *I had a car*. In Russian the car owns the sentence.`,
          why: `Remember from Unit 3 that «У меня́ есть маши́на» treats the car as the subject ("by me there is a car"). The past simply adds the gender agreement that any Russian subject requires. Whoever or whatever is the subject — even an object — pulls agreement. This is why «У меня́ бы́ли пробле́мы» is plural: problems were the subject all along.`,
          table: {
            headers: ["Thing", "Past of быть"],
            rows: [
              ["машина (f)", "была"],
              ["телефон (m)", "был"],
              ["время (n)", "было"],
              ["ключи (pl)", "были"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u06-l2-e1",
          type: "fill-blank",
          text: "У меня́ ___ теле́фон. *(had a phone)*",
          answers: ["был"],
        },
        {
          id: "a2-u06-l2-e2",
          type: "fill-blank",
          text: "У них ___ краси́вая да́ча.",
          answers: ["была"],
        },
        {
          id: "a2-u06-l2-e3",
          type: "true-false",
          text: "«У меня́ бы́ло маши́на» is wrong; it must be «была́».",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u06-l3",
      title: "Step 3: future imperfective — буду + infinitive",
      topicIds: ["a2-u06-past-future"],
      vocab: ["завтра", "скоро", "будущее", "читать", "работать", "отдыхать", "готовиться", "вечер", "план", "весь"],
      grammar: [
        {
          title: "буду + infinitive = ongoing future",
          body: `For futures that describe an **ongoing process, plan or intention**, Russian uses the future of быть plus the infinitive:

- За́втра я **бу́ду чита́ть** весь день. — Tomorrow I'll be reading all day.
- Мы **бу́дем жить** в Москве́. — We will live in Moscow.
- Что ты **бу́дешь де́лать** ве́чером? — What will you be doing tonight?

Only бу́ду conjugates; the second verb stays frozen in the infinitive. This is called the **future compound** (сложное будущее) — compound because two words build it.`,
          why: `Think of бу́ду as the actual verb ("I will be") and the infinitive as what you will be *doing*: бу́ду чита́ть = "I will be reading". The English progressive (*will be reading*) is the closest feel. Russian simply has no single-word way to say an ongoing future with an imperfective verb — so быть carries the tense and the other verb carries the meaning.`,
          table: {
            headers: ["Person", "Future of быть"],
            rows: [
              ["я", "буду"],
              ["ты", "будешь"],
              ["он / она", "будет"],
              ["мы / вы / они", "будем / будете / будут"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u06-l3-e1",
          type: "single",
          text: "Весь ве́чер я бу́ду ___.",
          options: [{ id: "a", label: "читать" }, { id: "b", label: "прочитаю" }], answer: "a",
        },
        {
          id: "a2-u06-l3-e2",
          type: "fill-blank",
          text: "Через го́д мы ___ жить в Ки́еве.",
          answers: ["будем"],
        },
        {
          id: "a2-u06-l3-e3",
          type: "true-false",
          text: "«Я бу́ду купи́л» is a correct future.",
          answer: false,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u06-l4",
      title: "Step 4: future perfective + собира́ться",
      topicIds: ["a2-u06-past-future"],
      vocab: ["пойти", "поехать", "купить", "прочитать", "посмотреть", "собираться", "решить", "наконец", "сначала", "потом"],
      grammar: [
        {
          title: "One-word futures",
          body: `Perfective verbs (next unit covers the system) make their future with plain present endings — one word, no быть:

- Я **прочита́ю** кни́гу за́втра. — I'll read it through tomorrow.
- Она́ **купи́т** хлеб. — She'll buy bread.
- Мы **пойдём** в кино́. — We'll go to the movies.

And a handy pattern for plans: **собира́ться + infinitive** = to be going to: Я собира́юсь купи́ть маши́ну.`,
          why: "The two futures preview the aspect system: budu + infinitive = process, perfective one-word = completed act. Learning them side by side now means learning aspect later as a refinement rather than a revolution.",
          examples: [
            { ru: "Мы посмо'трим фильм ве'чером.", en: "We'll watch a film tonight." },
            { ru: "Она' собира'ется поступа'ть в магистратуру'.", en: "She's going to apply for a master's program." },
          ],
          tip: "Choosing between the two futures is a preview of aspect: бу́ду + infinitive = process/plan; perfective one-word = a completed act. «За́втра я бу́ду писа́ть письмо́» (working on it) vs «За́втра я напишу́ письмо́» (finish and send it).",
        },
      ],
      exercises: [
        {
          id: "a2-u06-l4-e1",
          type: "single",
          text: "За́втра я ___ в бассе́йн. (perfective пойти́)",
          options: [{ id: "a", label: "пойду" }, { id: "b", label: "буду идти" }], answer: "a",
        },
        {
          id: "a2-u06-l4-e2",
          type: "single",
          text: "За́втра мы ___ в музей.",
          options: [{ id: "a", label: "пойдём" }, { id: "b", label: "будем пойти" }], answer: "a",
        },
        {
          id: "a2-u06-l4-e3",
          type: "ordering",
          text: "Build: **Tomorrow I'll be working at home.**",
          items: [
            { id: "1", label: "Завтра" }, { id: "2", label: "я" }, { id: "3", label: "буду" }, { id: "4", label: "работать" }, { id: "5", label: "дома" },
          ],
          answer: ["1", "2", "3", "4", "5"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u06-test-1", type: "single",
      text: "Вчера́ он ___ письмо́. (писа́ть)",
      options: [{ id: "a", label: "писал" }, { id: "b", label: "писала" }], answer: "a",
    },
    {
      id: "a2-u06-test-2", type: "short-answer",
      text: "A woman says: I was at home.",
      answer: "я была дома",
    },
    {
      id: "a2-u06-test-3", type: "single",
      text: "За́втра мы ___ в музей.",
      options: [{ id: "a", label: "пойдём" }, { id: "b", label: "будем пойти" }], answer: "a",
    },
    {
      id: "a2-u06-test-4", type: "fill-blank",
      text: "У них ___ краси́вая да́ча.",
      answers: ["была"],
    },
    {
      id: "a2-u06-test-5", type: "true-false",
      text: "У́тром / ве́чером / но́чью are time adverbs.",
      answer: true,
    },
    {
      id: "a2-u06-test-6", type: "ordering",
      text: "Build: **Tomorrow I'll be working at home.**",
      items: [
        { id: "1", label: "Завтра" }, { id: "2", label: "я" }, { id: "3", label: "буду" }, { id: "4", label: "работать" }, { id: "5", label: "дома" },
      ],
      answer: ["1", "2", "3", "4", "5"],
    },
  ],
};
