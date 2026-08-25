"use client";

import { useCallback, useRef } from "react";
import type { MouseEvent } from "react";
import { ArrowRight12, CloseX16 } from "@/components/sites/router-com-92408672/shared/icons";
import { SwitchyardRoutes } from "./SwitchyardRoutes";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2";
const VIDEO_SRC = `${ASSETS}/videos/switchyard.mp4`;
const VIDEO_LABEL = "How Switchyard routes between models";

/** Orange/brown "NVIDIA NeMo Switchyard" proof card with the watch-the-video dialog. */
export function SwitchyardCard() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpen = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dialogRef.current?.showModal();
  }, []);

  const handleCloseClick = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleBackdropClick = useCallback((event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  }, []);

  const handleDialogClose = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  return (
    <div className="relative flex flex-col justify-end text-white px-6 py-8 sm:p-8 lg:p-12 border border-gray-3 min-h-[315px] lg:min-h-[404px] border-t-0 lg:border-t order-2 lg:order-none">
      <span className="hidden lg:contents">
        <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
        </span>
      </span>
      <span className="contents lg:hidden">
        <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "21.74px", marginTop: "-10.87px", top: 0, right: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", top: 0, right: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, left: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "10.87px", height: "1px", bottom: 0, right: 0 }} />
          <span aria-hidden="true" className="pointer-events-none absolute bg-gray-6" style={{ width: "1px", height: "10.87px", bottom: 0, right: 0 }} />
        </span>
      </span>
      <span className="pointer-events-none absolute inset-0 z-0 block overflow-hidden">
        <img
          alt=""
          loading="lazy"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center"
          style={{ color: "transparent" }}
          src={`${ASSETS}/images/proof/switchyard-bg.webp`}
        />
        <SwitchyardRoutes />
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] block h-[78%] backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.18)_28%,black_78%)]"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.48) 100%)" }}
      />
      <div className="relative z-10 flex max-w-[500px] flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h3 className="leading-trim text-[22px] leading-6 sm:text-[28px] sm:leading-8">NVIDIA NeMo Switchyard&rsquo;s Stage Router for Coding Agents</h3>
          <p className="leading-trim max-w-[483px] text-[15px] leading-5 sm:text-[16px] sm:leading-6">Switchyard&rsquo;s intelligent model selection reduces cost by 59% and run time by 35% without sacrificing performance.</p>
        </div>
        <a
          href={VIDEO_SRC}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpen}
          className="flex w-fit items-center gap-[11px] text-[16px] leading-4 outline-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Watch the video
          <ArrowRight12 className="shrink-0" />
        </a>
        <dialog
          ref={dialogRef}
          onClick={handleBackdropClick}
          onClose={handleDialogClose}
          aria-label={VIDEO_LABEL}
          className="m-auto w-[min(1100px,92vw,calc((100dvh-2.5rem)*16/9))] max-w-none border-0 bg-transparent p-0 backdrop:bg-ink-black/80 backdrop:backdrop-blur-sm"
        >
          <div className="relative pt-10">
            <button
              type="button"
              aria-label="Close video"
              onClick={handleCloseClick}
              className="absolute top-0 right-0 flex size-8 items-center justify-center bg-white text-ink outline-none transition-colors hover:bg-gray-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <CloseX16 className="shrink-0" />
            </button>
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={`${ASSETS}/images/proof/switchyard-poster.webp`}
              controls
              playsInline
              preload="none"
              aria-label={VIDEO_LABEL}
              className="aspect-video w-full bg-black object-contain"
            />
          </div>
        </dialog>
      </div>
    </div>
  );
}
