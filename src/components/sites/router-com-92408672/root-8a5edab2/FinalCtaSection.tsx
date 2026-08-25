// Final CTA — "Tokens are money. Save both." (section 10)
// Static server component. DOM mirrors sections/10-tokens-are-money-save-both.html 1:1.

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-[154.5px] pb-[132px] text-ink sm:pt-[259px] sm:pb-[235px]">
      <img
        alt=""
        loading="lazy"
        width={2058}
        height={1833}
        className="pointer-events-none absolute top-[-1px] left-[-86px] z-0 h-[495px] w-[508px] max-w-none select-none sm:top-[-81px] sm:left-1/2 sm:h-auto sm:w-[1029px] sm:-translate-x-1/2"
        style={{ color: "transparent" }}
        src="/sites/router-com-92408672/root-8a5edab2/images/final-cta-mark.webp"
      />
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 relative z-10 flex flex-col items-center gap-[26.4px] text-center sm:gap-[47px]">
        <h2 className="text-[2.5rem] leading-[1] tracking-[-0.64px] sm:text-[64px]">
          Tokens are money.
          <br />
          Save both.
        </h2>
        <div className="flex items-center gap-5">
          <a
            href="https://app.router.com"
            className="inline-flex shrink-0 items-center justify-center rounded-none border border-transparent font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-ink-black text-white hover:bg-ink-black/85 h-[51px] gap-1.5 px-5 text-base"
          >
            Get the API Key
          </a>
          <a
            href="https://docs.router.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-none border font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-ink bg-transparent text-ink hover:bg-black/5 h-[51px] gap-1.5 px-5 text-base"
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}
