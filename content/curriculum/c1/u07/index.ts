import type { Unit } from "@/lib/curriculum/types";

/** C1 · Units 7–9: registers, ellipsis, idioms. */
export const u07: Unit = {
  id: "c1-u07",
  level: "c1",
  number: 7,
  title: "Formal registers: business, academic, journalistic",
  topicIds: ["c1-u07-formal-registers"],
  lessons: [
    {
      id: "c1-u07-l1",
      title: "Официально-деловой и научный стиль",
      topicIds: ["c1-u07-formal-registers"],
      vocab: ["заявление", "доверенность", "распоряжение", "предполагаться", "осуществляться", "представлять", "основание", "цель", "деятельность", "положение"],
      grammar: [
        {
          title: "The grammar of paperwork",
          body: `Bureaucratic frames: в свя́зи с + instr (owing to), в хо́де + gen (in the course of), в це́лях + gen (for the purpose of), в соотве́тствии с + instr (in accordance with), на основа́нии + gen (on the basis of). Fake participles: вышеизло́женное (the above-stated).

- Nominal style: «осуществле́ние де́ятельности» instead of «осуществля́ть де́ятельность» (chains of genitives).
- impersonal verbs: предполага́ется (it is assumed), представля́ется це́лесообра́зным (it seems advisable).
- Preposition frames: **в це́лях + gen** (for the purpose of), **на основа́нии + gen** (on the basis of), **в соотве́тствии с + instr** (in accordance with).
- Academic: present passive -ся (рассма́тривается, отмеча́ется), мы avoided; use impersonal or passive.`,
          why: "Канцеляри́т prefers preposition-frames over simple prepositions because they sound weightier: в це́лях безопас­ности vs для безопас­ности — same meaning, more official. The nominal chains (осуществле́ние де́ятельности) replace verbs to sound objective. In casual speech they are parody material.",
          examples: [
            { ru: "В соотве'тствии с распоряже'нием…", en: "In accordance with the directive…" },
          ],
        },
      ],
      exercises: [
        {
          id: "c1-u07-l1-e1",
          type: "single",
          text: "«в це́лях» takes ___:",
          options: [{ id: "a", label: "genitive" }, { id: "b", label: "dative" }], answer: "a"
        },
        {
          id: "c1-u07-l1-e2",
          type: "single",
          text: "Academic style prefers:",
          options: [{ id: "a", label: "мы нашли / было выявлено" }, { id: "b", label: "я нашёл" }], answer: "a",
          explanation: "Impersonal/passive «было вы́явлено» avoids first person.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u07-test-1",
      type: "single",
      text: "«в соотве́тствии с» takes:",
      options: [{ id: "a", label: "instrumental" }, { id: "b", label: "genitive" }], answer: "a"
    },
    {
      id: "c1-u07-test-2",
      type: "true-false",
      text: "Business Russian prefers noun chains over verbs.",
      answer: true,
    },
  ],
};
