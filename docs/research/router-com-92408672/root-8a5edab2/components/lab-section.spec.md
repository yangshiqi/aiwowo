# LabSection Specification ("More from the Lab")

## Overview
- **Target file:** `src/components/sites/router-com-92408672/root-8a5edab2/LabSection.tsx`
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/08-more-from-the-lab.html` (30KB — read fully)
- **Screenshot:** `sec-lab.png`, bottom of `sec-proof-b.png`
- **Interaction model:** click-driven prev/next over snap-x scroll container; `arrow-slide` hover animation on links

## Structure
- h2 "More from the Lab" (headline size per ref)
- Card carousel: snap-x mandatory overflow-x-auto container (same pattern as quotes; hidden scrollbar; `-mr-4` bleed) with N post cards (count + all content from ref — visible ones: JUL 1, 2026 "PorTAL: Portable Task Adaptation for LoRA"; MAY 7, 2026 "Building Fast & Accurate Agents with Prime-RL Post Training"; APR 21, 2026 "Coding agents ignore their own budgets"; plus more in ref).
- Card: bordered white (border-gray-3), padding per ref; mono gray date; title (headline-xs-ish); description body; footer link "Read the post" + ArrowRight12 with `group-hover` arrow-slide animation (`group-hover:animate-[arrow-slide_…]` or `group-hover:translate-x-1` — copy the exact hover classes from ref).
- Cards link to external lab posts (hrefs from ref — keep absolute URLs).
- Prev/next controls: same size-8 bg-ink arrow buttons as QuotesSection (aria-labels from ref), disabled at ends.

## Behavior ('use client')
- Same scroll/disabled logic as QuotesSection: scrollBy one card width; onScroll updates disabled flags.

## Data
- Extract every card's date, title, description, and href verbatim from ref. Do not invent or trim text (line-clamp classes handle overflow).

## Responsive
- Card width: ~1/3 container on desktop, full-ish width on mobile (snap slides). Copy ref classes verbatim.
