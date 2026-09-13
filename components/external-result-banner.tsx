import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

// Green confirmation shown on the page a user returns to after taking a quiz
// in the sibling quiz-renderer app (`?qr=1` return URLs). Renders nothing
// unless an applied Quiz Renderer result actually exists for this user — the
// URL param only toggles the check, it never fakes the result.
export async function ExternalResultBanner({ externalQuizId }: { externalQuizId: string }) {
  const session = await getSession();
  if (!session) return null;

  const result = await prisma.externalQuizResult.findFirst({
    where: { userId: session.user.id, externalQuizId },
    orderBy: { appliedAt: "desc" },
    select: { score: true, appliedAt: true },
  });
  if (!result) return null;

  return (
    <div className="rounded-xl border border-green-600/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-400">
      ✓ Result saved from Quiz Renderer — scored {Math.round(result.score)}% and applied to
      your progress.
    </div>
  );
}
