// Hero section of router.com — announcement ticker, in-flow nav, hero copy,
// layered background (texture + vector field + giant blurred "Router" text)
// and the 01/02/03 numbered steps strip.
// Source of truth: docs/research/router-com-92408672/root-8a5edab2/sections/02-cut-inference-costs-in-secon.html
// (steps strip markup from sections/03-unnamed.html — top row of the implement card).
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";

import { AiwowoWordmark, GitHubIcon } from "../shared/icons";
import { MobileMenuButton } from "../shared/morph-widgets";

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
          <span className="flex shrink-0 items-center border-[rgba(0,64,168,0.28)] border-r-[0.5px] px-3 text-[#0040a8]">
            <span className="whitespace-nowrap">北京市OPC认证社区</span>
          </span>
          <span className="flex shrink-0 items-center border-[rgba(0,64,168,0.28)] border-r-[0.5px] px-3 text-[#66717a]">
            <span className="whitespace-nowrap">2026–2028 OPC政策红利期</span>
          </span>
        </Fragment>
      ))}
    </span>
  );
}
export function HeroSection() {
  return (
    <>
      <section className="relative flex min-h-[calc(541px+var(--announcement-height))] flex-col overflow-hidden bg-[#f0e8e0] text-ink [container-type:inline-size] lg:h-[910px] lg:min-h-0">
        {/* Blueprint background: paper ground + giant outlined wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[var(--announcement-height)] bottom-0 overflow-hidden bg-[#f0e8e0] lg:top-0"
        >
          <img
            src={`${ASSETS}/hero/vector-field.svg`}
            alt=""
            className="absolute top-[-40%] left-[-5%] h-[160%] w-[110%] max-w-none opacity-[0.16] [filter:invert(21%)_sepia(94%)_saturate(1958%)_hue-rotate(208deg)_brightness(92%)]"
          />
          {/* 办公空间轴测图:作为右侧背景整体融合,完整显示 + 左缘柔化过渡到文字区 */}
          <div className="absolute inset-y-0 right-[6%] hidden w-[64%] max-w-[1000px] lg:block">
            <img
              src={`${ASSETS}/hero/opc-hero-workspace.webp`}
              alt=""
              className="absolute inset-0 h-full w-full object-contain object-right-bottom select-none"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-[#f0e8e0] from-[2%] via-[#f0e8e0]/45 via-[26%] to-transparent to-[52%]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[18%] bg-linear-to-t from-[#f0e8e0] to-transparent"
            />
          </div>
        </div>

        {/* Announcement ticker + in-flow nav */}
        <div className="relative z-50">
          <aside
            aria-label="Current offers"
            className="relative flex h-[var(--announcement-height)] items-center overflow-hidden border-y border-[rgba(0,64,168,0.28)] bg-[#f0e8e0] text-[10px] leading-none tracking-[0.18px] uppercase"
          >
            <span className="sr-only">北京市OPC认证社区。2026–2028 OPC政策红利期。</span>
            <div className="flex w-full pl-1 font-mono lg:pl-[52px]">
              <TickerRow />
              <TickerRow />
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-l from-[#f0e8e0]/0 from-[28.5%] to-[#f0e8e0] to-[71.5%]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-r from-[#f0e8e0]/0 from-[28.5%] to-[#f0e8e0] to-[71.5%]"
            />
          </aside>
          <div id="site-header" className="flex h-[60px] w-full items-center justify-between px-4 lg:px-16">
            <div className="flex items-center gap-[15px] lg:gap-6">
              <Link aria-label="艾窝窝OPC社区首页" className="block h-[33.195px] text-ink" href="/">
                <AiwowoWordmark className="h-full" textClassName="text-[17px]" />
              </Link>
            </div>
            <nav aria-label="Primary" className="flex items-center gap-5">
              <a
                href="#contact"
                className="text-sm text-ink-black underline decoration-solid underline-offset-2 hover:no-underline"
              >
                联系我们
              </a>
              <a
                href="https://github.com/yangshiqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-8 items-center justify-center text-ink-black transition-opacity hover:opacity-70"
              >
                <GitHubIcon className="size-5" />
              </a>
              <div className="contents lg:hidden">
                <MobileMenuButton className="-mr-1 flex size-8 items-center justify-center text-ink-black outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" />
              </div>
            </nav>
          </div>
        </div>

        {/* Hero copy + CTAs */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pt-[52px] text-center lg:items-start lg:px-16 lg:pt-[104px] lg:text-left">
          <p className="font-medium font-mono text-[12px] tracking-[0.12em] text-[#0040a8] leading-5 uppercase lg:text-[15px]">
            北京市OPC认证社区 · CERTIFIED OPC COMMUNITY
          </p>
          <h1 className="mt-[14px] max-w-[640px] text-[2.75rem] leading-[1.12] tracking-[0.04em] lg:mt-[21px] lg:text-[4.75rem] lg:tracking-[0.05em]">
            给每个
            <span className="relative mx-[0.04em] inline-block px-[0.05em] align-baseline font-display text-[1.18em] font-bold tracking-[0]">
              <span aria-hidden="true" className="absolute inset-x-[0.02em] bottom-[0.04em] h-[0.16em] bg-solar" />
              <span className="relative">AI</span>
            </span>
            的梦想
            <br />
            一个
            <span className="relative mx-[0.04em] inline-block px-[0.05em]">
              <span aria-hidden="true" className="absolute inset-x-[0.02em] bottom-[0.04em] h-[0.16em] bg-solar" />
              <span className="relative">窝</span>
            </span>
          </h1>
          <p className="mt-[14px] max-w-[600px] text-[17px] leading-7 tracking-[0.01em] lg:mt-[18px] lg:text-lg">
            孵化中外OPC（一人公司），以AI赋能企业服务生态，
            <br className="hidden lg:inline" />
            让超级个体从这里起飞。
          </p>
          <div className="mt-[18.01px] flex flex-wrap items-center justify-center gap-4 lg:mt-[26.01px] lg:justify-start">
            <a
              href="#implement"
              className="inline-flex shrink-0 items-center justify-center rounded-none border border-transparent font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-ink-black text-white hover:bg-ink-black/85 gap-1.5 px-4 text-sm h-[51px] lg:h-[42px]"
            >
              探索服务
            </a>
            <a
              href="#community"
              className="inline-flex shrink-0 items-center justify-center rounded-none border font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-ink-black bg-transparent text-ink-black hover:bg-ink-black/5 gap-1.5 px-4 text-sm h-[51px] lg:h-[42px]"
            >
              加入社群
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
