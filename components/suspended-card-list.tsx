"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { setCardSuspended } from "@/app/actions/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { renderRu } from "@/lib/russian";

const KIND_LABELS: Record<string, string> = {
  recog: "recognise",
  produce: "produce",
  cloze: "cloze",
  audio: "listen",
};

export function SuspendedCardList({
  items,
  showStress,
}: {
  items: { cardId: string; wordId: number; accented: string; kind: string }[];
  showStress: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  async function restore(cardId: string) {
    setPending(cardId);
    try {
      await setCardSuspended(cardId, false);
      toast.success("Card restored");
      startTransition(() => router.refresh());
    } catch {
      toast.error("Could not restore the card");
    } finally {
      setPending(null);
    }
  }

  return (
    <div className="space-y-2">
      {items.map((c) => (
        <div key={c.cardId} className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <Link
              href={`/dictionary/${c.wordId}`}
              className="truncate text-sm font-medium hover:text-primary"
            >
              {renderRu(c.accented, showStress)}
            </Link>
            <Badge variant="outline" className="shrink-0 text-muted-foreground">
              {KIND_LABELS[c.kind] ?? c.kind}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            disabled={pending === c.cardId}
            onClick={() => restore(c.cardId)}
          >
            <RotateCcw className="size-3.5" /> Restore
          </Button>
        </div>
      ))}
    </div>
  );
}
