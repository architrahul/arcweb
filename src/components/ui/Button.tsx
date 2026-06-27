import Link from "next/link";
import { cx } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "quiet";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      className={cx(
        "inline-flex items-center justify-center rounded border px-4 py-2 text-sm font-medium shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-strong)]",
        variant === "primary" &&
          "border-[var(--accent-strong)] bg-[color-mix(in_srgb,var(--accent-strong)_12%,var(--panel))] text-[var(--accent-strong)] hover:bg-[var(--accent-strong)] hover:text-[var(--background)]",
        variant === "quiet" &&
          "border-[var(--line)] bg-[var(--control-bg)] text-[var(--foreground)] hover:border-[var(--accent-strong)] hover:bg-[var(--control-active)]",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
