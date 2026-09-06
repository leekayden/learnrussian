import type { Unit } from "@/lib/curriculum/types";

/** C2 · Unit 6 — Expressive word formation. */
export const u06: Unit = {
  id: "c2-u06",
  level: "c2",
  number: 6,
  title: "Expressive morphology: diminutives and pejoratives",
  topicIds: ["c2-u06-expressive-formation"],
  lessons: [
    {
      id: "c2-u06-l1",
      title: "Diminutives: до́мик, городо́к, ру́чка",
      topicIds: ["c2-u06-expressive-formation"],
      vocab: ["дом", "город", "рука", "вода", "сын", "брат", "тётя", "бабушка", "окно", "слово"],
      grammar: [
        {
          title: "Small, dear, or trivial",
          body: `Suffixes shrink nouns — with warmth or with contempt for the OBJECT'S importance:
- **-ик/-чик**: до́м → до́мик (little house), стол → сто́лик.
- **-ок/-ёк/-ек** (with vowel drop): го́род → городо́к, ло́жка → ло́жечка... ло́жка → ло́жечка (-ечк-), сынок.
- **-иц-/-иц**: лу́жа → лу́жица.
- Feminine -к-/-очк-/-ечк-: вода́ → во́дичка, ру́ка → ру́чка (also: handle/pen!).
Diminutives of names: Ма́ша → Ма́шенька, Пе́тя → Пе́тенька.`,
          table: {
            headers: ["Base", "Diminutive", "Flavour"],
            rows: [
              ["дом", "домик", "cosy little house"],
              ["город", "городок", "small town"],
              ["вода", "водичка", "affectionate water"],
              ["рука", "ручка", "little hand / handle / pen"],
            ],
          },
          tip: "Frequent lexicalised meanings: ручка = pen/handle, зубчик = clove of garlic, листок = leaf/sheet — not always “small”.",
        },
      ],
      exercises: [
        {
          id: "c2-u06-l1-e1",
          type: "single",
          text: "«вы́пить води́чки» sounds:",
          options: [{ id: "a", label: "affectionate / folksy" }, { id: "b", label: "official" }], answer: "a"
        },
        {
          id: "c2-u06-l1-e2",
          type: "single",
          text: "«ру́чка» can mean pen, handle, or little hand.",
          options: [{ id: "a", label: "true" }, { id: "b", label: "false" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "c2-u06-l2",
      title: "Augmentatives and pejoratives: доми́ще, стари́шка, солдатня́",
      topicIds: ["c2-u06-expressive-formation"],
      vocab: ["дом", "рука", "борода", "волос", "старик", "солдат", "бюрократ", "толпа", "громила", "верзила"],
      grammar: [
        {
          title: "Making things big or ugly",
          body: `- Augmentatives: **-ищ-/-ещ-**: доми́ще (huge house), ручи́ща (huge/crude hand), бороди́ще.
- Pejoratives: **-ашк-/-яшк-**: старика́шка (old geezer), мальчи́шка (can be neutral: boy).
- Collective contempt: **-ня**: солдатня́, матро́сня, бюрократи́ческая братва́ — the -ня pattern (солдатня́) is derogatory.
- **-ило/-ыло**: громи́ло (bruiser), верзи́ла (lanky fellow) — animate masculine in -а, decline feminine-style but masculine agreement!`,
          examples: [
            { ru: "Ру́ки-крюки́, язи'к-лопа'та.", en: "All thumbs and a gift of the gab (folk description)." },
          ],
          tip: "Animate nouns in -а (громи́ла, верзи́ла) take masculine agreement: Громи́ла пришёл (masc verb), but Acc = gen: ви́жу громи́лу.",
        },
      ],
      exercises: [
        {
          id: "c2-u06-l2-e1",
          type: "single",
          text: "«солдатня́» is:",
          options: [{ id: "a", label: "derogatory collective for soldiers" }, { id: "b", label: "a diminutive" }], answer: "a"
        },
        {
          id: "c2-u06-l2-e2",
          type: "single",
          text: "Громи́ла вошёл / вошло́?",
          options: [{ id: "a", label: "вошёл (masculine agreement)" }, { id: "b", label: "вошла (feminine)" }], answer: "a"
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "c2-u06-test-1",
      type: "single",
      text: "A pen is:",
      options: [{ id: "a", label: "ручка" }, { id: "b", label: "ручище" }], answer: "a"
    },
    {
      id: "c2-u06-test-2",
      type: "single",
      text: "«городок» means:",
      options: [{ id: "a", label: "small town (diminutive)" }, { id: "b", label: "big city" }], answer: "a"
    },
    {
      id: "c2-u06-test-3",
      type: "true-false",
      text: "Animate -а nouns like громи́ла take feminine verb agreement.",
      answer: false,
      explanation: "Masculine agreement; only the accusative looks feminine (вижу громи́лу).",
    },
  ],
};
