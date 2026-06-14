import type { Project } from "@/content/projects";

export function ProjectHoverCard({ project }: { project: Project }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded border border-[var(--line)] bg-[var(--hover-card-bg)] p-4 text-left opacity-0 shadow-xl transition duration-200 ease-out group-hover:opacity-100 group-focus:opacity-100 group-focus-visible:opacity-100">
      <h3 className="text-sm font-semibold text-[var(--foreground)]">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-5 text-[var(--ink-muted)]">
        {project.description}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase text-[var(--accent-strong)]">
        {project.status}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            className="rounded-sm border border-[var(--line)] bg-[var(--tag-bg)] px-2 py-1 text-[11px] text-[var(--ink-muted)]"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
