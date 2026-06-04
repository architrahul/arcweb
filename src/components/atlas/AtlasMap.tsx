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
    <section className="relative min-h-[calc(100vh-65px)] overflow-hidden bg-[#e7d6a6]">
      <Image
        alt="Fantasy-inspired atlas background"
        className="absolute inset-0 size-full object-cover"
        fill
        priority
        src="/atlas/map-base.svg"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,252,242,0.06)_0%,rgba(247,243,232,0.16)_42%,rgba(32,33,24,0.24)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[rgba(247,243,232,0.74)] to-transparent" />

      {projects.map((project) => (
        <ProjectMarker key={project.slug} project={project} />
      ))}
      <MapControls />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-normal sm:text-6xl">
              Arcweb
            </h1>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)] sm:text-base">
              A personal website and research portfolio arranged as an
              explorable atlas of projects, writing, systems work, and
              computational biology.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {tabs.map((tab) => (
              <Link
                className="rounded border border-[var(--line)] bg-[rgba(255,252,242,0.76)] px-3 py-2 text-[var(--ink-muted)] shadow-sm backdrop-blur-sm transition duration-300 ease-out hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                href={tab.href}
                key={tab.href}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
