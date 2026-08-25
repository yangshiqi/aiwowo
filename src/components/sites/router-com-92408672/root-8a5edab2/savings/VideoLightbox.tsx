"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { CloseX16 } from "@/components/sites/router-com-92408672/shared/icons";

/**
 * Progressive-enhancement video lightbox (verbatim behavior from router.com):
 * a plain <a target="_blank"> for no-JS, upgraded on click to a native
 * <dialog> playing the video. Locks body scroll while open; closing pauses
 * the video and resets it to the start. Backdrop click and ESC close it.
 */
export function VideoLightbox({
  href,
  poster,
  label,
  className,
  children,
}: {
  href: string;
  poster: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lockScrollRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function unlockScroll() {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    function handleClose() {
      unlockScroll();
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }

    dialog.addEventListener("close", handleClose);
    lockScrollRef.current = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    };
    return () => {
      dialog.removeEventListener("close", handleClose);
      unlockScroll();
    };
  }, []);

  function handleTriggerClick(event: MouseEvent<HTMLAnchorElement>) {
    const dialog = dialogRef.current;
    if (!dialog?.showModal || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    dialog.showModal();
    lockScrollRef.current?.();
    videoRef.current?.play().catch(() => {});
  }

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleTriggerClick}
        className={className}
      >
        {children}
      </a>
      <dialog
        ref={dialogRef}
        aria-label={label}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto w-[min(1100px,92vw,calc((100dvh-2.5rem)*16/9))] max-w-none border-0 bg-transparent p-0 backdrop:bg-ink-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="relative pt-10">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close video"
            className="absolute top-0 right-0 flex size-8 items-center justify-center bg-white text-ink outline-none transition-colors hover:bg-gray-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CloseX16 className="shrink-0" />
          </button>
          <video
            ref={videoRef}
            src={href}
            poster={poster}
            controls
            playsInline
            preload="none"
            aria-label={label}
            className="aspect-video w-full bg-black object-contain"
          />
        </div>
      </dialog>
    </>
  );
}
