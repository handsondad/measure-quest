/**
 * 单位大家庭：国际单位制的 7 个基本单位，用它们拼出来的单位，放大缩小它们的词头，
 * 还有今天还会碰到的老单位。这里是给「单位大家庭」和各单位档案卡用的资料，
 * 数字都按 BIPM《国际单位制》手册和我国法定计量单位核对过。
 */
import type { Source } from "./questions/types.ts";

export type BaseUnitId = "metre" | "kilogram" | "second" | "ampere" | "kelvin" | "mole" | "candela";

export type BaseUnit = {
  id: BaseUnitId;
  name: string;
  symbol: string;
  /** 量的是什么 */
  quantity: string;
  emoji: string;
  color: string;
  /** 小念一句话问、爸爸一句话答 */
  ask: string;
  answer: string;
  /** 身边的参照，让孩子摸得着这个单位有多大 */
  feel: readonly { icon: string; text: string }[];
  /** 这个单位家里常见的大大小小 */
  family: readonly { name: string; symbol: string; value: string }[];
  tools: readonly { icon: string; name: string; note: string }[];
  /** 定义是怎么一步步变的 */
  history: readonly { year: string; text: string }[];
  /** 给大人：今天的正式定义 */
  definition: string;
  /** 定住它的那个自然常数 */
  constant: string;
  namedAfter?: string;
  sources: readonly Source[];
};

const bipmBase: Source = { label: "BIPM：SI 基本单位", url: "https://www.bipm.org/en/measurement-units/si-base-units" };
const siBrochure: Source = { label: "BIPM：国际单位制手册（第 9 版）", url: "https://www.bipm.org/en/publications/si-brochure" };

