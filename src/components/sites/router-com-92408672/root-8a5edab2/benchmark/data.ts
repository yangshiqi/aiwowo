// Data extracted verbatim from router.com benchmark section reference DOM
// (docs/research/router-com-92408672/root-8a5edab2/sections/06-a-benchmark-built-from-real-.html).
// Every number below comes from that capture - do not edit by hand.

export type BenchmarkTabId = "score" | "distributions" | "summary";

export interface ScatterPoint {
  /** inline left % on the absolutely positioned marker */
  left: string;
  /** inline top % on the absolutely positioned marker */
  top: string;
  /** inner logo span width % */
  logoWidth: string;
  /** natural logo dimensions (drive aspect-ratio + img width/height) */
  w: number;
  h: number;
  src: string;
}

export const SCATTER_POINTS: ScatterPoint[] = [
  { left: "88.1605%", top: "4.1355%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "64.6092%", top: "4.1355%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "57.3056%", top: "6.592%", logoWidth: "63.1579%", w: 24, h: 25, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/moonshot.svg" },
  { left: "77.4573%", top: "13.9615%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "64.3205%", top: "13.9615%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg" },
  { left: "38.8279%", top: "13.9615%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg" },
  { left: "64.6213%", top: "16.418%", logoWidth: "50.0000%", w: 19, h: 19, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/zai.png" },
  { left: "41.7171%", top: "16.418%", logoWidth: "50.0000%", w: 19, h: 21, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/xai.svg" },
  { left: "35.407%", top: "18.8745%", logoWidth: "63.1579%", w: 24, h: 25, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/moonshot.svg" },
  { left: "51.6912%", top: "18.8745%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "12.2749%", top: "21.331%", logoWidth: "73.6842%", w: 28, h: 22, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/deepseek.svg" },
  { left: "41.7262%", top: "23.7875%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "16.5981%", top: "26.244%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg" },
  { left: "44.9496%", top: "28.7005%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "28.149%", top: "31.157%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg" },
  { left: "39.9246%", top: "31.157%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/gemini.svg" },
  { left: "10.0085%", top: "31.157%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg" },
  { left: "30.704%", top: "33.6135%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "29.7926%", top: "33.6135%", logoWidth: "63.1579%", w: 24, h: 25, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/moonshot.svg" },
  { left: "41.9571%", top: "36.7719%", logoWidth: "50.0000%", w: 19, h: 19, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/zai.png" },
  { left: "17.4397%", top: "45.896%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/qwen.svg" },
  { left: "33.2742%", top: "48.3525%", logoWidth: "73.6842%", w: 28, h: 22, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/deepseek.svg" },
  { left: "13.3869%", top: "53.2655%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/qwen.svg" },
  { left: "15.474%", top: "58.1785%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg" },
  { left: "23.5858%", top: "77.8306%", logoWidth: "68.4211%", w: 26, h: 27, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg" },
  { left: "11.4759%", top: "77.8306%", logoWidth: "68.4211%", w: 26, h: 26, src: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg" },
];

export interface FilterModel {
  id: string;
  name: string;
}

export const FILTER_MODELS: FilterModel[] = [
  { id: "anthropic/claude-fable-5-xhigh", name: "Claude Fable 5" },
  { id: "anthropic/claude-opus-5-high", name: "Claude Opus 5" },
  { id: "fireworks_ai/kimi-k3-high", name: "Kimi K3" },
  { id: "anthropic/claude-opus-4-7-xhigh", name: "Claude Opus 4.7" },
  { id: "openai/gpt-5.5-high", name: "GPT-5.5" },
  { id: "openai/gpt-5.6-sol-high", name: "GPT-5.6 Sol" },
  { id: "fireworks_ai/glm-5p2-high", name: "GLM 5.2" },
  { id: "xai/grok-4.5", name: "Grok 4.5" },
  { id: "fireworks_ai/kimi-k2p7-code-high", name: "Kimi K2.7 Code" },
  { id: "anthropic/claude-opus-4-6-high", name: "Claude Opus 4.6" },
  { id: "fireworks_ai/deepseek-v4-flash-0731-high", name: "DeepSeek V4 Flash" },
  { id: "anthropic/claude-opus-4-8-xhigh", name: "Claude Opus 4.8" },
  { id: "openai/gpt-5.6-terra-high", name: "GPT-5.6 Terra" },
  { id: "anthropic/claude-sonnet-5-medium", name: "Claude Sonnet 5" },
  { id: "openai/gpt-5.4-high", name: "GPT-5.4" },
  { id: "vertex_ai/gemini-3.1-pro-preview-high", name: "Gemini 3.1 Pro" },
  { id: "openai/gpt-5.6-luna-high", name: "GPT-5.6 Luna" },
  { id: "anthropic/claude-sonnet-4-6-medium", name: "Claude Sonnet 4.6" },
  { id: "fireworks_ai/kimi-k2p6-high", name: "Kimi K2.6" },
  { id: "fireworks_ai/glm-5p1-high", name: "GLM 5.1" },
  { id: "fireworks_ai/qwen3p6-plus-high", name: "Qwen3.6 Plus" },
  { id: "fireworks_ai/deepseek-v4-pro-high", name: "DeepSeek V4 Pro" },
  { id: "fireworks_ai/qwen3p7-plus-high", name: "Qwen3.7 Plus" },
  { id: "openai/gpt-5.4-mini-high", name: "GPT-5.4 Mini" },
  { id: "anthropic/claude-haiku-4-5-high", name: "Claude Haiku 4.5" },
  { id: "openai/gpt-5.4-nano-medium", name: "GPT-5.4 Nano" },
];

export interface SummaryColumn {
  label: string;
  barColor: string;
}

export const SUMMARY_COLUMNS: SummaryColumn[] = [
  { label: "轮次", barColor: "#8a7f3d" },
  { label: "轮次/分钟", barColor: "#a9c3a2" },
  { label: "输入Token", barColor: "#5f8079" },
  { label: "输出Token", barColor: "#e0aebc" },
  { label: "输出/轮", barColor: "#8b6f9e" },
  { label: "成本", barColor: "#4a9455" },
];

export interface SummaryRow {
  model: string;
  logo: string;
  logoW: number;
  logoH: number;
  /** one per SUMMARY_COLUMNS entry: [value, barWidth%] */
  cells: Array<{ value: string; barWidth: string }>;
}

export const SUMMARY_ROWS: SummaryRow[] = [
  { model: "GPT-5.4", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg", logoW: 26, logoH: 26, cells: [{ value: "28", barWidth: "26.48183556405354%" }, { value: "2.3", barWidth: "33.8235294117647%" }, { value: "747K", barWidth: "18.653985865696136%" }, { value: "22K", barWidth: "48.24998278177623%" }, { value: "735", barWidth: "55.47583081570997%" }, { value: "¥4.5", barWidth: "24.462715105162523%" }] },
  { model: "GPT-5.6 Terra", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg", logoW: 26, logoH: 26, cells: [{ value: "29", barWidth: "27.62906309751434%" }, { value: "2.3", barWidth: "33.8235294117647%" }, { value: "455K", barWidth: "11.360646596434846%" }, { value: "9K", barWidth: "18.519275801508318%" }, { value: "301", barWidth: "22.764350453172202%" }, { value: "¥1.8", barWidth: "9.923518164435945%" }] },
  { model: "GPT-5.4 Mini", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg", logoW: 26, logoH: 26, cells: [{ value: "29", barWidth: "27.820267686424476%" }, { value: "2.6", barWidth: "38.235294117647065%" }, { value: "822K", barWidth: "20.538255756551006%" }, { value: "43K", barWidth: "92.88758221701849%" }, { value: "1324", barWidth: "100%" }, { value: "¥1.5", barWidth: "8.508604206500955%" }] },
  { model: "GPT-5.6 Luna", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg", logoW: 26, logoH: 26, cells: [{ value: "36", barWidth: "34.60803059273423%" }, { value: "3.0", barWidth: "44.11764705882353%" }, { value: "892K", barWidth: "22.28035067943391%" }, { value: "12K", barWidth: "25.761691173938495%" }, { value: "323", barWidth: "24.42598187311178%" }, { value: "¥0.28", barWidth: "1.62906309751434%" }] },
  { model: "Claude Opus 4.8", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "39", barWidth: "37.5717017208413%" }, { value: "5.3", barWidth: "77.94117647058823%" }, { value: "984K", barWidth: "24.584007870600768%" }, { value: "13K", barWidth: "28.09153207755088%" }, { value: "313", barWidth: "23.602719033232628%" }, { value: "¥7.6", barWidth: "41.55258126195028%" }] },
  { model: "GPT-5.6 Sol", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg", logoW: 26, logoH: 26, cells: [{ value: "44", barWidth: "41.96940726577438%" }, { value: "3.0", barWidth: "44.11764705882353%" }, { value: "740K", barWidth: "18.485648844892403%" }, { value: "12K", barWidth: "25.332742174317296%" }, { value: "270", barWidth: "20.35498489425982%" }, { value: "¥6.9", barWidth: "37.90439770554493%" }] },
  { model: "Claude Sonnet 4.6", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "48", barWidth: "45.41108986615679%" }, { value: "4.6", barWidth: "67.6470588235294%" }, { value: "1.3M", barWidth: "32.72716666366872%" }, { value: "14K", barWidth: "30.635739867075312%" }, { value: "279", barWidth: "21.080060422960727%" }, { value: "¥5", barWidth: "27.678776290630974%" }] },
  { model: "Claude Fable 5", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "48", barWidth: "46.080305927342266%" }, { value: "3.0", barWidth: "44.11764705882353%" }, { value: "1.2M", barWidth: "29.104696678078838%" }, { value: "15K", barWidth: "32.70601604738455%" }, { value: "306", barWidth: "23.07401812688822%" }, { value: "¥18.3", barWidth: "100%" }] },
  { model: "Claude Sonnet 5", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "49", barWidth: "46.46271510516253%" }, { value: "2.4", barWidth: "35.294117647058826%" }, { value: "2.2M", barWidth: "55.70797183132371%" }, { value: "15K", barWidth: "33.093856537759564%" }, { value: "299", barWidth: "22.552870090634443%" }, { value: "¥8.3", barWidth: "45.60994263862332%" }] },
  { model: "Claude Opus 5", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "52", barWidth: "49.426386233269604%" }, { value: "1.9", barWidth: "27.941176470588236%" }, { value: "1.8M", barWidth: "46.15997425765925%" }, { value: "18K", barWidth: "38.22058266469231%" }, { value: "334", barWidth: "25.203927492447132%" }, { value: "¥12.9", barWidth: "70.35564053537284%" }] },
  { model: "GPT-5.5", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg", logoW: 26, logoH: 26, cells: [{ value: "52", barWidth: "50.09560229445506%" }, { value: "4.3", barWidth: "63.23529411764706%" }, { value: "1.5M", barWidth: "36.82182023132131%" }, { value: "32K", barWidth: "69.58293157477875%" }, { value: "629", barWidth: "47.5%" }, { value: "¥12.8", barWidth: "69.99235181644359%" }] },
  { model: "Qwen3.7 Plus", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/qwen.svg", logoW: 26, logoH: 26, cells: [{ value: "53", barWidth: "50.66921606118547%" }, { value: "4.9", barWidth: "72.05882352941177%" }, { value: "1.2M", barWidth: "29.182688175911327%" }, { value: "19K", barWidth: "41.23075863493922%" }, { value: "351", barWidth: "26.472809667673715%" }, { value: "¥1.1", barWidth: "5.881453154875716%" }] },
  { model: "Grok 4.5", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/xai.svg", logoW: 19, logoH: 21, cells: [{ value: "54", barWidth: "51.24282982791587%" }, { value: "2.3", barWidth: "33.8235294117647%" }, { value: "1.6M", barWidth: "40.01093999516332%" }, { value: "41K", barWidth: "87.46836151382624%" }, { value: "791", barWidth: "59.72809667673715%" }, { value: "¥7.6", barWidth: "41.541108986615676%" }] },
  { model: "GPT-5.4 Nano", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/openai.svg", logoW: 26, logoH: 26, cells: [{ value: "54", barWidth: "52.00764818355641%" }, { value: "4.4", barWidth: "64.70588235294117%" }, { value: "1.9M", barWidth: "46.37525407570406%" }, { value: "46K", barWidth: "100%" }, { value: "745", barWidth: "56.26888217522659%" }, { value: "¥0.63", barWidth: "3.476099426386233%" }] },
  { model: "DeepSeek V4 Pro", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/deepseek.svg", logoW: 28, logoH: 22, cells: [{ value: "55", barWidth: "52.103250478011475%" }, { value: "3.4", barWidth: "50%" }, { value: "1.4M", barWidth: "34.54481225879047%" }, { value: "13K", barWidth: "27.722201177726504%" }, { value: "236", barWidth: "17.78700906344411%" }, { value: "¥5.7", barWidth: "30.91395793499044%" }] },
  { model: "Gemini 3.1 Pro", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/gemini.svg", logoW: 26, logoH: 27, cells: [{ value: "55", barWidth: "52.58126195028681%" }, { value: "5.3", barWidth: "77.94117647058823%" }, { value: "1.4M", barWidth: "34.80813411999368%" }, { value: "19K", barWidth: "41.13971727676572%" }, { value: "353", barWidth: "26.661631419939575%" }, { value: "¥7.2", barWidth: "39.284894837476095%" }] },
  { model: "Claude Opus 4.6", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "57", barWidth: "54.39770554493308%" }, { value: "5.3", barWidth: "77.94117647058823%" }, { value: "1.6M", barWidth: "40.67596129055468%" }, { value: "11K", barWidth: "24.730750025827337%" }, { value: "196", barWidth: "14.826283987915408%" }, { value: "¥9.9", barWidth: "54.09560229445507%" }] },
  { model: "Claude Opus 4.7", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "71", barWidth: "68.06883365200765%" }, { value: "5.5", barWidth: "80.88235294117648%" }, { value: "2.8M", barWidth: "69.85904169739558%" }, { value: "18K", barWidth: "38.7386359723131%" }, { value: "259", barWidth: "19.539274924471297%" }, { value: "¥15.8", barWidth: "86.52772466539197%" }] },
  { model: "Claude Haiku 4.5", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/claude.svg", logoW: 26, logoH: 27, cells: [{ value: "72", barWidth: "68.54684512428298%" }, { value: "6.8", barWidth: "100%" }, { value: "2.6M", barWidth: "63.87224114257619%" }, { value: "15K", barWidth: "32.42578945555976%" }, { value: "221", barWidth: "16.71450151057402%" }, { value: "¥3.4", barWidth: "18.718929254302104%" }] },
  { model: "Kimi K2.7 Code", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/moonshot.svg", logoW: 24, logoH: 25, cells: [{ value: "77", barWidth: "73.23135755258126%" }, { value: "5.3", barWidth: "77.94117647058823%" }, { value: "2.5M", barWidth: "63.42849305376512%" }, { value: "20K", barWidth: "42.270308894934395%" }, { value: "260", barWidth: "19.652567975830813%" }, { value: "¥6.2", barWidth: "33.59847036328872%" }] },
  { model: "GLM 5.1", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/zai.png", logoW: 19, logoH: 19, cells: [{ value: "78", barWidth: "74.5697896749522%" }, { value: "3.9", barWidth: "57.35294117647059%" }, { value: "2.5M", barWidth: "62.35332312033945%" }, { value: "12K", barWidth: "25.221684631013463%" }, { value: "158", barWidth: "11.933534743202417%" }, { value: "¥7.6", barWidth: "41.84321223709369%" }] },
  { model: "Kimi K2.6", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/moonshot.svg", logoW: 24, logoH: 25, cells: [{ value: "81", barWidth: "77.82026768642449%" }, { value: "4.2", barWidth: "61.76470588235294%" }, { value: "2.8M", barWidth: "68.82835374932796%" }, { value: "19K", barWidth: "41.572755604531835%" }, { value: "243", barWidth: "18.345921450151057%" }, { value: "¥4.8", barWidth: "26.53154875717017%" }] },
  { model: "Kimi K3", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/moonshot.svg", logoW: 24, logoH: 25, cells: [{ value: "91", barWidth: "86.7112810707457%" }, { value: "2.0", barWidth: "29.411764705882355%" }, { value: "2.9M", barWidth: "71.36350963239218%" }, { value: "27K", barWidth: "57.070878818141125%" }, { value: "287", barWidth: "21.654078549848943%" }, { value: "¥11.2", barWidth: "61.1625239005736%" }] },
  { model: "DeepSeek V4 Flash", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/deepseek.svg", logoW: 28, logoH: 22, cells: [{ value: "92", barWidth: "88.33652007648185%" }, { value: "2.1", barWidth: "30.88235294117647%" }, { value: "3.3M", barWidth: "83.16491636737199%" }, { value: "27K", barWidth: "58.471366093873755%" }, { value: "296", barWidth: "22.36404833836858%" }, { value: "¥0.84", barWidth: "4.4818355640535374%" }] },
  { model: "GLM 5.2", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/zai.png", logoW: 19, logoH: 19, cells: [{ value: "96", barWidth: "92.16061185468453%" }, { value: "3.4", barWidth: "50%" }, { value: "3.8M", barWidth: "96.04679689732843%" }, { value: "34K", barWidth: "73.17874238093597%" }, { value: "338", barWidth: "25.528700906344408%" }, { value: "¥12.9", barWidth: "70.37093690248565%" }] },
  { model: "Qwen3.6 Plus", logo: "/sites/router-com-92408672/root-8a5edab2/images/benchmark/qwen.svg", logoW: 26, logoH: 26, cells: [{ value: "105", barWidth: "100%" }, { value: "6.1", barWidth: "89.70588235294117%" }, { value: "4.0M", barWidth: "100%" }, { value: "27K", barWidth: "57.076905196459926%" }, { value: "268", barWidth: "20.241691842900302%" }, { value: "¥2", barWidth: "10.982791586998088%" }] },
];
