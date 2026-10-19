# Homepage redesign validation — 19 October 2026

## Scope and content

Only the homepage was redesigned. Existing shared navigation/footer, Research index, Blog index, and their content remain unchanged. New components and CSS are imported by the homepage only. The approved headline, biography, research summaries, roles, teaching statements, resource descriptions/statuses, and AI disclosure are retained.

Three owner-supplied figures are used: ENSO Teleconnection, Senyar Plot, and Climate Change Extreme Rainfall. The replacement ENSO figure containing station observations supersedes the initial supplied version. SHA-256 comparison confirms that the PNG files in `public/figures/` are byte-identical to their supplied originals. No scientific figure or plot values were generated. Original research colors are preserved; UI remains monochrome.

The original source folder `Assets To Use/` remains owner-managed. Only copies of the three used figures are needed for the website. Additional source assets are not automatically published during this homepage-only pass.

The P1/P2 year mapping and formal captions/credit were requested. Until confirmed, controls use the source figure's P1/P2 labels and captions describe the visible panels without adding scientific conclusions. CSS viewports select the existing maps and shared scale; the complete original is accessible through the figure viewer. Nothing is digitized, interpolated, or re-simulated.

## Browser review

The owner explicitly authorized local headless Playwright after the computer-use connector could not access the ambient browser tab. The installed local Chromium was used; no browser download or new package dependency was needed.

Screenshots are in `docs/screenshots/`:

- `home-1440.png`, `home-390.png`: full homepage at the requested widths.
- `home-1440-viewport.png`, `home-390-viewport.png`: initial viewport.
- `home-1440-interactions.png`, `home-390-interactions.png`: selected/open states.
- `research-1440.png`, `research-390.png`: scientific previews.
- `figure-1440.png`, `figure-390.png`: full-figure viewer and zoom.
- `review.json`: browser-check results.

Astro's development toolbar was hidden in screenshots; website content was not changed by capture tooling. Screenshots were visually reviewed. The review caught clipping of the original color scale's endpoint labels; its viewport was widened before the final capture. The climate figure preview was enlarged for readability. Native figure dialogs provide a route to inspect small scientific text rather than pretending thumbnails replace full figures.

At both 1440px and 390px:

- No horizontal document overflow.
- No browser JavaScript errors.
- Panel selection works with keyboard arrow keys.
- Project and timeline details expand.
- Subject selection updates learning topics.
- AI workflow selection updates its description.
- Dataset filtering returns the two approved dataset entries.
- Journal category selection updates its description without invented articles.
- Figure dialog opens, zoom responds to keyboard, and Escape closes it.
- Mobile menu opens and closes at 390px.
- Checked homepage controls have at least 44px target height.
- Reduced-motion emulation disables the checked icon transition.

## Build checks

- `npm run check`: 0 errors, warnings, or hints.
- `npm run build`: static build succeeds; empty-blog content warnings are expected.
- `npm run validate:links`: 105 generated internal paths, assets, and fragments validated across 4 HTML pages.
- `git diff --check`: no whitespace errors.

## Remaining boundaries

The scientific interaction compares supplied raster panels; it is not a numerical data explorer. Raw data would be required for precise value inspection or recalculating fields. Source PNGs are retained unchanged (the ENSO file is approximately 2.9 MB); research imagery is lazy-loaded and repeated sources share browser caching. No invented lessons or blog articles were introduced. Dedicated project pages and redesign of other routes await feedback.
