# RIZMA PRAWIRA — PORTFOLIO WEBSITE REDESIGN
## Codex implementation brief v3 | White · Black · Soft Blue · Soft Red

> **READ THIS ENTIRE BRIEF BEFORE EDITING CODE.** This supersedes earlier monochrome/forest-green design briefs. The objective is not a conventional academic site and not a generic creator/SaaS template. It is a distinct, approachable, content-rich personal website where research, teaching, code/data, experience, and writing are easy and enjoyable to explore.

## 0. Your role and first action

Act as a senior visual designer, creative frontend developer, accessibility specialist, and technical content architect. Treat design and content composition as first-class engineering problems.

**First, inspect the existing project, the approved content file, the old portfolio, the four live references, and the local assets. Do not immediately start rewriting components.** Make a compact inventory and a page-by-page design plan; then implement and visually test the homepage before propagating the new system to other pages.

Working inputs:

- **Approved factual copy (authoritative):** `Rizma_Approved_Website_Content_EN_v1.docx` in the workspace. Preserve its claims and approved wording; edit only for short display excerpts. If DOCX reading is inconvenient, extract it once into maintainable Markdown/JSON content without losing wording.
- **Current website code:** inspect the current working directory/repository; preserve working routes, content, and deployment configuration where possible.
- **Original personal portfolio (design baseline):** https://rizmaprawira.github.io/careerpage/ and https://github.com/rizmaprawira/careerpage . This belongs to the site owner and can be studied and appropriately adapted. Do not edit the original repository.
- **Local image/assets directory:** `/Users/rizzie/Work/PortofolioWebsite/AssetsToUse` . Check recursively. This is the first source of visual assets, ahead of internet images.
- **User-provided site screenshots:** if present in the workspace, use them to understand what must change: oversized text-only hero, text-heavy research rows, text-only lower sections, little visual differentiation.
- **Do not include unfinished MITgcm research.**

## 1. Actual websites to inspect, and what to learn from each

**Inspect these websites IN A BROWSER on desktop and mobile**, not just by reading HTML or relying on mental descriptions. Capture reference screenshots for internal comparison. If a website cannot be accessed, log the limitation and use the stated principles below; do not claim to have viewed it.

1. **Matt D'Avella — https://www.mattdavella.com/**
   - Learn restraint: limited palette, purposeful imagery, concise messaging, breathing room, and focus.
   - Do **not** duplicate his brand identity, photography, or newsletter-centric page structure.

2. **Ali Abdaal — https://aliabdaal.com/**
   - Learn how photography, visuals, bold text, and short explanations alternate so a content-rich homepage remains enjoyable.
   - Notice how visitors can enter through topics, resource types, and featured work.
   - Do **not** copy his personal photos, products, or promotional claims.

3. **Thomas Frank — https://thomasjfrank.com/**
   - Learn information architecture: multiple kinds of work, courses, articles, and resources are findable from one homepage.
   - Make the homepage a useful discovery map rather than a chronological CV or an extremely long article.
   - Do **not** import his content or use his brand marks.

4. **Kok Bisa — https://www.kokbisa.id/**
   - Learn visual science communication: bold topic framing, large informative thumbnails, recognizable iconography, approachable captions, fast scanning.
   - Adapt the approachable visual hierarchy without imitating someone else's illustrations or trademarked style.

5. **Rizma's earlier portfolio — https://rizmaprawira.github.io/careerpage/**
   - Preserve what the owner liked: symbols for categories/navigation, many authentic pictures, immediately visible highlights, friendliness, obvious destinations.
   - This is the most direct example of the owner's taste. The new site should be substantially more modern and maintainable but should *not* lose its warmth or navigational clarity.

Before implementation, write a **Reference-to-Decision Matrix**: reference URL | specific observed technique | adaptation for Rizma | what not to copy. Prioritize concrete observations over vague terms such as “premium,” “beautiful,” or “modern.”

## 2. Intended visitor experience

Visitors should be able to answer these questions quickly:

- **Within five seconds:** Who is Rizma and what does she work on?
- **Within fifteen seconds:** Where do I click for research, teaching/tutoring, code/data/AI, or blog?
- **Within thirty seconds:** What evidence demonstrates her work (published preprints, projects, figures, student teaching, datasets)?

