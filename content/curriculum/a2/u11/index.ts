import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 11 — Numerals, clock, dates, age. */
export const u11: Unit = {
  id: "a2-u11",
  level: "a2",
  number: 11,
  title: "Numbers, clock and calendar",
  topicIds: ["a2-u11-numerals-time"],
  lessons: [
    {
      id: "a2-u11-l1",
      title: "Cardinal numbers and counting things",
      topicIds: ["a2-u11-numerals-time"],
      vocab: [
        "один",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять",
        "десять",
        "сто",
        "тысяча",
      ],
      grammar: [
        {
          title: "Numbers 1–4 change; 5+ don't",
          body: `**оди́н** declines like an adjective (одна́ кни́га, одно́ окно́, одного́ ча́са).
**два / три / че́тыре + noun in genitive SINGULAR** (masculine/neuter): два часа́, три до́ма; with feminines: две мину́ты, три кни́ги.
**5 and up + genitive PLURAL**: пять мину́т, де́сять рубле́й (full rules in B1).`,
          table: {
            headers: ["Number", "Phrase", "Literal"],
            rows: [
              ["1", "один час", "one hour (nom)"],
              ["2", "два часа", "2 of-hour (gen sg)"],
              ["5", "пять часов", "5 of-hours (gen pl)"],
            ],
          },
          examples: [
            { ru: "У меня' два' брата и одна' сестра'.", en: "I have two brothers and one sister." },
            { ru: "Купи' три биле'та, пожа'луйста.", en: "Buy three tickets, please." },
          ],
          tip: "два vs две: два for masculine/neuter (два до́ма), две for feminine (две мину́ты).",
        },
        {
          title: "Big numbers and phone numbers",
          body: `- 11–19: -надцать (одина́дцать, двена́дцать… девятна́дцать)
- tens: -дцать / -десят (два́дцать, три́дцать, со́рок, девяно́сто)
- 100 сто, 200–900 two-word forms (две́сти, три́ста, четы́реста, five+ -сот)
Phone numbers are read in pairs or single digits — don't panic, digits first.`,
        },
      ],
      exercises: [
        {
          id: "a2-u11-l1-e1",
          type: "single",
          text: "У меня́ есть ___ бра́та.",
          options: [
            { id: "a", label: "два" },
            { id: "b", label: "две" },
          ],
          answer: "a",
        },
        {
          id: "a2-u11-l1-e2",
          type: "single",
          text: "В аудито́рии ___. (21 student)",
          options: [
            { id: "a", label: "двадцать один студент" },
            { id: "b", label: "двадцать одних студентов" },
          ],
          answer: "a",
        },
        {
          id: "a2-u11-l1-e3",
          type: "fill-blank",
          text: "Купи́ ___ минера́льной воды́. *(5 bottles)*",
          answers: ["пять"],
        },
        {
          id: "a2-u11-l1-e4",
          type: "true-false",
          text: "«две мину́ты» is correct.",
          answer: true,
          explanation: "две with feminine nouns.",
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "a2-u11-l2",
      title: "Clock, dates and 'how long'",
      topicIds: ["a2-u11-numerals-time"],
      vocab: [
        "час",
        "минута",
        "время",
        "сейчас",
        "полдень",
        "полночь",
        "пятница",
        "январь",
        "сентябрь",
        "выходные",
      ],
      grammar: [
        {
          title: "Telling time",
          body: `- **Ко́торый час?** — 3.00: **Три часа́.** 3.05: пять мину́т четвё́ртого (Russian counts the UPCOMING hour!).
- Simple system everybody accepts: **в три часа́**, в пять три́дцать.
- At what time? **в + acc**: в два часа́, в по́лночь.`,
          table: {
            headers: ["Time", "Russian"],
            rows: [
              ["1:00", "час"],
              ["2:00", "два часа"],
              ["3:15", "три пятнадцать / четверть четвёртого"],
              ["12:00", "полдень / двенадцать"],
              ["0:00", "полночь"],
            ],
          },
          examples: [
            { ru: "Ско'лько вре'мени? — Де'ять ча'сов.", en: "What time is it? — Nine o'clock." },
            { ru: "Встре'тимся в ш'ести!", en: "Let's meet at six!" },
          ],
          tip: "«четверть четвёртого» = quarter TO four = 3:15. If the prepositional-style counting confuses you, use часы + minutes — always understood.",
        },
        {
          title: "Dates and days",
          body: `- Days: в понеде́льник (on Monday) — accusative-like adverbial; по вто́рникам = on Tuesdays (regularly, dative plural).
- Months: в январе́, в ма́е (prepositional).
- Years: в две ты́сячи два́дцать шесто́м году́ — prepositional with году́.
- On the weekend: в вы́ходны́е.`,
          examples: [
            { ru: "В су'бботу мы идём в теа'тр.", en: "On Saturday we're going to the theatre." },
          ],
          tip: "«В-pointer»: в + day = on that day; по + dative plural = every such day. «В пя́тницу» vs «по пя́тницам».",
        },
        {
          title: "How long vs how many times",
          body: `Duration uses bare accusative: Я ждал **два ча́са**. Мы гуля́ли **час**.
Frequency: раз в не́делю (once a week), ка́ждый день.`,
          examples: [
            { ru: "Я занима'лся три ча'са.", en: "I studied for three hours." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u11-l2-e1",
          type: "single",
          text: "Встре́тимся в ___!",
          options: [
            { id: "a", label: "шесть часов" },
            { id: "b", label: "шести часов" },
            { id: "c", label: "шесть часах" },
          ],
          answer: "a",
        },
        {
          id: "a2-u11-l2-e2",
          type: "single",
          text: "Я ждал тебя́ ___. (for an hour)",
          options: [
            { id: "a", label: "час" },
            { id: "b", label: "часа" },
            { id: "c", label: "часу" },
          ],
          answer: "a",
        },
        {
          id: "a2-u11-l2-e3",
          type: "fill-blank",
          text: "___ пя́тницам я рабо́таю до ве́чера. *(On Fridays (regularly)…)*",
          answers: ["По"],
        },
        {
          id: "a2-u11-l2-e4",
          type: "true-false",
          text: "«пять мину́т четвё́ртого» means 3:05.",
          answer: true,
          explanation: "Russian counts the coming hour: quarter past three = четве́рть четвё́ртого.",
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
  ],

  test: [
    {
      id: "a2-u11-test-1",
      type: "single",
      text: "У нас есть ___ вре́мени.",
      options: [
        { id: "a", label: "мало" },
        { id: "b", label: "мало́й" },
      ],
      answer: "a",
    },
    {
      id: "a2-u11-test-2",
      type: "short-answer",
      text: "Write in words: (two hours) — accusative duration",
      answer: "два часа",
    },
    {
      id: "a2-u11-test-3",
      type: "fill-blank",
      text: "Мы пое́дем туда́ в ___ году́. *(next year — сле́дующий)*",
      answers: ["следующем"],
    },
    {
      id: "a2-u11-test-4",
      type: "true-false",
      text: "«две кни́ги» uses две because кни́га is feminine.",
      answer: true,
    },
    {
      id: "a2-u11-test-5",
      type: "single",
      text: "Встре́ча в ___.",
      options: [
        { id: "a", label: "пять часов" },
        { id: "b", label: "пяти часов" },
      ],
      answer: "a",
      explanation: "At what time → в + accusative phrase: в пять часов.",
    },
    {
      id: "a2-u11-test-6",
      type: "matching",
      text: "Match the time expression:",
      prompts: [
        { id: "p1", label: "по утра́м" },
        { id: "p2", label: "в вы́ходны́е" },
        { id: "p3", label: "на следующей неде́ле" },
      ],
      responses: [
        { id: "r1", label: "next week" },
        { id: "r2", label: "in the mornings (regularly)" },
        { id: "r3", label: "on the weekend" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
