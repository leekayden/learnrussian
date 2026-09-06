import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 6 — Past & future, one step at a time. */
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
          body: `The past has NO person endings — only gender/number:
- **-л** (he), **-ла** (she), **-ло** (it), **-ли** (they / мы / вы)
- The SPEAKER's gender decides я: Я чита́л (man) / Я чита́ла (woman).`,
          table: {
            headers: ["Subject", "Form"],
            rows: [
              ["я (m) / он", "работал"],
              ["я (f) / она", "работала"],
              ["оно", "работало"],
              ["мы / вы / они", "работали"],
            ],
          },
          tip: "-чь verbs: мочь → мог/могла́; помо́чь → помо́г/помогла́.",
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
          body: `- Вчера́ я **был** до́ма. — I was at home (speaker's gender).
- Possession in the past: **У меня́ бы́ла маши́на.** — I had a car (была́ agrees with маши́на!).
- У него́ **было** вре́мя. У роди́телей **бы́ли** ключи́.`,
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
          body: `**бу́ду / бу́дешь / бу́дет / бу́дем / бу́дете / бу́дут** + infinitive:
- За́втра я **бу́ду чита́ть** весь день.
- Мы **бу́дем жить** в Москве́.
Only бу́ду conjugates — the second verb stays infinitive.`,
          examples: [
            { ru: "Что ты бу'дешь де'лать ве'чером?", en: "What will you be doing tonight?" },
          ],
          tip: "Never «бу́ду чита́ю» — never two conjugated verbs.",
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
          body: `Perfective verbs make the future with plain present endings:
- Я **прочита́ю** кни́гу за́втра. — I'll read it through tomorrow.
- Она́ **купи́т** хлеб. — She'll buy bread.
**собира́ться + infinitive** = be going to: Я собира́юсь купи́ть маши́ну.`,
          examples: [
            { ru: "Мы посмо'трим фильм ве'чером.", en: "We'll watch a film tonight." },
          ],
          tip: "«За́втра я пойду́ в бассе́йн» — perfective пойти́ = one planned trip.",
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
