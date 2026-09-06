import Link from "next/link";
import { withStress, posLabel } from "@/lib/russian";
import type { SearchResult } from "@/lib/dictionary";
import { Badge } from "@/components/ui/badge";

export function WordResultRow({ word }: { word: SearchResult }) {
  return (
    <Link
      href={`/dictionary/${word.id}`}
      className="flex items-baseline justify-between gap-3 rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-accent"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">{withStress(word.accented)}</span>
          {word.level ? <Badge variant="secondary">{word.level}</Badge> : null}
        </div>
        <div className="truncate text-sm text-muted-foreground">
          {word.senses.join(", ") || "—"}
        </div>
      </div>
      <Badge variant="outline" className="shrink-0">
        {posLabel(word.type)}
      </Badge>
    </Link>
  );
}
