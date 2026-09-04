/**
 * FAQ 数据(纯文本)。首页 FAQ 折叠面板、首页 Markdown 版、llms-full.txt、
 * FAQPage 结构化数据和 MCP 的 search_faq 工具都从这里取,保证问答只维护一份。
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "什么是OPC（一人公司）？",
    answer:
      "OPC（One Person Company，超级经济个体）是AI时代的超级个体——一人或少数人借助AI工具，独立完成从研发到运营的全链条工作，轻量化、强技术，“一人成军”。智能体开发、AIGC产品创制、大模型微调、AI行业落地应用，都是政策重点扶持的方向。",
  },
  {
    question: "艾窝窝是谁？",
    answer:
      "艾窝窝（AI WOWO）源于易得创新中心十六年积累——服务超2000家中外企业，运营面积约20000㎡，是北京市唯一获“国际化”与“数字经济”双认证的孵化器平台，2026年创立品牌并获北京市OPC认证社区。名字取自北京传统小吃“艾窝窝”——扎根本土，扎实做事。",
  },
  {
    question: "注册一家一人公司要多少钱、多久？",
    answer: "1元注册，最快1个工作日拿照。我们提供从注册登记、政策补贴对接到财税合规的全程陪跑。",
  },
  {
    question: "入驻能拿到哪些政策补贴？",
    answer:
      "依据北京市经信局《支持人工智能OPC创新发展行动方案（试行）》（京经信发〔2026〕34号，2026年6月起实施，八条措施支持“一人成军”）：入驻企业可免费享受3个月Token券等全栈资源包，Token券、算力券、数据券合计最高10万元/企业；社区年度补贴最高200万元；算力补贴最高1000万元；数据沙盒费用减免50%。具体以官方文件和当期申报口径为准。",
  },
  {
    question: "税收有什么优惠？",
    answer:
      "企业所得税低至2.5%，增值税免征（以当期官方政策口径为准）。还有OPC贷专属信贷、路演最高1000万元资金支持等金融配套。",
  },
  {
    question: "蹲窝儿是什么？",
    answer:
      "蹲窝儿是我们的AI任务撮合平台：企业发榜、多个AI Agent竞标、AI评审按品类Rubric打分排序、看分数选作品、选中的才付款。已在小红书种草、技术长文等品类跑通——14+测试任务、最高评分9.2/10、3个Agent并行竞标。",
  },
  {
    question: "FDE培训体系是什么？",
    answer:
      "自研FDE（Foundation-Deployment-Empowerment）三层企业AI培训体系，依托清华继续教育学院等渠道，从认知到落地，覆盖央国企、园区企业和创业者。学员毕业后可接入蹲窝儿平台接单。",
  },
  {
    question: "我不做AI业务，也能入驻吗？",
    answer:
      "可以。企业基础服务覆盖工商财税、资质许可、办公空间、法律咨询——16年企业服务经验，中小企业都可使用，让你少走弯路。",
  },
  {
    question: "入驻能获得哪些AI资源？",
    answer:
      "入驻OPC可申领WorkBuddy专属账号，每月免费获4000通用算力积分，覆盖文创、办公、开发全场景；同时对接腾讯云、中国移动移动云生态资源。",
  },
  {
    question: "海外或跨境业务有支持吗？",
    answer:
      "有。我们是“国际化”认证孵化器，服务2000+中外企业，孵化中外OPC双向出海，提供跨境电商培训（含俄罗斯等海外市场）与跨境资源对接。",
  },
  {
    question: "如何申请入驻？",
    answer:
      "发邮件至 AIWOWO@agent.qq.com，或致电 13701202210，也可以通过页面底部的表单留言。2026–2028是OPC政策红利期，越早入场越有优势。",
  },
];

/** 简单的关键词检索:按命中关键词个数排序,供 MCP search_faq 工具使用。 */
export function searchFaq(query: string, limit = 3): FaqItem[] {
  const terms = query
    .toLowerCase()
    .split(/[\s,，。、;；]+/)
    .filter((term) => term.length > 0);
  if (terms.length === 0) return FAQ_ITEMS.slice(0, limit);
  const scored = FAQ_ITEMS.map((item) => {
    const haystack = `${item.question} ${item.answer}`.toLowerCase();
    const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
    return { item, score };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((entry) => entry.item);
}
