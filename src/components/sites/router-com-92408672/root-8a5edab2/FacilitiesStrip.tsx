// 空间设施 — 6 枚 OPC 轴测线稿图标(暖纸底直接放置,不加卡片盒/外发光,按素材规范)。
const ASSETS = "/sites/router-com-92408672/root-8a5edab2/images/opc/icons";

const FACILITIES = [
  { file: "icon-coworking", label: "联合办公", en: "Coworking" },
  { file: "icon-meeting-room", label: "会议室", en: "Meeting Room" },
  { file: "icon-pitch-zone", label: "路演区", en: "Pitch Zone" },
  { file: "icon-coffee-bar", label: "咖啡吧", en: "Coffee Bar" },
  { file: "icon-focus-pod", label: "专注舱", en: "Focus Pod" },
  { file: "icon-mentor-table", label: "导师桌", en: "Mentor Table" },
] as const;

export function FacilitiesStrip() {
  return (
    <section aria-labelledby="facilities-heading" className="border-y border-gray-3 bg-[#f0e8e0]">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 lg:px-16 lg:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2
            id="facilities-heading"
            className="text-[26px] leading-8 tracking-[0.03em] text-ink lg:text-[34px] lg:leading-10"
          >
            空间设施
          </h2>
          <p className="font-mono text-[12px] tracking-[0.1em] text-gray-5 uppercase lg:text-[13px]">
            20000㎡ 运营面积 · 灵活入驻
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 lg:mt-12 lg:grid-cols-6 lg:gap-x-8">
          {FACILITIES.map((item) => (
            <li key={item.file} className="flex flex-col items-center gap-3 text-center">
              <img
                src={`${ASSETS}/${item.file}.webp`}
                alt={item.label}
                width={512}
                height={512}
                loading="lazy"
                className="aspect-square w-[clamp(96px,10vw,160px)] select-none object-contain"
              />
              <span className="text-[15px] leading-5 text-ink lg:text-base">{item.label}</span>
              <span className="-mt-1 font-mono text-[11px] tracking-[0.06em] text-gray-5 uppercase">
                {item.en}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
