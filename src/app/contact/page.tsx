import { Card } from "@/components/ui/Card";

const links = [
  { label: "Email", value: "Add email address" },
  { label: "GitHub", value: "Add GitHub profile" },
  { label: "LinkedIn", value: "Add LinkedIn profile" },
  { label: "Google Scholar", value: "Add Scholar profile" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-2xl leading-7 text-[var(--ink-muted)]">
        A focused contact page for collaborators, researchers, recruiters, and
        people who want to talk through technical work.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Card key={link.label}>
            <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
              {link.label}
            </p>
            <p className="mt-2 text-[var(--ink-muted)]">{link.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
