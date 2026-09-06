import type { Exercise } from "@/lib/curriculum/types";
import { RendererQuizSchema, type RendererQuiz } from "@/lib/quiz-schema";

/**
 * Convert internal exercises into a quiz the sibling quiz-renderer app can
 * import directly (drag the JSON into /quizzes/new).
 */
export function exercisesToRendererQuiz(
  title: string,
  description: string,
  exercises: Exercise[],
): RendererQuiz {
  const questions = exercises.map((ex) => {
    const base = {
      id: ex.id,
      text: ex.text,
      ...(ex.hint ? { hint: ex.hint } : {}),
      ...(ex.explanation ? { explanation: ex.explanation } : {}),
      points: ex.points ?? 1,
    };
    switch (ex.type) {
      case "single":
        return { ...base, type: "single", options: ex.options, answer: ex.answer };
      case "multiple":
        return { ...base, type: "multiple", options: ex.options, answers: ex.answers };
      case "true-false":
        return { ...base, type: "true-false", answer: ex.answer };
      case "short-answer":
        // Only the canonical answer survives the export.
        return { ...base, type: "short-answer", answer: ex.answer };
      case "ordering":
        return { ...base, type: "ordering", items: ex.items, answer: ex.answer };
      case "fill-blank":
        return {
          ...base,
          type: "fill-blank",
          answers: ex.answers,
          caseInsensitive: ex.caseInsensitive ?? true,
        };
      case "matching":
        return {
          ...base,
          type: "matching",
          prompts: ex.prompts,
          responses: ex.responses,
          answer: ex.answer,
        };
    }
  });

  const quiz = RendererQuizSchema.parse({
    title,
    description,
    feedbackMode: "immediate",
    shuffleQuestions: false,
    shuffleOptions: false,
    questions,
  });
  return quiz;
}

export function downloadFilename(slug: string): string {
  return `${slug.replace(/[^a-z0-9-]+/gi, "-").toLowerCase()}-quiz-renderer.json`;
}
