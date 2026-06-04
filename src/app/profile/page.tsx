import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const details = [
  { label: "Focus", value: "Computational biology, algorithms, systems, and privacy-preserving genomics" },
  { label: "Current", value: "Personal research portfolio and technical project atlas" },
  { label: "Location", value: "Texas" },
];

const links = [
  { label: "GitHub", href: "https://github.com/architrahul" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/architrpatil/" },
  { label: "Email", href: "mailto:architpatil@utexas.edu" },
];

export default function ProfilePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
        <aside className="space-y-5">
          <div className="overflow-hidden rounded border border-[var(--line)] bg-[var(--panel)]">
            <div className="relative aspect-square bg-[#efe0b4]">
              <Image
                alt="Archit Patil"
                className="object-cover"
                fill
                priority
                src="/profile/profile_photo.png"
              />
            </div>
            <div className="border-t border-[var(--line)] p-5">
              <h1 className="text-2xl font-semibold">Archit Patil</h1>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                Research-minded builder working across computational biology,
                algorithms, privacy, and systems projects.
              </p>
            </div>
          </div>
          <Card>
            <h2 className="text-lg font-semibold">Links</h2>
            <div className="mt-4 space-y-3 text-sm">
              {links.map((link) => (
                <a
                  className="block text-[var(--ink-muted)] transition hover:text-[var(--foreground)]"
                  href={link.href}
                  key={link.href}
                  rel="noreferrer"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        </aside>

        <div>
          <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
            Profile
          </p>
          <h2 className="mt-2 text-4xl font-semibold">Personal Site</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
            Arcweb is a personal website first: a place for background,
            research direction, project taste, writing, and contact details.
            The atlas makes the work explorable, but the profile keeps the
            person visible.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {details.map((detail) => (
              <Card key={detail.label}>
                <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
                  {detail.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                  {detail.value}
                </p>
              </Card>
            ))}
          </div>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Where to go next</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Link href="/research">
                <Card className="h-full transition hover:border-[var(--accent)]">
                  <h4 className="font-semibold">Research</h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                    Current areas, selected research projects, and future
                    publication structure.
                  </p>
                </Card>
              </Link>
              <Link href="/projects">
                <Card className="h-full transition hover:border-[var(--accent)]">
                  <h4 className="font-semibold">Projects</h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                    A linear project index for visitors who prefer direct
                    navigation over the atlas.
                  </p>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