export const baseUnits: readonly BaseUnit[] = [
  {
    id: "metre", name: "米", symbol: "m", quantity: "长度", emoji: "📏", color: "#4fb6ff",
    ask: "一米到底有多长？",
    answer: "你站直了，从脚底到肩膀差不多就是一米。今天的一米，是光在真空里跑 1/299792458 秒的路。",
    feel: [
      { icon: "📄", text: "1 毫米：大约 10 张纸叠起来那么厚" },
      { icon: "💅", text: "1 厘米：差不多是你小指甲盖那么宽" },
      { icon: "🧒", text: "1 米：从你的脚底到肩膀左右" },
      { icon: "🏃", text: "1 千米：在 400 米跑道上跑两圈半" },
      { icon: "💡", text: "光 1 秒钟能跑大约 30 万千米，绕地球七圈半" }
    ],
    family: [
      { name: "千米（公里）", symbol: "km", value: "1000 米" },
      { name: "米", symbol: "m", value: "基本单位" },
      { name: "分米", symbol: "dm", value: "1/10 米" },
      { name: "厘米", symbol: "cm", value: "1/100 米" },
      { name: "毫米", symbol: "mm", value: "1/1000 米" },
      { name: "微米", symbol: "μm", value: "1/1000 毫米" },
      { name: "纳米", symbol: "nm", value: "1/1000 微米" }
    ],
    tools: [
      { icon: "📏", name: "直尺", note: "量铅笔、课本" },
      { icon: "🎗️", name: "卷尺", note: "量身高、量家具" },
      { icon: "🔧", name: "游标卡尺", note: "工厂里量到 0.02 毫米" },
      { icon: "🔦", name: "激光测距仪", note: "按一下就知道房间多长" }
    ],
    history: [
      { year: "1791", text: "法国定下：从北极到赤道的千万分之一叫一米" },
      { year: "1799", text: "照测量结果做成铂金的“档案米”" },
      { year: "1889", text: "铂铱合金的国际米原器，发给各个签约国" },
      { year: "1960", text: "改用氪-86 原子发出的橙红色光来定" },
      { year: "1983", text: "改用光速：光在真空里 1/299792458 秒走的路" }
    ],
    definition: "米是光在真空中于 1/299 792 458 秒内行进的距离。2019 年起的正式表述：固定真空中光速 c 的数值为 299 792 458 m/s，秒由铯频率定义。",
    constant: "真空中的光速 c = 299 792 458 m/s",
    sources: [bipmBase, { label: "BIPM：米的历史", url: "https://www.bipm.org/en/si-base-units/metre" }]
  },
  {
    id: "kilogram", name: "千克", symbol: "kg", quantity: "质量", emoji: "⚖️", color: "#6fd39a",
    ask: "一千克有多重？",
    answer: "一升水差不多就是一千克，也就是我们常说的 2 斤。一盒 1 升的牛奶，拎起来就是这么沉。",
    feel: [
      { icon: "📎", text: "1 克：一枚回形针差不多这么重" },
      { icon: "🥚", text: "50 克：一个鸡蛋左右，也就是 1 两" },
      { icon: "🥛", text: "1 千克：一升水，也就是 2 斤" },
      { icon: "🚗", text: "1 吨 = 1000 千克：一辆小汽车大约 1 到 2 吨" }
    ],
    family: [
      { name: "吨", symbol: "t", value: "1000 千克" },
      { name: "千克（公斤）", symbol: "kg", value: "基本单位" },
      { name: "克", symbol: "g", value: "1/1000 千克" },
      { name: "毫克", symbol: "mg", value: "1/1000 克" },
      { name: "微克", symbol: "μg", value: "1/1000 毫克" },
      { name: "市斤", symbol: "斤", value: "500 克" }
    ],
    tools: [
      { icon: "⚖️", name: "天平", note: "两边比一比，在月球上也准" },
      { icon: "🔢", name: "电子秤", note: "厨房、超市里最常见" },
      { icon: "🪝", name: "杆秤", note: "中国传了两千多年的秤" },
      { icon: "🧲", name: "基布尔秤", note: "用电和磁的力称出一千克" }
    ],
    history: [
      { year: "1795", text: "法国定下：1 立方厘米的水有多重，就是 1 克" },
      { year: "1799", text: "做成铂金的“档案千克”" },
      { year: "1889", text: "铂铱合金的国际千克原器“大K”开始当全世界的标准" },
      { year: "1990前后", text: "大K和它的兄弟们比来比去，差了约 50 微克" },
      { year: "2019", text: "改用普朗克常数来定，大K退休" }
    ],
    definition: "固定普朗克常数 h 的数值为 6.626 070 15 × 10⁻³⁴ J·s（J·s = kg·m²·s⁻¹），米和秒分别由光速和铯频率定义，千克由此确定。",
    constant: "普朗克常数 h = 6.626 070 15 × 10⁻³⁴ J·s",
    sources: [bipmBase, { label: "NIST：千克的新定义", url: "https://www.nist.gov/si-redefinition/kilogram" }]
  },
  {
    id: "second", name: "秒", symbol: "s", quantity: "时间", emoji: "⏰", color: "#b48cff",
    ask: "一秒钟有多长？",
    answer: "慢慢说一声“一千零一”，差不多就是一秒。今天的一秒，是铯原子“摆动” 9192631770 次的时间。",
    feel: [
      { icon: "🗣️", text: "1 秒：慢慢说一声“一千零一”" },
      { icon: "⏱️", text: "1 分钟 = 60 秒，1 小时 = 3600 秒" },
      { icon: "🌍", text: "1 天 = 86400 秒，地球自己转一圈" },
      { icon: "⚛️", text: "最好的原子钟，上亿年才差 1 秒" }
    ],
    family: [
      { name: "天", symbol: "d", value: "86400 秒" },
      { name: "小时", symbol: "h", value: "3600 秒" },
      { name: "分钟", symbol: "min", value: "60 秒" },
      { name: "秒", symbol: "s", value: "基本单位" },
      { name: "毫秒", symbol: "ms", value: "1/1000 秒" },
      { name: "微秒", symbol: "μs", value: "1/1000 毫秒" },
      { name: "纳秒", symbol: "ns", value: "1/1000 微秒" }
    ],
    tools: [
      { icon: "☀️", name: "日晷", note: "看太阳的影子" },
      { icon: "🏺", name: "铜壶滴漏", note: "水涨箭浮，阴天半夜也能看" },
      { icon: "⌚", name: "石英表", note: "小水晶片每秒振 32768 次" },
      { icon: "⚛️", name: "铯原子钟", note: "卫星和授时中心用它" },
      { icon: "🔬", name: "光钟", note: "比铯原子钟还准上百倍" }
    ],
    history: [
      { year: "约前2000", text: "古巴比伦人六十个六十个地数，留下了 60 秒、60 分" },
      { year: "1645", text: "清朝把一天 100 刻改为 96 刻，一刻钟正好 15 分钟" },
      { year: "很久以来", text: "一秒是一天的 1/86400，看地球转" },
      { year: "1960", text: "改看地球绕太阳转一圈，比自转稳" },
      { year: "1967", text: "改用铯原子：摆动 9192631770 次是 1 秒" },
      { year: "1972", text: "开始加“闰秒”，让原子钟跟上地球" },
      { year: "2022", text: "各国商定：最晚 2035 年起不再加闰秒" },
      { year: "2030前后", text: "计划用更准的“光钟”给 1 秒换新定义" }
    ],
    definition: "固定铯-133 原子在未受干扰的基态超精细跃迁频率 ΔνCs 的数值为 9 192 631 770 Hz（Hz = s⁻¹），秒由此确定。",
    constant: "铯-133 超精细跃迁频率 ΔνCs = 9 192 631 770 Hz",
    sources: [bipmBase, { label: "BIPM：第 27 届国际计量大会关于闰秒的决议", url: "https://www.bipm.org/en/cgpm-2022/resolution-4" }]
  },
  {
    id: "ampere", name: "安培", symbol: "A", quantity: "电流", emoji: "⚡", color: "#f5c542",
    ask: "1 安培是多大的电流？",
    answer: "电线里每秒挤过去 600 多亿亿个电荷，就是 1 安培。手机充电器一般是 1 到 3 安培。",
    feel: [
      { icon: "📱", text: "手机充电：1～3 安培" },
      { icon: "🔌", text: "家里的普通插座：最多 10 安培" },
      { icon: "❄️", text: "空调插座更结实：16 安培" },
      { icon: "🔋", text: "充电宝上的“毫安时”是存了多少电，不是电流" }
    ],
    family: [
      { name: "千安", symbol: "kA", value: "1000 安培" },
      { name: "安培", symbol: "A", value: "基本单位" },
      { name: "毫安", symbol: "mA", value: "1/1000 安培" },
      { name: "微安", symbol: "μA", value: "1/1000 毫安" }
    ],
    tools: [
      { icon: "🎛️", name: "电流表", note: "接进电路里读数" },
      { icon: "🧰", name: "万用表", note: "电流、电压、电阻都能量" },
      { icon: "🦀", name: "钳形电流表", note: "夹住电线就能量，不用拆开" }
    ],
    history: [
      { year: "1820", text: "安培发现：两根通电的导线会互相吸引或推开" },
      { year: "1881", text: "国际电学大会用他的名字给电流单位命名" },
      { year: "1948", text: "用两根平行导线之间的力来定 1 安培" },
      { year: "2019", text: "改用一个电荷带多少电来定" }
    ],
    definition: "固定基本电荷 e 的数值为 1.602 176 634 × 10⁻¹⁹ C（C = A·s），安培由此确定。1 A 约等于每秒 6.24 × 10¹⁸ 个基本电荷通过。",
    constant: "基本电荷 e = 1.602 176 634 × 10⁻¹⁹ C",
    namedAfter: "法国科学家安德烈-马里·安培（André-Marie Ampère，1775—1836）",
    sources: [bipmBase, { label: "NIST：安培的新定义", url: "https://www.nist.gov/si-redefinition/ampere" }]
  },
  {
    id: "kelvin", name: "开尔文", symbol: "K", quantity: "温度", emoji: "🌡️", color: "#ff7a8a",
    ask: "0 开有多冷？",
    answer: "0 开就是绝对零度，零下 273.15 摄氏度，再也冷不下去了。开尔文温度从这里算起，永远没有负数。",
    feel: [
      { icon: "🥶", text: "0 开：绝对零度，−273.15 ℃" },
      { icon: "🌌", text: "约 3 开：空荡荡的太空" },
      { icon: "🧪", text: "77 开：液氮，−196 ℃" },
      { icon: "🧊", text: "273.15 开：冰水，0 ℃" },
      { icon: "🧒", text: "约 310 开：你的体温，37 ℃" },
      { icon: "☀️", text: "约 5800 开：太阳表面" }
    ],
    family: [
      { name: "开尔文", symbol: "K", value: "基本单位" },
      { name: "毫开", symbol: "mK", value: "1/1000 开" },
      { name: "摄氏度", symbol: "℃", value: "温度差和 1 开一样大，0 ℃ = 273.15 K" },
      { name: "华氏度", symbol: "℉", value: "不是法定单位，美国天气预报常用" }
    ],
    tools: [
      { icon: "🌡️", name: "液体温度计", note: "热胀冷缩" },
      { icon: "🤒", name: "体温计", note: "刻度细到 0.1 度" },
      { icon: "🔫", name: "红外测温枪", note: "隔着空气“看”热" },
      { icon: "🔌", name: "热电偶", note: "炼钢炉里也能量" }
    ],
    history: [
      { year: "1724", text: "华伦海特发表华氏温标" },
      { year: "1742", text: "摄尔修斯提出百分温标，后来成了摄氏度" },
      { year: "1848", text: "开尔文勋爵提出从绝对零度算起的温度" },
      { year: "1954", text: "水的“三相点”定为 273.16 开" },
      { year: "1967", text: "名字从“开氏度”改成“开尔文”，不再加“度”" },
      { year: "2019", text: "改用玻尔兹曼常数来定" }
    ],
    definition: "固定玻尔兹曼常数 k 的数值为 1.380 649 × 10⁻²³ J/K，开尔文由此确定。摄氏温度 t/℃ = T/K − 273.15。",
    constant: "玻尔兹曼常数 k = 1.380 649 × 10⁻²³ J/K",
    namedAfter: "英国物理学家开尔文勋爵（威廉·汤姆孙，William Thomson，1824—1907）",
    sources: [bipmBase, { label: "NIST：开尔文的新定义", url: "https://www.nist.gov/si-redefinition/kelvin" }]
  },
  {
    id: "mole", name: "摩尔", symbol: "mol", quantity: "物质的量", emoji: "🫘", color: "#7cc4a4",
    ask: "1 摩尔是多少个？",
    answer: "大约是 6 后面跟着 23 个 0 那么多个。一大口水，18 克，差不多就是 1 摩尔水分子。",
    feel: [
      { icon: "🥚", text: "一打 = 12 个，一令纸 = 500 张" },
      { icon: "🔢", text: "1 摩尔 ≈ 6.022 × 10²³ 个" },
      { icon: "💧", text: "18 克水 ≈ 1 摩尔水分子" },
      { icon: "✏️", text: "12 克碳 ≈ 1 摩尔碳原子" },
      { icon: "🩸", text: "体检单上的血糖，单位是“毫摩尔每升”" }
    ],
    family: [
      { name: "千摩尔", symbol: "kmol", value: "1000 摩尔" },
      { name: "摩尔", symbol: "mol", value: "基本单位" },
      { name: "毫摩尔", symbol: "mmol", value: "1/1000 摩尔" },
      { name: "微摩尔", symbol: "μmol", value: "1/1000 毫摩尔" }
    ],
    tools: [
      { icon: "⚖️", name: "分析天平", note: "称出克数，再换成摩尔" },
      { icon: "🧪", name: "滴定管", note: "一滴一滴加，看颜色变" },
      { icon: "🔮", name: "硅球", note: "数出一颗硅球里有多少原子" }
    ],
    history: [
      { year: "1811", text: "阿伏伽德罗：同样冷热、同样大小的气体，小颗粒一样多" },
      { year: "1909", text: "佩兰把这个个数叫作“阿伏伽德罗常数”" },
      { year: "1971", text: "摩尔成为第 7 个基本单位：12 克碳-12 里的原子数" },
      { year: "2019", text: "直接定死这个数：6.022 140 76 × 10²³" }
    ],
    definition: "1 摩尔精确包含 6.022 140 76 × 10²³ 个指定的基本粒子（原子、分子、离子、电子等）。这个数就是固定的阿伏伽德罗常数 NA 的数值（单位 mol⁻¹）。",
    constant: "阿伏伽德罗常数 NA = 6.022 140 76 × 10²³ mol⁻¹",
    namedAfter: "常数用的是意大利科学家阿梅代奥·阿伏伽德罗（Amedeo Avogadro，1776—1856）的名字",
    sources: [bipmBase, { label: "NIST：摩尔的新定义", url: "https://www.nist.gov/si-redefinition/mole" }]
  },
  {
    id: "candela", name: "坎德拉", symbol: "cd", quantity: "发光强度", emoji: "💡", color: "#ffb84d",
    ask: "1 坎德拉有多亮？",
    answer: "差不多是一支普通蜡烛朝一个方向发出的光。“坎德拉”这个名字，在拉丁语里就是蜡烛。",
    feel: [
      { icon: "🕯️", text: "1 坎德拉：一支蜡烛朝一个方向的光" },
      { icon: "📚", text: "教室课桌上至少 300 勒克斯" },
      { icon: "☀️", text: "晴天太阳直射的地面：约 10 万勒克斯" },
      { icon: "🌕", text: "满月照着的地面：约 0.1 勒克斯" },
      { icon: "📱", text: "手机屏幕的“几百尼特”= 每平方米几百坎德拉" }
    ],
    family: [
      { name: "坎德拉", symbol: "cd", value: "朝一个方向有多亮（基本单位）" },
      { name: "流明", symbol: "lm", value: "一盏灯一共发出多少光" },
      { name: "勒克斯", symbol: "lx", value: "照到一块地方有多亮：1 流明每平方米" },
      { name: "坎德拉每平方米", symbol: "cd/m²", value: "屏幕有多亮，也叫尼特" }
    ],
    tools: [
      { icon: "📟", name: "照度计", note: "放在桌上量勒克斯" },
      { icon: "🔭", name: "光度计", note: "比一比两盏灯谁亮" },
      { icon: "⚪", name: "积分球", note: "把灯的光全收进来量流明" }
    ],
    history: [
      { year: "1800年代", text: "各国拿标准蜡烛、标准油灯当亮度的尺子" },
      { year: "1948", text: "定名“坎德拉”，用熔化的铂发出的光来定" },
      { year: "1979", text: "改用一种黄绿色的光来定" },
      { year: "2019", text: "表述改成固定“发光效能” 683 流明每瓦" }
    ],
    definition: "固定频率为 540 × 10¹² Hz 的单色辐射的发光效能 Kcd 的数值为 683 lm/W，坎德拉由此确定。也就是：这种黄绿光在某个方向上每球面度的辐射强度为 1/683 瓦时，发光强度是 1 坎德拉。",
    constant: "发光效能 Kcd = 683 lm/W",
    sources: [bipmBase, siBrochure]
  }
];

