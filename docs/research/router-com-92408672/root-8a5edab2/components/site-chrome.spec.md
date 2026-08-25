# SiteChrome Specification (FixedHeader + OfferToast + MobileBottomBar)

## Overview
- **Target files:**
  - `src/components/sites/router-com-92408672/root-8a5edab2/FixedHeader.tsx`
  - `src/components/sites/router-com-92408672/root-8a5edab2/OfferToast.tsx`
  - `src/components/sites/router-com-92408672/root-8a5edab2/MobileBottomBar.tsx`
- **Reference DOM (source of truth):**
  - `docs/research/router-com-92408672/root-8a5edab2/sections/00-fixed-header.html`
  - `docs/research/router-com-92408672/root-8a5edab2/sections/01-offer-toast.html`
  - `docs/research/router-com-92408672/root-8a5edab2/sections/98-mobile-bottom-bar.html`
- **Screenshots:** `docs/design-references/router-com-92408672/root-8a5edab2/state-fixed-header.png` (header visible state), `sec-hero.png` (toast bottom-right)
- **Interaction model:** scroll-driven (header), time+click (toast), static (mobile bar)

## FixedHeader ('use client')
- Root: `div.fixed.inset-x-0.top-0.z-50.hidden.h-[60px].items-center.justify-between.border-gray-3.border-b.bg-white.px-11.transition-[opacity,transform].duration-200.ease-out.lg:flex` — desktop only.
- **Behavior:** hidden state classes `-translate-y-full opacity-0` when `window.scrollY <= 100`; visible `translate-y-0 opacity-100` when `> 100`. Passive scroll listener + initial check. Transition: opacity/transform 0.2s cubic-bezier(0,0,0.2,1) (from the classes above).
- When hidden also apply `inert`/`aria-hidden` like source (source has `inert=""` when hidden — replicate via the `inert` prop toggling with visibility).
- Left group (`flex items-center gap-6`): link `/` aria-label "Router by Ramp home" `text-ink-black` wrapping `<span class="relative block h-[33.195px] w-[80.272px]">` + `RouterWordmark` (shared icon, className `w-auto h-full shrink-0`).
- Right group (`flex items-center gap-5`): per ref HTML — "Get the API Key" (black bg-ink text-white button/link), "Read the docs" (border outline), "Login" (underlined text link). Copy exact classes/hrefs from ref (external hrefs point to ramp.com; keep them).

## OfferToast ('use client')
- Root `aside` aria-label "Limited time offer": `fixed bottom-5 left-1/2 z-50 [--toast-translate-x:-50%] animate-[toast-enter_0.2s_ease-out] ...` — check ref for the full class list including lg positioning (bottom-right on desktop: `lg:left-auto lg:right-8 lg:[--toast-translate-x:0%]` or similar — copy verbatim).
- Close button: absolute top-0 right-0, size 26px circle, `-translate-y-1/2 translate-x-1/2`, white bg, border; contains CloseX16-style icon (ref uses a small x svg — reuse `CloseX16` or copy ref svg if different). Clicking unmounts the toast (useState).
- Body (`flex w-85.75 lg:w-116.75`): two halves:
  - Left (white bg, padding): mono overline "LIMITED TIME OFFER" (gray-6), text "Get 50% off of GPT-5.6 Sol through 9/18/26 when you sign up for Router." then black button "Get the API Key".
  - Right: background image `…/images/toast/gpt-sol-background.webp` (cloudy), centered OpenAI glyph svg (in ref HTML inline — keep inline in this component) above mono label "GPT-5.6 SOL".
- Copy exact classes/text from ref HTML.

## MobileBottomBar
- Root: `div.fixed.inset-x-0.bottom-0.z-50.flex.flex-col.bg-background.px-4.lg:hidden.transition-[opacity,transform]...` (ref HTML `98-mobile-bottom-bar.html`, 1.2KB — replicate fully).
- Two anchor rows h-16 with `border-b border-rule`, text + chevron/arrow icon, linking to API key / docs (copy hrefs).
- Static; always visible on <lg. (Source toggles opacity/transform via `aria-hidden` at page top — replicate classes; if the ref shows a hidden state at scroll 0, implement the same scroll-driven show >100px as FixedHeader but only if the ref classes indicate it; otherwise leave always-visible.)

## Responsive
- FixedHeader: `hidden lg:flex` only ≥1024. MobileBottomBar: `lg:hidden` only <1024. Toast: full-width-ish on mobile (w-85.75 = 343px), wider on lg (w-116.75 = 467px), bottom-center mobile vs bottom-right desktop per ref classes.
