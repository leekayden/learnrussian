import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 3 — Passive voice, one step at a time. */
export const u03: Unit = {
  id: "b2-u03",
  level: "b2",
  number: 3,
  title: "Passive constructions in the wild",
  topicIds: ["b2-u03-passive-syntax"],
  lessons: [
    {
      id: "b2-u03-l1",
      title: "Step 1: short participle + agent instrumental",
      topicIds: ["b2-u03-passive-syntax"],
      vocab: ["письмо", "решение", "проект", "автор", "архитектор", "комиссия", "правительство", "закон", "документ", "соглашение"],
      grammar: [
        {
          title: "Patient + short participle + agent",
          body: `Short participles are predicates: Кни́га прочи́тана (the book HAS BEEN read). Long participles are attributes: прочи́танная кни́га (a read book — descriptor). The pair рассе́янный/рассе́ян shows the split: absent-minded (trait) vs scattered (state).Pattern: **Patient + short participle (+ agent instrumental)**:
- Письмо́ **напи́сано** (автором). — The letter was written (by the author).
- Решéние **бы́ло при́нято** коми́ссией. — The decision was taken by the commission.
Short forms only in predicates; long forms only inside noun phrases (на́писанное письмо́).`,
          plain: `To say that something was done, put the thing first and use the short done-form: письмо написано. If you name the doer, it comes at the end with a changed ending.`,
          why: "Short forms only in predicates; long forms only inside noun phrases. The agent instrumental (napisano pisatelem) is the Russian equivalent of English 'by the author' — except it works for every passive, not just formal ones.",
          examples: [
            { ru: "Дома' постро'ены в про'шлом ве'ке.", en: "The houses were built in the last century." },
          ],
          tip: "Only perfective passives have short forms (напи́сано). Imperfective passives use -ся: Письмо́ пи́шется.",
        },
      ],
      exercises: [
        {
          id: "b2-u03-l1-e1",
          type: "single",
          text: "Зако́н был ___ парла́ментом. (приня́ть)",
          options: [{ id: "a", label: "принят" }, { id: "b", label: "принятый" }], answer: "a",
        },
        {
          id: "b2-u03-l1-e2",
          type: "fill-blank",
          text: "Мост ___ в 2010 году́. *(was built)*",
          answers: ["построен"],
        },
        {
          id: "b2-u03-l1-e3",
          type: "true-false",
          text: "Agent goes instrumental: «напи́сано писа́телем».",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "b2-u03-l2",
      title: "Step 2: imperfective passive in -ся",
      topicIds: ["b2-u03-passive-syntax"],
      vocab: ["письмо", "писаться", "строить", "строиться", "продавать", "продаваться", "процесс", "выпускать", "производство", "автомобиль"],
      grammar: [
        {
          title: "Ongoing passives use -ся",
          body: `Imperfective passives use -ся instead: Письмо́ пи́шется (the letter is being written), Здесь продаю́тся фру́кты. Only perfective verbs earn short participle forms — a process can't have a completed-result form.- Imperfective passive = **-ся** on the verb, thing as subject:
- Письмо́ **пи́шется**. — The letter is being written.
- Здесь **продаю́тся** фру́кты. — Fruit is sold here.
- Автомоби́ли **выпуска́ются** заво́дом. — Cars are produced by the factory (agent instrumental also with -ся!).`,
          plain: `Add -ся to say a thing is being done or gets done in general; the short form appears only for a finished result. Дом строится versus дом построен — now versus done.`,
          why: "The aspect system polices the passive twice over: -ся passives are imperfective (ongoing/general), short participles are perfective (completed result). Choosing between them is the same 'process vs done' question you first met in A2 Unit 7 — now in the passive voice.",

          table: {
            headers: ["Tense of action", "Form"],
            rows: [
              ["ongoing / general", "-ся (imperfective)"],
              ["completed result", "short participle (perfective)"],
            ],
          },
          tip: "«Дом строится» vs «Дом построен»: being built vs has been built.",
        },
      ],
      exercises: [
        {
          id: "b2-u03-l2-e1",
          type: "single",
          text: "Письмо́ ___ се́йчас. (is being written)",
          options: [{ id: "a", label: "пишется" }, { id: "b", label: "написано" }], answer: "a",
        },
        {
          id: "b2-u03-l2-e2",
          type: "single",
          text: "Мост ___ в 2010 году́. (completed)",
          options: [{ id: "a", label: "был построен" }, { id: "b", label: "строился" }], answer: "a",
        },
        {
          id: "b2-u03-l2-e3",
          type: "true-false",
          text: "«Дом строится» = the house is being built.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u03-test-1", type: "single",
      text: "Мост ___ в 2010 году́. (was built)",
      options: [{ id: "a", label: "был построен" }, { id: "b", label: "строился" }], answer: "a",
    },
    {
      id: "b2-u03-test-2", type: "short-answer",
      text: "The decision was taken: (Реше́ние…)",
      answer: "решение было принято",
    },
    {
      id: "b2-u03-test-3", type: "true-false",
      text: "Agent goes instrumental: «напи́сано писа́телем».",
      answer: true,
    },
  ],
};
