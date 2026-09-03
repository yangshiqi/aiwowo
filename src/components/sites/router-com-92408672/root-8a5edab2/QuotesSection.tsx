"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AiwowoGlyph, ArrowRight16 } from "@/components/sites/router-com-92408672/shared/icons";

interface MilestoneSlide {
  year: string;
  text: string;
  name: string;
  company: string;
}

const QUOTES: MilestoneSlide[] = [
  {
    year: "2010",
    text: "易得商务中心：从传统商务中心起步，扎根朝阳，服务中小企业。",
    name: "易得商务中心",
    company: "北京 · 朝阳",
  },
  {
    year: "2015",
    text: "联合办公转型：升级为联合办公+孵化器平台，获朝阳区荣誉。",
    name: "联合办公 + 孵化器",
    company: "朝阳区荣誉",
  },
  {
    year: "2020",
    text: "双认证孵化器：成为北京唯一获\"国际化\"+\"数字经济\"双认证的孵化器平台。",
    name: "国际化 + 数字经济",
    company: "市级双认证",
  },
  {
    year: "2026",
    text: "艾窝窝·AI赋能：创立艾窝窝品牌，获OPC认证社区，孵化中外一人公司。",
    name: "艾窝窝 AI WOWO",
    company: "北京市OPC认证社区",
  },
];

const CORNER_TICKS: CSSProperties[] = [
  { width: "10.87px", height: "1px", top: 0, left: 0 },
  { width: "1px", height: "10.87px", top: 0, left: 0 },
  { width: "10.87px", height: "1px", top: 0, right: 0 },
  { width: "1px", height: "10.87px", top: 0, right: 0 },
  { width: "10.87px", height: "1px", bottom: 0, left: 0 },
  { width: "1px", height: "10.87px", bottom: 0, left: 0 },
  { width: "10.87px", height: "1px", bottom: 0, right: 0 },
  { width: "1px", height: "10.87px", bottom: 0, right: 0 },
];

const GAP_PX = 20; // gap-5 between slides

const ARROW_BUTTON_CLASS =
  "flex size-8 cursor-pointer items-center justify-center bg-ink text-white outline-none transition-[background-color,opacity] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:bg-ink-black/6 disabled:text-gray-3";

export function QuotesSection() {
  const scrollerRef = useRef<HTMLElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= maxScroll - 1);
  }, []);

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, [updateEnds]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const cardWidth = card ? card.getBoundingClientRect().width : el.clientWidth;
    el.scrollBy({ left: direction * (cardWidth + GAP_PX), behavior: "smooth" });
  }, []);

  return (
    <section aria-labelledby="quotes-heading">
      <h2 id="quotes-heading" className="sr-only">
        发展历程
      </h2>
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 lg:pt-0 lg:pb-32">
        <div className="flex flex-col gap-8 lg:gap-10">
          <section
            ref={scrollerRef}
            onScroll={updateEnds}
            aria-label="发展历程"
            tabIndex={0}
            className="-mr-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink motion-safe:scroll-smooth touch-pan-y select-none lg:-mr-16"
          >
            {QUOTES.map((quote) => (
              <figure
                key={quote.year}
                className="group relative grid w-[calc(100%-37px)] shrink-0 snap-start gap-x-8 gap-y-[27.28px] border border-gray-3 bg-white px-[15px] py-[31px] lg:w-[calc(100%-4rem)] lg:grid-cols-[66px_minmax(0,976px)] lg:gap-x-[72px] lg:gap-y-8 lg:p-20"
              >
                <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                  {CORNER_TICKS.map((style, index) => (
                    <span
                      key={index}
                      aria-hidden="true"
                      className="pointer-events-none absolute bg-blueprint"
                      style={style}
                    />
                  ))}
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px z-10 motion-reduce:hidden"
                >
                  <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100" />
                  <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 right-0 h-full w-px origin-top scale-y-0 group-hover:scale-y-100" />
                  <span className="absolute bg-ink transition-transform duration-300 ease-out right-0 bottom-0 h-px w-full origin-right scale-x-0 group-hover:scale-x-100" />
                  <span className="absolute bg-ink transition-transform duration-300 ease-out bottom-0 left-0 h-full w-px origin-bottom scale-y-0 group-hover:scale-y-100" />
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-[30px] items-center font-display text-[26px] font-bold leading-none tracking-[0.02em] text-ink-black lg:col-start-1 lg:row-start-1 lg:h-[66px] lg:text-[42px]"
                >
                  {quote.year}
                </span>
                <blockquote className="relative text-xl leading-6 tracking-normal text-black lg:-top-1.5 lg:col-start-2 lg:row-start-1 lg:text-[28px] lg:leading-8">
                  {quote.text}
                </blockquote>
                <figcaption className="flex items-center gap-4 lg:col-start-2 lg:row-start-2 lg:gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center border border-gray-3 bg-surface-gray lg:size-16">
                    <AiwowoGlyph className="size-6 lg:size-8" />
                  </span>
                  <span className="flex flex-col gap-3">
                    <span className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-ink">
                      {quote.name}
                    </span>
                    <span className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-gray-5">
                      {quote.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
            <span aria-hidden="true" className="w-4 shrink-0 lg:w-16" />
          </section>
          <div className="flex gap-2 self-start lg:self-end">
            <button
              type="button"
              disabled={atStart}
              aria-label="上一阶段"
              onClick={() => scrollByCard(-1)}
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowRight16 />
            </button>
            <button
              type="button"
              disabled={atEnd}
              aria-label="下一阶段"
              onClick={() => scrollByCard(1)}
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowRight16 className="-scale-x-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
