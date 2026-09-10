import type { Unit } from "@/lib/curriculum/types";

/** C1 · Unit 8 — Ellipsis & discourse particles. */
export const u08: Unit = {
  id: "c1-u08",
  level: "c1",
  number: 8,
  title: "Ellipsis and the particle symphony",
  topicIds: ["c1-u08-ellipsis-particles"],
  lessons: [
    {
      id: "c1-u08-l1",
      title: "Мне бы кофе — grammar of omissions",
      topicIds: ["c1-u08-ellipsis-particles"],
      vocab: ["вряд", "едва", "чуть", "почти", "давать", "бросить", "опоздать", "успех", "риск", "надежда"],
      grammar: [
        {
          title: "Dropping the verb, keeping the case",
          body: `Emphatic genitive: Ни ша́гу наза́д! Ни звука́. Ни сло́ва пра́вды. — no verb needed; ни + genitive alone intensifies. After negated verbs: не сказа́л ни сло́ва — total absence stacked twice. Spoken Russian also cuts verbs: Мне бы ко́фе, Он пришёл. Поздно. Опя́ть.

Omissions leave visible case traces:
- **Мне бы ко́фе.** (I'd like coffee — dative + bare noun, no verb)
- **Ему́ не до э́того.** (He's got other concerns — prepositional idiom)
- **Что ему́ поте́рять?** (What does he have to lose — infinitive question)
Particles tune the mood: **вряд ли** (unlikely), **чуть не / едва́ не** (almost — with perfective past: Чуть не упа́л!), **а́вось** (hoping for the best).`,
          why: "ни + genitive paints TOTAL absence — zero units of the thing, no verb needed because the absence itself is the statement. And parcellation (broken-off fragments) builds rhythm English can only imitate with dashes: prose and speech yes, academic writing no. Register decides.",
          examples: [
            { ru: "Я чуть не опозда'л!", en: "I almost missed it!" },
            { ru: "Вряд ли он согласи'тся.", en: "He's unlikely to agree." },
          ],
          tip: "чуть не/едва не + PERFECTIVE past; «почти» + imperfective: почти́ па́дал vs чуть не упал.",
        },
      ],
      exercises: [
        {
          id: "c1-u08-l1-e1",
          type: "single",
          text: "Я ___ не опозда́л на по́езд!",
          options: [{ id: "a", label: "чуть" }, { id: "b", label: "почти не" }], answer: "a"
        },
        {
          id: "c1-u08-l1-e2",
          type: "single",
          text: "«Мне бы кофе» omits:",
          options: [{ id: "a", label: "the verb (я хотел бы)" }, { id: "b", label: "the object" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c1-u08-test-1",
      type: "single",
      text: "Almost fell: ___ не упал!",
      options: [{ id: "a", label: "Чуть" }, { id: "b", label: "Почти" }], answer: "a"
    },
    {
      id: "c1-u08-test-2",
      type: "single",
      text: "«вряд ли» means:",
      options: [{ id: "a", label: "unlikely" }, { id: "b", label: "certainly" }], answer: "a"
    },
  ],
};
