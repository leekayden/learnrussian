import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 11 — Numerals & time, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
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
          body: `This is where Russian differs from English most sharply. In English, *two books, five books* — the noun never changes. In Russian, **the noun dances to the numeral**:

- **оди́н** + nominative: оди́н час, одна́ мину́та (один even declines by gender: одна́ кни́га, одно́ окно́)
- **два / три / че́тыре + genitive singular**: два часа́, две мину́ты — as if saying "two of-hour"
- **5 and up + genitive plural**: пять мину́т, де́сять рубле́й

So «два студе́нта» is literally *two of-student*. The counted noun never stays in the plain plural next to 2–4 — that is the single most counterintuitive thing in early Russian.`,
          plain: `In English the noun never moves: two books, five books. In Russian the noun's ending depends on the number in front of it — два часа but пять часов. Two to four, and five and up, follow different patterns.`,
          why: `Why "two of-hour"? Russian counts from a whole: два часа́ means *two units taken out of the hours-pile*, and taking from a pile is genitive territory. Five and up simply grab a bigger armful — the plural genitive. The system is ancient, logical, and completely regular once you surrender to the "of" feeling.`,
          table: {
            headers: ["Number", "Phrase", "Noun case"],
            rows: [
              ["1", "один час", "nominative"],
              ["2", "два часа", "genitive singular"],
              ["5", "пять часов", "genitive plural"],
            ],
          },
          examples: [
            { ru: "У меня' два' бра'та и две' сестры'.", en: "I have two brothers and two sisters — бра́та gen sg after два, сестры́ gen sg after две." },
            { ru: "Купи' пять биле'тов на се'анс.", en: "Buy five tickets for the showing." },
          ],
          tip: "два vs две: **два** for masculine and neuter nouns (два до́ма, два окнá), **две** for feminine (две мину́ты, две подру́ги). Choosing the wrong one is harmless in speech but instantly flags a foreigner in writing.",
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
          title: "Building big numbers from three blocks",
          body: `Russian numbers assemble from three families:

- **11–19** = unit + **-надцать** (одина́дцать, двена́дцать … девятна́дцать). The -надцать is a fossil of "on ten": один-на-дцать literally *one-on-ten*.
- **Tens**: два́дцать, три́дцать, **со́рок** (irregular!), пятьдеся́т, шестьдеся́т, се́мьдесят, во́семьдесят, **девяно́сто** (irregular!).
- **Hundreds**: сто, две́сти, три́ста, четы́реста, then пятьсо́т…девятьсо́т (sót = hundred, pluralized).

Only 40 (со́рок) and 90 (девяно́сто) have just two forms (nom/acc vs everything else). Ты́сяча behaves like a feminine noun — and watch out: «тысяча человек» is genitive plural after it, so a million Russians say «с ты́сячей челове́к» colloquially. Standard: с ты́сячей челове́к (gen pl allowed after ты́сяча).`,
          plain: `Russian builds big numbers from three neat blocks: 11–19 all end in -надцать, the tens follow one pattern, and the hundreds stack up from сто. Only two rebels break it: сорок (40) and девяносто (90).`,
          why: "The -nadtsat family is a fossil of 'on ten': odin-na-dtsat = one-on-ten. Reading the etymology makes the whole teens row transparent — and sorok/devyanosto are the two rebels worth memorising on sight.",
          table: {
            headers: ["Number", "Russian"],
            rows: [
              ["11", "одиннадцать"],
              ["40", "сорок"],
              ["90", "девяносто"],
              ["200", "двести"],
            ],
          },
          examples: [
            { ru: "Кварти'ра сто'ит два'дцать мину'т от метро'.", en: "The flat is 20 minutes from the metro." },
            { ru: "Это сто'ит со'рок рубле'й.", en: "That costs 40 roubles." },
          ],
          tip: "Do not build «четырдесят» by analogy with English *forty* → four-ty. Russian has сорок (40), девяносто (90), and сто (100) as three rebels worth memorising on day one.",
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
          body: `Two systems live side by side.

**The plain international system** (always understood, use it freely): 3.00 → **Три часа́.** 3.30 → **Три три́дцать.** To say *at what time*, add в + accusative: **в три часа́**, **в пять три́дцать**.

**The native folk system** counts the *coming* hour: 3:05 is «пять мину́т четвё́ртого» — *five minutes of the fourth [hour]*; 3:15 is «четверть четвё́ртого» (a quarter of the fourth); 3:30 has its own word: **пол четвё́ртого** (half of the fourth). The coming-hour logic is why «две мину́ты четвё́ртого» means 3:02, never 2:02.

Special words: **полдень** (noon), **по́лночь** (midnight) — «Встре́тимся в по́лночь».`,
          plain: `For telling time, the simple way always works: три тридцать. Russians also count the coming hour — 3:05 is 'five minutes of the fourth' — so learn to understand that and speak whichever feels easier.`,
          why: `Why count the coming hour? Old European clocks struck a bell (the "fourth stroke" announced the fourth hour) — so the minutes *before* the fourth stroke belonged to the coming hour. Russian kept that bell-logic; English kept it only in fossil phrases like *quarter to four*.`,
          table: {
            headers: ["Time", "Russian"],
            rows: [
              ["1:00", "час"],
              ["2:00", "два часа"],
              ["3:15", "четверть четвёртого"],
              ["12:00", "полдень"],
            ],
          },
          examples: [
            { ru: "Ско'лько вре'мени? — Полови'на шесто'го.", en: "What time is it? — Half past five (5:30)." },
            { ru: "Встре'тимся в се'ми!", en: "Let's meet at seven!" },
          ],
          tip: "If the folk system makes your head spin, just always give hours and minutes: «в три два́дцать» is never wrong. But learn to *understand* четвё́ртого — otherwise a friend's «прихо­ди́ в се́мь» vs «в пол восьмо́го» difference will cost you a dinner.",
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
          body: `- Single day: **в + accusative** — в понеде́льник (on Monday), в суббо́ту, в э́тот день.
- Regular day: **по + dative plural** — по вто́рникам (on Tuesdays, every week), по вечера́м.
- Months: **в + prepositional** — в январе́, в ма́е, в дека́бре́.
- Years: **в + prepositional + году́** — в две ты́сячи два́дцать шесто́м году́. (Note году́ — a special old form, not году... it IS году.)
- Weekend: **в вы́ходны́е**; on weekdays: **в бу́дни** / по бу́дням.`,
          plain: `One small switch separates a plan from a habit: в пятницу is this Friday, по пятницам is Fridays in general. Months are simpler — just в plus the month: в мае, в январе.`,
          why: "The v/po switch on days is the fastest spoken test of plan vs habit: v pyatnitsu = one Friday on the calendar, po pyatnitsam = Fridays as a routine. Russians hear the difference instantly — so should you.",
          table: {
            headers: ["Pattern", "Example"],
            rows: [
              ["в + day", "в субботу"],
              ["по + dative pl", "по пятницам"],
              ["в + month (prep)", "в мае"],
            ],
          },
          tip: "«В пя́тницу» = one specific Friday. «По пя́тницам» = Fridays as a routine. The в/по switch is the fastest way to hear whether someone is talking about a plan or a habit.",
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
      vocab: ["час", "раз", "часто", "редко", "всегда", "никогда", "обычно", "давно", "каждый", "неделя"],
      grammar: [
        {
          title: "Duration = bare accusative; frequency = раз в…",
          body: `Two different questions, two different constructions:

**How long?** — bare accusative, no preposition: Я ждал **два ча́са**. Мы гуля́ли **час**. Она́ училась **пять лет**.

**How often?** — **раз** (time/occasion) + в + accusative: **раз в неде́лю** (once a week), **два ра́за в ме́сяц** (twice a month), **три ра́за в день**. Or frequency adverbs: ча́сто, ре́дко, всегда́, никогда́ (remember: никогда́ needs a negated verb — Я никогда́ не курю́).

English *for* two hours has no Russian preposition — «два ча́са» stands alone. Adding «в тече́ние двух часо́в» is correct but bookish.`,
          plain: `How long takes no preposition at all — я ждал два часа, and English 'for two hours' loses its 'for'. How often counts occasions instead: два раза в неделю is twice a week.`,
          why: `Duration uses accusative because the time-span is measured like an object being consumed — you live *through* two hours, the way you read *two books*. Frequency instead counts *occasions* (раз), and occasions stack in the раз в неде́лю frame. Different question → different grammar.`,
          examples: [
            { ru: "Я занима'лся три ча'са и вы'жат.", en: "I studied for three hours and I'm drained." },
            { ru: "Я хо'жу в зал два' ра'за в неде'лю.", en: "I hit the gym twice a week." },
          ],
          tip: "«час» is the one noun that looks identical in nominative and accusative (Я ждал час) — don't let that convince you duration has no case. Put a two: «два ча́са» — the genitive singularity of час-слова tells you the accusative machinery is still running.",
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
