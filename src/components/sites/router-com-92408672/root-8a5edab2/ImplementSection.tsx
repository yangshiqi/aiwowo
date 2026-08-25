"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AutoModeIcon, CopyIcon12 } from "../shared/icons";
import "./scenes.css";

const ASSET_PREFIX = "/sites/router-com-92408672/root-8a5edab2";

const INSTALL_COMMAND =
  "curl -fsSL https://agents.ramp.com/install.sh | sh && ~/.local/bin/ramp router configure";

const FEATURES = [
  { number: "01", label: "Every model behind one key" },
  { number: "02", label: "Cut inference costs by 40%" },
  { number: "03", label: "Scale to Trillions of tokens" },
];

interface Provider {
  file: string;
  alt: string;
  width: number;
  height: number;
  logoWidth: string;
  comingSoon?: boolean;
}

const PROVIDERS: Provider[] = [
  { file: "anthropic.svg", alt: "Anthropic", width: 120.06, height: 13.837, logoWidth: "120.06px" },
  { file: "openai.svg", alt: "OpenAI", width: 107.906, height: 29.0135, logoWidth: "107.906px" },
  { file: "grok.svg", alt: "Grok", width: 88, height: 32, logoWidth: "88px" },
  { file: "fireworks.svg", alt: "Fireworks", width: 120, height: 16, logoWidth: "120px" },
  { file: "aws.svg", alt: "AWS", width: 37.649, height: 22.512, logoWidth: "37.649px", comingSoon: true },
  { file: "google.svg", alt: "Google", width: 84.704, height: 27.883, logoWidth: "84.704px", comingSoon: true },
  { file: "together-ai.svg", alt: "together.ai", width: 119, height: 26, logoWidth: "119px", comingSoon: true },
  { file: "baseten.svg", alt: "Baseten", width: 119.984, height: 26.1806, logoWidth: "119.984px", comingSoon: true },
  { file: "exa.svg", alt: "Exa", width: 80.905, height: 25.27, logoWidth: "80.905px" },
  { file: "crusoe.svg", alt: "Crusoe", width: 111.271, height: 26.561, logoWidth: "111.271px", comingSoon: true },
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
      {PROVIDERS.map((provider) => (
        <li
          key={provider.file}
          className="flex shrink-0 flex-col items-center gap-[4.9px] lg:gap-[7px]"
        >
          <span className="flex h-[22.4px] items-center lg:h-8">
            <img
              alt={provider.alt}
              loading="lazy"
              width={provider.width}
              height={provider.height}
              className="h-auto w-[calc(var(--logo-width)*0.7)] shrink-0 lg:w-[var(--logo-width)]"
              style={{ color: "transparent", "--logo-width": provider.logoWidth } as CSSProperties}
              src={`${ASSET_PREFIX}/images/providers/${provider.file}`}
            />
          </span>
          {provider.comingSoon ? (
            <span className="text-[7px] text-gray-4 leading-[8.4px] uppercase lg:text-[10px] lg:leading-3">
              Coming soon
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
                    <span className="block lg:inline">Free routing through 2026</span>
                    <span className="hidden lg:inline"> | </span>
                    <span className="block lg:inline">$26 in model credits</span>
                  </p>
                  <p className="max-w-[496px] text-[22px] text-ink leading-6 lg:text-[28px] lg:leading-8">
                    Router was built to reduce inference costs by matching every
                    request to the lowest-cost model that meets your performance
                    needs.
                  </p>
                </div>
                <div className="flex flex-col gap-[12.43px] lg:gap-4">
                  <p className="text-[12px] text-gray-6 leading-4">Copy for agent</p>
                  <div className="relative flex w-full max-w-[505px] items-center gap-3 overflow-hidden rounded-[6px] bg-surface-gray p-4">
                    <button
                      type="button"
                      aria-label={`Copy install command: ${INSTALL_COMMAND}`}
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
                      alt="A Router CLI session with Switchyard enabled, comparing a $45.62 Router run against $297.85 for a generic frontier model"
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
                          Switchyard enabled
                        </span>
                      </div>
                      <div className="rmah-cr__comparison rmah-cr__comparison--router">
                        <span className="rmah-cr__label rmah-cr__type rmah-cr__type--router">
                          Router
                        </span>
                        <span className="rmah-cr__bar">
                          <span className="rmah-cr__bar-fill" />
                        </span>
                        <span className="rmah-cr__price rmah-cr__type rmah-cr__type--router-price">
                          $45.62
                        </span>
                      </div>
                      <div className="rmah-cr__comparison rmah-cr__comparison--frontier">
                        <span className="rmah-cr__label rmah-cr__type rmah-cr__type--frontier">
                          Frontier (Generic)
                        </span>
                        <span className="rmah-cr__bar">
                          <span className="rmah-cr__bar-fill" />
                        </span>
                        <span className="rmah-cr__price rmah-cr__type rmah-cr__type--frontier-price">
                          $297.85
                        </span>
                      </div>
                      <div className="rmah-cr__auto-mode">
                        <AutoModeIcon />
                        <span className="rmah-cr__type rmah-cr__type--auto">auto mode on</span>
                      </div>
                      <p className="rmah-cr__hint rmah-cr__type rmah-cr__type--hint">
                        {"(shift+tab to cycle) · "}
                        <span className="rmah-cr__arrow">←</span>
                        {" for agents"}
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
