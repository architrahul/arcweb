import { projects } from "@/content/projects";
import { AtlasArtwork } from "@/components/atlas/AtlasArtwork";
import { MapControls } from "@/components/atlas/MapControls";
import { ProjectMarker } from "@/components/atlas/ProjectMarker";

export function AtlasMap() {
  return (
    <>
      <section
        aria-label="Interactive project atlas"
        className="relative isolate min-h-[calc(100vh-65px)] overflow-hidden bg-[var(--map-surface)]"
      >
        <h1 className="sr-only">Arcweb project atlas</h1>
        <AtlasArtwork />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,252,242,0.04)_0%,rgba(247,243,232,0.1)_42%,var(--home-vignette)_100%)]" />
        <div className="fixed inset-x-0 top-0 h-28 bg-gradient-to-b from-[var(--home-top-fade)] to-transparent" />

        <div className="fixed inset-0 z-10 pointer-events-none">
          {projects.map((project) => (
            <ProjectMarker key={project.slug} project={project} />
          ))}
        </div>
        <MapControls />
      </section>

      <section className="relative z-30 border-t border-[var(--line)] bg-[var(--background)] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
            About
          </p>
          <h2 className="mt-2 text-4xl font-semibold">Arcweb</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--ink-muted)]">
            Arcweb is a personal website and research portfolio arranged as an
            explorable atlas of projects, writing, systems work, and
            computational biology. The map is the entry point; the conventional
            navigation stays available for visitors who want a direct path.
          </p>
        </div>
      </section>
    </>
  );
}
