/**
 * 子页面(关于/联系/隐私/代理指南/404)的排版外壳。
 * 复用 Warm Blueprint 的暖纸底、蓝图线与字体,不引入新的视觉语言;
 * 全部为服务端组件,零 JS,保证无脚本环境下也能读到完整正文。
 */
import Link from "next/link";
import type { ReactNode } from "react";
import { AiwowoWordmark } from "@/components/sites/router-com-92408672/shared/icons";
import { CONTACT, SITE_NAME } from "@/lib/site";

const NAV = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
  { href: "/agents", label: "面向AI代理" },
  { href: "/privacy", label: "隐私政策" },
] as const;

export function PageShell({
  title,
  lede,
  eyebrow,
  children,
}: {
  title: string;
  lede: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-white text-ink">
      <header className="border-b border-gray-3">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <Link href="/" aria-label={`${SITE_NAME}首页`} className="text-ink">
            <span className="relative block h-[33.195px] w-[180px]">
              <AiwowoWordmark className="h-full" textClassName="text-[17px]" />
            </span>
          </Link>
          <nav aria-label="站点导航" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] leading-5 text-ink-black hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[1440px] flex-1 px-4 pt-12 pb-20 lg:px-16 lg:pt-20 lg:pb-28">
        <div className="max-w-[820px]">
          {eyebrow ? (
            <p className="font-mono text-[12px] tracking-[0.12em] text-[#0040a8] uppercase lg:text-[13px]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-[34px] leading-10 tracking-[0.03em] text-ink lg:text-[48px] lg:leading-[52px] lg:tracking-[0.04em]">
            {title}
          </h1>
          <p className="mt-4 text-[16px] leading-7 text-hushed lg:text-[17px]">{lede}</p>
          <div className="mt-10 flex flex-col gap-8 text-[15px] leading-7 text-ink lg:text-base lg:leading-8">
            {children}
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-3 bg-[#f0e8e0]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-x-5 gap-y-2 px-4 py-8 text-[14px] leading-5 text-gray-5 lg:px-16">
          <span>© 2026 {CONTACT.legalEntity}</span>
          <span>品牌“艾窝窝 / AI WOWO”</span>
          <a href={`mailto:${CONTACT.email}`} className="underline underline-offset-2 hover:text-ink">
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phoneDisplay}`} className="underline underline-offset-2 hover:text-ink">
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </footer>
    </main>
  );
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[24px] leading-8 tracking-[0.02em] text-ink lg:text-[28px]">{heading}</h2>
      {children}
    </section>
  );
}

export function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-[#0040a8]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
