import type { Unit } from "@/lib/curriculum/types";

/** B1 · Unit 6 — Conditional: бы + past. */
export const u06: Unit = {
  id: "b1-u06",
  level: "b1",
  number: 6,
  title: "бы: wishing, condition, polite requests",
  topicIds: ["b1-u06-conditional"],
  lessons: [
    {
      id: "b1-u06-l1",
      title: "если бы… то бы: unreal conditions",
      topicIds: ["b1-u06-conditional"],
      vocab: ["случай", "возможность", "желание", "просьба", "предложение", "отказ", "согласие", "жаль", "ради", "условие"],
      grammar: [
        {
          title: "бы + past = hypothetical",
          body: `The particle бы + past tense builds the conditional: Если бы у меня́ было вре́мя, я бы пришёл. Notice бы floats freely around the clause — «я бы пришёл» and «я пришёл бы» are the same. The past tense after бы is NOT about the past; it is about unreality.The particle **бы** + past tense makes anything hypothetical:
- Если бы у меня́ бы́ло вре́мя, я бы пришёл. — If I had time, I would come.
- Я бы купи́л маши́ну. — I would buy a car. (бы can float: Я купи́л бы…)
бы never changes — the PAST verb carries gender/number: Она́ бы сказа́ла.`,
          why: "бы is a fossil of the old aorist of быть ('was'). Hypotheticals are imagined pasts of possible worlds — so Russian recruits the past form and marks the whole scene as unreal with this tiny particle. English split the job between 'would' and 'had'; Russian has one word.",

          table: {
            headers: ["Real (если + pres/past)", "Unreal (если бы + past)"],
            rows: [
              ["Если будет время, я приду", "Если бы было время, я бы пришёл"],
              ["Если он позвонит, скажи ему", "Если бы он позвонил, я бы сказал"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "b1-u06-l1-e1",
          type: "single",
          text: "Если бы я ___, я бы купи́л дачу.",
          options: [{ id: "a", label: "заработал" }, { id: "b", label: "заработаю" }], answer: "a"
        },
        {
          id: "b1-u06-l1-e2",
          type: "fill-blank",
          text: "На ва́шем ме́сте я ___ больше занима́ться. *(бы)*",
          answers: ["бы"],
        },
        {
          id: "b1-u06-l1-e3",
          type: "true-false",
          text: "бы agrees with gender: «она́ бы сказа́ла».",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 4 }],
    },
    {
      id: "b1-u06-l2",
      title: "Polite requests and wishes",
      topicIds: ["b1-u06-conditional"],
      vocab: ["нравиться", "хотеться", "скоро", "милость", "попросить", "предложить", "отказаться", "соглашаться", "ради", "манера"],
      grammar: [
        {
          title: "Softer than the imperative",
          body: `бы also softens requests: Не мог бы ты мне помо́чь? is noticeably politer than Не можешь помо́чь? And Мне хоте́лось бы (I would like) beats Я хочу for ordering and asking.- **Не мог бы ты…?** — Could you…? (polite!)
- **Мне хоте́лось бы** — I would like (also: я хоте́л бы).
- **Хороши́ бы… / жаль** — set uses.
- Wishes: Если бы (только) за́втра была́ суббо́та! — If only tomorrow were Saturday!`,
          why: "The mechanism is distance: by pushes the request into an imagined world, so the speaker never demands anything in the real one. Same politeness logic as English 'could you' vs 'can you' — grammatical distancing buys social softness.",
          examples: [
            { ru: "Не мог бы ты мне помо'чь?", en: "Could you help me?" },
            { ru: "Мне хоте'лось бы ча'ю.", en: "I would like some tea." },
          ],
          tip: "Дative + хоте́лось бы: Мне / Ей / Нам хоте́лось бы… The infinitive follows without чтобы: Мне хоте́лось бы пое́хать.",
        },
      ],
      exercises: [
        {
          id: "b1-u06-l2-e1",
          type: "single",
          text: "___ бы ты откры́ть окно́?",
          options: [{ id: "a", label: "Не мог" }, { id: "b", label: "Не можешь" }], answer: "a"
        },
        {
          id: "b1-u06-l2-e2",
          type: "fill-blank",
          text: "Мне ___ съездить в Грузию. *(I'd like to travel to Georgia — хоте́лось)*",
          answers: ["хотелось бы"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "b1-u06-test-1",
      type: "single",
      text: "Если бы я ___, я бы позво́нил.",
      options: [{ id: "a", label: "знал" }, { id: "b", label: "знаю" }], answer: "a"
    },
    {
      id: "b1-u06-test-2",
      type: "single",
      text: "Polite request: ___ бы вы откры́ть окно́?",
      options: [{ id: "a", label: "Не могли" }, { id: "b", label: "Не можете" }], answer: "a"
    },
    {
      id: "b1-u06-test-3",
      type: "true-false",
      text: "бы changes for person: я бы́ / ты бы́.",
      answer: false,
    },
    {
      id: "b1-u06-test-4",
      type: "short-answer",
      text: "If I had money, I would travel: (Если бы…)",
      answer: "если бы у меня были деньги я бы путешествовал",
      accept: ["если бы у меня были деньги я бы путешествовала"],
    },
  ],
};
