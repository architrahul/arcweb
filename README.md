# Arcweb

Arcweb is a personal website and research portfolio built around an interactive atlas. The site is designed to feel less like a standard portfolio and more like an explorable map of research, projects, writing, and technical experiments.

The core idea is simple: the homepage is the map. Visitors can explore project landmarks directly, while a conventional top navigation bar remains available for people who want quick access to Research, Projects, Writing, CV, and Contact.

## Vision

Arcweb should be visually memorable without becoming flashy or gimmicky. It should feel polished enough for professors, researchers, recruiters, and collaborators, while still having enough personality to be instantly recognizable.

The website should communicate:

- research depth
- technical curiosity
- interdisciplinary work
- active exploration
- strong project taste

The goal is not to make a fantasy game. The goal is to make a professional research portfolio with a distinctive interactive atlas interface.

## Core Design Concept

The homepage is an interactive fantasy-inspired map representing an intellectual landscape.

Projects appear as landmarks on the map. Related projects can be placed near each other or connected visually through paths, roads, rivers, or other subtle geographic features. The map organizes information spatially, not metaphorically.

Visitors should be able to:

- hover over project landmarks to preview them
- click landmarks to open detailed project pages
- use top navigation tabs for direct access
- discover optional hidden features through exploration

## Key Design Principle: No Corny Naming

The map can look fantasy-inspired, but the labels should stay literal and professional.

Avoid names like:

- Hilbert Mountains
- Encryption Desert
- Kingdom of Biology
- Forest of Algorithms
- Dungeon of Systems

Use actual project names instead:

- Long Inverted Repeat Detection
- Pareto-Optimal Polymer Enumeration
- Privacy-Preserving Genomics
- RNA Interaction Energy Distribution
- Game Boy Emulator
- Medical Device Startup

The fantasy aesthetic is visual. The content naming is direct.

## Visual Direction

### Inspiration

The visual style should draw from:

- fantasy cartography
- old exploration maps
- hand-drawn atlases
- scientific expedition diagrams
- parchment maps
- technical sketches

### Atlas Rendering Rules

The homepage atlas should be built as SVG inside the app, not as a flat
background image. The map should be primarily line art: coastlines, paths,
rivers, mountains, ornament, and landmarks should come from strokes and simple
filled accents rather than detailed painted illustration.

Theme treatment:

- Light mode should resemble an elegant medieval or fantasy parchment map with
  warm parchment tones and ochre/brown linework.
- Dark mode should use white or off-white linework on a deep dark-blue
  background.
- The SVG should use theme-aware CSS variables so the same map structure works
  in light, dark, and system modes.
- Project names must remain literal and readable. The fantasy aesthetic is in
  the cartography, not in renamed regions.

### Avoid

The site should not resemble:

- RPG game interfaces
- MMORPG maps
- Dungeons & Dragons UI
- cartoon fantasy worlds
- over-animated portfolio templates

### Desired Feel

The site should feel:

- elegant
- exploratory
- technical
- minimal
- handcrafted
- memorable

A visitor should think:

> This is an interesting researcher with a strong technical identity.

not:

> This person built a fantasy game.

## Homepage Experience

The homepage should open directly onto the interactive atlas.

The map should fill the full first viewport below the top navigation. A quiet
top navigation bar should sit above it or overlay it subtly.

Recommended top navigation:

```txt
Archit Patil        Research    Projects    Writing    CV    Contact
```

The navigation exists as a fallback. The map remains the primary interface.

The first viewport should be map-first. Explanatory text such as `Arcweb` and
site description copy should appear below the fold or in a separate About
section, not compete with the atlas in the first screen.

### Project Marker Interaction

Each visible project marker should support:

1. **Hover preview**
   - project title
   - one-sentence description
   - status
   - tags
   - the full visible project description should live in the hover/focus card,
     not as always-visible text on the map

2. **Click action**
   - opens the project detail page
   - optionally uses a smooth zoom-like transition

Markers must be keyboard accessible links or buttons. Hover cards must appear
on keyboard focus as well as pointer hover.

Example hover card:

