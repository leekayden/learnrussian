import type { Unit } from "@/lib/curriculum/types";

/** A2 · Unit 4 — Dative singular, one step at a time. */
export const u04: Unit = {
  id: "a2-u04",
  level: "a2",
  number: 4,
  title: "The dative: to whom, how old, what's liked",
  topicIds: ["a2-u04-dative-sg"],
  lessons: [
    {
      id: "a2-u04-l1",
      title: "Step 1: dative endings",
      topicIds: ["a2-u04-dative-sg"],
      vocab: ["помогать", "звонить", "отвечать", "друг", "врач", "учитель", "сестра", "мать", "брат", "подруга"],
      grammar: [
        {
          title: "To whom? — dative endings",
          body: `Verbs like помога́ть (help), звони́ть (call), отвеча́ть (answer) put the person in the **dative**:
- masculine/neuter → **-у** (дру́гу, врачу́); **-й/-ь** → **-ю** (учи́телю)
- feminine **-а → -е** (сестре́), **-я/-ь → -е** (Та́не, ма́тери)`,
          table: {
            headers: ["Nominative", "Dative"],
            rows: [
              ["друг", "другу"],
              ["учитель", "учителю"],
              ["сестра", "сестре"],
              ["мать", "матери"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "a2-u04-l1-e1",
          type: "single",
          text: "Я звоню́ ___. (sister)",
          options: [{ id: "a", label: "сестре" }, { id: "b", label: "сестру" }], answer: "a",
        },
        {
          id: "a2-u04-l1-e2",
          type: "single",
          text: "Она́ помога́ет ___. (teacher)",
          options: [{ id: "a", label: "учителю" }, { id: "b", label: "учителя" }], answer: "a",
        },
        {
          id: "a2-u04-l1-e3",
          type: "fill-blank",
          text: "Я отвеча́ю ___. *(the doctor)*",
          answers: ["врачу"],
        },
      ],
      drills: [{ kind: "noun-case", count: 4, cases: ["dat"] }],
    },
    {
      id: "a2-u04-l2",
      title: "Step 2: dative pronouns + к",
      topicIds: ["a2-u04-dative-sg"],
      vocab: ["местоимение", "помощь", "вопрос", "ответ", "звонок", "поездка", "врач", "друг", "встреча", "совет"],
      grammar: [
        {
          title: "мне, тебе, ему, ей, нам, вам, им",
          body: `Dative pronouns: **мне, тебе́, ему́, ей, нам, вам, им** (note н→м: он → ему́).
Preposition **к** (to a person) + dative: **к врачу́**, **к нам**, **к дру́гу**.
vs **в + accusative** for places: в шко́лу.`,
          examples: [
            { ru: "Помоги' мне!", en: "Help me!" },
            { ru: "Я иду' к врачу'.", en: "I'm going to the doctor('s)." },
          ],
        },
      ],
      exercises: [
        {
          id: "a2-u04-l2-e1",
          type: "fill-blank",
          text: "Помоги́ ___, пожа́луйста! *(me)*",
          answers: ["мне"],
        },
        {
          id: "a2-u04-l2-e2",
          type: "fill-blank",
          text: "Я иду́ ___ врачу́.",
          answers: ["к"],
        },
        {
          id: "a2-u04-l2-e3",
          type: "matching",
          text: "Pronoun → dative:",
          prompts: [
            { id: "p1", label: "он" }, { id: "p2", label: "она" }, { id: "p3", label: "они" },
          ],
          responses: [
            { id: "r1", label: "им" }, { id: "r2", label: "ей" }, { id: "r3", label: "ему" },
          ],
          answer: { p1: "r3", p2: "r2", p3: "r1" },
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u04-l3",
      title: "Step 3: age — мне 20 лет",
      topicIds: ["a2-u04-dative-sg"],
      vocab: ["год", "сколько", "мальчик", "девочка", "ребёнок", "студент", "бабушка", "дедушка", "возраст", "старый"],
      grammar: [
        {
          title: "Years happen TO you",
          body: `Age = dative person + лет/год:
- **Мне два́дцать лет.** — I'm 20.
- ONE year → **год**: Ма́льчику оди́н год.
- 2–4 → **го́да**: два го́да, три го́да.`,
          table: {
            headers: ["Number", "Word"],
            rows: [
              ["1", "год"],
              ["2–4", "года"],
              ["5–20", "лет"],
            ],
          },
          tip: "«Ско́лько тебе́ лет?» — how many years are TO you.",
        },
      ],
      exercises: [
        {
          id: "a2-u04-l3-e1",
          type: "single",
          text: "Ей пять ___.",
          options: [{ id: "a", label: "лет" }, { id: "b", label: "год" }], answer: "a",
        },
        {
          id: "a2-u04-l3-e2",
          type: "single",
          text: "Ре­бёнку оди́н ___.",
          options: [{ id: "a", label: "год" }, { id: "b", label: "лет" }], answer: "a",
        },
        {
          id: "a2-u04-l3-e3",
          type: "short-answer",
          text: "I am 20 (years old):",
          answer: "мне 20 лет",
          accept: ["мне двадцать лет"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u04-l4",
      title: "Step 4: нравиться — liking runs backwards",
      topicIds: ["a2-u04-dative-sg"],
      vocab: ["нравиться", "город", "яблоко", "музыка", "фильм", "книга", "погода", "очень", "больше", "шоколад"],
      grammar: [
        {
          title: "The thing does the liking",
          body: `- **Мне нра́вится** э́тот го́род. (singular thing → нра́вится)
- **Ей нра́вятся** я́блоки. (plural → нра́вятся)
The liker is dative; the liked thing is the SUBJECT.`,
          table: {
            headers: ["Person (dat)", "Verb", "Thing (nom)"],
            rows: [
              ["Мне", "нравится", "город"],
              ["Ей", "нравятся", "яблоки"],
            ],
          },
          tip: "Wrong: «Я нра́влюсь Москву́». Right: «Москва́ мне нра́вится».",
        },
      ],
      exercises: [
        {
          id: "a2-u04-l4-e1",
          type: "single",
          text: "___ нра́вится Москва́.",
          options: [{ id: "a", label: "Мне" }, { id: "b", label: "Я" }], answer: "a",
        },
        {
          id: "a2-u04-l4-e2",
          type: "single",
          text: "Ей ___ ру́сские фи́льмы.",
          options: [{ id: "a", label: "нравятся" }, { id: "b", label: "нравится" }], answer: "a",
        },
        {
          id: "a2-u04-l4-e3",
          type: "true-false",
          text: "«Тебе́ нра́вится шо́колад?» asks about liking chocolate.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u04-l5",
      title: "Step 5: надо, можно, нельзя, пора",
      topicIds: ["a2-u04-dative-sg"],
      vocab: ["надо", "нужно", "можно", "нельзя", "пора", "домой", "курить", "спрашивать", "уходить", "заниматься"],
      grammar: [
        {
          title: "Impersonal needs — person in dative",
          body: `- **мне на́до / ну́жно + infinitive** — I need to: Ей ну́жно рабо́тать.
- **мне мо́жно** — I may; **мне нельзя́** — I must not: Вам нельзя́ кури́ть.
- **мне пору́** — it's time (for me): Нам пору́ идти́.
No subject — the person just sits in the dative.`,
          examples: [
            { ru: "Мне на'до учи'ть слова'.", en: "I need to learn words." },
          ],
          tip: "The verb never agrees: ну́жно/нельзя́ are frozen — the DATIVE person is the only variable.",
        },
      ],
      exercises: [
        {
          id: "a2-u04-l5-e1",
          type: "single",
          text: "___ ну́жно учи́ть ру́сский.",
          options: [{ id: "a", label: "Ей" }, { id: "b", label: "Она" }], answer: "a",
        },
        {
          id: "a2-u04-l5-e2",
          type: "fill-blank",
          text: "Уже́ по́здно. ___ пора́ домо́й. *(us)*",
          answers: ["Нам"],
        },
        {
          id: "a2-u04-l5-e3",
          type: "true-false",
          text: "«Здесь нельзя́ кури́ть» = smoking not allowed here.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u04-test-1", type: "single",
      text: "Я помога́ю ___. (отец)",
      options: [{ id: "a", label: "отцу" }, { id: "b", label: "отца" }], answer: "a",
    },
    {
      id: "a2-u04-test-2", type: "short-answer",
      text: "Translate: I often call my friend.",
      answer: "я часто звоню другу",
    },
    {
      id: "a2-u04-test-3", type: "single",
      text: "___ нра́вятся ру́сские фи́льмы.",
      options: [{ id: "a", label: "Ему" }, { id: "b", label: "Его" }], answer: "a",
    },
    {
      id: "a2-u04-test-4", type: "fill-blank",
      text: "___ нельзя́ опа́здывать. *(you, polite)*",
      answers: ["Вам"],
    },
    {
      id: "a2-u04-test-5", type: "true-false",
      text: "«Мне два́дцать го́да» is correct for “I'm 20”.",
      answer: false,
    },
    {
      id: "a2-u04-test-6", type: "ordering",
      text: "Build: **I am going to the doctor.**",
      items: [
        { id: "1", label: "Я" }, { id: "2", label: "иду" }, { id: "3", label: "к" }, { id: "4", label: "врачу" },
      ],
      answer: ["1", "2", "3", "4"],
    },
    {
      id: "a2-u04-test-7", type: "matching",
      text: "Dative pronouns:",
      prompts: [
        { id: "p1", label: "он" }, { id: "p2", label: "она" }, { id: "p3", label: "они" }, { id: "p4", label: "мы" },
      ],
      responses: [
        { id: "r1", label: "им" }, { id: "r2", label: "ей" }, { id: "r3", label: "нам" }, { id: "r4", label: "ему" },
      ],
      answer: { p1: "r4", p2: "r2", p3: "r1", p4: "r3" },
    },
  ],
};
