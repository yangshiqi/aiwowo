// Final CTA — "准备好，入窝了吗？" (section 10)
// Static server component; ground is the low-contrast blueprint line-art
// (central blank area carries the copy).
export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#f0e8e0] bg-[url('/sites/router-com-92408672/root-8a5edab2/images/opc/opc-background-blueprint.webp')] bg-cover bg-center pt-[154.5px] pb-[132px] text-ink sm:pt-[259px] sm:pb-[235px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 relative z-10 flex flex-col items-center gap-[26.4px] text-center sm:gap-[47px]">
        <h2 className="text-[2.5rem] leading-[1] tracking-[0.03em] sm:text-[64px]">
          准备好，
          <br />
          入窝了吗？
        </h2>
        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-none border border-transparent font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-ink-black text-white hover:bg-ink-black/85 h-[51px] gap-1.5 px-5 text-base"
          >
            申请入驻
          </a>
          <a
            href="#community"
            className="inline-flex shrink-0 items-center justify-center rounded-none border font-normal whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-ink-black bg-transparent text-ink-black hover:bg-ink-black/5 h-[51px] gap-1.5 px-5 text-base"
          >
            加入社群
          </a>
        </div>
      </div>
    </section>
  );
}
