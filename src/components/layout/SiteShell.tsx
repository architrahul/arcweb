import { TopNav } from "@/components/layout/TopNav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNav />
      <main className="pt-[var(--nav-height)]">{children}</main>
    </div>
  );
}
