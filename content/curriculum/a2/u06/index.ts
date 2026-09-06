import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 6 — Past & future tenses. */
export const u06: Unit = {
  id: "a2-u06",
  level: "a2",
  number: 6,
  title: "Yesterday and tomorrow: past and future",
  topicIds: ["a2-u06-past-future"],
  lessons: [
    {
      id: "a2-u06-l1",
      title: "The past tense: one stem, four endings",
      topicIds: ["a2-u06-past-future"],
      vocab: [
        "вчера",
        "сегодня",
        "завтра",
        "давно",
        "недавно",
        "утром",
        "вечером",
        "ночью",
        "раньше",
        "потом",
      ],
      grammar: [
        {
          title: "The easiest tense in Russian",
          body: `The past tense has NO person endings. Take the infinitive, drop **-ть**, add:
- **-л** (he / masculine), **-ла** (she), **-ло** (it), **-ли** (they / we / you / я polite)
- The *speaker's* gender decides я form: Я чита́л (man), Я чита́ла (woman).`,
          table: {
            caption: "рабо́тать in the past",
            headers: ["Subject", "Form"],
            rows: [
              ["я (m) / он", "работал"],
              ["я (f) / она", "работала"],
              ["оно", "работало"],
              ["мы / вы / они", "работали"],
            ],
          },
          examples: [
            { ru: "Вчера' я игра'л в те'ннис.", en: "Yesterday I played tennis. (male speaking)" },
            { ru: "Она' давно' уе'хала.", en: "She left a long time ago." },
          ],
          tip: "Verbs ending in -сть (идти́ is special) and -чь: мо́г + ла = могла́ (ь drops, ч/г appears in the past): мочь → мог/могла́/могло́/могли́; помо́чь → помо́г/помогла́.",
        },
        {
          title: "быть in the past",
          body: `**быть** (to be) in the past: был / была́ / было / бы́ли.
- Вчера́ я **был** до́ма. — Yesterday I was at home.
- **Была́** э́та кни́га у тебя́? — Did you have this book? (у + gen + был/была agrees with the THING!)`,
          examples: [
            { ru: "Ле'том мы бы'ли на мо'ре.", en: "In summer we were at the sea." },
          ],
          tip: "«У меня́ была́ маши́на» — была́ agrees with маши́на (feminine), not with me!",
        },
      ],
      exercises: [
        {
          id: "a2-u06-l1-e1",
          type: "single",
          text: "Вчера́ она́ ___ в кино́. (to go — ходи́ть)",
          options: [
            { id: "a", label: "ходил" },
            { id: "b", label: "ходила" },
            { id: "c", label: "ходили" },
          ],
          answer: "b",
        },
        {
          id: "a2-u06-l1-e2",
          type: "single",
          text: "Мы ___ до́ма вчера́ ве́чером. (to be)",
          options: [
            { id: "a", label: "был" },
            { id: "b", label: "была" },
            { id: "c", label: "были" },
          ],
          answer: "c",
        },
        {
          id: "a2-u06-l1-e3",
          type: "short-answer",
          text: "A woman says “I worked a lot”. In Russian:",
          answer: "я много работала",
        },
        {
          id: "a2-u06-l1-e4",
          type: "fill-blank",
          text: "У меня́ ___ теле́фон. (I had a phone — was/было agreement)",
          answers: ["был"],
        },
        {
          id: "a2-u06-l1-e5",
          type: "true-false",
          text: "Я могу́ → в проше́дшем: «я мог» (male) / «я могла́» (female).",
          answer: true,
        },
      ],
      drills: [
        { kind: "conjugation", count: 4, slots: ["past_m", "past_f", "past_pl"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u06-l2",
      title: "The future: two ways",
      topicIds: ["a2-u06-past-future"],
      vocab: [
        "скоро",
        "через",
        "очередь",
        "планировать",
        "собираться",
        "хотеть",
        "решить",
        "наконец",
        "потом",
        "сначала",
      ],
      grammar: [
        {
          title: "Future imperfective: буду + infinitive",
          body: `For ongoing/repeated future actions: **буду / бу́дешь / бу́дет / бу́дем / бу́дете / бу́дут** + infinitive:
- За́втра я **бу́ду чита́ть** весь день. — Tomorrow I'll be reading all day.
- Мы **бу́дем жить** в Москве́. — We will live in Moscow.`,
          examples: [
            { ru: "Что ты бу'дешь де'лать ве'чером?", en: "What will you be doing in the evening?" },
          ],
          tip: "Only ONE verb is conjugated (бу́ду); the second stays in the infinitive. Don't say «бу́ду чита́ю».",
        },
        {
          title: "Future perfective: one word",
          body: `Perfective verbs (unit 7) form the future with plain present endings:
- Я **прочита́ю** кни́гу за́втра. — I'll (finish) reading the book tomorrow.
- Она́ **купи́т** хлеб. — She will buy bread.
Same endings as present (-ю, -ешь…), but the *meaning* is future.`,
          examples: [
            { ru: "Мы посмо'трим фильм ве'чером.", en: "We'll watch a film in the evening." },
          ],
        },
        {
          title: "собираться + infinitive",
          body: `**собира́ться** = to be going to: Я собира́юсь уезжа́ть... simpler: Я собира́юсь купи́ть маши́ну. — I'm going to buy a car. Used with infinitive; conjugate собира́ться normally.`,
        },
      ],
      exercises: [
        {
          id: "a2-u06-l2-e1",
          type: "single",
          text: "За́втра я ___ в бассе́йн. (I'll go — perfective пойти́)",
          options: [
            { id: "a", label: "пойду" },
            { id: "b", label: "буду идти" },
            { id: "c", label: "пошёл" },
          ],
          answer: "a",
        },
        {
          id: "a2-u06-l2-e2",
          type: "single",
          text: "Весь ве́чер я бу́ду ___. (to read)",
          options: [
            { id: "a", label: "прочитаю" },
            { id: "b", label: "читать" },
            { id: "c", label: "читаю" },
          ],
          answer: "b",
          explanation: "After бу́ду always the infinitive.",
        },
        {
          id: "a2-u06-l2-e3",
          type: "fill-blank",
          text: "Через го́д мы ___ жить в Ки́еве. *(In a year we'll be living in Kyiv.)*",
          answers: ["будем"],
        },
        {
          id: "a2-u06-l2-e4",
          type: "true-false",
          text: "«Я бу́ду купи́л» is a correct future form.",
          answer: false,
          explanation: "бу́ду + infinitive (купи́ть) or single perfective куплю́ — never mixed.",
        },
      ],
      drills: [
        { kind: "conjugation", count: 3, slots: ["presfut_sg1", "presfut_pl3"] },
        { kind: "cloze", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u06-test-1",
      type: "single",
      text: "Вчера́ он ___ письмо́. (to write)",
      options: [
        { id: "a", label: "писал" },
        { id: "b", label: "писала" },
        { id: "c", label: "писали" },
      ],
      answer: "a",
    },
    {
      id: "a2-u06-test-2",
      type: "short-answer",
      text: "A woman says: (I was at home.)",
      answer: "я была дома",
    },
    {
      id: "a2-u06-test-3",
      type: "single",
      text: "За́втра мы ___ в музей.",
      options: [
        { id: "a", label: "пойдём" },
        { id: "b", label: "будем пойти" },
        { id: "c", label: "ходили" },
      ],
      answer: "a",
    },
    {
      id: "a2-u06-test-4",
      type: "fill-blank",
      text: "У них ___ краси́вая да́ча. *(They had a beautiful dacha.)*",
      answers: ["была"],
    },
    {
      id: "a2-u06-test-5",
      type: "true-false",
      text: "Утром / ве́чером / но́чью are adverbs of time.",
      answer: true,
    },
    {
      id: "a2-u06-test-6",
      type: "ordering",
      text: "Build: **Tomorrow I'll be working at home.**",
      items: [
        { id: "1", label: "Завтра" },
        { id: "2", label: "я" },
        { id: "3", label: "буду" },
        { id: "4", label: "работать" },
        { id: "5", label: "дома" },
      ],
      answer: ["1", "2", "3", "4", "5"],
    },
  ],
};
