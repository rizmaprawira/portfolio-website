# Rizma Prawira — personal portfolio

A monochrome, static-first academic portfolio and journal. Built with Astro, TypeScript, Markdown collections, and custom CSS.

**Current stage: Phase 2 visual prototype, awaiting owner design feedback.** Implemented: Home, Research index (six approved summaries, two preprints), Blog index (four categories, no fabricated posts), shared navigation and footer, metadata, sitemap, empty RSS, custom 404, GitHub Pages configuration. Remaining pages are intentionally deferred.

## Local development

Requires Node.js 24 LTS or newer and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/portfolio-website/.

```sh
npm run check
npm run build
npm run validate:links
npm run preview
```

## Structure and content

- `src/content/research/*.md`: approved project summaries and metadata.
- `src/content/blog/`: future Markdown articles; deliberately empty.
- `src/content.config.ts`: validation schemas and locale/translation fields.
- `src/data/`: interface labels, contact links, category descriptions, publication records.
- `src/components/`, `src/layouts/`: reusable presentation.
- `src/styles/tokens.css`: palette and typography tokens.
- `docs/approved-content.txt`: extracted approved content, including internal notes (not served).
- Original DOCX: authoritative content source, retained at root (not served).

See [direction and phased plan](docs/implementation-plan.md) and [remaining content checklist](docs/content-checklist.md).

## Adding content after design approval

Add a research Markdown entry by copying an existing file. Update title, context, period, keywords, order, locale, translationKey, and body. The research index reads entries automatically. Detail templates will be added in Phase 3.

Blog schema is ready for `title`, `description`, `date` (ISO), `locale`, `category`, `tags`, `draft`, and optional `translationKey`. Keep all new drafts unpublished until the article route and index rendering are implemented in Phase 3. No articles are currently released. Publication dates and reading times will be displayed when article templates are built. Planned resources must keep their in-preparation status until verified links and materials exist.

Teaching content will use subject → topic → lesson → materials. Datasets and tools will use structured source, methodology, limitations, usage, and download metadata. These collections belong to Phase 3; see the approved content master for their wording.

English is the only live locale. Future translations share `translationKey`, while individual blog articles may exist in one language only. Do not show translation links until target content exists.

## GitHub Pages

The workflow is **manual** while the prototype awaits feedback. To deploy after review, enable Settings → Pages → Source → GitHub Actions, then run **Deploy portfolio to GitHub Pages** from Actions. The workflow checks, builds, validates links, uploads, and deploys `dist/`.

Defaults: `SITE_URL=https://rizmaprawira.github.io`, `BASE_PATH=/portfolio-website`.

For a root/custom domain, set `SITE_URL` to its origin and `BASE_PATH=/` in the workflow and local environment. Add an appropriate `public/CNAME` only when a domain has been confirmed. Both settings control generated links, canonicals, sitemap, and RSS. The existing `careerpage` repository is never used or modified.

```sh
SITE_URL=https://example.com BASE_PATH=/ npm run build
BASE_PATH=/ npm run validate:links
```

## Design conventions

Paper, ink, and gray only; Georgia headings, system sans-serif body; 1120px inner width; context margin on desktop; stacked layout on mobile. See the plan for exact colors, spacing, and typography. No external fonts, UI framework, or decorative imagery. Native mobile navigation works without JavaScript; blog category selection uses a small script. Keyboard focus, skip link, semantic landmarks, and reduced-motion support are included.
