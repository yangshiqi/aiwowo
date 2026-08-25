"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown21, CopyLinkIcon, ShareIcon } from "../../shared/icons";
import { FILTER_MODELS, type BenchmarkTabId } from "./data";
import { DistributionsPanel } from "./DistributionsPanel";
import { ScatterPanel } from "./ScatterPanel";
import { SummaryPanel } from "./SummaryPanel";

const TAB_ORDER: BenchmarkTabId[] = ["score", "distributions", "summary"];

const TABS: Array<{ id: BenchmarkTabId; short: string; full: string }> = [
  { id: "score", short: "Score", full: "Score versus spend" },
  { id: "distributions", short: "Metrics", full: "Metric distributions" },
  { id: "summary", short: "Summary", full: "Model summary" },
];

const TAB_BUTTON_BASE =
  "relative shrink-0 rounded-[5.42px] p-1.5 text-sm leading-[11px] whitespace-nowrap transition-colors sm:p-2 xl:p-[10.85px] xl:text-base outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const PANEL_BASE = "relative transition-opacity duration-200 ease-out motion-reduce:transition-none";

const PILL_CLASS =
  "relative flex items-center gap-1 rounded-[54px] border border-gray-2 bg-white px-2.5 py-1.5 text-xs leading-4 text-ink transition-colors hover:border-gray-4 focus-within:border-ink lg:gap-2 lg:px-4 lg:py-2 lg:text-sm lg:leading-5";

const CHEVRON_CLASS = "size-4 shrink-0 lg:size-[21px]";

function CostPill() {
  return (
    <span className={PILL_CLASS}>
      <span className="max-w-[68px] truncate whitespace-nowrap lg:max-w-none">Cost</span>
      <ChevronDown21 className={CHEVRON_CLASS} />
      <select aria-label="Metric" defaultValue="cost" className="absolute inset-0 cursor-pointer opacity-0">
        <option value="cost">Cost</option>
        <option value="turns">Turns</option>
        <option value="turns_per_minute">Turns per minute</option>
        <option value="input_tokens">Input tokens</option>
        <option value="output_tokens">Output tokens</option>
        <option value="output_tokens_per_turn">Output tokens per turn</option>
      </select>
    </span>
  );
}