```txt
Long Inverted Repeat Detection

Detecting large imperfect inverted repeats with long spacers.

Status: Active
Tags: Computational Biology, Algorithms, Genomics
```

## Top Navigation Fallback

Not every visitor will want to explore the map. The site should support direct navigation through conventional tabs.

Required pages:

- Research
- Projects
- Writing
- CV
- Contact

The top navigation should be visually quiet:

- small text
- transparent or blurred background
- subtle hover underline
- no heavy buttons
- no competition with the map

There should also be a clear `View all projects` option for users who want a linear list.

## Information Architecture

### `/`

Interactive atlas homepage.

Contains:

- map
- project markers
- hover previews
- top navigation
- optional map controls
- optional `View all projects` button

### `/projects`

A conventional list/grid of all projects.

Useful for visitors who do not want map-based navigation.

### `/projects/[slug]`

Individual project pages.

Each project page should include:

- problem
- motivation
- approach
- results
- artifacts
- timeline
- related projects

### `/research`

Research-focused page.

Should include:

- current research areas
- publications
- collaborators or labs, if appropriate
- active research questions
- selected research projects

### `/writing`

Technical writing and notes.

Possible categories:

- research notes
- paper reviews
- algorithm explanations
- project postmortems
- exploratory ideas

### `/cv`

Simple academic CV page.

Should include:

- education
- research experience
- publications
- projects
- awards
- downloadable PDF

### `/contact`

Simple contact page.

Should include:

- email
- GitHub
- LinkedIn
- Google Scholar, if available
- optional short collaboration note

## Project Page Template

Each project should follow a consistent structure.

```md
# Project Title

## Summary
Short description of the project.

## Problem
What problem is this solving?

## Motivation
Why does this problem matter?

## Approach
What methods, algorithms, tools, or systems were used?

## Results
What was achieved or learned?

## Artifacts
- Paper
- Code
- Poster
- Slides
- Data

## Timeline
Important project milestones.

## Related Work
Optional notes on related tools, papers, or prior work.

## Related Projects
Links to nearby projects in the atlas.
```

## Initial Project Landmarks

Possible first set of landmarks:

- Pareto-Optimal Polymer Enumeration
- Long Inverted Repeat Detection
- Privacy-Preserving Genomics
- RNA Interaction Energy Distribution
- Game Boy Emulator
- Medical Device Startup
- Coroutine Implementations
- Verilog Pipelining
- Computational Biology Research

These should be placed intentionally. Projects with conceptual overlap should be spatially closer.

## Map Structure

The map should not be divided into obvious academic regions like `Algorithms`, `Biology`, and `Math` unless that becomes necessary later.

Instead:

- projects occupy locations naturally
- related projects are near each other
- paths indicate conceptual relationships
- terrain creates visual separation
- landmarks indicate importance or status
- markers stay compact; use hover/focus cards instead of large visible project cards
- a quiet `View all projects` fallback link stays available for direct navigation

The map does not need to be fully explainable. It only needs to make exploration intuitive.

## Easter Eggs

Easter eggs should reward curiosity without distracting from the main website.

They should feel like hidden discoveries, not cheat codes.

Avoid arbitrary key sequences. Prefer environmental discovery.

### Hidden Spider

A small spider exists somewhere on the map.

The spider is not announced or explained in the interface. Most visitors should never notice it.

The spider should be:

- small
- subtle
- non-distracting
- occasionally animated
- integrated naturally into the map environment

Possible behaviors:

- moves away when the cursor approaches
- crawls along paths, coastlines, or terrain boundaries
- hides behind landmarks
- relocates between visits
- disappears into a hidden area

The spider should feel like a living creature inhabiting the map, not like a UI widget.

### Secret Workshop

If a visitor successfully follows or clicks the spider, a hidden workshop area becomes accessible.

Possible contents:

- Conway's Game of Life simulation
- cellular automata experiments
- algorithm visualizations
- research ideas that never became projects
- unfinished technical prototypes
- side experiments

The workshop should feel like discovering a hidden room behind the atlas.

### Design Constraint

