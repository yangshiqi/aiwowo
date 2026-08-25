# SavingsSection Specification ("Built for CTOs. Loved by CFOs.")

## Overview
- **Target file:** `src/components/sites/router-com-92408672/root-8a5edab2/SavingsSection.tsx` (may split scene subcomponents into `savings/` subfolder)
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/04-built-for-ctos-loved-by-cfos.html` (24KB — read fully)
- **Screenshots:** `sec-savings.png`, `sec-savings-b.png`; full-page `desktop-1440-full.png` shows the bar-chart scene
- **Interaction model:** click + time-driven tab carousel (3 tabs auto-advance, crossfade 300ms) + click video dialog

## Structure
1. **Heading row**: h2 "Built for CTOs. <br>Loved by CFOs." (text-[34px]/lg:text-[48px] tracking per ref) + p "Engineering gets the best model for every workload. Finance gets lower inference spend."
2. **Video thumbnail card** (right of heading, lg:max-w-[368px] h-[87px]): bordered card with corner tick marks (8 absolutely-positioned 10.87×1px gray-6 spans — copy pattern), thumbnail img (`…/images/integration/integration-video-still.webp`), "See how it works" + "Watch the video" + ArrowRight12. In source: an `<a>` (no-JS) plus button+`<dialog>` with the 237MB video kept REMOTE (`https://cdn.air.inc/41b456e8-8494-4461-af91-1757d8d0ad8e`, poster local). Implement dialog same as ImplementSection (showModal, backdrop close, pause on close).
3. **Stage** (`div.relative.grid.border.border-gray-3`): layered bg: stage-texture.webp img fill + `bg-white/50` overlay + grain tile `bg-[url('…/images/savings/stage-grain.webp')] bg-[length:512px_512px] opacity-20` (rewrite the url() to the local path!) + corner ticks. Contains THREE `role="tabpanel"` divs stacked `col-start-1 row-start-1` with `transition-opacity duration-300 ease-out` + `opacity-100`/`opacity-0` (+ set `aria-hidden`, and `pointer-events-none` on hidden panels if ref does):
   - **Panel 0 — Cost chart** (`router-as-*` classes from scenes.css): chart window with header "Cost impact over time" + badge "40% lower", 5 grid lines (top 0/25/50/75/100%), y-axis $200/$150/$100/$50/$0, 18 `router-as-bar-stack` bars — copy EXACT inline style heights from ref (stack heights 100%,98%,97%,94%,93%,91%,90%,88%,85%,… and per-bar `--flex` segment heights 1%,2%,5%,5%,8%,10%,12%,15%,19%,…) — read all 18 from ref. Each stack has a `<canvas class="router-as-bar-dither-canvas" width="8" height="N">`: draw a subtle dither on mount (client effect): iterate 1×1 px cells, randomly (~12–18% density, seeded by index for stability) fill `rgba(13,14,13,0.9)` dots — mimics the original's dithered texture; `image-rendering: pixelated` comes from scenes.css. X-axis labels + legend ("40% Default" / "60% Flex" dots) per ref.
   - **Panel 1 — Cache turns scene** (`sd-*` classes): turn cards "Turn 58 Cache hit · 100% … GPT-5.6 Luna · OpenAI … Follows Turn 57", metric bars (Cached input 269,753 / New input 405 / Output 117), "Turn 59 Cache miss", "Turn 60 Cache hit · 99%", plus `sd-turn-inspector` timeline window (Turn 58/59/60 rows with timestamps + costs). Copy DOM + inline styles verbatim from ref; scenes.css has all `sd-*` rules.
   - **Panel 2 — Model marketplace** (`rmah-mm__*` classes): dark panel with header, toolbar (search "Search models", sort, filter), table of models (columns: check, model name+brand, provider, date, score, tokens — e.g. "GLM 5.2 / Fireworks / Jun 16, 2026 / 51.1 / 1M"). Copy the full table DOM verbatim from ref.
4. **Feature tabs** (`role="tablist"` — 3 cards below the stage): "Automatic savings." (+ "New cost-saving strategies roll into Ramp Router as they prove themselves. Your integration stays put."), "Smarter defaults." (+ "Router tests new models against real workloads, so the best fit becomes your default."), "More models. One endpoint." (+ "Access closed and open-source models from vetted providers, all US-hosted with options for ZDR."). Active tab: bg-gray-1 (highlight) + title text-ink (inactive titles gray-4-ish per ref) + a progress underline `span` animating `tab-progress` (linear, duration = advance interval; read duration from ref classes — likely `animate-[tab-progress_Xs_linear]`).

## Behavior ('use client')
- useState activeIndex; useEffect interval auto-advances every N s (match tab-progress duration from ref; default 5s if unspecified). Clicking a tab sets it and resets the timer. Crossfade panels 300ms. Restart the progress-bar animation on change (key={activeIndex} on the span).
- Reduced motion: respect `motion-reduce:transition-none` classes from ref.
- Import `../root-8a5edab2/scenes.css` (i.e. `./scenes.css` relative to the component dir) once.

## Assets
- `…/images/savings/stage-texture.webp`, `…/images/savings/stage-grain.webp`, `…/images/integration/integration-video-still.webp`
- Icon: ArrowRight12

## Responsive
- Heading row stacks on mobile; stage aspect preserved by `router-as-stage`/`rmah-mm__viewport` aspect-ratio CSS; tab cards become vertical list. Copy ref classes.
