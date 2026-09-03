"use client";

import { useEffect, useState } from "react";
import { LucideGlyph } from "@/components/sites/router-com-92408672/shared/lucide-glyph";
import { MOBILE_MENU_EVENT } from "@/components/sites/router-com-92408672/shared/morph-widgets";
import { ChevronRight } from "lucide";

// The captured element is the hamburger-controlled mobile menu (closed by
// default). We attach to the hero nav's "Open menu" button rather than adding
// handlers inside the server-rendered HeroSection, keeping its DOM verbatim.
export function MobileBottomBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onToggle = (event: Event) => {
      const detail = (event as CustomEvent<{ open: boolean }>).detail;
      setOpen(detail.open);
    };
    document.addEventListener(MOBILE_MENU_EVENT, onToggle);
    return () => document.removeEventListener(MOBILE_MENU_EVENT, onToggle);
  }, []);

  const close = () => {
    setOpen(false);
    document.dispatchEvent(
      new CustomEvent(MOBILE_MENU_EVENT, { detail: { open: false, from: "menu" } }),
    );
  };

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-x-0 bottom-0 z-50 flex flex-col bg-background px-4 lg:hidden transition-[opacity,transform,visibility] duration-200 ease-out ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <a
        href="#contact"
        onClick={close}
        className="flex h-16 items-center justify-between gap-4 border-b border-rule text-[18px] leading-6 text-ink outline-none transition-colors hover:text-ink-black focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
      >
        申请入驻
        <LucideGlyph icon={ChevronRight} size={14} className="shrink-0" />
      </a>
      <a
        href="#community"
        onClick={close}
        className="flex h-16 items-center justify-between gap-4 border-b border-rule text-[18px] leading-6 text-ink outline-none transition-colors hover:text-ink-black focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
      >
        加入社群
        <LucideGlyph icon={ChevronRight} size={14} className="shrink-0" />
      </a>
    </div>
  );
}
