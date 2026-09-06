import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 4 — Dative singular: giving, liking, age. */
export const u04: Unit = {
  id: "a2-u04",
  level: "a2",
  number: 4,
  title: "The dative: to whom, how old, what's liked",
  topicIds: ["a2-u04-dative-sg"],
  lessons: [
    {
      id: "a2-u04-l1",
      title: "Dative endings + the dative pronouns",
      topicIds: ["a2-u04-dative-sg"],
      vocab: [
        "помогать",
        "звонить",
        "отвечать",
        "сказать",
        "показывать",
        "объяснять",
        "друг",
        "врач",
        "учитель",
        "родитель",
      ],
      grammar: [
        {
          title: "The dative = 'to / for' someone",
          body: `The **dative** marks the person (or thing) something is done *to* or *for*. Verbs like помогать (to help), звонить (to call), отвечать (to answer) govern it:
Endings (singular):
- masculine/neuter consonant → **-у** (друг → дру́гу, врач → врачу́)
- **-й / -ь** → **-ю** (музе́й → музе́ю, учи́тель → учи́телю)
- feminine **-а** → **-е** (сестра́ → сестре́)
- feminine **-я / -ь** → **-е** (Та́ня → Та́не, ма́ть → ма́тери)`,
          table: {
            headers: ["Nominative", "Dative", "Example"],
            rows: [
              ["друг", "другу", "Я звоню другу"],
              ["учитель", "учителю", "Я отвечаю учителю"],
              ["сестра", "сестре", "Я помогаю сестре"],
              ["мать", "матери", "Я помогаю матери"],
            ],
          },
          examples: [
            { ru: "Я часто звоню' дру'гу.", en: "I often call my friend." },
            { ru: "Она' помога'ет ма'тери.", en: "She helps (her) mother." },
          ],
          tip: "Dative pronouns: мне, тебе, ему́, ей, нам, вам, им. Note он → ему́ (н → м). «Помоги мне!» = Help me!",
        },
        {
          title: "к = towards someone",
          body: `The preposition **к** (towards, to a person) takes the dative:
- Я иду́ **к врачу́**. — I'm going to the doctor('s).
- Приходи́ **к нам**! — Come over to our place!
Distinguish: **в + accusative** for buildings/places (в шко́лу), **к + dative** for people (к дру́гу).`,
          examples: [
            { ru: "Мы е'дем к роди'телям.", en: "We are going to (our) parents." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u04-l1-e1",
          type: "single",
          text: "Я звоню́ ___. (my sister)",
          options: [
            { id: "a", label: "сестра" },
            { id: "b", label: "сестре" },
            { id: "c", label: "сестру" },
          ],
          answer: "b",
        },
        {
          id: "a2-u04-l1-e2",
          type: "single",
          text: "Она́ помога́ет ___. (the teacher)",
          options: [
            { id: "a", label: "учитель" },
            { id: "b", label: "учителю" },
            { id: "c", label: "учителя" },
          ],
          answer: "b",
        },
        {
          id: "a2-u04-l1-e3",
          type: "fill-blank",
          text: "Помоги́ {{blank}}, пожа́луйста! *(Help me, please!)*",
          answers: ["мне"],
        },
        {
          id: "a2-u04-l1-e4",
          type: "fill-blank",
          text: "Я иду́ {{blank}} врачу́. *(I am going to the doctor.)*",
          answers: ["к"],
        },
        {
          id: "a2-u04-l1-e5",
          type: "true-false",
          text: "«Он звони́т ей» means “he is calling her”.",
          answer: true,
        },
      ],
      drills: [
        { kind: "noun-case", count: 4, cases: ["dat"] },
        { kind: "cloze", count: 2 },
      ],
    },
    {
      id: "a2-u04-l2",
      title: "Age, liking, and impersonal need",
      topicIds: ["a2-u04-dative-sg"],
      vocab: [
        "нравиться",
        "нужно",
        "надо",
        "можно",
        "нельзя",
        "пора",
        "год",
        "скучать",
        "казаться",
      ],
      grammar: [
        {
          title: "Age: мне 20 лет",
          body: `Age uses the dative person + лет/год:
- Мне **два́дцать лет**. — I am 20 (literally: to me are 20 years).
- Ей **пять лет**. — She is five.
- ONE year → год: Ма́льчику **оди́н год**. Numbers 2–4 → го́да (unit 11 covers this).`,
          examples: [
            { ru: "Ско'лько тебе' лет? — Мне восемна'дцать.", en: "How old are you? — I'm eighteen." },
          ],
        },
        {
          title: "нравиться: to be liked",
          body: `Russian "to like" works backwards: the liker is **dative**, the liked thing is the subject:
- **Мне нра́вится** э́тот го́род. — I like this city (the city is pleasing to me).
- **Ей нра́вятся** я́блоки. — She likes apples (plural → нра́вятся).
нра́вится + singular thing / нра́вятся + plural thing.`,
          examples: [
            { ru: "Тебе' нра'вится ру'сская му'зыка?", en: "Do you like Russian music?" },
          ],
          tip: "Beginners say «Я нравлюсь Москву́» — wrong on both halves. Remember: the thing does the liking-verb; the person is in dative.",
        },
        {
          title: "Impersonal need & permission",
          body: `These words put the person in the dative too:
- **мне на́до / ну́жно + infinitive** — I must / I need to: Ей ну́жно рабо́тать.
- **мне мо́жно** — I may; **мне нельзя́** — I must not: Вам нельзя́ кури́ть здесь.
- **мне пору́** — it's time (for me): Нам пору́ идти́. — We should get going.
No subject appears — Russian impersonal sentences simply drop "I/you".`,
          examples: [
            { ru: "Мне на'до учи'ть слова'.", en: "I need to learn words." },
            { ru: "Здесь нельзя' кури'ть.", en: "Smoking is not allowed here." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u04-l2-e1",
          type: "single",
          text: "___ нра́вится Москва́.",
          options: [
            { id: "a", label: "Я" },
            { id: "b", label: "Мне" },
            { id: "c", label: "Меня" },
          ],
          answer: "b",
        },
        {
          id: "a2-u04-l2-e2",
          type: "single",
          text: "Ей ___ учи́ть ру́сский язы́к.",
          options: [
            { id: "a", label: "нужно" },
            { id: "b", label: "нужна" },
            { id: "c", label: "нужен" },
          ],
          answer: "a",
          explanation: "ну́жно is impersonal — it never agrees.",
        },
        {
          id: "a2-u04-l2-e3",
          type: "short-answer",
          text: "Translate: «Сколь́ко ей лет?» — answer for a 25-year-old: (She is 25.)",
          answer: "ей 25 лет",
          accept: ["ей двадцать пять лет"],
        },
        {
          id: "a2-u04-l2-e4",
          type: "fill-blank",
          text: "Уже́ по́здно. {{blank}} пора́ домо́й. *(It's late. It's time for us to go home.)*",
          answers: ["Нам"],
        },
        {
          id: "a2-u04-l2-e5",
          type: "true-false",
          text: "«Мне нельзя́ есть мно́го са́хара» means “I must not eat much sugar”.",
          answer: true,
        },
      ],
      drills: [
        { kind: "noun-case", count: 3, cases: ["dat"] },
        { kind: "cloze", count: 3 },
      ],
    },
  ],

  test: [
    {
      id: "a2-u04-test-1",
      type: "single",
      text: "Я помога́ю ___. (my father — оте́ц)",
      options: [
        { id: "a", label: "отец" },
        { id: "b", label: "отцу" },
        { id: "c", label: "отца" },
      ],
      answer: "b",
    },
    {
      id: "a2-u04-test-2",
      type: "short-answer",
      text: "Translate: (I often call my friend.) — use «звоню́»",
      answer: "я часто звоню другу",
    },
    {
      id: "a2-u04-test-3",
      type: "single",
      text: "___ нра́вятся ру́сские фи́льмы.",
      options: [
        { id: "a", label: "Ему" },
        { id: "b", label: "Он" },
        { id: "c", label: "Его" },
      ],
      answer: "a",
    },
    {
      id: "a2-u04-test-4",
      type: "fill-blank",
      text: "{{blank}} нельзя́ опа́здывать. *(You (polite) must not be late.)*",
      answers: ["Вам"],
    },
    {
      id: "a2-u04-test-5",
      type: "true-false",
      text: "«Мне два́дцать го́да» is correct for “I am 20”.",
      answer: false,
      explanation: "20 takes лет: мне два́дцать лет.",
    },
    {
      id: "a2-u04-test-6",
      type: "ordering",
      text: "Build: **I am going to the doctor.**",
      items: [
        { id: "1", label: "Я" },
        { id: "2", label: "иду" },
        { id: "3", label: "к" },
        { id: "4", label: "врачу" },
      ],
      answer: ["1", "2", "3", "4"],
    },
    {
      id: "a2-u04-test-7",
      type: "matching",
      text: "Dative pronouns:",
      prompts: [
        { id: "p1", label: "он" },
        { id: "p2", label: "она" },
        { id: "p3", label: "они" },
        { id: "p4", label: "мы" },
      ],
      responses: [
        { id: "r1", label: "им" },
        { id: "r2", label: "ей" },
        { id: "r3", label: "нам" },
        { id: "r4", label: "ему" },
      ],
      answer: { p1: "r4", p2: "r2", p3: "r1", p4: "r3" },
    },
  ],
};
