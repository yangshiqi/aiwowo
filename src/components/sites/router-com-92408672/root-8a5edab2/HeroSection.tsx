// Hero section of router.com — announcement ticker, in-flow nav, hero copy,
// layered background (texture + vector field + giant blurred "Router" text)
// and the 01/02/03 numbered steps strip.
// Source of truth: docs/research/router-com-92408672/root-8a5edab2/sections/02-cut-inference-costs-in-secon.html
// (steps strip markup from sections/03-unnamed.html — top row of the implement card).
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";

import { MenuIcon24, RouterWordmark } from "../shared/icons";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2/images";

const TICKER_PAIR_COUNT = 12;

function TickerRow() {
  return (
    <span
      aria-hidden="true"
      className="flex min-w-full shrink-0 items-center motion-safe:animate-[announcement-ticker_120s_linear_infinite]"
    >
      {Array.from({ length: TICKER_PAIR_COUNT }).map((_, i) => (
        <Fragment key={i}>
          <span className="flex shrink-0 items-center border-gray-dark border-r-[0.5px] px-3 text-white">
            <span className="whitespace-nowrap">$26 in model credits</span>
          </span>
          <span className="flex shrink-0 items-center border-gray-dark border-r-[0.5px] px-3 text-gray-dark">
            <span className="whitespace-nowrap">Free routing through 2026</span>
          </span>
        </Fragment>
      ))}
    </span>
  );
}

function Tick({ style }: { style: CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bg-gray-6"
      style={style}
    />
  );
}

/** Corner tick marks on all four corners of the bordered steps strip. */
function CornerTicks8() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
      <Tick style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
      <Tick style={{ width: "1px", height: "10.87px", top: 0, left: 0 }} />
      <Tick style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
      <Tick style={{ width: "1px", height: "10.87px", top: 0, right: 0 }} />
      <Tick style={{ width: "10.87px", height: "1px", bottom: 0, left: 0 }} />
      <Tick style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
      <Tick style={{ width: "10.87px", height: "1px", bottom: 0, right: 0 }} />
      <Tick style={{ width: "1px", height: "10.87px", bottom: 0, right: 0 }} />
    </span>
  );
}

/** Tick marks straddling a step cell's divider (top border on mobile, left border on lg). */
function DividerTicks() {
  return (
    <>
      <span className="contents lg:hidden">
        <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
          <Tick style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
          <Tick style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
          <Tick style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
          <Tick style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
        </span>
      </span>
      <span className="hidden lg:contents">
        <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
          <Tick style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", top: 0, left: 0 }} />
          <Tick style={{ width: "1px", height: "10.87px", top: 0, left: 0 }} />
          <Tick style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", bottom: 0, left: 0 }} />
          <Tick style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
        </span>
      </span>
    </>
  );
}