The spider is an easter egg, not the brand.

Visitors should remember the site as the interactive atlas website, not the spider website.

## World-Building Details

Ambient details can make the map feel alive without distracting from content.

Possible additions:

- slow drifting clouds
- subtle water motion
- tiny moving ship
- occasional campfire flicker near project markers
- birds crossing the map
- soft terrain parallax

These details should be added after the core map works.

## Technical Stack

Recommended stack:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX
- Vercel

Optional additions:

- inline SVG map layer
- React SVG pan/zoom library
- Content collections or custom project metadata
- lightweight command palette later

## Suggested Repository Structure

```txt
arcweb/
  src/
    app/
      page.tsx
      layout.tsx
      globals.css
      projects/
        page.tsx
        [slug]/
          page.tsx
      research/
        page.tsx
      writing/
        page.tsx
      cv/
        page.tsx
      contact/
        page.tsx

    components/
      atlas/
        AtlasMap.tsx
        ProjectMarker.tsx
        ProjectHoverCard.tsx
        MapControls.tsx
        HiddenSpider.tsx

      layout/
        TopNav.tsx
        SiteShell.tsx

      ui/
        Button.tsx
        Card.tsx

    content/
      projects.ts
      writing/

    lib/
      projects.ts
      utils.ts

  public/
    atlas/
      map-base.svg
      textures/
      markers/
    cv/
      cv.pdf
```

## Development Roadmap

### Phase 1: Foundation

Goal: establish the basic website infrastructure.

Tasks:

- initialize Next.js project
- configure TypeScript
- configure Tailwind CSS
- create global layout
- create top navigation
- deploy empty site to Vercel
- create project metadata structure

Deliverable:

- working deployed skeleton site

### Phase 2: Static Atlas Prototype

Goal: build the first version of the map homepage.

Tasks:

- create or import a rough map background
- add project markers with fixed coordinates
- implement hover cards
- implement click-through to project pages
- add `View all projects` fallback

Deliverable:

- usable map homepage with project navigation

### Phase 3: Project Content System

Goal: make project pages easy to add and maintain.

Tasks:

- create project data schema
- create reusable project page template
- add first batch of project pages
- add related project links
- create `/projects` index page

Deliverable:

- complete first project set

### Phase 4: Atlas Interaction

Goal: make the map feel polished and responsive.

Tasks:

- add smooth hover animations
- add subtle zoom/pan behavior if useful
- add map controls
- improve mobile behavior
- add selected/active project states

Deliverable:

- polished interactive atlas experience

### Phase 5: Visual Polish

Goal: make the site memorable without overloading it.

Tasks:

- refine typography
- refine color palette
- improve terrain/map art
- add subtle ambient animations
- add loading states
- improve transitions

Deliverable:

- professional visual identity

### Phase 6: Easter Eggs

Goal: add hidden exploratory features.

Tasks:

- implement hidden spider
- implement spider interaction behavior
- create secret workshop route or modal
- add Conway's Game of Life simulation
- add experimental visualizations

Deliverable:

- discoverable hidden content

### Phase 7: Public Launch

Goal: prepare the website for public use.

Tasks:

- add SEO metadata
- add Open Graph images
- add analytics
- test accessibility
- test mobile layout
- connect custom domain if desired
- final content pass

Deliverable:

- production-ready personal website

## Implementation Priorities

Build in this order:

1. deployable skeleton
2. top navigation
3. static map homepage
4. project markers
5. hover cards
6. project pages
7. map polish
8. writing/CV pages
9. ambient details
10. easter eggs

Do not start with the spider or advanced animations. The atlas must work first.

## Success Criteria

The website succeeds if:

1. visitors immediately recognize it as different from a standard portfolio
2. the map is interesting but still easy to navigate
3. project names and summaries are immediately understandable
4. the top navigation provides a clear fallback
5. visitors can reach important information quickly
6. the site feels professional, not childish
7. the content remains stronger than the visual gimmick
8. the atlas can grow as new projects are added

## Core Rule

The map should serve the content.

The content should never be sacrificed for the map.
