# Behaviors — router.com/

All values measured via getComputedStyle / class inspection in live browser at 1440×900.

## Scroll-driven

### FixedHeader show/hide
- Element: `div.fixed.inset-x-0.top-0.z-50.hidden.h-[60px] ... lg:flex` (white bg, border-b border-gray-3, px-11)
- Trigger: window.scrollY — hidden at ≤94px, shown at ≥110px (threshold ~100px; the in-flow hero nav is 94px tall)
- State A (top): classes `-translate-y-full opacity-0`
- State B (scrolled): classes `translate-y-0 opacity-100`
- Transition: `opacity 0.2s cubic-bezier(0, 0, 0.2, 1), transform 0.2s cubic-bezier(0, 0, 0.2, 1)`
- Desktop only (`hidden lg:flex`); on mobile a fixed bottom bar (`lg:hidden`) is always present instead.

## Time-driven

### Announcement ticker (top bar)
- `@keyframes announcement-ticker { 100% { transform: translate(-100%) } }`
- Applied to `span.flex.min-w-full.shrink-0`: `120s linear infinite`; content duplicated for seamless loop. Bar height: var(--announcement-height) = 34px, black bg, white mono text.
- Repeating text unit: `ROUTER.COM SAVES YOU TIME AND MONEY` / `FREE ROUTING THROUGH 2026` / `$1B IN MODEL CREDITS` separated by `|` (verify verbatim in spec).

### Provider logo marquee (Integration section)
- `@keyframes model-provider-marquee { 100% { transform: translateX(calc(-50% - var(--marquee-gap))) } }`
- Applied to `div.flex.w-max.shrink-0`: `45s linear infinite`. Content list duplicated (each logo appears 2×).

### Benchmark tab auto-advance
- Active tab has underline progress bar `span.absolute.-bottom-px.left-0` with `tab-progress 5s linear 1` (`scaleX(0)→scaleX(1)`, transform-origin left).
- After 5s the next tab activates automatically (score → distributions → summary → score…). Clicking a tab selects it immediately (restarts progress).

### Offer toast entrance
- `aside.fixed.bottom-5.left-1/2 [--toast-translate-x:-50%]` animates `toast-enter 0.2s ease-out` (`opacity 0→1`, `translateX(+50%→0)` relative offset). On lg it is positioned bottom-right (check exact classes in spec). Dismiss button: absolute, size 26px, top-right, -translate-y-1/2 translate-x-1/2, white bg circle border. Clicking removes the toast.

### Terminal typing animation (Integration section)
- Keyframes: `rmah-cr-type-cover` (scaleX 1→0 cover reveals text), `rmah-cr-caret` (caret travels `--rmah-cr-caret-travel`), `rmah-cr-caret-blink`, `rmah-cr-bar-grow` (scaleX 0→1), `rmah-cr-icon-enter` (slide in from -5 units), `caret-blink` (steps 0-49% visible, 50-100% hidden).
- Simulates typing the curl command / terminal response.

### Proof route drift ("Put to work at Ramp")
- `@keyframes proof-route-drift { 100% { stroke-dashoffset: calc(-1 * var(--proof-dash-cycle)) } }` — `6s linear infinite` on SVG `path` elements (dashed route lines drift continuously).

## Click-driven

### Video dialogs (2)
- Native `<dialog>`: `m-auto w-[min(1100px,92vw,calc((100dvh-2.5rem)*16/9))] max-w-none border-0 bg-transparent p-0 backdrop:bg-ink-black/80 backdrop:backdrop-blur-sm`
- Video 1 (Savings section "See how it works / Watch the video" thumbnail): cdn.air.inc/41b456e8-8494-4461-af91-1757d8d0ad8e, poster /landing/integration-video-still.webp
- Video 2 (Proof section switchyard card "Watch the video"): cdn.air.inc/abdcb3e4-1e64-4703-9f84-01c95606790f, poster /landing/proof/switchyard-poster.webp
- ESC or backdrop click closes.

### Quotes carousel
- Container: `-mr-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain [scrollbar-width:none]` — 6 slides.
- Prev/next buttons: `flex size-8 cursor-pointer items-center justify-center bg-ink text-white transition-[background-color,opacity]`; disabled state when at start/end (prev disabled initially, ~40% opacity gray).

### Lab carousel ("More from the Lab")
- Same pattern: snap-x scroll container + prev/next size-8 ink arrow buttons.
- Card "Read the post" link arrow: hover triggers `arrow-slide` 0.4s (opacity/translate out right, in from left).

### FAQ accordion (Radix)
- Item: `div[data-state] .border-t.border-primary.first:border-t-0`
- Trigger button: `flex flex-1 items-center justify-between text-balance px-0 py-4 text-start text-primary transition-all [&[data-state=open]>div>svg]:rotate-180`; chevron svg `size-5 transition-transform duration-150`
- Content wrapper: `grid transition-[grid-template-rows] duration-200 [[data-state=closed]_&]:grid-rows-[0fr] [[data-state=open]_&]:grid-rows-[1fr]` → inner `overflow-hidden text-hushed`
- Single-open behavior (Radix accordion type="single" collapsible — verify).

### Benchmark filters
- Radix dropdown pills (Cost ▾ / Models (26) ▾ / Average ▾; per-tab variants). Dropdown menus use slideUpAndFade etc. keyframes. For clone: static pills sufficient, menus optional.

## Hover states (to verify per-component during extraction)
- Black buttons ("Get the API Key"): bg transitions (transition-colors)
- Outline buttons ("Read the docs"): border/bg change
- Nav links: underline
- Cards/links with `.arrow-slide` icon animation
- Carousel arrows: background-color transition

## Entrance animations
- `panel-rise` (opacity 0 + translateY(18px) → visible) and `panel-cascade` (translateY(7px)) — applied on load to hero/savings panels (verify triggers; they are one-shot CSS animations, not IntersectionObserver-gated).

## Responsive
- Breakpoints (Tailwind v4 defaults + custom): sm 640, md 768, lg 1024, xl 1280, 2xl 1440 (`--breakpoint-2xl: 1440px`)
- Mobile: fixed bottom link bar (`lg:hidden`), single column stacking, section paddings px-4 (vs lg:px-16)
