import Link from "next/link";
import { withStress } from "@/lib/russian";
import { searchDictionary } from "@/lib/dictionary";
import { WordResultRow } from "@/components/word-result-row";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata = { title: "Dictionary — learnrussian" };

const TYPES = ["noun", "verb", "adjective", "adverb", "pronoun", "other", "expression"];
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default async function DictionaryPage({
  searchParams,
}: PageProps<"/dictionary">) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const type = typeof params.type === "string" ? params.type : "";
  const level = typeof params.level === "string" ? params.level : "";
  const results = q ? await searchDictionary(q, { type: type || undefined, level: level || undefined, take: 40 }) : [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dictionary</h1>
        <p className="text-muted-foreground">
          90,000+ Russian words with full conjugations, declensions and audio.
        </p>
      </div>

      <form className="flex flex-wrap items-center gap-2" action="/dictionary">
        <Input
          name="q"
          defaultValue={q}
          placeholder="Search Russian or English —(e.g. идти, book, жизнь)"
          className="max-w-md"
        />
        <Select name="type" defaultValue={type}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any type</SelectItem>
            {TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name="level" defaultValue={level}>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any level</SelectItem>
            {LEVELS.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit">Search</Button>
      </form>

      {q ? (
        results.length ? (
          <div className="grid gap-2">
            <p className="text-sm text-muted-foreground">
              {results.length} result{results.length === 1 ? "" : "s"} for «{q}»
            </p>
            {results.map((w) => (
              <WordResultRow key={w.id} word={w} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Nothing found for «{q}». Try another spelling?
          </p>
        )
      ) : (
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span>Try:</span>
          {["сказать", "жизнь", "always", "beautiful"].map((s) => (
            <Link
              key={s}
              href={`/dictionary?q=${encodeURIComponent(s)}`}
              className="rounded-md border px-2 py-1 transition-colors hover:bg-accent"
            >
              {s}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
