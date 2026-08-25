"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AutoModeIcon, CopyIcon12 } from "../shared/icons";
import "./scenes.css";

const ASSET_PREFIX = "/sites/router-com-92408672/root-8a5edab2";

const INSTALL_COMMAND = "AIWOWO@agent.qq.com";

const FEATURES = [
  { number: "2000+", label: "服务企业" },
  { number: "20000㎡", label: "运营面积" },
  { number: "16年", label: "企业服务沉淀" },
];

interface Partner {
  name: string;
  /** logo file under images/partners/; text mark when absent */
  logo?: string;
  /** rendered logo height in px at lg (mobile = 0.72x) */
  height?: number;
  /** darken low-contrast marks so the grayscale row reads evenly */
  boost?: boolean;
  /** render the name next to the mark (for glyph-only logos) */
  showName?: boolean;
  sub?: string;
}

const PARTNERS: Partner[] = [
  { name: "腾讯云", logo: "tencent-cloud.svg", height: 26, sub: "WorkBuddy二级代理" },
  { name: "中国移动·移动云", logo: "china-mobile.svg", height: 30 },
  { name: "清华继续教育学院", logo: "tsinghua-sce.png", height: 30 },
  { name: "中国社科院城竞中心", logo: "cass.png", height: 30, showName: true },
  { name: "金网络", logo: "goldnet.svg", height: 30, boost: true },
  { name: "歌华有线" },
  { name: "谋信传媒" },
];

function Tick({ style }: { style: CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bg-gray-6"
      style={style}
    />
  );
}

/** Eight corner tick marks (all four corners of a bordered box). */
function CornerTicks() {
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

/** Tick marks straddling a horizontal divider (top edge of a stacked cell). */
function TopJunctionTicks() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
      <Tick style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
      <Tick style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
      <Tick style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
      <Tick style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
    </span>
  );
}

/** Tick marks straddling a vertical divider (left edge of a side-by-side cell). */
function LeftJunctionTicks() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
      <Tick style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", top: 0, left: 0 }} />
      <Tick style={{ width: "1px", height: "10.87px", top: 0, left: 0 }} />
      <Tick style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", bottom: 0, left: 0 }} />
      <Tick style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
    </span>
  );
}

