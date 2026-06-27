import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const experience = [
  {
    role: "Moncrief Computational Genomics Engineering Intern",
    organization: "Oden Institute for Computational Sciences, UT Austin",
    date: "May 2026 - Present",
    bullets: [
      "Constructed private genomic sequence models achieving 89% accuracy on splice-site, promoter, and OCR tasks.",
      "Designed a spacer-independent IRF algorithm that reduces spacer-dependent complexity from O(spacer length) to O(1) for specific repeat ranges, yielding over 50x processing-time improvement.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    organization: "Professor David Soloveichik, UT Austin",
    date: "May 2025 - Present",
    bullets: [
      "First-authored a DNA32 conference publication on scalable Hilbert-basis algorithms for equilibrium analysis in DNA molecular computation.",
      "Reduced full enumeration to covering-design subproblems, achieving over 1000x speedup on large systems.",
    ],
  },
  {
    role: "Undergraduate Course Assistant, CS311H Discrete Math Honors",
    organization: "UT Austin",
    date: "Aug 2025 - Dec 2025",
    bullets: [
      "Planned and graded assignments and led 10+ office hours for 50 students in sets, graph theory, and combinatorics.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    organization: "Professor Vikas Pejaver, Icahn School of Medicine at Mount Sinai",
    date: "May 2025 - Aug 2025",
    bullets: [
      "Processed 1M+ clinical notes to build a structured dataset mapping rare diseases for downstream analysis.",
      "Delivered 85% AUC identifying patients with rare diseases from the MIMIC database using a BERT-based pipeline.",
    ],
  },
];

const projects = [
  "Ear-EEG pain monitoring with foundation models, including channel-perturbed Tent-LCC test-time adaptation.",
  "Operating systems implementation with a multi-core preemptive kernel, virtual memory, file systems, process isolation, and a graphics subsystem capable of running multiplayer DOOM.",
  "Game Boy emulator in C++/SDL2 with SM83 CPU, memory-mapped I/O, sprite/background rendering, and 60 FPS event-loop and PPU behavior.",
  "Five-stage pipelined 16-bit RISC processor in Verilog with data/control hazard handling and instruction forwarding.",
  "Patented PPH Cup for real-time postpartum blood-loss quantification, deployed across hospitals in India.",
];

const honors = [
  "All India Rank 53 in JEE Mains and Rank 160 in JEE Advanced among 1.2 million candidates.",
  "Top 1% nationally in India in Physics, Astronomy, and Chemistry Olympiads.",
];

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-8">
        <div>
          <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
            Resume/CV
          </p>
          <h1 className="mt-2 text-4xl font-semibold">Archit Patil</h1>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--ink-muted)]">
            Computer science, mathematics, and computational biology student at
            UT Austin, working across algorithms, systems, ML infrastructure,
            private computation, unconventional computing, and bioinformatics.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/resume/Archit_Resume.pdf" variant="primary">
            Download Resume
          </Button>
          <Button href="/cv/archit-cv.pdf" variant="primary">
            Academic CV
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold">Education</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            B.S. Computer Science, Turing Scholars; Mathematics; Computational
            Biology. University of Texas at Austin.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
            GPA: 3.75. Expected May 2028.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Technical Skills</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            Python, C++, C, Java, JavaScript, SQL, Verilog, ARM/x86 Assembly,
            PyTorch, TensorFlow, React, Node.js.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Domains</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
            Algorithms, systems, ML infrastructure, private computation,
            unconventional computing, and bioinformatics.
          </p>
        </Card>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-5 grid gap-4">
          {experience.map((item) => (
            <Card key={`${item.role}-${item.organization}`}>
              <div className="flex flex-wrap justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-muted)]">
                    {item.organization}
                  </p>
                </div>
                <p className="text-sm font-medium text-[var(--accent-strong)]">
                  {item.date}
                </p>
              </div>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--ink-muted)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--ink-muted)]">
            {projects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold">Honors</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--ink-muted)]">
            {honors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Resume PDF</h2>
        <div className="mt-4 overflow-hidden rounded border border-[var(--line)] bg-[var(--panel)]">
          <iframe
            className="h-[760px] w-full"
            src="/resume/Archit_Resume.pdf"
            title="Archit Patil resume PDF"
          />
        </div>
      </section>
    </section>
  );
}
