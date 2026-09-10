import type { Unit } from "@/lib/curriculum/types";

/**
 * A2 · Unit 3 — Genitive singular, one step at a time. Notes v2:
 * elaborate explanations, English contrasts, reasoning callouts.
 */
export const u03: Unit = {
  id: "a2-u03",
  level: "a2",
  number: 3,
  title: "The genitive: of, from, without",
  topicIds: ["a2-u03-genitive-sg"],
  lessons: [
    {
      id: "a2-u03-l1",
      title: "Step 1: masculine genitive — whose is it?",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["машина", "телефон", "ключ", "брат", "отец", "друг", "дом", "роман", "автор", "учитель"],
      grammar: [
        {
          title: "Masculine → -а / -я",
          body: `The genitive is the case of relationships. English builds them with 's or *of* — «my brother's car», «the key to the house» — while Russian simply puts the second noun into the **genitive case**: маши́на **бра́та** (a car of my brother), ключ **о́т до́ма**. No extra word is needed; the ending alone says "belongs to / connected with".

For masculine nouns the formation could not be simpler — take the dictionary form and add a vowel:
- hard consonant → **-а**: телефо́н → телефо́на, до́м → до́ма
- soft -й/-ь → **-я**: музе́й → музе́я, учи́тель → учи́теля

This case is everywhere once you start noticing it: authorship (рома́н Пу́шкина), ingredients (ча́шка ча́я), parts (ключ от маши́ны), and the whole "possession" system you will meet in Step 3.`,
          why: `Think of the genitive as Russian's way of gluing two nouns together without a preposition. English glues with apostrophe-s or *of*; Russian glues with the ending -а/-я. Because the glue is the ending, the glued noun can move around the sentence freely: маши́на бра́та / бра́та маши́на — same meaning, different emphasis.`,
          table: {
            headers: ["Nominative", "Genitive", "Example"],
            rows: [
              ["брат", "брата", "машина брата"],
              ["телефон", "телефона", "нет телефона"],
              ["учитель", "учителя", "книга учителя"],
            ],
          },
          examples: [
            { ru: "Это диссерта'ция моего' нау'чного руководи'теля.", en: "This is my supervisor's dissertation — a real-world genitive." },
            { ru: "Ключи' от обща'ги у Дима.", en: "The dorm keys are with Dima — two genitive-flavoured constructions stacked." },
          ],
          tip: "The reflex to fight is leaving the noun bare: «машина брат» is the classic tell of an English speaker. Whenever two nouns sit next to each other and the second one «owns» the first, your hand should reach for -а/-я automatically.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l1-e1",
          type: "single",
          text: "Э́то маши́на ___. (отец)",
          options: [{ id: "a", label: "отца" }, { id: "b", label: "отец" }], answer: "a",
        },
        {
          id: "a2-u03-l1-e2",
          type: "fill-blank",
          text: "рома́н ___. *(of the writer — писа́тель)*",
          answers: ["писателя"],
        },
        {
          id: "a2-u03-l1-e3",
          type: "true-false",
          text: "«Ключ от до́ма» — дом stays nominative.",
          answer: false,
          explanation: "от + genitive: до́ма.",
        },
      ],
      drills: [{ kind: "noun-case", count: 4, cases: ["gen"] }],
    },
    {
      id: "a2-u03-l2",
      title: "Step 2: feminine & neuter genitive",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["сестра", "мать", "книга", "песня", "молоко", "море", "время", "подруга", "тетрадь", "имя"],
      grammar: [
        {
          title: "-ы / -и / -а / -я — and the -ия/-мя irregulars",
          body: `Feminine and neuter nouns replace their vowel in the genitive rather than adding to it:

- feminine **-а → -ы**: маши́на → маши́ны (my sister's car = маши́на сестры́)
- feminine **-я → -и**, **-ь → -и**: пе́сня → пе́сни, тетра́дь → тетра́ди
- neuter **-о → -а**: молоко́ → молока́; **-е → -я**: мо́ре → мо́ря
- After к, г, х, ж, ш, ч the feminine is always **-и** (подру́га → подру́ги) — the same spelling law you met in verbs.

Two small irregular tribes live here too. Nouns ending in **-ия** double the vowel: Росси́я → Росси́и, лекция → лекции. And the **-мя** nouns (вре́мя, и́мя) grow an extra -ен-: вре́мя → вре́мени, и́мя → и́мени. You will meet вре́мени constantly, because time is exactly what students never have enough of.`,
          why: `Notice the elegant symmetry: the genitive mostly just swaps the noun's "gender badge" (-а/-о) for a different vowel. The genitive is the oldest case in the language — it is doing the work English spreads across 's, *of*, *from*, and partitive *some*. One case, many jobs — that is why you will keep meeting it in every unit from now on.`,
          table: {
            headers: ["Nominative", "Genitive"],
            rows: [
              ["машина", "машины"],
              ["песня", "песни"],
              ["молоко", "молока"],
              ["море", "моря"],
              ["время", "времени"],
            ],
          },
          examples: [
            { ru: "Кни'га сестры' лежи'т на кухне.", en: "My sister's book is on the kitchen table." },
            { ru: "У нас нет вре'мени на спо'ры.", en: "We have no time for arguments — вре́мени from the -мя tribe." },
          ],
          tip: "The -ы/-и choice is the same spelling rule from verbs: after к, г, х, ж, ш, ч write **-и**. If you already drilled «я учу́», this is the same muscle — the alphabet is just being consistent.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l2-e1",
          type: "single",
          text: "У меня́ нет ___. (вре́мя)",
          options: [{ id: "a", label: "времени" }, { id: "b", label: "время" }], answer: "a",
        },
        {
          id: "a2-u03-l2-e2",
          type: "fill-blank",
          text: "книга ___. *(of the sister)*",
          answers: ["сестры"],
        },
        {
          id: "a2-u03-l2-e3",
          type: "true-false",
          text: "After к/г/х write -и: подру́ги.",
          answer: true,
        },
      ],
      drills: [{ kind: "noun-case", count: 4, cases: ["gen"] }],
    },
    {
      id: "a2-u03-l3",
      title: "Step 3: у меня есть / у меня нет",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["есть", "нет", "деньги", "время", "машина", "ключ", "собака", "брат", "вопрос", "ответ"],
      grammar: [
        {
          title: "Russian has no verb 'to have' — it has a location instead",
          body: `This is the sentence pattern that most changes how you think. Russian never says "I have a car" the way English does. Instead it says "**by me** there is a car": **У меня́ есть маши́на**. Literally: *at me [there] is a car*.

The construction has three slots, and you control what goes in each:
1. **у + genitive person** — у меня́, у тебя́, у бра́та, у нас, у преподавателя
2. **есть** — "there is" (used when the thing's existence is news)
3. **the thing, in the nominative** — it is the grammatical subject!

To negate, swap есть for **нет** and push the thing into the genitive: **У меня́ нет маши́ны**. The thing that "isn't there" is measured in genitive — as if absence had a quantity of zero.`,
          why: `This pattern exists because Russian treats possession as *location*: what you "have" is simply what is near you. That is also why the past tense agrees with the THING, not the owner — «У меня́ бы́ла маши́на» (the car was by me) — the car is still the grammatical hero of the sentence.`,
          table: {
            headers: ["Pattern", "Example"],
            rows: [
              ["У + gen + есть + nom", "У брата есть машина"],
              ["У + gen + нет + gen", "У брата нет машины"],
            ],
          },
          examples: [
            { ru: "У меня' есть во'прос.", en: "I have a question — your opener for every seminar." },
            { ru: "У нас нет экза'менов в пя'тницу.", en: "We have no exams on Friday." },
          ],
          tip: "Do not build a Russian sentence around «я име́ю» — it exists but sounds stiff, translated-from-English, or sociological. The у-construction is the native way to say "have" in 95% of situations. Also memorise «У меня́ нет де́нег» as a chunk: де́ньги is plural-only and its genitive (де́нег) is irregular.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l3-e1",
          type: "single",
          text: "У меня́ нет ___. (ключ)",
          options: [{ id: "a", label: "ключа" }, { id: "b", label: "ключ" }], answer: "a",
        },
        {
          id: "a2-u03-l3-e2",
          type: "fill-blank",
          text: "___ есть вре́мя? *(Do you have time?)*",
          answers: ["У тебя"],
        },
        {
          id: "a2-u03-l3-e3",
          type: "true-false",
          text: "«У меня́ нет де́нег» is correct.",
          answer: true,
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u03-l4",
      title: "Step 4: quantities want the genitive",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["много", "мало", "несколько", "килограмм", "литр", "чашка", "бутылка", "стакан", "пачка", "яблоко"],
      grammar: [
        {
          title: "Amounts are measured in genitive",
          body: `Whenever Russian states an *amount* of something — much, little, several, or a unit of measure — the thing being measured goes into the genitive:

- **мно́го / ма́ло / не́сколько** + gen: мно́го рабо́ты, ма́ло вре́мени, не́сколько друзе́й
- containers and units: **ча́шка ча́я**, **ли́тр молока́**, **килогра́мм я́блок**, **стака́н воды́**, **па́чка чи́псов**

There is a subtle meaning shift worth stealing: «Я хочу́ воды́» (genitive) = *I want some water*, an indefinite gulp; «Я хочу́ во́ду» (accusative) = *I want THE water*, the specific one in front of you. Genitive keeps the request vague and polite.`,
          why: `Why genitive after quantities? Because the genitive is fundamentally the case of "amount/portion" — it answers "how much of it?". English shows the same instinct when it uses *of*: a cup **of** tea, a lot **of** work. Russian just made the *of*-part an ending.`,
          table: {
            headers: ["Measure", "Genitive"],
            rows: [
              ["чашка", "чая"],
              ["литр", "молока"],
              ["килограмм", "яблок"],
            ],
          },
          examples: [
            { ru: "У меня' мно'го дома'шних зада'ний.", en: "I have a lot of homework." },
            { ru: "Дай во'ды, пожа'луйста.", en: "Give me some water, please — genitive keeps it casual." },
          ],
          tip: "The reverse error also exists: using genitive where the object is definite. «Переда́й мне во́ду» (pass me THE water) is what a waiter says about the specific glass. Amount → genitive; specific thing → accusative. Feel the difference rather than memorising a rule.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l4-e1",
          type: "single",
          text: "У меня́ мно́го ___. (рабо́та)",
          options: [{ id: "a", label: "работы" }, { id: "b", label: "работу" }], answer: "a",
        },
        {
          id: "a2-u03-l4-e2",
          type: "fill-blank",
          text: "Ча́шка ___, пожа́луйста. *(tea)*",
          answers: ["чая"],
        },
        {
          id: "a2-u03-l4-e3",
          type: "fill-blank",
          text: "Купи́ килогра́мм ___. *(apples)*",
          answers: ["яблок"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
    {
      id: "a2-u03-l5",
      title: "Step 5: the genitive preposition family",
      topicIds: ["a2-u03-genitive-sg"],
      vocab: ["из", "с", "от", "до", "после", "без", "для", "около", "у", "против"],
      grammar: [
        {
          title: "Eight prepositions, one case",
          body: `A whole club of prepositions demands the genitive, and the meanings are conveniently grouped:

- **From**: из (out of — enclosed), с (off — surfaces), от (away from — people/points): из Росси́и, с рабо́ты, от дру́га
- **Boundaries**: до (until), по́сле (after): до ве́чера, по́сле уро́ка
- **Relations**: для (for the benefit of), без (without), о́коло (near), у (by/at someone's place), про́тив (against): для ма́мы, без са́хара, о́коло до́ма

Notice how much English does with *of/from/for/without/after* — and Russian does all of it with one case. The preposition tells you the relationship; the genitive ending is the constant.`,
          why: `These prepositions share a deep meaning: distance, origin, separation, absence. The genitive is the "away from" case — so of course it pairs with *from*, *until*, *without*, *against*. Once you see the semantic logic (genitive = pulling away), the list stops being arbitrary.`,
          table: {
            headers: ["Preposition", "Example"],
            rows: [
              ["из", "из Лондона"],
              ["до", "до вечера"],
              ["без", "без сахара"],
              ["около", "около дома"],
            ],
          },
          examples: [
            { ru: "После па'р мы идём в буфе'т.", en: "After classes we head to the café — по́сле + gen." },
            { ru: "Она' прие'хала из Каза'ни.", en: "She came from Kazan." },
          ],
          tip: "«До за́втра!» — literally "until tomorrow" — is how Russians say "see you tomorrow". A farewell built entirely on до + genitive. Little chunks like this make the prepositions stick.",
        },
      ],
      exercises: [
        {
          id: "a2-u03-l5-e1",
          type: "single",
          text: "Я приду́ по́сле ___. (уро́к)",
          options: [{ id: "a", label: "урока" }, { id: "b", label: "урок" }], answer: "a",
        },
        {
          id: "a2-u03-l5-e2",
          type: "fill-blank",
          text: "Это пода́рок для ___. *(mother — ма́ть → ма́тери)*",
          answers: ["матери"],
        },
        {
          id: "a2-u03-l5-e3",
          type: "fill-blank",
          text: "Магази́н о́коло ___. *(house)*",
          answers: ["дома"],
        },
      ],
      drills: [{ kind: "cloze", count: 3 }],
    },
  ],

  test: [
    {
      id: "a2-u03-test-1", type: "single",
      text: "У меня́ нет ___. (car)",
      options: [{ id: "a", label: "машины" }, { id: "b", label: "машину" }], answer: "a",
    },
    {
      id: "a2-u03-test-2", type: "short-answer",
      text: "Whose phone? — «телефо́н бра́та» means:",
      answer: "брата телефон",
      accept: ["the brother's phone", "brother's phone"],
    },
    {
      id: "a2-u03-test-3", type: "short-answer",
      text: "Translate: «Я из Росси́и.»",
      answer: "я из россии",
    },
    {
      id: "a2-u03-test-4", type: "fill-blank",
      text: "Ча́шка ___, пожа́луйста.",
      answers: ["чая"],
    },
    {
      id: "a2-u03-test-5", type: "true-false",
      text: "«О́коло до́ма» uses the genitive.",
      answer: true,
    },
    {
      id: "a2-u03-test-6", type: "matching",
      text: "Preposition → meaning:",
      prompts: [
        { id: "p1", label: "без" }, { id: "p2", label: "для" }, { id: "p3", label: "по́сле" }, { id: "p4", label: "о́коло" },
      ],
      responses: [
        { id: "r1", label: "after" }, { id: "r2", label: "without" }, { id: "r3", label: "near" }, { id: "r4", label: "for" },
      ],
      answer: { p1: "r2", p2: "r4", p3: "r1", p4: "r3" },
    },
    {
      id: "a2-u03-test-7", type: "short-answer",
      text: "Genitive plural: ключи́ → (нет ___)",
      answer: "ключей",
    },
  ],
};
