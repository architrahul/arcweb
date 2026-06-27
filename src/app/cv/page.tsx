import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const researchExperience = [
  {
    title: "Undergraduate Research Intern",
    place: "Icahn School of Medicine at Mount Sinai, Professor Vikas Pejaver",
    dates: "Nov 2024 - Present",
    text: "Processed 1M+ clinical notes into a structured rare-disease dataset and built a BERT-based patient-identification pipeline.",
  },
  {
    title: "Undergraduate Research Assistant",
    place: "University of Texas at Austin, Professor David Soloveichik",
    dates: "Nov 2024 - Present",
    text: "Developed Hilbert-basis methods for DNA molecular programming and equilibrium analysis.",
  },
];

const cvProjects = [
  "Postpartum Hemorrhage Cup, a patented medical device for quantitative maternal blood-loss monitoring.",
  "Game Boy emulator in C++ using SDL2, implementing SM83 CPU behavior, memory-mapped I/O, rendering, and input.",
  "Pipelined RISC processor in Verilog with hazard resolution and instruction forwarding.",
  "Coroutine scheduler in C supporting high-concurrency task scheduling.",
];

const awards = [
  "All India Rank 53 in JEE Mains and Rank 160 in JEE Advanced among 1.2 million candidates.",
  "Top 1% nationally in India in Physics, Astronomy, and Chemistry Olympiads.",
];

const coursework = [
  "Data Structures",
  "Discrete Math",
  "Number Theory",
  "Calculus I-III",
  "Probability I",
  "Real Analysis",
  "Differential Equations and Linear Algebra",
  "Computer Architecture",
  "Operating Systems",
];

export default function CvPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-8">
        <div>
          <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
            Academic CV
          </p>
          <h1 className="mt-2 text-4xl font-semibold">Archit Patil</h1>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--ink-muted)]">
            Academic record covering research experience, education, technical
            background, projects, coursework, and awards.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/cv/archit-cv.pdf" variant="primary">
            Download CV
          </Button>
          <Button href="/resume/Archit_Resume.pdf" variant="quiet">
            Resume
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold">Education</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            University of Texas at Austin. B.S. Computer Science, Turing Scholar
            Honors, Mathematics, and Computational Biology.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
            Expected May 2027. Cumulative GPA: 3.732/4.0.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Programming</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            Python, Java, C, C++, HTML, JavaScript, SQL, LaTeX, Git, PyTorch,
            TensorFlow, ARM/x86 Assembly, and Verilog.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Links</h2>
          <div className="mt-3 grid gap-2 text-sm text-[var(--ink-muted)]">
            <a className="transition hover:text-[var(--foreground)]" href="https://github.com/architrahul" rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a className="transition hover:text-[var(--foreground)]" href="https://www.linkedin.com/in/architrpatil/" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </Card>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Research Experience</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {researchExperience.map((item) => (
            <Card key={item.title}>
              <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
                {item.dates}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{item.place}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                {item.text}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--ink-muted)]">
            {cvProjects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold">Awards</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--ink-muted)]">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-10">
        <Card>
          <h2 className="text-2xl font-semibold">Coursework</h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--ink-muted)]">
            {coursework.map((course) => (
              <span
                className="rounded-sm border border-[var(--line)] px-2 py-1"
                key={course}
              >
                {course}
              </span>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">CV PDF</h2>
        <div className="mt-4 overflow-hidden rounded border border-[var(--line)] bg-[var(--panel)]">
          <iframe
            className="h-[760px] w-full"
            src="/cv/archit-cv.pdf"
            title="Archit Patil academic CV PDF"
          />
        </div>
      </section>
    </section>
  );
}
