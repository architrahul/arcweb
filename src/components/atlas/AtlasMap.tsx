import { projects } from "@/content/projects";
import { AtlasArtwork } from "@/components/atlas/AtlasArtwork";
import { MapControls } from "@/components/atlas/MapControls";
import { ProjectMarker } from "@/components/atlas/ProjectMarker";

export function AtlasMap() {
  return (
    <section
      aria-label="Interactive project atlas"
      className="fixed inset-x-0 bottom-0 top-[var(--nav-height)] isolate overflow-hidden bg-[var(--map-surface)]"
    >
      <h1 className="sr-only">Arcweb project atlas</h1>
      <AtlasArtwork />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,252,242,0.04)_0%,rgba(247,243,232,0.1)_42%,var(--home-vignette)_100%)]" />
      <div className="fixed inset-x-0 top-[var(--nav-height)] h-20 bg-gradient-to-b from-[var(--home-top-fade)] to-transparent" />

      <div className="fixed inset-0 z-10 pointer-events-none">
        {projects.map((project) => (
          <ProjectMarker key={project.slug} project={project} />
        ))}
      </div>
      <MapControls />
    </section>
  );
}
