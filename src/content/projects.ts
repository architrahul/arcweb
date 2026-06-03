export type Project = {
  slug: string;
  title: string;
  description: string;
  status: "Active" | "Prototype" | "Completed" | "Exploratory";
  tags: string[];
  position: {
    x: number;
    y: number;
  };
  summary: string;
  problem: string;
  motivation: string;
  approach: string;
  results: string;
  timeline: string[];
  related: string[];
};

export const projects: Project[] = [
  {
    slug: "long-inverted-repeat-detection",
    title: "Long Inverted Repeat Detection",
    description: "Detecting large imperfect inverted repeats with long spacers.",
    status: "Active",
    tags: ["Computational Biology", "Algorithms", "Genomics"],
    position: { x: 24, y: 36 },
    summary:
      "An algorithmic research project focused on identifying long inverted repeat structures in genomic sequences.",
    problem:
      "Large imperfect repeats are difficult to detect efficiently when spacer lengths grow and mutations accumulate.",
    motivation:
      "Better repeat detection can support biological discovery in regions where conventional local matching is too brittle.",
    approach:
      "Develop targeted sequence algorithms, benchmark against controlled cases, and evaluate behavior on realistic genomic inputs.",
    results:
      "The first site version reserves this page for methods, benchmarks, artifacts, and result summaries.",
    timeline: ["Prototype algorithm", "Benchmark harness", "Research writeup"],
    related: ["computational-biology-research", "rna-interaction-energy-distribution"],
  },
  {
    slug: "pareto-optimal-polymer-enumeration",
    title: "Pareto-Optimal Polymer Enumeration",
    description: "Exploring polymer candidates through multi-objective enumeration.",
    status: "Exploratory",
    tags: ["Enumeration", "Optimization", "Research"],
    position: { x: 42, y: 28 },
    summary:
      "A technical exploration of polymer candidates organized around tradeoffs rather than a single score.",
    problem:
      "Candidate spaces can grow quickly, making it hard to understand which designs are meaningfully non-dominated.",
    motivation:
      "Pareto views can make search results more interpretable for scientific and engineering design work.",
    approach:
      "Represent candidates with comparable objectives, enumerate feasible structures, and surface non-dominated sets.",
    results: "Initial content will collect notes, code artifacts, and visual summaries.",
    timeline: ["Define objectives", "Build enumerator", "Visualize frontier"],
    related: ["privacy-preserving-genomics"],
  },
  {
    slug: "privacy-preserving-genomics",
    title: "Privacy-Preserving Genomics",
    description: "Secure computation ideas for genomic analysis workflows.",
    status: "Active",
    tags: ["Privacy", "Genomics", "Cryptography"],
    position: { x: 64, y: 34 },
    summary:
      "A research direction around genomic computation where sensitive inputs remain protected.",
    problem:
      "Genomic data is deeply identifying, but useful analysis often requires shared computation across institutions.",
    motivation:
      "Privacy-preserving methods can make collaboration safer without giving up scientific utility.",
    approach:
      "Study secure computation primitives, model realistic genomic tasks, and measure practical tradeoffs.",
    results: "This page will become the home for notes, experiments, and references.",
    timeline: ["Literature map", "Prototype workloads", "Performance notes"],
    related: ["long-inverted-repeat-detection", "computational-biology-research"],
  },
  {
    slug: "rna-interaction-energy-distribution",
    title: "RNA Interaction Energy Distribution",
    description: "Modeling distributions of RNA interaction energies.",
    status: "Prototype",
    tags: ["RNA", "Statistics", "Biophysics"],
    position: { x: 30, y: 58 },
    summary:
      "A computational biology project studying how interaction energies vary across RNA sequence contexts.",
    problem:
      "Energy landscapes can be hard to summarize when many candidate interactions are plausible.",
    motivation:
      "Distributional views can reveal structure that single best-hit summaries miss.",
    approach:
      "Combine sequence sampling, energy evaluation, and statistical summaries of interaction behavior.",
    results: "Reserved for early plots, methodology, and validation notes.",
    timeline: ["Sampling setup", "Energy calculations", "Distribution analysis"],
    related: ["long-inverted-repeat-detection", "computational-biology-research"],
  },
  {
    slug: "game-boy-emulator",
    title: "Game Boy Emulator",
    description: "A systems project implementing classic handheld console behavior.",
    status: "Completed",
    tags: ["Systems", "Emulation", "Low-Level"],
    position: { x: 76, y: 60 },
    summary:
      "A low-level systems project focused on CPU behavior, memory mapping, graphics, and timing.",
    problem:
      "Accurate emulation requires many small hardware details to cooperate under strict timing constraints.",
    motivation:
      "Emulators are a compact way to learn systems programming, debugging, and architectural fidelity.",
    approach:
      "Implement the core CPU loop, memory model, display pipeline, and test against known behavior.",
    results: "This page will collect implementation notes and screenshots when ready.",
    timeline: ["CPU core", "Memory bus", "Display pipeline"],
    related: ["coroutine-implementations", "verilog-pipelining"],
  },
  {
    slug: "medical-device-startup",
    title: "Medical Device Startup",
    description: "A product and engineering effort around healthcare technology.",
    status: "Active",
    tags: ["Medical Devices", "Product", "Engineering"],
    position: { x: 54, y: 72 },
    summary:
      "A practical engineering track connecting technical development, users, and clinical constraints.",
    problem:
      "Healthcare tools need to work within demanding human, regulatory, and operational contexts.",
    motivation:
      "The best technical ideas need product discipline to become useful in real clinical settings.",
    approach:
      "Combine prototyping, user discovery, technical validation, and product scoping.",
    results: "The first public version will stay high-level until details are ready to share.",
    timeline: ["Discovery", "Prototype", "Validation"],
    related: ["privacy-preserving-genomics"],
  },
  {
    slug: "coroutine-implementations",
    title: "Coroutine Implementations",
    description: "Exploring control flow, scheduling, and language runtime mechanics.",
    status: "Prototype",
    tags: ["Programming Languages", "Runtime", "Systems"],
    position: { x: 70, y: 44 },
    summary:
      "A systems and programming languages project about how coroutine abstractions can be implemented.",
    problem:
      "High-level coroutine syntax hides subtle runtime choices about suspension, scheduling, and state.",
    motivation:
      "Understanding those choices makes async systems easier to reason about and debug.",
    approach:
      "Build small implementations that expose the mechanics behind coroutine control flow.",
    results: "Reserved for diagrams, notes, and implementation comparisons.",
    timeline: ["Minimal runtime", "Scheduler examples", "Writeup"],
    related: ["game-boy-emulator", "verilog-pipelining"],
  },
  {
    slug: "verilog-pipelining",
    title: "Verilog Pipelining",
    description: "Hardware design experiments with pipelined digital logic.",
    status: "Completed",
    tags: ["Hardware", "Verilog", "Architecture"],
    position: { x: 83, y: 34 },
    summary:
      "A hardware design project centered on timing, pipeline stages, and digital architecture tradeoffs.",
    problem:
      "Pipelined systems improve throughput but introduce hazards, timing constraints, and design complexity.",
    motivation:
      "Hardware work makes abstraction costs concrete and sharpens systems intuition.",
    approach:
      "Design modules in Verilog, reason about stage boundaries, and test behavior with simulations.",
    results: "This page will hold design notes and representative modules.",
    timeline: ["Module design", "Pipeline stages", "Simulation"],
    related: ["game-boy-emulator", "coroutine-implementations"],
  },
  {
    slug: "computational-biology-research",
    title: "Computational Biology Research",
    description: "Research questions at the edge of algorithms and biological data.",
    status: "Active",
    tags: ["Computational Biology", "Research", "Algorithms"],
    position: { x: 18, y: 68 },
    summary:
      "A broader research area collecting computational biology projects, questions, and collaborations.",
    problem:
      "Biological data often requires algorithms that respect both computational constraints and scientific context.",
    motivation:
      "Strong computational tools can make difficult biological questions easier to ask and test.",
    approach:
      "Frame research questions, build focused tools, and evaluate them against realistic biological data.",
    results: "This page will eventually link out to specific papers, posters, and project artifacts.",
    timeline: ["Research questions", "Project prototypes", "Artifacts"],
    related: ["long-inverted-repeat-detection", "rna-interaction-energy-distribution"],
  },
];
