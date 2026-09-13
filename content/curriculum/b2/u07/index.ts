import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 7 — Numerals advanced. */
export const u07: Unit = {
  id: "b2-u07",
  level: "b2",
  number: 7,
  title: "Numerals advanced: 40, 90, 500, оба, полтора",
  topicIds: ["b2-u07-numerals-2"],
  lessons: [
    {
      id: "b2-u07-l1",
      title: "Declension of all cardinals + оба/обе",
      topicIds: ["b2-u07-numerals-2"],
      vocab: ["сорок", "девяносто", "сто", "двести", "триста", "четыреста", "пятьсот", "тысяча", "миллион", "оба"],
      grammar: [
        {
          title: "Two-form and six-form numerals",
          body: `Indirect speech: statements take что (Он сказа́л, что за́нят), yes/no questions take ли (спроси́л, приду́ ли я), wh-questions keep their word (спроси́л, где я был). Crucially, NO tense shifting — Russian reports speech in its original tense.

- **со́рок / девяно́сто / сто** have only two forms: nom/acc (со́рок) and everything else (сорока́).
- **две́сти–девятьсо́т** decline fully: двухсо́т, двумста́м, двумяста́ми, о двухста́х.
- **оба (m/n) / обе (f)** decline like adjectives: у обо́их братьев, с обеи́ми сёстрами.`,
          plain: `Good news first: сорок, девяносто and сто have only two shapes between them. The hundreds change in every position, while оба and обе bend like short adjectives.`,
          why: "English backshifts (*said he WAS busy*); Russian treats the reported words as quoted reality. Only the person changes — the tense stands as the original speaker said it. This makes Russian reported speech simpler once you stop translating English habits.",

          table: {
            headers: ["Case", "200", "100", "40"],
            rows: [
              ["nom/acc", "двести", "сто", "сорок"],
              ["gen/dat/inst", "двухсот / двумстам / двумястами", "ста", "сорока"],
              ["prep", "о двухстах", "о ста", "о сорока"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b2-u07-l1-e1",
          type: "single",
          text: "Он купи́л кни́гу за две́сти ___. (ру́бль, gen pl → рублей)",
          options: [{ id: "a", label: "рублей" }, { id: "b", label: "рубля" }], answer: "a"
        },
        {
          id: "b2-u07-l1-e2",
          type: "single",
          text: "У ___ сестёр одна кварти́ра. (both — fem)",
          options: [{ id: "a", label: "обеих" }, { id: "b", label: "обоих" }], answer: "a"
        },
        {
          id: "b2-u07-l1-e3",
          type: "true-false",
          text: "Сорок declines like сто (two forms only).",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b2-u07-l2",
      title: "Fractions, approximations, predicate agreement",
      topicIds: ["b2-u07-numerals-2"],
      vocab: ["полтора", "треть", "четверть", "процент", "середина", "примерно", "около", "приблизительно", "половина", "плюс"],
      grammar: [
        {
          title: "полтора, fractions, approximations",
          body: `Commands are reported with что́бы + past (Она́ попроси́ла, что́бы я позвони́л) or a bare infinitive after веле́ть/приказа́ть (Он веле́л мне уйти́). The что́бы-frame treats the command as a demanded unreal event; the bare-infinitive frame transmits the order verbatim. Register and power live in the choice.

- **по́лтора** (m/n) / **полторы́** (f) + gen sg: полтора́ часа́, полторы́ мину́ты.
- Fractions: тре́ть, четверть + gen sg: тре́ть ста́тьи́... тре́ть доро́ги.
- Approximation: postposed genitive or reversed word order: **пять лет** → **ле́т пять**; **часа́ два** = about two hours.
- Predicate with 2–10: singular neuter is neutral (Прошло́ два го́да), plural for animate/agents (Вы́шло пя́еро... Пя́теро дете́й вы́шли).`,
          plain: `To say about five years, flip the order: лет пять. And полтора is your one-and-a-half word — after it the thing stays in its single form, as in полтора часа.`,
          why: "Both frames exist because Russian distinguishes *requesting an outcome* (что́бы, softer) from *transmitting an instruction* (infinitive, harder). Fairy-tale tsars велят; office managers просят, чтобы.",
          examples: [
            { ru: "Я ждал полтора' часа'.", en: "I waited an hour and a half." },
            { ru: "Ле'т пять наза'д…", en: "About five years ago…" },
          ],
        },
      ],
      exercises: [
        {
          id: "b2-u07-l2-e1",
          type: "single",
          text: "___ с полови́ной часо́в… (1.5 hours — полтора)",
          options: [{ id: "a", label: "Полтора" }, { id: "b", label: "Полторы" }], answer: "a"
        },
        {
          id: "b2-u07-l2-e2",
          type: "single",
          text: "Approximate 'ten years or so':",
          options: [{ id: "a", label: "лет десять" }, { id: "b", label: "десять летов" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u07-test-1",
      type: "single",
      text: "Instrumental of сто:",
      options: [{ id: "a", label: "ста" }, { id: "b", label: "сто" }], answer: "a"
    },
    {
      id: "b2-u07-test-2",
      type: "single",
      text: "___ комнаты выходят на юг. (both — fem rooms)",
      options: [{ id: "a", label: "Обе" }, { id: "b", label: "Оба" }], answer: "a"
    },
    {
      id: "b2-u07-test-3",
      type: "true-false",
      text: "полторы минуты — feminine phrase.",
      answer: true,
    },
    {
      id: "b2-u07-test-4",
      type: "short-answer",
      text: "Say 'about three hours' (reversed order):",
      answer: "часа три",
      accept: ["часа три", "около трех часов"],
    },
  ],
};