export const unitById = (id: string): BaseUnit | undefined => baseUnits.find((unit) => unit.id === id);
export const unitByName = (name: string): BaseUnit | undefined => baseUnits.find((unit) => unit.name === name);

/** 用 7 块积木拼出来的单位 */
export type DerivedUnit = {
  name: string;
  symbol: string;
  quantity: string;
  emoji: string;
  /** 怎么拼出来的，用孩子看得懂的话 */
  recipe: string;
  uses: readonly BaseUnitId[];
  example: string;
  /** 不是国际单位制，但我国法定计量单位里允许用 */
  legalOnly?: boolean;
};

export const derivedUnits: readonly DerivedUnit[] = [
  { name: "平方米", symbol: "m²", quantity: "面积", emoji: "🟦", recipe: "米 × 米", uses: ["metre"], example: "教室、房子有多大" },
  { name: "立方米", symbol: "m³", quantity: "体积", emoji: "📦", recipe: "米 × 米 × 米", uses: ["metre"], example: "房间和集装箱占多大地方" },
  { name: "升", symbol: "L", quantity: "容积", emoji: "🥛", recipe: "1 升 = 10 厘米 × 10 厘米 × 10 厘米", uses: ["metre"], example: "一瓶水、一桶油", legalOnly: true },
  { name: "米每秒", symbol: "m/s", quantity: "速度", emoji: "🏃", recipe: "米 ÷ 秒", uses: ["metre", "second"], example: "跑得有多快" },
  { name: "千克每立方米", symbol: "kg/m³", quantity: "密度", emoji: "👑", recipe: "千克 ÷ 立方米", uses: ["kilogram", "metre"], example: "金子为什么比银子紧实" },
  { name: "赫兹", symbol: "Hz", quantity: "一秒几次", emoji: "🎵", recipe: "1 ÷ 秒", uses: ["second"], example: "声音的高低、Wi-Fi 的信号" },
  { name: "牛顿", symbol: "N", quantity: "力", emoji: "🍎", recipe: "千克 × 米 ÷ 秒 ÷ 秒", uses: ["kilogram", "metre", "second"], example: "推、拉，地球拉你往下的重力" },
  { name: "帕斯卡", symbol: "Pa", quantity: "压强", emoji: "🎈", recipe: "牛顿 ÷ 平方米", uses: ["kilogram", "metre", "second"], example: "轮胎的气、天气预报的气压" },
  { name: "焦耳", symbol: "J", quantity: "能量", emoji: "🍪", recipe: "牛顿 × 米", uses: ["kilogram", "metre", "second"], example: "饼干袋上的“千焦”" },
  { name: "瓦特", symbol: "W", quantity: "功率", emoji: "💡", recipe: "焦耳 ÷ 秒", uses: ["kilogram", "metre", "second"], example: "电器吃电有多快" },
  { name: "千瓦时（度）", symbol: "kWh", quantity: "电能", emoji: "🧾", recipe: "1000 瓦 × 1 小时", uses: ["kilogram", "metre", "second"], example: "电费单上的“度”", legalOnly: true },
  { name: "库仑", symbol: "C", quantity: "电荷", emoji: "✨", recipe: "安培 × 秒", uses: ["ampere", "second"], example: "一共流过多少电" },
  { name: "伏特", symbol: "V", quantity: "电压", emoji: "🔋", recipe: "瓦特 ÷ 安培", uses: ["kilogram", "metre", "second", "ampere"], example: "干电池 1.5 伏、插座 220 伏" },
  { name: "欧姆", symbol: "Ω", quantity: "电阻", emoji: "🚧", recipe: "伏特 ÷ 安培", uses: ["kilogram", "metre", "second", "ampere"], example: "电线挡着电流有多厉害" },
  { name: "摄氏度", symbol: "℃", quantity: "温度", emoji: "🌡️", recipe: "开尔文 − 273.15", uses: ["kelvin"], example: "天气预报、体温" },
  { name: "流明", symbol: "lm", quantity: "光通量", emoji: "💡", recipe: "坎德拉 × 立体角", uses: ["candela"], example: "灯泡盒子上写的总光量" },
  { name: "勒克斯", symbol: "lx", quantity: "照度", emoji: "📖", recipe: "流明 ÷ 平方米", uses: ["candela", "metre"], example: "书桌上够不够亮" },
  { name: "摩尔每升", symbol: "mol/L", quantity: "浓度", emoji: "🧪", recipe: "摩尔 ÷ 升", uses: ["mole", "metre"], example: "体检单上的血糖（毫摩尔每升）" }
];

