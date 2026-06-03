import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const sections = [
  "Education",
  "Research Experience",
  "Publications",
  "Projects",
  "Awards",
];

export default function CvPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">CV</h1>
          <p className="mt-3 max-w-2xl leading-7 text-[var(--ink-muted)]">
            A simple academic CV page with room for the core sections and a
            downloadable PDF.
          </p>
        </div>
        <Button href="/cv/cv.pdf" variant="quiet">
          Download PDF
        </Button>
      </div>
      <div className="mt-8 space-y-4">
        {sections.map((section) => (
          <Card key={section}>
            <h2 className="text-lg font-semibold">{section}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
              Add entries here when the CV content is ready.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
