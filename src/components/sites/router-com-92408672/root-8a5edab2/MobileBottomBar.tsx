"use client";

import { useEffect, useState } from "react";
import { ChevronRight14 } from "@/components/sites/router-com-92408672/shared/icons";

export function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 flex flex-col bg-background px-4 lg:hidden transition-[opacity,transform,visibility] duration-200 ease-out ${
        visible ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <a
        href="https://app.router.com"
        className="flex h-16 items-center justify-between gap-4 border-b border-rule text-[18px] leading-6 text-ink outline-none transition-colors hover:text-ink-black focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
      >
        Get the API Key
        <ChevronRight14 className="shrink-0" />
      </a>
      <a
        href="https://docs.router.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 items-center justify-between gap-4 border-b border-rule text-[18px] leading-6 text-ink outline-none transition-colors hover:text-ink-black focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
      >
        Read the docs
        <ChevronRight14 className="shrink-0" />
      </a>
    </div>
  );
}
