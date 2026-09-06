import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 2 — Adjective & pronoun plural declension; adjectival nouns. */
export const u02: Unit = {
  id: "b1-u02",
  level: "b1",
  number: 2,
  title: "Adjectives in every case; больной becomes a noun",
  topicIds: ["b1-u02-adj-plurals"],
  lessons: [
    {
      id: "b1-u02-l1",
      title: "Adjective plural + feminine/masculine grids",
      topicIds: ["b1-u02-adj-plurals"],
      vocab: ["молодой", "старый", "богатый", "бедный", "счастливый", "усталый", "больной", "знаменитый", "русский", "иностранный"],
      grammar: [
        {
          title: "The adjective grid",
          body: `Adjectives agree fully. The dictionary gives you the whole grid (see any adjective page). Key plural endings:
- **nom pl: -ые/-ие** (но́вые, си́ние)
- **gen/acc-animate pl: -ых/-их** (но́вых, си́них)
- **dat pl: -ым/-им**
- **inst pl: -ыми/-ими**
- **prep pl: -ых/-их** (о но́вых)
Feminine singular: -ая/-ой/-ую/-ой/-ой; masculine singular: -ый/-ого/-ому/-ый|ого/-ом.`,
          table: {
            caption: "новый (hard) — learn -ым/-ого patterns, the rest follows",
            headers: ["Case", "m sg", "f sg", "pl"],
            rows: [
              ["nom", "новый", "новая", "новые"],
              ["gen", "нового", "новой", "новых"],
              ["dat", "новому", "новой", "новым"],
              ["acc (inan)", "новый", "новую", "новые"],
              ["acc (anim)", "нового", "новую", "новых"],
              ["inst", "новым", "новой", "новыми"],
              ["prep", "новом", "новой", "новых"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u02-l1-e1",
          type: "fill-blank",
          text: "Я дово́лен {{blank}} результа́тами. *(новые — instrumental plural)*",
          answers: ["новыми"],
        },
        {
          id: "b1-u02-l1-e2",
          type: "single",
          text: "Он объясня́ет ___. (мо́лодым студе́нтам)",
          options: [{ id: "a", label: "молодым студентам" }, { id: "b", label: "молодыми студентами" }], answer: "a"
        },
      ],
      drills: [{ kind: "adjective-case", count: 6 }],
    },
    {
      id: "b1-u02-l2",
      title: "Adjectival nouns: adjectives that became nouns",
      topicIds: ["b1-u02-adj-plurals"],
      vocab: ["больной", "больница", "взрослый", "учёный", "рабочий", "гостиница", "столовая", "ванная", "свежий"],
      grammar: [
        {
          title: "When adjectives become nouns",
          body: `Substantivised adjectives decline like adjectives but behave as nouns:
- **бо́льной / бо́льная** — a patient (m/f): Бо́льной ну́жно о́тдыха́ть. (dative!)
- **взро́слый / взро́слая** — an adult: Э́та кни́га для взро́слых. (gen pl)
- **учёный** — a scientist, **рабо́чий** — a worker.
- Rooms: гости́ная (living room), ва́нная (bathroom), столо́вая (canteen) — all feminine -ая.`,
          examples: [
            { ru: "Больны'м ну'жно принима'ть лека'рство.", en: "Patients need to take medicine." },
          ],
          tip: "Adjectival nouns keep ADJECTIVE endings, so «больной» (dative) looks different from «больница» (a noun).",
        },
      ],
      exercises: [
        {
          id: "b1-u02-l2-e2",
          type: "single",
          text: "Э́тот фильм не для ___. (де́ти)",
          options: [{ id: "a", label: "детей" }, { id: "b", label: "детям" }], answer: "a"
        },
        {
          id: "b1-u02-l2-e3",
          type: "true-false",
          text: "«столо́вая» can mean both “the canteen” and “the dining room”.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u02-test-1",
      type: "single",
      text: "Я говоря́ с ___ (мо́лодые учи́теля́, inst pl)",
      options: [{ id: "a", label: "молодыми учителями" }, { id: "b", label: "молодых учителей" }], answer: "a"
    },
    {
      id: "b1-u02-test-2",
      type: "true-false",
      text: "«Бо́льной needs genitive after для»: для бо́льного.",
      answer: true,
    },
    {
      id: "b1-u02-test-3",
      type: "short-answer",
      text: "Inst pl of си́ний: (с си́ними…) — give the ending word си́ними.",
      answer: "синими",
    },
  ],
};
