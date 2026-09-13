import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 5 — Instrumental singular, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
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
      vocab: ["жена", "муж", "друг", "подруга", "сестра", "брат", "вместе", "разговаривать", "знакомый", "коллега"],
      grammar: [
        {
          title: "с + instrumental = company",
          body: `The everyday use of the instrumental is **company**: who you do things with. The preposition **с** (with) + instrumental covers it:

- Я живу́ **с сосе́дями**. — I live with roommates.
- Она́ разгова́ривает **с преподава́телем**. — She talks with the professor.

Endings, singular: masculine hard consonant → **-ом** (до́мом); -й/-ь → **-ем** (учи́телем); feminine **-а → -ой** (жено́й); **-я/-ь → -ей** (Та́ней, пло́щадью). Notice the vowels о/е/ой/ей — the instrumental is the "o-sounding" case.`,
          plain: `To say who you do things with, put с in front and change the person's ending: с женой, с другом, с учителем. It is one of the handiest tools in the language.`,
          why: `Why «с» + instrumental and not just «с» + whatever? Because the instrumental case IS the case of accompaniment and instrument — its name literally means "the instrument". Whenever Russian expresses *using something* or *being with someone*, the noun slips into this form. The preposition с is just the spoken signal of "together"; the case carries the grammar.`,
          table: {
            headers: ["Nominative", "Instrumental"],
            rows: [
              ["друг", "с другом"],
              ["жена", "с женой"],
              ["Таня", "с Таней"],
              ["учитель", "с учителем"],
            ],
          },
          examples: [
            { ru: "Мы гуля'ем с соба'кой в па'рке.", en: "We walk the dog in the park — with-dog takes instrumental." },
            { ru: "Он прие'хал с колле'гами на конфере'нцию.", en: "He came to the conference with colleagues." },
          ],
          tip: "After ж, ш, ч, щ the unstressed ending is **-ей** (с учи́тельницей... no — watch stress): с враче́м vs ножо́м. The rule of thumb: stressed final consonant → -о́м; unstressed after a husher → -е́м. Your dictionary's stress marks settle every doubt.",
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
      title: "Step 2: с чем — coffee, tea, and other mixtures",
      topicIds: ["a2-u05-instrumental-sg"],
      vocab: ["кофе", "чай", "молоко", "сахар", "лимон", "хлеб", "суп", "соус", "бутерброд", "вкусный"],
      grammar: [
        {
          title: "Mixtures take с + instrumental",
          body: `The same с + instrumental covers ingredients and mixtures:

- Чай **с са́харом** / **без са́хара** — with/without sugar (note: без takes genitive!)
- Кофе **с молоко́м**; хлеб **с ма́слом**; борщ **со смета́ной**

Two spatial prepositions also govern the instrumental: **за** (behind/at — за столо́м, at the table) and **пе́ред** (in front of — пе́ред до́мом). You will use за столо́м every time food appears.`,
          plain: `Every food combination runs on one pattern: чай с сахаром, кофе с молоком, хлеб с маслом. One little с plus a changed ending, and every café order is handled.`,
          why: "Every food combination runs on this pattern: chai s limonom, buterbrod s syrom, kofe s molokom. The s + instrumental is one of the highest-frequency constructions in the language — order breakfast twice and you own it.",
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
          title: "Naming the role someone has or becomes",
          body: `When you name someone's **profession or role** after certain verbs, the noun goes instrumental:

- **стать + instr.**: Он хо́чет **стать врачо́м**. — He wants to become a doctor.
- **быть (past/future) + instr.**: Она́ **была́ учи́тельницей**. — She was a teacher.
- **рабо́тать + instr.** (work as): Он рабо́тает **перево́дчиком**.
- **каза́ться + instr.** (seem): Он ка́жется уста́вшим.

But the plain present keeps the nominative: Он врач. — He is a doctor. The instrumental appears when the role is a *process or change* (стать, быть в past/future) or a *function* (работать в качестве).`,
          plain: `Name a job after become, was or work as and the job word takes an ending: он хочет стать врачом. But right now it stays plain: Он врач — he is a doctor.`,
          why: `The logic: in the present, being a doctor is a plain fact — nominative. But «был врачо́м» or «стал врачо́м» describes occupying a role across time or entering it — a kind of wearing the profession like a tool, which is instrumental territory. The case marks the role as something you carry, not something you equal.`,
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
      vocab: ["свой", "работа", "семья", "дом", "машина", "друг", "мнение", "любить", "хобби", "каждый"],
      grammar: [
        {
          title: "The subject owns it → свой",
          body: `Russian has a possessive that English lacks: **свой** = *one's own*. Use it when the possessor is the **subject** of the clause:

- Я люблю́ **свою́** рабо́ту. — I love my (own) job. (I am the subject → свой)
- Он живёт **со свое́й** семьёй. — He lives with his own family. (instr after с!)
- У ка́ждого **своё** хо́бби. — Everyone has their own hobby.

If the owner is NOT the subject, свой is wrong: Это **его́** маши́на (his car — I'm talking about him, he's not doing anything). Свой declines exactly like этот: своего́, свое́й, свои́м, свое́й…`,
          plain: `Russian marks 'one's own' with a dedicated word: свой. Use it when the owner is the one acting — я люблю свою работу. When someone else owns the thing, мой, его or её is fine.`,
          why: `Свой solves a real ambiguity that English tolerates. «Иван любит его сестру» could mean Ivan loves *someone else's* sister; «Иван любит свою сестру» locks it down to *Ivan's own*. One word, and the possessor is legally bound to the subject. English needs extra phrasing to say the same.`,
          table: {
            headers: ["Person", "Form"],
            rows: [
              ["я", "свою работу (acc fem)"],
              ["он", "со своей семьёй (instr fem)"],
              ["мы", "свои идеи (pl)"],
            ],
          },
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
