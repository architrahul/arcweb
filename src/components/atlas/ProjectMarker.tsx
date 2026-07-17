import Link from "next/link";
import type { Project } from "@/content/projects";
import { PinIcon } from "@/components/atlas/PinIcon";
import { ProjectHoverCard } from "@/components/atlas/ProjectHoverCard";

export function ProjectMarker({ project }: { project: Project }) {
  return (
    <Link
      aria-label={project.title}
      className="group pointer-events-auto absolute z-10 block size-12 -translate-x-1/2 -translate-y-[88%] rounded-full transition sm:size-14 lg:size-16 hover:z-40 focus:z-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-strong)]"
      href={`/projects/${project.slug}`}
      style={{ left: `${project.position.x}%`, top: `${project.position.y}%` }}
    >
      <span className="absolute inset-0 transition duration-200 ease-out group-hover:-translate-y-1 group-focus:-translate-y-1">
        <PinIcon />
      </span>
      <ProjectHoverCard project={project} />
    </Link>
  );
}
