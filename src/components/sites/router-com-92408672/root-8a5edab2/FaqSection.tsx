"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown24 } from "@/components/sites/router-com-92408672/shared/icons";

const linkClass = "underline underline-offset-2 hover:text-ink";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Router?",
    answer: (
      <span>
        {"One endpoint for accessing multiple AI models. Instead of wiring your app to one provider at a time, you send requests through our router which can choose the right model for the job based on quality, cost, and availability. No lock-in. One line to switch."}
      </span>
    ),
  },
  {
    question: "Wait, Ramp bought router.com?",
    answer: (
      <span>
        {"We did. It was either this or spend the next year spelling out a longer URL on podcasts. More importantly, we build tools that help companies make better spending decisions and stop overpaying for things. AI tokens are the fastest-growing spend category, and we want every token you use to be worth it."}
      </span>
    ),
  },
  {
    question: "How does it work?",
    answer: (
      <span>
        {"Your request goes to Ramp Router first. We’ll authenticate the request and help you track the usage, model, provider, and cost. We’ll route eligible requests to a more cost-efficient tier when it won't affect quality. See our "}
        <a className={linkClass} href="https://docs.router.com/strategies" tabIndex={-1}>
          Router Strategies
        </a>
        {" to save even more."}
      </span>
    ),
  },
  {
    question: "What models do you support?",
    answer: (
      <span>
        {"Router supports the latest models from OpenAI, Anthropic, and other providers, including select open-source models, including Kimi. We regularly add support for new models as they become available. See the full list of supported models "}
        <a className={linkClass} href="https://docs.router.com/supported-models">
          here
        </a>
        {"."}
      </span>
    ),
  },
  {
    question: "How much does it cost?",
    answer: (
      <span>
        {"Ramp Router is free through 2026. You’ll pay list price for the tokens you use. To mark free routing through 2026, your first $26 in credits are on us. "}
        <a
          className={linkClass}
          href="https://ramp.com/legal/developer-terms/developer-terms/router-terms-of-service"
        >
          Subject to offer terms
        </a>
        {"."}
      </span>
    ),
  },
  {
    question: "Aren’t there already LLM routers?",
    answer: (
      <>
        <p>{"There are, and they helped prove people want one endpoint for every model."}</p>
        <p>
          {"What’s different here: Ramp has spent the last three years running and improving this technology on our own production workloads, cutting our customers’ AI costs by 40%. Saving businesses time and money is what Ramp does, so we built Router to give developers the tools Ramp used to lower its own AI costs."}
        </p>
        <p>
          {"With "}
          <a className={linkClass} href="https://docs.router.com/strategies">
            Router Strategies
          </a>
          {", developers can define cost and performance priorities for different types of requests, or start with Ramp’s benchmarked defaults."}
        </p>
        <p>
          {"Router is free through 2026. You’ll only pay list price for the tokens you use, and your first $26 in credits are on us. "}
          <a
            className={linkClass}
            href="https://ramp.com/legal/developer-terms/developer-terms/router-terms-of-service"
          >
            Subject to offer terms
          </a>
          {"."}
        </p>
      </>
    ),
  },
  {
    question: "What's the difference between using Router and going direct with a provider?",
    answer: (
      <>
        <p>
          {"Going direct ties your application to one provider’s models, pricing, and release cycle. With Router, you connect once and use eligible models through a single endpoint."}
        </p>
        <p>
          {"Use "}
          <a className={linkClass} href="https://docs.router.com/strategies">
            Router Strategies
          </a>
          {" to set how Router balances cost and performance for different types of requests, or start with Ramp’s benchmarked defaults. See our "}
          <a className={linkClass} href="https://docs.router.com/strategies">
            Strategies documentation
          </a>
          {" to learn more."}
        </p>
      </>
    ),
  },
  {
    question: "Who should use this?",
    answer: (
      <span>
        {"Router is for individual developers and teams in the U.S. (with more countries coming soon) who want to get more from AI without overpaying for it. Whether you’re testing an idea on your own or building for a team, Router gives you one place to work across supported models. Enterprise features are coming soon."}
      </span>
    ),
  },
  {
    question: "Do I need to be a Ramp customer?",
    answer: (
      <span>
        {"No. You don’t need a Ramp card, a company account, or even an LLC. Router is free through 2026. To mark the occasion, your first $26 in credits are on us. Enter your email at router.com and we’ll send you a sign-in link. Getting started takes two lines of code."}
      </span>
    ),
  },
  {
    question: "Do I have to rewrite my code to use this?",
    answer: (
      <span>
        {"No. Ramp Router has an OpenAI and Anthropic compatible API, so if you’re already using the OpenAI or Anthropic SDKs or another compatible framework (which is basically all of them!), switching should be a one-line change: update your base URL to Ramp Router’s endpoint."}
      </span>
    ),
  },
  {
    question: "How does Router handle my data, credentials, and retention?",
    answer: (
      <>
        <p>
          {"Please see the "}
          <a
            className={linkClass}
            href="https://ramp.com/legal/privacy-terms/privacy-terms/router-privacy-notice"
          >
            Ramp Router Privacy Policy
          </a>
          {" for information on how Ramp manages personal information."}
        </p>
        <p>
          {"Users can choose to use U.S.-hosted models that provide zero data retention (ZDR). Router itself stores model inputs, outputs, and metadata and uses this data to improve the service, but users can control some of this settings. Some frontier models have "}
          <a
            className={linkClass}
            href="https://ramp.com/legal/other-terms/other-terms/provider-schedule/"
          >
            provider-specific data retention
          </a>
          {" policies - "}
          <a
            className={linkClass}
            href="https://ramp.com/legal/developer-terms/developer-terms/router-terms-of-service#6-third-party-providers-and-provider-terms"
          >
            see our terms here
          </a>
          {"."}
        </p>
      </>
    ),
  },
  {
    question: "Does Router support bring-your-own API keys (BYOK)?",
    answer: (
      <span>
        {"Yes. Router supports bring-your-own API keys (BYOK) for select model providers. See our "}
        <a className={linkClass} href="https://docs.router.com/guides/bring-your-own-key">
          technical documentation
        </a>
        {" for more details."}
      </span>
    ),
  },
  {
    question: "Where are the models hosted?",
    answer: (
      <span>
        {"Ramp Router uses models hosted on U.S.-based infrastructure by their underlying model providers. See our "}
        <a className={linkClass} href="https://docs.router.com/api/supported-models">
          technical documentation
        </a>
        {" for more details."}
      </span>
    ),
  },
  {
    question: "What happens if a provider has an outage or rate-limits me?",
    answer: (
      <span>
        {"If a provider goes down or rate-limits you, Ramp Router can route eligible requests to another available model, so your app has a fallback when one provider cannot serve it."}
      </span>
    ),
  },
  {
    question: "Can I compare models side by side?",
    answer: (
      <span>
        {"Yes. Give two models the same prompt and compare their responses, latency, and quality side by side. It’s a quick way to test models before integrating one into your product."}
      </span>
    ),
  },
];

