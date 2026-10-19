# Prototype validation — 19 October 2026

- Astro 7.4: `npm run check` passes with 0 errors, warnings, or hints.
- `npm run build` passes for GitHub Pages `/portfolio-website/`.
- Separate build using `SITE_URL=https://example.com BASE_PATH=/` passes.
- Both outputs pass the local link checker: 81 links/assets across 4 HTML pages, including fragment targets.
- Generated RSS and sitemap documents parse as XML. RSS contains no fabricated articles.
- Generated HTML has one h1, one main landmark, and `lang=en` per page.
- Six Markdown research entries retain the approved summaries. Two publication records retain their preprint labels.
- Installation audit after the owner-approved Astro 7 upgrade: 0 vulnerabilities.
- `git diff --check` passes.
- Local preview homepage returns HTTP 200.

## Verification limits

No browser was connected to this environment; the in-app browser automation entry point reported unavailable. Desktop/mobile screenshots, visual layout inspection, interactive category behavior, keyboard operation, and an automated accessibility audit could not be performed. Responsive CSS and semantic markup were inspected in source, but these are not substitutes for browser verification. The Codex preview opening was queued.

Expected build messages: the blog collection is empty because no genuine articles were supplied. These are deliberate content warnings, not missing fabricated examples.

Pages deployment is not triggered during this prototype. The manual workflow awaits design review and GitHub Pages configuration.
