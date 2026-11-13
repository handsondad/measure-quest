/**
 * 测量大事年表：从身体当尺子，到 7 个单位全交给自然常数。
 * question 写了的，点一下就能去听小念和爸爸聊这件事。
 */
import type { Source } from "./questions/types.ts";

export type Era = "ancient" | "modern" | "now";

export const eras: readonly { id: Era; title: string; hint: string }[] = [
  { id: "ancient", title: "🏺 古时候：用身体和器物量世界", hint: "手、脚、步子、一斗米、一杆秤" },
  { id: "modern", title: "🗼 近代：从各量各的到全世界一起", hint: "法国人量地球，十几个国家签下《米制公约》" },
  { id: "now", title: "⚛️ 现代：交给光、原子和自然常数", hint: "标准不再是一件锁起来的东西" }
];

export type Milestone = {
  year: string;
  era: Era;
  emoji: string;
  title: string;
  text: string;
  question?: string;
};

export const milestones: readonly Milestone[] = [
  { year: "约前 3000 年", era: "ancient", emoji: "💪", title: "古埃及的肘尺", text: "从手肘到中指尖叫一肘尺。盖金字塔时，工匠照着刻好的石头肘尺做出一模一样的尺子。", question: "hand-span" },
  { year: "约前 2000 年", era: "ancient", emoji: "🔢", title: "古巴比伦的六十进位", text: "60 能被很多数整除，留到今天，就是 1 小时 60 分、1 分 60 秒、一圈 360 度。", question: "sixty-seconds" },
  { year: "前 344 年", era: "ancient", emoji: "🥫", title: "商鞅方升", text: "商鞅在秦国变法时做的标准量器，装满就是秦国的一升，今天保存在上海博物馆。", question: "qin-unify" },
  { year: "前 221 年", era: "ancient", emoji: "🏯", title: "秦始皇统一度量衡", text: "全国的尺、量器和秤都照秦国的标准做，诏书刻在秤砣和量器上。", question: "qin-unify" },
  { year: "约前 212 年", era: "ancient", emoji: "👑", title: "阿基米德用水量王冠", text: "不把王冠熔化，看它放进水里挤出多少水，就能知道它占多大体积、有没有掺银子。", question: "archimedes-volume" },
  { year: "公元 9 年", era: "ancient", emoji: "🏺", title: "新莽铜嘉量", text: "一件铜器上做出斛、斗、升、合、龠五种量器，还刻着尺寸和容积，是古代标准器的代表。", question: "du-liang-heng" },
  { year: "唐代（618—907）", era: "ancient", emoji: "📏", title: "唐朝分大尺和小尺", text: "日常买卖用约 30 厘米的大尺，调乐器、测日影、配药还用 24 厘米多的小尺；尺子比秦汉长了一截。", question: "eight-chi" },
  { year: "1324 年", era: "ancient", emoji: "🌾", title: "三粒大麦是一英寸", text: "英国法令说：三粒又干又圆的大麦头尾相接，就是 1 英寸。", question: "foot" },
  { year: "1593 年", era: "ancient", emoji: "🛣️", title: "1 英里 = 5280 英尺", text: "英国规定 1 英里等于 8 弗隆。罗马的“一千步”就这样变长了一点。", question: "mile" },
  { year: "1645 年", era: "ancient", emoji: "💧", title: "一天改成 96 刻，一刻 15 分钟", text: "清朝把用了两千多年的“一日百刻”改成九十六刻，正好对上一天 24 小时，一刻钟就是 15 分钟。", question: "quarter-hour" },
  { year: "1724 年", era: "modern", emoji: "🌡️", title: "华氏温标", text: "华伦海特把冰、水和一种盐混起来的温度当 0 度，冰水是 32 度。", question: "fahrenheit" },
  { year: "1742 年", era: "modern", emoji: "🧊", title: "摄氏温标", text: "摄尔修斯在冰水和沸水之间分成 100 份。他起初定反了，后来才倒过来。", question: "thermometer" },
  { year: "1791 年", era: "modern", emoji: "🌍", title: "用地球来定一米", text: "法国科学院提出：从北极到赤道距离的千万分之一叫一米。", question: "what-is-meter" },
  { year: "1792—1798 年", era: "modern", emoji: "🔭", title: "两位天文学家量地球", text: "德朗布尔和梅尚从敦刻尔克量到巴塞罗那，量了六年多。", question: "what-is-meter" },
  { year: "1799 年", era: "modern", emoji: "📏", title: "档案米和档案千克", text: "照着测量结果，用铂金做出一米长的尺和一千克的砝码。", question: "what-is-meter" },
  { year: "1800 年", era: "modern", emoji: "🔋", title: "伏打叠出第一块电池", text: "伏打用锌片、银片和盐水纸片叠成“伏打电堆”，人类第一次有了稳稳流出来的电流。", question: "volt" },
  { year: "1848 年", era: "modern", emoji: "🥶", title: "从绝对零度算起", text: "开尔文勋爵提出一种温度：起点不是冰水，而是最冷的尽头。", question: "kelvin" },
  { year: "1875 年", era: "modern", emoji: "🤝", title: "《米制公约》", text: "5 月 20 日，17 个国家在巴黎签约，成立国际计量局。这一天后来成了世界计量日。", question: "seven-units" },
  { year: "1881 年", era: "modern", emoji: "⚡", title: "安培、伏特、欧姆有了统一名字", text: "第一届国际电学大会在巴黎召开，用科学家的名字统一了电流、电压和电阻的单位。", question: "volt" },
  { year: "1889 年", era: "modern", emoji: "🔐", title: "国际米原器和“大K”", text: "第一届国际计量大会批准铂铱合金的米原器和千克原器，复制品发给各国。", question: "big-k" },
  { year: "1907 年", era: "modern", emoji: "💎", title: "1 克拉定为 200 毫克", text: "第 4 届国际计量大会把来自角豆树种子的“克拉”统一成精确的 200 毫克。", question: "carat" },
  { year: "1929 年", era: "modern", emoji: "🏮", title: "市制和米制挂钩", text: "我国《度量衡法》定下：1 市尺是 1/3 米，1 市斤是 1/2 千克，1 市升是 1 升。", question: "shi-zhi" },
  { year: "1948 年", era: "modern", emoji: "🕯️", title: "坎德拉有了名字", text: "各国不再各拿各的蜡烛比亮度，统一叫坎德拉。", question: "candela" },
  { year: "1959 年", era: "modern", emoji: "⚖️", title: "我国确定用米制", text: "6 月 25 日国务院发布命令：米制是我国的基本计量制度，一斤从十六两改为十两。", question: "half-jin" },
  { year: "1959 年", era: "modern", emoji: "📐", title: "1 英寸正好 2.54 厘米", text: "英国、美国等国商定，英寸、码、磅都用米和千克来定。", question: "foot" },
  { year: "1960 年", era: "now", emoji: "🌈", title: "国际单位制诞生，米交给光", text: "第 11 届国际计量大会把这套单位命名为国际单位制；米改用氪-86 原子的光来定。", question: "meter-light" },
  { year: "1964 年", era: "now", emoji: "🥛", title: "1 升回归 1 立方分米", text: "第 12 届国际计量大会定下：1 升就精确等于边长 10 厘米的正方体，不再跟 1 千克水挂钩。", question: "archimedes-volume" },
  { year: "1967 年", era: "now", emoji: "⚛️", title: "原子钟定一秒", text: "铯原子摆动 9192631770 次就是 1 秒，不再看地球转。", question: "atomic-second" },
  { year: "1971 年", era: "now", emoji: "🫘", title: "第 7 块积木：摩尔", text: "摩尔成为第 7 个基本单位，国际单位制凑齐了 7 个。", question: "mole" },
  { year: "1977 年", era: "now", emoji: "✍️", title: "我国加入《米制公约》", text: "5 月 9 日，我国通知加入，当天生效。", question: "seven-units" },
  { year: "1983 年", era: "now", emoji: "💡", title: "米交给光速", text: "一米是光在真空里 1/299792458 秒走的路。", question: "meter-light" },
  { year: "1984 年", era: "now", emoji: "📜", title: "我国统一实行法定计量单位", text: "2 月 27 日国务院发布命令，以国际单位制为基础；1990 年底前完成过渡。", question: "shi-zhi" },
  { year: "1992 年", era: "now", emoji: "🌊", title: "测高卫星开始给大海量身高", text: "TOPEX/Poseidon 等测高卫星接力运行，把全球海平面的变化一路量准到毫米。", question: "earth-checkup" },
  { year: "1999 年", era: "now", emoji: "🛰️", title: "火星气候探测器失踪", text: "一边用磅，一边以为是公制单位，探测器离火星太近，失去联系。", question: "mars-orbiter" },
  { year: "2015 年", era: "now", emoji: "🕳️", title: "4 千米激光尺测到引力波", text: "LIGO 测出不到质子宽度万分之一的长度变化，人类第一次直接“听”到黑洞相撞。", question: "ligo" },
  { year: "2019 年", era: "now", emoji: "🔓", title: "7 个单位全交给自然常数", text: "5 月 20 日起，千克、安培、开尔文、摩尔也都用不变的数来定，大K退休。", question: "big-k" },
  { year: "2020 年", era: "now", emoji: "🧭", title: "北斗全球组网", text: "北斗三号开通全球服务，天上的原子钟帮全世界定位。", question: "gps" },
  { year: "2022 年", era: "now", emoji: "🔭", title: "新词头和闰秒", text: "加了“昆、容、柔、亏”四个新词头；还商定最晚 2035 年起不再加闰秒。", question: "prefixes" },
  { year: "2024—2030 年", era: "now", emoji: "🌕", title: "月球时间与光钟新秒针", text: "国际天文学联合会与国际计量局着手建立月球参考时间，并准备用更准的光钟重新定义 1 秒。", question: "optical-clock" }
];

export const timelineSources: readonly Source[] = [
  { label: "BIPM 150：历史", url: "https://thebipm150.org/history/" },
  { label: "US Metric Association：公制年表", url: "https://usma.org/a-chronology-of-the-metric-system" },
  { label: "外交部：中国参加国际公约情况一览表", url: "https://www.mfa.gov.cn/wjb_673085/zfxxgk_674865/gknrlb/tywj/tyqk/200303/t20030324_9867259.shtml" },
  { label: "市场监管总局：国务院关于在我国统一实行法定计量单位的命令", url: "https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/jjjzs/art/2023/art_ee15a7f377414ebbbfe6eac435da83ba.html" }
];
