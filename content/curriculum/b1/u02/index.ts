import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 2 — Adjective plurals and adjectival nouns, one step at a time. */
export const u02: Unit = {
  id: "b1-u02",
  level: "b1",
  number: 2,
  title: "Adjectives in every case; больной becomes a noun",
  topicIds: ["b1-u02-adj-plurals"],
  lessons: [
    {
      id: "b1-u02-l1",
      title: "Step 1: adjective plural — nominative & accusative",
      topicIds: ["b1-u02-adj-plurals"],
      vocab: ["новый", "молодой", "старый", "русский", "иностранный", "знаменитый", "интересный", "книга", "вопрос", "письмо"],
      grammar: [
        {
          title: "-ые / -ие, and the animate split",
          body: `In A2 you declined adjectives in three cases; B1 adds the plural and the remaining cases, completing the grid. The good news: plural adjective endings are identical for all three genders — the noun alone decides -ые vs -ие.- Nominative plural: **-ые/-ие** (но́вые, ру́сские)
- Accusative plural **inanimate** = nominative: Я чита́ю но́вые кни́ги.
- Accusative plural **animate** = genitive: Я встрети́л **но́вых** студе́нтов.`,
          why: "One plural for all genders is the exception that proves the rule: the plural endings come from a different, older declension that never cared about gender. Singular agreement is three systems; plural agreement is one. Half the forms you feared are shared.",

          table: {
            headers: ["Case", "Form"],
            rows: [
              ["nom pl", "новые"],
              ["acc pl (inan)", "новые"],
              ["acc pl (anim)", "новых"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u02-l1-e1",
          type: "single",
          text: "Я чита́ю ___. (но́вые журна́лы)",
          options: [{ id: "a", label: "новые" }, { id: "b", label: "новых" }], answer: "a",
        },
        {
          id: "b1-u02-l1-e2",
          type: "single",
          text: "Она́ встрети́ла ___. (но́вые студе́нты)",
          options: [{ id: "a", label: "новых" }, { id: "b", label: "новые" }], answer: "a",
        },
        {
          id: "b1-u02-l1-e3",
          type: "true-false",
          text: "Animate accusative plural of adjectives = genitive plural form.",
          answer: true,
        },
      ],
      drills: [{ kind: "adjective-case", count: 4, cases: ["acc"] }],
    },
    {
      id: "b1-u02-l2",
      title: "Step 2: adjective plural — oblique cases",
      topicIds: ["b1-u02-adj-plurals"],
      vocab: ["довольный", "результат", "объяснять", "молодой", "учитель", "говорить", "заниматься", "спорт", "интересный", "люди"],
      grammar: [
        {
          title: "-ым / -ыми / -ых",
          body: `The oblique cases (dative, instrumental, prepositional) reuse one ending set across the plural — the adjectives simply follow their nouns, which you already decline from A2 Unit 3-5.- **Dative: -ым/-им** (но́вым, си́ним): Он объясня́ет **но́вым** студе́нтам.
- **Instrumental: -ыми/-ими** (но́выми, си́ними): Я дово́лен **но́выми** результа́тами.
- **Prepositional: -ых/-их** (о но́вых, в си́них)`,
          why: "Same logic as the nouns themselves: dative/instrumental/prepositional plurals collapsed all genders into -ам/-ями/-ах centuries ago. Adjectives followed their nouns. Learn the noun ending and the adjective ending is its twin.",

          table: {
            headers: ["Case", "Form", "Example"],
            rows: [
              ["dat", "новым", "к новым студентам"],
              ["inst", "новыми", "доволен новыми"],
              ["prep", "новых", "о новых книгах"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u02-l2-e1",
          type: "fill-blank",
          text: "Я дово́лен ___ результа́тами. *(но́вые — instrumental)*",
          answers: ["новыми"],
        },
        {
          id: "b1-u02-l2-e2",
          type: "single",
          text: "Он объясня́ет ___. (мо́лодые студе́нты, dative)",
          options: [{ id: "a", label: "молодым студентам" }, { id: "b", label: "молодыми студентами" }], answer: "a",
        },
        {
          id: "b1-u02-l2-e3",
          type: "true-false",
          text: "Instrumental plural: -ыми/-ими.",
          answer: true,
        },
      ],
      drills: [{ kind: "adjective-case", count: 4, cases: ["inst", "dat", "prep"] }],
    },
    {
      id: "b1-u02-l3",
      title: "Step 3: adjectival nouns — бо́льной, взро́слый, столо́вая",
      topicIds: ["b1-u02-adj-plurals"],
      vocab: ["больной", "больница", "взрослый", "учёный", "рабочий", "гостиница", "столовая", "ванная", "свежий", "лекарство"],
      grammar: [
        {
          title: "Adjectives that became nouns",
          body: `Russian is full of adjectives that became nouns outright: больной (a patient), учёный (a scientist), гостиная (a living room). They keep ADJECTIVE endings while working as nouns — a hybrid English only manages with phrases like 'the rich'.Substantivised adjectives keep ADJECTIVE endings:
- **бо́льной / бо́льная** — a patient: Бо́льным ну́жно лека́рство. (dative!)
- **взро́слый** — an adult: кни́га для взро́слых (gen pl)
- **учёный** — scientist; **рабо́чий** — worker
- Rooms: гости́ная, ва́нная, столо́вая (living room / bathroom / canteen)`,
          why: "Substantivised adjectives are productive: any adjective describing a class of people can be promoted to noun status. Because the endings already carry case, no new paradigm is needed — dlya bol'nogo is just the adjective in genitive.",
          examples: [
            { ru: "Больны'м ну'жно принима'ть лека'рство.", en: "Patients need to take medicine." },
          ],
          tip: "Для бо́льного (gen) — the adjective declines, not a noun like больница.",
        },
      ],
      exercises: [
        {
          id: "b1-u02-l3-e1",
          type: "single",
          text: "Э́тот фильм не для ___. (де́ти)",
          options: [{ id: "a", label: "детей" }, { id: "b", label: "детям" }], answer: "a",
        },
        {
          id: "b1-u02-l3-e2",
          type: "single",
          text: "«столо́вая» can mean both “the canteen” and “the dining room”.",
          options: [{ id: "a", label: "true" }, { id: "b", label: "false" }], answer: "a",
        },
        {
          id: "b1-u02-l3-e3",
          type: "true-false",
          text: "Adjectival nouns decline with noun endings (-а, -у).",
          answer: false,
          explanation: "They keep ADJECTIVE endings: бо́льному, бо́льных.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u02-test-1", type: "single",
      text: "Я говорю́ с ___. (мо́лодые учи́теля́)",
      options: [{ id: "a", label: "молодыми учителями" }, { id: "b", label: "молодых учителей" }], answer: "a",
    },
    {
      id: "b1-u02-test-2", type: "true-false",
      text: "«для бо́льного» — genitive of the adjectival noun.",
      answer: true,
    },
    {
      id: "b1-u02-test-3", type: "short-answer",
      text: "Instrumental plural of си́ний:",
      answer: "синими",
    },
  ],
};
