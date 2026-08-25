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
    turn: "Turn 58",
    badge: "Cache hit · 100%",
    model: "GPT-5.6 Luna · OpenAI",
    follows: "Follows Turn 57",
    cost: "$0.003094",
    progress: "cached",
    time: "1:08:05 PM",
    values: [
      { tone: "cached", label: "Cached input", value: "269,753" },
      { tone: "new", label: "New input", value: "405" },
      { tone: "output", label: "Output", value: "117" },
    ],
  },
  {
    kind: "miss",
    turn: "Turn 59",
    badge: "Cache miss",
    model: "GPT-5.6 Sol · OpenAI",
    follows: "Follows Turn 58",
    cost: "$3.7531",
    progress: "new",
    time: "1:08:17 PM",
    values: [
      { tone: "new", label: "New input", value: "273,059" },
      { tone: "output", label: "Output", value: "114" },
    ],
  },
  {
    kind: "mixed",
    turn: "Turn 60",
    badge: "Cache hit · 99%",
    model: "GPT-5.6 Sol · OpenAI",
    follows: "Follows Turn 59",
    cost: "$0.3471",
    progress: "mixed",
    time: "1:08:25 PM",
    values: [
      { tone: "cached", label: "Cached input", value: "270,257" },
      { tone: "new", label: "New input", value: "3,142" },
      { tone: "output", label: "Output", value: "147" },
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
        <div className="sd-turn-card__model">{turn.model}</div>
        <span aria-hidden="true" className="sd-turn-card__time-icon">
          <i />
        </span>
        <div className="sd-turn-card__follows">{turn.follows}</div>
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
              <section className="sd-turn-inspector" aria-label="Model turn inspector">
                {TURNS.map((turn) => (
                  <TurnCard key={turn.follows} turn={turn} />
                ))}
              </section>
            </div>
            <aside aria-label="Turn timeline" className="sd-turn-timeline" style={SETTLED}>
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
                    Model output
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
