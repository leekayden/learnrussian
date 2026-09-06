import { requireUser } from "@/lib/session";
import { buildReviewBatch } from "@/lib/review";
import { ReviewRunner } from "@/components/practice/review-runner";

export const metadata = { title: "Review — learnrussian" };

export default async function ReviewPage() {
  const { user, profile } = await requireUser();
  const batch = await buildReviewBatch(user.id, profile.currentLevel);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Review</h1>
        <p className="text-muted-foreground">
          Spaced repetition: {batch.dueCount} due · {batch.newCount} new in this session.
        </p>
      </div>
      <ReviewRunner items={batch.items} keyboard={!!profile.showTranslitKeyboard} />
    </div>
  );
}
