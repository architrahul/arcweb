import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectHoverCard } from "@/components/atlas/ProjectHoverCard";

export function ProjectMarker({ project }: { project: Project }) {
  return (
    <Link
      aria-label={project.title}
      className="group absolute z-10 block size-5 -translate-x-1/2 -translate-y-1/2"
      href={`/projects/${project.slug}`}
      style={{ left: `${project.position.x}%`, top: `${project.position.y}%` }}
    >
      <span className="absolute inset-0 rounded-full border border-[#332f22]/30 bg-[#fff8dd] shadow-md transition group-hover:scale-125 group-hover:border-[var(--accent-strong)]" />
      <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-strong)]" />
      <ProjectHoverCard project={project} />
    </Link>
  );
}
