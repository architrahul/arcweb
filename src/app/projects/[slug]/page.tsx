import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
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

  if (project.slug === "pph-cup") {
    return <PphCupPage />;
  }

  if (project.slug === "automating-pcr-xarm") {
    return <PcrAutomationPage />;
  }

  if (project.slug === "game-boy-emulator") {
    return <GameBoyEmulatorPage />;
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
          {project.artifacts ? (
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-muted)]">
              {project.artifacts.map((item) => (
                <li key={typeof item === "string" ? item : item.href}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <a
                      className="transition hover:text-[var(--foreground)]"
                      href={item.href}
                      rel="noreferrer"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
              Paper, code, poster, slides, and data links can be added here as the
              public materials are ready.
            </p>
          )}
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

const pcrAuthors = [
  ["Sharma, Angelica", "https://repositories.lib.utexas.edu/browse/author?startsWith=Sharma,%20Angelica"],
  ["Kantharaju, Vishal", "https://repositories.lib.utexas.edu/browse/author?startsWith=Kantharaju,%20Vishal"],
  ["Lay-Sok, Thida", "https://repositories.lib.utexas.edu/browse/author?startsWith=Lay-Sok,%20Thida"],
  ["Chase, Nathan", "https://repositories.lib.utexas.edu/browse/author?startsWith=Chase,%20Nathan"],
  ["Seenivasan, Harish", "https://repositories.lib.utexas.edu/browse/author?startsWith=Seenivasan,%20Harish"],
  ["Nguyen, Andrew", "https://repositories.lib.utexas.edu/browse/author?startsWith=Nguyen,%20Andrew"],
  ["Gautam, Kritika", "https://repositories.lib.utexas.edu/browse/author?startsWith=Gautam,%20Kritika"],
  ["Kumari, Harshita", "https://repositories.lib.utexas.edu/browse/author?startsWith=Kumari,%20Harshita"],
  ["Shenoy, Esha", "https://repositories.lib.utexas.edu/browse/author?startsWith=Shenoy,%20Esha"],
  ["Shah, Aarya", "https://repositories.lib.utexas.edu/browse/author?startsWith=Shah,%20Aarya"],
  ["Patil, Archit", "https://repositories.lib.utexas.edu/browse/author?startsWith=Patil,%20Archit"],
];

function RepositoryLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      className="text-[var(--accent-strong)] underline-offset-4 transition hover:underline"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function MetadataRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2 border-t border-[var(--line)] py-4 md:grid-cols-[150px_1fr]">
      <dt className="text-sm font-semibold text-[var(--foreground)]">{label}</dt>
      <dd className="text-sm leading-6 text-[var(--ink-muted)]">{children}</dd>
    </div>
  );
}

const pcrAbstract =
  "Polymerase Chain Reaction (PCR) is a fundamental technique in molecular biology, extensively employed in genetic analysis, disease diagnostics, and forensic science. Despite its critical role, the preparation of PCR reactions remains a labor-intensive process that relies on precise pipetting of reagents, a task susceptible to human error and variability. Manual pipetting can lead to inconsistencies in sample preparation, impacting the accuracy and reproducibility of experimental results. To address these challenges, computer automation has gained significant attention, aiming to improve efficiency, precision, and scalability in laboratory workflows. This work presents an innovative robotic system designed to automate the pipetting process for PCR preparation using the xArm 6 Lite robotic arm. Our approach combines computer vision for precise object localization and volume verification, a custom 3D-printed gripper for micropipette manipulation, and motorized actuation controlled by an Arduino-based system. By leveraging the Robot Operating System (ROS) and Python, along with deep learning-based image analysis techniques, we enhance the precision and repeatability of the PCR process.";

