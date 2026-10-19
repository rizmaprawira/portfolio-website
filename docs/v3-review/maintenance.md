# V3 homepage maintenance

- Homepage composition: `src/pages/index.astro`. Display excerpts/featured project order: `src/data/home-v3.ts`; factual originals remain in approved DOCX and existing content modules.
- Home-only tokens, layout and breakpoints: `src/styles/home-v3.css`, scoped by `.v3-home-page`. Base applies this class and the compact footer only when `current="home"`; internal pages retain their prior presentation.
- Functional icons: `src/components/v3/Icon.astro`, official Lucide SVG sources in `public/icons/lucide/`, ISC/MIT notices beside them. Homepage navigation uses the same family through conditional Header mapping.
- Image lookup: `src/data/image-manifest.json`; add supplied assets there and run `python3 scripts/prepare-images.py` with Pillow. Add asset credit/permission to `ASSET_CREDITS.md`. Responsive variants are checked in, so ordinary builds need no Python.
- Research figures: reuse existing accessible native-dialog viewer. It preserves source-image framing and supplies full-resolution originals, zoom, keyboard panning, and Escape dismissal.
- Subject browser: buttons expose their approved excerpt and destination through data attributes; essential subject paths must work without JavaScript. Add actual lessons to the existing lessons collection only when ready.
- Dataset sample: verified source rows in `src/data/postal-preview.json`; client search filters only these five rows. Never label a sample as full coverage.
- Teaching image is the owner's actual supplied `Teaching.jpeg`; `Teachings.jpeg` is inventoried for later use.
- Follow the existing README for research Markdown, lessons, real blog articles, and resource additions. Do not publish planned resources or hypothetical articles as releases.
- Gate 3 is not authorized until owner approves this homepage. No deployment has been performed.
