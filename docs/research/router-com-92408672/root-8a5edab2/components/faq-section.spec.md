# FaqSection Specification

## Overview
- **Target file:** `src/components/sites/router-com-92408672/root-8a5edab2/FaqSection.tsx`
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/09-faq.html` (30KB — read fully; contains ALL questions and answers)
- **Screenshots:** `sec-faq.png`, `state-faq-open.png` (first item open)
- **Interaction model:** click-driven accordion (Radix-style, single-open collapsible)

## Structure
- `<section id="faq" aria-labelledby="faq-heading">`: h2 "FAQ" + accordion list (~17 items). Questions include: "What is Router?", "Wait, Ramp bought router.com?", "How does it work?", "What models do you support?", "How much does it cost?", "Aren't there already LLM routers?", "What's the difference between using Router and going direct with a provider?", "Who should use this?", "Do I need to be a Ramp customer?", "Do I have to rewrite my code to use this?", "How does Router handle my data, credentials, and retention?", "Does Router support bring-your-own API keys (BYOK)?", "Where are the models hosted?", "What happens if a provider has an outage or rate-limits me?", "Can I compare models side by side?" — the ref HTML is authoritative for the full list AND all answer paragraphs (answers exist in DOM even when closed — extract verbatim, including links inside answers).
- Item DOM (replicate exactly, driven by your own state instead of Radix):
  - wrapper `div[data-state=open|closed].border-t.border-primary.first:border-t-0`
  - `h3.flex` > `button` `flex flex-1 items-center justify-between text-balance px-0 py-4 text-start text-primary transition-all [&[data-state=open]>div>svg]:rotate-180` with `aria-expanded`, `aria-controls`; question text; then `div.rounded-lg.p-2` > ChevronDown24 icon `box-content block size-5 shrink-0 transition-transform duration-150`.
  - content: `div.grid.transition-[grid-template-rows].duration-200.[[data-state=closed]_&]:grid-rows-[0fr].[[data-state=open]_&]:grid-rows-[1fr]` > `div[role=region].overflow-hidden.text-hushed` > answer body (padding per ref, typically `pb-4` + body-m classes).
- Use `useId`-based ids for aria wiring (do NOT copy `radix-_R_…` ids).

## Behavior ('use client')
- Single-open collapsible: clicking a closed item opens it and closes the previous; clicking the open item closes it (verify against ref semantics — Radix `type="single" collapsible`; the grid-rows CSS transition animates height in both directions).
- Chevron rotates 180° via the data-state selector already in the classes.

## Responsive
- Single column at all widths; max-width per ref container.
