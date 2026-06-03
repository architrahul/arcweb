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
        "inline-flex items-center justify-center rounded border px-4 py-2 text-sm font-medium transition",
        variant === "primary" &&
          "border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[#24584f]",
        variant === "quiet" &&
          "border-[var(--line)] bg-[rgba(255,252,242,0.7)] text-[var(--foreground)] hover:border-[var(--accent)]",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
