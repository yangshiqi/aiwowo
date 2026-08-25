"use client";

import { useEffect } from "react";

// Pauses the page's infinite animations while their section is off-screen:
// - announcement ticker + provider marquee (CSS transform marquees)
// - proof route dash-drift (CSS stroke-dashoffset) and the SMIL
//   `animateMotion` dots inside the two route SVGs (via pauseAnimations()).
// Renders nothing and never changes the DOM structure — it only toggles
// inline `animation-play-state` and the SVG animation clock.
export function PerfOptimizer() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    type Group = {
      root: Element;
      animated: HTMLElement[];
      svgs: SVGSVGElement[];
    };
    const groups: Group[] = [];

    document
      .querySelectorAll('aside[aria-label="Current offers"]')
      .forEach((root) => {
        groups.push({
          root,
          animated: Array.from(
            root.querySelectorAll<HTMLElement>('[class*="announcement-ticker"]'),
          ),
          svgs: [],
        });
      });

    document
      .querySelectorAll<HTMLElement>('[class*="model-provider-marquee"]')
      .forEach((el) => {
        groups.push({ root: el.closest("section") ?? el, animated: [el], svgs: [] });
      });

    document.querySelectorAll<SVGSVGElement>("svg").forEach((svg) => {
      const dashes = Array.from(
        svg.querySelectorAll<SVGElement>(".proof-route-dashed"),
      );
      const hasMotion = svg.getElementsByTagName("animateMotion").length > 0;
      if (dashes.length === 0 && !hasMotion) return;
      groups.push({
        root: svg.closest("section") ?? svg,
        animated: dashes as unknown as HTMLElement[],
        svgs: hasMotion ? [svg] : [],
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          for (const group of groups) {
            if (group.root !== entry.target) continue;
            const paused = !entry.isIntersecting;
            for (const el of group.animated) {
              el.style.animationPlayState = paused ? "paused" : "";
            }
            for (const svg of group.svgs) {
              if (paused) svg.pauseAnimations();
              else svg.unpauseAnimations();
            }
          }
        }
      },
      // Resume slightly before the section scrolls into view so nothing
      // ever appears frozen.
      { rootMargin: "150px" },
    );

    const roots = new Set(groups.map((group) => group.root));
    roots.forEach((root) => observer.observe(root));
    return () => {
      observer.disconnect();
      for (const group of groups) {
        for (const el of group.animated) el.style.animationPlayState = "";
        for (const svg of group.svgs) svg.unpauseAnimations();
      }
    };
  }, []);

  return null;
}