function PcrAutomationPage() {
  return (
    <article className="project-case-page">
      <section className="case-section border-b px-5 py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <Link
              className="text-sm text-[var(--ink-muted)] transition hover:text-[var(--foreground)]"
              href="/projects"
            >
              Back to projects
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] case-accent">
              Completed Robotics And Lab Automation Project
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Automating PCR with the UFACTORY xArm 6 Lite
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">
              A UT Austin ECLAIR club group project exploring robotic PCR
              preparation through computer vision, a custom pipette gripper,
              Arduino-controlled actuation, and ROS/Python xArm control.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <RepositoryLink href="https://github.com/ECLAIR-Robotics/PCR_Automation">
                GitHub repository
              </RepositoryLink>
              <RepositoryLink href="https://repositories.lib.utexas.edu/items/9625fabd-98cf-4bac-ad2c-cec61da85e15">
                Texas ScholarWorks record
              </RepositoryLink>
              <RepositoryLink href="https://doi.org/10.26153/tsw/60485">
                DOI
              </RepositoryLink>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded border case-panel shadow-xl shadow-black/5">
              <Image
                alt="Poster titled Automating PCR with the UFACTORY xArm 6 Lite"
                className="h-auto w-full"
                height={5040}
                priority
                src="/pcr-automation/pcr-poster.png"
                width={6720}
              />
            </div>
            <p className="text-sm leading-6 text-[var(--ink-muted)]">
              Presented as a 2025 Research Week poster and archived through
              Texas ScholarWorks.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Date", "2025"],
            ["Department", "Computer Science"],
            ["Keywords", "Robotics, computer science, PCR"],
            ["Collection", "Research Week"],
          ].map(([label, value]) => (
            <div
              className="rounded border case-panel p-5"
              key={label}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] case-accent">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="text-2xl font-semibold">Primary Materials</h2>
            <div className="mt-5 grid gap-3 text-sm">
              <RepositoryLink href="https://repositories.lib.utexas.edu/bitstreams/83db988a-1399-4e92-9f11-feadfe222a72/download">
                PCR Poster.pptx.pdf (441.88 KB)
              </RepositoryLink>
              <a
                className="text-[var(--accent-strong)] underline-offset-4 transition hover:underline"
                href="/pcr-automation/pcr-poster.pdf"
              >
                Local poster PDF
              </a>
              <RepositoryLink href="https://github.com/ECLAIR-Robotics/PCR_Automation">
                ECLAIR-Robotics/PCR_Automation
              </RepositoryLink>
              <RepositoryLink href="https://hdl.handle.net/2152/133153">
                https://hdl.handle.net/2152/133153
              </RepositoryLink>
              <RepositoryLink href="https://doi.org/10.26153/tsw/60485">
                https://doi.org/10.26153/tsw/60485
              </RepositoryLink>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Project Summary</h2>
            <p className="mt-4 leading-8 text-[var(--ink-muted)]">
              {pcrAbstract}
            </p>
          </div>
        </div>
      </section>

      <section className="case-section border-y case-soft px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Vision",
              "Localized beakers and workspace elements for robotic interaction.",
            ],
            [
              "End Effector",
              "Custom 3D-printed gripper designed around micropipette handling.",
            ],
            [
              "Actuation",
              "Arduino-controlled motorized pipette operation for liquid transfer.",
            ],
            [
              "Robot Control",
              "ROS/Python workflow coordinating the UFACTORY xArm 6 Lite.",
            ],
          ].map(([title, text]) => (
            <div
              className="rounded border case-panel p-5"
              key={title}
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-soft px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold">Project Team</h2>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-[var(--ink-muted)]">
            {pcrAuthors.map(([name, href], index) => (
              <span key={name}>
                <RepositoryLink href={href}>{name}</RepositoryLink>
                {index < pcrAuthors.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold">Archive Details</h2>
          <dl className="mt-4">
            <MetadataRow label="Date">
              <RepositoryLink href="https://repositories.lib.utexas.edu/browse/dateissued?startsWith=2025">
                2025
              </RepositoryLink>
            </MetadataRow>
            <MetadataRow label="Department">
              <RepositoryLink href="https://repositories.lib.utexas.edu/browse/department?startsWith=Computer%20Science">
                Computer Science
              </RepositoryLink>
            </MetadataRow>
            <MetadataRow label="Keywords">
              Robotics, computer science, PCR
            </MetadataRow>
            <MetadataRow label="URI">
              <div className="grid gap-1">
                <RepositoryLink href="https://hdl.handle.net/2152/133153">
                  https://hdl.handle.net/2152/133153
                </RepositoryLink>
                <RepositoryLink href="https://doi.org/10.26153/tsw/60485">
                  https://doi.org/10.26153/tsw/60485
                </RepositoryLink>
              </div>
            </MetadataRow>
            <MetadataRow label="Collections">
              <RepositoryLink href="https://repositories.lib.utexas.edu/collections/c84a9566-3beb-46f1-8067-81548a59aae4">
                Research Week
              </RepositoryLink>
            </MetadataRow>
          </dl>
        </div>
      </section>
    </article>
  );
}

const emulatorTeam = ["Archit Patil", "Jai Nagaraj", "Ella Whitney", "Rishi"];

const emulatorTechDetails = [
  ["Language", "C++"],
  ["Graphics/Input", "SDL2"],
  [
    "Core Architecture",
    "Modular emulator with separate CPU, MMU, RAM, PPU, timer, interrupt, and input components",
  ],
  [
    "CPU",
    "Implements Game Boy SM83-style instruction execution, register behavior, stack operations, and instruction decoding",
  ],
  [
    "Memory",
    "Emulates 64KB addressable memory, ROM loading, VRAM, OAM, and memory-mapped I/O",
  ],
  [
    "PPU",
    "Renders background, window, and sprites through a scanline-based graphics pipeline",
  ],
  [
    "Timing",
    "Coordinates CPU cycles, PPU ticks, hardware timers, interrupts, and VBlank behavior",
  ],
  ["Input", "Maps SDL keyboard events to Game Boy joypad buttons"],
  [
    "ROM Support",
    "Runs included no-MBC .gb ROMs from the project's games/ directory",
  ],
  ["Performance Goal", "Smooth real-time emulation around 60 FPS"],
];

const emulatorHardwareAreas = [
  {
    title: "CPU",
    text: "SM83-style instruction execution, register behavior, flag updates, stack operations, and decoded control flow.",
  },
  {
    title: "Memory",
    text: "64KB address space covering ROM loading, VRAM, OAM, RAM regions, and memory-mapped device registers.",
  },
  {
    title: "PPU",
    text: "Scanline rendering for background, window, and sprite layers, synchronized with VBlank behavior.",
  },
  {
    title: "I/O",
    text: "Timers, interrupts, and joypad state modeled as hardware-facing emulator components.",
  },
];

const emulatorRoms = [
  "Tetris",
  "Dr. Mario",
  "Tennis",
  "NFL Football",
  "Dragon Slayer",
];

function GameBoyEmulatorPage() {
  return (
    <article className="project-case-page">
      <section className="case-section border-b px-5 py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <Link
              className="text-sm text-[var(--ink-muted)] transition hover:text-[var(--foreground)]"
              href="/projects"
            >
              Back to projects
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] case-accent">
              Completed Computer Architecture Project
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              GheithBoy Emulator
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">
              A C++ Game Boy emulator built with SDL2 for graphics and keyboard
              input, modeling the original handheld's CPU, memory system,
              graphics pipeline, timers, interrupts, and joypad controls.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <RepositoryLink href="https://github.com/architrahul/Gheithboy-emulator">
                GitHub repository
              </RepositoryLink>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded border case-panel p-3 shadow-xl shadow-black/5">
              <Image
                alt="GheithBoy emulator demo screen showing a Game Boy game running"
                className="h-auto w-full rounded-sm"
                height={1231}
                priority
                src="/game-boy-emulator/demo.png"
                width={1298}
              />
            </div>
            <p className="text-sm leading-6 text-[var(--ink-muted)]">
              Built as an April 2025 Computer Architecture final project by
              Archit Patil, Jai Nagaraj, Ella Whitney, and Rishi.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Date", "April 2025"],
            ["Course", "Computer Architecture"],
            ["Language", "C++"],
            ["Runtime Target", "About 60 FPS"],
          ].map(([label, value]) => (
            <div
              className="rounded border case-panel p-5"
              key={label}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] case-accent">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="text-2xl font-semibold">Primary Materials</h2>
            <div className="mt-5 grid gap-3 text-sm">
              <RepositoryLink href="https://github.com/architrahul/Gheithboy-emulator">
                architrahul/Gheithboy-emulator
              </RepositoryLink>
              <a
                className="text-[var(--accent-strong)] underline-offset-4 transition hover:underline"
                href="/game-boy-emulator/demo.png"
              >
                Local demo image
              </a>
            </div>

            <h2 className="mt-10 text-2xl font-semibold">Included No-MBC ROMs</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {emulatorRoms.map((rom) => (
                <span
                  className="rounded border case-panel px-3 py-1 text-sm text-[var(--ink-muted)]"
                  key={rom}
                >
                  {rom}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Website Summary</h2>
            <p className="mt-4 leading-8 text-[var(--ink-muted)]">
              Built a C++ Game Boy emulator that models the original handheld's
              CPU, memory system, graphics pipeline, timers, interrupts, and
              input handling. The emulator uses SDL2 to render frames and
              process keyboard controls, and supports multiple included no-MBC
              Game Boy ROMs. The project emphasized low-level systems
              programming, hardware emulation, instruction decoding,
              memory-mapped device behavior, and real-time rendering at roughly
              60 FPS.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section border-y case-soft px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold">Emulated Hardware Areas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {emulatorHardwareAreas.map((item) => (
              <div
                className="rounded border case-panel p-5"
                key={item.title}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold">Technical Details</h2>
          <dl className="mt-4">
            {emulatorTechDetails.map(([label, value]) => (
              <MetadataRow label={label} key={label}>
                {value}
              </MetadataRow>
            ))}
          </dl>
        </div>
      </section>

      <section className="case-section border-t case-soft px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold">Project Team</h2>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-[var(--ink-muted)]">
            {emulatorTeam.map((name, index) => (
              <span key={name}>
                {name}
                {index < emulatorTeam.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

const clinicalStats = [
  {
    value: "14M",
    label: "global PPH cases yearly",
    text: "WHO's PPH Roadmap cites about 14 million women experiencing postpartum hemorrhage each year.",
  },
  {
    value: "70,000",
    label: "global deaths yearly",
    text: "WHO's Roadmap cites about 70,000 maternal deaths each year from postpartum hemorrhage.",
  },
  {
    value: "88",
    label: "India MMR",
    text: "India's latest official SRS figure is 88 maternal deaths per 100,000 live births for 2021-2023.",
  },
  {
    value: "30-50%",
    label: "visual-estimation error",
    text: "Clinical literature reports substantial underestimation at higher blood-loss volumes; ACOG cites about 30% error.",
  },
];

const devicePrinciples = [
  "A soft silicone cup is placed in the lower or mid vaginal canal after delivery, or around caesarean-section workflow as clinically directed.",
  "Collected blood is routed through the stem and tubing into a graduated collection bag, giving the team a volume reading instead of a visual guess.",
  "A second port supports intermittent suction or patency protocols when needed, including clot clearance before device removal.",
];

const evidenceStats = [
  {
    value: "49+",
    label: "hospitals across India",
    text: "Documented field adoption for obstetric blood-loss monitoring workflows.",
  },
  {
    value: "95%+",
    label: "PPH mortality reduction",
    text: "Associated with 95% reduction in PPH-related maternal mortality in the study setting.",
  },
  {
    value: "300",
    label: "observational-study cases",
    text: "Clinical-study record from Government Medical College, Akola.",
  },
  {
    value: "100%",
    label: "timely alarm reporting",
    text: "Study summary reported timely alarms and accurate post-delivery blood-loss measurement.",
  },
];

function PphCupPage() {
  return (
    <article className="pph-device-page bg-[#f7fbfa] text-[#142320] dark:bg-[#101817] dark:text-[#eef7f4]">
      <section className="pph-hero relative overflow-hidden border-b border-[#d5e5df] bg-[linear-gradient(135deg,#f8fffc_0%,#eef8f5_52%,#f7f1f2_100%)] px-5 py-10 dark:bg-[linear-gradient(135deg,#111d1b_0%,#132522_55%,#24191d_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Link
              className="text-sm text-[#557069] transition hover:text-[#173d36] dark:text-[#a9c8c0] dark:hover:text-white"
              href="/projects"
            >
              Back to projects
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e] dark:text-[#7dd3c7]">
              Quantitative Postpartum Hemorrhage Monitoring Device
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] text-[#102a26] md:text-7xl dark:text-white">
              PPH Cup
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-[#4a635d] dark:text-[#bdd3cd]">
              A low-cost silicone medical device designed to capture and
              quantify postpartum blood loss in real time, providing obstetric
              teams a more accurate basis for hemorrhage detection and clinical
              decision-making.
            </p>
          </div>

          <div className="relative">
            <div className="flex h-[360px] max-h-[58vh] items-center justify-center md:h-[430px] lg:h-[500px] lg:justify-end">
              <Image
                alt="Clean render of the PPH Cup device geometry"
                className="h-full w-auto object-contain drop-shadow-2xl"
                height={1906}
                priority
                src="/pph-cup/device-render-reference-smooth.png"
                width={825}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pph-white border-b border-[#d5e5df] bg-white px-5 py-14 dark:bg-[#121a18]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b3f55] dark:text-[#f3a6b7]">
              Clinical Stakes
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#132d29] dark:text-white">
              PPH is a volume problem before it becomes an obvious shock
              problem.
            </h2>
            <p className="mt-4 leading-7 text-[#526861] dark:text-[#b7cbc5]">
              The clinical risk is not only bleeding; it is delayed recognition.
              The first 60 minutes after delivery are treated as the golden hour,
              when objective blood-loss measurement can support faster
              resuscitation and escalation. PPH is commonly defined at 500 mL or
              more within 24 hours; severe PPH is commonly defined at 1,000 mL or
              more or with hemodynamic instability.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {clinicalStats.map((item) => (
              <div
                className="pph-card rounded border border-[#dce9e5] bg-[#f6fbf9] p-5"
                key={item.label}
              >
                <h3 className="text-3xl font-semibold text-[#12342f] dark:text-white">
                  {item.value}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9b3f55] dark:text-[#f3a6b7]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5b706a] dark:text-[#b7cbc5]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pph-soft px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded border border-[#d5e5df] bg-white shadow-xl shadow-[#0e3f38]/5 dark:bg-[#151f1d]">
            <Image
              alt="Clinical measurement system concept for the PPH Cup"
              className="h-full min-h-[360px] w-full object-cover"
              height={929}
              src="/pph-cup/measurement-system-bottom-connected.png"
              width={1692}
            />
          </div>
          <div className="self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f766e] dark:text-[#7dd3c7]">
              How It Works
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#132d29] dark:text-white">
              Blood flows from the cup to the collection bag.
            </h2>
            <p className="mt-4 leading-7 text-[#526861] dark:text-[#b7cbc5]">
              The cup receives postpartum blood loss, directs it through the
              stem and tubing, and delivers it into a graduated bag. The output
              is a measured volume that can be tracked during the period when
              clinical signs may lag behind actual blood loss.
            </p>
            <div className="mt-7 grid gap-3">
              {devicePrinciples.map(
                (item) => (
                  <div
                    className="border-l-2 border-[#0f766e] bg-white px-4 py-3 text-sm font-medium !text-[#21433d] shadow-sm"
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pph-deep bg-[#172b28] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8ee5d7]">
              Adoption And Outcomes
            </p>
            <h2 className="mt-3 text-4xl font-semibold">
              Used across India with clinical-use evidence behind the device
              story.
            </h2>
            <p className="mt-4 leading-7 text-[#c6d8d3]">
              The archive records hospital adoption, ethics-reviewed clinical
              study material, safety/toxicity testing, and obstetric feedback.
              The key claim is direct: earlier measured recognition during the
              golden hour reduces missed PPH escalation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {evidenceStats.map((item) => (
              <div
                className="border-l border-[#6bd6c6] bg-white/[0.06] px-5 py-4"
                key={item.label}
              >
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8ee5d7]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#e8f4f1]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pph-soft px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b3f55] dark:text-[#f3a6b7]">
                Product Design
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-[#132d29] dark:text-white">
                Simple to understand, fast to place, and built for real obstetric workflows.
              </h2>
              <p className="mt-4 leading-7 text-[#526861] dark:text-[#b7cbc5]">
                The PPH Cup is a medical device designed to be simple for an
                obstetric team to understand and use in a fast-paced operating
                or delivery-room workflow. Its form avoids a complicated setup:
                the soft silicone cup captures postpartum blood loss, the stem
                provides a direct transfer path away from the care field, and
                the outlet connects to a graduated collection bag for
                quantitative monitoring.
              </p>
              <p className="mt-4 leading-7 text-[#526861] dark:text-[#b7cbc5]">
                The design is centered on minimal handling. Instead of asking
                clinicians to estimate soaked materials or visually judge
                pooled blood, the device channels blood into a dedicated
                measurement pathway while allowing the team to continue standard
                postpartum assessment and treatment.
              </p>
              <p className="mt-4 leading-7 text-[#526861] dark:text-[#b7cbc5]">
                The cup geometry, silicone material concept, outlet routing,
                and collection-bag interface are meant to make the device feel
                familiar in clinical use: easy to inspect, easy to connect, and
                focused on delivering a clearer volume signal during the
                immediate postpartum window.
              </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d5e5df] bg-white px-5 py-14 dark:bg-[#121a18]">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f766e] dark:text-[#7dd3c7]">
              Contact And Inquiry
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#132d29] dark:text-white">
              For clinical, product, or collaboration inquiries.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="rounded border border-[#dce9e5] bg-[#f6fbf9] p-5 transition hover:border-[#0f766e]"
              href="tel:+919823040164"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b3f55] dark:text-[#f3a6b7]">
                Phone
              </p>
              <p className="mt-2 text-lg font-semibold text-[#132d29] dark:text-white">
                +91 9823040164
              </p>
            </a>
            <a
              className="rounded border border-[#dce9e5] bg-[#f6fbf9] p-5 transition hover:border-[#0f766e]"
              href="mailto:architrahul2006@gmail.com?subject=PPH%20Cup%20Inquiry"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b3f55] dark:text-[#f3a6b7]">
                Email
              </p>
              <p className="mt-2 break-words text-lg font-semibold text-[#132d29] dark:text-white">
                architrahul2006@gmail.com
              </p>
            </a>
          </div>
        </div>
      </section>

    </article>
  );
}
