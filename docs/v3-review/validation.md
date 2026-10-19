# Gate 2 — homepage validation and review

19 October 2026. Scope: homepage only; interior presentation remains unchanged through conditional body/header/footer variants. No deployment or generation tools used.

## Implementation and rendered review

- White-led system, bold sans hierarchy, small soft-blue and soft-red accents. Genuine portrait and classroom photograph, a dominant full ENSO figure, two supporting real project visuals, compact evidence/experience, real searchable source table, honest empty journal.
- Compared desktop and mobile browser captures with the reference observations. Removed duplicate category-card sections and equal-weight research rows. Ali Abdaal access limitation remains documented, not bypassed or claimed as an observed site.
- Initial screenshot review prompted moving the mobile portrait ahead of the positioning statement, correcting a missing separator in the mobile role line, preserving the small “What I do” heading, loading all lazy images before screenshot capture, and reducing excess subject-panel space.
- Final full-page screenshots: home-final-1440.png, home-final-768.png, home-final-390.png. Initial captures retained for comparison. The final mobile portrait is visible in the first screen. Source scientific figures remain uncropped and unrecolored.

## Verification

- `npm run check`: 46 files, zero errors, warnings, or hints.
- `npm run build`: 27 static pages built. Empty blog/lesson collection notices are expected; no articles or lessons were invented.
- `npm run validate:links`: 855 local links/assets validated across 27 HTML pages.
- Browser checks at 1440, 768, 390: no document overflow or JavaScript exceptions. All visible images load and have alt text. Each of three original figure images loads when its dialog opens; keyboard zoom works; Escape closes and returns focus. Subject buttons update the excerpt, pressed state and genuine subject route; keyboard and actual touch input verified. Postal search supports match/no-match/reset states. Experience details and mobile navigation work by keyboard. Reduced-motion transitions compute to 0s.
- Contrast calculations for intended text/surface pairs: ink/white 17.61:1; muted/white 6.27:1; blue ink/soft blue 6.15:1; red ink/soft red 5.93:1; muted/neutral panel 5.89:1. All exceed WCAG AA normal-text threshold. These checks are targeted, not a claim of a formal full accessibility audit.
- `git diff --check` passes. Deployment workflow is still manual (`workflow_dispatch`), not triggered by push.

## Hard acceptance review

- [x] Genuine portrait occupies substantial opening space; full ENSO and teaching photo provide authentic evidence.
- [x] Four clear symbol-led entrances; About/Experience and contact/CV are visible elsewhere.
- [x] Dominant research figure is recognizable; small figures have full-resolution viewers.
- [x] White, black, soft blue and soft red; no green theme, gradients, generated artwork or ornamental charts.
- [x] Compact homepage excerpts; factual originals remain in destination pages and approved content modules.
- [x] Ten supplied images inventoried; official Lucide notices included; source and credit records in ASSET_CREDITS.md.
- [x] Preprint status, resource preparation, empty journal and five-row dataset sample labeled honestly.
- [x] Functional keyboard/touch interactions and reduced-motion behavior verified.
- [x] Concrete influence from observed references recorded; Ali's supplied principles are explicitly distinguished from direct observations.

## Open items, without invented answers

- Owner approval of this homepage is required before Gate 3 interior redesign.
- Formal photographer/coauthor credit strings are unspecified; attribution currently says supplied by Rizma Prawira. No broad open-image redistribution license is asserted.
- Exact P1/P2 dates of the supplied ENSO figure remain unconfirmed; website does not assign new dates to those panels.
- No current CV PDF, published blog articles, or lesson resources were supplied. Existing honest destination states remain.
