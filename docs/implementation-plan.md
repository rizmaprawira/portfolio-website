# Direction and implementation plan

## Phase 1: discovery

The supplied English v1 document is authoritative. Its original is retained at the project root; `approved-content.txt` is a paragraph-preserving extraction. No material from the old site overrides it.

The existing careerpage is approachable through first-person introductions and personal context, but uses a long promotional layout, repeated calls to action, skills, testimonials, and imagery. The academic reference makes affiliations, research interests, and publications easy to locate. This project uses a quieter personal index with separate research and writing pages, without copying either layout.

Stack: Astro 7, strict TypeScript, Markdown content collections, custom CSS, static GitHub Pages output. No client framework, CMS, database, or external font dependency. Owner approved using patched Astro 7 after the initial Astro 6 dependency audit identified advisories.

## Sitemap and content

Initial prototype: `/`, `/research/`, `/blog/`, `/blog/rss.xml`, custom 404.

After design approval: `/experience/`, `/research/[slug]/`, `/teaching/`, `/teaching/[subject]/[topic]/[lesson]/`, `/code-data-ai/`, `/code-data-ai/[slug]/`, `/blog/[slug]/`, `/contact/`, and a CV download when supplied.

During the prototype, About, Teaching, and Code navigation links point to real homepage previews. Research entries are summaries, not links to unbuilt detail pages. No article ideas become published posts.

Content: typed locale-aware interface dictionary; Markdown research entries and blog collection; structured publication records. Future experience, resource, and lesson collections follow the same pattern. English is the only public locale. Translations use shared translation keys; language navigation appears only when an actual translation exists.

## Visual system

Concept: a personal research notebook, with a quiet nameplate and an asymmetric introduction. Wide headings are balanced by a small left margin for context. Content stays on the page rather than in cards. Avoid dense newspaper columns and ornamental scientific diagrams.

Palette: paper `#FAFAF8`, ink `#151515`, muted `#666666`, rule `#DDDDDA`, surface `#F1F1EF`. No accent color.

Type: locally available Georgia for expressive headings, system sans-serif for body and navigation. No downloaded fonts. Body 17px, 1.7 line height; readable measures around 65 characters. Display headings scale from 40px on mobile to 68px on desktop. Sentence case labels and native typographic hierarchy.

Spacing: 4px base; 8, 12, 16, 24, 32, 48, 64, 96. Content max 1120px. Desktop margin column 200px; mobile stacks in reading order. Borders separate sections, with no ornamental numbering, shadows, or card grid.

Components: shared layout, header, native mobile disclosure navigation, section heading, research list, publication list, footer. Keyboard focus, skip link, current-page state, reduced-motion handling.

## Phase 2: prototype and review gate

Build Home, Research, Blog, header, footer. Use all six approved research summaries and clearly labeled preprints. Show category filters and a truthful empty blog. Build, typecheck, validate internal links, inspect desktop/mobile. Commit and push the prototype to the new public repository. Stop for design feedback before Phase 3.

## Later phases

Phase 3 completes the remaining routes and content templates after approval. Phase 4 validates the full site, confirms publication statuses and resource permissions, and deploys using GitHub Pages. A manually triggered Pages workflow is prepared for the prototype; pushing does not automatically launch an unfinished website.
