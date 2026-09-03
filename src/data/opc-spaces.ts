// 全国 OPC 空间目录 — 数据均来自公开报道/政府公告，摘要为本站整理。
// 更新时间：2026-09

export interface OpcSpace {
  name: string;
  /** 省/直辖市 */
  region: string;
  /** 城市 · 区 */
  location: string;
  /** 认证/背书情况 */
  certification?: string;
  /** 授牌或发布时间 */
  since?: string;
  intro: string;
  /** 信息来源 */
  sourceUrl: string;
  sourceLabel: string;
  /** 本站 */
  isSelf?: boolean;
}

export interface SpaceRegionGroup {
  region: string;
  anchor: string;
  spaces: OpcSpace[];
}

const BEIJING: OpcSpace[] = [
  {
    name: "艾窝窝OPC社区（AI WOWO）",
    region: "北京",
    location: "北京 · 朝阳区",
    certification: "北京市OPC认证社区 · 国际化/数字经济双认证孵化器",
    since: "2026",
    intro:
      "源于易得创新中心十六年积累，服务超2000家中外企业，运营面积约20000㎡。孵化中外OPC，提供注册孵化、蹲窝儿AI任务撮合、FDE培训与企业基础服务。",
    sourceUrl: "#contact",
    sourceLabel: "本站",
    isSelf: true,
  },
  {
    name: "中关村AI北纬社区",
    region: "北京",
    location: "北京 · 海淀区",
    certification: "北京首个人工智能OPC服务计划发布方",
    since: "2025-12",
    intro:
      "2025年12月8日发布人工智能OPC服务计划，以约6000㎡孵化空间为载体，提出“1个超级服务器＋4大赋能支柱＋3段加速引擎”的服务体系，围绕空间、服务、工具、生态提供支持。",
    sourceUrl:
      "https://zyk.bjhd.gov.cn/jbdt/auto4510_51816/auto4510_54705/auto4510/auto4510/202512/t20251210_4796726_hd.shtml",
    sourceLabel: "海淀区政府",
  },
  {
    name: "模数OPC社区",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro:
      "北京经开区2026年7月首批授牌的8家OPC社区之一，由WaytoAGI等共建，面向AI超级个体提供孵化与社区服务。",
    sourceUrl: "https://news.bjd.com.cn/2026/07/21/11878445.shtml",
    sourceLabel: "京报网",
  },
  {
    name: "亦智谷OPC社区",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro: "北京经开区首批OPC社区认证载体之一，服务AI方向一人公司创业者。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
  {
    name: "启迪大街亦庄人工智能联合创新中心",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro: "启迪系孵化载体，经开区首批OPC社区认证之一，聚焦人工智能联合创新。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
  {
    name: "前沿科技创新港金种子科技企业孵化器",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro: "经开区首批OPC社区认证载体之一，面向前沿科技团队与超级个体提供孵化服务。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
  {
    name: "AI未来电影研究院",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro: "经开区首批OPC社区认证之一，聚焦AI影视与内容创制方向的超级个体。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
  {
    name: "大族启航孵化器",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro: "大族系孵化载体，经开区首批OPC社区认证之一。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
  {
    name: "中国（北京）高新视听产业园OPC社区",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro: "经开区首批OPC社区认证之一，依托高新视听产业园服务视听方向OPC。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
  {
    name: "国际AI科创人才培养中心",
    region: "北京",
    location: "北京 · 经开区",
    certification: "经开区首批OPC社区认证",
    since: "2026-07",
    intro: "经开区首批OPC社区认证之一，侧重国际化AI科创人才培养与孵化。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
];

const JIANGSU: OpcSpace[] = [
  {
    name: "苏州工业园区「人工智能OPC服务专区」",
    region: "江苏",
    location: "苏州 · 工业园区",
    certification: "园区一网通办平台官方专区",
    since: "2025-12",
    intro:
      "苏州工业园区在一网通办平台上线的OPC线上服务专区，设智慧创空间、政策匹配、创业服务、AI集市四大模块，与线下创业社区联动。",
    sourceUrl:
      "https://www.suzhou.gov.cn/szsrmzf/szyw/202512/1ed059a1a1e044bca21f8ea5a0dc3054.shtml",
    sourceLabel: "苏州市政府",
  },
];

export const SPACE_GROUPS: SpaceRegionGroup[] = [
  { region: "北京", anchor: "beijing", spaces: BEIJING },
  { region: "江苏", anchor: "jiangsu", spaces: JIANGSU },
];

export const SPACE_TOTAL = SPACE_GROUPS.reduce(
  (sum, group) => sum + group.spaces.length,
  0,
);
