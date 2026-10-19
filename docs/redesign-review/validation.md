# Full redesign validation — 19 October 2026

## Audit and source integrity

The original deployed careerpage was inspected in Chromium and its HTML, CSS, and JavaScript read from a separate read-only checkout. Scroll-triggered sections were revealed before capture. The original repository was never edited. All eight images in the local asset directory were inspected recursively; inventory and contact sheet are included.

The owner explicitly approved public use of the parametric-insurance image and keeping the supplied certificate. All eight selected original files are preserved, with organized web copies and proportional WebP variants (lossless figures; quality-88 photographs). No scientific axes, labels, legends, meaningful colors, photographs, or results were generated or cropped. The full original figures remain accessible from their viewers. No missing institutional logos, teaching photographs, or software screenshots were invented.

## Implementation

27 static HTML pages: Home, About/Experience, Research index and six details, Teaching hub and six subject pages, Code/Data/AI index and six resource pages, Blog index, Contact, CV availability, and 404. Article and lesson detail templates are implemented but generate no published content while their collections are empty. Blog RSS is empty by design. All five biography paragraphs are retained verbatim, as are the approved research/project and resource descriptions on their detail pages.

The five-row postal-code preview comes from the verified public CSV in the owner's repository. It is labeled as an excerpt and does not imply independently verified nationwide completeness.

## Visual and browser review

Local Chromium/Playwright was used with the owner's explicit authorization. Captures at 1440px, 768px, and 390px are included for Home, About, Research, a research detail, Teaching, Code/AI, the postal-code resource, Blog, and Contact. Initial viewports and full-page captures were visually inspected.

The review found and corrected a table expanding the tablet layout, a missing About anchor in the Experience page, and a resource-status label inheriting an inappropriate mobile ordering rule. A transient screenshot protocol failure was retried successfully. A later development-server hot reload interrupted a refresh, so final capture and validation used the production preview to avoid changes during browser navigation.

Browser checks cover 26 public routes at three widths (78 combinations), with no horizontal document overflow, broken images, JavaScript errors, or console errors. Checks include native mobile menu operation, project figure lightboxes, keyboard zoom and Escape, expandable timeline entries, resource filtering (two datasets), keyboard workflow selection, blog empty-state category filtering, and reduced-motion behavior. Results are saved as JSON.

## Build and content checks

- Astro check: no errors, warnings, or hints.
- Production build: all 27 HTML pages generated.
- Internal link checker: 835 local paths, image/assets, and fragments across 27 HTML pages.
- Separate root-domain build and link validation also pass; default build targets `/portfolio-website/`.
- Markdown rendering test verifies inline/display equations, highlighted code, HTML figure captions, hyperlinks, and generated heading IDs using an internal fixture that is never published.
- Dependency installation audit reports zero vulnerabilities. A direct patched KaTeX version is consistently enforced for its Markdown plugins.
- Generated HTML has one h1 and one main landmark per page, and all images have alt attributes. RSS and sitemap XML parse correctly.
- No fake posts or lessons are released; empty-collection warnings are expected.
- Git whitespace validation passes.

## Remaining content and release boundaries

No current CV PDF, public lessons, actual blog manuscripts, or releases for the five planned/draft resources were supplied. The site represents these states honestly. Detailed research findings come from linked preprints or supplied figures only; missing numerical data are not fabricated. Formal third-party credits and the ENSO P1/P2 date mapping remain owner-review items.

Deployment is manual and has not been run. The original careerpage and its live site remain unchanged. See `docs/content-checklist.md` for the remaining owner inputs.
