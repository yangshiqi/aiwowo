# QuotesSection Specification ("What teams say about Router")

## Overview
- **Target file:** `src/components/sites/router-com-92408672/root-8a5edab2/QuotesSection.tsx`
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/05-what-teams-say-about-router.html` (13KB — read fully)
- **Screenshots:** `sec-quotes.png`, `sec-savings-b.png` (bottom shows first quote card), `state-benchmark-tab-distributions.png` (top shows carousel arrows)
- **Interaction model:** click-driven prev/next + horizontal snap scroll

## Structure
- `<section aria-labelledby="quotes-heading">` with `h2#quotes-heading.sr-only` "What teams say about Router".
- Scroll container: `<section aria-label="Customer quotes" tabindex="0" class="-mr-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus-visible:… motion-safe:scroll-smooth …">` containing **6 slides**. Each slide: full-width bordered white card (border-gray-3): grid with company logo left (66×66 e.g. Delphi glyph, or wider logos for genius-ai/arcanist), big quote text (headline-ish size per ref), then author row: 60px grayscale headshot img + mono uppercase name + mono gray company.
- Quote data (verify verbatim against ref, including images):
  1. Delphi — logo `…/images/quote/delphi.svg` — "Choosing the right model makes a meaningful difference to our AI spend. We run billions of tokens through Router, and have reduced our model costs by 92%." — VALENTIN DE MATOS, DELPHI — headshot `…/images/quote/valentin-de-matos.png`
  2–6: read from ref HTML (genius-ai logo + braden-allchin headshot; arcanist logo + josiah-parappally headshot; others). Copy the text exactly; map every `/_next/image?url=…` to local `…/images/quote/*`.
- Controls row (right-aligned below): prev/next buttons `flex size-8 cursor-pointer items-center justify-center bg-ink text-white transition-[background-color,opacity]` with ArrowRight16 (prev uses `-scale-x-100`), aria-labels "Show previous quote"/"Show next quote", disabled state at ends (source: `disabled` + dimmed style — copy classes; disabled prev at start).

## Behavior ('use client')
- Refs to the scroll container; next/prev scroll by one card width (`scrollBy({left: ±(card width + 20 gap), behavior: 'smooth'})`).
- Track scroll position (onScroll) to set disabled states (at start / at end).
- Keyboard: container is focusable (tabindex 0), native arrow-key scrolling suffices.

## Responsive
- Cards are ~full container width slides at all sizes (snap-center/start per ref); `-mr-4` bleeds to viewport edge on mobile. Copy ref classes.
