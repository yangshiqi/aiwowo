"use client";

import { useEffect, useState } from "react";
import { ChevronRight14 } from "@/components/sites/router-com-92408672/shared/icons";

// The captured element is the hamburger-controlled mobile menu (closed by
// default). We attach to the hero nav's "Open menu" button rather than adding
// handlers inside the server-rendered HeroSection, keeping its DOM verbatim.
export function MobileBottomBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>('button[aria-label="Open menu"]'),
    );
    const toggle = () => setOpen((previous) => !previous);
    buttons.forEach((button) => button.addEventListener("click", toggle));
    return () =>
      buttons.forEach((button) => button.removeEventListener("click", toggle));
  }, []);

  useEffect(() => {
    document
      .querySelectorAll('button[aria-label="Open menu"]')
      .forEach((button) => button.setAttribute("aria-expanded", String(open)));
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-x-0 bottom-0 z-50 flex flex-col bg-background px-4 lg:hidden transition-[opacity,transform,visibility] duration-200 ease-out ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <a
        href="https://app.router.com"
        onClick={() => setOpen(false)}
        className="flex h-16 items-center justify-between gap-4 border-b border-rule text-[18px] leading-6 text-ink outline-none transition-colors hover:text-ink-black focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
      >
        Get the API Key
        <ChevronRight14 className="shrink-0" />
      </a>
      <a
        href="https://docs.router.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(false)}
        className="flex h-16 items-center justify-between gap-4 border-b border-rule text-[18px] leading-6 text-ink outline-none transition-colors hover:text-ink-black focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
      >
        Read the docs
        <ChevronRight14 className="shrink-0" />
      </a>
    </div>
  );
}
