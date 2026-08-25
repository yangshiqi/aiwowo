# ImplementSection Specification

## Overview
- **Target file:** `src/components/sites/router-com-92408672/root-8a5edab2/ImplementSection.tsx`
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/03-unnamed.html` (26KB — `<section id="implement">`; read fully)
- **Screenshots:** `sec-implement.png`, `sec-implement-b.png` in `docs/design-references/router-com-92408672/root-8a5edab2/`
- **Interaction model:** click (copy-to-clipboard, video dialog) + time (terminal typing animation `rmah-cr-*`, provider marquee)

## Structure
Two-column card (max-w-[1440px] px-4 lg:px-16 py-16 lg:py-32) with outer border:
1. **Left column** (white):
   - mono eyebrow: "FREE ROUTING THROUGH 2026 | $26 IN MODEL CREDITS" (copy exact text from ref)
   - big statement: "Router was built to reduce inference costs by matching every request to the lowest-cost model that meets your performance needs."
   - "Copy for agent" label + curl box: bg-gray-1 rounded row with CopyIcon12 button + mono text `curl -fsSL https://agents.ramp.com/install.sh | sh` (exact command from ref; may be truncated with fade). Copy button: clipboard.writeText + brief visual confirmation if ref shows one (check for a "copied" state / sonner toast — if source uses a toast, a simple icon swap to a checkmark for 2s is acceptable).
2. **Right column**: grayscale cloudy backdrop (from ref — likely an `<img>` or bg on the panel container) holding the **animated CLI panel** (`rmah-cr-*` classes or a dedicated DOM in ref): dark rounded terminal (bg near-black, border) showing:
   - line: `CLI` + green `Switchyard enabled`
   - bars: `Router` (solar/yellow bar) `$45.62` vs `Frontier (Generic)` (orange bar) `$297.85` — bar-grow animations (`rmah-cr-bar-grow`)
   - AutoModeIcon (gold ▶▶) + gold `auto mode on`
   - dim line `(shift+tab to cycle) · ← for agents` + blinking caret (`caret-blink`)
   - Use `scenes.css` classes (`rmah-cr-*`) exactly as the ref DOM does; import scenes.css.
   - If ref shows this panel is a `<video>`/`<img>` instead (check!), use `…/images/integration/code-response.webp` accordingly. The ref DOM is authoritative.
3. **Video dialog**: ref contains a `<button>` + native `<dialog>` with `<video src="https://cdn.air.inc/41b456e8-8494-4461-af91-1757d8d0ad8e" poster controls playsinline preload="none">` — replicate: clicking trigger calls `dialogRef.current?.showModal()` then plays; dialog classes verbatim (`m-auto w-[min(1100px,92vw,calc((100dvh-2.5rem)*16/9))] max-w-none border-0 bg-transparent p-0 backdrop:bg-ink-black/80 backdrop:backdrop-blur-sm`); close on backdrop click (onClick where target===dialog → close()) and Esc (native). Pause video on close. Poster: `…/images/integration/integration-video-still.webp`.
4. **Provider marquee** (bottom strip, bordered row): container with overflow hidden; TWO duplicate `div.flex.w-max.shrink-0` lists animated `motion-safe:animate-[model-provider-marquee_45s_linear_infinite]`, `--marquee-gap` gap. Each list: 10 provider logos as `<img>` (grayscale, some with "COMING SOON" mono sublabel — copy per-logo markup/labels from ref): grok, fireworks, aws, google, together-ai, baseten, exa, crusoe, anthropic, openai → `…/images/providers/<name>.svg`. Sizes/alt from ref.

## Notes
- The eyebrow numbers ("$26 in model credits") are plain text in the served HTML — no counter needed.
- Marquee pauses for reduced motion (`motion-safe:`).
- 'use client' for the whole section is acceptable (dialog + copy + animations).

## Responsive
- Columns stack on mobile (single column: text, then panel, then marquee). Copy ref classes verbatim.