/** 词头：放大或缩小单位。power 是 10 的几次方 */
export type Prefix = { name: string; symbol: string; power: number; example?: string; isNew?: boolean };

export const prefixes: readonly Prefix[] = [
  { name: "昆", symbol: "Q", power: 30, isNew: true, example: "太阳大约 2 昆克重" },
  { name: "容", symbol: "R", power: 27, isNew: true, example: "地球大约 6 容克重" },
  { name: "尧", symbol: "Y", power: 24 },
  { name: "泽", symbol: "Z", power: 21, example: "全球一年的网络数据量（ZB）" },
  { name: "艾", symbol: "E", power: 18 },
  { name: "拍", symbol: "P", power: 15, example: "超级计算机算力" },
  { name: "太", symbol: "T", power: 12, example: "硬盘 1 TB" },
  { name: "吉", symbol: "G", power: 9, example: "手机 128 GB" },
  { name: "兆", symbol: "M", power: 6, example: "兆瓦、兆赫" },
  { name: "千", symbol: "k", power: 3, example: "千米、千克、千瓦" },
  { name: "百", symbol: "h", power: 2, example: "百帕（气压）" },
  { name: "十", symbol: "da", power: 1 },
  { name: "分", symbol: "d", power: -1, example: "分米、分升、分贝" },
  { name: "厘", symbol: "c", power: -2, example: "厘米" },
  { name: "毫", symbol: "m", power: -3, example: "毫米、毫升、毫克" },
  { name: "微", symbol: "μ", power: -6, example: "微米、微秒" },
  { name: "纳", symbol: "n", power: -9, example: "纳米、纳秒" },
  { name: "皮", symbol: "p", power: -12, example: "原子之间的距离（百皮米级）" },
  { name: "飞", symbol: "f", power: -15, example: "质子大小约 1 飞米、飞秒激光" },
  { name: "阿", symbol: "a", power: -18, example: "阿秒光脉冲、引力波伸缩量" },
  { name: "仄", symbol: "z", power: -21 },
  { name: "幺", symbol: "y", power: -24 },
  { name: "柔", symbol: "r", power: -27, isNew: true },
  { name: "亏", symbol: "q", power: -30, isNew: true, example: "一个电子的质量约 1 亏克" }
];

