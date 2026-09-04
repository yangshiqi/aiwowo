// 社群六大价值 + 认证矩阵 — bordered card grid in the site's design language.
// Static server component; content verbatim from the AI WOWO source site.
import type { CSSProperties } from "react";

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

import {
  BadgePercent,
  Dumbbell,
  Globe,
  GraduationCap,
  Landmark,
  Plane,
  Presentation,
  Sparkles,
  TrendingUp,
  Users,
  UsersRound,
  Wrench,
} from "lucide";
import { MorphHoverIcon } from "../shared/morph-widgets";

const VALUES = [
  {
    icon: Users,
    iconAlt: UsersRound,
    title: "超级个体联盟",
    body: "汇聚中外OPC创业者，打破信息孤岛。一个人做公司不再孤单，社群里有同行者、有同行经验、有同行资源。",
  },
  {
    icon: Dumbbell,
    iconAlt: GraduationCap,
    title: "实战训练营",
    body: "AI技术专家+商业/创业/营销导师陪跑，形成“AI资源普惠—产品教学—专家陪跑—经验复制”全流程陪伴。",
  },
  {
    icon: Landmark,
    iconAlt: BadgePercent,
    title: "政策红利直通",
    body: "OPC认证社区直通经信局政策包：Token券、算力券、社区补贴（年最高200万）、算力补贴（年最高1000万）、数据沙盒减免50%。",
  },
  {
    icon: Presentation,
    iconAlt: TrendingUp,
    title: "路演融资舞台",
    body: "“创赢未来”OPC专场路演，通过项目最高1000万元资金支持。产业对接会常态化，近百家企业开放真实业务场景。",
  },
  {
    icon: Wrench,
    iconAlt: Sparkles,
    title: "AI工具普惠",
    body: "入驻OPC可申领WorkBuddy专属账号，每月免费获4000通用算力积分，覆盖文创/办公/开发全场景。腾讯云、移动云生态对接。",
  },
  {
    icon: Globe,
    iconAlt: Plane,
    title: "国际化窗口",
    body: "“国际化”认证孵化器底子，服务2000+中外企业。孵化中外OPC双向出海，跨境电商培训、跨境资源对接。",
  },
];

const CERTIFICATIONS = [
  { title: "OPC认证社区", body: "北京市经信局认定" },
  { title: "国际化认证", body: "服务中外企业" },
  { title: "数字经济认证", body: "市级数字转型能力" },
  { title: "腾讯云生态伙伴", body: "WorkBuddy二级代理" },
];

export function CommunityValuesSection() {
  return (
    <section aria-labelledby="values-heading" className="pt-[60px] pb-16 sm:pt-0 sm:pb-24 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16">
        <div className="flex flex-col gap-[19.5px] pb-8 lg:pb-[58px]">
          <h2
            id="values-heading"
            className="max-w-[520px] text-[34px] leading-9 tracking-[0.03em] text-ink lg:text-[48px] lg:leading-[48px] lg:tracking-[0.04em]"
          >
            社群六大价值。
          </h2>
          <p className="max-w-[536px] text-[15px] leading-5 text-ink lg:text-base lg:leading-6">
            一个人可以走得快，一群人才能走得远——为什么选择艾窝窝。
          </p>
        </div>
        <div className="relative border border-gray-3 bg-white">
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
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, index) => (
              <li
                key={value.title}
                className={`flex flex-col gap-3 border-gray-3 px-6 py-7 lg:px-10 lg:py-9 ${
                  index > 0 ? "border-t" : ""
                } ${index % 2 === 1 ? "sm:border-l" : ""} ${
                  index < 2 ? "sm:border-t-0" : "sm:border-t"
                } lg:border-t ${index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"} ${
                  index < 3 ? "lg:border-t-0" : ""
                }`}
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-solar text-white">
                  <MorphHoverIcon base={value.icon} alt={value.iconAlt} size={20} strokeWidth={1.5} />
                </span>
                <h3 className="text-[20px] leading-6 text-ink lg:text-[22px]">{value.title}</h3>
                <p className="text-[15px] leading-5 text-hushed lg:text-base lg:leading-6">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-5 grid gap-px border border-gray-3 bg-gray-3 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((certification) => (
            <li key={certification.title} className="flex flex-col gap-1 bg-surface-gray px-5 py-4">
              <span className="text-[15px] leading-5 text-ink lg:text-base">
                {certification.title}
              </span>
              <span className="font-mono text-[12px] leading-4 text-gray-5">
                {certification.body}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
