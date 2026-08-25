import type { CSSProperties } from "react";

/**
 * Corner tick marks (verbatim from router.com CornerTicks component).
 * Renders 10.87px gray-6 hairline ticks at box junctions inside a
 * `-inset-px` overlay span, exactly matching the reference DOM.
 */

type Junction =
  | "tl"
  | "tr"
  | "bl"
  | "br"
  | "t-left-top"
  | "t-left-bottom"
  | "t-seam-left"
  | "t-seam-right";

const TICK = "pointer-events-none absolute bg-gray-6";

const horizontal: CSSProperties = { width: "10.87px", height: "1px" };
const vertical: CSSProperties = { width: "1px", height: "10.87px" };
const horizontalLong: CSSProperties = {
  width: "21.74px",
  height: "1px",
  marginLeft: "-10.87px",
};
const verticalLong: CSSProperties = {
  width: "1px",
  height: "21.74px",
  marginTop: "-10.87px",
};

function Ticks({ junction }: { junction: Junction }) {
  switch (junction) {
    case "tl":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...horizontal, top: 0, left: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...vertical, top: 0, left: 0 }} />
        </>
      );
    case "tr":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...horizontal, top: 0, right: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...vertical, top: 0, right: 0 }} />
        </>
      );
    case "bl":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...horizontal, bottom: 0, left: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...vertical, bottom: 0, left: 0 }} />
        </>
      );
    case "br":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...horizontal, bottom: 0, right: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...vertical, bottom: 0, right: 0 }} />
        </>
      );
    case "t-left-top":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...horizontalLong, top: 0, left: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...vertical, top: 0, left: 0 }} />
        </>
      );
    case "t-left-bottom":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...horizontalLong, bottom: 0, left: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...vertical, bottom: 0, left: 0 }} />
        </>
      );
    case "t-seam-left":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...verticalLong, top: 0, left: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...horizontal, top: 0, left: 0 }} />
        </>
      );
    case "t-seam-right":
      return (
        <>
          <span aria-hidden="true" className={TICK} style={{ ...verticalLong, top: 0, right: 0 }} />
          <span aria-hidden="true" className={TICK} style={{ ...horizontal, top: 0, right: 0 }} />
        </>
      );
  }
}

export function CornerTicks({ junctions }: { junctions: Junction[] }) {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
      {junctions.map((junction) => (
        <Ticks key={junction} junction={junction} />
      ))}
    </span>
  );
}
