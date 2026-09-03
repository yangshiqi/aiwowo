"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight12,
  ArrowRight16,
} from "@/components/sites/router-com-92408672/shared/icons";

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
      "\u201c创赢未来\u201dOPC专场路演，通过项目最高可获1000万元资金支持，产业对接会常态化。",
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

const CORNER_TICK_STYLES: CSSProperties[] = [
  { width: "10.87px", height: "1px", top: 0, left: 0 },
  { width: "1px", height: "10.87px", top: 0, left: 0 },
  { width: "10.87px", height: "1px", top: 0, right: 0 },
  { width: "1px", height: "10.87px", top: 0, right: 0 },
  { width: "10.87px", height: "1px", bottom: 0, left: 0 },
  { width: "1px", height: "10.87px", bottom: 0, left: 0 },
  { width: "10.87px", height: "1px", bottom: 0, right: 0 },
  { width: "1px", height: "10.87px", bottom: 0, right: 0 },
];

function LabPostCard({ post }: { post: LabPost }) {
  return (
    <article className="group relative flex min-h-[320px] w-[322px] shrink-0 snap-start flex-col justify-between gap-8 border border-gray-3 p-6 sm:min-h-[369px] sm:w-[380px] sm:p-8 lg:w-[421px]">
      <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
        {CORNER_TICK_STYLES.map((style, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="pointer-events-none absolute bg-blueprint"
            style={style}
          />
        ))}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-10 motion-reduce:hidden"
      >
        <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 right-0 h-full w-px origin-top scale-y-0 group-hover:scale-y-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out right-0 bottom-0 h-px w-full origin-right scale-x-0 group-hover:scale-x-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out bottom-0 left-0 h-full w-px origin-bottom scale-y-0 group-hover:scale-y-100" />
      </span>
      <div className="flex flex-col gap-[19.28px] sm:gap-8">
        <p className="font-mono text-[9.6px] leading-[12.8px] tracking-[0.4px] text-gray-5 uppercase sm:text-xs sm:leading-4 sm:tracking-[0.5px]">
          {post.date}
        </p>
        <div className="flex flex-col gap-1.5 sm:gap-5">
          <h3 className="text-xl leading-6 text-ink sm:text-2xl sm:leading-7">
            <a
              href={post.href}
              className="outline-none after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {post.title}
            </a>
          </h3>
          <p className="text-sm leading-5 text-gray-5">{post.description}</p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="flex items-center gap-[11px] text-base leading-6 text-ink"
      >
        了解活动
        <ArrowRight12 className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
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
    <section className="pt-[60px] pb-16 sm:pt-0 sm:pb-24 lg:pb-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16">
        <div className="flex flex-col">
          <h2 className="text-[28px] leading-7 tracking-[0.03em] text-ink sm:text-[40px] sm:leading-10 sm:tracking-[0.03em]">
            社区活动
          </h2>
          <section
            ref={scrollerRef}
            onScroll={updateEnds}
            aria-label="社区活动"
            tabIndex={0}
            className="-mr-4 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink motion-safe:scroll-smooth touch-pan-y select-none lg:-mr-16 mt-7 gap-4 sm:mt-[55.3px] sm:gap-6 cursor-grab"
          >
            {LAB_POSTS.map((post) => (
              <LabPostCard key={post.title} post={post} />
            ))}
            <span aria-hidden="true" className="w-4 shrink-0 lg:w-16" />
          </section>
          <div className="mt-8 flex shrink-0 items-center gap-2 self-start lg:mt-10 lg:self-end">
            <button
              type="button"
              disabled={atStart}
              aria-label="上一组活动"
              onClick={() => scrollByCard(-1)}
              className="flex size-8 cursor-pointer items-center justify-center bg-ink text-white outline-none transition-[background-color,opacity] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:bg-ink-black/6 disabled:text-gray-3"
            >
              <ArrowRight16 />
            </button>
            <button
              type="button"
              disabled={atEnd}
              aria-label="下一组活动"
              onClick={() => scrollByCard(1)}
              className="flex size-8 cursor-pointer items-center justify-center bg-ink text-white outline-none transition-[background-color,opacity] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:bg-ink-black/6 disabled:text-gray-3"
            >
              <ArrowRight16 className="-scale-x-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
