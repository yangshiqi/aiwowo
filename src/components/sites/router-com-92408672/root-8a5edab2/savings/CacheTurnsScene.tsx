import type { CSSProperties } from "react";

/**
 * Panel 1 — "Smarter defaults." cache-turns scene (`sd-*` classes,
 * scenes.css). Turn data and DOM structure reproduced verbatim from the
 * router.com source module (turn cards + timeline inspector).
 */

type TurnKind = "cached" | "miss" | "mixed";
type ProgressKind = "cached" | "new" | "mixed";
type MetricTone = "cached" | "new" | "output";

interface TurnMetric {
  tone: MetricTone;
  label: string;
  value: string;
}

interface Turn {
  kind: TurnKind;
  turn: string;
  badge: string;
  model: string;
  follows: string;
  cost: string;
  progress: ProgressKind;
  time: string;
  values: TurnMetric[];
}

const TURNS: Turn[] = [
  {
    kind: "cached",
    turn: "认知层",
    badge: "Foundation · 已结业",
    model: "AI是什么、能做什么、怎么用",
    follows: "央国企 / 园区企业 / 创业者",
    cost: "12课时",
    progress: "cached",
    time: "1:08:05 PM",
    values: [
      { tone: "cached", label: "理论课", value: "8" },
      { tone: "new", label: "案例课", value: "3" },
      { tone: "output", label: "实操", value: "1" },
    ],
  },
  {
    kind: "miss",
    turn: "部署层",
    badge: "Deployment · 进行中",
    model: "工具选型、场景落地、流程改造",
    follows: "衔接 认知层",
    cost: "20课时",
    progress: "new",
    time: "1:08:17 PM",
    values: [
      { tone: "new", label: "场景实操", value: "12" },
      { tone: "output", label: "落地方案", value: "3" },
    ],
  },
  {
    kind: "mixed",
    turn: "赋能层",
    badge: "Empowerment · 毕业即接单",
    model: "团队培训、组织变革、持续迭代",
    follows: "衔接 部署层 · 可入驻蹲窝儿",
    cost: "16课时",
    progress: "mixed",
    time: "1:08:25 PM",
    values: [
      { tone: "cached", label: "团队共训", value: "6" },
      { tone: "new", label: "组织方案", value: "2" },
      { tone: "output", label: "持续陪跑", value: "∞" },
    ],
  },
];

/** Static final-state inline style left by the entrance animation. */
const SETTLED: CSSProperties = { opacity: 1, transform: "none" };

function TurnCard({ turn }: { turn: Turn }) {
  return (
    <div className={`sd-turn-card-reveal sd-turn-card-reveal--${turn.kind}`}>
      <article className={`sd-turn-card sd-turn-card--${turn.kind}`} style={SETTLED}>
        <h2 className="sd-turn-card__title">{turn.turn}</h2>
        <div className="sd-turn-card__badge">{turn.badge}</div>
        <code className="sd-turn-card__cost">{turn.cost}</code>
        {/* 描述 · 时钟 · 衔接 —— 一行 flex,按中文实际宽度排列(原站为写死的绝对定位,中文会重叠) */}
        <div className="sd-turn-card__line">
          <div className="sd-turn-card__model">{turn.model}</div>
          <span aria-hidden="true" className="sd-turn-card__time-icon">
            <i />
          </span>
          <div className="sd-turn-card__follows">{turn.follows}</div>
        </div>
        <div
          aria-hidden="true"
          className={`sd-turn-card__progress sd-turn-card__progress--${turn.progress}`}
          style={SETTLED}
        >
          <span className="sd-turn-card__progress-cached" />
          {turn.progress === "mixed" && <span className="sd-turn-card__progress-input" />}
        </div>
        <dl className="sd-turn-card__metrics">
          {turn.values.map((metric) => {
            const tone = metric.tone === "new" ? "input" : metric.tone;
            return (
              <div key={metric.label} className={`sd-turn-card__metric sd-turn-card__metric--${tone}`}>
                <dt>
                  <i aria-hidden="true" className="sd-turn-card__swatch" />
                  <span className="sd-turn-card__metric-label">{metric.label}</span>
                </dt>
                <dd className="sd-turn-card__metric-value">{metric.value}</dd>
              </div>
            );
          })}
        </dl>
      </article>
    </div>
  );
}

export function CacheTurnsScene() {
  return (
    <div className="sd-animation">
      <div className="sd-animation__viewport">
        <div className="sd-animation__scene" style={SETTLED}>
          <div className="sd-smarter-composite">
            <div className="sd-turn-inspector-window" style={SETTLED}>
              <section className="sd-turn-inspector" aria-label="FDE培训阶段面板">
                {TURNS.map((turn) => (
                  <TurnCard key={turn.follows} turn={turn} />
                ))}
              </section>
            </div>
            <aside aria-label="培训阶段时间线" className="sd-turn-timeline" style={SETTLED}>
              <span aria-hidden="true" className="sd-turn-timeline__rail" />
              {TURNS.map((turn, index) => (
                <div
                  key={turn.turn}
                  className={`sd-timeline-row${index === 1 ? " sd-timeline-row--active" : ""}`}
                >
                  <i
                    aria-hidden="true"
                    className={index === 1 ? "sd-timeline-dot sd-timeline-dot--miss" : "sd-timeline-dot"}
                  />
                  <span>
                    <strong>{turn.turn}</strong>
                    阶段考核
                  </span>
                  <code>{turn.time}</code>
                  <code>{turn.cost}</code>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
