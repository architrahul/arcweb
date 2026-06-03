import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { MapControls } from "@/components/atlas/MapControls";
import { ProjectMarker } from "@/components/atlas/ProjectMarker";

const tabs = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
];

export function AtlasMap() {
  return (
    <section className="relative min-h-[calc(100vh-65px)] overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-normal sm:text-5xl">
              Arcweb
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--ink-muted)] sm:text-base">
              A research portfolio arranged as an explorable atlas of projects,
              writing, systems work, and computational biology.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {tabs.map((tab) => (
              <Link
                className="rounded border border-[var(--line)] bg-[rgba(255,252,242,0.72)] px-3 py-2 text-[var(--ink-muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                href={tab.href}
                key={tab.href}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/9] min-h-[460px] overflow-hidden rounded border border-[var(--line)] bg-[#e7d6a6] shadow-xl">
          <Image
            alt="Fantasy-inspired atlas background"
            className="absolute inset-0 size-full object-cover"
            fill
            priority
            src="/atlas/map-base.svg"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(32,33,24,0.16)_100%)]" />
          {projects.map((project) => (
            <ProjectMarker key={project.slug} project={project} />
          ))}
          <MapControls />
        </div>
      </div>
    </section>
  );
}
