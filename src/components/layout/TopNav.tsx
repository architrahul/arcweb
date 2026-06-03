import Link from "next/link";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(247,243,232,0.82)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link className="text-sm font-semibold uppercase tracking-[0.18em]" href="/">
          Archit Patil
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-[var(--ink-muted)]">
          {navItems.map((item) => (
            <Link
              className="border-b border-transparent pb-1 transition hover:border-current hover:text-[var(--foreground)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
