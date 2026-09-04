"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LucideGlyph } from "@/components/sites/router-com-92408672/shared/lucide-glyph";
import { ArrowLeft, ArrowRight } from "lucide";
import { CornerTicks } from "./savings/CornerTicks";

/**
 * 社区活动 — 八类常态化活动。桌面端 4×2 细线网格一次看全(不再轮播);
 * 移动端保留横向滑动 + 箭头。卡片压缩为编号 / 频次 / 标题 / 两三行说明 / 链接。
 */

interface LabPost {
  date: string;
  title: string;
  href: string;
  description: string;
}

const LAB_POSTS: LabPost[] = [
  {
    date: "每月常态化",
    title: "OPC创业沙龙",
    href: "#contact",
    description:
      "每月常态化产业对接会，AI落地经验分享，创业者互相碰撞——近百家企业开放真实业务场景。",
  },
  {
    date: "联合腾讯云",
    title: "AI实战训练营",
    href: "#contact",
    description:
      "腾讯云开发者社区、TVP、架构师技术同盟联合，AI技术专家陪跑，从产品教学到经验复制。",
  },
  {
    date: "面向海外市场",
    title: "跨境电商培训",
    href: "#contact",
    description:
      "面向俄罗斯等海外市场，从平台入驻到本地化运营一站式讲透，孵化中外OPC双向出海。",
  },
  {
    date: "政府 / 园区 / 投资机构",
    title: "资源对接日",
    href: "#contact",
    description:
      "政府、园区、投资机构对接，路演融资、媒体曝光——把你的产品放在对的生态里，被看见、被买单。",
  },
  {
    date: "创赢未来",
    title: "OPC专场路演",
    href: "#contact",
    description:
      "“创赢未来”OPC专场路演，通过项目最高可获1000万元资金支持，产业对接会常态化。",
  },
  {
    date: "近百家企业",
    title: "产业对接会",
    href: "#contact",
    description:
      "常态化产业对接，近百家企业开放真实业务场景——把你的方案直接放进真实需求里验证。",
  },
  {
    date: "经信局政策包",
    title: "政策申报辅导",
    href: "#contact",
    description:
      "Token券、算力券、数据券申领全流程辅导，合计最高10万/企业；社区补贴与算力补贴申报陪跑。",
  },
  {
    date: "腾讯云 TVP",
    title: "开发者技术分享",
    href: "#contact",
    description:
      "腾讯云开发者社区、TVP、架构师技术同盟联合分享：智能体开发、AIGC创制、大模型微调实践。",
  },
];

const ARROW_BUTTON_CLASS =
  "flex size-8 cursor-pointer items-center justify-center bg-ink text-white outline-none transition-[background-color,opacity] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:bg-ink-black/6 disabled:text-gray-3";

function LabPostCard({ post, index }: { post: LabPost; index: number }) {
  return (
    <article className="group relative flex min-h-[248px] w-[300px] shrink-0 snap-start flex-col gap-5 border border-gray-3 bg-white p-6 lg:min-h-[268px] lg:w-auto lg:border-0 lg:p-8">
      {/* 悬停时四条墨线沿边框描出(仅 transform) */}
      <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-10 motion-reduce:hidden">
        <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 right-0 h-full w-px origin-top scale-y-0 group-hover:scale-y-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out right-0 bottom-0 h-px w-full origin-right scale-x-0 group-hover:scale-x-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out bottom-0 left-0 h-full w-px origin-bottom scale-y-0 group-hover:scale-y-100" />
      </span>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display text-[15px] leading-4 font-bold tracking-[0.04em] text-ink-black">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="text-right font-mono text-[11px] leading-4 tracking-[0.5px] text-gray-5 uppercase">{post.date}</p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[20px] leading-6 text-ink">
          <a
            href={post.href}
            className="outline-none after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {post.title}
          </a>
        </h3>
        <p className="text-[14px] leading-5 text-gray-6">{post.description}</p>
      </div>
      <p aria-hidden="true" className="mt-auto flex items-center gap-[11px] text-[15px] leading-6 text-ink">
        了解活动
        <LucideGlyph icon={ArrowRight} size={12} className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      </p>
    </article>
  );
}

export function LabSection() {
  const scrollerRef = useRef<HTMLElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, [updateEnds]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section aria-labelledby="lab-heading" className="pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-24 lg:pb-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 id="lab-heading" className="text-[28px] leading-7 tracking-[0.03em] text-ink sm:text-[40px] sm:leading-10 sm:tracking-[0.03em]">
              社区活动
            </h2>
            <p className="font-mono text-[12px] tracking-[0.1em] text-gray-5 uppercase lg:text-[13px]">8 类常态化活动 · 全年滚动</p>
          </div>
          <div className="relative mt-7 sm:mt-[55.3px]">
            <span className="hidden lg:contents">
              <CornerTicks junctions={["tl", "tr", "bl", "br"]} />
            </span>
            <section
              ref={scrollerRef}
              onScroll={updateEnds}
              aria-label="社区活动"
              tabIndex={0}
              className="-mr-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink motion-safe:scroll-smooth touch-pan-y select-none cursor-grab sm:gap-6 lg:mr-0 lg:grid lg:cursor-auto lg:grid-cols-4 lg:gap-px lg:overflow-visible lg:border lg:border-gray-3 lg:bg-gray-3"
            >
              {LAB_POSTS.map((post, index) => (
                <LabPostCard key={post.title} post={post} index={index} />
              ))}
              <span aria-hidden="true" className="w-4 shrink-0 lg:hidden" />
            </section>
          </div>
          <div className="mt-8 flex shrink-0 items-center gap-2 self-start lg:hidden">
            <button type="button" disabled={atStart} aria-label="上一组活动" onClick={() => scrollByCard(-1)} className={ARROW_BUTTON_CLASS}>
              <LucideGlyph icon={ArrowLeft} size={16} />
            </button>
            <button type="button" disabled={atEnd} aria-label="下一组活动" onClick={() => scrollByCard(1)} className={ARROW_BUTTON_CLASS}>
              <LucideGlyph icon={ArrowRight} size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
