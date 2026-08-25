import { ArrowRight12 } from "@/components/sites/router-com-92408672/shared/icons";
import { FlexPricingRoutes } from "./proof/FlexPricingRoutes";
import { SwitchyardCard } from "./proof/SwitchyardCard";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2";

/** "Put to work at Ramp." proof section — stat card, flex-pricing card, switchyard video card, CTO quote card. */
export function ProofSection() {
  return (
    <section id="proof" aria-labelledby="proof-heading">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 sm:pt-0 sm:pb-24 lg:pb-32">
        <div className="flex flex-col gap-[41px] sm:gap-16">
          <div className="flex max-w-[450px] flex-col gap-4 sm:gap-5">
            <h2
              id="proof-heading"
              className="leading-trim text-[34px] leading-9 tracking-[-0.4px] text-ink sm:text-[40px] sm:leading-[40px] sm:tracking-[-0.2px] lg:text-[48px] lg:leading-[48px] lg:tracking-[-0.64px]"
            >
              Put to work at Ramp.
            </h2>
            <p className="leading-trim text-[15px] leading-5 text-ink sm:text-[16px] sm:leading-[24px]">
              Ramp gives Router a real-world proving ground. The lessons we learn in production feed directly back into the product.
            </p>
          </div>
          <div>
            <div className="grid lg:grid-cols-[421fr_891fr] [&>*]:min-w-0">
              <div className="relative flex flex-col bg-white px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px]">
                <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                  <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: 0, left: 0 }} />
                </span>
                <span className="contents lg:hidden">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: 0, right: 0 }} />
                  </span>
                </span>
                <div className="flex flex-1 flex-col justify-between gap-16">
                  <p className="font-mono text-[18px] leading-[13px] tracking-[-0.2px] uppercase sm:text-[14px] sm:leading-4 sm:tracking-[0.5px] text-gray-5">Production value</p>
                  <div className="flex flex-col gap-6 sm:gap-4">
                    <p className="leading-trim text-[72px] leading-[1.00903em] tracking-[-0.0101em] text-ink min-[375px]:text-[94px] sm:text-[96px] sm:leading-[96px] sm:tracking-[-1.92px]">2.75T+</p>
                    <p className="font-mono text-[18px] leading-[13px] tracking-[-0.2px] uppercase sm:text-xs sm:leading-4 sm:font-medium sm:tracking-[0.5px] text-ink">Tokens routed monthly</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-end text-white px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px] border-t-0 lg:border-t lg:-ml-px">
                <span className="hidden lg:contents">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", top: 0, right: 0 }} />
                  </span>
                </span>
                <span className="contents lg:hidden">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-0 z-0 block overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center"
                    style={{ color: "transparent" }}
                    src={`${ASSETS}/images/proof/flex-pricing-bg.webp`}
                  />
                  <FlexPricingRoutes />
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] block h-[78%] backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.18)_28%,black_78%)]"
                  style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.48) 100%)" }}
                />
                <div className="relative z-10 flex max-w-[500px] flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-4 sm:gap-8">
                    <h3 className="leading-trim text-[22px] leading-6 sm:text-[28px] sm:leading-8">How Ramp cut AI costs by 30% on internal workloads</h3>
                    <p className="leading-trim max-w-[483px] text-[15px] leading-5 sm:text-[16px] sm:leading-6">Router responds to live latency and failure rates, cutting Ramp&rsquo;s AI costs by 30% without sacrificing performance.</p>
                  </div>
                  <a
                    href="https://builders.ramp.com/post/thompson-sampling-model-routing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-[11px] text-[16px] leading-4 outline-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Read the blog post
                    <ArrowRight12 className="shrink-0" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative grid lg:-mt-px lg:grid-cols-[891fr_421fr] [&>*]:min-w-0">
              <span className="hidden lg:contents">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
                  <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                </span>
              </span>
              <SwitchyardCard />
              <div className="relative flex flex-col bg-white px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px] border-t-0 lg:border-t order-1 lg:order-none">
                <span className="hidden lg:contents">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", bottom: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, right: 0 }} />
                  </span>
                </span>
                <span className="contents lg:hidden">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                  </span>
                </span>
                <div className="flex flex-1 flex-col justify-between gap-8">
                  <div className="leading-trim text-[28px] leading-[32px] text-ink">
                    <p className="indent-[-12.6px]">&ldquo;At Ramp, Router cut our overall LLM cost by 30% while making our features smarter and faster.&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-4 sm:items-end sm:gap-5">
                    <img
                      alt=""
                      loading="lazy"
                      width={64}
                      height={64}
                      className="size-12 shrink-0 border border-gray-3 object-cover sm:size-16"
                      style={{ color: "transparent" }}
                      src={`${ASSETS}/images/proof/rahul-headshot.png`}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-ink">Rahul Sengottuvelu</p>
                      <p className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-gray-5">CTO, Ramp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
