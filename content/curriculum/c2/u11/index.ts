import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 11 — Stylistic editing. */
export const u11: Unit = {
  id: "c2-u11",
  level: "c2",
  number: 11,
  title: "Stylistic editing: shifting registers on demand",
  topicIds: ["c2-u11-stylistic-editing"],
  lessons: [
    {
      id: "c2-u11-l1",
      title: "Colloquial → formal rewriting",
      topicIds: ["c2-u11-stylistic-editing"],
      vocab: ["деньги", "купить", "сказать", "бедненький", "товар", "приобрести", "сообщить", "заявить", "малыш", "ребёнок"],
      grammar: [
        {
          title: "The synonymic ladder",
          body: `Register is a choice of SYNONYMS plus syntax:
- colloquial: **купи́ть / си́нуть / де́ньги** → neutral: **приобрести́ / потра́тить / сре́дства** → formal-official: **израсхо́довать фина́нсовые сре́дства**.
- «он че́сал язы́к» (idle chatter) → «он вёл пусты́е бесе́ды».
- Ellipsis and parcellation disappear in formal style; participles and passive appear.`,
          table: {
            headers: ["Colloquial", "Neutral", "Formal"],
            rows: [
              ["купить", "приобрести", "израсходовать средства"],
              ["сказать", "сообщить", "заявить / уведомить"],
              ["малыш", "ребёнок", "несовершеннолетний"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c2-u11-l1-e1",
          type: "single",
          text: "Most formal for «купи́ть»:",
          options: [{ id: "a", label: "приобрести" }, { id: "b", label: "купить" }], answer: "a"
        },
        {
          id: "c2-u11-l1-e2",
          type: "single",
          text: "«Де́ньги» in a bank document becomes:",
          options: [{ id: "a", label: "денежные средства" }, { id: "b", label: "денюжки" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u11-l2",
      title: "Paraphrase mastery: five ways to say one thing",
      topicIds: ["c2-u11-stylistic-editing"],
      vocab: ["намерение", "собираться", "намереваться", "планировать", "решиться", "созреть", "замышлять", "помышлять", "думать", "отъезд"],
      grammar: [
        {
          title: "Intention, five registers deep",
          body: `«He is going to leave»:
1. Neutral: **Он собира́ется уехать.**
2. Formal: **Он наме́ревается уехать.**
3. Deliberate: **Он реши́лся на отъе́зд.**
4. Bookish: **Он по́мыслил уехать.** (ironic/archaic)
5. Bureaucratic: **Им плани́руется отъе́зд.** (passive-impersonal)
Each variant drags its own case/aspect furniture with it — that's why paraphrase is grammar.`,
        },
      ],
      exercises: [
        {
          id: "c2-u11-l2-e1",
          type: "single",
          text: "Bureaucratic version of «он собира́ется уехать»:",
          options: [{ id: "a", label: "им планируется отъезд" }, { id: "b", label: "он в отъезд собрался" }], answer: "a"
        },
        {
          id: "c2-u11-l2-e2",
          type: "single",
          text: "«реши́лся на отъе́зд» governs ___:",
          options: [{ id: "a", label: "на + accusative" }, { id: "b", label: "infinitive" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u11-test-1",
      type: "single",
      text: "Formal for «сказа́ть»:",
      options: [{ id: "a", label: "сообщить/заявить" }, { id: "b", label: "болтать" }], answer: "a"
    },
    {
      id: "c2-u11-test-2",
      type: "single",
      text: "«Он намерева́ется уехать» is:",
      options: [{ id: "a", label: "formal/neutral" }, { id: "b", label: "slang" }], answer: "a"
    },
    {
      id: "c2-u11-test-3",
      type: "true-false",
      text: "Paraphrase changes grammar furniture (cases, aspects) along with vocabulary.",
      answer: true,
    },
  ],
};
