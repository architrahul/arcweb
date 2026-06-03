import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { Card } from "@/components/ui/Card";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.related);

  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link
        className="text-sm text-[var(--ink-muted)] transition hover:text-[var(--foreground)]"
        href="/projects"
      >
        Back to projects
      </Link>
      <header className="mt-6 border-b border-[var(--line)] pb-8">
        <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
          {project.status}
        </p>
        <h1 className="mt-2 text-4xl font-semibold">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          {project.summary}
        </p>
      </header>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <ProjectSection title="Problem" body={project.problem} />
        <ProjectSection title="Motivation" body={project.motivation} />
        <ProjectSection title="Approach" body={project.approach} />
        <ProjectSection title="Results" body={project.results} />
      </div>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Artifacts</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            Paper, code, poster, slides, and data links can be added here as the
            public materials are ready.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Timeline</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink-muted)]">
            {project.timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </section>

      {relatedProjects.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold">Related Projects</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {relatedProjects.map((related) => (
              <Link href={`/projects/${related.slug}`} key={related.slug}>
                <Card className="transition hover:border-[var(--accent)]">
                  <h3 className="font-semibold">{related.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {related.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function ProjectSection({ title, body }: { title: string; body: string }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{body}</p>
    </Card>
  );
}
