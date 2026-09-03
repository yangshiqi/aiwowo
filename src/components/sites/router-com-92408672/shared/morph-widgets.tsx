"use client";

// morphicons 交互图标:汉堡 Menu⇄X(经自定义事件与移动菜单同步)。
// reducedMotion="user" 尊重系统减动效设置。
import { useEffect, useRef, useState } from "react";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import type { ComponentProps } from "react";

export const MOBILE_MENU_EVENT = "aiwowo-menu-toggle";

/** 移动端汉堡按钮:Menu⇄X 形变,状态通过 CustomEvent 广播给 MobileBottomBar */
export function MobileMenuButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onSync = (event: Event) => {
      const detail = (event as CustomEvent<{ open: boolean; from?: string }>).detail;
      if (detail?.from !== "button") setOpen(detail.open);
    };
    document.addEventListener(MOBILE_MENU_EVENT, onSync);
    return () => document.removeEventListener(MOBILE_MENU_EVENT, onSync);
  }, []);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.dispatchEvent(
      new CustomEvent(MOBILE_MENU_EVENT, { detail: { open: next, from: "button" } }),
    );
  };

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-label={open ? "关闭菜单" : "打开菜单"}
      onClick={toggle}
      className={className}
    >
      <MorphIcon icon={open ? X : Menu} size={22} strokeWidth={1.5} reducedMotion="user" />
    </button>
  );
}

type IconData = ComponentProps<typeof MorphIcon>["icon"];

/** 跟随最近祖先(默认 li/卡片)的 hover/focus,在 base⇄alt 间形变的图标。 */
export function MorphHoverIcon({
  base,
  alt,
  size = 24,
  strokeWidth = 1.5,
  hostSelector = "li, a, button",
  className,
}: {
  base: IconData;
  alt: IconData;
  size?: number;
  strokeWidth?: number;
  hostSelector?: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const anchorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const host = anchorRef.current?.closest(hostSelector);
    if (!host) return;
    const on = () => setActive(true);
    const off = () => setActive(false);
    host.addEventListener("mouseenter", on);
    host.addEventListener("mouseleave", off);
    host.addEventListener("focusin", on);
    host.addEventListener("focusout", off);
    return () => {
      host.removeEventListener("mouseenter", on);
      host.removeEventListener("mouseleave", off);
      host.removeEventListener("focusin", on);
      host.removeEventListener("focusout", off);
    };
  }, [hostSelector]);

  return (
    <span ref={anchorRef} className={className}>
      <MorphIcon
        icon={active ? alt : base}
        size={size}
        strokeWidth={strokeWidth}
        reducedMotion="user"
      />
    </span>
  );
}
