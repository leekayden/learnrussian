import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 8 — Syntax of emphasis. */
export const u08: Unit = {
  id: "c2-u08",
  level: "c2",
  number: 8,
  title: "Emphasis: double negation, ellipsis, parcellation",
  topicIds: ["c2-u08-emphasis-syntax"],
  lessons: [
    {
      id: "c2-u08-l1",
      title: "Double negation and emphatic genitive",
      topicIds: ["c2-u08-emphasis-syntax"],
      vocab: ["покой", "душа", "шаг", "слово", "вопрос", "сомнение", "тень", "звук", "след", "надежда"],
      grammar: [
        {
          title: "ни + genitive as pure emphasis",
          body: `With no verb in sight, **ни + genitive** intensifies: 
- **Ни ша́гу наза́д!** — Not one step back!
- **Ни звука́.** — Not a sound. **Ни сло́ва пра́вды.** — Not a word of truth.
After a negated verb: **ни одного́ / ни разу́ / ни копе́йки** — total absence. «Не сказа́л ни сло́ва» (didn't say a word).`,
          examples: [
            { ru: "Ни мину'ты поко'я!", en: "Not a minute of peace!" },
          ],
          tip: "Emphatic genitive can even replace «не было»: «Ни сле́да не оста́лось» = trace(s) — both ni- and verb-negation stack freely.",
        },
      ],
      exercises: [
        {
          id: "c2-u08-l1-e1",
          type: "single",
          text: "Not a step back! — ___ шагу назад!",
          options: [{ id: "a", label: "Ни" }, { id: "b", label: "Не" }], answer: "a"
        },
        {
          id: "c2-u08-l1-e2",
          type: "single",
          text: "He didn't say a word: он не сказа́л ___ (ни слова / слово)",
          options: [{ id: "a", label: "ни слова" }, { id: "b", label: "не слово" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u08-l2",
      title: "Ellipsis and parcellation in speech",
      topicIds: ["c2-u08-emphasis-syntax"],
      vocab: ["разговор", "пауза", "жест", "взгляд", "реплика", "фраза", "интонация", "акцент", "темп", "пауза"],
      grammar: [
        {
          title: "Broken sentences are grammar too",
          body: `Spoken Russian thrives on cut syntax:
- **Ellipsis**: «Мне бы ко́фе. И что-нибу́дь к ча́ю.» (no verbs)
- **Parcellation** (parcelled-off fragments): «Он пришёл. Поздно. Опять.» — each fragment a separate sentence for punch.
- **Question-reply echo**: «— Ты куда́? — К Ма́ше.»
Punctuation in writing mirrors intonation in speech.`,
          examples: [
            { ru: "Он пришёл. Поздно. Опя'ть.", en: "He turned up. Late. Again." },
          ],
          tip: "Parcellation is a STYLISTIC device: fine in prose and speech, wrong in academic writing.",
        },
      ],
      exercises: [
        {
          id: "c2-u08-l2-e1",
          type: "single",
          text: "«Он пришёл. Поздно.» is an example of:",
          options: [{ id: "a", label: "parcellation" }, { id: "b", label: "double negation" }], answer: "a"
        },
        {
          id: "c2-u08-l2-e2",
          type: "single",
          text: "«Мне бы кофе» lacks:",
          options: [{ id: "a", label: "a verb" }, { id: "b", label: "a subject only" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u08-test-1",
      type: "single",
      text: "Emphatic: ___ звука!",
      options: [{ id: "a", label: "Ни" }, { id: "b", label: "Не" }], answer: "a"
    },
    {
      id: "c2-u08-test-2",
      type: "single",
      text: "Cut-off fragments for punch is called:",
      options: [{ id: "a", label: "parcellation" }, { id: "b", label: "gradation" }], answer: "a"
    },
    {
      id: "c2-u08-test-3",
      type: "true-false",
      text: "Ellipsis is acceptable in formal academic prose.",
      answer: false,
    },
  ],
};
