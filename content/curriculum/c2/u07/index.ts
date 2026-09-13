import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 7 — Particles and discourse markers. */
export const u07: Unit = {
  id: "c2-u07",
  level: "c2",
  number: 7,
  title: "Particles and the music of discourse",
  topicIds: ["c2-u07-particles-discourse"],
  lessons: [
    {
      id: "c2-u07-l1",
      title: "же, ли, ведь, уж in live speech",
      topicIds: ["c2-u07-particles-discourse"],
      vocab: ["частица", "удивление", "напоминание", "сомнение", "настаивать", "подчёркивать", "разговор", "тон", "смысл", "интонация"],
      grammar: [
        {
          title: "Tiny words, huge differences",
          body: `Particles do discourse work: же (reminder/contrast — Он же знал!), ли (embedded question — Знает ли он; or doubt), ведь (appeal to shared knowledge — Ведь я предупрежда́л!), уж (intensity — Уж он-то знает).

- **же** (after the word it targets): reminder/contrast — Он же́ знал! (He DID know!); the same же also = the same: тот же́.
- **ли** (2nd word of the clause): embedded yes/no question — Зна́ет ли он об э́том? / as emphasis: Что ж, посмо́трим.
- **ведь** — you know, after all: Ведь я предупрежда́л!
- **уж / ну** — intensity or resignation: Уж он-то зна́ет. Ну и ну!`,
          plain: `These tiny words are attitude knobs: Я же говорил means 'I told you so', ведь appeals to what you both know. Skip them and your Russian stays correct but emotionally flat.`,
          why: "Particles are position-sensitive: же attaches to the word it targets, ли sits second in the clause. They encode the speaker's attitude toward shared knowledge — Russian makes you declare whether your listener should already agree.",

          table: {
            headers: ["Particle", "Job", "Example"],
            rows: [
              ["же", "reminder / contrast", "Я же говорил"],
              ["ли", "embedded question / doubt", "Знает ли он"],
              ["ведь", "appeal to shared knowledge", "Ведь это ясно"],
              ["уж", "intensifier", "Уж он-то знает"],
            ],
          },
        },
      ],
      exercises: [
        {
          id: "c2-u07-l1-e1",
          type: "single",
          text: "«Он же знал» expresses:",
          options: [{ id: "a", label: "reminder/contrast: he DID know" }, { id: "b", label: "a polite request" }], answer: "a"
        },
        {
          id: "c2-u07-l1-e2",
          type: "single",
          text: "«Скажи́те, ___ будет встре́ча» (embedded question particle):",
          options: [{ id: "a", label: "ли" }, { id: "b", label: "же" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u07-l2",
      title: "Reported-speech particles: мол, де, -с",
      topicIds: ["c2-u07-particles-discourse"],
      vocab: ["мол", "де", "дескать", "свидетель", "отрицать", "жалоба", "шутка", "прибаутка", "чиновник", "фольклор"],
      grammar: [
        {
          title: "Distance markers",
          body: `Reported-speech particles distance the speaker from the claim: мол (he says), де (alleged — bureaucratic), дескать (supposedly, dismissive), and the pre-revolutionary clerk's -с (Нет-с).

- **мол** — he/she says (neutral distancing): Он мол знал заранее. — He says he knew in advance.
- **де** — alleged (older, bureaucratic): Он, де, при чём? — He claims he's not involved.
- **дескать** — so-called, supposedly (dismissive): Де'скал всё про'сто.
- **-с** (attached to verbs, pre-revolutionary clerkdom): Нет-с. — literary flavour only (Chekhov-era).`,
          plain: `мол, де and дескать let you quote someone without vouching for them — Он, мол, всё знал comes with a raised eyebrow. English needs whole words like 'allegedly' to pull this off.`,
          why: "мол/де/дескать let you quote without vouching: «Он мол ничего́ не знал» attributes the claim to him and quietly doubts it. Journalists and gossipers live on these particles — English needs whole clauses ('he claims that…').",
          examples: [
            { ru: "Он, мол, ничего' не зна'л.", en: "He says he knew nothing." },
            { ru: "Де'скал всё про'сто, а по факту — нет.", en: "Supposedly it's all simple, but in fact it isn't." },
          ],
          tip: "мол/де/дескать let you quote without vouching — journalists and gossipers live on them.",
        },
      ],
      exercises: [
        {
          id: "c2-u07-l2-e1",
          type: "single",
          text: "Which particle is dismissive about the reported claim?",
          options: [{ id: "a", label: "дескать" }, { id: "b", label: "ведь" }], answer: "a"
        },
        {
          id: "c2-u07-l2-e2",
          type: "true-false",
          text: "«мол» marks the speaker's own certainty.",
          answer: false,
          explanation: "It attributes the claim to someone else.",
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u07-test-1",
      type: "single",
      text: "Reminder/contrast particle:",
      options: [{ id: "a", label: "же" }, { id: "b", label: "ли" }], answer: "a"
    },
    {
      id: "c2-u07-test-2",
      type: "single",
      text: "Embedded yes/no question marker:",
      options: [{ id: "a", label: "ли" }, { id: "b", label: "мол" }], answer: "a"
    },
    {
      id: "c2-u07-test-3",
      type: "true-false",
      text: "«дескать» signals the speaker vouches for the claim.",
      answer: false,
    },
  ],
};
