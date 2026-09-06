import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 11 — Numerals & time, one step at a time. */
export const u11: Unit = {
  id: "a2-u11",
  level: "a2",
  number: 11,
  title: "Numbers, clock and calendar",
  topicIds: ["a2-u11-numerals-time"],
  lessons: [
    {
      id: "a2-u11-l1",
      title: "Step 1: counting 1–4 vs 5+",
      topicIds: ["a2-u11-numerals-time"],
      vocab: ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять"],
      grammar: [
        {
          title: "The numeral decides the noun's case",
          body: `- **оди́н** + nominative: оди́н час, одна́ мину́та
- **два/три/че́тыре + genitive singular**: два часа́, две мину́ты (две for feminine!)
- **5+ + genitive plural**: пять мину́т, де́сять рубле́й`,
          table: {
            headers: ["Number", "Phrase", "Noun case"],
            rows: [
              ["1", "один час", "nominative"],
              ["2", "два часа", "genitive singular"],
              ["5", "пять часов", "genitive plural"],
            ],
          },
          tip: "два (m/n) vs две (f): два до́ма, две мину́ты.",
        },
      ],
      exercises: [
        {
          id: "a2-u11-l1-e1",
          type: "single",
          text: "У меня́ есть ___ бра́та.",
          options: [{ id: "a", label: "два" }, { id: "b", label: "две" }], answer: "a",
        },
        {
          id: "a2-u11-l1-e2",
          type: "single",
          text: "___ мину́ты, пожа́луйста. (2)",
          options: [{ id: "a", label: "Две" }, { id: "b", label: "Два" }], answer: "a",
        },
        {
          id: "a2-u11-l1-e3",
          type: "true-false",
          text: "«две мину́ты» is correct.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u11-l2",
      title: "Step 2: 11–19, tens, hundreds",
      topicIds: ["a2-u11-numerals-time"],
      vocab: ["одиннадцать", "двенадцать", "двадцать", "тридцать", "сорок", "пятьдесят", "сто", "двести", "тысяча", "миллион"],
      grammar: [
        {
          title: "Building big numbers",
          body: `- 11–19: **-надцать** (одина́дцать, двена́дцать… девятна́дцать)
- tens: два́дцать, три́дцать, **со́рок** (irregular!), пятьдеся́т, **девяно́сто**
- 100 = сто; 200–900: две́сти, три́ста, четы́реста, пятьсо́т…
Phone numbers: read in single digits or pairs.`,
          table: {
            headers: ["Number", "Russian"],
            rows: [
              ["11", "одиннадцать"],
              ["40", "сорок"],
              ["90", "девяносто"],
              ["200", "двести"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u11-l2-e1",
          type: "single",
          text: "40 in Russian:",
          options: [{ id: "a", label: "сорок" }, { id: "b", label: "четырдесят" }], answer: "a",
        },
        {
          id: "a2-u11-l2-e2",
          type: "single",
          text: "200 =",
          options: [{ id: "a", label: "двести" }, { id: "b", label: "двесто" }], answer: "a",
        },
        {
          id: "a2-u11-l2-e3",
          type: "true-false",
          text: "«одина́дцать» = 11.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u11-l3",
      title: "Step 3: the clock",
      topicIds: ["a2-u11-numerals-time"],
      vocab: ["час", "минута", "время", "сейчас", "полдень", "полночь", "четверть", "половина", "начало", "пятнадцать"],
      grammar: [
        {
          title: "Кото́рый час?",
          body: `- 3.00 → **Три часа́.** 1.00 → час.
- Simple universal system: **в пять три́дцать** (at 5:30).
- Folk style counts the COMING hour: **пять мину́т четвё́ртого** = 3:05, **четверть четвё́ртого** = 3:15.
- At what time? **в + accusative**: в три часа́, в по́лночь.`,
          table: {
            headers: ["Time", "Russian"],
            rows: [
              ["1:00", "час"],
              ["2:00", "два часа"],
              ["3:15", "четверть четвёртого"],
              ["12:00", "полдень"],
            ],
          },
          tip: "«четверть четвё́ртого» = quarter TO four = 3:15 — the coming hour, not the current one.",
        },
      ],
      exercises: [
        {
          id: "a2-u11-l3-e1",
          type: "single",
          text: "Встре́тимся в ___.",
          options: [{ id: "a", label: "шесть часов" }, { id: "b", label: "шести часов" }], answer: "a",
        },
        {
          id: "a2-u11-l3-e2",
          type: "single",
          text: "«пять мину́т четвё́ртого» =",
          options: [{ id: "a", label: "3:05" }, { id: "b", label: "5:04" }], answer: "a",
        },
        {
          id: "a2-u11-l3-e3",
          type: "true-false",
          text: "«Ско́лько вре́мени?» asks the time.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u11-l4",
      title: "Step 4: days, months, dates",
      topicIds: ["a2-u11-numerals-time"],
      vocab: ["понедельник", "пятница", "суббота", "воскресенье", "январь", "май", "сентябрь", "выходные", "выходной", "будни"],
      grammar: [
        {
          title: "On Monday, in May, in 2026",
          body: `- Days: **в понеде́льник** (on Monday) — accusative-like; **по вто́рникам** = on Tuesdays (regularly, dative plural)
- Months: **в январе́**, **в ма́е** (prepositional)
- Years: **в две ты́сячи два́дцать шесто́м году́**
- Weekend: **в вы́ходны́е**`,
          table: {
            headers: ["Pattern", "Example"],
            rows: [
              ["в + day", "в субботу"],
              ["по + dative pl", "по пятницам"],
              ["в + month (prep)", "в мае"],
            ],
          },
          tip: "«В пя́тницу» = this/that Friday; «по пя́тницам» = every Friday.",
        },
      ],
      exercises: [
        {
          id: "a2-u11-l4-e1",
          type: "fill-blank",
          text: "___ пя́тницам я рабо́таю до ве́чера. *(on Fridays regularly)*",
          answers: ["По"],
        },
        {
          id: "a2-u11-l4-e2",
          type: "single",
          text: "В су́бботу мы идём в теа́тр — «в су́бботу» is:",
          options: [{ id: "a", label: "this Saturday" }, { id: "b", label: "every Saturday" }], answer: "a",
        },
        {
          id: "a2-u11-l4-e3",
          type: "true-false",
          text: "Months take the prepositional: в ма́е.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u11-l5",
      title: "Step 5: how long vs how often",
      topicIds: ["a2-u11-numerals-time"],
      vocab: ["час", "два часа", "раз", "каждый день", "часто", "редко", "всегда", "никогда", "обычно", "давно"],
      grammar: [
        {
          title: "Duration = bare accusative; frequency = раз в…",
          body: `- Duration: Я ждал **два ча́са**. Мы гуля́ли **час**.
- Frequency: **раз в неде́лю** (once a week), **ка́ждый день** (every day), **два ра́за в ме́сяц**.`,
          examples: [
            { ru: "Я занима'лся три ча'са.", en: "I studied for three hours." },
          ],
          tip: "Duration: no preposition — just the number + time word in accusative-looking form.",
        },
      ],
      exercises: [
        {
          id: "a2-u11-l5-e1",
          type: "single",
          text: "Я ждал тебя́ ___. (an hour)",
          options: [{ id: "a", label: "час" }, { id: "b", label: "часу" }], answer: "a",
        },
        {
          id: "a2-u11-l5-e2",
          type: "single",
          text: "«два ра́за в неде́лю» =",
          options: [{ id: "a", label: "twice a week" }, { id: "b", label: "for two weeks" }], answer: "a",
        },
        {
          id: "a2-u11-l5-e3",
          type: "true-false",
          text: "Duration uses bare accusative: «три ча́са».",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u11-test-1", type: "single",
      text: "У нас есть ___ вре́мени.",
      options: [{ id: "a", label: "мало" }, { id: "b", label: "мало́й" }], answer: "a",
    },
    {
      id: "a2-u11-test-2", type: "short-answer",
      text: "Duration: (two hours) — in words",
      answer: "два часа",
    },
    {
      id: "a2-u11-test-3", type: "fill-blank",
      text: "Мы пое́дем туда́ в ___ году́. *(next — сле́дующий)*",
      answers: ["следующем"],
    },
    {
      id: "a2-u11-test-4", type: "true-false",
      text: "«две кни́ги» — две because кни́га is feminine.",
      answer: true,
    },
    {
      id: "a2-u11-test-5", type: "single",
      text: "Встре́ча в ___.",
      options: [{ id: "a", label: "пять часов" }, { id: "b", label: "пяти часов" }], answer: "a",
    },
    {
      id: "a2-u11-test-6", type: "matching",
      text: "Time expression → meaning:",
      prompts: [
        { id: "p1", label: "по утра́м" }, { id: "p2", label: "в вы́ходны́е" }, { id: "p3", label: "на сле́дующей неде́ле" },
      ],
      responses: [
        { id: "r1", label: "next week" }, { id: "r2", label: "in the mornings (regularly)" }, { id: "r3", label: "on the weekend" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
