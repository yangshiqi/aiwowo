"use client";

import { useState } from "react";
import { AiwowoGlyph, CloseX16 } from "@/components/sites/router-com-92408672/shared/icons";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2";

export function OfferToast() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <aside
      aria-label="政策红利窗口期"
      className="fixed bottom-5 left-1/2 z-50 [--toast-translate-x:-50%] animate-[toast-enter_200ms_ease-out_both] border border-gray-3 bg-white shadow-[0_4px_24px_rgba(0,64,168,0.14)] lg:right-5 lg:left-auto lg:[--toast-translate-x:0%]"
    >
      <button
        type="button"
        aria-label="关闭政策提示"
        onClick={() => setOpen(false)}
        className="absolute top-0 right-0 z-10 flex size-[26px] -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-solid border-primary bg-white transition-all duration-100 hover:scale-105 hover:bg-gray-light"
      >
        <CloseX16 className="size-3" />
      </button>
      <div className="flex w-85.75 lg:w-116.75">
        <div className="flex h-full w-57.75 flex-col gap-1 p-4.5 lg:w-74.75 lg:gap-4 lg:p-6">
          <p className="font-mono text-[10px] leading-2.5 text-gray-6 uppercase lg:text-xs lg:leading-3">
            政策红利窗口期
          </p>
          <p className="text-[11px] leading-3.75 text-ink-black lg:w-67.5 lg:text-sm lg:leading-5">
            2026–2028年是OPC政策红利期：注册宽松、税费优惠、准入门槛低。越早入场越有优势。
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex h-7 w-fit items-center bg-ink-black px-2 text-[11px] text-white transition-colors hover:bg-ink-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-black lg:h-9 lg:px-2.5 lg:text-sm"
            >
              申请入驻
            </a>
          </div>
        </div>
        <div className="relative size-28 shrink-0 overflow-hidden border-l border-gray-3 lg:size-42">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 bg-white lg:gap-4.5">
            <AiwowoGlyph className="h-5.75 w-5.75 lg:h-7.5 lg:w-7.5" />
            <span className="px-1 text-center font-mono text-[10px] leading-3.75 text-[#101820] lg:text-xs lg:leading-4">
              京经信发〔2026〕34号
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
