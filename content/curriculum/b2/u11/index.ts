import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 11 — Discourse: разно... register particles & colloquial vs formal. */
export const u11: Unit = {
  id: "b2-u11",
  level: "b2",
  number: 11,
  title: "Register: colloquial vs formal Russian",
  topicIds: ["b2-u11-register"],
  lessons: [
    {
      id: "b2-u11-l1",
      title: "Colloquial syntax and formal announcements",
      topicIds: ["b2-u11-register"],
      vocab: ["разве", "неужели", "авось", "наверное", "пожалуй", "допускаться", "соблюдаться", "объявление", "инструкция", "заявление"],
      grammar: [
        {
          title: "Two registers, two grammars",
          body: `**Colloquial**: questions with ра́зве / неуже́ли (Ра́зве ты не знал?); эллипсис (Мне бы ко́фе!); particles.
**Formal**: impersonal official verbs — предполага́ется (it is assumed), сле́дует (one should), не допуска́ется (is not allowed); infinitive headlines (Построить мост к 2030 году́!); Set announcements: Тре́буется (Wanted), Ка́сса (Ticket office).`,
          examples: [
            { ru: "Не допуска'ется куре'ние.", en: "Smoking is not permitted." },
            { ru: "Ра'зве ты не слушал но'вости?", en: "Surely you didn't hear the news?" },
          ],
        },
      ],
      exercises: [
        {
          id: "b2-u11-l1-e1",
          type: "single",
          text: "Register check — which is formal?",
          options: [{ id: "a", label: "Не допускается вход" }, { id: "b", label: "Сюда нельзя" }], answer: "a"
        },
        {
          id: "b2-u11-l1-e2",
          type: "single",
          text: "Ра́зве he didn't know? = surprise that he DIDN'T.",
          options: [{ id: "a", label: "true" }, { id: "b", label: "false" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u11-test-1",
      type: "single",
      text: "Formal 'one should':",
      options: [{ id: "a", label: "следует" }, { id: "b", label: "надо бы" }], answer: "a"
    },
    {
      id: "b2-u11-test-2",
      type: "single",
      text: "«Мне бы ко́фе» is:",
      options: [{ id: "a", label: "colloquial ellipsis" }, { id: "b", label: "formal" }], answer: "a"
    },
    {
      id: "b2-u11-test-3",
      type: "true-false",
      text: "Headlines use infinitive constructions: «Открыть станцию к ма́ю».",
      answer: true,
    },
  ],
};
