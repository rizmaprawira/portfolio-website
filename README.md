# Rizma Prawira — portfolio, research archive & journal

An image-led academic portfolio inspired by the visual structure of Rizma’s original careerpage. Built with Astro 7, strict TypeScript, Markdown collections, and custom CSS. No backend, external font service, or client UI framework.

## Status

Implemented: Home, About & Experience, Research index and all six research detail pages, Teaching hub and six subject pages, Code/Data/AI library and six resource detail pages, Blog index, Markdown article and lesson templates, Contact, CV availability, XML sitemap, RSS, and custom 404.

The blog and lesson libraries are deliberately empty until genuine content is supplied. Five planned/draft resources remain clearly labeled. A CV PDF has not been supplied. No suggested blog titles are published as articles. The original careerpage repository and deployment are untouched. GitHub Pages deployment remains manual and must be authorized by the owner before launch.

## Development

Requires Node 24 LTS or newer and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/portfolio-website/.

```sh
npm run check
npm run build
npm run validate:links
npm run validate:markdown
```

`npm run preview` serves production output. GitHub Pages defaults are `SITE_URL=https://rizmaprawira.github.io` and `BASE_PATH=/portfolio-website`. For a root/custom domain, set `SITE_URL` to its origin and `BASE_PATH=/` when building and checking links. Add `public/CNAME` only for a confirmed domain. `.github/workflows/deploy.yml` is manually triggered; pushing source does not deploy.

## Content and components

- `Rizma_Approved_Website_Content_EN_v1.docx`: authoritative source. `docs/approved-content.txt` is the extracted master, including internal notes (not served).
- `src/content/research/`: six Markdown project entries; `src/data/projects.ts` maps each entry to its supplied figure and any related preprint.
- `src/data/copy.ts`, `profile.ts`, `home.ts`: approved biography, history, teaching, AI statements, and resource records.
- `src/data/image-manifest.json`: supplied asset descriptions and dimensions. Originals are preserved in `AssetsToUse/`; web copies are under `public/images/`.
- `src/data/postal-preview.json`: five real public CSV records with source URL and retrieval date.
- `src/components/portfolio/`: shared media, project preview, figure viewer wrapper, and page hero. `src/components/home/` contains reused icon, timeline, workflow, and figure-dialog components.
- `src/styles/portfolio.css`: the current visual system, layered over shared base styles. Neutral UI, natural image colors, Georgia headings and system sans-serif text, icon-based navigation, portrait introduction, and alternating research rows.

See [design audit](docs/redesign-review/design-audit.md), [asset inventory](docs/redesign-review/asset-inventory.md), [contact sheet](docs/redesign-review/asset-contact-sheet.jpg), and screenshot review under `docs/redesign-review/`.

## Add a research project

Add one Markdown file to `src/content/research/`, copying an existing entry. Keep title, context, period, keywords, order, locale, translationKey, and approved body. Add its primary image mapping to `src/data/projects.ts`. The index and detail route are generated automatically; no page duplication is needed. Use `publication` only for an actual record in `src/data/publications.ts`. Preprints remain distinct from peer-reviewed publications. Do not infer unapproved findings from images.

## Add a resource

Add one structured resource record to `resources` in `src/data/home.ts` with a unique stable `slug`, approved title, type, status, metadata, description, and a verified URL or `null`. Listing and detail routes are generated automatically. Keep planned resources in preparation until sources, permissions, usage, and licensing are ready. No download should be linked without an actual file.

## Publish an article

Add `src/content/blog/my-article.md`:

```yaml
---
title: "Your approved article title"
description: "An accurate summary."
date: 2026-10-19
locale: en
translationKey: optional-shared-key
category: Science & Research
tags: [meteorology]
draft: true
---
```

The four categories are Science & Research, Technology & AI, Education & Learning, and Life & Reflections. Write genuine Markdown content below the frontmatter. Start body sections at `##`; the page template supplies the single `h1` title. Preview and review, then set `draft: false` to release it. The index, category filter, article route, date, reading time, related articles, tags, optional heading table of contents, and RSS update automatically. Optional cover fields are `cover`, `coverAlt`, and `coverCaption`; cover URLs must include the repository base when using public files. Use relative Markdown asset imports where appropriate, and always provide descriptive alt text.

Markdown supports links, fenced code blocks, native HTML figures/captions, references, and math using `$...$` or `$$...$$`. Equations are rendered at build time by KaTeX with trust disabled; no browser-side math runtime is required. Keep sources and references alongside the writing. This project supports Markdown; MDX is intentionally not installed because interactive components are maintained as Astro components.

## Publish a lesson

Add Markdown to `src/content/lessons/`, optionally in nested folders. Required fields: `title`, `description`, `subject`, `topic`; optional `locale`, `translationKey`, `draft`, and `materials`. Subject must match one of the six approved subject names. Use a stable folder/file ID; routes become `/teaching/lessons/<id>/`. Materials use `{title, url, type}` where type is PDF, Exercises, Answer key, Code, or Video. `draft` defaults to true. A lesson appears in its subject page only when released. Add only genuine materials and verified links. Related lessons are selected from the same subject. Accessible video embeds can be authored as HTML with a title.

## Images and permissions

Responsive, proportionally resized WebP variants preserve the complete image composition. Scientific figures use lossless encoding; photographs use quality-88 encoding to reduce transfer size. Scientific plot axes, legends, and colors are not cropped or filtered. Original full files remain accessible through keyboard/touch lightboxes, zoom, and original-image links. The owner explicitly approved the parametric-insurance image and keeping the certificate as supplied, including its identifiers and signatures. Other supplied media are used in their indicated context; no people in the project group photo are named or assigned roles.

Formal third-party credits and the P1/P2 year mapping still need confirmation. The supplied labels are retained meanwhile. No invented institutional logos, teaching images, software screenshots, or research plots are used.

To regenerate image sizes after adding a supplied asset, update `src/data/image-manifest.json` and run `python3 scripts/prepare-images.py` with Pillow installed. The script preserves originals and creates proportional WebP variants, lossless for figures and quality 88 for photographs. Normal site builds use the checked-in images and need no Python dependency.

## Localization

English is the only released language. Collection records carry `locale` and optional shared `translationKey`. Navigation and category labels live in `src/data/site.ts`. Add actual translated content and locale routes before enabling a language switcher. Posts may exist in only one language; no empty Indonesian routes are exposed. Canonical URLs use the configured deployment origin and base.

## V3 homepage review checkpoint

The v3 homepage follows `Rizma_Codex_Visual_Redesign_Brief_v3.md` and uses the English DOCX as the factual source. Gate 1 reference matrix and page plan: [docs/v3-review/gate-1.md](docs/v3-review/gate-1.md). Homepage component/tokens guide: [docs/v3-review/maintenance.md](docs/v3-review/maintenance.md). Asset provenance: [ASSET_CREDITS.md](ASSET_CREDITS.md). Final screenshots and browser results are in `docs/v3-review/`. Gate 3 interior redesign is awaiting owner approval. Deployment remains manual and has not been triggered.

### Homepage refinement checkpoint

Stronger colors, readable type and shorter previews are documented in [docs/refinement-review/report.md](docs/refinement-review/report.md), with before/first-pass/final screenshots and browser results. The owner's latest refinement brief is preserved there. The Senyar panel(a) thumbnail recipe is in `scripts/prepare-images.py`; full originals and interior designs remain intact. Await homepage approval before propagating the system.
