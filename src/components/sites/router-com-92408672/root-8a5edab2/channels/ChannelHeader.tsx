// 频道页头 — 纸底 + 蓝细线，logo 回首页，频道间切换。静态服务端组件。
import Link from "next/link";
import { AiwowoWordmark, GitHubIcon } from "../../shared/icons";

const NAV = [
  { label: "首页", href: "/" },
  { label: "OPC空间", href: "/spaces" },
  { label: "政策库", href: "/policies" },
  { label: "联系我们", href: "/#contact" },
] as const;

export function ChannelHeader({ active }: { active: "/spaces" | "/policies" }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,64,168,0.28)] bg-[#f0e8e0]">
      <div className="mx-auto flex h-[60px] w-full max-w-[1440px] items-center justify-between px-4 lg:px-16">
        <Link aria-label="艾窝窝OPC社区首页" className="block h-[30px] text-ink" href="/">
          <AiwowoWordmark className="h-full" textClassName="text-[16px]" />
        </Link>
        <nav aria-label="频道导航" className="flex items-center gap-4 lg:gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === active ? "page" : undefined}
              className={`whitespace-nowrap text-sm leading-5 transition-colors ${
                item.href === active
                  ? "font-medium text-ink-black underline decoration-2 underline-offset-[6px]"
                  : "text-ink hover:text-ink-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/yangshiqi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden size-8 items-center justify-center text-ink transition-opacity hover:opacity-70 sm:flex"
          >
            <GitHubIcon className="size-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
