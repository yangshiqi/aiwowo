import { AiwowoGlyph, ArrowRight12 } from "@/components/sites/router-com-92408672/shared/icons";
import { FlexPricingRoutes } from "./proof/FlexPricingRoutes";
import { SwitchyardCard } from "./proof/SwitchyardCard";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2";

/** "不只是一个工位，是一个生态。" proof section — stat card, flex-pricing card, switchyard video card, CTO quote card. */
export function ProofSection() {
  return (
    <section id="community" aria-labelledby="proof-heading">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 sm:pt-0 sm:pb-24 lg:pb-32">
        <div className="flex flex-col gap-[41px] sm:gap-16">
          <div className="flex max-w-[450px] flex-col gap-4 sm:gap-5">
            <h2
              id="proof-heading"
              className="leading-trim text-[34px] leading-9 tracking-[0.03em] text-ink sm:text-[40px] sm:leading-[40px] sm:tracking-[0.03em] lg:text-[48px] lg:leading-[48px] lg:tracking-[0.04em]"
            >
              不只是一个工位，是一个生态。
            </h2>
            <p className="leading-trim text-[15px] leading-5 text-ink sm:text-[16px] sm:leading-[24px]">
              在这里，你遇到的不只是邻居——是合伙人、导师、客户和朋友。
            </p>
          </div>
          <div>
            <div className="grid lg:grid-cols-[421fr_891fr] [&>*]:min-w-0">
              <div className="relative flex flex-col bg-white px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px]">
                <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                  <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "10.87px", top: 0, left: 0 }} />
                </span>
                <span className="contents lg:hidden">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "10.87px", top: 0, right: 0 }} />
                  </span>
                </span>
                <div className="flex flex-1 flex-col justify-between gap-16">
                  <p className="font-mono text-[18px] leading-[13px] tracking-[-0.2px] uppercase sm:text-[14px] sm:leading-4 sm:tracking-[0.5px] text-gray-5">运营面积</p>
                  <div className="flex flex-col gap-6 sm:gap-4">
                    <p className="leading-trim whitespace-nowrap font-display font-bold text-[56px] leading-[1.00903em] tracking-[-0.0101em] text-ink min-[375px]:text-[68px] sm:text-[78px] sm:leading-[84px] sm:tracking-[-1.56px]">20000㎡</p>
                    <p className="font-mono text-[18px] leading-[13px] tracking-[-0.2px] uppercase sm:text-xs sm:leading-4 sm:font-medium sm:tracking-[0.5px] text-ink">双认证孵化器 · 2000+服务企业</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-end bg-[#f7f3ed] text-ink px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px] border-t-0 lg:border-t lg:-ml-px">
                <span className="hidden lg:contents">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "10.87px", top: 0, right: 0 }} />
                  </span>
                </span>
                <span className="contents lg:hidden">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-0 z-0 block overflow-hidden">
                  <FlexPricingRoutes />
                </span>
                <div className="relative z-10 flex max-w-[500px] flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-4 sm:gap-8">
                    <h3 className="leading-trim text-[22px] leading-6 sm:text-[28px] sm:leading-8">经信局34号文：OPC创新发展行动方案</h3>
                    <p className="leading-trim max-w-[483px] text-[15px] leading-5 sm:text-[16px] sm:leading-6">八条措施支持“一人成军”：社区年度补贴最高200万元，算力补贴最高1000万元，入驻企业免费享3个月Token券，数据沙盒费用减免50%——政策红利直通经信局。</p>
                  </div>
                  <a
                    href="#contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-[11px] text-[16px] leading-4 outline-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    了解政策详情
                    <ArrowRight12 className="shrink-0" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative grid lg:-mt-px lg:grid-cols-[891fr_421fr] [&>*]:min-w-0">
              <span className="hidden lg:contents">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
                  <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
                  <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                </span>
              </span>
              <SwitchyardCard />
              <div className="relative flex flex-col bg-white px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px] border-t-0 lg:border-t order-1 lg:order-none">
                <span className="hidden lg:contents">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "21.74px", height: "1px", marginLeft: "-10.87px", bottom: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", bottom: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "10.87px", bottom: 0, right: 0 }} />
                  </span>
                </span>
                <span className="contents lg:hidden">
                  <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
                    <span aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
                  </span>
                </span>
                <div className="flex flex-1 flex-col justify-between gap-8">
                  <div className="leading-trim text-[28px] leading-[32px] text-ink">
                    <p className="indent-[-12.6px]">&ldquo;一个人可以走得快，一群人才能走得远。&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-4 sm:items-end sm:gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center border border-gray-3 bg-surface-gray sm:size-16">
                      <AiwowoGlyph className="size-6 sm:size-8" />
                    </span>
                    <div className="flex flex-col gap-2">
                      <p className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-ink">艾窝窝OPC社区</p>
                      <p className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-gray-5">北京 · 朝阳</p>
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
