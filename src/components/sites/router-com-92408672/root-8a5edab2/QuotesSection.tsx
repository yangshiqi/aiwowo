import { CornerTicks } from "./savings/CornerTicks";

/**
 * 发展历程 — 四段并排的静态时间轴(蓝图线 + 橙色节点),取代原来一次只露一条的轮播。
 * 桌面端:一条横线贯穿四格顶部,节点落在线上;移动端:竖线在左侧,四格纵向堆叠。
 */

interface Milestone {
  year: string;
  title: string;
  text: string;
  tag: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2010",
    title: "易得商务中心",
    text: "从传统商务中心起步，扎根朝阳，服务中小企业。",
    tag: "北京 · 朝阳",
  },
  {
    year: "2015",
    title: "联合办公 + 孵化器",
    text: "升级为联合办公+孵化器平台，获朝阳区荣誉。",
    tag: "朝阳区荣誉",
  },
  {
    year: "2020",
    title: "双认证孵化器",
    text: "成为北京唯一获“国际化”+“数字经济”双认证的孵化器平台。",
    tag: "市级双认证",
  },
  {
    year: "2026",
    title: "艾窝窝 · AI赋能",
    text: "创立艾窝窝品牌，获OPC认证社区，孵化中外一人公司。",
    tag: "北京市OPC认证社区",
  },
];

/** 桌面横线距格子顶部的距离,节点与年份都以它对齐。 */
const AXIS_TOP = 44;

export function QuotesSection() {
  return (
    <section aria-labelledby="milestones-heading">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 lg:pt-0 lg:pb-32">
        <div className="flex flex-col gap-[19.5px] pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pb-[58px]">
          <div>
            <h2
              id="milestones-heading"
              className="max-w-[450px] text-[34px] leading-9 tracking-[0.03em] text-ink lg:text-[48px] lg:leading-[48px] lg:tracking-[0.04em]"
            >
              从商务中心，
              <br />
              到AI社区。
            </h2>
            <p className="mt-[13.21px] max-w-[450px] text-[15px] leading-5 text-ink lg:mt-[10.42px] lg:text-base lg:leading-6">
              十六年四个阶段，每一步都扎根朝阳、服务中小企业。
            </p>
          </div>
          <p className="font-mono text-[12px] tracking-[0.1em] text-gray-5 uppercase lg:text-[13px]">2010 — 2026 · 16年沉淀</p>
        </div>

        <ol className="relative grid border border-gray-3 bg-white lg:grid-cols-4">
          <CornerTicks junctions={["tl", "tr", "bl", "br"]} />
          {MILESTONES.map((milestone, index) => (
            <li
              key={milestone.year}
              className={`relative flex flex-col gap-3 py-8 pr-6 pl-14 lg:gap-4 lg:px-10 lg:pt-[76px] lg:pb-10${
                index > 0 ? " border-t border-gray-3 lg:border-t-0 lg:border-l" : ""
              }`}
            >
              {/* 桌面:横向时间轴 */}
              <span aria-hidden="true" className="absolute left-0 hidden h-px w-full bg-blueprint lg:block" style={{ top: AXIS_TOP }} />
              <span
                aria-hidden="true"
                className="absolute hidden size-3 rounded-full border-2 border-white bg-solar lg:block"
                style={{ top: AXIS_TOP - 6, left: 40 - 6 }}
              />
              {/* 移动端:纵向时间轴 */}
              <span aria-hidden="true" className="absolute top-0 left-6 h-full w-px bg-blueprint lg:hidden" />
              <span aria-hidden="true" className="absolute top-[38px] left-[calc(1.5rem-5px)] size-[11px] rounded-full border-2 border-white bg-solar lg:hidden" />

              <span className="font-display text-[34px] leading-none font-bold tracking-[0.02em] text-ink-black lg:text-[44px]">
                {milestone.year}
              </span>
              <h3 className="text-[20px] leading-6 text-ink lg:text-[22px] lg:leading-7">{milestone.title}</h3>
              <p className="text-[14px] leading-5 text-gray-6 lg:text-[15px] lg:leading-6">{milestone.text}</p>
              <p className="mt-auto pt-1 font-mono text-[11px] leading-4 tracking-[0.5px] text-gray-5 uppercase">{milestone.tag}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
