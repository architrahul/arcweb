import { Card } from "@/components/ui/Card";

const categories = [
  "Research notes",
  "Paper reviews",
  "Algorithm explanations",
  "Project postmortems",
  "Exploratory ideas",
];

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="text-3xl font-semibold">Writing</h1>
      <p className="mt-3 max-w-3xl leading-7 text-[var(--ink-muted)]">
        Technical writing, notes, and essays will be organized here once the
        content system is filled in.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <Card key={category}>
            <h2 className="text-lg font-semibold">{category}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
              Placeholder space for future entries.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
