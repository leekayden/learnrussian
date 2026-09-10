import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 1 — Case synonymy I: partitive genitive and the second locative. */
export const u01: Unit = {
  id: "c2-u01",
  level: "c2",
  number: 1,
  title: "Case synonymy I: partitive and second locative",
  topicIds: ["c2-u01-partitive-locative"],
  lessons: [
    {
      id: "c2-u01-l1",
      title: "Partitive genitive in -у / -ю",
      topicIds: ["c2-u01-partitive-locative"],
      vocab: ["чай", "сахар", "суп", "сыр", "коньяк", "пломбир", "варенье", "мёд", "шаг", "свет"],
      grammar: [
        {
          title: "One noun, two genitives",
          body: `Mass nouns used as an indefinite quantity often have a second, colloquial genitive in -у/-ю: При́сыпать са́хару (add some sugar) vs мешо́к са́хара (a sack of sugar as a type). The -у form = a portion; the -а form = the kind or class.

Mass nouns used as *an indefinite quantity* often have a second, colloquial genitive in **-у/-ю**:
- Both: ча́шка **ча́ю** / ча́шка **ча́я** — but only ча́й meaning the type of tea (сорт ча́я, NOT сорт ча́ю).
- «При́сыпать са́хару» (add some sugar) vs «мешо́к са́хара» (a sack of sugar as a substance/type).
The -у form = *a portion of it*; the -а form = *the kind / the whole class*.`,
          why: "The partitive -у is a survival of a special 'portion' case. It lives only with indefinite quantities — the moment you mean the type or the whole class, regular -а returns. Сорт ча́ю is impossible; сорт ча́я is required.",

          table: {
            headers: ["Partitive (-у/-ю)", "Regular genitive (-а/-я)"],
            rows: [
              ["насыпать сахару — add some sugar", "сорт сахара — a kind of sugar"],
              ["выпить коньяку — have some cognac", "бутылка коньяка — a bottle of cognac"],
              ["купить сыру — buy some cheese", "головка сыра — a head of cheese"],
              ["из дому — from home (colloquial)", "из дома — from the house (building)"],
            ],
          },
          tip: "Only imperfective-quantity contexts allow -у: «вы́пить ча́ю» (some tea) but «вы́пить всю ча́йну́ю церемонию…» — abstract rule: portion vs type.",
        },
      ],
      exercises: [
        {
          id: "c2-u01-l1-e1",
          type: "single",
          text: "Хо́чешь ___? (some tea)",
          options: [{ id: "a", label: "чаю" }, { id: "b", label: "чая" }], answer: "a",
          explanation: "Indefinite portion → partitive ча́ю.",
        },
        {
          id: "c2-u01-l1-e2",
          type: "single",
          text: "Этот сорт ___ растёт в Индии.",
          options: [{ id: "a", label: "чаю" }, { id: "b", label: "чая" }], answer: "b",
          explanation: "Type/kind of tea → regular genitive ча́я.",
        },
        {
          id: "c2-u01-l1-e3",
          type: "true-false",
          text: "«Из дому» and «из дома» both exist, with a colloquial/formal nuance split.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u01-l2",
      title: "Second locative: в лесу, на полу, в году",
      topicIds: ["c2-u01-partitive-locative"],
      vocab: ["лес", "пол", "угол", "мост", "берег", "год", "отпуск", "порт", "сад", "круг"],
      grammar: [
        {
          title: "The stressed -у́ locative",
          body: `Masculine place-nouns have a second prepositional in stressed -у́ after в/на: в лесу́, на полу́, в углу́, на мосту́, в году́. But about-ness keeps regular -е: о ле́се (about the forest).

Masculine nouns for *place/enclosure* have a second prepositional in stressed **-у́** used only after в/на:
- **в лесу́** (in the forest), **на полу́** (on the floor), **в углу́** (in the corner), **на мосту́**, **в году́** (in the year — fixed).
- Regular -е means *about / in respect of*: **о ле́се** (about the forest), **в ле́те**... compare **в году́** (in such-and-such year) vs **о го́де** (about the year).`,
          why: "The -у́ locative is the last living trace of a separate Proto-Slavic locative case. It survives only in WHERE-IS-IT contexts after в/на — the moment you talk ABOUT the noun (о + prep), regular -е returns. Location keeps the ancient form; reference uses the modern one.",

          table: {
            headers: ["About (regular -е)", "Located in (stressed -у́)"],
            rows: [
              ["о лесе — about the forest", "в лесу — in the forest"],
              ["об угле — about the angle", "в углу — in the corner"],
              ["на berеге… на берегу — on the shore (both)", "в году 2020-м — in the year 2020"],
            ],
          },
          tip: "Roughly 30 nouns have this form (лес, сад, пол, угол, мост, берег, порт, год, отпуск…). Some now prefer -е in careful style (в отпуске/в отпуску both heard).",
        },
      ],
      exercises: [
        {
          id: "c2-u01-l2-e1",
          type: "single",
          text: "Де́ти игра́ют ___ саду́. (in the garden — second locative)",
          options: [{ id: "a", label: "в" }, { id: "b", label: "на" }], answer: "a",
          explanation: "в саду́ — stressed locative of сад.",
        },
        {
          id: "c2-u01-l2-e2",
          type: "fill-blank",
          text: "Кни́га лежи́т на ___ . *(floor — stressed locative)*",
          answers: ["полу"],
        },
        {
          id: "c2-u01-l2-e3",
          type: "fill-blank",
          text: "В ___ две ты́сячи два́дцать пя́том году́. *(in the year 2025)*",
          answers: ["году"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u01-l3",
      title: "Meaning splits: в отпуске vs в отпуску, на дому vs на доме",
      topicIds: ["c2-u01-partitive-locative"],
      vocab: ["отпуск", "отпускной", "домашний", "наряд", "строительство", "цех", "плафон", "обшлаг", "рукав", "нос"],
      grammar: [
        {
          title: "When both forms live but differ",
          body: `Some nouns carry both locatives with a style or meaning split: в о́тпуске (neutral) vs в о́тпуску (colloquial); рабо́тать на дому́ (from home) vs что-то на до́ме (on the building); and figurative на носу́ (imminent).

Some nouns carry BOTH locatives with a style or meaning split:
- **в о́тпуске** (neutral/administrative) vs **в о́тпуску** (colloquial).
- **на носу́** (on the nose — located) vs **о но́се** (about the nose); **на носу́** figurative = looming: «экза́мен на носу́».
- **на дому́** = at home (work location: рабо́тать на дому́) vs **на до́ме** = on the building (печная труба́ на до́ме).`,
          why: "When two forms coexist, style or metaphor assigns them: -у́ forms drift toward colloquial speech and fixed figurative meanings (экза́мен на носу́). The dictionary notes both; conversation chooses by register.",
          examples: [
            { ru: "Он рабо'тает на дому'.", en: "He works from home." },
            { ru: "Экза'мен на носу', а он гуля'ет.", en: "The exam is imminent, and he's out strolling." },
          ],
          tip: "The -у́ locative belongs to WHERE-IS-IT contexts. The moment you talk ABOUT the noun (о + prep), it's always regular -е.",
        },
      ],
      exercises: [
        {
          id: "c2-u01-l3-e1",
          type: "single",
          text: "Она́ seйча́с ___ отпуске. (neutral/administrative style)",
          options: [{ id: "a", label: "в" }, { id: "b", label: "на" }], answer: "a"
        },
        {
          id: "c2-u01-l3-e2",
          type: "single",
          text: "«Рабо́тать на дому́» means:",
          options: [{ id: "a", label: "to work from home" }, { id: "b", label: "to work on the roof" }], answer: "a"
        },
        {
          id: "c2-u01-l3-e3",
          type: "true-false",
          text: "The -у́ locative appears only after the prepositions в and на.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u01-test-1",
      type: "single",
      text: "Дайте мне ___ (some sugar — indefinite portion):",
      options: [{ id: "a", label: "сахару" }, { id: "b", label: "сахара only" }], answer: "a",
      explanation: "Both exist; -у highlights the indefinite portion.",
    },
    {
      id: "c2-u01-test-2",
      type: "single",
      text: "Keys lie ___ (on the floor):",
      options: [{ id: "a", label: "на полу" }, { id: "b", label: "на поле" }], answer: "a"
    },
    {
      id: "c2-u01-test-3",
      type: "short-answer",
      text: "In the year 2020: «в две ты́сячи два́дцатом ___»",
      answer: "году",
    },
    {
      id: "c2-u01-test-4",
      type: "true-false",
      text: "«о лесу» is correct for “about the forest”.",
      answer: false,
      explanation: "About = о ле́се; located = в лесу́.",
    },
  ],
};
