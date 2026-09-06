import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 5 — Instrumental singular, one step at a time. */
export const u05: Unit = {
  id: "a2-u05",
  level: "a2",
  number: 5,
  title: "The instrumental: together, by means of, becoming",
  topicIds: ["a2-u05-instrumental-sg"],
  lessons: [
    {
      id: "a2-u05-l1",
      title: "Step 1: с + instrumental — with someone",
      topicIds: ["a2-u05-instrumental-sg"],
      vocab: ["жена", "муж", "друг", "подруга", "Таня", "брат", "сестра", "друзья", "вместе", "разговаривать"],
      grammar: [
        {
          title: "с + instrumental = company",
          body: `Endings:
- masculine hard → **-ом** (with до́м → до́мом); **-й/-ь** → **-ем** (учи́телем)
- feminine **-а → -ой** (жено́й), **-я/-ь → -ей** (Та́ней, пло́щадью)
- Я пью ко́фе **с молоко́м**. Она́ прие́хала **с му́жем**.`,
          table: {
            headers: ["Nominative", "Instrumental"],
            rows: [
              ["друг", "с другом"],
              ["жена", "с женой"],
              ["Таня", "с Таней"],
              ["учитель", "с учителем"],
            ],
          },
          tip: "After ж/ш/ч/щ unstressed → -ей: с врачом? — stressed, so врачо́м. The dictionary shows stress; your ear will settle the rest.",
        },
      ],
      exercises: [
        {
          id: "a2-u05-l1-e1",
          type: "single",
          text: "Она́ разгова́ривает с ___. (Та́ня)",
          options: [{ id: "a", label: "Таней" }, { id: "b", label: "Таню" }], answer: "a",
        },
        {
          id: "a2-u05-l1-e2",
          type: "fill-blank",
          text: "Мы гуля́ем с ___. *(dog)*",
          answers: ["собакой"],
        },
        {
          id: "a2-u05-l1-e3",
          type: "true-false",
          text: "«с дру́гом» = with a friend.",
          answer: true,
        },
      ],
      drills: [{ kind: "noun-case", count: 4, cases: ["inst"] }],
    },
    {
      id: "a2-u05-l2",
      title: "Step 2: с чем — with what (coffee, tea, mixtures)",
      topicIds: ["a2-u05-instrumental-sg"],
      vocab: ["кофе", "чай", "молоко", "сахар", "лимон", "хлеб", "суп", "соус", "бутерброд", "вкусный"],
      grammar: [
        {
          title: "Mixtures take с + instrumental",
          body: `- Чай **с са́харом** / **без са́хара**
- Кофе **с молоко́м**
- Хлеб **с ма́слом**
In/behind/in front of also use instrumental: **за столо́м** (at the table), **пе́ред до́мом** (in front of the house).`,
          table: {
            headers: ["Phrase", "Case"],
            rows: [
              ["с сахаром", "instrumental"],
              ["без сахара", "genitive"],
              ["за столом", "instrumental"],
              ["перед домом", "instrumental"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u05-l2-e1",
          type: "single",
          text: "Чай с ___. (lemon)",
          options: [{ id: "a", label: "лимоном" }, { id: "b", label: "лимона" }], answer: "a",
        },
        {
          id: "a2-u05-l2-e2",
          type: "fill-blank",
          text: "Мы у́жинаем за ___. *(table)*",
          answers: ["столом"],
        },
        {
          id: "a2-u05-l2-e3",
          type: "fill-blank",
          text: "Я хочу́ кофе с ___. *(milk)*",
          answers: ["молоком"],
        },
      ],
      drills: [{ kind: "noun-case", count: 3, cases: ["inst"] }, { kind: "cloze", count: 2 }],
    },
    {
      id: "a2-u05-l3",
      title: "Step 3: быть / стать / работать + instrumental",
      topicIds: ["a2-u05-instrumental-sg"],
      vocab: ["становиться", "стать", "казаться", "инженер", "врач", "юрист", "программист", "водитель", "переводчик", "парикмахер"],
      grammar: [
        {
          title: "Naming the role",
          body: `- **стать + instr.**: Он хо́чет **стать врачо́м**.
- **быть (past/future) + instr.**: Она́ **была́ учи́тельницей**. Он **бу́дет инжене́ром**.
- **работа́ть + instr.** (as): Он рабо́тает **перево́дчиком**.
Present-tense plain predicate stays nominative: Он врач.`,
          table: {
            headers: ["Russian", "English"],
            rows: [
              ["Я хочу стать программистом", "I want to become a programmer"],
              ["Она была водителем", "She was a driver"],
              ["Он работает переводчиком", "He works as a translator"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u05-l3-e1",
          type: "single",
          text: "Она́ хо́чет стать ___. (doctor)",
          options: [{ id: "a", label: "врачом" }, { id: "b", label: "врач" }], answer: "a",
        },
        {
          id: "a2-u05-l3-e2",
          type: "single",
          text: "Ра́ньше он был ___. (driver)",
          options: [{ id: "a", label: "водителем" }, { id: "b", label: "водитель" }], answer: "a",
        },
        {
          id: "a2-u05-l3-e3",
          type: "true-false",
          text: "Present: «Он программи́ст» needs the instrumental.",
          answer: false,
        },
      ],
      drills: [{ kind: "noun-case", count: 3, cases: ["inst"] }, { kind: "cloze", count: 2 }],
    },
    {
      id: "a2-u05-l4",
      title: "Step 4: свой — one's own",
      topicIds: ["a2-u05-instrumental-sg"],
      vocab: ["свой", "свои", "своих", "работа", "семья", "дом", "машина", "друг", "мнение", "любить"],
      grammar: [
        {
          title: "The subject owns it → свой",
          body: `- Я люблю́ **свою́** рабо́ту. — I love my (own) job.
- Он живёт **со свое́й** семьёй. — with his own family (instr after с!)
- Свой declines like этот: своего́, свое́й, свои́м…
If the owner is NOT the subject, use мой/твой/его: Это его́ маши́на (not своя́).`,
          examples: [
            { ru: "У ка́ждого своё хо́бби.", en: "Everyone has their own hobby." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u05-l4-e1",
          type: "fill-blank",
          text: "Я дово́лен ___ рабо́той. *(my own — instrumental!)*",
          answers: ["своей"],
        },
        {
          id: "a2-u05-l4-e2",
          type: "fill-blank",
          text: "Он живёт со ___ семьёй. *(his own)*",
          answers: ["своей"],
        },
        {
          id: "a2-u05-l4-e3",
          type: "true-false",
          text: "«Это её докуме́нты» can stay её — the owner is not the subject.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u05-test-1", type: "single",
      text: "Кофе с ___ или без?",
      options: [{ id: "a", label: "сахаром" }, { id: "b", label: "сахара" }], answer: "a",
    },
    {
      id: "a2-u05-test-2", type: "single",
      text: "Он хо́чет стать ___. (программи́ст)",
      options: [{ id: "a", label: "программистом" }, { id: "b", label: "программист" }], answer: "a",
    },
    {
      id: "a2-u05-test-3", type: "short-answer",
      text: "Translate: I am sitting with a friend.",
      answer: "я сижу с другом",
    },
    {
      id: "a2-u05-test-4", type: "true-false",
      text: "«Она́ была́ учи́тельницей» uses the instrumental correctly.",
      answer: true,
    },
    {
      id: "a2-u05-test-5", type: "ordering",
      text: "Build: **We are talking with the teacher.**",
      items: [
        { id: "1", label: "Мы" }, { id: "2", label: "говорим" }, { id: "3", label: "с" }, { id: "4", label: "учителем" },
      ],
      answer: ["1", "2", "3", "4"],
    },
    {
      id: "a2-u05-test-6", type: "fill-blank",
      text: "Он живёт со ___ семьёй. *(his own)*",
      answers: ["своей"],
    },
  ],
};
