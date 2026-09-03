// OPC 空间目录频道 — 按地区分组的细线行式列表（无盒子卡）。
import { SPACE_GROUPS, SPACE_TOTAL } from "@/data/opc-spaces";
import { ArrowRight12 } from "../../shared/icons";

export function SpacesChannel() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 pb-24 lg:px-16 lg:pb-32">
      {/* 频道题头 */}
      <div className="flex flex-col gap-5 border-b border-[rgba(0,64,168,0.28)] pt-14 pb-10 lg:pt-20 lg:pb-14">
        <p className="font-mono text-[12px] tracking-[0.12em] text-ink-black uppercase lg:text-[13px]">
          OPC Spaces Directory · 共 {SPACE_TOTAL} 处
        </p>
        <h1 className="max-w-[720px] text-[40px] leading-[1.08] tracking-[0.02em] text-ink lg:text-[64px]">
          全国OPC空间目录
        </h1>
        <p className="max-w-[640px] text-[15px] leading-6 text-hushed lg:text-base lg:leading-7">
          收录全国面向一人公司（OPC）与AI超级个体的认证社区、孵化载体与官方服务专区，按地区导航。信息来自政府公告与权威报道，持续更新。
        </p>
        {/* 地区锚点导航 */}
        <nav aria-label="地区导航" className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
          {SPACE_GROUPS.map((group) => (
            <a
              key={group.anchor}
              href={`#${group.anchor}`}
              className="flex items-center gap-2 text-sm text-ink-black hover:underline"
            >
              <span className="inline-block size-1.5 rounded-full bg-[#e85820]" aria-hidden="true" />
              {group.region}
              <span className="font-mono text-[12px] text-gray-5">{group.spaces.length}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* 地区分组 */}
      {SPACE_GROUPS.map((group) => (
        <section key={group.anchor} id={group.anchor} aria-label={group.region} className="scroll-mt-20">
          <div className="flex items-baseline gap-4 border-b border-[rgba(0,64,168,0.28)] pt-12 pb-4 lg:pt-16">
            <h2 className="text-[28px] leading-8 tracking-[0.03em] text-ink lg:text-[36px] lg:leading-10">
              {group.region}
            </h2>
            <span className="font-mono text-[13px] text-gray-5">
              {group.spaces.length} 处空间
            </span>
          </div>
          <ul>
            {group.spaces.map((space) => (
              <li
                key={space.name}
                className={`grid gap-x-8 gap-y-3 border-b border-[rgba(0,64,168,0.16)] py-6 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)_190px] lg:py-8 ${
                  space.isSelf ? "bg-[#f7f3ed]" : ""
                }`}
              >
                <div className="flex flex-col gap-2 lg:pl-2">
                  <h3 className="flex flex-wrap items-center gap-2 text-[18px] leading-6 font-medium text-ink lg:text-[20px]">
                    {space.name}
                    {space.isSelf ? (
                      <span className="inline-flex h-[20px] items-center bg-ink-black px-1.5 font-mono text-[11px] font-normal text-white">
                        本站
                      </span>
                    ) : null}
                  </h3>
                  <p className="font-mono text-[12px] leading-4 text-gray-5">
                    {space.location}
                    {space.since ? ` · ${space.since}` : ""}
                  </p>
                  {space.certification ? (
                    <p className="text-[13px] leading-5 text-ink-black">{space.certification}</p>
                  ) : null}
                </div>
                <p className="max-w-[640px] text-[14px] leading-6 text-hushed lg:text-[15px]">
                  {space.intro}
                </p>
                <div className="lg:justify-self-end lg:pr-2">
                  <a
                    href={space.sourceUrl}
                    target={space.sourceUrl.startsWith("http") ? "_blank" : undefined}
                    rel={space.sourceUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[13px] leading-5 text-ink-black hover:underline"
                  >
                    {space.isSelf ? "申请入驻" : `来源：${space.sourceLabel}`}
                    <ArrowRight12 className="size-2.5 shrink-0" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* 收录说明 */}
      <div className="mt-10 flex flex-col gap-2 border-l-2 border-[#e85820] pl-4 lg:mt-14">
        <p className="font-mono text-[12px] tracking-[0.08em] text-gray-5 uppercase">收录说明</p>
        <p className="max-w-[720px] text-[13px] leading-6 text-hushed">
          目录基于公开信息整理，认证状态以当地主管部门最新公示为准。你运营的OPC空间希望被收录，或信息需要更正？欢迎联系{" "}
          <a href="mailto:AIWOWO@agent.qq.com" className="text-ink-black underline underline-offset-2 hover:no-underline">
            AIWOWO@agent.qq.com
          </a>
          。
        </p>
      </div>
    </div>
  );
}
