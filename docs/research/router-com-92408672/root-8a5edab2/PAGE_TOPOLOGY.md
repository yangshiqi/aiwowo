# Page Topology — router.com/ (desktop 1440px)

Source: https://router.com/ — "Ramp Router: The LLM Gateway That Cuts Inference Costs"
Framework: Next.js App Router + Tailwind CSS v4. No smooth-scroll library. Radix primitives (accordion, dropdowns), Sonner-style toast keyframes present, native `<dialog>` for video modals.

Page container: `main.flex.flex-col.bg-white.text-ink` — total height ≈ 7972px at 1440×900.
Every section's inner wrapper: `mx-auto w-full max-w-[1440px] px-4 lg:px-16`.

## Sections in visual order

| # | Name | Y-range (px) | Interaction model |
|---|------|--------------|-------------------|
| 0a | AnnouncementTicker | 0–34 (in-flow, top of hero) | time-driven marquee (`announcement-ticker` 120s linear infinite) |
| 0b | HeroNav (in-flow) | 34–94 | static; logo + Login link |
| 0c | FixedHeader | fixed top, z-50, h-60px | scroll-driven: hidden ≤~100px scroll (`-translate-y-full opacity-0`), shown >~100px (`translate-y-0 opacity-100`), transition opacity+transform 200ms cubic-bezier(0,0,0.2,1). Desktop only (`hidden lg:flex`). Contains logo, "Get the API Key" (black), "Read the docs" (outline), "Login" |
| 0d | OfferToast | fixed bottom-5, z-50 (desktop: bottom-right area) | time-driven entrance `toast-enter` 0.2s ease-out; dismissible close button (absolute -top/-right, size 26px) |
| 1 | Hero | 0–910 | static text + layered bg (blurred "Router" texture.webp + vector-field.svg); numbered strip 01/02/03 at bottom is part of this section |
| 2 | Integration (terminal) | 910–1769 | time-driven typing animation (`rmah-cr-*` keyframes, caret-blink); copy-to-clipboard button; provider logo marquee at bottom (`model-provider-marquee` 45s linear infinite); "Watch the video"-style dialog for integration video |
| 3 | Savings ("Built for CTOs. Loved by CFOs.") | 1769–2882 | click-driven video `<dialog>` (backdrop ink-black/80 + blur); canvas dither bar chart (18 × `router-as-bar-dither-canvas` in `router-as-bar-stack`); 3 feature columns below |
| 4 | Quotes carousel | 2882–3436 | click-driven prev/next buttons + snap-x mandatory overflow-x scroll container, 6 slides, hidden scrollbar; h2 is sr-only "What teams say about Router" |
| 5 | Benchmark | 3436–4208 | click-driven tabs (#benchmark-tab-score / -distributions / -summary) + TIME-driven auto-advance (`tab-progress` 5s linear underline, then next tab); per-tab SVG charts; dropdown filters (Radix) |
| 6 | Proof ("Put to work at Ramp.") | 4209–5297 | bento grid; animated SVG route lines (`proof-route-drift` 6s linear infinite, stroke-dashoffset); video card opens `<dialog>` (switchyard video); blog card link |
| 7 | Lab ("More from the Lab") | 5297–5961 | click-driven prev/next arrows over snap-x scroll container of blog cards; `arrow-slide` hover animation on "Read the post" links |
| 8 | FAQ | 5961–7095 | click-driven Radix accordion; chevron rotates 180° (150ms); content grid-rows 0fr→1fr 200ms |
| 9 | FinalCTA ("Tokens are money. Save both.") | 7095–7815 | static; absolute-positioned final-cta-mark.webp (top:-1px left:-86px, h 495px→917px rendered) |
| 10 | Footer | 7815–7972 | static; dark `bg-ink` rgb(26,25,25) |
| 11 | MobileBottomBar | fixed bottom, z-50, `lg:hidden` | static; 2 links ("Get the API Key" / "Read the docs") |

## Z-index layers
- FixedHeader, OfferToast, MobileBottomBar: z-50 (fixed)
- Hero nav wrapper: z-50 (relative, in flow)
- Hero content: z-10 over absolute bg layer
- Video dialogs: native `<dialog>` top layer, `backdrop:bg-ink-black/80 backdrop:backdrop-blur-sm`

## Route/output mapping
- Route: `/` (replaces template scaffold `src/app/page.tsx`)
- Components: `src/components/sites/router-com-92408672/root-8a5edab2/`
- Assets: `public/sites/router-com-92408672/root-8a5edab2/`

## Videos
- Integration/how-it-works: https://cdn.air.inc/41b456e8-8494-4461-af91-1757d8d0ad8e (237 MB — NOT downloaded; clone hotlinks CDN URL; poster local)
- Switchyard: https://cdn.air.inc/abdcb3e4-1e64-4703-9f84-01c95606790f (11.6 MB — downloaded to videos/switchyard.mp4)
