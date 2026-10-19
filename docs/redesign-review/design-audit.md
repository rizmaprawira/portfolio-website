# Complete redesign: audit and direction

## Evidence inspected

Original repository cloned read-only to `/tmp/rizma-careerpage-reference`; inspected `index.html`, `assets/css/styles.css`, and `assets/js/script.js`. The deployed original was opened in Chromium, scrolled to reveal AOS sections, and captured in `original-desktop.png` and `original-hero.png`. The original repository was not modified.

All eight local media files were inspected recursively. See `asset-inventory.json` and `asset-contact-sheet.jpg`. The approved DOCX remains in the project root and its extracted copy is retained in `docs/approved-content.txt`.

## What makes the original approachable

- Its portrait occupies nearly as much space as the welcoming introduction.
- The three about features use recognizable symbols, individual visual boundaries, and short headings.
- Service tiles use clear icons and direct action affordances.
- Project rows pair substantial photographs with text and alternate image placement.
- Image frames and staggered compositions give different content types distinct identities.
- Contact and social actions are recognizable and prominent.

The previous implementation instead repeats serif headings, text, dividers, and fine metadata. Even its scientific figures compete with the type instead of leading the experience.

## Reuse and modernization

Adapt the original's portrait-led split hero, icon-led category navigation, three-part introduction, substantial alternating project visuals, and recognizable contact actions. Keep the approved new wording. Use native accessible menus, details, filters, and figure dialogs rather than copying the old scroll-reveal library, broad `!important` rules, external font/icon payloads, gradients, or unsupported PHP forms. No old testimonials, contacts, skills claims, or biographies are revived.

## Updated system and plan

Keep Astro 7 and static Markdown collections. Palette: paper `#FAFAF8`, white, ink `#151515`, gray `#666666`, pale surface `#F1F1EF`. Natural color comes from photographs and research figures. No new accent is needed. Georgia remains for selected headings, system sans-serif for navigation, project titles, and body. Headings support the images; they do not fill the viewport. Use 4–8px corner radii for navigation/resource groups, framed figures, and alternating project rows. No repeated all-purpose card grid.

Home: welcoming portrait, icon shortcuts, three introduction features, image-led research, teaching subjects, AI/resource preview, honest journal introduction. Internal routes: full experience timeline, six research details with original figures and lightboxes, teaching hub and subject routes, six resource pages, Markdown article route, Contact and CV availability page. English interface labels and content metadata retain translation-ready fields. No empty Indonesian routes.

Scientific images receive lossless WebP size variants without cropping axes, legends, or meaningful labels. Original full files remain accessible. The owner explicitly approved public use of the parametric-loss figure and keeping the certificate as supplied. No standalone institutional logo assets or teaching/software photographs were supplied; use coherent icons rather than fabricated imagery.

Validate at 1440px, 768px, and 390px, inspect screenshots, correct visual issues, check all internal routes and controls, then commit and push. Keep Pages deployment manual; do not deploy or change the existing live careerpage.
