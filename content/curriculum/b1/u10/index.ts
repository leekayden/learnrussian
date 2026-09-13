import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 10 — Complex sentences, one step at a time. */
export const u10: Unit = {
  id: "b1-u10",
  level: "b1",
  number: 10,
  title: "Complex sentences: gluing clauses",
  topicIds: ["b1-u10-complex-sentences"],
  lessons: [
    {
      id: "b1-u10-l1",
      title: "Step 1: кото́рый as subject or object",
      topicIds: ["b1-u10-complex-sentences"],
      vocab: ["который", "писатель", "роман", "герой", "фильм", "история", "письмо", "девушка", "журналист", "вопрос"],
      grammar: [
        {
          title: "Case = its job in the subordinate clause",
          body: `Кото́рый is the Russian relative pronoun — but unlike English 'which/who', it must sit right after the noun and take the CASE of its own clause. Subject: фильм, кото́рый мне понра́вился. Object: фильм, кото́рый я ви́дел.- Subject: Фильм, **кото́рый** мне понра́вился (nom)
- Direct object: Фильм, **кото́рый** я ви́дел (acc)
Gender/number copy the noun being replaced.`,
          plain: `Который is Russian's "which/who", but it works harder than the English one: it must sit right next to its noun, and its ending announces the job it does in its own half of the sentence.`,
          why: "English 'which' floats free; кото́рый is glued to its noun and inflects like an adjective for gender/number while taking its own clause's case. Two decisions per use — agree with the antecedent, case from the clause — and the placement rule that keeps it adjacent.",

          table: {
            headers: ["Function", "Form"],
            rows: [
              ["subject", "который (nom)"],
              ["object", "который/которую (acc)"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u10-l1-e1",
          type: "single",
          text: "Письмо́, ___, лежи́т на столе́. (я написа́л письмо́)",
          options: [{ id: "a", label: "которое я написал" }, { id: "b", label: "которым я написал" }], answer: "a",
        },
        {
          id: "b1-u10-l1-e2",
          type: "single",
          text: "Геро́й, ___, умира́ет в конце́. (рома́н понра́вился? no — он лю́бит hero: «Геро́й, ___ я люблю́»)",
          options: [{ id: "a", label: "которого я люблю" }, { id: "b", label: "который я люблю" }], answer: "a",
          explanation: "Hero is the OBJECT of люблю → animate accusative = кото́рого.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u10-l2",
      title: "Step 2: кото́рый after a preposition",
      topicIds: ["b1-u10-complex-sentences"],
      vocab: ["центр", "говорить", "вечер", "знакомиться", "река", "мост", "город", "дом", "статья", "человек"],
      grammar: [
        {
          title: "Preposition moves inside",
          body: `When the noun needs a preposition, it travels inside the который-phrase: дом, в кото́ром я живу́; де́вушка, с кото́рой я говори́л. The preposition + который comes FIRST in the clause.If the noun needs a preposition, it travels with кото́рый:
- Дом, **в кото́ром** я живу́ (prep — живу́ в до́ме)
- Де́вушка, **с кото́рой** я говори́л (inst — говори́л с ней)
- Писа́тель, **о кото́ром** все говоря́т (prep — говоря́т о нём)`,
          plain: `English happily ends with "...the house I live in"; Russian forbids that. The preposition must travel with который — в котором, с которой — so get used to little two-word bundles at the front of the clause.`,
          why: "Preposition-stranding is impossible in Russian — 'the house which I live in' cannot exist. The preposition must precede кото́рый, which is why the form is so often в кото́ром / с кото́рой: everyday verbs are drowning in prepositions, and each one drags its case along.",

          table: {
            headers: ["Function", "Form"],
            rows: [
              ["in which", "в котором"],
              ["with whom", "с которой"],
              ["to whom", "которому"],
              ["about which", "о котором"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u10-l2-e1",
          type: "single",
          text: "Писа́тель, ___, живёт в Петербу́рге. (я говори́л о писа́теле)",
          options: [{ id: "a", label: "о котором" }, { id: "b", label: "которого" }], answer: "a",
        },
        {
          id: "b1-u10-l2-e2",
          type: "fill-blank",
          text: "Де́вушка, ___ я познако́мился на ве́чере, врач. *(с кото́рой)*",
          answers: ["с которой"],
        },
        {
          id: "b1-u10-l2-e3",
          type: "short-answer",
          text: "Connect: «Э́то дом. Я живу́ в нём.» → «Э́то дом, ___»",
          answer: "в котором я живу",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u10-l3",
      title: "Step 3: чтобы and когда́ / пока́",
      topicIds: ["b1-u10-complex-sentences"],
      vocab: ["чтобы", "когда", "пока", "помочь", "прийти", "важно", "готовить", "накрывать", "письмо", "встреча"],
      grammar: [
        {
          title: "Purpose and time",
          body: `что́бы marks purpose or a demanded outcome: Я пришёл, что́бы помо́чь. Я хочу́, что́бы ты пришёл. The verb after что́бы is always in the PAST form — even for future meaning.- **что́бы + past/infinitive** = in order to / that: Я пришёл, что́бы помо́чь. Важно́, что́бы ты пришёл.
- **когда́** = when; **пока́** = while / until: Пока́ я гото́влю, ты накрыва́й на стол.
Negative purpose: что́бы не + past: Он закры́л окно́, что́бы не шумело́... simpler: что́бы не просту́диться.`,
          plain: `Чтобы covers both "in order to" and "I want you to...". The strange part for English speakers: the verb after it always wears its past form, even when the meaning is future.`,
          why: "chtoby is a fusion of chto + by: the hypothetical particle lives inside. That explains the past form after it — the demanded outcome is an imagined event, so it takes by's tense. English 'that you will come' has no such logic; Russian's is airtight.",
          examples: [
            { ru: "Я взял зонт, что'бы не промо'кнуть.", en: "I took an umbrella so as not to get soaked." },
          ],
          tip: "что́бы never takes a future form: «Я хочу́, что́бы ты пришёл» (past form inside!).",
        },
      ],
      exercises: [
        {
          id: "b1-u10-l3-e1",
          type: "single",
          text: "Я прие́хал ___, что́бы помо́чь тебе́.",
          options: [{ id: "a", label: "для того" }, { id: "b", label: "потому" }], answer: "a",
        },
        {
          id: "b1-u10-l3-e2",
          type: "fill-blank",
          text: "Я хочу́, ___ ты написа́л э́ссе.",
          answers: ["чтобы"],
        },
        {
          id: "b1-u10-l3-e3",
          type: "true-false",
          text: "After чтобы, the verb is in the past form.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b1-u10-l4",
      title: "Step 4: потому что, поэ́тому, хотя́, зато́",
      topicIds: ["b1-u10-complex-sentences"],
      vocab: ["потому", "поэтому", "хотя", "зато", "если", "дождь", "зонт", "маленький", "светлый", "дом"],
      grammar: [
        {
          title: "Cause, result, concession, compensation",
          body: `Cause and contrast come in pairs: because → потому́ что (after the fact) / так как (before); result → поэ́тому; concession → хотя́; compensation → зато́. До́м ма́ленький, зато́ све́тлый.- **потому́ что** = because (after the fact): Я взял зонт, потому́ что шёл дождь.
- **поэ́тому** = therefore (result): Шёл дождь, поэ́тому я взял зонт.
- **хотя́** = although; **зато́** = but on the other hand (compensation): До́м ма́ленький, зато́ све́тлый.`,
          plain: `Pick the connector by direction: потому что gives the reason after the fact, поэтому draws the conclusion from it, and зато adds a silver lining. They are not interchangeable.`,
          why: "Russian discourse connectors are directional: потому́ что must follow the fact it explains, поэ́тому must follow its cause. English 'because' can go anywhere; Russian's two-piece system (cause-word + word order) forces you to decide what is news and what is explanation.",

          table: {
            headers: ["Conjunction", "Job"],
            rows: [
              ["потому что", "cause (follows)"],
              ["поэтому", "result"],
              ["хотя", "concession"],
              ["зато", "compensation"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u10-l4-e1",
          type: "single",
          text: "Я взял зонт, ___ шёл дождь.",
          options: [{ id: "a", label: "потому что" }, { id: "b", label: "поэтому" }], answer: "a",
        },
        {
          id: "b1-u10-l4-e2",
          type: "single",
          text: "Шёл дождь, ___ я взял зонт.",
          options: [{ id: "a", label: "поэтому" }, { id: "b", label: "потому что" }], answer: "a",
        },
        {
          id: "b1-u10-l4-e3",
          type: "fill-blank",
          text: "До́м ма́ленький, ___ све́тлый. *(but on the plus side)*",
          answers: ["зато"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u10-test-1", type: "single",
      text: "Го́род, ___, краси́в. (я живу́ в го́роде)",
      options: [{ id: "a", label: "в котором я живу" }, { id: "b", label: "который я живу" }], answer: "a",
    },
    {
      id: "b1-u10-test-2", type: "single",
      text: "Я взял зонт, ___ шёл дождь.",
      options: [{ id: "a", label: "потому что" }, { id: "b", label: "поэтому" }], answer: "a",
    },
    {
      id: "b1-u10-test-3", type: "true-false",
      text: "After чтобы, the verb is in the past form.",
      answer: true,
    },
    {
      id: "b1-u10-test-4", type: "short-answer",
      text: "Connect with который: «Э́то де́вушка. Я познако́мился с ней.» → «Э́то де́вушка, ___»",
      answer: "с которой я познакомился",
    },
  ],
};
