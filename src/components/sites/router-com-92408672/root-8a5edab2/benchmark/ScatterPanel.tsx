import { SCATTER_POINTS } from "./data";

/**
 * "Score versus spend" panel body — axes/grid SVG copied verbatim from the
 * reference DOM plus the absolutely positioned model-logo markers.
 */
export function ScatterPanel() {
  return (
    <div className="pr-2 pl-0 lg:pr-8 lg:pl-6">
      <figure className="relative w-full" style={{ aspectRatio: "700 / 421" }}>
        <svg
          viewBox="0 0 700 421"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="各基座模型的评分与单任务成本散点图"
          aria-describedby="benchmark-panel-summary"
        >
          <g className="stroke-gray-2" strokeWidth="0.748206">
            <line x1="61" x2="699" y1="5" y2="5" />
            <line x1="61" x2="699" y1="77.59999999999998" y2="77.59999999999998" />
            <line x1="61" x2="699" y1="150.20000000000002" y2="150.20000000000002" />
            <line x1="61" x2="699" y1="222.79999999999998" y2="222.79999999999998" />
            <line x1="61" x2="699" y1="295.4" y2="295.4" />
            <line x1="61" x2="699" y1="367.99999999999994" y2="367.99999999999994" />
            <line x1="61" x2="61" y1="5" y2="368" />
            <line x1="167.33333333333331" x2="167.33333333333331" y1="5" y2="368" />
            <line x1="273.66666666666663" x2="273.66666666666663" y1="5" y2="368" />
            <line x1="380" x2="380" y1="5" y2="368" />
            <line x1="486.3333333333333" x2="486.3333333333333" y1="5" y2="368" />
            <line x1="592.6666666666667" x2="592.6666666666667" y1="5" y2="368" />
            <line x1="699" x2="699" y1="5" y2="368" />
          </g>
          <path
            d="M 70.06 131.17 L 85.92 89.80 L 247.85 79.46 L 271.80 58.78 L 401.14 27.75 L 452.26 17.41"
            fill="none"
            className="stroke-gray-4"
            strokeWidth="1"
            strokeDasharray="3.98 6.98"
            strokeLinecap="round"
          />
          <g fontSize="10" className="fill-gray-6 font-mono">
            <text x="47" y="10.5" textAnchor="end">90%</text>
            <text x="47" y="83.09999999999998" textAnchor="end">81%</text>
            <text x="47" y="155.70000000000002" textAnchor="end">72%</text>
            <text x="47" y="228.29999999999998" textAnchor="end">63%</text>
            <text x="47" y="300.9" textAnchor="end">54%</text>
            <text x="47" y="373.49999999999994" textAnchor="end">45%</text>
            <text x="61" y="387.5" textAnchor="start">¥0</text>
            <text x="167.33333333333331" y="387.5" textAnchor="middle">¥3.5</text>
            <text x="273.66666666666663" y="387.5" textAnchor="middle">¥7</text>
            <text x="380" y="387.5" textAnchor="middle">¥10.5</text>
            <text x="486.3333333333333" y="387.5" textAnchor="middle">¥14</text>
            <text x="592.6666666666667" y="387.5" textAnchor="middle">¥17.5</text>
            <text x="699" y="387.5" textAnchor="end">¥21</text>
          </g>
          <g fontSize="12" className="fill-gray-6">
            <text x="9" y="248" transform="rotate(-90 9 248)">评分</text>
            <text x="329" y="421" textAnchor="middle">单任务成本（元）</text>
          </g>
        </svg>
        <div aria-hidden="true" className="absolute inset-0">
          {SCATTER_POINTS.map((point, index) => (
            <span
              key={index}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05),0_0_0_0.346px_#f3f0ea] transition-transform hover:z-20 hover:scale-110"
              style={{ left: point.left, top: point.top, width: "5.4286%", aspectRatio: "1 / 1" }}
            >
              <span className="block" style={{ width: point.logoWidth, aspectRatio: `${point.w} / ${point.h}` }}>
                <img
                  alt=""
                  loading="lazy"
                  width={point.w}
                  height={point.h}
                  className="h-full w-full"
                  style={{ color: "transparent" }}
                  src={point.src}
                />
              </span>
            </span>
          ))}
        </div>
      </figure>
    </div>
  );
}