People should **see** her work before reading about it at length. This website is a creator-like professional home for a meteorology graduate and researcher, an educator, and an AI-assisted builder. It should feel personal and human, not like an academic manuscript and not like a venture-backed productivity app.

### Design qualities, in order

1. **Visual interest and easy scanning**: memorable authentic imagery, informative illustrations/icons, bold readable headlines, minimal per-card copy.
2. **Balanced density**: full of information, but each piece is compact and well grouped.
3. **Clear navigation**: paths to all six approved content groups, from the homepage.
4. **Warm but professional**: recognizable identity, grounded claims, understandable science.
5. **Purposeful interaction**: components genuinely help exploration; no motion for motion's sake.

## 3. Color palette — definitive direction

The owner explicitly prefers **white + black + soft blue + soft red**. No forest green. No purple gradients. No beige-heavy editorial theme. Avoid the stereotypical AI-generated landing-page palette.

Use the following **starting tokens**; adjust them slightly during visual review if necessary, but preserve their relationships:

```css
:root {
  --page: #FFFFFF;            /* dominant page background */
  --ink: #17191C;             /* headings and primary text */
  --muted: #59616B;           /* secondary text, sufficient contrast */
  --line: #DDE2E6;            /* dividers and subtle outlines */
  --panel: #F6F8F9;           /* neutral content grouping */
  --blue-soft: #DDECF8;       /* soft-blue panels and highlights */
  --blue-ink: #285A7A;        /* readable blue links/icons on white */
  --red-soft: #F8E2E5;        /* soft-red panels and highlights */
  --red-ink: #8B3D4B;         /* readable red links/icons on white */
  --white: #FFFFFF;
}
```

Color rules:

- White must dominate (~65–75% of visible area); near-black provides text and typographic contrast.
- Soft blue and soft red are **deliberate secondary accents**, not equally large alternating full-screen slabs. Use sparingly for section spotlights, small image backdrops, subtle category highlights, functional interactive states, and a few CTAs.
- A page should usually feature only one accent as the dominant secondary accent. Both may appear in small, deliberate moments.
- Do not use pale accent colors for fine text. Use `--blue-ink`, `--red-ink`, or `--ink` with WCAG-compliant contrast.
- Real scientific plots and authentic photographs may retain their natural colors. Their data palettes must never be recolored merely for brand consistency.
- No gradient hero; no generic pastel blob shapes; no neon/glassmorphism; no shadows on every card; avoid three or more accent colors competing in the same section.

## 4. Typography, imagery, and shape language

- Use an approachable contemporary **bold sans-serif hierarchy** for key messages and section names. A restrained serif may be used selectively if it improves the identity, but avoid making every headline an enormous serif paragraph.
- Choose at most **two type families**, preferably permissively licensed web fonts. Favor fonts that render well in English and Indonesian.
- Maintain controlled typography: hero ~clamp(2.6rem, 5vw, 4.6rem) depending on composition; prominent section headings ~2–3rem; body ~1rem; metadata ~0.8–0.9rem. These are targets, not rigid pixel rules.
- Target body line lengths around 55–75 characters on reading pages. Homepage explanatory copy should generally be much shorter.
- Use real photos, scientific maps/plots, project screenshots, selected contextual assets, and a single cohesive icon family (Lucide or Tabler, with consistent stroke weight).
- Do not rely on rows of identical bordered rectangles. Mix hero feature, image+text split, image-led grids, compact icon shortcuts, narrow timelines, and a few full-width spotlights.
- Use restrained radius (~8–14px where helpful), not giant rounded SaaS cards. Use crisp alignment and meaningful whitespace.
- Sections should have different visual compositions without feeling like five different websites.

## 5. Asset audit, ethical sourcing, and ABSOLUTE no-generation rule

**Never use AI to generate or alter a photograph, illustration, image, icon, figure, background image, or scientific visual.** This instruction includes image generation APIs and text-to-image tools. Do not create pseudo-scientific illustrations that viewers could mistake for research output. CSS layout, shapes, and functional SVG icons are fine; do not use procedural visuals as substitutes for missing scientific data.

### Source priority

