import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

const details = [
  {
    label: "Focus",
    value:
      "Algorithms, molecular computing, cryptographic methods, computational biology, privacy-preserving genomics, and systems",
  },
  {
    label: "Location",
    value: "University of Texas at Austin, Austin, Texas",
  },
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
                CS Turing, math, and computational biology undergraduate at UT
                Austin.
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
          <h2 className="mt-2 text-4xl font-semibold">Hi, I&apos;m Archit.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
            I&apos;m a CS Turing, math, and computational biology undergraduate
            student at UT Austin. I like working on interdisciplinary problems:
            molecular computing, genome algorithms, privacy-preserving ML,
            systems projects, and medical devices that somehow made it into the
            real world.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
            Arcweb is my personal website: a place to put my portfolio, project
            info, and half-baked ideas before they become polished enough to
            turn into proper projects.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
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
                    The main questions I&apos;m working on, questions I&apos;ve
                    worked on in the past, and a few random outlandish ideas.
                  </p>
                </Card>
              </Link>
              <Link href="/projects">
                <Card className="h-full transition hover:border-[var(--accent)]">
                  <h4 className="font-semibold">Projects</h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                    A list of some of the recent projects I&apos;ve done.
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
