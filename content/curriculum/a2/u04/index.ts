import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 4 — Dative singular, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
export const u04: Unit = {
  id: "a2-u04",
  level: "a2",
  number: 4,
  title: "The dative: to whom, how old, what's liked",
  topicIds: ["a2-u04-dative-sg"],
  lessons: [
    {
      id: "a2-u04-l1",
      title: "Step 1: dative endings — the receiver case",
      topicIds: ["a2-u04-dative-sg"],
      vocab: ["помогать", "звонить", "отвечать", "друг", "врач", "учитель", "сестра", "мать", "брат", "подруга"],
      grammar: [
        {
          title: "To whom? — dative endings",
          body: `Some verbs point their action **at a person** rather than at a thing: помога́ть (help), звони́ть (call), отвеча́ть (answer). English leaves that person in the plain object form — *I help my sister* — but Russian marks the receiver with its own case, the **dative**:

- masculine/neuter → **-у**: дру́г → дру́гу, врач → врачу́
- masculine **-й/-ь** → **-ю**: учи́тель → учи́телю
- feminine **-а → -е**: сестра́ → сестре́
- feminine **-я/-ь → -е**: Та́ня → Та́не, ма́ть → ма́тери

So the trio works like this: **Я помога́ю сестре́.** — I help my sister. The helping flows *toward* her, and the dative ending is the arrow.`,
          why: `The dative is called the "giving" case for a reason: its core meaning is **direction toward a receiver**. That is why the same case shows up later for gifts (дарю́ кому́), showing (показыва́ть кому́), promises, and even age and emotions — anything that happens *to* someone rather than being done *by* someone. Learn it as the receiver-case and the later uses feel inevitable.`,
          table: {
            headers: ["Nominative", "Dative"],
            rows: [
              ["друг", "другу"],
              ["учитель", "учителю"],
              ["сестра", "сестре"],
              ["мать", "матери"],
            ],
          },
          examples: [
            { ru: "Я звоню' дру'гу ка'ждый ве'чер.", en: "I call my friend every evening — the call is directed at him." },
            { ru: "Преподава'тель отвеча'ет студе'нтам.", en: "The professor answers the students." },
          ],
          tip: "Watch out for the two feminine trap-forms: **ма́ть → ма́тери** and **до́чь → до́чери** grow an extra -ер-. They are the only common feminine nouns doing this, so treat them as vocabulary, not grammar.",
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
          body: `The dative pronouns are short and everywhere: **мне** (to me), **тебе́** (to you), **ему́** (to him), **ей** (to her), **нам**, **вам**, **им** (to them). Two things to notice:

- **Я → мне**: the most frequent word pair in spoken Russian. «Помоги́ мне», «Мне нра́вится», «Мне хо́лодно» — all dative.
- **он → ему́**: an н appears out of nowhere. Blame history; just memorise it.

The preposition **к** (toward) also takes the dative, and it is how you say you are heading to a *person*: **Я иду́ к врачу́** (to the doctor's), **Заходи́ к нам** (come over to our place). For places you would use в/на + accusative instead: в шко́лу, на рабо́ту.`,
          examples: [
            { ru: "Помоги' мне, пожа'луйста.", en: "Help me, please." },
            { ru: "Я иду' к дру'гу на друго'й конец города'.", en: "I'm heading to my friend's across town." },
          ],
          tip: "Do not say «Я иду́ к шко́ле» for *I'm going to school* — к is for people and person-like destinations (к врачу́, к бабушке). Buildings take в + accusative: в шко́лу, в университе́т.",
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
          body: `Russian does not say "I am 20" — it says "**to me [are] 20 years**": **Мне два́дцать лет**. The experiencer of age sits in the dative, and the years are the subject.

The year-word depends on the number:
- **1 → год**: Ма́льчику оди́н год.
- **2, 3, 4 → го́да**: Ей три го́да.
- **5 and up → лет**: Мне два́дцать **лет**. (and yes: 11–14 also take лет)

This год/го́да/лет trio is the same agreement logic you will meet with any counted noun — age is simply where everyone meets it first.`,
          why: `Why does age use the dative? Because Russian frames age as something that *happens to you* — the years are accumulating onto you, the receiver. The same dative-experiencer logic later gives you «Мне хо́лодно» (I'm cold) and «Мне повезло́» (I got lucky). You are not the agent of your own age; it arrives at you.`,
          table: {
            headers: ["Number", "Word"],
            rows: [
              ["1", "год"],
              ["2–4", "года"],
              ["5–20", "лет"],
            ],
          },
          examples: [
            { ru: "Ско'лько тебе' лет? — Мне два'дцать оди'н.", en: "How old are you? — Twenty-one." },
            { ru: "Мла'дшему бра'ту се'мь лет.", en: "My little brother is seven." },
          ],
          tip: "The classic slip: «Мне два́дцать го́да» — после двадцати всегда́ **лет**. Reserve го́да strictly for 2, 3, 4 (два го́да, чети́ре го́да) and год for exactly one.",
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
          body: `«I like this city» is perhaps the most mistranslated sentence in Russian courses. Russian builds it backwards: the **city** is the subject doing the pleasing, and **you** are the dative receiver of the pleasure: **Мне нра́вится э́тот го́род** — literally *to me is-pleasing this city*.

The verb agrees with the THING, not with you:
- one thing → **нра́вится**: Мне нра́вится э́та кни́га.
- several things → **нра́вятся**: Ей нра́вятся ру́сские фи́льмы.

And it works for people too: «Ей нра́вится твой брат» can absolutely mean she fancies your brother. Context decides how deep the liking goes.`,
          why: `Why backwards? Because Russian frames liking as something that happens **to** you — an experience you receive, not an action you perform. The dative-experiencer pattern from age (мне 20 лет) and sensation (мне хо́лодно) extends to emotions: liking, preferring, and even «Мне надое́ло» (I'm fed up). You are the target of the feeling.`,
          table: {
            headers: ["Person (dat)", "Verb", "Thing (nom)"],
            rows: [
              ["Мне", "нравится", "город"],
              ["Ей", "нравятся", "яблоки"],
            ],
          },
          examples: [
            { ru: "Те'бе нра'вится у'читься зде'сь?", en: "Do you like studying here?" },
            { ru: "Мне нра'вятся ва'ши идеи'", en: "I like your ideas — plural thing, нра́вятся." },
          ],
          tip: "Two errors, one root cause: «Я нра́влюсь Москву́» gets both halves wrong. The fix is mechanical — ask yourself *what is doing the pleasing?* That noun is your subject (nominative), and the liker slides into the dative.",
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
          body: `Russian has a whole family of verbs and words with **no subject at all**. Obligation, permission, and time-ness are expressed impersonally, and the person who feels the need sits in the dative:

- **мне на́до / ну́жно + infinitive** — I need to: Ей ну́жно рабо́тать.
- **мне мо́жно** — I may; **мне нельзя́** — I must not: Здесь нельзя́ кури́ть.
- **мне пору́** — it's time (for me): Нам пору́ идти́.

Notice what is missing: no я, no он. The dative pronoun does the whole job. This is not slang — it is standard literary grammar, and it is everywhere.`,
          why: `These are called **impersonal constructions**, and they exist because Russian is comfortable saying that a situation simply *is* — without an agent causing it. Necessity, permission, and timing are seen as circumstances, not choices. The dative person is the one affected; nobody is the hero. You will feel this pattern again in B2 (прихо́дится, удаётся).`,
          table: {
            headers: ["Word", "Meaning", "Example"],
            rows: [
              ["надо / нужно", "need to", "Мне надо учиться"],
              ["можно", "may", "Можно войти?"],
              ["нельзя", "must not", "Здесь нельзя курить"],
              ["пора", "it's time", "Нам пора"],
            ],
          },
          examples: [
            { ru: "Мне на'до гото'виться к экза'мену.", en: "I need to prepare for the exam." },
            { ru: "Уже' пору', дава'й зака'нчивать.", en: "It's already time — let's wrap up." },
          ],
          tip: "The trap: adding a subject. «Я должен» is fine (that's the adjective должен, next unit), but «Я нужно» is impossible — ну́жно has no agreement and no subject. If you catch yourself building «I + нужно», switch the я to мне and delete the doubt.",
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
