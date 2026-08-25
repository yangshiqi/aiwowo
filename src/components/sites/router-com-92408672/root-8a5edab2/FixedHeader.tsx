"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiwowoWordmark } from "@/components/sites/router-com-92408672/shared/icons";

export function FixedHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 top-0 z-50 hidden h-[60px] items-center justify-between border-gray-3 border-b bg-white px-11 transition-[opacity,transform] duration-200 ease-out lg:flex ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-6">
        <Link href="/" aria-label="艾窝窝OPC社区首页" className="text-ink-black">
          <span className="relative block h-[33.195px] w-[80.272px]">
            <AiwowoWordmark className="h-full" textClassName="text-[17px]" />
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center rounded-none border border-transparent font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-ink-black text-white hover:bg-ink-black/85 h-[42px] gap-1.5 px-4 text-sm"
        >
          申请入驻
        </a>
        <a
          href="#community"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-none border font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-ink bg-transparent text-ink hover:bg-black/5 h-[42px] gap-1.5 px-4 text-sm"
        >
          加入社群
        </a>
        <a
          href="#contact"
          className="text-sm text-ink-black underline decoration-solid underline-offset-2 hover:no-underline"
        >
          联系我们
        </a>
      </div>
    </div>
  );
}
