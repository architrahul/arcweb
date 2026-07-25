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
  artifacts?: Array<string | { label: string; href: string }>;
  timeline: string[];
  related: string[];
};

export const projects: Project[] = [
  {
    slug: "pareto-optimal-polymer-enumeration",
    title: "Pareto-Optimal Polymer Enumeration",
    description:
      "A DNA32-accepted algorithmic molecular programming paper on finite, scalable candidate enumeration for equilibrium analysis.",
    status: "Completed",
    tags: ["DNA Computing", "Molecular Programming", "Algorithms"],
    position: { x: 42, y: 28 },
    summary:
      "A first-authored DNA32 conference paper on scalable enumeration of Pareto-optimal polymers in domain-monomer systems.",
    problem:
      "A finite set of DNA monomer types can generate infinitely many molecular complexes, but equilibrium solvers need a finite candidate list.",
    motivation:
      "Large engineered DNA systems need equilibrium verification, especially to understand intended products and leakage pathways.",
    approach:
      "Use thermodynamically justified Pareto optimality, characterize the finite candidate set through Hilbert bases, and scale enumeration with support bounds and covering designs.",
    results:
      "Accepted at DNA32, with order-of-magnitude speedups over direct Hilbert-basis computation while recovering nearly all equilibrium-relevant polymers.",
    artifacts: [
      {
        label: "One-page abstract",
        href: "/pareto-optimal-polymers/abstract.pdf",
      },
      {
        label: "Code and data repository",
        href: "https://github.com/architrahul/Pareto-polymer-enumerator",
      },
    ],
    timeline: [
      "Soloveichik Lab research project",
      "Hilbert-basis characterization",
      "Support-bounded covering-design algorithm",
      "DNA32 conference acceptance",
      "Publication forthcoming",
    ],
    related: ["privacy-preserving-genomics"],
  },
  {
    slug: "rare-disease-prediction",
    title: "Rare Disease Prediction From Clinical Notes",
    description:
      "A Mount Sinai Pejaver Lab project using clinical notes and BERT-based models to identify rare-disease patients.",
    status: "Completed",
    tags: ["Biomedical ML", "Clinical NLP", "Rare Disease"],
    position: { x: 34, y: 47 },
    summary:
      "An undergraduate research project with Professor Vikas Pejaver and mentor Mohammed Ghouse Syed on rare-disease prediction from unstructured MIMIC-IV clinical notes.",
    problem:
      "Rare diseases are often diagnosed years late, while useful early signals are scattered across long, noisy, inconsistent clinical notes.",
    motivation:
      "A model that can flag likely rare-disease patients from pre-diagnosis notes could support downstream analysis, cohort construction, and earlier clinical investigation.",
    approach:
      "Processed 1M+ clinical notes, mapped rare diseases through Orphanet and ICD codes, built matched patient/control cohorts, and fine-tuned ClinicalBERT-style models with sliding windows over long notes.",
    results:
      "Delivered a BERT-based rare-disease prediction pipeline reaching about 85% AUC on MIMIC-derived experiments, with attention-style highlighting for interpretability.",
    artifacts: [
      {
        label: "GitHub repository",
        href: "https://github.com/architrahul/rare-disease-prediction",
      },
      {
        label: "Final presentation PDF",
        href: "/rare-disease-prediction/presentation.pdf",
      },
    ],
    timeline: [
      "Undergraduate researcher, May 2025 - Aug 2025",
      "MIMIC-IV and Orphanet data preparation",
      "ClinicalBERT fine-tuning and model comparison",
      "Interpretability and note-highlighting experiments",
    ],
    related: ["privacy-preserving-genomics"],
  },
  {
    slug: "game-boy-emulator",
    title: "GheithBoy Emulator",
    description:
      "A C++ and SDL2 Game Boy emulator modeling CPU, memory, graphics, timers, interrupts, and input.",
    status: "Completed",
    tags: ["C++", "Emulation", "Computer Architecture"],
    position: { x: 76, y: 60 },
    summary:
      "A Computer Architecture final project building a C++ Game Boy emulator with SDL2 graphics and keyboard input.",
    problem:
      "Accurate Game Boy emulation requires the CPU, memory-mapped devices, graphics pipeline, timers, interrupts, and input state to cooperate under hardware-style timing constraints.",
    motivation:
      "Emulator development is a compact way to connect instruction-level architecture, memory systems, device behavior, and real-time rendering.",
    approach:
      "The team implemented modular CPU, MMU, RAM, PPU, timer, interrupt, and joypad components, using SDL2 for frame rendering and keyboard events.",
    results:
      "The emulator runs multiple included no-MBC Game Boy ROMs, including Tetris, Dr. Mario, Tennis, NFL Football, and Dragon Slayer, with a real-time performance target near 60 FPS.",
    artifacts: [
      {
        label: "GitHub repository",
        href: "https://github.com/architrahul/Gheithboy-emulator",
      },
      {
        label: "Demo image",
        href: "/game-boy-emulator/demo.png",
      },
    ],
    timeline: [
      "Computer Architecture final project",
      "SM83-style CPU and instruction execution",
      "Memory-mapped I/O and hardware timers",
      "SDL2 rendering and keyboard controls",
      "April 2025 project completion",
    ],
    related: ["operating-systems-implementation"],
  },
  {
    slug: "operating-systems-implementation",
    title: "Operating Systems Implementation",
    description:
      "A C++ and assembly kernel project culminating in a graphics subsystem capable of running multiplayer DOOM.",
    status: "Completed",
    tags: ["Operating Systems", "Kernel", "Graphics"],
    position: { x: 68, y: 68 },
    summary:
      "A semester-long operating systems implementation sequence covering scheduling, memory, filesystems, syscalls, networking, and a final graphics subsystem.",
    problem:
      "A real operating system has to coordinate CPU scheduling, memory isolation, I/O, files, system calls, and device-facing subsystems without race conditions or leaks.",
    motivation:
      "Building the kernel incrementally made core OS abstractions concrete, from preemption and process isolation to graphics I/O and user-mode interaction.",
    approach:
      "Implemented kernel components in C++ and assembly across staged projects, then led a 4-person final-project team building the graphics subsystem.",
    results:
      "Built a multi-core preemptive kernel, supported virtual memory, filesystems, user programs, 25+ syscalls, networking, and graphics modes used by a multiplayer DOOM demo.",
    artifacts: [
      {
        label: "Final presentation PDF",
        href: "/os-implementation/presentation.pdf",
      },
    ],
    timeline: [
      "Cooperative scheduling",
      "Preemptive scheduling",
      "Shared pointers and memory safety",
      "Filesystems and virtual memory",
      "User mode and system calls",
      "Networking and graphics subsystem",
    ],
    related: ["game-boy-emulator"],
  },
  {
    slug: "pph-cup",
    title: "PPH Cup",
    description:
      "A low-cost silicone medical device for quantitative postpartum hemorrhage monitoring.",
    status: "Completed",
    tags: ["Medical Device", "Maternal Health", "Obstetrics"],
    position: { x: 46, y: 78 },
    summary:
      "A low-cost silicone medical device designed to capture and quantify postpartum blood loss in real time for clearer hemorrhage detection and clinical decision-making.",
    problem:
      "Postpartum hemorrhage care depends on timely escalation, but visual estimation is frequently inaccurate and can delay response during the golden hour.",
    motivation:
      "A focused collection device can give obstetric teams measured volume data while blood loss is still clinically actionable.",
    approach:
      "The device uses a shallow silicone cup inlet, long transfer stem, and bifurcated distal outlet to route blood loss toward a calibrated collection bag while preserving a second path for patency or suction-assisted workflow.",
    results:
      "Used across 49+ hospitals in India, with a 300-patient clinical-study record and an associated 95% reduction in PPH-related maternal mortality in the study setting.",
    artifacts: [
      "Clean device render",
      "Graduated collection-bag illustration",
      "Device facts brief",
      "Clinical-study summary",
    ],
    timeline: [
      "Concept and prototype archive",
      "Safety and ethics materials",
      "Clinical-study documentation",
      "Obstetric workflow feedback",
    ],
    related: [],
  },
  {
    slug: "automating-pcr-xarm",
    title: "Automating PCR with the UFACTORY xArm 6 Lite",
    description:
      "A UT Austin ECLAIR club group project automating PCR preparation with robotics, vision, and motorized pipette control.",
    status: "Completed",
    tags: ["Robotics", "PCR", "Computer Vision"],
    position: { x: 58, y: 54 },
    summary:
      "A 2025 Research Week poster from a UT Austin ECLAIR club group project that explored robotic automation for PCR preparation using the UFACTORY xArm 6 Lite.",
    problem:
      "PCR reaction setup relies on precise manual pipetting, which is labor-intensive and can introduce variability into sample preparation.",
    motivation:
      "Automating repetitive lab preparation steps can improve efficiency, precision, and reproducibility in molecular biology workflows.",
    approach:
      "The project combined computer vision for beaker and workspace localization, a custom 3D-printed gripper for micropipette manipulation, Arduino-controlled motorized pipette actuation, and ROS/Python control around the xArm 6 Lite.",
    results:
      "Presented as a 2025 UT Austin Research Week poster and archived through the Texas ScholarWorks repository.",
    artifacts: [
      {
        label: "Texas ScholarWorks repository record",
        href: "https://repositories.lib.utexas.edu/items/9625fabd-98cf-4bac-ad2c-cec61da85e15",
      },
      {
        label: "DOI: 10.26153/tsw/60485",
        href: "https://doi.org/10.26153/tsw/60485",
      },
      {
        label: "Poster PDF",
        href: "/pcr-automation/pcr-poster.pdf",
      },
    ],
    timeline: [
      "ECLAIR club group project",
      "Robotic PCR workflow prototype",
      "2025 Research Week poster",
      "Texas ScholarWorks archive",
    ],
    related: [],
  },
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
    related: ["rna-interaction-energy-distribution"],
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
    related: ["long-inverted-repeat-detection", "rare-disease-prediction"],
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
    related: ["long-inverted-repeat-detection"],
  },
];
