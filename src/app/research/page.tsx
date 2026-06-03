import Link from "next/link";
import { projects } from "@/content/projects";
import { Card } from "@/components/ui/Card";

const researchProjects = projects.filter((project) =>
  project.tags.some((tag) => ["Computational Biology", "Genomics", "RNA"].includes(tag)),
);

export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Research</h1>
        <p className="mt-3 leading-7 text-[var(--ink-muted)]">
          Current research areas, questions, publications, collaborators, and
          selected technical projects will live here.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Current Areas</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            Computational biology, genomic algorithms, privacy-preserving
            computation, and scientific software.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Publications</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            Publication entries can be added as structured data once the first
            public list is ready.
          </p>
        </Card>
      </div>
      <h2 className="mt-10 text-xl font-semibold">Selected Projects</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {researchProjects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <Card className="h-full transition hover:border-[var(--accent)]">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                {project.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
