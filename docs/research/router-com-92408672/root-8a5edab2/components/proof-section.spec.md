# ProofSection Specification ("Put to work at Ramp.")

## Overview
- **Target file:** `src/components/sites/router-com-92408672/root-8a5edab2/ProofSection.tsx`
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/07-put-to-work-at-ramp.html` (42KB — read fully; contains two large route-line SVGs inline)
- **Screenshots:** `sec-proof.png`, `sec-proof-b.png`
- **Interaction model:** time-driven SVG route-line drift + click video dialog + link cards

## Structure
- `<section id="proof">`: heading h2 "Put to work at Ramp." + sub "Ramp gives Router a real-world proving ground. The lessons we learn in production feed directly back into the product."
- **Bento grid** (2 rows):
  - Row 1 left (~1/3): white bordered card — mono overline "PRODUCTION VALUE", giant "2.75T+" (headline-xl-ish per ref), mono "TOKENS ROUTED MONTHLY".
  - Row 1 right (~2/3): dark green card (`flex-pricing`): bg img `…/images/proof/flex-pricing-bg.webp` + inline route-lines SVG overlay (mix-blend-overlay, `proof-route-dashed` paths — copy the SVG from ref VERBATIM incl. `--proof-dash-cycle` inline styles and `data-reverse` attrs; the drift animation comes from the global `.proof-route-dashed` rule) + white text: h3 "How Ramp cut AI costs by 30% on internal workloads", p "Router responds to live latency and failure rates, cutting Ramp's AI costs by 30% without sacrificing performance.", link "Read the blog post" + ArrowRight12 (href from ref).
  - Row 2 left (~2/3): orange/brown card (`switchyard`): bg img `…/images/proof/switchyard-bg.webp` + its own route-lines SVG (same treatment) + white text: h3 "NVIDIA NeMo Switchyard's Stage Router for Coding Agents", p "Switchyard's intelligent model selection reduces cost by 59% and run time by 35% without sacrificing performance.", trigger "Watch the video" + ArrowRight12 → native `<dialog>` with `<video src="…/videos/switchyard.mp4" poster="…/images/proof/switchyard-poster.webp" controls playsinline preload="none">` (LOCAL video file). Dialog pattern identical to other sections (showModal, backdrop close, pause on close, classes verbatim).
  - Row 2 right (~1/3): white quote card: ""At Ramp, Router cut our overall LLM cost by 30% while making our features smarter and faster." " + headshot `…/images/proof/rahul-headshot.png` + mono "RAHUL SENGOTTUVELU" / "CTO, RAMP".
- The two big route-line SVGs are inline in ref with classes like `pointer-events-none absolute z-0 mix-blend-overlay select-none left-[-659.96px] top-[-136.23px] …` — transcribe them EXACTLY (convert attrs to JSX camelCase; keep every path's `stroke-dasharray`/`style`). They are ~19KB and ~7KB — a script-assisted transcription is fine, but the rendered output must be byte-faithful.

## Behavior ('use client' only for the video-dialog card; rest can be server)
- Route drift: pure CSS (global `.proof-route-dashed`) — no JS.
- Video dialog: as elsewhere.

## Responsive
- Bento stacks to single column on mobile (order per ref); route SVGs have their own mobile size classes (`h-[456.609px] w-[751.312px]` → lg variants) — copy verbatim.
