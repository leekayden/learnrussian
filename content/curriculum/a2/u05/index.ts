import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 5 — Instrumental singular: with what, being someone. */
export const u05: Unit = {
  id: "a2-u05",
  level: "a2",
  number: 5,
  title: "The instrumental: together, by means of, becoming",
  topicIds: ["a2-u05-instrumental-sg"],
  lessons: [
    {
      id: "a2-u05-l1",
      title: "с + instrumental: with whom, with what",
      topicIds: ["a2-u05-instrumental-sg"],
      vocab: [
        "кофе",
        "молоко",
        "сахар",
        "лимон",
        "друг",
        "жена",
        "муж",
        "нож",
        "вилка",
        "ложка",
      ],
      grammar: [
        {
          title: "Instrumental endings",
          body: `The **instrumental** means "by means of" or "together with" (with **с**). Endings (singular):
- masculine/neuter hard consonant → **-ом** (до́м → до́мом, молоко́ → молоко́м)
- masculine **-й / -ь** → **-ем** (музе́й → музе́ем, учи́тель → учи́телем)
- feminine **-а** → **-ой** (жена́ → жено́й)
- feminine **-я / -ь** → **-ей** (Та́ня → Та́ней, пло́щадь → пло́щадью)`,
          table: {
            headers: ["Nominative", "Instrumental", "Example"],
            rows: [
              ["дом", "домом", "за домом"],
              ["жена", "женой", "с женой"],
              ["Таня", "Таней", "с Таней"],
              ["музей", "музеем", "перед музеем"],
              ["море", "морем", "за морем"],
            ],
          },
          examples: [
            { ru: "Я пью' ко'фе с молоко'м.", en: "I drink coffee with milk." },
            { ru: "Она' прие'хала с му'жем.", en: "She arrived with (her) husband." },
          ],
          tip: "After ж, ш, ч, щ, ц unstressed instrumental is -ей (вра́ч → враче́м), stressed is -ом (ножо́м). The ear usually knows; the dictionary shows stress.",
        },
        {
          title: "с + instrumental vs за + instrumental",
          body: `**с + instr.** = company or mixture: с дру́гом, с са́харом, ча́й с лимо́ном.
**за + instr.** = behind / at the table: за столо́м (at the table), за до́мом (behind the house).
**перед + instr.** = in front of: пе́ред теа́тром.`,
          examples: [
            { ru: "Мы сиди'м за столо'м с друзья'ми.", en: "We are sitting at the table with friends." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u05-l1-e1",
          type: "single",
          text: "Чай с ___. (lemon)",
          options: [
            { id: "a", label: "лимон" },
            { id: "b", label: "лимоном" },
            { id: "c", label: "лимона" },
          ],
          answer: "b",
        },
        {
          id: "a2-u05-l1-e2",
          type: "single",
          text: "Она́ разгова́ривает с ___. (Tanya)",
          options: [
            { id: "a", label: "Таня" },
            { id: "b", label: "Таней" },
            { id: "c", label: "Тане" },
          ],
          answer: "b",
        },
        {
          id: "a2-u05-l1-e3",
          type: "fill-blank",
          text: "Мы у́жинаем за {{blank}}. *(We are having dinner at the table.)*",
          answers: ["столом"],
        },
        {
          id: "a2-u05-l1-e4",
          type: "fill-blank",
          text: "Я хочу́ кофе с {{blank}}. *(I want coffee with milk.)*",
          answers: ["молоком"],
        },
        {
          id: "a2-u05-l1-e5",
          type: "true-false",
          text: "«с врачо́м» is the correct instrumental form of врач.",
          answer: true,
          explanation: "The final consonant is stressed, so the ending is -ом: врач → врачо́м.",
        },
      ],
      drills: [
        { kind: "noun-case", count: 4, cases: ["inst"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u05-l2",
      title: "быть / стать / работать + instrumental",
      topicIds: ["a2-u05-instrumental-sg"],
      vocab: [
        "становиться",
        "казаться",
        "инженер",
        "врач",
        "юрист",
        "программист",
        "водитель",
        "парикмахер",
        "олигарх",
        "студент",
      ],
      grammar: [
        {
          title: "Professions: быть, стать, работать + instrumental",
          body: `Name someone's profession or role **in the instrumental** after these verbs:
- **стать + instr.**: Он хо́чет **стать врачо́м**. — He wants to become a doctor.
- **быть in past/future + instr.**: Она́ была́ учи́тельницей. — She was a teacher. Он бу́дет инжене́ром. — He will be an engineer.
- **работать + instr.** (as): Он рабо́тает перево́дчиком. — He works as a translator.
- **казаться + instr.** (to seem): Он ка́жется уста́вшим.`,
          table: {
            headers: ["Russian", "English"],
            rows: [
              ["Я хочу стать программистом", "I want to become a programmer"],
              ["Она была водителем", "She was a driver"],
              ["Он работает переводчиком", "He works as a translator"],
            ],
          },
          examples: [
            { ru: "Мой брат ста'нет юри'стом.", en: "My brother will become a lawyer." },
            { ru: "На'на ра'ньше была' парикма'хером.", en: "Our grandmother used to be a hairdresser." },
          ],
          tip: "In the PRESENT, «Он врач» (nominative) is normal; the instrumental appears with быть in past/future, стать, and работать (+ profession).",
        },
        {
          title: "свой = one's own",
          body: `**свой** (one's own) replaces мой/твой/его when the possessor is the subject of the clause:
- Я люблю́ **свою́** рабо́ту. — I love my (own) job.
- Он живёт **со свое́й** семьёй. — He lives with his (own) family (family → instrumental after с).
Rule of thumb: if the subject owns it, use свой. It declines like этот: своего́, свое́й, свои́м, свое́й…`,
        },
      ],
      exercises: [
        {
          id: "a2-u05-l2-e1",
          type: "single",
          text: "Она́ хо́чет стать ___. (a doctor)",
          options: [
            { id: "a", label: "врач" },
            { id: "b", label: "врачом" },
            { id: "c", label: "врачу" },
          ],
          answer: "b",
        },
        {
          id: "a2-u05-l2-e2",
          type: "single",
          text: "Ра́ньше он был ___. (a driver)",
          options: [
            { id: "a", label: "водитель" },
            { id: "b", label: "водителя" },
            { id: "c", label: "водителем" },
          ],
          answer: "c",
        },
        {
          id: "a2-u05-l2-e3",
          type: "fill-blank",
          text: "Я дово́лен {{blank}} рабо́той. *(I am pleased with my work.)*",
          answers: ["своей"],
        },
        {
          id: "a2-u05-l2-e4",
          type: "true-false",
          text: "Present tense: «Он программи́ст» needs the instrumental.",
          answer: false,
          explanation: "Present-tense professions stand in the nominative.",
        },
      ],
      drills: [
        { kind: "noun-case", count: 3, cases: ["inst"] },
        { kind: "cloze", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u05-test-1",
      type: "single",
      text: "Кофе с ___ или без?",
      options: [
        { id: "a", label: "сахар" },
        { id: "b", label: "сахара" },
        { id: "c", label: "сахаром" },
      ],
      answer: "c",
    },
    {
      id: "a2-u05-test-2",
      type: "single",
      text: "Он хо́чет стать ___ (программи́ст).",
      options: [
        { id: "a", label: "программист" },
        { id: "b", label: "программистом" },
        { id: "c", label: "программисту" },
      ],
      answer: "b",
    },
    {
      id: "a2-u05-test-3",
      type: "short-answer",
      text: "Translate: (I am sitting with a friend.)",
      answer: "я сижу с другом",
    },
    {
      id: "a2-u05-test-4",
      type: "true-false",
      text: "«Она́ была́ учи́тельницей» uses the instrumental correctly.",
      answer: true,
    },
    {
      id: "a2-u05-test-5",
      type: "ordering",
      text: "Build: **We are talking with the teacher.**",
      items: [
        { id: "1", label: "Мы" },
        { id: "2", label: "говорим" },
        { id: "3", label: "с" },
        { id: "4", label: "учителем" },
      ],
      answer: ["1", "2", "3", "4"],
    },
    {
      id: "a2-u05-test-6",
      type: "fill-blank",
      text: "Он живёт со {{blank}} семьёй. *(He lives with his (own) family.)*",
      answers: ["своей"],
    },
  ],
};
