import Link from "next/link";

const stages = [
  {
    number: "01",
    title: "Starting From Measurement Systems",
    body: [
      <>
        I started doing research before I would have called it research. In
        middle school and high school I competed in a lot of science
        competitions, and my first major project from that period was the{" "}
        <ResearchLink href="/projects/pph-cup">PPH Cup</ResearchLink>, a
        low-cost silicone device for quantitative postpartum hemorrhage
        monitoring.
      </>,
      "The clinical problem was simple to state but hard to solve in practice: postpartum blood loss is often visually estimated, and visual estimation can miss the moment when fast recognition matters most. The device reframed the problem as a measurement system. Instead of asking clinicians to judge blood loss by sight, it routed collected blood into a graduated collection pathway that could give the team a volume reading in real time.",
      "That project grew far beyond a school prototype. I represented India at ISEF, received an Indian patent, and was awarded the National Bal Shakti Puraskar. More importantly for the way I now think, it taught me that a good abstraction is not just a mathematical convenience. Sometimes the abstraction is a physical interface that makes a messy real-world signal easier to reason about.",
    ],
  },
  {
    number: "02",
    title: "Moving Into Algorithmic Research",
    body: [
      <>
        After coming to UT Austin, I joined the Soloveichik Lab and began
        working on DNA molecular computation. This is the project that pulled
        my research interests most clearly toward algorithms and theoretical
        computer science. It is also the work behind my first-authored DNA32
        conference paper,{" "}
        <ResearchLink href="/projects/pareto-optimal-polymer-enumeration">
          Scalable Enumeration of Pareto-optimal Polymers for Computing
          Equilibrium Concentrations
        </ResearchLink>
        .
      </>,
      "The motivating problem is that engineered DNA systems are programmable, but their equilibrium behavior is difficult to verify. A finite set of monomer types can, in principle, generate infinitely many molecular complexes. If the candidate space is infinite, then computing equilibrium concentrations needs a principled way to decide which complexes are actually worth considering.",
      "We studied this candidate-enumeration problem in a geometry-free, domain-level abstraction called a domain-monomer system, generalizing Thermodynamic Binding Networks to an unsaturated setting where not every possible bond has to be formed. We defined Pareto-suboptimal polymers as complexes that can be split into non-interacting parts, then showed that restricting attention to Pareto-optimal polymers is thermodynamically justified: Pareto-suboptimal polymers do not appear in minimum free-energy configurations, and their total equilibrium concentration is small.",
      "The theoretical step I like most is that the infinite search space becomes finite: we prove that there are finitely many Pareto-optimal polymers and characterize them through Hilbert basis computation. To make the method scale, we then restrict the number of different monomer types that a polymer may contain and use combinatorial covering designs to reduce the number of Hilbert basis computations required. In benchmarks, this gave order-of-magnitude speedups while recovering nearly all equilibrium-relevant polymers.",
    ],
  },
  {
    number: "03",
    title: "Learning From Clinical Data And Interpretability",
    body: [
      <>
        During the summer after my first year, I joined the Pejaver Lab at the
        Icahn School of Medicine at Mount Sinai, working with Mohammed Syed
        under PI Vikas Pejaver. The project focused on rare-disease prediction
        from clinical notes. I wrote more about the project here:{" "}
        <ResearchLink href="/projects/rare-disease-prediction">
          rare-disease prediction from clinical notes
        </ResearchLink>
        .
      </>,
      "I worked on a BERT-based pipeline for identifying rare-disease patients from unstructured clinical text, but the part that interested me most was interpretability. In a clinical setting, a prediction is not very useful if it cannot point to the evidence it is using. A model that flags a patient but cannot explain what in the note drove that flag is hard to trust and hard to debug.",
      "This work gave me a useful contrast to my more theoretical projects. Sometimes the computational bottleneck is not enumeration or proof structure; it is extracting signal from messy text while keeping the model's behavior inspectable enough for a human to reason about.",
    ],
  },
  {
    number: "04",
    title: "Exploring Possible Research Directions",
    body: [
      "During my second undergraduate summer, I received the Moncrief Research Internship at UT Austin, working with Akshatha Nayak and PI Ilias Georgakopoulos-Soares. The beginning of that internship was intentionally exploratory. I tried several directions seriously, with the expectation that some would become projects and some would simply teach me the shape of the space.",
      "One direction was improving tandem repeat detection, especially higher-order repeats and hidden repeat structure. I spent time understanding where existing algorithms worked, where they struggled, and whether there was room for a cleaner formulation. After digging into the literature, it became clear that the space already had substantial work focused on higher-order repeats, so I set that direction aside.",
      "Another direction was rare-disease gene-panel optimization: could one choose a panel that improves identification for rare-disease cases? That led me into diagnostic workflow systems that were broader than the original idea. The interesting part was seeing how a clean optimization question changes once it is embedded in a larger clinical pipeline.",
      "I also explored private RNA-seq analysis using homomorphic encryption and proprietary atlas information. The idea was to let a user compute against sensitive biological references without exposing patient data or the atlas. The hard part was leakage: repeated queries could reveal information about the private atlas. Preventing that seemed to require operations outside the FHE setting I was considering, so I set the direction aside after working through the constraint.",
      "That exploratory phase was useful because it was hands-on. I was not just browsing topics; I was trying to turn each idea into a concrete research problem, checking where the real obstruction was, and then deciding whether it had enough structure to keep going.",
    ],
  },
  {
    number: "05",
    title: "Current Algorithmic Genomics Work",
    body: [
      "The internship then moved into HSeeker, a computational framework for systematic H-DNA sequence identification. H-DNA is an intramolecular triplex structure formed at homopurine-homopyrimidine mirror repeats, and existing detection tools often capture only part of the sequence space.",
      "The algorithmic problem is not exact string matching. H-DNA motifs have structure, but they also allow variation: hinge position, spacer length, imperfect mirror matching, purine-pyrimidine composition, and thermodynamic stability constraints. HSeeker combines a center-outward search over candidate hinge positions and spacer lengths, greedy overlap removal to resolve competing motifs, and an experimentally informed stability score that accounts for Hoogsteen G-G and A-A bonds, stacking contributions, mismatches, disrupted stacks, and boundary trimming.",
      "My contributions focused on speeding up the search and doing sensitivity analysis: how configuration choices affect detection, how to preserve experimentally relevant cases, and how to make the tool useful for high-throughput genomic analysis. The work is complete and preparing for submission.",
      <>
        I am also developing an algorithm for{" "}
        <ResearchLink href="/projects/long-inverted-repeat-detection">
          very large imperfect inverted repeat detection
        </ResearchLink>
        . Existing tools are not well suited for repeats with long arms, large
        spacers, and imperfect matching; naive approaches run into memory and
        runtime explosion. The goal is to detect approximate reverse-complement
        structure at genome scale and use it for a human-genome case study,
        especially to find large inverted repeats that are not already well
        documented.
      </>,
      <>
        In the same lab, I am also working on{" "}
        <ResearchLink href="/projects/privacy-preserving-genomics">
          low-latency privacy-preserving genomic models
        </ResearchLink>{" "}
        for tasks such as promoter classification, splice-site classification,
        and open chromatin region identification. This is still very much a
        work in progress, but the central issue is already clear: under
        homomorphic encryption, the computational model changes. Operations
        that are cheap in plaintext can become expensive or unsupported, so
        feature design and model architecture become algorithmic constraints,
        not implementation details.
      </>,
    ],
  },
  {
    number: "06",
    title: "Current Molecular Modeling Work",
    body: [
      "In the Soloveichik Lab, I am also working on a fluorophore project for DNA quantification. UV absorbance has a theoretical sequence-dependent model based on nearest-neighbor properties, but it is limited at very low DNA concentrations. Fluorescence can measure lower concentrations and often gives a linear fluorescence-versus-concentration relationship, but there is not yet a comparable theoretical model for predicting the slope from sequence. The question is whether that slope can be explained from sequence-level features rather than treated as an empirical calibration constant.",
      <>
        A related exploratory direction is{" "}
        <ResearchLink href="/projects/rna-interaction-energy-distribution">
          sequence interaction energy distribution
        </ResearchLink>
        : given two random sequences of length n, what is the distribution of
        their interaction energy under a specified model? The project is early,
        but the shape of the question is familiar: define the model carefully,
        simulate small cases, and look for structure that might become
        analytically tractable.
      </>,
    ],
  },
];

function ResearchLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="research-inline-link"
      href={href}
    >
      {children}
    </Link>
  );
}

function ResearchExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="research-inline-link"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <header className="max-w-4xl border-b border-[var(--line)] pb-10">
        <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
          Research
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          Research Journey
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--ink-muted)]">
          My research started with building scientific and clinical systems,
          then gradually moved toward the computational questions underneath
          them. So far, that path has taken me through molecular complexes,
          genomic structure, encrypted inference, and biological measurement.
          I like following problems far enough to see what kind of computation
          they actually need, whether that means a finite representation, a
          faster search, a private inference method, or a mathematical model
          for a messy signal.
        </p>
        <p className="mt-4 text-base leading-7 text-[var(--ink-muted)]">
          For the formal version, see my{" "}
          <ResearchLink href="/cv/archit-cv.pdf">CV</ResearchLink>.
        </p>
      </header>

      <div className="relative mt-12">
        <div
          aria-hidden="true"
          className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-[var(--line)] md:block"
        />
        <div className="grid gap-10">
          {stages.map((stage) => (
            <section
              className="relative grid gap-5 md:grid-cols-[5.5rem_1fr]"
              key={stage.number}
            >
              <div className="relative">
                <div className="flex size-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background)] text-xs font-semibold text-[var(--accent-strong)] shadow-sm">
                  {stage.number}
                </div>
              </div>
              <div className="border-b border-[var(--line)] pb-10">
                <h2 className="text-2xl font-semibold">{stage.title}</h2>
                <div className="mt-4 grid gap-4 text-base leading-8 text-[var(--ink-muted)]">
                  {stage.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
