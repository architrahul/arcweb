"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SHOW_WRITING_SECTION } from "@/config/sections";

const navItems = [
  { href: "/profile", label: "Profile" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/projects/pph-cup", label: "PPH Cup" },
  ...(SHOW_WRITING_SECTION ? [{ href: "/writing", label: "Writing" }] : []),
  { href: "/resume", label: "Resume/CV" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeHref =
    navItems
      .filter(
        (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
      )
      .sort((a, b) => b.href.length - a.href.length)[0]?.href ?? null;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex size-10 items-center justify-center rounded border border-[var(--line)] bg-[var(--control-bg)] text-[var(--foreground)] transition hover:border-[var(--accent-strong)] md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <span className="grid gap-1.5" aria-hidden="true">
            <span
              className={cx(
                "block h-0.5 w-5 bg-current transition",
                isMenuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cx(
                "block h-0.5 w-5 bg-current transition",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cx(
                "block h-0.5 w-5 bg-current transition",
                isMenuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>

        <div className="hidden flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-[var(--ink-muted)] md:flex">
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

      <div
        aria-hidden="true"
        className={cx(
          "fixed inset-x-0 top-[var(--nav-height)] h-[calc(100dvh-var(--nav-height))] bg-black/25 transition md:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={cx(
          "fixed right-0 top-[var(--nav-height)] z-50 h-[calc(100dvh-var(--nav-height))] w-[min(82vw,320px)] overflow-y-auto overscroll-contain border-l border-[var(--line)] bg-[var(--background)] shadow-2xl transition-transform duration-200 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="grid gap-2 p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
            Navigation
          </p>
          {navItems.map((item) => (
            <Link
              className={cx(
                "rounded border px-4 py-3 text-base font-medium transition",
                activeHref === item.href
                  ? "border-[var(--accent-strong)] bg-[var(--control-active)] text-[var(--foreground)]"
                  : "border-[var(--line)] bg-[var(--control-bg)] text-[var(--ink-muted)] hover:border-[var(--accent-strong)] hover:text-[var(--foreground)]",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-[var(--line)] pt-4">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </header>
  );
}