function ProviderList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-[29px] lg:gap-14"
    >
      {PARTNERS.map((partner) => (
        <li
          key={partner.name}
          className="flex shrink-0 flex-col items-center gap-[4.9px] lg:gap-[7px]"
        >
          <span className="flex h-[23px] items-center lg:h-8">
            {partner.logo ? (
              <span className="flex items-center gap-2 lg:gap-2.5">
                <img
                  alt={partner.name}
                  loading="lazy"
                  className={`h-[calc(var(--logo-h)*0.72)] w-auto max-w-none shrink-0 grayscale lg:h-[var(--logo-h)] ${partner.boost ? "opacity-75 brightness-[0.55] contrast-[1.1]" : "opacity-60 contrast-[0.92]"}`}
                  style={{ "--logo-h": `${partner.height ?? 28}px` } as CSSProperties}
                  src={`${ASSET_PREFIX}/images/partners/${partner.logo}`}
                />
                {partner.showName ? (
                  <span className="whitespace-nowrap text-[13px] font-medium tracking-[0.5px] text-gray-dark lg:text-[17px]">
                    {partner.name}
                  </span>
                ) : null}
              </span>
            ) : (
              <span className="whitespace-nowrap text-[15px] font-medium tracking-[0.5px] text-gray-dark lg:text-[21px]">
                {partner.name}
              </span>
            )}
          </span>
          {partner.sub ? (
            <span className="text-[7px] text-gray-4 leading-[8.4px] lg:text-[10px] lg:leading-3">
              {partner.sub}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function ImplementSection() {
  const [copied, setCopied] = useState(false);
  const copyResetRef = useRef<number | null>(null);

  const [terminalAnimated, setTerminalAnimated] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const handleCopy = useCallback(() => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard
      .writeText(INSTALL_COMMAND)
      .then(() => {
        setCopied(true);
        if (copyResetRef.current !== null) {
          window.clearTimeout(copyResetRef.current);
        }
        copyResetRef.current = window.setTimeout(() => {
          setCopied(false);
          copyResetRef.current = null;
        }, 2000);
      })
      .catch(() => {
        /* clipboard unavailable — ignore */
      });
  }, []);

  useEffect(() => {
    return () => {
      if (copyResetRef.current !== null) {
        window.clearTimeout(copyResetRef.current);
      }
    };
  }, []);

  // The served DOM ships the terminal as `rmah-cr--pending` (text covered, bars
  // collapsed); the live site flips it to `rmah-cr--animated` to run the
  // scenes.css typing animation. Trigger once when the panel scrolls into view.
  useEffect(() => {
    const node = terminalRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setTerminalAnimated(true), 0);
      return () => window.clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTerminalAnimated(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="implement">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 lg:py-32">
        <div className="relative flex flex-col gap-8 bg-white lg:gap-0 lg:border lg:border-gray-3">
          <span className="hidden lg:contents">
            <CornerTicks />
          </span>
          <div className="relative border border-gray-3 lg:border-0">
            <span className="contents lg:hidden">
              <CornerTicks />
            </span>
            <div className="flex flex-col lg:h-[72px] lg:flex-row lg:items-stretch">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.number}
                  className={
                    index === 0
                      ? "relative flex h-14 items-center px-4 lg:h-auto lg:px-12 lg:py-6 lg:w-[438px]"
                      : "relative flex h-14 items-center px-4 lg:h-auto lg:px-12 lg:py-6 lg:w-[437px] border-gray-3 border-t lg:border-t-0 lg:border-l"
                  }
                >
                  {index > 0 ? (
                    <>
                      <span className="contents lg:hidden">
                        <TopJunctionTicks />
                      </span>
                      <span className="hidden lg:contents">
                        <LeftJunctionTicks />
                      </span>
                    </>
                  ) : null}
                  <div className="flex items-center gap-3 text-ink">
                    <span className="font-mono text-[14px] leading-[23.296px] tracking-[0.4px]">
                      {feature.number}
                    </span>
                    <span className="text-base leading-6">{feature.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative border border-gray-3 lg:border-0">
            <span className="contents lg:hidden">
              <CornerTicks />
            </span>
            <div className="flex flex-col lg:flex-row lg:items-center lg:border-gray-3 lg:border-t">
              <div className="flex flex-col justify-center gap-[24.86px] px-4 pt-[27.77px] pb-8 lg:h-[413px] lg:w-[668px] lg:shrink-0 lg:gap-10 lg:p-20">
                <div className="flex flex-col gap-[10.93px] lg:gap-6">
                  <p className="font-medium font-mono text-[14px] text-gray-6 uppercase leading-[19px] lg:leading-3">
                    <span className="block lg:inline">2026–2028 政策红利期</span>
                    <span className="hidden lg:inline"> | </span>
                    <span className="block lg:inline">政策包最高10万/企业</span>
                  </p>
                  <p className="max-w-[496px] text-[22px] text-ink leading-6 lg:text-[28px] lg:leading-8">
                    蹲窝儿·AI任务撮合平台：企业发榜、多个AI Agent竞标、AI评审选优、
                    按结果付费——把零散的AI需求，变成带赏金的悬赏榜。
                  </p>
                </div>
                <div className="flex flex-col gap-[12.43px] lg:gap-4">
                  <p className="text-[12px] text-gray-6 leading-4">联系我们 · 复制邮箱</p>
                  <div className="relative flex w-full max-w-[505px] items-center gap-3 overflow-hidden rounded-[6px] bg-surface-gray p-4">
                    <button
                      type="button"
                      aria-label={`复制联系邮箱：${INSTALL_COMMAND}`}
                      onClick={handleCopy}
                      className="flex shrink-0 cursor-pointer items-center justify-center rounded-[5px] p-2 outline-none transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink bg-gray-2 text-[#3d3b37] hover:bg-gray-3 active:bg-gray-4"
                    >
                      {copied ? (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M2 6.5L4.8 9.3L10 3.5" />
                        </svg>
                      ) : (
                        <CopyIcon12 />
                      )}
                    </button>
                    <code className="min-w-0 whitespace-nowrap font-mono text-[12px] text-[#34373c] leading-[23.296px] tracking-[0.4px] lg:text-[14px]">
                      {INSTALL_COMMAND}
                    </code>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-0 w-[52px] bg-linear-to-r from-surface-gray/0 from-[15.385%] to-surface-gray to-[78.846%]"
                    />
                  </div>
                  <span aria-live="polite" className="sr-only">
                    {copied ? "Copied to clipboard" : ""}
                  </span>
                </div>
              </div>
              <div className="relative min-w-0 flex-1 self-stretch border-gray-3 border-t bg-gray-2 lg:h-[413px] lg:border-t-0 lg:border-l">
                <span className="contents lg:hidden">
                  <TopJunctionTicks />
                </span>
                <span className="hidden lg:contents">
                  <LeftJunctionTicks />
                </span>
                <div
                  ref={terminalRef}
                  className={`rmah-cr ${terminalAnimated ? "rmah-cr--animated" : "rmah-cr--pending"}`}
                >
                  <div className="rmah-cr__board">
                    <img
                      alt="蹲窝儿AI评审面板：按结果付费 ¥500，对比传统外包 ¥3000"
                      loading="lazy"
                      width={1932}
                      height={1245}
                      className="rmah-cr__background"
                      style={{ color: "transparent" }}
                      src={`${ASSET_PREFIX}/images/integration/code-response.webp`}
                    />
                    <div className="rmah-cr__terminal" aria-hidden="true">
                      <div className="rmah-cr__status">
                        <span className="rmah-cr__type rmah-cr__type--cli">CLI</span>
                        <span className="rmah-cr__type rmah-cr__type--enabled">
                          AI评审已启用
                        </span>
                      </div>
                      <div className="rmah-cr__comparison rmah-cr__comparison--router">
                        <span className="rmah-cr__label rmah-cr__type rmah-cr__type--router">
                          蹲窝儿
                        </span>
                        <span className="rmah-cr__bar">
                          <span className="rmah-cr__bar-fill" />
                        </span>
                        <span className="rmah-cr__price rmah-cr__type rmah-cr__type--router-price">
                          ¥500
                        </span>
                      </div>
                      <div className="rmah-cr__comparison rmah-cr__comparison--frontier">
                        <span className="rmah-cr__label rmah-cr__type rmah-cr__type--frontier">
                          传统外包
                        </span>
                        <span className="rmah-cr__bar">
                          <span className="rmah-cr__bar-fill" />
                        </span>
                        <span className="rmah-cr__price rmah-cr__type rmah-cr__type--frontier-price">
                          ¥3,000
                        </span>
                      </div>
                      <div className="rmah-cr__auto-mode">
                        <AutoModeIcon />
                        <span className="rmah-cr__type rmah-cr__type--auto">按结果付费 on</span>
                      </div>
                      <p className="rmah-cr__hint rmah-cr__type rmah-cr__type--hint">
                        {"(3个Agent并行竞标) · "}
                        <span className="rmah-cr__arrow">←</span>
                        {" 选优付款"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative border-gray-3 border-t py-4 lg:h-[115px] lg:py-0">
              <TopJunctionTicks />
              <div className="flex h-full items-center overflow-hidden pl-[35px] lg:pl-[50px]">
                <div className="flex w-max shrink-0 gap-[29px] lg:gap-14 [--marquee-gap:14.5px] lg:[--marquee-gap:1.75rem] motion-safe:animate-[model-provider-marquee_45s_linear_infinite]">
                  <ProviderList />
                  <ProviderList hidden />
                </div>
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 z-10 w-[73px] from-white/0 from-[4.276%] to-white to-[65.761%] lg:w-[140px] left-0 bg-linear-to-l"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 z-10 w-[73px] from-white/0 from-[4.276%] to-white to-[65.761%] lg:w-[140px] right-0 bg-linear-to-r"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
