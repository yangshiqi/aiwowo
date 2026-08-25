# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/router-com-92408672/root-8a5edab2/HeroSection.tsx`
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/02-cut-inference-costs-in-secon.html` (26KB — read it fully)
- **Screenshot:** `docs/design-references/router-com-92408672/root-8a5edab2/sec-hero.png`
- **Interaction model:** time-driven ticker marquee; otherwise static

## Structure (from ref HTML — replicate 1:1)
`<section class="relative flex min-h-[calc(541px+var(--announcement-height))] flex-col overflow-hidden bg-white text-ink [container-type:inline-size] lg:h-[910px] lg:min-h-0">` containing:

1. **Background layer** (absolute, pointer-events-none, `top-[var(--announcement-height)] lg:top-0`):
   - mobile texture img (`lg:hidden`, object-cover fill) → `…/images/hero/texture-mobile.webp`
   - desktop texture img (`hidden lg:block`) → `…/images/hero/texture.webp`
   - radial glow div (opacity-20 mix-blend-plus-lighter blur-[47.467px] radial-gradient #dad8d0)
   - `vector-field.svg` img with mix-blend-overlay + double linear-gradient mask (copy arbitrary classes verbatim) → `…/images/hero/vector-field.svg`
   - **Giant "Router" text**: div `absolute bottom-0 left-[-2.083%] h-[calc(24.75cqw+10px)] w-[105.813%] whitespace-nowrap font-normal text-[39.102cqw] leading-none tracking-[-2.346cqw] mix-blend-plus-lighter select-none` with THREE stacked `<p>Router</p>` layers (different blur/blend/text-shadow — copy classes exactly).
   - bottom white fade div (`bg-linear-to-b from-white/0 to-white h-[8.417%]`).

2. **Announcement ticker + nav** (`div.relative.z-50`):
   - Ticker `aside` aria-label "Current offers": h-[var(--announcement-height)] bg-black uppercase text-[10px] tracking-[0.18px] backdrop-blur-[50px]; sr-only summary span; then `div.flex.w-full.pl-1.font-mono.lg:pl-[52px]` containing TWO duplicate `span.flex.min-w-full.shrink-0.items-center.motion-safe:animate-[announcement-ticker_120s_linear_infinite]` (the second is the seamless-loop copy, aria-hidden) — each holds many repeating units alternating `$26 in model credits` (text-white) and `Free routing through 2026` (text-gray-dark), each unit `border-gray-dark border-r-[0.5px] px-3`. Reproduce the unit count from ref (or render ~20 units via array map — visually identical).
   - Nav row: wordmark link left (same as FixedHeader logo), "Login" underlined link right; heights/padding per ref.

3. **Hero content** (`div.relative.z-10.mx-auto.flex.w-full.max-w-[1440px].flex-col.items-center` …):
   - eyebrow: mono uppercase "ROUTER.COM SAVES YOU TIME AND MONEY"
   - h1: "Cut inference costs in seconds." (headline classes per ref)
   - sub: "One endpoint, one bill, every model — cut your AI costs by 40% on average. The missing piece to maximize ROI."
   - CTA row: "Get the API Key" (bg-ink white) + "Read the Docs" (white bg, border) — keep exact classes, hrefs, and any ChevronRight14 icons per ref.

4. **Numbered steps strip** (bottom of section, 3 columns bordered): 01 "Every model behind one key" / 02 "Cut inference costs by 40%" / 03 "Scale to Trillions of tokens" — mono numbers gray-6; borders per ref (grid with border-t/border-l dividers on white bg).

## Behaviors
- Ticker: `announcement-ticker` keyframes already global; use classes verbatim.
- Entrance: if ref uses `cascade-item`/`data-shown`, keep; page root provides `data-js="1"`. Set `data-shown="true"` immediately on mount if the source gates visibility that way.

## Responsive
- Mobile: min-h calc(541px+34px), texture-mobile, nav Login only (hamburger MenuIcon24 if present in ref), steps stack vertically; copy ref classes.
- Desktop ≥lg: fixed 910px height.

## Assets
- `…/images/hero/texture.webp`, `…/images/hero/texture-mobile.webp`, `…/images/hero/vector-field.svg`
- Icons: RouterWordmark, ChevronRight14 (if used by CTAs), MenuIcon24 (if in ref)
