"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight12,
  ArrowRight16,
} from "@/components/sites/router-com-92408672/shared/icons";

interface LabPost {
  date: string;
  title: string;
  href: string;
  description: string;
}

const LAB_POSTS: LabPost[] = [
  {
    date: "Jul 1, 2026",
    title: "PorTAL: Portable Task Adaptation for LoRA",
    href: "https://labs.ramp.com/research/portal-portable-task-adaptation/",
    description:
      "Learn a task adaptation once in a base-agnostic form, then port it to new frozen models by refitting only a thin per-base alignment — recovering ~98% of per-task LoRA's lift on an unseen model within the same family and ~94% across families.",
  },
  {
    date: "May 7, 2026",
    title: "Building Fast & Accurate Agents with Prime-RL Post Training",
    href: "https://labs.ramp.com/research/prime-rl-post-training/",
    description:
      "How Prime-RL post training improves agent speed and accuracy for production workflows.",
  },
  {
    date: "Apr 21, 2026",
    title: "Coding agents ignore their own budgets",
    href: "https://labs.ramp.com/research/coding-agents-ignore-spend/",
    description:
      "Agents can't be trusted to manage their own token budgets. Spend control has to live in a separate, evidence-grounded system outside the agent doing the spending.",
  },
  {
    date: "Apr 10, 2026",
    title:
      "Latent Briefing: Efficient Memory Sharing for Multi-Agent Systems via KV Cache Compaction",
    href: "https://labs.ramp.com/research/latent-briefing-kv-cache/",
    description:
      "A Ramp Labs writeup on using KV cache compaction to share memory efficiently across multi-agent systems.",
  },
  {
    date: "Apr 2, 2026",
    title: "How we built Steer, our interpretability playground",
    href: "https://labs.ramp.com/research/how-we-built-steer/",
    description:
      "A deep dive into building Steer - an interactive tool for exploring and understanding how language models process information internally.",
  },
  {
    date: "Mar 23, 2026",
    title: "How we made Ramp Sheets self-maintaining",
    href: "https://labs.ramp.com/research/ramp-sheets-self-maintaining/",
    description:
      "How we built a system that lets Ramp Sheets automatically detect and fix its own issues - reducing manual maintenance and improving reliability.",
  },
  {
    date: "Nov 3, 2025",
    title: "Post Training Ensemble vs. Singular Model Approaches with Tinker",
    href: "https://labs.ramp.com/research/post-training-ensemble-tinker/",
    description:
      "Comparing ensemble and singular model strategies for post-training optimization, and what we learned building Tinker to explore these tradeoffs.",
  },
  {
    date: "Oct 2, 2025",
    title: "We built an agent to prompt our internal finance agent",
    href: "https://labs.ramp.com/research/agent-to-prompt-finance-agent/",
    description:
      "What happens when you build an AI agent whose job is to figure out how to prompt another AI agent? Lessons from recursive agent architectures.",
  },
  {
    date: "Aug 27, 2025",
    title: "How we built Agent Fill",
    href: "https://labs.ramp.com/research/how-we-built-agent-fill/",
    description:
      "The story behind Agent Fill - an AI agent that automatically fills out forms by understanding context, extracting data, and navigating complex workflows.",
  },
];

const CORNER_TICK_STYLES: CSSProperties[] = [
  { width: "10.87px", height: "1px", top: 0, left: 0 },
  { width: "1px", height: "10.87px", top: 0, left: 0 },
  { width: "10.87px", height: "1px", top: 0, right: 0 },
  { width: "1px", height: "10.87px", top: 0, right: 0 },
  { width: "10.87px", height: "1px", bottom: 0, left: 0 },
  { width: "1px", height: "10.87px", bottom: 0, left: 0 },
  { width: "10.87px", height: "1px", bottom: 0, right: 0 },
  { width: "1px", height: "10.87px", bottom: 0, right: 0 },
];

function LabPostCard({ post }: { post: LabPost }) {
  return (
    <article className="group relative flex min-h-[320px] w-[322px] shrink-0 snap-start flex-col justify-between gap-8 border border-gray-3 p-6 sm:min-h-[369px] sm:w-[380px] sm:p-8 lg:w-[421px]">
      <span aria-hidden="true" className="pointer-events-none absolute -inset-px z-20">
        {CORNER_TICK_STYLES.map((style, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="pointer-events-none absolute bg-gray-6"
            style={style}
          />
        ))}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-10 motion-reduce:hidden"
      >
        <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out top-0 right-0 h-full w-px origin-top scale-y-0 group-hover:scale-y-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out right-0 bottom-0 h-px w-full origin-right scale-x-0 group-hover:scale-x-100" />
        <span className="absolute bg-ink transition-transform duration-300 ease-out bottom-0 left-0 h-full w-px origin-bottom scale-y-0 group-hover:scale-y-100" />
      </span>
      <div className="flex flex-col gap-[19.28px] sm:gap-8">
        <p className="font-mono text-[9.6px] leading-[12.8px] tracking-[0.4px] text-gray-5 uppercase sm:text-xs sm:leading-4 sm:tracking-[0.5px]">
          {post.date}
        </p>
        <div className="flex flex-col gap-1.5 sm:gap-5">
          <h3 className="text-xl leading-6 text-ink sm:text-2xl sm:leading-7">
            <a
              href={post.href}
              className="outline-none after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {post.title}
            </a>
          </h3>
          <p className="text-sm leading-5 text-gray-5">{post.description}</p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="flex items-center gap-[11px] text-base leading-6 text-ink"
      >
        Read the post
        <ArrowRight12 className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      </p>
    </article>
  );
}

export function LabSection() {
  const scrollerRef = useRef<HTMLElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, [updateEnds]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section className="pt-[60px] pb-16 sm:pt-0 sm:pb-24 lg:pb-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16">
        <div className="flex flex-col">
          <h2 className="text-[28px] leading-7 tracking-[-0.14px] text-ink sm:text-[40px] sm:leading-10 sm:tracking-[-0.2px]">
            More from the Lab
          </h2>
          <section
            ref={scrollerRef}
            onScroll={updateEnds}
            aria-label="More from the Lab"
            tabIndex={0}
            className="-mr-4 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink motion-safe:scroll-smooth touch-pan-y select-none lg:-mr-16 mt-7 gap-4 sm:mt-[55.3px] sm:gap-6 cursor-grab"
          >
            {LAB_POSTS.map((post) => (
              <LabPostCard key={post.href} post={post} />
            ))}
            <span aria-hidden="true" className="w-4 shrink-0 lg:w-16" />
          </section>
          <div className="mt-8 flex shrink-0 items-center gap-2 self-start lg:mt-10 lg:self-end">
            <button
              type="button"
              disabled={atStart}
              aria-label="Show previous posts"
              onClick={() => scrollByCard(-1)}
              className="flex size-8 cursor-pointer items-center justify-center bg-ink text-white outline-none transition-[background-color,opacity] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:bg-ink-black/6 disabled:text-gray-3"
            >
              <ArrowRight16 />
            </button>
            <button
              type="button"
              disabled={atEnd}
              aria-label="Show next posts"
              onClick={() => scrollByCard(1)}
              className="flex size-8 cursor-pointer items-center justify-center bg-ink text-white outline-none transition-[background-color,opacity] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:bg-ink-black/6 disabled:text-gray-3"
            >
              <ArrowRight16 className="-scale-x-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