1. User assets in `/Users/rizzie/Work/PortofolioWebsite/AssetsToUse`.
2. Images and icons already included in the user's original portfolio, with appropriate provenance.
3. Genuine publicly available scientific figures from the owner's own work **only when rights and attribution are clear**.
4. If general contextual photos, simple illustrations, or icons are missing, **search the internet for appropriately licensed free assets**:
   - Unsplash (check current image-specific site license and restrictions).
   - Pexels (check current site license and restrictions).
   - Wikimedia Commons (inspect each file's actual license, author credit, and derivative requirements).
   - Public domain/CC0 collections for uncomplicated reuse.
   - Lucide/Tabler icon libraries under their stated licenses.
   - NOAA/NASA imagery only after checking the applicable reuse/endorsement restrictions and attribution.

“Free to view on Google Images” is **not** permission to use. “Royalty-free” is **not** the same as public domain. Do not take photos/screenshots/logos from reference websites merely because they can be downloaded. Avoid unlicensed Pinterest/Google Image results, watermarked stock assets, unclear clip-art sources, copyrighted textbook diagrams, and third-party scientific graphics without permission. If a license is unclear, do not use the asset.

### Asset traceability

Inventory every user asset: file path, type, dimensions, content, suitable page/role, and any uncertainty. Generate a contact sheet locally if useful. Save the selected site's own assets in an organized public asset directory, not remote image hotlinks where avoidable.

Create `ASSET_CREDITS.md` with `site file | original URL or user-supplied | creator/source | license | attribution/conditions | date checked`. Cite sources in the webpage footer or credits page as required. Check whether Creative Commons ShareAlike or other terms affect reuse; if unclear, favor CC0/public-domain alternatives. Institutional logos may have trademark restrictions; do not assume public use is unrestricted.

Use actual research plots **as supplied**, without altering axes, legend, scientific interpretation, or meaningful data colors. For thumbnails, make sure labels aren't misleadingly cropped. Use contain/background framing where necessary and a full-resolution modal/open-image view for detailed figures.

If you cannot access the web or the local asset folder, document this and proceed only with available source material. Never pretend downloads happened.

## 6. Homepage: exact content hierarchy and visual blueprint

The homepage should **show all major areas of Rizma's work** like a curated directory, not reproduce every paragraph of the approved content. **Use the approved copy as the source of truth**, with short excerpts for cards and longer originals on inner pages.

### Suggested section sequence

**A. Compact, memorable header**
- Personal name/wordmark with a simple custom typographic identity (not a generic startup logo).
- Navigation with small coherent symbols: Home, About / Experience, Research, Teaching, Code / Data / AI, Blog.
- A small contact/CV entry point; mobile menu must remain friendly and easy to use.

**B. Hero: human first, visual first**
- Desktop: an intentional 2-column or asymmetrical split layout, approx 55–60% text and 40–45% genuine portrait/photo or other authentic owner image.
- Mobile: image and headline reflow naturally without huge empty areas.
- Display `Rizma Prawira`, a short role descriptor, approved positioning statement, and **two meaningful links**, for instance `Explore my work` and `Teaching / Learn with me`.
- Avoid the previous giant 3-line text-only hero. Visually connect the photo with a small soft-blue or soft-red geometric panel **as a framing device, not floating decorative confetti**.
- If no user portrait exists, use an authentic personal/project photo or a compelling image-led research feature; do not invent a portrait.

**C. Four visual entry points: What I do**
- Large, easy-to-scan icon/picture + bold label + **one sentence** per entry.
- Research, Teaching, Code/Data/AI, Notes/Blog (Experience visible elsewhere).
- Each tile should feel distinct, clickable and readable; avoid generic identical cards with tiny icons centered above paragraphs.

**D. Featured Research: evidence before explanation**
- One dominant featured ENSO project with large real rainfall/circulation figure.
- Two smaller supporting research features (e.g. Senyar and atmospheric water harvesting, if visuals permit).
- Include 1–2 line explanations, affiliation/year, meaningful links. Put the remaining three research projects behind `View all research`.
- Titles must not be hidden under giant text blocks; imagery and title should be prominent.
- A short label for preprints where relevant; never state an under-review work is peer-reviewed.

**E. Highlights and credibility strip**
- Compact proof-based highlights: two public preprints (not two peer-reviewed papers); teaching 150+ Basic Statistics students; recognized academic distinction; selected research/industry experience.
- Use a restrained mixed layout, small symbols, and brief fact labels. **Never use meaningless animated counters.**
- Use actual supported accomplishments only.

**F. Experience: compact path, not the full CV**
- 3–4 institution/role snapshots, optionally as a compact visual timeline with logos when permitted; include ITB, BRIN, Climate Change Center, Indonesia Re as supported by approved records.
- Keep each blurb short; link to the full experience page and organizational work.

**G. Teaching: visually welcoming, service-oriented**
- A real teaching/classroom image or an authentic sample lesson screenshot.
- Bold approved teaching message; subject mini-icons; 1–2 concise sentences.
- A prominent but not salesy `Explore learning resources` and `Ask about private tutoring` path.
- Clearly separate *resources that exist* from *planned videos/courses*. No fictional course thumbnails.

**H. Code, Data & AI: show useful outputs and AI honesty**
- One actual dataset screenshot or software interface; feature the public Indonesian postal-code repository.
- A plain-language AI development disclosure visibly on the page, not buried in fine print: AI coding assistants are a central part of implementation; Rizma contributes objectives, workflow design, domain expertise, checking, and interpretation.
- Short entries for tools and guides; flag planned/unreleased resources honestly.
- Link to full Code, Data & AI hub.

**I. Notes / Blog: magazine-like entry point**
- Four category icons (Science & Research; Technology & AI; Education & Learning; Life & Reflections).
- Show real published articles with real dates/images when available.
- If there are no posts, show a short authentic introduction and link to the blog—not invented sample posts with fake dates or fake cover art.

**J. Personal closing / Contact**
- Keep concise and approachable. Email, LinkedIn, GitHub, CV. Footer attribution, privacy/copyright and accessible links.

### Screen density and copy budget

- Hero supporting copy: **maximum 40 words** above the fold.
- Homepage project preview: **20–45 words** each, not full abstracts.
- Section introduction: ideally **under 45 words**.
- One subsection should rarely show more than **three to four items** at once on the homepage; `View all` provides depth.
- No more than **two consecutive text-only sections**. Most major sections should include an authentic visual, a substantial symbol system, or a functional data preview.
- Maintain long-form content on individual project and article pages where it belongs.
- Show enough on the homepage to establish breadth without making a visitor scroll through a 1-page CV disguised as a landing page.

## 7. Internal pages (consistent, but not repetitive)

### About & Experience
- Portrait and short bio first; timeline and recognitions next.
- Genuine institution logos when permissions allow, simple role icons otherwise.
- Compact timelines with expandable details and clear years; include selected organizational leadership.
- The approved teaching details link to Teaching, not duplicated in full.

### Research & Publications
- Image-led research listing: one authentic key visual per project; six approved projects including BRIN ENSO-over-Papua (separate from thesis).
- A dedicated research project page should present figure → research question → concise scope/method → contribution → findings/limitations → publications/related files.
- Expandable figure/lightbox with readable captions and attribution. Make science readable to a non-specialist without removing technical accuracy.
- Two preprint cards with precise status and links to original sources. Do not count Springer chapter as Rizma's authored publication.

### Teaching
- Subject-based navigation and an inviting teaching/tutoring overview.
- Assistantships (theoretical and practical), tutoring service, resource library.
- Structured lesson pages only for real resources. Filter by subject, level, type; provide good empty states when content has not been published.

### Code, Data & AI
- Datasets / Scripts & Tools / Tutorials & Guides with image previews, miniature authentic table samples, badges for actual status, and practical calls-to-action.
- Make the `How I Build With AI` statement visible and honest without self-deprecating copy or implying unassisted advanced software development.
- Reusable schema for version, source, methodology, permissions, AI assistance, dependencies, limitations, downloads, GitHub links.

### Blog
- A readable editorial article grid with *real* covers/photos where available; category and language filters.
- Long-form Markdown/MDX, source references, code blocks, equations, captions, related real articles and meaningful share links.
- Prepare for English and Indonesian content without pretending untranslated articles exist in both languages.

## 8. Meaningful interaction: make the site engaging, not gimmicky

Implement only components that improve discovery or comprehension:

- Icon-enhanced navigation with clear active states.
- Project figures open in accessible lightbox and can be viewed in full resolution.
- Category/topic filters on Research, Teaching, Code/Data, and Blog **where there are enough items to justify them**.
- Responsive timeline details that expand on click/key press, with essential role information always visible.
- Subtle hover elevation/tint/underline or image zoom that does not distort scientific plots.
- Dataset sample previews when real sample data exists.
- Smooth but short CSS transitions; honor `prefers-reduced-motion`.

Avoid pointless parallax, fake interactive charts, carousels hiding essential information, animation-heavy counters, ambient background particles, flashy scroll reveals, and ornamental mock dashboards.

## 9. Engineering and maintainability

- Inspect the current codebase first. Prefer repairing/adapting its functioning architecture over wholesale migration.
- Static-first deployment compatible with GitHub Pages; Astro/MDX is suitable if the current project already uses it.
- Keep structured content apart from JSX/Astro templates. One new research item, dataset or blog post should be an easy content-file addition.
- Use few dependencies, responsive image sizes, width/height attributes, lazy loading, system-friendly motion, and accessible HTML.
- Build semantic headings; keyboard navigation, alt text, focus rings, color contrast, mobile menu, image viewing and responsive layouts.
- Include sitemap/metadata/RSS where available, and translation-ready English/Indonesian architecture; English first. Do not generate translations unless asked.
- Create concise docs for future maintenance through Codex and a recorded asset manifest.
- Do not overwrite/deploy the existing live portfolio or publish content without explicit permission.

## 10. Process — avoid another unsatisfying one-pass redesign

### Gate 1: Observe, then design (no code change yet)

1. Explore the current code and old portfolio source.
2. Visit all reference websites; capture screenshots or report access limitations.
3. Inventory and preview `AssetsToUse`, including a contact sheet if useful.
4. Build the Reference-to-Decision Matrix.
5. Draft a **specific homepage visual plan** with section arrangement, which real asset goes where, colors used where, and proposed typography/icons.
6. Report any missing hero / research / teaching visual and propose legal sourcing choices.

### Gate 2: Homepage implementation + visual verification

1. Implement the full redesigned homepage with *actual available visuals*, not grey boxes or generated art.
2. Run browser-based screenshots at **1440px desktop, 768px tablet and 390px mobile**; capture at least one full-page screenshot at desktop and mobile.
3. Compare the actual result against the reference-inspired goals: friendly, image-led, colorful only where needed, compact and easy to scan.
4. Refine weak areas. Do not count changing CSS variables alone as a redesign.
5. Check that images load, no layout overflow exists, buttons work, and the text is readable.
6. **Stop and request owner approval of the homepage before redesigning internal pages.**

### Gate 3: Reusable interior design

After homepage approval, redesign Research, About, Teaching, Code/Data/AI, and Blog. Use shared layout and icon conventions but allow each section its own information design.

### Gate 4: QA and handoff

Run build/checks; verify links, keyboard access, contrast, responsive layout, figure fidelity, license attributions, and planned versus published labels.

Deliver:
- Working, tested redesign.
- Reference-to-Decision Matrix.
- Asset inventory + contact sheet when possible.
- `ASSET_CREDITS.md` with actual reuse rights and credits.
- Screenshots of desktop/mobile pages after iteration.
- Concise design tokens/component documentation.
- README for updating projects, lessons, blog, and datasets.
- List of unresolved permission, asset, or factual questions **without inventing answers**.

## 11. Hard acceptance tests

Before asking for approval, check the homepage against these criteria:

- [ ] **Looks like a visual personal portfolio, not a plain-text essay.**
- [ ] Strong genuine hero picture or compelling authentic project imagery occupies meaningful space.
- [ ] Main content categories are identifiable by consistent, attractive icons/symbols.
- [ ] Featured research shows figures at sizes large enough to recognize what is depicted.
- [ ] Site remains clean and legible in black/white with **soft blue and soft red accents**—no green theme, purple gradients or overly colorful cards.
- [ ] Each major content category is findable from homepage.
- [ ] Text is compact on index pages and detailed on destination pages.
- [ ] Every image has known origin and usable licensing/permission; **zero AI-generated imagery**.
- [ ] Technical and academic claims remain accurate; no invented charts, courses, products or posts.
- [ ] Interactions are real, responsive, touch- and keyboard-friendly.
- [ ] Owner can recognize design principles from all four requested reference sites without the website copying any of them.

**Final instruction:** If the redesign still looks like the old text-only version with a few blue and red rectangles added, consider the task unsuccessful. Rework the composition, choose stronger authentic visual assets, shorten the homepage previews, and improve the relative prominence of images, text, and symbols before requesting feedback.
