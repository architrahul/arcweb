import { Card } from "@/components/ui/Card";
import { EmailCard } from "@/components/contact/EmailCard";

const links = [
  { label: "GitHub", value: "github.com/architrahul", href: "https://github.com/architrahul" },
  { label: "LinkedIn", value: "linkedin.com/in/architrpatil", href: "https://www.linkedin.com/in/architrpatil/" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
        Contact
      </p>
      <h1 className="mt-2 text-4xl font-semibold">Hi!</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">
        If you want to discuss project collaborations, research ideas,
        internship opportunities, or anything else that seems relevant, feel
        free to reach out.
      </p>
      <p className="mt-3 max-w-2xl leading-7 text-[var(--ink-muted)]">
        Email is usually the best way to reach me.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <EmailCard />
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
