// OPC 政策库频道 — 按地区分区的政策条目：要点 + 本站解读 + 原文链接。
import { POLICIES, POLICY_TOTAL } from "@/data/opc-policies";
import { ArrowRight12 } from "../../shared/icons";

const LEVEL_ORDER = ["国家", "省市", "区县园区"] as const;

export function PoliciesChannel() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 pb-24 lg:px-16 lg:pb-32">
      {/* 频道题头 */}
      <div className="flex flex-col gap-5 border-b border-[rgba(0,64,168,0.28)] pt-14 pb-10 lg:pt-20 lg:pb-14">
        <p className="font-mono text-[12px] tracking-[0.12em] text-ink-black uppercase lg:text-[13px]">
          OPC Policy Library · 共 {POLICY_TOTAL} 条
        </p>
        <h1 className="max-w-[720px] text-[40px] leading-[1.08] tracking-[0.02em] text-ink lg:text-[64px]">
          全国OPC政策库
        </h1>
        <p className="max-w-[640px] text-[15px] leading-6 text-hushed lg:text-base lg:leading-7">
          汇集国家与各地关于一人公司（OPC）、AI超级个体的专项政策：原文引用、要点整理与本站解读。要点为整理概述，解读仅供参考，一切以官方文件为准。
        </p>
        <nav aria-label="层级导航" className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
          {LEVEL_ORDER.map((level) => {
            const count = POLICIES.filter((p) => p.level === level).length;
            return count > 0 ? (
              <a key={level} href={`#level-${level}`} className="flex items-center gap-2 text-sm text-ink-black hover:underline">
                <span className="inline-block size-1.5 rounded-full bg-[#e85820]" aria-hidden="true" />
                {level}
                <span className="font-mono text-[12px] text-gray-5">{count}</span>
              </a>
            ) : null;
          })}
        </nav>
      </div>

      {LEVEL_ORDER.map((level) => {
        const items = POLICIES.filter((p) => p.level === level);
        if (items.length === 0) return null;
        return (
          <section key={level} id={`level-${level}`} aria-label={level} className="scroll-mt-20">
            <div className="flex items-baseline gap-4 border-b border-[rgba(0,64,168,0.28)] pt-12 pb-4 lg:pt-16">
              <h2 className="text-[28px] leading-8 tracking-[0.03em] text-ink lg:text-[36px] lg:leading-10">
                {level}
              </h2>
              <span className="font-mono text-[13px] text-gray-5">{items.length} 条</span>
            </div>
            <ul>
              {items.map((policy) => (
                <li
                  key={policy.title}
                  className="grid gap-x-10 gap-y-4 border-b border-[rgba(0,64,168,0.16)] py-8 lg:grid-cols-[210px_minmax(0,1fr)] lg:py-10"
                >
                  {/* 元信息栏 */}
                  <div className="flex flex-col gap-2 lg:pl-2">
                    <span className="w-fit border border-[rgba(0,64,168,0.4)] px-2 py-0.5 font-mono text-[12px] leading-5 text-ink-black">
                      {policy.region}
                    </span>
                    <p className="font-mono text-[12px] leading-5 text-gray-5">{policy.date}</p>
                    <p className="text-[13px] leading-5 text-hushed">{policy.issuer}</p>
                    {policy.docNo ? (
                      <p className="font-mono text-[12px] leading-5 text-gray-5">{policy.docNo}</p>
                    ) : null}
                  </div>
                  {/* 内容栏 */}
                  <div className="flex max-w-[820px] flex-col gap-4">
                    <h3 className="text-[19px] leading-7 font-medium text-ink lg:text-[22px] lg:leading-8">
                      {policy.title}
                    </h3>
                    <ul className="flex flex-col gap-1.5">
                      {policy.points.map((point) => (
                        <li key={point} className="flex items-baseline gap-2.5 text-[14px] leading-6 text-ink lg:text-[15px]">
                          <span aria-hidden="true" className="inline-block size-1.5 shrink-0 translate-y-[-2px] rounded-full bg-ink-black" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-1.5 border-l-2 border-[#e85820] pl-4">
                      <p className="font-mono text-[11px] tracking-[0.08em] text-gray-5 uppercase">
                        本站解读 · 仅供参考
                      </p>
                      <p className="text-[14px] leading-6 text-hushed">{policy.commentary}</p>
                    </div>
                    <a
                      href={policy.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 text-[13px] leading-5 text-ink-black hover:underline"
                    >
                      原文链接：{policy.sourceLabel}
                      <ArrowRight12 className="size-2.5 shrink-0" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <div className="mt-10 flex flex-col gap-2 border-l-2 border-[#e85820] pl-4 lg:mt-14">
        <p className="font-mono text-[12px] tracking-[0.08em] text-gray-5 uppercase">申报辅导</p>
        <p className="max-w-[720px] text-[13px] leading-6 text-hushed">
          不确定自己适用哪条政策？艾窝窝提供Token券/算力券/数据券申领与补贴申报的全流程辅导，联系{" "}
          <a href="mailto:AIWOWO@agent.qq.com" className="text-ink-black underline underline-offset-2 hover:no-underline">
            AIWOWO@agent.qq.com
          </a>{" "}
          或返回首页提交表单。
        </p>
      </div>
    </div>
  );
}
