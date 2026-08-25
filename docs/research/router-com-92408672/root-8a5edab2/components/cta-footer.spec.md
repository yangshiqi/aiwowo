# FinalCta + SiteFooter Specification

## Overview
- **Target files:**
  - `src/components/sites/router-com-92408672/root-8a5edab2/FinalCtaSection.tsx`
  - `src/components/sites/router-com-92408672/root-8a5edab2/SiteFooter.tsx`
- **Reference DOM (source of truth):**
  - `docs/research/router-com-92408672/root-8a5edab2/sections/10-tokens-are-money-save-both.html` (2KB)
  - `docs/research/router-com-92408672/root-8a5edab2/sections/99-footer.html` (12KB)
- **Screenshots:** `sec-cta.png`, `sec-footer.png`
- **Interaction model:** static (hover states only)

## FinalCtaSection
- `<section class="relative overflow-hidden bg-white pt-[154.5px] pb-[132px] text-ink sm:…">` (classes verbatim from ref):
  - absolute decorative img `…/images/final-cta-mark.webp` — `pointer-events-none absolute top-[-1px] left-[-86px] z-0 h-[495px] w-[…]` (copy exact classes; it's the giant Ramp/Router glyph watermark, left-anchored)
  - centered content (`relative z-10`): h2 "Tokens are money.<br>Save both." (headline-xl centered), CTA row: "Get the API Key" (bg-ink) + "Read the docs" (border) — copy classes/hrefs from ref.

## SiteFooter
- `<footer class="flex flex-col items-start gap-[22px] bg-ink px-4 pt-8 pb-[27px] lg:items-… lg:px-16 …">` (dark #1a1919, text white):
  - Row 1: RouterWordmark (white, `text-white` variant — shared icon with className) + nav links (from ref): "Router Documentation", "Token Spend Management", "A.I. Index", "Ramp Intelligence", "Ramp Labs", "Ramp SWE-Bench" (external hrefs from ref — keep).
  - Row 2 (legal, `text-[14px] text-gray-5`): © line, "Privacy", "Terms", "Your Privacy Choices" + PrivacyChoicesIcon (30×14) — copy text/links/classes verbatim from ref.
- Hover states: links underline / color change per ref classes (`hover:text-white` etc.).

## Responsive
- Footer stacks on mobile (`flex-col` → `lg:flex-row` per ref); CTA section padding shrinks per ref classes.
