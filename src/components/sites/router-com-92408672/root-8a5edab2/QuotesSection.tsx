"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowRight16 } from "@/components/sites/router-com-92408672/shared/icons";

const IMG = "/sites/router-com-92408672/root-8a5edab2/images/quote";

interface QuoteSlide {
  logoSrc: string;
  logoAlt: string;
  text: string;
  headshotSrc: string;
  name: string;
  company: string;
}

const QUOTES: QuoteSlide[] = [
  {
    logoSrc: `${IMG}/delphi.svg`,
    logoAlt: "Delphi",
    text: "Choosing the right model makes a meaningful difference to our AI spend. We run billions of tokens through Router, and have reduced our model costs by 92%.",
    headshotSrc: `${IMG}/valentin-de-matos.png`,
    name: "Valentin De Matos",
    company: "Delphi",
  },
  {
    logoSrc: `${IMG}/genius-ai.png`,
    logoAlt: "Genius AI",
    text: "Ramp Router has given us access to a safe one-stop-shop for model providers in a matter of minutes. I'm a big fan of the vision to help benchmark and manage costs as we go multi-model.",
    headshotSrc: `${IMG}/braden-allchin.png`,
    name: "Braden Allchin",
    company: "genius ai",
  },
  {
    logoSrc: `${IMG}/arcanist.webp`,
    logoAlt: "Arcanist",
    text: "It's just dead-simple. Between Flex tier and Switchyard this is free money with 0 effort, and it's saving me the headache of having to think about constantly switching models.",
    headshotSrc: `${IMG}/josiah-parappally.webp`,
    name: "Josiah Parappally",
    company: "Arcanist",
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
        What teams say about Router
      </h2>
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 lg:pt-0 lg:pb-32">
        <div className="flex flex-col gap-8 lg:gap-10">
          <section
            ref={scrollerRef}
            onScroll={updateEnds}
            aria-label="Customer quotes"
            tabIndex={0}
            className="-mr-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink motion-safe:scroll-smooth touch-pan-y select-none lg:-mr-16"
          >
            {QUOTES.map((quote) => (
              <figure
                key={quote.name}
                className="group relative grid w-[calc(100%-37px)] shrink-0 snap-start gap-x-8 gap-y-[27.28px] border border-gray-3 bg-white px-[15px] py-[31px] lg:w-[calc(100%-4rem)] lg:grid-cols-[66px_minmax(0,976px)] lg:gap-x-[72px] lg:gap-y-8 lg:p-20"
              >
                <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                  {CORNER_TICKS.map((style, index) => (
                    <span
                      key={index}
                      aria-hidden="true"
                      className="pointer-events-none absolute bg-gray-6"
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
                <img
                  alt={quote.logoAlt}
                  loading="lazy"
                  width={66}
                  height={66}
                  className="size-[30px] object-contain lg:col-start-1 lg:row-start-1 lg:size-[66px]"
                  style={{ color: "transparent" }}
                  src={quote.logoSrc}
                />
                <blockquote className="relative text-xl leading-6 tracking-normal text-black lg:-top-1.5 lg:col-start-2 lg:row-start-1 lg:text-[28px] lg:leading-8">
                  {quote.text}
                </blockquote>
                <figcaption className="flex items-center gap-4 lg:col-start-2 lg:row-start-2 lg:gap-5">
                  <img
                    alt=""
                    loading="lazy"
                    width={64}
                    height={64}
                    className="size-12 shrink-0 border border-gray-3 object-cover lg:size-16"
                    style={{ color: "transparent" }}
                    src={quote.headshotSrc}
                  />
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
              aria-label="Show previous quote"
              onClick={() => scrollByCard(-1)}
              className={ARROW_BUTTON_CLASS}
            >
              <ArrowRight16 />
            </button>
            <button
              type="button"
              disabled={atEnd}
              aria-label="Show next quote"
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
