# Builder Conventions — router.com clone

Applies to every component builder. Read fully before writing code.

## Project facts
- Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4.
- Components live in `src/components/sites/router-com-92408672/root-8a5edab2/`. Named exports, PascalCase files.
- Shared icons: `src/components/sites/router-com-92408672/shared/icons.tsx` — RouterWordmark, ArrowRight16, ArrowRight12, ChevronRight14, ChevronDown24, ChevronDown21, CloseX16, MenuIcon24, CopyIcon12, AutoModeIcon, ShareIcon, CopyLinkIcon, PrivacyChoicesIcon. Use these instead of re-inlining identical SVGs.
- Types: `src/types/router-landing.ts` (extend if needed, do not break existing).
- Scene CSS (verbatim from the original): `src/components/sites/router-com-92408672/root-8a5edab2/scenes.css` — classes `router-as-*` (cost chart), `rmah-mm__*` (model marketplace panel), `rmah-cr-*` keyframes, `sd-*` (cache turns scene). Import it from the component that uses those classes.
- Global CSS already provides: color tokens (`ink #1a1919`, `ink-black #0c0a08`, `gray-1..6`, `gray-dark`, `gray-medium`, `gray-light`, `rule`, `solar`, `surface-gray`, `smolder`, `hushed`, …), namespace tokens (`text-primary` → #090909, `text-hushed`, `text-hushed-reverse`, `border-primary` → light gray lab(83%)), typography classes (`headline-xl/l/m/s/xs`, `body-xl/l/m/s/xs` — responsive at 768/992px), fonts (`font-sans` = TWK Lausanne 300/350/400/700, `font-mono` + `font-ibm-plex-mono` = IBM Plex Mono), breakpoints (sm 480, md 768, lg 1024, xl 1280, 2xl 1440), keyframes (`announcement-ticker`, `model-provider-marquee`, `tab-progress`, `toast-enter`, `proof-route-drift`, `arrow-slide`, `caret-blink`, `panel-rise`, `panel-cascade`), `.proof-route-dashed` animation class, and the `.cascade-item` entrance system (gated on `[data-js="1"]` ancestor + `[data-shown="true"]` parent; the page root sets `data-js="1"`).

## HTML → JSX conversion rules
1. The reference HTML slice (path given per spec) is the **source of truth for structure, classes, and text**. Reproduce the DOM 1:1 unless the spec says otherwise.
2. `class=` → `className=`; decode HTML entities (`&amp;` → `&`, `&gt;` → `>`); remove `<!-- -->` comment nodes; kebab SVG attrs → camelCase; `style="..."` strings → JSX style objects (or replace with the equivalent Tailwind classes when trivially identical).
3. Keep Tailwind classes **verbatim**, including arbitrary values (`min-h-[calc(541px+var(--announcement-height))]`, `text-[39.102cqw]`, etc.). They work in our build.
4. Strip framework artifacts: `data-nimg`, `decoding`, `srcset`, `sizes`, `inert=""`, `data-radix-*` ids (`id="radix-..."`, `aria-controls="radix-..."` — replace with your own stable ids or React `useId`), `dpl=` query strings.
5. Next `<Image fill>` markup becomes plain `<img>` with `className="absolute inset-0 h-full w-full object-cover object-center"` (merge with the original classes) pointing at the local asset. Plain `<img>` everywhere; no `next/image`.
6. Keep all `aria-*`, `role`, `alt` attributes and `sr-only` content.
7. `'use client'` only for components that need state/effects/event handlers; keep static parts server-rendered when trivial to split, otherwise a single client component is acceptable.

## Asset path map (remote → local, prefix `/sites/router-com-92408672/root-8a5edab2`)
- `/_next/image?url=<X>&...` → decode `<X>` and map it with the rules below.
- `/_next/static/media/texture.<hash>.webp` → `…/images/hero/texture.webp`
- `/_next/static/media/texture-mobile.<hash>.webp` → `…/images/hero/texture-mobile.webp`
- `/_next/static/media/code-response.<hash>.webp` → `…/images/integration/code-response.webp`
- `/_next/static/media/final-cta-mark.<hash>.webp` → `…/images/final-cta-mark.webp`
- `/landing/integration-video-still.webp` → `…/images/integration/integration-video-still.webp`
- `/landing/hero/*`, `/landing/providers/*`, `/landing/savings/*`, `/landing/quote/*`, `/landing/benchmark/*`, `/landing/proof/*`, `/landing/toast/*` → `…/images/<same subpath>`
- Video `https://cdn.air.inc/abdcb3e4-1e64-4703-9f84-01c95606790f` → `…/videos/switchyard.mp4` (local)
- Video `https://cdn.air.inc/41b456e8-8494-4461-af91-1757d8d0ad8e` → keep the remote CDN URL (237 MB, intentionally not downloaded)

## Verification (required before you finish)
- `npx tsc --noEmit` passes.
- `npm run lint` has no new errors in your files.
- Commit your work: `git add <your files> && git commit -m "clone(router): <ComponentName>"`.
- Do NOT edit `src/app/page.tsx`, `layout.tsx`, `globals.css`, or another component's files.
