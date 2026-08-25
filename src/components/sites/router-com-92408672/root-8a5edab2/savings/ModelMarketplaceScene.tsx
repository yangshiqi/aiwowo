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
  { model: "DeepSeek-V4-Flash-0731", provider: "Fireworks", released: "Jul 31, 2026", intelligence: "—", context: "1M" },
  { model: "Kimi K3", provider: "Fireworks", released: "Jul 19, 2026", intelligence: "57.1", context: "1M" },
  { model: "Kimi K3 Fast", provider: "Fireworks", released: "Jul 19, 2026", intelligence: "57.1", context: "1M" },
  { model: "GPT-5.6 Luna", provider: "OpenAI", released: "Jun 23, 2026", intelligence: "51.2", context: "1.1M" },
  { model: "GPT-5.6 Terra", provider: "OpenAI", released: "Jun 23, 2026", intelligence: "55.0", context: "1.1M" },
  { model: "GPT-5.6 Sol", provider: "OpenAI", released: "Jun 23, 2026", intelligence: "58.9", context: "1.1M" },
  { model: "GLM 5.2", provider: "Fireworks", released: "Jun 16, 2026", intelligence: "51.1", context: "1M" },
  { model: "GLM 5.2 Fast", provider: "Fireworks", released: "Jun 16, 2026", intelligence: "51.1", context: "1M" },
  { model: "Kimi K2.7 Code", provider: "Fireworks", released: "Jun 12, 2026", intelligence: "41.9", context: "262.1K" },
  { model: "Kimi K2.7 Code Fast", provider: "Fireworks", released: "Jun 12, 2026", intelligence: "41.9", context: "262.1K" },
  { model: "Minimax M3", provider: "Fireworks", released: "Jun 11, 2026", intelligence: "44.4", context: "512K" },
  { model: "Qwen3.7 Plus", provider: "Fireworks", released: "Jun 9, 2026", intelligence: "39.0", context: "262.1K" },
];

type BrandKind = "deepseek" | "openai" | "glm" | "fireworks" | "kimi";

function modelBrand(model: string): BrandKind {
  return model.startsWith("DeepSeek")
    ? "deepseek"
    : model.startsWith("GPT")
      ? "openai"
      : model.startsWith("GLM")
        ? "glm"
        : model.startsWith("Minimax") || model.startsWith("Qwen")
          ? "fireworks"
          : "kimi";
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
            <h2 id={headingId}>Models</h2>
            <p>Find the right model for the job. Compare up to four at once.</p>
          </header>
          <div aria-hidden="true" className="rmah-mm__toolbar" style={SETTLED}>
            <span className="rmah-mm__search">
              <SearchGlyph />
              Search models
            </span>
            <span className="rmah-mm__sort">
              Intelligence Index <ChevronGlyph />
            </span>
            <span className="rmah-mm__filter">
              <FilterGlyph />
              Filters <ChevronGlyph />
            </span>
          </div>
          <table className="rmah-mm__table">
            <caption className="rmah-mm__visually-hidden">Available models and providers</caption>
            <thead>
              <tr>
                <th aria-label="Select" scope="col" />
                <th scope="col">
                  Model <SortGlyph />
                </th>
                <th scope="col">
                  Provider <SortGlyph />
                </th>
                <th scope="col">
                  <SortGlyph descending />
                  Released
                </th>
                <th scope="col">
                  Intelligence Index <SortGlyph />
                </th>
                <th scope="col">
                  Context <SortGlyph />
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
                    <BrandMark kind={modelBrand(row.model)} />
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
