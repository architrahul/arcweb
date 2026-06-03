import { TopNav } from "@/components/layout/TopNav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main>{children}</main>
    </div>
  );
}
