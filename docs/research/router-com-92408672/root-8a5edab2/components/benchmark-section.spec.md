# BenchmarkSection Specification

## Overview
- **Target files:** `src/components/sites/router-com-92408672/root-8a5edab2/benchmark/BenchmarkSection.tsx` (+ sibling subcomponents in the same `benchmark/` folder as you see fit: `ScatterPanel.tsx`, `DistributionsPanel.tsx`, `SummaryPanel.tsx`)
- **Reference DOM (source of truth):** `docs/research/router-com-92408672/root-8a5edab2/sections/06-a-benchmark-built-from-real-.html` (148KB — read it; it contains the FULL rendered DOM of all three tab states incl. chart SVGs)
- **Screenshots:** `sec-benchmark.png`, `state-benchmark-tab-score.png`, `state-benchmark-tab-distributions.png`, `state-benchmark-tab-summary.png`
- **Interaction model:** click-driven tabs + TIME-driven auto-advance every 5s with `tab-progress` underline

## Structure
- `<section id="benchmark" class="relative">` → container → two-column bordered layout:
  - **Left panel (~57%)**: tab bar row (border-b): 3 tab buttons (`id`s like `benchmark-tab-score|distributions|summary`, `role="tab"`, `aria-selected`): each has a small mono prefix label ("Score"/"Metrics"/"Summary") + full label ("Score versus spend" / "Metric distributions" / "Model summary"); active tab: `bg` highlight (rounded-[5.42px] gray bg) per ref; the ACTIVE tab has underline progress `span.absolute.-bottom-px.left-0` with `animate-[tab-progress_5s_linear]` (origin-left, scaleX 0→1); "Share" button right (ShareIcon + text; clicking may open a small menu w/ "Copy link" CopyLinkIcon — replicate only if present in ref, else static button).
  - Below tab bar: filter pill row + the active panel:
    - **Score versus spend**: filter pills ("Cost ▾", "Models (26) ▾", "Average ▾" — ChevronDown21; static buttons, no dropdown needed). Plot: relative box containing the axes/grid `<svg viewBox="0 0 700 421">` (grid lines + tick labels "45%..90%", "$0.00..$3.00", axis titles "Solve rate" / "Cost (Average)") — copy the SVG from ref verbatim (it's in the ref file), plus absolutely-positioned model-logo points: each point is a small white circle card (rounded-full, border, shadow) containing a model logo img (`…/images/benchmark/{openai,claude,moonshot,xai,deepseek,gemini,qwen}.svg` or `zai.png`); positions are inline `style="left:…%; top:…%"` in ref — copy ALL points exactly. Dashed frontier polyline is part of the SVG.
    - **Metric distributions**: filter pills ("Cost ▾", "Claude Fable 5 ▾", "Claude Opus 5 ▾") + legend swatches (blue #? / orange — read exact colors from ref inline styles/classes) + density chart `<svg viewBox="0 0 700 421">` with two filled paths — copy SVG verbatim from ref.
    - **Model summary**: whatever the ref shows for the third panel (a ranked table of models with logos + stats). Copy DOM verbatim; map logo srcs to local.
  - **Right panel**: heading "A benchmark built from real work.", paragraph "We built Ramp SWE-Bench from real production engineering work because public leaderboards couldn't answer the questions we had. It gives us a clearer view of what each model can solve and at what cost.", outline button "Explore the full benchmark" (external href from ref — keep).

## Behavior ('use client')
- activeTab state; auto-advance interval 5s (score → distributions → summary → score); click selects + resets timer; progress span keyed by activeTab so the animation restarts.
- Panels swap; if ref crossfades (transition-opacity), replicate; else instant swap.
- Pause auto-advance when the user has clicked a tab? Source keeps cycling (tab-progress runs 1 iteration per tab then advances) — keep cycling after click.
- Optional (only if cheap): pause interval while document.hidden.

## Data extraction requirement
Every number, label, point position, and SVG path comes from the ref HTML — no invented data. If a value is illegible, extract programmatically (grep the ref file) rather than guessing.

## Responsive
- Two columns stack on mobile (chart panel above text). Tab labels shrink (`text-sm` → `xl:text-base`, `p-1.5 sm:p-2 xl:p-[10.85px]`). Copy ref classes.
