import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 5 — Participle masterclass. */
export const u05: Unit = {
  id: "c2-u05",
  level: "c2",
  number: 5,
  title: "Participle masterclass: frozen and bookish forms",
  topicIds: ["c2-u05-participles-2"],
  lessons: [
    {
      id: "c2-u05-l1",
      title: "Frozen participles: теку́щий, выдаю́щийся, мину́вший",
      topicIds: ["c2-u05-participles-2"],
      vocab: ["текущий", "выдающийся", "грядущий", "минувший", "прошедший", "специализирующийся", "оптовый", "абитуриент", "соискатель"],
      grammar: [
        {
          title: "Adjectives that were once participles",
          body: `Many formal adjectives ARE frozen participles: теку́щий моме́нт (the current moment), выдаю́щийся учёный (an outstanding scientist), гряду́щие поколе́ния (generations to come), мину́вший год (the bygone year). They no longer take verbal complements.

Many formal adjectives ARE frozen participles:
- **теку́щий моме́нт** — the current moment (from теку́т)
- **выдаю́щийся учёный** — an outstanding scientist (from выдаю́тся)
- **гряду́щие поколе́ния** — generations to come; **мину́вший год** — the past year; **проше́дшее вре́мя** — past tense.
They no longer take complements like verbs: «выдаю́щийся» = remarkable, full stop.`,
          why: "The test: if you cannot naturally add a который-clause after it, it is an adjective now. Выдаю́щийся = remarkable, full stop. The participle origin explains the meaning (literally 'standing out from') but the grammar has moved on.",

          table: {
            headers: ["Frozen participle", "Meaning"],
            rows: [
              ["текущий", "current"],
              ["выдающийся", "outstanding"],
              ["грядущий", "coming, future (bookish)"],
              ["минувший", "bygone (bookish)"],
            ],
          },
          tip: "Test: if you can't add «кото́рый…» clause after it naturally, it's an adjective now.",
        },
      ],
      exercises: [
        {
          id: "c2-u05-l1-e1",
          type: "single",
          text: "«в теку́щем году́» means:",
          options: [{ id: "a", label: "in the current year" }, { id: "b", label: "in the leaking year" }], answer: "a"
        },
        {
          id: "c2-u05-l1-e2",
          type: "single",
          text: "Bookish “coming generations”:",
          options: [{ id: "a", label: "грядущие поколения" }, { id: "b", label: "будущие пришедшие" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u05-l2",
      title: "Short vs long participle: the stylistic choice",
      topicIds: ["c2-u05-participles-2"],
      vocab: ["выводить", "устанавливать", "замечать", "пугать", "терять", "доказательство", "отчёт", "экран", "программа", "ошибка"],
      grammar: [
        {
          title: "Same root, different job",
          body: `Short participles are predicates — «Програ́мма вы́ведена на экра́н» (has been brought up); long participles are attributes — «выве́денный на экра́н текст». Short forms report a RESULT; long forms describe a state.

- **Short (кра́ткая) форма** = the predicate — a RESULT: «Зако́н вы́веден из play»... properly: «Програ́мма вы́ведена на экран» (the program has been brought up on screen).
- **Long (по́лная) форма** = attribute inside a noun phrase: «выве́денный на экран текст».
Short forms dominate official reporting (Установлено, что… — It has been established that…); long forms dominate description.`,
          why: "The short form is the perfective passive's only predicate shape — «Зако́н при́нят» cannot become «при́нятый зако́н» without changing the meaning to 'an accepted law'. Official Russian (Установлено, что…) runs on short participles; using a long form there is a classic foreigner's slip.",
          examples: [
            { ru: "Установлено, что… (report opening)", en: "It has been established that…" },
          ],
          tip: "A long form where a short one belongs («Програ́мма вы́веденная») is a classic foreigner's slip.",
        },
      ],
      exercises: [
        {
          id: "c2-u05-l2-e1",
          type: "single",
          text: "Predicate slot — choose the short form: Оши́бка ___.",
          options: [{ id: "a", label: "замечена" }, { id: "b", label: "замеченная" }], answer: "a"
        },
        {
          id: "c2-u05-l2-e2",
          type: "single",
          text: "Attribute slot: «___ на экране текст» (displayed)",
          options: [{ id: "a", label: "выведенный" }, { id: "b", label: "выведен" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u05-test-1",
      type: "single",
      text: "«выдаю́щийся» is:",
      options: [{ id: "a", label: "a frozen participle = outstanding" }, { id: "b", label: "a future passive" }], answer: "a"
    },
    {
      id: "c2-u05-test-2",
      type: "single",
      text: "Report style opening: «___, что…»",
      options: [{ id: "a", label: "Установлено" }, { id: "b", label: "Установленный" }], answer: "a"
    },
    {
      id: "c2-u05-test-3",
      type: "true-false",
      text: "Short participles function as attributes inside noun phrases.",
      answer: false,
    },
  ],
};