export function FaqSection() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="pt-[60px] pb-16 lg:py-0">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16">
        <h2
          id="faq-heading"
          className="mb-9 text-[28px] leading-7 tracking-[-0.14px] text-ink lg:mb-[58px] lg:text-[40px] lg:leading-[40px] lg:tracking-[-0.2px]"
        >
          FAQ
        </h2>
        <div className="text-base max-lg:[&_button]:gap-8 max-lg:[&_button]:py-3 max-lg:[&_button]:text-[15px] max-lg:[&_button]:leading-5 max-lg:[&_button>div]:p-0">
          <div className="border-b border-primary border-t" data-orientation="vertical">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              const state = isOpen ? "open" : "closed";
              const triggerId = `${uid}-trigger-${index}`;
              const contentId = `${uid}-content-${index}`;
              return (
                <div
                  key={item.question}
                  data-state={state}
                  data-orientation="vertical"
                  className="border-t border-primary first:border-t-0"
                >
                  <h3 data-orientation="vertical" data-state={state} className="flex">
                    <button
                      type="button"
                      aria-controls={contentId}
                      aria-expanded={isOpen}
                      data-state={state}
                      data-orientation="vertical"
                      id={triggerId}
                      className="flex flex-1 items-center justify-between text-balance px-0 py-4 text-start text-primary transition-all [&[data-state=open]>div>svg]:rotate-180"
                      onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                    >
                      {item.question}
                      <div className="rounded-lg p-2">
                        <ChevronDown24 className="box-content block size-5 shrink-0 transition-transform duration-150" />
                      </div>
                    </button>
                  </h3>
                  <div className="grid transition-[grid-template-rows] duration-200 [[data-state=closed]_&]:grid-rows-[0fr] [[data-state=open]_&]:grid-rows-[1fr]">
                    <div
                      data-state={state}
                      id={contentId}
                      role="region"
                      aria-labelledby={triggerId}
                      data-orientation="vertical"
                      className="overflow-hidden text-hushed"
                    >
                      <div className="max-w-full space-y-2 text-balance pb-4 pt-0 lg:max-w-[62.5%]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
