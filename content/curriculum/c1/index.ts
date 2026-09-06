import type { LevelCurriculum } from "@/lib/curriculum/types";
import { u01 } from "./u01";
import { u02 } from "./u02";
import { u03 } from "./u03";
import { u04 } from "./u04";
import { u05 } from "./u05";
import { u06 } from "./u06";
import { u07 } from "./u07";
import { u08 } from "./u08";
import { u09 } from "./u09";
import { u10 } from "./u10";

export const c1: LevelCurriculum = {
  level: "c1",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10],
  exam: [
    {
      id: "c1-exam-1",
      type: "single",
      text: "Не на́до бы́ло ___. (это письмо — regret about one deed)",
      options: [{ id: "a", label: "отправлять" }, { id: "b", label: "отправить" }],
      answer: "b",
    },
    {
      id: "c1-exam-2",
      type: "single",
      text: "«При́нципы, ___ в пе́рвой главе́» (рассма́тривать)",
      options: [{ id: "a", label: "рассматриваемые" }, { id: "b", label: "рассмотренные" }],
      answer: "a",
      explanation: "-мый needs the imperfective: principles BEING considered.",
    },
    {
      id: "c1-exam-3",
      type: "single",
      text: "Which sentence is correct?",
      options: [
        { id: "a", label: "Уезжая из дома, позвони мне." },
        { id: "b", label: "Уезжая из дома, мне позвони́ли." },
      ],
      answer: "a",
      explanation: "b is the classic dangling-gerund blunder: the caller must be the subject.",
    },
    {
      id: "c1-exam-4",
      type: "single",
      text: "Он ___ ничего́ не зна́л. (doubtful hearsay)",
      options: [{ id: "a", label: "якобы" }, { id: "b", label: "обязательно" }],
      answer: "a",
    },
    {
      id: "c1-exam-5",
      type: "single",
      text: "___ спеша́, он сбивчиво отвеча́л.",
      options: [{ id: "a", label: "Не" }, { id: "b", label: "Без" }],
      answer: "a",
    },
    {
      id: "c1-exam-6",
      type: "short-answer",
      text: "Had barely sat down when the phone rang: (Не успе́л…)",
      answer: "не успел я сесть как зазвонил телефон",
      accept: ["не успел сесть как зазвонил телефон"],
    },
    {
      id: "c1-exam-7",
      type: "single",
      text: "«в соотве́тствии с распоряже́нием» — which case after с?",
      options: [{ id: "a", label: "instrumental" }, { id: "b", label: "prepositional" }],
      answer: "a",
    },
    {
      id: "c1-exam-8",
      type: "single",
      text: "Passive transformation of «Заво́д вы́пускает cars»:",
      options: [{ id: "a", label: "Автомобили выпускаются заводом" }, { id: "b", label: "Автомобили выпускают завод" }],
      answer: "a",
    },
    {
      id: "c1-exam-9",
      type: "single",
      text: "Almost missed: ___ не опозда́л!",
      options: [{ id: "a", label: "Чуть" }, { id: "b", label: "Почти не" }],
      answer: "a",
    },
    {
      id: "c1-exam-10",
      type: "short-answer",
      text: "Participle: «пробле́ма, кото́рую рассма́тривают» → «пробле́ма, ___»",
      answer: "рассматриваемая",
    },
  ],
};
