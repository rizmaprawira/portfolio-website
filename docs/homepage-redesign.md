# Homepage redesign

Scope: homepage and homepage-only components/styles. Research and Blog index pages retain the first prototype until the owner reviews this direction.

## Diagnosis

The initial homepage repeats a margin column, prose, and horizontal rule. Research has no visual hierarchy beyond its title; Teaching and Code repeat prose columns; there are few meaningful controls. Its monochrome palette is appropriate, but the composition has too little variation.

## Revised direction

An editorial scientific portfolio: split headline/visual hero; visual research previews with expandable context; a compact interactive experience timeline; a subject browser and learning path; a selectable AI workflow and resource index; a journal preview with category selection.

Retain paper #FAFAF8, ink #151515, muted #666666, rule #DDDDDA, and surface #F1F1EF. Use an inverse ink panel sparingly for the workflow, balancing lighter scientific panels. Georgia remains the display face and system sans-serif remains the body. Body measure stays below 75 characters. Headline approximately 54px desktop, 38px mobile. Spacing uses 8/16/24/32/48/64px intervals.

Desktop: headline and visual in unequal columns, two research previews, then alternating full-width and split sections. Mobile: one reading-order column; all interactive targets at least 44px. Coherent 24px thin-stroke SVG icons convey subject/resource types. No repeated icon decoration beside paragraphs.

Content stays authoritative: original biography, research summaries, roles, teaching descriptions, resource statuses, and AI statement. No fictional lessons, articles, dataset records, or results.

## Scientific assets

The owner supplied three PNG figures during implementation: ENSO Teleconnection, Senyar Plot, and Climate Change Extreme Rainfall. Original copies are published under `public/figures/` without pixel edits. Their meaningful colors are retained. The ENSO figure also appears in the hero, replacing the initial asset slot. Research previews use the supplied figures and offer a keyboard-accessible full-figure dialog, zoom control, scroll region, and original-image link.

The ENSO panel switch uses CSS viewports into the original P1 and P2 maps, accompanied by the original shared correlation scale. No plot marks, interpolation, numbers, or scientific results are synthesized. Date mappings and formal caption/credit details have been requested; until confirmed, controls use P1/P2 exactly as labeled in the supplied image. Original complete figures remain inspectable, including axes, legends, and other panels.

## Interaction strategy

Use native details for project summaries and timeline details. Use labeled native radios for subject, resource, journal, and comparison selection; retain content with JavaScript disabled. Use buttons for workflow exploration, with a visible selected state and explanatory text. Hover and focus share feedback. Respect reduced motion, and avoid ambient animation.

## Review

Run type checks, build, local links, and inspect the homepage at desktop 1440px and mobile 390px. Browser automation cannot access the ambient in-app browser; the owner explicitly authorized local headless Playwright. Record any remaining verification limits honestly. Commit and push after validation, then stop for owner feedback before changing other pages. Dedicated project pages and article previews remain deferred; approved preprints and the Research index provide valid paths in this homepage-only review.
