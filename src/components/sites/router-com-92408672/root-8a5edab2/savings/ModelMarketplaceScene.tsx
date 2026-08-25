"use client";

import { useId, type CSSProperties } from "react";

/**
 * Panel 2 — "More models. One endpoint." model marketplace panel
 * (`rmah-mm__*` classes, scenes.css). Model rows, CSS-drawn glyphs and
 * brand marks reproduced verbatim from the router.com source module.
 */

interface ModelRow {
  model: string;
  provider: string;
  released: string;
  intelligence: string;
  context: string;
}

const MODELS: ModelRow[] = [
  { model: "一人公司注册", provider: "工商财税", released: "最快1个工作日", intelligence: "58.9", context: "¥1起" },
  { model: "代理记账", provider: "工商财税", released: "当月起办", intelligence: "57.1", context: "面议" },
  { model: "税务申报", provider: "工商财税", released: "按期申报", intelligence: "55.0", context: "面议" },
  { model: "年检审计", provider: "工商财税", released: "5–10个工作日", intelligence: "51.2", context: "面议" },
  { model: "经营许可证办理", provider: "资质许可", released: "10–20个工作日", intelligence: "51.1", context: "面议" },
  { model: "高新技术企业认定", provider: "资质许可", released: "按认定批次", intelligence: "44.4", context: "面议" },
  { model: "知识产权申请", provider: "资质许可", released: "7个工作日起", intelligence: "41.9", context: "面议" },
  { model: "独立办公室", provider: "办公空间", released: "即租即用", intelligence: "57.1", context: "面议" },
  { model: "共享工位", provider: "办公空间", released: "即租即用", intelligence: "51.1", context: "面议" },
  { model: "会议室 / 路演厅", provider: "办公空间", released: "按小时预约", intelligence: "39.0", context: "面议" },
  { model: "合同审查", provider: "法律咨询", released: "1–3个工作日", intelligence: "44.4", context: "面议" },
  { model: "股权架构设计", provider: "法律咨询", released: "预约面谈", intelligence: "—", context: "面议" },
];

type BrandKind = "deepseek" | "openai" | "glm" | "fireworks" | "kimi";

function modelBrand(category: string): BrandKind {
  return category === "工商财税"
    ? "openai"
    : category === "资质许可"
      ? "glm"
      : category === "办公空间"
        ? "deepseek"
        : "fireworks";
}

function SearchGlyph() {
  return <span aria-hidden="true" className="rmah-mm__search-glyph" />;
}

function FilterGlyph() {
  return (
    <span aria-hidden="true" className="rmah-mm__filter-glyph">
      <i />
      <i />
      <i />
    </span>
  );
}

function ChevronGlyph() {
  return <span aria-hidden="true" className="rmah-mm__chevron-glyph" />;
}

function SortGlyph({ descending = false }: { descending?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`rmah-mm__sort-glyph${descending ? " rmah-mm__sort-glyph--descending" : ""}`}
    />
  );
}

function BrandMark({ kind }: { kind: BrandKind }) {
  return (
    <span aria-hidden="true" className={`rmah-mm__brand-mark rmah-mm__brand-mark--${kind}`}>
      {(kind === "openai" ? [0, 1, 2, 3, 4, 5] : []).map((ray) => (
        <i key={ray} style={{ "--rmah-mm-brand-ray": ray } as CSSProperties} />
      ))}
      {kind === "fireworks" && (
        <>
          <i />
          <i />
          <i />
        </>
      )}
    </span>
  );
}

/** Static final-state inline style left by the entrance animation. */
const SETTLED: CSSProperties = { opacity: 1, transform: "none" };

export function ModelMarketplaceScene() {
  const headingId = `${useId().replace(/:/g, "")}-rmah-mm-heading`;

  return (
    <div className="rmah-mm">
      <div className="rmah-mm__viewport">
        <section aria-labelledby={headingId} className="rmah-mm__panel" style={SETTLED}>
          <header style={SETTLED}>
            <h2 id={headingId}>企业基础服务目录</h2>
            <p>16年企业服务经验，让中小企业少走弯路。</p>
          </header>
          <div aria-hidden="true" className="rmah-mm__toolbar" style={SETTLED}>
            <span className="rmah-mm__search">
              <SearchGlyph />
              搜索服务
            </span>
            <span className="rmah-mm__sort">
              热度指数 <ChevronGlyph />
            </span>
            <span className="rmah-mm__filter">
              <FilterGlyph />
              筛选 <ChevronGlyph />
            </span>
          </div>
          <table className="rmah-mm__table">
            <caption className="rmah-mm__visually-hidden">企业基础服务目录与类别</caption>
            <thead>
              <tr>
                <th aria-label="Select" scope="col" />
                <th scope="col">
                  服务 <SortGlyph />
                </th>
                <th scope="col">
                  类别 <SortGlyph />
                </th>
                <th scope="col">
                  <SortGlyph descending />
                  办理周期
                </th>
                <th scope="col">
                  热度指数 <SortGlyph />
                </th>
                <th scope="col">
                  起价 <SortGlyph />
                </th>
              </tr>
            </thead>
            <tbody>
              {MODELS.map((row) => (
                <tr key={row.model} style={SETTLED}>
                  <td>
                    <span aria-hidden="true" className="rmah-mm__model-check" />
                  </td>
                  <td>
                    <BrandMark kind={modelBrand(row.provider)} />
                    {row.model}
                  </td>
                  <td>
                    <BrandMark kind={row.provider === "OpenAI" ? "openai" : "fireworks"} />
                    {row.provider}
                  </td>
                  <td>
                    <code>{row.released}</code>
                  </td>
                  <td>
                    <code>{row.intelligence}</code>
                  </td>
                  <td>
                    <code>{row.context}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
