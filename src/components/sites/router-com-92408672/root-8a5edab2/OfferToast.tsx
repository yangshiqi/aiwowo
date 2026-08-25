"use client";

import { useState } from "react";
import { CloseX16 } from "@/components/sites/router-com-92408672/shared/icons";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2";

export function OfferToast() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <aside
      aria-label="Limited time offer"
      className="fixed bottom-5 left-1/2 z-50 [--toast-translate-x:-50%] animate-[toast-enter_200ms_ease-out_both] border border-gray-3 bg-white shadow-[0_4px_34px_rgba(0,0,0,0.15)] lg:right-5 lg:left-auto lg:[--toast-translate-x:0%]"
    >
      <button
        type="button"
        aria-label="Close limited time offer"
        onClick={() => setOpen(false)}
        className="absolute top-0 right-0 z-10 flex size-[26px] -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-solid border-primary bg-white transition-all duration-100 hover:scale-105 hover:bg-gray-light"
      >
        <CloseX16 className="size-3" />
      </button>
      <div className="flex w-85.75 lg:w-116.75">
        <div className="flex h-full w-57.75 flex-col gap-1 p-4.5 lg:w-74.75 lg:gap-4 lg:p-6">
          <p className="font-mono text-[10px] leading-2.5 text-gray-6 uppercase lg:text-xs lg:leading-3">
            Limited time offer
          </p>
          <p className="text-[11px] leading-3.75 text-ink-black lg:w-67.5 lg:text-sm lg:leading-5">
            Get 50% off of GPT‑5.6 Sol through 9/18/26 when you sign up
            for Router.
          </p>
          <div>
            <a
              href="https://app.router.com"
              className="inline-flex h-7 w-fit items-center bg-ink-black px-2 text-[11px] text-white transition-colors hover:bg-ink-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-black lg:h-9 lg:px-2.5 lg:text-sm"
            >
              Get the API Key
            </a>
          </div>
        </div>
        <div className="relative size-28 shrink-0 overflow-hidden border-l border-gray-3 lg:size-42">
          <img
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={`${ASSETS}/images/toast/gpt-sol-background.webp`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 bg-white/50 lg:gap-4.5">
            <img
              alt="OpenAI"
              loading="lazy"
              width={29}
              height={30}
              className="h-5.75 w-5.5 lg:h-7.5 lg:w-7.25"
              src={`${ASSETS}/images/benchmark/openai.svg`}
            />
            <span className="font-mono text-[11px] leading-3.75 text-[#101820] uppercase lg:text-sm lg:leading-5">
              GPT‑5.6 Sol
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
