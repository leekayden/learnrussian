import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 9 — Formal registers II + Unit 10 — Phraseology. */
export const u09: Unit = {
  id: "c2-u09",
  level: "c2",
  number: 9,
  title: "Bureaucratic formulas and journalistic syntax",
  topicIds: ["c2-u09-formal-journalistic"],
  lessons: [
    {
      id: "c2-u09-l1",
      title: "Канцеляри́т: the deep grammar of paperwork",
      topicIds: ["c2-u09-formal-journalistic"],
      vocab: ["ведомство", "должность", "лицо", "изложение", "настоящий", "прилагать", "изыскивать", "урегулирование", "отчётность", "протокол"],
      grammar: [
        {
          title: "Formulas that lock together",
          body: `- **в свя́зи с + instr** (owing to), **в хо́де + gen** (in the course of), **в це́лях + gen**, **в соотве́тствии с + instr**, **на основа́нии + gen**.
- Fake participles: **вышеизло́женное** (the above-stated), **настоя́щий** (this very document: насто́ящий догово́р).
- Passive chains: «Ме́роприятия напра́влены на обеспе́чение…» (measures are aimed at ensuring…).
- Verbs of paperwork: **прилага́ть** (attach), **изы́скивать** (seek out), **урегули́ровать** (settle).`,
          examples: [
            { ru: "В свя'зи с вышеизло'женным проси'м…", en: "In view of the above we request…" },
          ],
          tip: "Канцеляри́т in casual speech is a marker of bureaucratic caricature — parody uses it deliberately.",
        },
      ],
      exercises: [
        {
          id: "c2-u09-l1-e1",
          type: "single",
          text: "«в свя́зи с» takes ___:",
          options: [{ id: "a", label: "instrumental" }, { id: "b", label: "genitive" }], answer: "a"
        },
        {
          id: "c2-u09-l1-e2",
          type: "single",
          text: "«настоя́щий догово́р» means:",
          options: [{ id: "a", label: "this (present) contract" }, { id: "b", label: "a genuine contract" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u09-l2",
      title: "Journalistic syntax: headlines and quotes",
      topicIds: ["c2-u09-formal-journalistic"],
      vocab: ["заголовок", "репортаж", "интервью", "оперативно", "данные", "источник", "сообщать", "заявлять", "сообщение", "накануне"],
      grammar: [
        {
          title: "Press grammar",
          body: `- Headlines drop verbs: «Встре́ча в Кремле́: что изве́стно».
- Infinitive future in headlines: «Пути́н посети́ть Петербу́рг» style is rare; more common: noun strings + colon.
- Evidential frames: **по да́нным исто́чников** (according to sources), **сообща́ется, что…**, **как сообща́лось ра́нее**.
- Time shifts: **нака́нуне** (the day before), **вчера́ вско́рь после…**`,
          examples: [
            { ru: "По да'нным исто'чников, перегово'ры продолжа'ются.", en: "According to sources, the talks continue." },
          ],
        },
      ],
      exercises: [
        {
          id: "c2-u09-l2-e1",
          type: "single",
          text: "«по да́нным исто́чников» signals:",
          options: [{ id: "a", label: "unattributed sourcing" }, { id: "b", label: "an official guarantee" }], answer: "a"
        },
        {
          id: "c2-u09-l2-e2",
          type: "true-false",
          text: "«нака́нуне» = on the eve / the day before.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u09-test-1",
      type: "single",
      text: "«в ходе» takes:",
      options: [{ id: "a", label: "genitive" }, { id: "b", label: "instrumental" }], answer: "a"
    },
    {
      id: "c2-u09-test-2",
      type: "single",
      text: "«настоя́щий» in a contract means:",
      options: [{ id: "a", label: "this present (document)" }, { id: "b", label: "authentic" }], answer: "a"
    },
    {
      id: "c2-u09-test-3",
      type: "true-false",
      text: "Headlines often drop the verb entirely.",
      answer: true,
    },
  ],
};
