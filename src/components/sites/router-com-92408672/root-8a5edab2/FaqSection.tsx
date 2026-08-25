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
    question: "什么是OPC（一人公司）？",
    answer: (
      <span>
        {"OPC（One Person Company，超级经济个体）是AI时代的超级个体——一人或少数人借助AI工具，独立完成从研发到运营的全链条工作，轻量化、强技术，\u201c一人成军\u201d。智能体开发、AIGC产品创制、大模型微调、AI行业落地应用，都是政策重点扶持的方向。"}
      </span>
    ),
  },
  {
    question: "艾窝窝是谁？",
    answer: (
      <span>
        {"艾窝窝（AI WOWO）源于易得创新中心十六年积累——服务超2000家中外企业，运营面积约20000㎡，是北京市唯一获\u201c国际化\u201d与\u201c数字经济\u201d双认证的孵化器平台，2026年创立品牌并获北京市OPC认证社区。名字取自北京传统小吃\u201c艾窝窝\u201d——扎根本土，扎实做事。"}
      </span>
    ),
  },
  {
    question: "注册一家一人公司要多少钱、多久？",
    answer: (
      <span>
        {"1元注册，最快1个工作日拿照。我们提供从注册登记、政策补贴对接到财税合规的全程陪跑。"}
      </span>
    ),
  },
  {
    question: "入驻能拿到哪些政策补贴？",
    answer: (
      <span>
        {"依据北京市经信局《支持人工智能OPC创新发展行动方案（试行）》（京经信发〔2026〕34号，2026年6月起实施，八条措施支持\u201c一人成军\u201d）：入驻企业可免费享受3个月Token券等全栈资源包，Token券、算力券、数据券合计最高10万元/企业；社区年度补贴最高200万元；算力补贴最高1000万元；数据沙盒费用减免50%。具体以官方文件和当期申报口径为准。"}
      </span>
    ),
  },
  {
    question: "税收有什么优惠？",
    answer: (
      <span>
        {"企业所得税低至2.5%，增值税免征（以当期官方政策口径为准）。还有OPC贷专属信贷、路演最高1000万元资金支持等金融配套。"}
      </span>
    ),
  },
  {
    question: "蹲窝儿是什么？",
    answer: (
      <span>
        {"蹲窝儿是我们的AI任务撮合平台：企业发榜、多个AI Agent竞标、AI评审按品类Rubric打分排序、看分数选作品、选中的才付款。已在小红书种草、技术长文等品类跑通——14+测试任务、最高评分9.2/10、3个Agent并行竞标。"}
      </span>
    ),
  },
  {
    question: "FDE培训体系是什么？",
    answer: (
      <span>
        {"自研FDE（Foundation-Deployment-Empowerment）三层企业AI培训体系，依托清华继续教育学院等渠道，从认知到落地，覆盖央国企、园区企业和创业者。学员毕业后可接入蹲窝儿平台接单。"}
      </span>
    ),
  },
  {
    question: "我不做AI业务，也能入驻吗？",
    answer: (
      <span>
        {"可以。企业基础服务覆盖工商财税、资质许可、办公空间、法律咨询——16年企业服务经验，中小企业都可使用，让你少走弯路。"}
      </span>
    ),
  },
  {
    question: "入驻能获得哪些AI资源？",
    answer: (
      <span>
        {"入驻OPC可申领WorkBuddy专属账号，每月免费获4000通用算力积分，覆盖文创、办公、开发全场景；同时对接腾讯云、中国移动移动云生态资源。"}
      </span>
    ),
  },
  {
    question: "海外或跨境业务有支持吗？",
    answer: (
      <span>
        {"有。我们是\u201c国际化\u201d认证孵化器，服务2000+中外企业，孵化中外OPC双向出海，提供跨境电商培训（含俄罗斯等海外市场）与跨境资源对接。"}
      </span>
    ),
  },
  {
    question: "如何申请入驻？",
    answer: (
      <span>
        {"发邮件至 "}
        <a className={linkClass} href="mailto:AIWOWO@agent.qq.com">
          AIWOWO@agent.qq.com
        </a>
        {"，或致电 13701202210，也可以通过页面底部的表单留言。2026–2028是OPC政策红利期，越早入场越有优势。"}
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
          className="mb-9 text-[28px] leading-7 tracking-[0.03em] text-ink lg:mb-[58px] lg:text-[40px] lg:leading-[40px] lg:tracking-[0.04em]"
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
