import { cx } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
