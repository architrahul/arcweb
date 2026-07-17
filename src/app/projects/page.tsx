import Link from "next/link";
import { projects } from "@/content/projects";
import { Card } from "@/components/ui/Card";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl overflow-x-hidden px-5 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-3 text-[var(--ink-muted)]">
          A linear fallback for the atlas: every landmark is listed here with a
          direct path into its project page.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link className="min-w-0" href={`/projects/${project.slug}`} key={project.slug}>
            <Card className="h-full overflow-hidden transition hover:border-[var(--accent)] hover:shadow-md">
              <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
                {project.status}
              </p>
              <h2 className="mt-2 break-words text-xl font-semibold">{project.title}</h2>
              <p className="mt-3 break-words text-sm leading-6 text-[var(--ink-muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    className="project-tag rounded-sm border px-2 py-1 text-xs"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
