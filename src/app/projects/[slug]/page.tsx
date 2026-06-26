import Link from "next/link";
import Image from "next/image";
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
                <li key={item}>{item}</li>
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
      <section className="pph-hero relative overflow-hidden border-b border-[#d5e5df] bg-[linear-gradient(135deg,#f8fffc_0%,#eef8f5_52%,#f7f1f2_100%)] px-5 py-10 dark:border-white/10 dark:bg-[linear-gradient(135deg,#111d1b_0%,#132522_55%,#24191d_100%)]">
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

      <section className="pph-white border-b border-[#d5e5df] bg-white px-5 py-14 dark:border-white/10 dark:bg-[#121a18]">
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
                className="pph-card rounded border border-[#dce9e5] bg-[#f6fbf9] p-5 dark:border-white/10 dark:bg-white/[0.04]"
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
          <div className="overflow-hidden rounded border border-[#d5e5df] bg-white shadow-xl shadow-[#0e3f38]/5 dark:border-white/10 dark:bg-[#151f1d]">
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

    </article>
  );
}
