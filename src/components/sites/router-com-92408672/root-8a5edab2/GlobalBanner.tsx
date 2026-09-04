// 出海横幅 — 3:1 全球连接插画(办公空间 → 行者 → 地球)。
// 桌面端文案叠加在图的两块留白区:标题在左上、正文在顶部中间;移动端文字堆叠在图上方。
const ASSETS = "/sites/router-com-92408672/root-8a5edab2/images/opc";

function Eyebrow() {
  return (
    <p className="font-mono text-[11px] tracking-[0.12em] text-[#0040a8] uppercase lg:text-[13px]">
      国际化窗口 · Global Gateway
    </p>
  );
}

function Heading() {
  return (
    <h2 id="global-heading" className="text-[26px] leading-[1.15] tracking-[0.03em] text-ink lg:text-[38px]">
      孵化中外OPC，
      <br />
      双向出海。
    </h2>
  );
}

function Body() {
  return (
    <>
      <p className="text-[14px] leading-6 text-hushed lg:text-[15px]">
        “国际化”认证孵化器底子，服务2000+中外企业；跨境电商培训、跨境资源对接，把你的产品带到对的市场。
      </p>
      <a
        href="#contact"
        className="inline-flex w-fit items-center gap-2 text-[14px] leading-5 text-[#0040a8] underline decoration-solid underline-offset-4 hover:no-underline"
      >
        了解出海支持 →
      </a>
    </>
  );
}

export function GlobalBanner() {
  return (
    <section aria-labelledby="global-heading" className="bg-[#f0e8e0]">
      {/* 底带上下内边距对称,插画在暖色带里垂直居中 */}
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 lg:px-16 lg:py-24">
        {/* 移动端:文字在上,图在下 */}
        <div className="flex flex-col gap-3 pb-6 lg:hidden">
          <Eyebrow />
          <Heading />
          <div className="flex flex-col gap-3">
            <Body />
          </div>
        </div>

        <div className="relative overflow-hidden border border-gray-3">
          <img
            src={`${ASSETS}/opc-banner-global.webp`}
            alt="从艾窝窝办公空间出发,连接全球市场的示意图"
            width={2172}
            height={724}
            loading="lazy"
            className="aspect-[2/1] w-full object-cover object-[62%_center] select-none sm:aspect-[3/1] sm:object-center"
          />
          {/* 桌面端叠加:左上留白 = 标题;顶部中间留白 = 正文 */}
          <div className="absolute top-[5.5%] left-[4.5%] hidden max-w-[360px] flex-col gap-3 lg:flex">
            <Eyebrow />
            <Heading />
          </div>
          <div className="absolute top-[7.5%] left-[41%] hidden max-w-[330px] flex-col gap-3 lg:flex">
            <Body />
          </div>
        </div>
      </div>
    </section>
  );
}
