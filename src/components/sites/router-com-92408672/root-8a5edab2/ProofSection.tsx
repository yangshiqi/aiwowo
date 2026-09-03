import type { CSSProperties } from "react";
import { AiwowoGlyph, ArrowRight12 } from "@/components/sites/router-com-92408672/shared/icons";
import { FlexPricingRoutes } from "./proof/FlexPricingRoutes";
import { SwitchyardRoutes } from "./proof/SwitchyardRoutes";

const ASSETS = "/sites/router-com-92408672/root-8a5edab2";
const TICK = 10.87;

// 空间设施轴测线稿——直接放在暖纸底上,不加盒子(按素材规范)。
const FACILITIES = [
  { file: "icon-coworking", label: "联合办公" },
  { file: "icon-meeting-room", label: "会议室" },
  { file: "icon-pitch-zone", label: "路演区" },
  { file: "icon-coffee-bar", label: "咖啡吧" },
  { file: "icon-focus-pod", label: "专注舱" },
  { file: "icon-mentor-table", label: "导师桌" },
] as const;

type Corner = "tl" | "tr" | "bl" | "br";
/** 角标伸出的方向,取自 u / d / l / r 的组合:L 形两个方向,T 形三个方向。 */
type Arms = string;

/** 蓝图角标:在格子某个角画 L / T 形短线,覆盖层为 -inset-px,所以短线正好压在边框线上。 */
function Junction({ corner, arms }: { corner: Corner; arms: Arms }) {
  const atRight = corner[1] === "r";
  const atBottom = corner[0] === "b";
  const l = arms.includes("l");
  const r = arms.includes("r");
  const u = arms.includes("u");
  const d = arms.includes("d");
  const spans: CSSProperties[] = [];
  if (l || r) {
    const style: CSSProperties = { height: 1, width: (l ? TICK : 0) + (r ? TICK : 0) };
    if (atRight) style.right = r ? -TICK : 0;
    else style.left = l ? -TICK : 0;
    if (atBottom) style.bottom = 0;
    else style.top = 0;
    spans.push(style);
  }
  if (u || d) {
    const style: CSSProperties = { width: 1, height: (u ? TICK : 0) + (d ? TICK : 0) };
    if (atBottom) style.bottom = d ? -TICK : 0;
    else style.top = u ? -TICK : 0;
    if (atRight) style.right = 0;
    else style.left = 0;
    spans.push(style);
  }
  return (
    <>
      {spans.map((style, index) => (
        <span key={index} aria-hidden="true" className="pointer-events-none absolute bg-blueprint" style={style} />
      ))}
    </>
  );
}

type Marks = Partial<Record<Corner, Arms>>;

/** 一个格子的角标集合:桌面网格和移动端单列的接缝位置不同,分别声明。 */
function CellMarks({ desktop, mobile }: { desktop: Marks; mobile: Marks }) {
  return (
    <>
      <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20 hidden lg:block">
        {(Object.entries(desktop) as [Corner, Arms][]).map(([corner, arms]) => (
          <Junction key={corner} corner={corner} arms={arms} />
        ))}
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20 lg:hidden">
        {(Object.entries(mobile) as [Corner, Arms][]).map(([corner, arms]) => (
          <Junction key={corner} corner={corner} arms={arms} />
        ))}
      </span>
    </>
  );
}

const CELL = "relative flex flex-col border border-gray-3 px-6 py-8 sm:p-8 lg:p-12";
const EYEBROW =
  "font-mono text-[18px] leading-[13px] tracking-[-0.2px] uppercase sm:text-[14px] sm:leading-4 sm:tracking-[0.5px] text-gray-5";
const STORY_LINK =
  "flex w-fit items-center gap-[11px] text-[16px] leading-4 outline-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * "不只是一个工位，是一个生态。" — 三行便当格:
 * 1. 运营面积(窄)| 空间设施六图一排(宽)
 * 2. 政策卡 | 创始故事卡(两等分,各带线稿背景)
 * 3. 引言通栏
 * 移动端单列堆叠,顺序同上。
 */