export function HeroSection() {
  return (
    <>
      <section className="relative flex min-h-[calc(541px+var(--announcement-height))] flex-col overflow-hidden bg-white text-ink [container-type:inline-size] lg:h-[910px] lg:min-h-0">
        {/* Layered background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[var(--announcement-height)] bottom-0 overflow-hidden lg:top-0"
        >
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
            src={`${ASSETS}/hero/texture-mobile.webp`}
          />
          <img
            alt=""
            className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
            src={`${ASSETS}/hero/texture.webp`}
          />
          <div className="absolute top-[6.834%] left-[8.2146%] h-[63.277%] w-[85.95%] opacity-20 mix-blend-plus-lighter blur-[47.467px] [background:radial-gradient(ellipse_50%_50%_at_50%_50%,#dad8d0_0%,rgba(218,216,208,0)_100%)]" />
          <img
            src={`${ASSETS}/hero/vector-field.svg`}
            alt=""
            className="absolute top-[-64.7755%] left-[-5.4623%] h-[185.836%] w-[113.256%] max-w-none mix-blend-overlay [mask-composite:intersect] [mask-image:linear-gradient(to_right,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.14)_30%,rgba(0,0,0,0.33)_49%,rgba(0,0,0,0.64)_62%,black_73%,rgba(0,0,0,0.95)_88%),linear-gradient(to_bottom,black_46%,rgba(0,0,0,0.34)_56%,rgba(0,0,0,0.14)_62%,rgba(0,0,0,0.08)_69%,rgba(0,0,0,0.05)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-2.083%] h-[calc(24.75cqw+10px)] w-[105.813%] whitespace-nowrap font-normal text-[39.102cqw] leading-none tracking-[-2.346cqw] mix-blend-plus-lighter select-none"
          >
            <p className="absolute top-[-5.4194cqw] left-0 opacity-60 text-surface-gray blur-[0.9923cqw]">Router</p>
            <p className="absolute top-[-5.4194cqw] left-0 opacity-60 text-surface-gray blur-[1.6901cqw] mix-blend-luminosity">Router</p>
            <p className="absolute top-[-5.4194cqw] left-0 opacity-60 text-gray-1 blur-[0.8248cqw] mix-blend-plus-lighter [text-shadow:0_0_2.232cqw_white]">Router</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[8.417%] bg-linear-to-b from-white/0 to-white lg:h-[8.417%]" />
        </div>

        {/* Announcement ticker + in-flow nav */}
        <div className="relative z-50">
          <aside
            aria-label="Current offers"
            className="relative flex h-[var(--announcement-height)] items-center overflow-hidden bg-black text-[10px] leading-none tracking-[0.18px] uppercase backdrop-blur-[50px]"
          >
            <span className="sr-only">$26 in model credits. Free routing through 2026.</span>
            <div className="flex w-full pl-1 font-mono lg:pl-[52px]">
              <TickerRow />
              <TickerRow />
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-l from-black/0 from-[28.5%] to-black to-[71.5%]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-r from-black/0 from-[28.5%] to-black to-[71.5%]"
            />
          </aside>
          <div id="site-header" className="flex h-[60px] w-full items-center justify-between px-4 lg:px-16">
            <div className="flex items-center gap-[15px] lg:gap-6">
              <Link aria-label="Router by Ramp home" className="text-ink-black h-[33.195px] w-[80.272px]" href="/">
                <RouterWordmark className="w-auto h-full shrink-0" />
              </Link>
            </div>
            <nav aria-label="Primary" className="flex items-center gap-5">
              <a
                href="https://app.router.com"
                className="text-sm text-ink-black underline decoration-solid underline-offset-2 hover:no-underline"
              >
                Login
              </a>
              <div className="contents lg:hidden">
                <button
                  type="button"
                  aria-expanded={false}
                  aria-label="Open menu"
                  className="-mr-1 flex size-8 items-center justify-center text-ink-black outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <MenuIcon24 className="shrink-0" />
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Hero copy + CTAs */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pt-[66px] text-center lg:px-16 lg:pt-[117.5px] lg:pb-0">
          <p className="font-medium font-mono text-[10px] text-ink leading-5 uppercase lg:text-[14px]">
            router.com saves you time and money
          </p>
          <h1 className="mt-[12.58px] max-w-[530px] text-[2.5rem] leading-[1] tracking-[-0.4px] lg:mt-[19.04px] lg:text-[4rem] lg:tracking-[-0.64px]">
            Cut inference costs in seconds.
          </h1>
          <p className="mt-[11.71px] max-w-[536px] text-base leading-6 lg:mt-[16.21px]">
            One endpoint, one bill, every model — cut your AI costs by 40% on average. The missing piece to maximize ROI.
          </p>
          <div className="mt-[18.01px] flex flex-wrap items-center justify-center gap-4 lg:mt-[26.01px]">
            <a
              href="https://app.router.com"
              className="inline-flex shrink-0 items-center justify-center rounded-none border border-transparent font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-ink-black text-white hover:bg-ink-black/85 gap-1.5 px-4 text-sm h-[51px] lg:h-[42px]"
            >
              Get the API Key
            </a>
            <a
              href="https://docs.router.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-none border font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-ink bg-transparent text-ink hover:bg-black/5 gap-1.5 px-4 text-sm h-[51px] lg:h-[42px]"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </section>

      {/* Numbered steps strip 01/02/03 — in the source page this row is the top of the
          bordered card that opens `<section id="implement">`; rendered here per the
          hero spec. Wrapper mirrors that card's container (px/pt) and keeps the
          border visible at lg (the source row relies on the parent card's border). */}
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 pt-16 lg:pt-32">
        <div className="relative border border-gray-3 bg-white">
          <span className="contents lg:hidden">
            <CornerTicks8 />
          </span>
          <span className="hidden lg:contents">
            <CornerTicks8 />
          </span>
          <div className="flex flex-col lg:h-[72px] lg:flex-row lg:items-stretch">
            <div className="relative flex h-14 items-center px-4 lg:h-auto lg:px-12 lg:py-6 lg:w-[438px]">
              <div className="flex items-center gap-3 text-ink">
                <span className="font-mono text-[14px] leading-[23.296px] tracking-[0.4px]">01</span>
                <span className="text-base leading-6">Every model behind one key</span>
              </div>
            </div>
            <div className="relative flex h-14 items-center px-4 lg:h-auto lg:px-12 lg:py-6 lg:w-[437px] border-gray-3 border-t lg:border-t-0 lg:border-l">
              <DividerTicks />
              <div className="flex items-center gap-3 text-ink">
                <span className="font-mono text-[14px] leading-[23.296px] tracking-[0.4px]">02</span>
                <span className="text-base leading-6">Cut inference costs by 40%</span>
              </div>
            </div>
            <div className="relative flex h-14 items-center px-4 lg:h-auto lg:px-12 lg:py-6 lg:w-[437px] border-gray-3 border-t lg:border-t-0 lg:border-l">
              <DividerTicks />
              <div className="flex items-center gap-3 text-ink">
                <span className="font-mono text-[14px] leading-[23.296px] tracking-[0.4px]">03</span>
                <span className="text-base leading-6">Scale to Trillions of tokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