/** 今天还会碰到的老单位，和它们跟米、千克说好的换算 */
export type OldUnitGroup = {
  title: string;
  emoji: string;
  note: string;
  rows: readonly { name: string; value: string; kind: string }[];
};

export const oldUnits: readonly OldUnitGroup[] = [
  {
    title: "中国市制", emoji: "🏮",
    note: "1929 年起和米制挂钩，1959 年一斤改为十两；1984 年起统一用法定计量单位，日常说话还常听到。",
    rows: [
      { kind: "长度", name: "1 市尺 = 10 寸", value: "1/3 米" },
      { kind: "长度", name: "1 丈 = 10 尺", value: "10/3 米" },
      { kind: "长度", name: "1 市里", value: "500 米" },
      { kind: "质量", name: "1 市斤 = 10 两", value: "500 克" },
      { kind: "质量", name: "1 两 = 10 钱", value: "50 克" },
      { kind: "容量", name: "1 市升", value: "1 升" },
      { kind: "容量", name: "1 斗 = 10 升", value: "10 升" },
      { kind: "面积", name: "1 亩", value: "约 666.7 平方米" },
      { kind: "面积", name: "15 亩", value: "1 公顷 = 10000 平方米" }
    ]
  },
  {
    title: "英制和美制", emoji: "🎩",
    note: "1959 年起，英国、美国等国约定用米和千克来定它们，下面都是精确值。",
    rows: [
      { kind: "长度", name: "1 英寸", value: "2.54 厘米" },
      { kind: "长度", name: "1 英尺 = 12 英寸", value: "30.48 厘米" },
      { kind: "长度", name: "1 码 = 3 英尺", value: "0.9144 米" },
      { kind: "长度", name: "1 英里 = 1760 码", value: "1609.344 米" },
      { kind: "质量", name: "1 磅", value: "0.45359237 千克" },
      { kind: "质量", name: "1 盎司 = 1/16 磅", value: "约 28.35 克" },
      { kind: "容量", name: "1 美制加仑", value: "约 3.785 升" }
    ]
  },
  {
    title: "国家选定的其他法定单位", emoji: "🧭",
    note: "不属于国际单位制，但太常用了，我国法定计量单位里保留了它们。",
    rows: [
      { kind: "时间", name: "分、小时、天", value: "60 秒、3600 秒、86400 秒" },
      { kind: "角度", name: "1 度 = 60 分", value: "一圈是 360 度" },
      { kind: "质量", name: "1 吨", value: "1000 千克" },
      { kind: "容积", name: "1 升", value: "1 立方分米" },
      { kind: "长度", name: "1 海里", value: "1852 米" },
      { kind: "速度", name: "1 节", value: "每小时 1 海里" },
      { kind: "宝石", name: "1 克拉", value: "200 毫克（0.2 克）" },
      { kind: "声音", name: "分贝（dB）", value: "每加 10 分贝，声强 ×10" }
    ]
  }
];

/** 古代的度量衡和今天的单位怎么对上 */
export const duLiangHeng: readonly { char: string; means: string; then: string; now: string; note?: string; unit?: BaseUnitId }[] = [
  { char: "度", means: "量长短", then: "尺、寸、丈、里", now: "米", unit: "metre" },
  { char: "量", means: "量多少（容积）", then: "升、斗、斛", now: "升", note: "不算基本单位：1 升是用米拼出来的 1 立方分米" },
  { char: "衡", means: "称轻重", then: "两、斤、钧、石", now: "千克", unit: "kilogram" }
];
