"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { href: "/profile", label: "Profile" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/projects/pph-cup", label: "PPH Cup" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume/CV" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  const pathname = usePathname();
  const activeHref =
    navItems
      .filter(
        (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
      )
      .sort((a, b) => b.href.length - a.href.length)[0]?.href ?? null;

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--nav-height)] border-b border-[var(--line)] bg-[var(--nav-bg)] shadow-sm shadow-black/5 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-5">
        <Link className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]" href="/">
          <Image
            alt="Arcweb AP logo"
            className="rounded-full border border-[var(--line)]"
            height={34}
            src="/logo-circle.png"
            width={34}
          />
          Archit Patil
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-[var(--ink-muted)]">
          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                className={cx(
                  "whitespace-nowrap border-b pb-1 transition duration-300 ease-out hover:border-current hover:text-[var(--foreground)]",
                  activeHref === item.href
                    ? "border-[var(--accent-strong)] text-[var(--foreground)]"
                    : "border-transparent",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
