import type { Unit } from "@/lib/curriculum/types";

/** B2 · Unit 2 — Impersonal constructions. */
export const u02: Unit = {
  id: "b2-u02",
  level: "b2",
  number: 2,
  title: "Impersonal Russian: sentences without subjects",
  topicIds: ["b2-u02-impersonal"],
  lessons: [
    {
      id: "b2-u02-l1",
      title: "хочется, приходится, удавалось, стоит",
      topicIds: ["b2-u02-impersonal"],
      vocab: ["хотеться", "приходиться", "полагаться", "случаться", "обстоятельство", "необходимость", "возможность", "попытка", "решение", "надежда"],
      grammar: [
        {
          title: "The dative experiencer + impersonal verb",
          body: `Russian builds sentences without subjects: Мне хо́чется спать (lit. 'to-me wants-itself to-sleep'). The experiencer sits in the dative, the verb is impersonal, and nobody is the hero. The family: хо́чется (feel like), прихо́дится (have to, by circumstance), удаётся (manage to), сто́ит (be worth).Russian prefers agentless sentences: the person goes **dative**, the verb stays 3rd person:
- **Мне хо́чется спать.** — I feel like sleeping. (хо́чется/хоте́лось)
- **Ей прихо́дится рабо́тать ве́черами.** — She has to work evenings. (приходи́тся/пришло́сь/придё́тся)
- **Нам удало́сь дого́вори́ться.** — We managed to agree. (удава́ться/уда́стся)
- **Сто́ит поду́мать.** — It's worth thinking about. **Сле́дует учи́ть** — one should learn.`,
          plain: `When a feeling or a duty just happens to you, Russian says it with no subject: put the person in the to-whom form and leave the verb unchanged. Мне хочется — I feel like.`,
          why: "Impersonal constructions treat states as circumstances, not choices — nobody willed the sleepiness; it simply is. The dative experiencer (from A2: мне хо́лодно, мне 20 лет) extends to desires and obligations. B2 just makes the family tree visible.",

          table: {
            headers: ["Verb", "Meaning", "Example"],
            rows: [
              ["хочется", "feel like", "Мне хочется чаю"],
              ["приходиться", "have to (circumstances)", "Ему приходится ехать"],
              ["удаваться", "manage", "Нам удалось уйти"],
              ["стоит", "be worth", "Стоит попробовать"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b2-u02-l1-e1",
          type: "single",
          text: "Ей ___ рабо́тать в выходны́е. (has to — present)",
          options: [{ id: "a", label: "приходится" }, { id: "b", label: "пришлось" }], answer: "a"
        },
        {
          id: "b2-u02-l1-e2",
          type: "fill-blank",
          text: "Мне не ___ в это ве́рить. *(хо́чется)*",
          answers: ["хочется"],
        },
        {
          id: "b2-u02-l1-e3",
          type: "true-false",
          text: "«Мне придётся уйти́» — future of приходи́ться.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b2-u02-l2",
      title: "нет, жаль, лень, видно, пора + infinitives",
      topicIds: ["b2-u02-impersonal"],
      vocab: ["жаль", "лень", "видно", "слышно", "холодно", "жарко", "трудно", "легко", "пора", "время"],
      grammar: [
        {
          title: "Predicates of state",
          body: `The no-subject family keeps growing: Жаль вре́мени (pity about the time), Мне ле́нь встать (I can't be bothered), Отсюда́ ви́дно мо́ре (the sea is visible from here), Ему́ тру́дно говори́ть (it's hard for him to speak). English needs 'it is…for me'; Russian puts the dative first and drops the scaffolding.- **нет / не бы́ло + gen.**: Де́нег нет. Ра́ньше здесь не́ бы́ло метро́.
- **жа́ль + gen/inf**: Жаль вре́мени. Жа́ль уходи́ть.
- **ле́нь + inf** (colloquial): Мне ле́нь встава́ть. — I can't be bothered to get up.
- **видно / слы́шно**: Отсюда́ хорошо́ ви́дно мо́ре.
- **хо́лодно/тру́дно + dative**: Ему́ бы́ло тру́дно говори́ть.`,
          plain: `Words like жаль, лень and трудно do the job of a whole English phrase. Put the person first, add the state word, then the action — and drop it is hard for me entirely.`,
          why: "These predicates (zhal', len', vidno, trudno) are neither verbs nor adjectives in the English sense — they are state-words. The frame [dative + state-word + infinitive] replaces [it is X for me to Y] wholesale. Own the frame, own a hundred sentences.",
          examples: [
            { ru: "Мне ле'нь сегодня рабо'тать.", en: "I don't feel like working today." },
          ],
          tip: "The dative + predicative + infinitive pattern replaces English 'it is hard for me to…'.",
        },
      ],
      exercises: [
        {
          id: "b2-u02-l2-e1",
          type: "single",
          text: "___ бы́ло доро́ги. (not visible)",
          options: [{ id: "a", label: "Не было видно" }, { id: "b", label: "Не видел" }], answer: "a"
        },
        {
          id: "b2-u02-l2-e2",
          type: "fill-blank",
          text: "Жаль ___ вре́мя. *(waste — поте́рять gen? — жаль + gen: жаль вре́мени)*",
          answers: ["времени"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b2-u02-test-1",
      type: "single",
      text: "Мне не ___, что ты зде́сь. (I can't believe you're here — impersonal)",
      options: [{ id: "a", label: "верится" }, { id: "b", label: "верю" }], answer: "a",
      explanation: "Impersonal вери́тся: the doubting happens to me, dative me.",
    },
    {
      id: "b2-u02-test-2",
      type: "short-answer",
      text: "We finally managed to leave: (Нам…)",
      answer: "нам наконец удалось уйти",
    },
    {
      id: "b2-u02-test-3",
      type: "true-false",
      text: "«Мне ле́нь» is formal register.",
      answer: false,
    },
    {
      id: "b2-u02-test-4",
      type: "matching",
      text: "Match:",
      prompts: [
        { id: "p1", label: "прихо́дится" },
        { id: "p2", label: "хо́чется" },
        { id: "p3", label: "у́дало́сь" },
      ],
      responses: [
        { id: "r1", label: "manage to" },
        { id: "r2", label: "have to" },
        { id: "r3", label: "feel like" },
      ],
      answer: { p1: "r2", p2: "r3", p3: "r1" },
    },
  ],
};
