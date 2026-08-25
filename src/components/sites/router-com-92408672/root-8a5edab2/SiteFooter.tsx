// Site footer (section 99) — dark bg-ink, wordmark + nav links + legal row.
// Static server component. DOM mirrors sections/99-footer.html 1:1.
import Link from "next/link";

import {
  PrivacyChoicesIcon,
  RouterWordmark,
} from "../shared/icons";

const FOOTER_NAV_LINKS = [
  { label: "Router Documentation", href: "/docs" },
  { label: "Token Spend Management", href: "https://ramp.com/ai-cost-monitoring" },
  { label: "A.I. Index", href: "https://ramp.com/data/ai-index" },
  { label: "Ramp Intelligence", href: "https://ramp.com/intelligence" },
  { label: "Ramp Labs", href: "https://labs.ramp.com" },
  { label: "Ramp SWE-Bench", href: "https://labs.ramp.com/swebench" },
] as const;

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-start gap-[22px] bg-ink px-4 pt-8 pb-[27px] lg:items-end lg:gap-4 lg:px-16 lg:py-11">
      <div className="flex w-full flex-col items-start gap-[27px] lg:min-h-[24px] lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex items-center gap-6">
          <Link aria-label="Router by Ramp home" className="text-white" href="/">
            <span className="relative block h-[33.195px] w-[80.272px]">
              <RouterWordmark className="w-auto h-full shrink-0 text-white" />
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
              className="whitespace-nowrap text-[14px] text-white leading-5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-gray-5 leading-5">
        <span>© 2026 Ramp</span>
        <a
          href="https://ramp.com/legal/privacy-terms/privacy-terms/router-privacy-notice"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-white hover:no-underline"
        >
          Privacy
        </a>
        <a
          href="https://ramp.com/legal/developer-terms/developer-terms/router-terms-of-service"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-white hover:no-underline"
        >
          Terms
        </a>
        <a
          href="/data-privacy-opt-out"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-white hover:no-underline flex items-center gap-2"
        >
          <span>Your Privacy Choices</span>
          <PrivacyChoicesIcon />
        </a>
      </div>
    </footer>
  );
}
