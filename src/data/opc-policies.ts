// 全国 OPC 政策库 — 条目均来自政府官网/权威媒体公开信息；
// 要点为本站整理概述，解读为本站观点，仅供参考，以官方文件为准。
// 更新时间：2026-09

export interface OpcPolicy {
  title: string;
  /** 层级：国家 / 直辖市·省 / 区县·园区 */
  level: "国家" | "省市" | "区县园区";
  region: string;
  issuer: string;
  docNo?: string;
  date: string;
  /** 要点（本站概述） */
  points: string[];
  /** 本站解读（原创观点，仅供参考） */
  commentary: string;
  sourceUrl: string;
  sourceLabel: string;
}

export const POLICIES: OpcPolicy[] = [
  {
    title: "OPC 被写入多地“十五五”规划",
    level: "国家",
    region: "全国",
    issuer: "国家发展改革委（转载评述）",
    date: "2026-05",
    points: [
      "OPC（一人公司/超级经济个体）作为新型创新主体，被多地写入“十五五”规划相关表述",
      "北京、上海、深圳、杭州、苏州等地多个城区已出台OPC专项扶持政策",
    ],
    commentary:
      "从“个体户/自由职业”到“OPC”，官方话语的升级意味着一人公司被正式纳入创新主体序列——这是判断赛道确定性的最强信号。",
    sourceUrl: "https://www.ndrc.gov.cn/wsdwhfz/202605/t20260515_1405211.html",
    sourceLabel: "国家发展改革委",
  },
  {
    title: "《支持人工智能OPC创新发展行动方案（试行）》",
    level: "省市",
    region: "北京",
    issuer: "北京市经济和信息化局",
    docNo: "京经信发〔2026〕34号",
    date: "2026-06-18",
    points: [
      "八条措施支持“一人成军”：创业开办、成长社区、算力、融资、赛事、人才、合规等一揽子支持",
      "OPC社区最高可获200万元/年资金支持；算力补贴最高1000万元/年",
      "入驻企业可免费享3个月Token券等全栈资源包；数据沙盒费用减免50%",
      "年内培育不少于10家OPC社区、服务500家以上主体（“1231”资源支持）",
      "重点方向：智能体开发、AIGC产品创制、大模型微调、AI行业落地应用",
    ],
    commentary:
      "全国首个市级OPC专项方案，也是艾窝窝所依托的核心政策。补贴走“社区”通道发放——选对认证社区，比单打独斗申报效率高得多。",
    sourceUrl:
      "https://jxj.beijing.gov.cn/zwgk/2024zcwj/202606/t20260618_4706233.html",
    sourceLabel: "北京市经信局",
  },
  {
    title: "中关村AI北纬社区「人工智能OPC服务计划」",
    level: "区县园区",
    region: "北京 · 海淀",
    issuer: "中关村AI北纬社区",
    date: "2025-12-08",
    points: [
      "北京首个人工智能OPC服务计划",
      "以约6000㎡孵化空间为载体，提供办公空间、一站式公共服务、AI工具平台与路演机会",
      "“1个超级服务器＋4大赋能支柱＋3段加速引擎”服务体系",
    ],
    commentary:
      "在市级34号文出台前半年先行先试，验证了“空间+工具+生态”的OPC服务模型，可视为北京OPC社区形态的样板间。",
    sourceUrl:
      "https://zyk.bjhd.gov.cn/jbdt/auto4510_51816/auto4510_54705/auto4510/auto4510/202512/t20251210_4796726_hd.shtml",
    sourceLabel: "海淀区政府",
  },
  {
    title: "亦城人才·人工智能超级个体（OPC）认定 + 首批8家OPC社区授牌",
    level: "区县园区",
    region: "北京 · 经开区",
    issuer: "北京经开区工委组织人事部 / 经开区管委会",
    date: "2026-07",
    points: [
      "面向AI超级个体开展“亦城人才”专项认定申报",
      "2026年7月14日为首批8家孵化载体集中授予OPC社区认证",
      "全域布局AI超级个体创新生态",
    ],
    commentary:
      "经开区把OPC纳入人才认定体系——身份、空间、政策三件事一次打通，是目前区级落地动作最快的样本。",
    sourceUrl:
      "https://kfqgw.beijing.gov.cn/zwgkkfq/ztzl/lqztkfq/lqzx/zsdt/202607/t20260716_4765989.html",
    sourceLabel: "北京经开区管委会",
  },
  {
    title: "「超级个体288行动」+《推动OPC发展行动方案》",
    level: "省市",
    region: "上海",
    issuer: "上海市相关部门",
    date: "2025-08",
    points: [
      "优秀OPC最高10万元启动资金",
      "最高100万元算力券＋模型券＋语料券",
      "人才租房补贴每月最高2000元、最长3年",
      "截至2026年4月，全市OPC已近千家",
    ],
    commentary:
      "上海路线偏“真金白银+人才安居”，适合已有产品雏形、准备规模化的OPC；与北京的“社区通道”模式形成互补。",
    sourceUrl: "https://m.caixin.com/m/2026-02-14/102414613.html",
    sourceLabel: "财新",
  },
  {
    title: "《深圳市打造人工智能OPC创业生态引领地行动计划（2026—2027年）》",
    level: "省市",
    region: "深圳",
    issuer: "深圳市相关部门",
    date: "2026",
    points: [
      "提出构建产业集聚、创新活跃的人工智能OPC创业生态",
      "各城区配套推进“一人公司”培育与服务",
    ],
    commentary:
      "深圳强在硬件供应链与出海通道，做AI硬件或跨境方向的OPC值得重点关注其城区级配套细则。",
    sourceUrl:
      "https://fgw.sz.gov.cn/ztzl/qtztzl/szscjmyjjfzzhfwpt/xwdt/mqfw/content/post_12641496.html",
    sourceLabel: "深圳市发展改革委",
  },
  {
    title: "「AI+OPC」创业新高地行动计划（2026—2028）",
    level: "省市",
    region: "杭州",
    issuer: "杭州市相关部门",
    date: "2026",
    points: ["市级层面推动“AI+OPC”创业新高地建设，覆盖2026—2028三年周期"],
    commentary:
      "杭州依托电商与内容生态，天然适合AIGC内容与电商工具类OPC；三年期计划意味着窗口期与北京基本同步。",
    sourceUrl: "https://m.caixin.com/m/2026-02-14/102414613.html",
    sourceLabel: "财新",
  },
  {
    title: "《苏州市人工智能OPC培育发展行动计划（2025—2028）》",
    level: "省市",
    region: "苏州",
    issuer: "苏州市相关部门",
    date: "2025-11-11",
    points: [
      "算力补贴、免费工位、工具与数据支持等专项政策",
      "到2028年：建设50个创业社区、集成100款工具与400个行业数据集、支持1000家AI企业、吸引1万名创业者",
      "苏州工业园区配套上线“人工智能OPC服务专区”",
    ],
    commentary:
      "苏州给出了全国最具体的量化目标（50社区/1000企业/万人），指标导向意味着后续资源投放力度可预期。",
    sourceUrl:
      "https://www.sipac.gov.cn/szgyyq/dthg202511/202511/981072392d0c417ab460af65ed3b2495.shtml",
    sourceLabel: "苏州工业园区管委会",
  },
];

export const POLICY_TOTAL = POLICIES.length;

export const POLICY_REGIONS = [...new Set(POLICIES.map((p) => p.region))];
