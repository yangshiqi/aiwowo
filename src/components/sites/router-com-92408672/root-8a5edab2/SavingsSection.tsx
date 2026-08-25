"use client";

import { useEffect, useId, useRef, useState, type ComponentType, type KeyboardEvent } from "react";
import "./scenes.css";
import { ArrowRight12 } from "@/components/sites/router-com-92408672/shared/icons";
import { CornerTicks } from "./savings/CornerTicks";
import { VideoLightbox } from "./savings/VideoLightbox";
import { CostChartScene } from "./savings/CostChartScene";
import { CacheTurnsScene } from "./savings/CacheTurnsScene";
import { ModelMarketplaceScene } from "./savings/ModelMarketplaceScene";

/**
 * "Built for CTOs. Loved by CFOs." section — heading row with video
 * lightbox card, layered stage with three crossfading scene tabpanels and
 * the auto-advancing feature tablist (5s per tab, matching the original).
 */

const ASSETS = "/sites/router-com-92408672/root-8a5edab2/images";
const VIDEO_URL = "https://cdn.air.inc/41b456e8-8494-4461-af91-1757d8d0ad8e";

interface FeatureTab {
  title: string;
  body: string;
  Panel: ComponentType;
}

const TABS: FeatureTab[] = [
  {
    title: "Automatic savings.",
    body: "New cost-saving strategies roll into Ramp Router as they prove themselves. Your integration stays put.",
    Panel: CostChartScene,
  },
  {
    title: "Smarter defaults.",
    body: "Router tests new models against real workloads, so the best fit becomes your default.",
    Panel: CacheTurnsScene,
  },
  {
    title: "More models. One endpoint.",
    body: "Access closed and open-source models from vetted providers, all US-hosted with options for ZDR.",
    Panel: ModelMarketplaceScene,
  },
];

const AUTO_ADVANCE_MS = 5000;

function VideoThumbnailCard() {
  return (
    <VideoLightbox
      href={VIDEO_URL}
      poster={`${ASSETS}/integration/integration-video-still.webp`}
      label="See how Router works"
      className="relative flex h-[88px] w-full shrink-0 border border-gray-3 outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink lg:h-[87px] lg:max-w-[368px]"
    >
      <CornerTicks junctions={["tl", "tr", "bl", "br"]} />
      <div className="relative w-32 shrink-0 overflow-hidden bg-surface-gray lg:w-36">
        <img
          src={`${ASSETS}/integration/integration-video-still.webp`}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-0.5 py-3 pr-4 pl-6 lg:gap-2 lg:pl-8">
        <p className="-mt-[6.58px] text-base leading-6 text-ink lg:mt-0">See how it works</p>
        <span className="flex items-center gap-[11px] text-sm leading-4 text-gray-6 lg:leading-5">
          Watch the video
          <ArrowRight12 className="shrink-0" />
        </span>
      </div>
    </VideoLightbox>
  );
}

export function SavingsSection() {
  const id = useId();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const tablistRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState<boolean[]>(() => TABS.map((_, index) => index === 0));

  function activateTab(index: number) {
    setActive(index);
    setMounted((state) => (state[index] ? state : state.map((value, i) => value || i === index)));
  }

  function selectTab(index: number, focus = false) {
    activateTab(index);
    setAuto(false);
    if (focus) {
      tablistRef.current?.querySelectorAll<HTMLElement>('[role="tab"]').item(index)?.focus();
    }
  }

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry?.isIntersecting ?? false);
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timeout = window.setTimeout(() => activateTab((active + 1) % TABS.length), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timeout);
  }, [active, auto, inView]);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (delta !== 0) {
      event.preventDefault();
      selectTab((index + delta + TABS.length) % TABS.length, true);
    }
  }

  return (
    <section id="savings" aria-labelledby="automatic-savings-heading">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 pt-[58.27px] pb-16 lg:pt-0 lg:pb-32">
        <div className="flex flex-col gap-[19.5px] pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pb-[58px]">
          <div>
            <h2
              id="automatic-savings-heading"
              className="max-w-[450px] text-[34px] leading-9 tracking-[-0.4px] text-ink lg:text-[48px] lg:leading-[48px] lg:tracking-[-0.64px]"
            >
              Built for CTOs. <br />
              Loved by CFOs.
            </h2>
            <p className="mt-[13.21px] max-w-[450px] text-[15px] leading-5 text-ink lg:mt-[10.42px] lg:max-w-[411px] lg:text-base lg:leading-6">
              Engineering gets the best model for every workload.{" "}
              <br className="hidden lg:inline" />
              Finance gets lower inference spend.
            </p>
          </div>
          <VideoThumbnailCard />
        </div>
        <div ref={stageRef} className="relative grid border border-gray-3">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            <img
              src={`${ASSETS}/savings/stage-texture.webp`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/50" />
            <div className="absolute inset-0 bg-[url('/sites/router-com-92408672/root-8a5edab2/images/savings/stage-grain.webp')] bg-[length:512px_512px] bg-top-left opacity-20" />
          </div>
          <CornerTicks junctions={["tl", "tr"]} />
          {TABS.map((tab, index) => (
            <div
              key={tab.title}
              role="tabpanel"
              id={`${id}-panel-${index}`}
              aria-labelledby={`${id}-tab-${index}`}
              aria-hidden={index !== active}
              className={`z-10 col-start-1 row-start-1 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                index === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {mounted[index] && <tab.Panel />}
            </div>
          ))}
        </div>
        <div
          ref={tablistRef}
          role="tablist"
          aria-label="What Router does"
          onFocusCapture={() => setAuto(false)}
          className="relative grid border-r border-b border-l border-gray-3 lg:grid-cols-3"
        >
          <CornerTicks junctions={["t-seam-left", "t-seam-right", "bl", "br"]} />
          {TABS.map((tab, index) => {
            const selected = index === active;
            return (
              <button
                key={tab.title}
                type="button"
                role="tab"
                id={`${id}-tab-${index}`}
                aria-selected={selected}
                aria-controls={`${id}-panel-${index}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`relative cursor-pointer px-6 pt-[18.28px] pb-[19.5px] text-left outline-none lg:px-8 lg:pt-[26px] lg:pb-8 lg:h-[158px] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink${
                  index > 0 ? " border-t border-gray-3 lg:border-t-0 lg:border-l" : ""
                }${selected ? " lg:bg-gray-1" : ""}`}
              >
                {index > 0 && (
                  <span className="hidden lg:contents">
                    <CornerTicks junctions={["t-left-top", "t-left-bottom"]} />
                  </span>
                )}
                <span
                  className={`flex flex-col gap-[2.21px] lg:gap-[7px]${selected ? "" : " opacity-50"}`}
                >
                  <span className="text-xl leading-6 text-ink lg:text-2xl lg:leading-7">
                    {tab.title}
                  </span>
                  <span className="text-[15px] leading-5 text-ink lg:text-base lg:leading-6">
                    {tab.body}
                  </span>
                </span>
                {selected && (
                  <span
                    key={active}
                    aria-hidden="true"
                    className={`absolute -bottom-px left-0 z-30 h-[1.5px] w-full origin-left bg-black ${
                      auto
                        ? "motion-safe:animate-[tab-progress_linear_forwards] motion-reduce:scale-x-100"
                        : "scale-x-100"
                    }`}
                    style={auto ? { animationDuration: `${AUTO_ADVANCE_MS}ms` } : undefined}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
