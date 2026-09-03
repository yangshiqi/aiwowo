// 零 JS 的 Lucide 描边图标渲染器(server 可用)——静态图标不产生 hydration。
// 交互形变请用 morphicons 的 MorphIcon(见 morph-widgets.tsx)。
import { createElement, type SVGProps } from "react";
import type { IconNode } from "lucide";

export function LucideGlyph({
  icon,
  size = 16,
  strokeWidth = 1.5,
  ...props
}: {
  icon: IconNode;
  size?: number;
  strokeWidth?: number;
} & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {icon.map(([tag, attrs], index) => createElement(tag, { ...(attrs as object), key: index }))}
    </svg>
  );
}