function ModelsPill() {
  return (
    <details className="relative">
      <summary
        className={`${PILL_CLASS} cursor-pointer list-none whitespace-nowrap [&::-webkit-details-marker]:hidden`}
      >
        Models (26)
        <ChevronDown21 className={CHEVRON_CLASS} />
      </summary>
      <div className="absolute top-[calc(100%+6px)] left-0 z-30 max-h-[280px] w-[240px] overflow-y-auto border border-gray-3 bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <div className="flex gap-3 border-b border-gray-2 pb-2 text-xs text-gray-6">
          <button type="button" className="underline hover:no-underline">Select all</button>
          <button type="button" className="underline hover:no-underline">Clear</button>
        </div>
        <ul className="mt-2 flex flex-col gap-1.5">
          {FILTER_MODELS.map((model) => (
            <li key={model.id}>
              <label htmlFor={`benchmark-model-${model.id}`} className="flex cursor-pointer items-center gap-2 text-sm text-ink">
                <input id={`benchmark-model-${model.id}`} type="checkbox" defaultChecked className="size-3.5 accent-ink" />
                {model.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function AveragePill() {
  return (
    <span className={PILL_CLASS}>
      <span className="max-w-[68px] truncate whitespace-nowrap lg:max-w-none">Average</span>
      <ChevronDown21 className={CHEVRON_CLASS} />
      <select aria-label="Statistic" defaultValue="average" className="absolute inset-0 cursor-pointer opacity-0">
        <option value="average">Average</option>
        <option value="p25">P25</option>
        <option value="p50">P50</option>
        <option value="p75">P75</option>
        <option value="p95">P95</option>
      </select>
    </span>
  );
}

function StaticModelPill({ label }: { label: string }) {
  return (
    <span className={PILL_CLASS}>
      <span className="max-w-[68px] truncate whitespace-nowrap lg:max-w-none">{label}</span>
      <ChevronDown21 className={CHEVRON_CLASS} />
    </span>
  );
}

export function BenchmarkSection() {
  const [activeTab, setActiveTab] = useState<BenchmarkTabId>("score");
  const [shareStatus, setShareStatus] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Only run the auto-advance (and its progress animation) while the section
  // is actually on screen — keeps off-screen re-renders and paints at zero.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry?.isIntersecting ?? false);
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-advance every 5s; re-arming on every tab change (click or automatic)
  // resets the timer so the progress underline and the swap stay in sync.
  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActiveTab((previous) => TAB_ORDER[(TAB_ORDER.indexOf(previous) + 1) % TAB_ORDER.length]);
    }, 5000);
    return () => window.clearInterval(id);
  }, [activeTab, inView]);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#benchmark`;
    void navigator.clipboard?.writeText(url).then(() => {
      setShareStatus("Link copied");
      window.setTimeout(() => setShareStatus(""), 2000);
    });
  };

  return (
    <section id="benchmark" ref={sectionRef} className="relative">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 lg:pt-0 lg:pb-32">
        <div className="grid lg:grid-cols-[755fr_557fr]">
          <div className="relative min-w-0 border border-gray-3 lg:border-b">
            <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
              <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: "0", left: "0" }} />
              <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: "0", left: "0" }} />
            </span>
            <span className="contents lg:hidden">
              <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: "0", right: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: "0", right: "0" }} />
              </span>
            </span>
            <span className="hidden lg:contents">
              <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: "0", left: "0" }} />
              </span>
            </span>
            <div className="flex h-[38px] items-center gap-2 border-b border-gray-3 pr-3 pl-3 sm:h-12 sm:gap-3 sm:pr-4 sm:pl-4 lg:h-[63px] lg:pr-8 xl:gap-4">
              <div role="tablist" aria-label="Benchmark views" className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto sm:gap-1.5 xl:gap-[13px]">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`benchmark-tab-${tab.id}`}
                      aria-selected={isActive}
                      aria-controls={`benchmark-panel-${tab.id}`}
                      tabIndex={isActive ? 0 : -1}
                      aria-label={tab.full}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${TAB_BUTTON_BASE} ${isActive ? "bg-[#e8e6e1] text-black" : "text-gray-5 hover:text-ink"}`}
                    >
                      <span className="xl:hidden">{tab.short}</span>
                      <span className="hidden xl:inline">{tab.full}</span>
                      {isActive ? (
                        <span
                          key={activeTab}
                          aria-hidden="true"
                          className="absolute -bottom-px left-0 z-30 h-[1.5px] w-full origin-left bg-black motion-safe:animate-[tab-progress_linear_forwards] motion-reduce:scale-x-100"
                          style={{ animationDuration: "5000ms" }}
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
              <details className="relative shrink-0">
                <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm leading-6 text-ink hover:underline xl:gap-2 xl:text-base [&::-webkit-details-marker]:hidden">
                  <ShareIcon className="shrink-0" />
                  Share
                </summary>
                <div className="absolute top-[calc(100%+6px)] right-0 z-40 flex w-[118.41px] flex-col gap-3 rounded-[5px] bg-white px-[8.55px] py-[10.5px] shadow-[0_4px_14px_rgba(0,0,0,0.09)]">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex w-full items-center gap-2 text-left text-[12px] leading-[13.95px] text-ink outline-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <CopyLinkIcon className="shrink-0" />
                    Copy link
                  </button>
                </div>
                <span aria-live="polite" className="sr-only">{shareStatus}</span>
              </details>
            </div>
            <div className="bg-white pt-3 pb-4 lg:pt-[31px] lg:pb-[37px]">
              <div className="flex flex-wrap items-center gap-2 pr-4 pl-4 lg:pr-0 lg:pl-11">
                {activeTab === "score" ? (
                  <>
                    <CostPill />
                    <ModelsPill />
                    <AveragePill />
                  </>
                ) : activeTab === "distributions" ? (
                  <>
                    <CostPill />
                    <StaticModelPill label="Claude Fable 5" />
                    <StaticModelPill label="Claude Opus 5" />
                  </>
                ) : (
                  <>
                    <ModelsPill />
                    <AveragePill />
                  </>
                )}
              </div>
              <div className="mt-[21px] grid min-w-0 [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:min-w-0">
                <div
                  role="tabpanel"
                  id="benchmark-panel-score"
                  aria-labelledby="benchmark-tab-score"
                  aria-hidden={activeTab !== "score"}
                  className={`${PANEL_BASE} ${activeTab === "score" ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
                >
                  <ScatterPanel />
                </div>
                <div
                  role="tabpanel"
                  id="benchmark-panel-distributions"
                  aria-labelledby="benchmark-tab-distributions"
                  aria-hidden={activeTab !== "distributions"}
                  className={`${PANEL_BASE} ${activeTab === "distributions" ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
                >
                  <DistributionsPanel />
                </div>
                <div
                  role="tabpanel"
                  id="benchmark-panel-summary"
                  aria-labelledby="benchmark-tab-summary"
                  aria-hidden={activeTab !== "summary"}
                  className={`${PANEL_BASE} ${activeTab === "summary" ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
                >
                  <SummaryPanel />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex min-w-0 flex-col justify-start border-r border-b border-l border-gray-3 px-6 pt-[20.92px] pb-6 lg:justify-center lg:border-t lg:border-l-0 lg:p-20">
            <span className="hidden lg:contents">
              <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", top: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", bottom: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: "0", right: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: "0", right: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: "0", right: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: "0", right: "0" }} />
              </span>
            </span>
            <span className="contents lg:hidden">
              <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: "0", right: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: "0", right: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: "0", left: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: "0", right: "0" }} />
                <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: "0", right: "0" }} />
              </span>
            </span>
            <div className="flex flex-col gap-[19.31px] lg:gap-[25.7px]">
              <div className="flex flex-col gap-[11.19px] text-ink lg:gap-[19.8px]">
                <h2 className="max-w-[346px] text-[22px] leading-6 tracking-normal lg:text-[28px] lg:leading-8">A benchmark built from real work.</h2>
                <p className="max-w-[385px] text-[15px] leading-5 lg:text-base lg:leading-6">We built Ramp SWE-Bench from real production engineering work because public leaderboards couldn’t answer the questions we had. It gives us a clearer view of what each model can solve and at what cost.</p>
              </div>
              <div>
                <a
                  href="https://labs.ramp.com/swebench"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-none border font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-ink bg-transparent text-ink hover:bg-black/5 h-[51px] gap-1.5 px-5 text-[15px] lg:text-base"
                >
                  Explore the full benchmark
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
