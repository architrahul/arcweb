import { Card } from "@/components/ui/Card";

const links = [
  { label: "Email", value: "architpatil@utexas.edu", href: "mailto:architpatil@utexas.edu" },
  { label: "Phone", value: "+1 469 325 8093", href: "tel:+14693258093" },
  { label: "GitHub", value: "github.com/architrahul", href: "https://github.com/architrahul" },
  { label: "LinkedIn", value: "linkedin.com/in/architrpatil", href: "https://www.linkedin.com/in/architrpatil/" },
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
            <a
              className="mt-2 block break-words text-[var(--ink-muted)] transition hover:text-[var(--foreground)]"
              href={link.href}
              rel="noreferrer"
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              {link.value}
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
