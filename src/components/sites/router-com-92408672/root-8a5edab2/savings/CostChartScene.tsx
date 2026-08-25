"use client";

import { useId, useLayoutEffect, useRef, type CSSProperties } from "react";

/**
 * Panel 0 — "Automatic savings." cost-impact chart (`router-as-*` classes,
 * scenes.css). Data, structure and the ordered-Bayer dither drawn on each
 * bar's canvas are reproduced verbatim from the router.com source module.
 */

interface CostBar {
  /** Stack height, % of plot region */
  total: number;
  /** Flex (teal) segment height, % of the stack */
  flex: number;
  /** SSR canvas height attribute captured from the reference DOM (1312px stage) */
  canvasHeight: number;
}

const BARS: CostBar[] = [
  { total: 100, flex: 1, canvasHeight: 152 },
  { total: 98, flex: 2, canvasHeight: 149 },
  { total: 97, flex: 5, canvasHeight: 148 },
  { total: 94, flex: 5, canvasHeight: 143 },
  { total: 93, flex: 8, canvasHeight: 141 },
  { total: 91, flex: 10, canvasHeight: 138 },
  { total: 90, flex: 12, canvasHeight: 137 },
  { total: 88, flex: 15, canvasHeight: 134 },
  { total: 85, flex: 19, canvasHeight: 129 },
  { total: 84, flex: 22, canvasHeight: 128 },
  { total: 82, flex: 26, canvasHeight: 125 },
  { total: 81, flex: 31, canvasHeight: 123 },
  { total: 79, flex: 39, canvasHeight: 120 },
  { total: 77, flex: 43, canvasHeight: 117 },
  { total: 75, flex: 48, canvasHeight: 114 },
  { total: 73, flex: 57, canvasHeight: 111 },
  { total: 72, flex: 65, canvasHeight: 110 },
  { total: 70, flex: 73, canvasHeight: 107 },
];

const Y_AXIS = ["20万", "15万", "10万", "5万", "0"];

const X_AXIS = [
  { label: "1/1", position: 0 },
  { label: "1/9", position: 22 },
  { label: "1/17", position: 45 },
  { label: "1/25", position: 68 },
  { label: "2/2", position: 94 },
];

/** 4x4 ordered-dither (Bayer) matrix — verbatim from the source. */
const BAYER_MATRIX = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

function bayerThreshold(x: number, y: number): number {
  const row = BAYER_MATRIX[((y % 4) + 4) % 4];
  return ((row?.[((x % 4) + 4) % 4] ?? 0) + 0.5) / 16;
}

function paintDither(
  ctx: CanvasRenderingContext2D,
  yStart: number,
  yEnd: number,
  width: number,
  threshold: number,
  rgb: string,
  alpha: number,
  seedX: number,
  seedY: number,
) {
  const start = Math.round(yStart);
  const end = Math.round(yEnd);
  if (end <= start) return;
  ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
  for (let y = start; y < end; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (!(threshold > bayerThreshold(x + seedX, y + seedY))) {
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

/** Static final-state inline style left by the entrance animation. */
const SETTLED: CSSProperties = { opacity: 1, transform: "none" };

function DitherBar({ bar }: { bar: CostBar }) {
  const stackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const stack = stackRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!stack || !canvas || !ctx) return;

    const draw = () => {
      const width = Math.max(4, 4 * Math.floor(Math.max(4, Math.round(stack.clientWidth / 2)) / 4));
      const height = Math.min(200, Math.max(2, Math.round(stack.clientHeight / 2)));
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, width, height);
      const split = Math.min(height - 1, Math.max(1, Math.round((height * bar.flex) / 100)));
      paintDither(
        ctx,
        0,
        split,
        width,
        0.4,
        "243, 240, 234",
        0.6,
        Math.round(stack.offsetLeft / 2),
        Math.round(stack.offsetTop / 2),
      );
      paintDither(ctx, split, height, width, 0.8, "0, 0, 0", 0.5, 2, 1 - split);
    };

    draw();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(draw);
    observer.observe(stack);
    return () => observer.disconnect();
  }, [bar.flex]);

  return (
    <div
      ref={stackRef}
      className="router-as-bar-stack"
      style={{ height: `${bar.total}%`, opacity: 1, transform: "none" }}
    >
      <span
        className="router-as-bar-segment router-as-bar-segment--flex"
        style={{ height: `${bar.flex}%` }}
      />
      <span className="router-as-bar-segment router-as-bar-segment--default" />
      <canvas
        aria-hidden="true"
        className="router-as-bar-dither-canvas"
        ref={canvasRef}
        width={8}
        height={bar.canvasHeight}
      />
    </div>
  );
}

export function CostChartScene() {
  const headingId = `${useId().replace(/:/g, "")}-router-as-heading`;

  return (
    <div className="router-as-animation">
      <div className="router-as-stage">
        <div className="router-as-scene" style={SETTLED}>
          <section className="router-as-chart-window" aria-labelledby={headingId}>
            <div className="router-as-chart-glow" aria-hidden="true" />
            <header className="router-as-chart-header" style={SETTLED}>
              <h2 id={headingId}>入驻后综合创业成本走势</h2>
              <span>政策包最高10万</span>
            </header>
            <div className="router-as-plot-region">
              <div className="router-as-grid-layer" aria-hidden="true">
                {Y_AXIS.map((label, index) => (
                  <span
                    key={label}
                    className="router-as-grid-line"
                    style={{ top: `${25 * index}%`, opacity: 1, transform: "none" }}
                  />
                ))}
              </div>
              <div aria-hidden="true" className="router-as-y-axis">
                {Y_AXIS.map((label, index) => (
                  <span key={label} style={{ top: `${25 * index}%`, opacity: 1 }}>
                    {label}
                  </span>
                ))}
              </div>
              <div className="router-as-bar-grid" aria-hidden="true">
                {BARS.map((bar) => (
                  <DitherBar key={bar.total} bar={bar} />
                ))}
              </div>
              <div aria-hidden="true" className="router-as-x-axis" style={SETTLED}>
                {X_AXIS.map((tick) => (
                  <span key={tick.label} style={{ left: `${tick.position}%` }}>
                    {tick.label}
                  </span>
                ))}
              </div>
            </div>
            <div aria-hidden="true" className="router-as-chart-legend" style={SETTLED}>
              <span>
                <i className="router-as-legend-dot router-as-legend-dot--default" />
                自担成本
              </span>
              <span>
                <i className="router-as-legend-dot router-as-legend-dot--flex" />
                政策补贴
              </span>
            </div>
            <table className="router-as-visually-hidden">
              <caption>十八个采样点的综合成本数据</caption>
              <thead>
                <tr>
                  <th>Sample</th>
                  <th>Total cost index</th>
                  <th>Flexible routing share</th>
                </tr>
              </thead>
              <tbody>
                {BARS.map((bar, index) => (
                  <tr key={bar.total}>
                    <td>{index + 1}</td>
                    <td>{bar.total}</td>
                    <td>{bar.flex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}
