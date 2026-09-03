// Site footer (section 99) — dark bg-ink, wordmark + nav links + legal row.
// Static server component. DOM mirrors sections/99-footer.html 1:1.
import Link from "next/link";

import { AiwowoWordmark } from "../shared/icons";

const FOOTER_NAV_LINKS = [
  { label: "OPC孵化", href: "#savings" },
  { label: "蹲窝儿平台", href: "#implement" },
  { label: "AI培训", href: "#savings" },
  { label: "企业服务", href: "#savings" },
  { label: "社群生态", href: "#community" },
  { label: "联系我们", href: "#contact" },
  // 友情链接:OPC一人城(独立聚合站;上线后替换为正式域名)
  { label: "OPC一人城", href: "https://onepersoncity.example.com" },
] as const;

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-start gap-[22px] border-t border-[rgba(0,64,168,0.55)] bg-[#f0e8e0] px-4 pt-8 pb-[27px] lg:items-end lg:gap-4 lg:px-16 lg:py-11">
      <div className="flex w-full flex-col items-start gap-[27px] lg:min-h-[24px] lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex items-center gap-6">
          <Link aria-label="艾窝窝OPC社区首页" className="text-ink" href="/">
            <span className="relative block h-[33.195px]">
              <AiwowoWordmark className="h-full text-ink" textClassName="text-[17px]" />
            </span>
          </Link>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-col items-start gap-[6px] lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-4"
        >
          {FOOTER_NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              rel="noopener noreferrer"
              className="whitespace-nowrap text-[14px] text-ink-black leading-5 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-gray-5 leading-5">
        <span>© 2026 北京恒瑞永嘉资产管理有限公司</span>
        <span>品牌“艾窝窝 / AI WOWO”</span>
        <span>北京市OPC认证社区</span>
        <a
          href="mailto:AIWOWO@agent.qq.com"
          className="underline underline-offset-2 transition-colors hover:text-ink hover:no-underline"
        >
          AIWOWO@agent.qq.com
        </a>
        <a
          href="tel:13701202210"
          className="underline underline-offset-2 transition-colors hover:text-ink hover:no-underline"
        >
          13701202210
        </a>
      </div>
    </footer>
  );
}
