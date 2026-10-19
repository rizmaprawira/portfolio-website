# Homepage visual refinement — review report

## Outcome

The existing Astro homepage retains its architecture and interactions. Strong #2458D3 blue now leads research and technical navigation; #DE3D4B red anchors the academic award and educational iconography. A darker red #C62D3A makes the normal-sized white tutoring-button text meet AA. White remains dominant. Near-black contact close provides a distinct ending.

## Before / after design changes

- Hero: one dominant name, lighter-weight approved positioning, 13-word factual introduction, portrait and two links. Removed redundant role/portrait-caption prose.
- Directory: larger 44–54px Lucide symbols, 21–23px titles, 15–16px short explanations, varied blue/white/neutral treatments rather than identical bordered cards.
- Research: bold blue heading; large original ENSO figure; a readable labeled Senyar panel(a) crop; full-width group-photo preview. Shortened display titles and 15–25-word descriptions. Original names and full detail descriptions remain on destination pages and in content sources. Full original figures remain in accessible viewers.
- Highlights: four verified facts given large typographic emphasis: two public preprints; first-place FITB ITB award in 2025; 150+ Basic Statistics students; nine courses assisted. No animated numbers or peer-reviewed-publication claim.
- Experience: four organization/role/date snapshots with role symbols, explicit plus affordance, concise expanded summaries and links to full history. No unlicensed institutional logos.
- Teaching: genuine supplied classroom photograph leads; three recognizable paths for university teaching, tutoring and forthcoming resources. Short approved teaching message and prominent tutoring CTA. Subject browser kept, with topic hints instead of mini-paragraphs.
- Code/Data/AI: five actual postal-source records with working search; short dataset description; short AI reliance/contribution disclosure and full-disclosure link. Planned/draft tools remain labeled.
- Blog: four larger-icon topic destinations with brief hints; no invented articles or dates. Short introduction and honest unpublished status.
- Contact: larger heading and legible links on near-black.

## Actual visual review and refinement

Before full-page screenshots at 1440, 768 and 390 are retained. First implementation screenshots were reviewed. Focused second pass shortened research display titles, replaced the long research heading with “Research in the real world,” reduced subject excerpts to their approved topic hints, removed excess subject-panel height, tightened section spacing, and corrected a joined-word heading after responsive line-break changes. Final captures reviewed at all three widths, including full desktop and mobile pages.

Larger text and the new four-fact highlight make the total scroll height somewhat greater than the baseline despite shorter prose. This is an intentional readability tradeoff, not a claim that the page is shorter in pixels. Content remains a curated homepage directory rather than duplicated abstracts or professional histories.

## Images, provenance and gaps

Homepage uses supplied portrait; ENSO figure; Senyar panel(a) excerpt; fog-harvesting group photograph; Teaching.jpeg classroom photograph. Full originals retained, meaningful scientific data/color untouched. Existing insurance figure and certificate remain on interior pages. No new stock photography, AI imagery, fictional screenshots, results, courses or articles. No additional assets needed for this scope. Formal coauthor/photographer credit strings remain unspecified and are described honestly in ASSET_CREDITS.md. Ali's live site remains blocked by Cloudflare verification; the brief's principles are distinguished from direct observations.

Thumbnail recipe and exact crop coordinates are recorded in ASSET_CREDITS.md and reproducible in scripts/prepare-images.py. Updated Lucide layers icon uses included ISC/MIT notices. Local third-party reference screenshots are excluded from Git; concise observations and owner-site screenshots are tracked.

## Typography and contrast

Name 70px desktop, responsive ~46px mobile. Section headings 36–46px; lead project 28–32px; regular titles 25px; body 17–19px; supporting 15–16px; metadata/captions 13–14px. Intended text/surface ratios: blue/white 6.16:1; tutoring button white/#C62D3A 5.47:1; award white/#DE3D4B 4.31:1 used only for large bold display type; small award caption is near-black on white. Red small text uses darker #B62D3B. Targeted contrast checks do not constitute a formal accessibility audit.

## Validation / boundary

- Astro check: 46 files, zero errors/warnings/hints.
- Build: 27 static pages. Empty blog/lesson notices reflect the actual unpublished collections.
- Local link/asset validation: 862 links/assets pass.
- Browser verification at 1440, 768 and 390: no document overflow, no JS exceptions; visible images load; all image alt attributes present; four factual highlights present; Senyar excerpt correctly labeled and 570px source width; sampled body/metadata sizes >=13px.
- Subject browser keyboard/touch, source-table match/empty/reset, expandable roles, three original-image lightboxes, keyboard zoom, Escape/focus restoration, mobile-menu keyboard behavior, and reduced motion pass.
- All authoritative long-form copy and interior page designs remain unchanged. No deployment.

Homepage approval is required before applying this direction to interior pages. Current unresolved visual choice is owner preference on accent strength and directory density; no technical rendering blocker remains.
