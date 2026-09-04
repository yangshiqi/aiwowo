// 出海横幅 — 3:1 全球连接插画(办公空间 → 行者 → 地球)。
//
// 插画自带城市标注与经纬度(北京 / 温哥华 / 旧金山 / 纽约 / 洛杉矶),
// 图面中上区域已被「中国北京」标签占用,所以桌面端只在左上那块干净留白里叠加
// 眉题与标题,正文和链接放到图下方,避免压住画面自己的信息。
const ASSETS = "/sites/router-com-92408672/root-8a5edab2/images/opc";

function Eyebrow() {
  return (
    <p className="font-mono text-[11px] tracking-[0.12em] text-[#0040a8] uppercase lg:text-[13px]">
      国际化窗口 · Global Gateway
    </p>
  );
}

// 标题只在移动端块里作为真正的 <h2>(带 id);桌面端叠加层用 <p aria-hidden> 复刻同样式,
// 避免爬虫/代理看到两个重复的 h2。样式通过 font-display 显式指定,和 main h2 规则保持一致。
function Heading({ visual = false }: { visual?: boolean }) {
  const className = "font-display text-[26px] leading-[1.15] font-bold tracking-[0.03em] text-ink lg:text-[38px]";
  if (visual) {
    return (
      <p aria-hidden="true" className={className}>
        孵化中外OPC，
        <br />
        双向出海。
      </p>
    );
  }
  return (
    <h2 id="global-heading" className={className}>
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
            alt="从艾窝窝办公空间出发，经北京连接温哥华、旧金山、纽约、洛杉矶的全球市场示意图"
            width={2172}
            height={724}
            loading="lazy"
            className="aspect-[2/1] w-full object-cover object-[62%_center] select-none sm:aspect-[3/1] sm:object-center"
          />
          {/* 桌面端叠加:只用左上那块干净留白(办公插画之上、城市标注之左) */}
          <div className="absolute top-[4%] left-[4.5%] hidden max-w-[360px] flex-col gap-2 lg:flex">
            <Eyebrow />
            <Heading visual />
          </div>
        </div>

        {/* 桌面端正文:移到图下方,避开插画自带的城市标注 */}
        <div className="mt-6 hidden max-w-[640px] flex-col gap-3 lg:flex">
          <Body />
        </div>
      </div>
    </section>
  );
}
