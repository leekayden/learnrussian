import Link from "next/link";
import { notFound } from "next/navigation";
import { withStress, posLabel, GENDER_LABELS, type FormTables } from "@/lib/russian";
import { getWordDetail } from "@/lib/dictionary";
import { AudioButton } from "@/components/audio-button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function WordPage({ params }: PageProps<"/dictionary/[wordId]">) {
  const { wordId } = await params;
  const word = await getWordDetail(Number(wordId));
  if (!word) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/dictionary" className="text-sm text-muted-foreground hover:text-foreground">
          ← Dictionary
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">{withStress(word.accented)}</h1>
        <AudioButton text={word.bare} audioUrl={word.audio} size="icon-lg" />
        <Badge variant="outline">{posLabel(word.type)}</Badge>
        {word.level ? <Badge variant="secondary">{word.level}</Badge> : null}
        {word.gender ? <Badge variant="secondary">{GENDER_LABELS[word.gender]}</Badge> : null}
        {word.animate ? <Badge variant="secondary">animate</Badge> : null}
        {word.aspect ? <Badge variant="secondary">{word.aspect}</Badge> : null}
      </div>

      {word.usageEn ? <p className="max-w-2xl text-sm text-muted-foreground">{word.usageEn}</p> : null}

      {/* Senses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Meanings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {word.senses.length === 0 ? (
            <p className="text-sm text-muted-foreground">No English translation recorded.</p>
          ) : (
            word.senses.map((s, i) => (
              <div key={i}>
                <div className="font-medium">
                  {i + 1}. {s.tl}
                </div>
                {s.info ? <div className="text-sm text-muted-foreground">{s.info}</div> : null}
                {s.exampleRu ? (
                  <div className="mt-1 border-l-2 pl-3 text-sm">
                    <span>{withStress(s.exampleRu)}</span>
                    {s.exampleTl ? (
                      <span className="block text-muted-foreground">{s.exampleTl}</span>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <FormsSection tables={word.forms} type={word.type} />

      {/* Example sentences */}
      {word.sentences.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">In context</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {word.sentences.map((s) => (
              <div key={s.id} className="border-l-2 pl-3 text-sm">
                <span>{withStress(s.ru)}</span>
                <span className="block text-muted-foreground">{s.en}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}

      {/* Related words */}
      {word.related.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Related words</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {word.related.map((r, i) => (
              <Link
                key={`${r.word.id}-${i}`}
                href={`/dictionary/${r.word.id}`}
                className="rounded-md border px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
                title={r.relation}
              >
                {r.relation === "synonym" ? "≈ " : r.relation === "antonym" ? "≠ " : ""}
                {withStress(r.word.accented)}
              </Link>
            ))}
          </CardContent>
        </Card>
      ) : null}

      {/* Derivatives */}
      {word.derivatives.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Derived words</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {word.derivatives.map((d) => (
              <Link
                key={d.id}
                href={`/dictionary/${d.id}`}
                className="rounded-md border px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
              >
                {withStress(d.accented)}
              </Link>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

function FormsSection({ tables, type }: { tables: FormTables; type: string | null }) {
  const hasAny =
    tables.nounSingular ||
    tables.nounPlural ||
    tables.adjectiveGrid ||
    tables.adjectiveShort ||
    tables.adjectiveComparative ||
    tables.verbPresentFuture ||
    tables.verbPast ||
    tables.verbImperative ||
    tables.verbParticiples ||
    tables.verbGerunds;
  if (!hasAny) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {tables.nounSingular ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Singular</CardTitle>
          </CardHeader>
          <CardContent>
            <CaseTable rows={tables.nounSingular} />
          </CardContent>
        </Card>
      ) : null}
      {tables.nounPlural ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Plural</CardTitle>
          </CardHeader>
          <CardContent>
            <CaseTable rows={tables.nounPlural} />
          </CardContent>
        </Card>
      ) : null}

      {tables.adjectiveGrid ? (
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Declension</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case</TableHead>
                  <TableHead>Masculine</TableHead>
                  <TableHead>Feminine</TableHead>
                  <TableHead>Neuter</TableHead>
                  <TableHead>Plural</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tables.adjectiveGrid.map((r) => (
                  <TableRow key={r.case}>
                    <TableCell className="text-muted-foreground">{r.case}</TableCell>
                    <TableCell>{r.m ? withStress(r.m.form) : "—"}</TableCell>
                    <TableCell>{r.f ? withStress(r.f.form) : "—"}</TableCell>
                    <TableCell>{r.n ? withStress(r.n.form) : "—"}</TableCell>
                    <TableCell>{r.pl ? withStress(r.pl.form) : "—"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : null}

      {tables.verbPresentFuture ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Present / future</CardTitle>
          </CardHeader>
          <CardContent>
            <CaseTable rows={tables.verbPresentFuture} />
          </CardContent>
        </Card>
      ) : null}
      {tables.verbPast ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Past</CardTitle>
          </CardHeader>
          <CardContent>
            <CaseTable rows={tables.verbPast} />
          </CardContent>
        </Card>
      ) : null}
      {tables.verbImperative || tables.verbParticiples || tables.verbGerunds ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Imperatives, participles, gerunds</CardTitle>
          </CardHeader>
          <CardContent>
            <CaseTable
              rows={[
                ...(tables.verbImperative ?? []),
                ...(tables.verbParticiples ?? []),
                ...(tables.verbGerunds ?? []),
              ]}
            />
          </CardContent>
        </Card>
      ) : null}
      {tables.adjectiveShort || tables.adjectiveComparative ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Short forms & comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <CaseTable
              rows={[...(tables.adjectiveShort ?? []), ...(tables.adjectiveComparative ?? [])]}
            />
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

function CaseTable({
  rows,
}: {
  rows: { label: string; form: string; formBare: string }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Form</TableHead>
          <TableHead>Word</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={`${r.label}-${r.form}`}>
            <TableCell className="text-muted-foreground">{r.label}</TableCell>
            <TableCell className="font-medium">{withStress(r.form)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
