import type { Exercise } from "@/lib/curriculum/types";

/**
 * Placement: 24 authored questions. IDs are prefixed a2-/b1-/b2- so the
 * grader can bucket results by level.
 */
export const placement: Exercise[] = [
  // ── A2 block (12) ──
  { id: "a2-p1", type: "single", text: "Я ___ в банке.", options: [{ id: "a", label: "работаю" }, { id: "b", label: "работаешь" }, { id: "c", label: "работают" }], answer: "a" },
  { id: "a2-p2", type: "short-answer", text: "У меня́ нет ___. (вре́мя → genitive)", answer: "времени" },
  { id: "a2-p3", type: "single", text: "Я живу́ ___.", options: [{ id: "a", label: "в Петербурге" }, { id: "b", label: "в Петербург" }, { id: "c", label: "на Петербург" }], answer: "a" },
  { id: "a2-p4", type: "single", text: "Я помога́ю ___. (сестра́)", options: [{ id: "a", label: "сестре" }, { id: "b", label: "сестру" }, { id: "c", label: "сестры" }], answer: "a" },
  { id: "a2-p5", type: "single", text: "Она́ мечта́ет стать ___. (арти́стка)", options: [{ id: "a", label: "артистка" }, { id: "b", label: "артисткой" }], answer: "b" },
  { id: "a2-p6", type: "short-answer", text: "Say it with a perfective verb: (I read this book yesterday — to the end)", answer: "я прочитал эту книгу вчера", accept: ["вчера я прочитал эту книгу"] },
  { id: "a2-p7", type: "single", text: "Куда́ вы идёте? — В ___. (апте́ка)", options: [{ id: "a", label: "аптеке" }, { id: "b", label: "аптеку" }, { id: "c", label: "аптеки" }], answer: "b" },
  { id: "a2-p8", type: "single", text: "Я ___. (age 19 — male)", options: [{ id: "a", label: "девятнадцать лет" }, { id: "b", label: "девятнадцать год" }], answer: "a" },
  { id: "a2-p9", type: "single", text: "Он был ___. (учитель)", options: [{ id: "a", label: "учитель" }, { id: "b", label: "учителем" }], answer: "b" },
  { id: "a2-p10", type: "single", text: "Обы́чно я ___ в город ___. (ездить… by bus)", options: [{ id: "a", label: "езжу … на автобусе" }, { id: "b", label: "еду … на автобусе" }], answer: "a" },
  { id: "a2-p11", type: "fill-blank", text: "___ нельзя́ кури́ть здесь. *(You (polite) must not smoke here.)*", answers: ["Вам"] },
  { id: "a2-p12", type: "single", text: "___ кни́гу я купи́л вчера́. (э́тот, acc fem)", options: [{ id: "a", label: "Эту" }, { id: "b", label: "Этот" }], answer: "a" },

  // ── B1 block (6) ──
  { id: "b1-p1", type: "single", text: "У меня́ мно́го ___. (друзья́ → gen pl)", options: [{ id: "a", label: "друзей" }, { id: "b", label: "другов" }, { id: "c", label: "друзья" }], answer: "a" },
  { id: "b1-p2", type: "single", text: "Он всегда́ ___. (забыва́ть ключи́ — habit)", options: [{ id: "a", label: "забывает" }, { id: "b", label: "забудет" }], answer: "a" },
  { id: "b1-p3", type: "single", text: "Я вы́шел из ___, не взяв зо́нта. (дом → gen sg after из)", options: [{ id: "a", label: "дома" }, { id: "b", label: "дом" }, { id: "c", label: "доме" }], answer: "a" },
  { id: "b1-p4", type: "single", text: "Де́ти, ___ руки! (мо́ют / помойте — negative command „не ___“)", options: [{ id: "a", label: "мойте" }, { id: "b", label: "моют" }], answer: "a" },
  { id: "b1-p5", type: "single", text: "Студе́нт, ___ э́тот текст, отве́тит на вопро́сы.", options: [{ id: "a", label: "прочитавший" }, { id: "b", label: "прочитал" }], answer: "a", hint: "Participle." },
  { id: "b1-p6", type: "single", text: "___ дождя́ мы сиде́ли до́ма. (из-за / благодаря)", options: [{ id: "a", label: "Из-за" }, { id: "b", label: "Благодаря" }], answer: "a" },

  // ── B2 block (6) ──
  { id: "b2-p1", type: "single", text: "Он ушёл, ___ со все́ми попроща́ться. (didn't even say goodbye)", options: [{ id: "a", label: "не успев" }, { id: "b", label: "не успел" }], answer: "a", hint: "Verbal adverb." },
  { id: "b2-p2", type: "single", text: "___ пого́да, мы пошли́ гуля́ть.", options: [{ id: "a", label: "Несмотря на хорошую" }, { id: "b", label: "Несмотря на хорошую погоду" }], answer: "b" },
  { id: "b2-p3", type: "single", text: "Мне ___ бы́ло э́то сде́лать. (I couldn't manage — impersonal)", options: [{ id: "a", label: "не удалось" }, { id: "b", label: "не удаётся" }], answer: "a" },
  { id: "b2-p4", type: "single", text: "Книга, ___ я рассказа́л, ста́ла бестсе́ллером. (which — about)", options: [{ id: "a", label: "о которой" }, { id: "b", label: "которую" }], answer: "a" },
  { id: "b2-p5", type: "single", text: "___ бы́ло хо́лодно, мы реши́ли идти́ пе́шком.", options: [{ id: "a", label: "Хотя было" }, { id: "b", label: "Несмотря на то что было" }], answer: "b", hint: "Both are possible — pick the one with „то что“." },
  { id: "b2-p6", type: "single", text: "Он___ в Моско́вском университе́те. (учиться — reflexive, past, m)", options: [{ id: "a", label: "учился" }, { id: "b", label: "училсясь" }], answer: "a" },
];