export function ProofSection() {
  return (
    <section id="community" aria-labelledby="proof-heading">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16 py-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
        <div className="flex flex-col gap-[41px] sm:gap-16">
          <div className="flex max-w-[450px] flex-col gap-4 sm:gap-5">
            <h2
              id="proof-heading"
              className="leading-trim text-[34px] leading-9 tracking-[0.03em] text-ink sm:text-[40px] sm:leading-[40px] sm:tracking-[0.03em] lg:text-[48px] lg:leading-[48px] lg:tracking-[0.04em]"
            >
              不只是一个工位，是一个生态。
            </h2>
            <p className="leading-trim text-[15px] leading-5 text-ink sm:text-[16px] sm:leading-[24px]">
              在这里，你遇到的不只是邻居——是合伙人、导师、客户和朋友。
            </p>
          </div>

          <div>
            {/* 第一行:运营面积 | 空间设施 */}
            <div className="grid lg:grid-cols-[360px_1fr] [&>*]:min-w-0">
              <div className={`${CELL} justify-between gap-10 bg-white lg:min-h-[288px]`}>
                <CellMarks desktop={{ tl: "rd", br: "lru" }} mobile={{ tl: "rd", tr: "ld" }} />
                <p className={EYEBROW}>运营面积</p>
                <div className="flex flex-col gap-6 sm:gap-4">
                  <p className="leading-trim whitespace-nowrap font-display font-bold text-[56px] leading-[1.00903em] tracking-[-0.0101em] text-ink min-[375px]:text-[68px] sm:text-[78px] sm:leading-[84px] sm:tracking-[-1.56px]">
                    20000㎡
                  </p>
                  <p className="font-mono text-[18px] leading-[13px] tracking-[-0.2px] uppercase sm:text-xs sm:leading-4 sm:font-medium sm:tracking-[0.5px] text-ink">
                    双认证孵化器 · 2000+服务企业
                  </p>
                </div>
              </div>
              <div className={`${CELL} justify-between gap-8 border-t-0 bg-white lg:-ml-px lg:border-t`}>
                <CellMarks desktop={{ tl: "lrd", tr: "ld" }} mobile={{ tl: "udr", tr: "udl" }} />
                <p className={EYEBROW}>空间设施</p>
                <ul className="grid grid-cols-3 gap-x-4 gap-y-6 lg:grid-cols-6 lg:gap-x-6">
                  {FACILITIES.map((item) => (
                    <li key={item.file} className="flex flex-col items-center gap-2 text-center">
                      <img
                        src={`${ASSETS}/images/opc/icons/${item.file}.webp`}
                        alt=""
                        width={512}
                        height={512}
                        loading="lazy"
                        className="aspect-square w-16 select-none object-contain sm:w-20 lg:w-[96px]"
                      />
                      <span className="text-[13px] leading-4 text-ink lg:text-[14px]">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 第二行:政策 | 创始故事 */}
            <div className="grid lg:-mt-px lg:grid-cols-2 [&>*]:min-w-0">
              <div className={`${CELL} min-h-[315px] justify-end border-t-0 bg-[#f7f3ed] text-ink lg:min-h-[404px] lg:border-t`}>
                <CellMarks desktop={{ tl: "udr", tr: "lrd", br: "lru" }} mobile={{ tl: "udr", tr: "udl" }} />
                <span className="pointer-events-none absolute inset-0 z-0 block overflow-hidden">
                  <FlexPricingRoutes />
                </span>
                <div className="relative z-10 flex max-w-[500px] flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-4 sm:gap-8">
                    <h3 className="leading-trim text-[22px] leading-6 sm:text-[28px] sm:leading-8">经信局34号文：OPC创新发展行动方案</h3>
                    <p className="leading-trim max-w-[483px] text-[15px] leading-5 sm:text-[16px] sm:leading-6">
                      八条措施支持“一人成军”：社区年度补贴最高200万元，算力补贴最高1000万元，入驻企业免费享3个月Token券，数据沙盒费用减免50%——政策红利直通经信局。
                    </p>
                  </div>
                  <a href="#contact" className={STORY_LINK}>
                    了解政策详情
                    <ArrowRight12 className="shrink-0" />
                  </a>
                </div>
              </div>
              <div className={`${CELL} min-h-[315px] justify-end border-t-0 bg-[#f7f3ed] text-ink lg:-ml-px lg:min-h-[404px] lg:border-t`}>
                <CellMarks desktop={{ tr: "udl" }} mobile={{ tl: "udr", tr: "udl" }} />
                <span className="pointer-events-none absolute inset-0 z-0 block overflow-hidden">
                  <SwitchyardRoutes />
                </span>
                <div className="relative z-10 flex max-w-[500px] flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-4 sm:gap-8">
                    <h3 className="leading-trim text-[22px] leading-6 sm:text-[28px] sm:leading-8">从胡同走出来的AI孵化者</h3>
                    <p className="leading-trim max-w-[483px] text-[15px] leading-5 sm:text-[16px] sm:leading-6">
                      名字取自北京传统小吃&ldquo;艾窝窝&rdquo;——扎根本土，扎实做事。清华十年培训经验+易得十年运营经验，我们做企业AI落地的&ldquo;管道&rdquo;，把大厂AI能力翻译成中小企业听得懂、用得上的服务。
                    </p>
                  </div>
                  <a href="#contact" className={STORY_LINK}>
                    联系我们
                    <ArrowRight12 className="shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* 第三行:引言通栏 */}
            <div className={`${CELL} gap-8 border-t-0 bg-white lg:-mt-px lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:border-t`}>
              <CellMarks
                desktop={{ tl: "udr", tr: "udl", bl: "ur", br: "ul" }}
                mobile={{ tl: "udr", tr: "udl", bl: "ur", br: "ul" }}
              />
              <p className="leading-trim max-w-[720px] text-[24px] leading-8 text-ink lg:text-[28px] lg:leading-[36px]">
                <span className="block indent-[-12.6px]">&ldquo;一个人可以走得快，一群人才能走得远。&rdquo;</span>
              </p>
              <div className="flex shrink-0 items-center gap-4 sm:gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center border border-gray-3 bg-surface-gray sm:size-16">
                  <AiwowoGlyph className="size-6 sm:size-8" />
                </span>
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-ink">艾窝窝OPC社区</p>
                  <p className="font-mono text-[14px] leading-4 tracking-[0.5px] uppercase text-gray-5">北京 · 朝阳</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
