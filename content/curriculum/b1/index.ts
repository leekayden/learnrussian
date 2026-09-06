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
import { u11 } from "./u11";
import { u12 } from "./u12";

export const b1: LevelCurriculum = {
  level: "b1",
  units: [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
  exam: [
    {
      id: "b1-exam-1",
      type: "single",
      text: "В кла́ссе мно́го ___. (студе́нтки — fem, gen pl)",
      options: [{ id: "a", label: "студенток" }, { id: "b", label: "студентков" }, { id: "c", label: "студентки" }],
      answer: "a",
    },
    {
      id: "b1-exam-2",
      type: "single",
      text: "Мне наконе́ц ___. (удава́ться + позвони́ть, past)",
      options: [{ id: "a", label: "удалось позвонить" }, { id: "b", label: "удалось звонить" }],
      answer: "a",
    },
    {
      id: "b1-exam-3",
      type: "single",
      text: "Фильм, ___, получи́л при́з. (мы смотре́ли фи́льм)",
      options: [{ id: "a", label: "который мы смотрели" }, { id: "b", label: "котором мы смотрели" }],
      answer: "a",
    },
    {
      id: "b1-exam-4",
      type: "single",
      text: "Дверь бы́ла ___. (закры́ть, short fem)",
      options: [{ id: "a", label: "закрыта" }, { id: "b", label: "закрытой" }],
      answer: "a",
    },
    {
      id: "b1-exam-5",
      type: "short-answer",
      text: "Verbal adverb: «___ письмо́, он пошёл на по́чту» (получи́ть)",
      answer: "получив",
    },
    {
      id: "b1-exam-6",
      type: "true-false",
      text: "«Мне не́куда идти́» — stress on не-, means there's nowhere to go.",
      answer: true,
    },
    {
      id: "b1-exam-7",
      type: "matching",
      text: "Government check:",
      prompts: [
        { id: "p1", label: "горди́ться" },
        { id: "p2", label: "бои́ться" },
        { id: "p3", label: "звони́ть" },
      ],
      responses: [
        { id: "r1", label: "+ instrumental" },
        { id: "r2", label: "+ genitive" },
        { id: "r3", label: "+ dative" },
      ],
      answer: { p1: "r1", p2: "r2", p3: "r3" },
      explanation: "гордиться ке́м, боя́ться чего́, звони́ть кому́.",
    },
  ],
};
