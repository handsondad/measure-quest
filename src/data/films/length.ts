import { arc } from "./paths.ts";
import type { Film } from "./types.ts";

/** 地球圆心和半径，画子午线用 */
const earth = { at: [600, 470] as const, r: 300 };
/** 巴黎大约在北纬 49 度，离北极 41 度 */
const paris = arc(earth.at, earth.r, 41, 41, 1)[0];

export const films: readonly Film[] = [
  {
    question: "what-is-meter",
    scenes: [
      {
        turn: 0, title: "各地尺子五花八门", duration: 11,
        cues: [
          { kind: "ruler", at: [120, 200], length: 380, every: 0, caption: "甲城的一尺", from: 0.3 },
          { kind: "ruler", at: [120, 400], length: 520, every: 0, color: "#bfe3ff", caption: "乙城的一尺", from: 1.1 },
          { kind: "ruler", at: [120, 600], length: 300, every: 0, color: "#b9f0c8", caption: "丙城的一尺", from: 1.9 },
          { kind: "sprite", icon: "👑", path: [[930, 260]], size: 100, from: 4, to: 6.4 },
          { kind: "text", at: [930, 400], text: "不属于国王", size: "m", color: "#e5484d", from: 4.4, to: 6.4 },
          { kind: "sprite", icon: "🌍", path: [[930, 360]], size: 200, from: 6.8 },
          { kind: "text", at: [930, 600], text: "选中地球！", size: "m", color: "#2f7d32", from: 7.6 }
        ]
      },
      {
        turn: 1, title: "从北极到赤道", view: "space", duration: 12,
        cues: [
          { kind: "shape", shape: "circle", at: earth.at, size: [earth.r * 2, earth.r * 2], color: "#4fa3e0", from: 0.2 },
          { kind: "label", at: [600, 170], text: "北极", side: "top", pos: [600, 60], from: 1 },
          { kind: "line", path: arc(earth.at, earth.r, 0, 90, 30), color: "#ffcf3f", width: 9, draw: 2.5, from: 1.6 },
          { kind: "pulse", at: paris, color: "#ff5a5f", radius: 60, from: 2.8 },
          { kind: "label", at: paris, text: "巴黎", side: "right", from: 3.1 },
          { kind: "line", path: [[300, 470], [900, 470]], color: "#ffffff", width: 4, dashed: true, from: 4.2 },
          { kind: "label", at: [900, 470], text: "赤道", side: "right", from: 4.6 },
          { kind: "text", at: [600, 830], text: "分成一千万份，一份一米", size: "m", color: "#ffe08a", from: 6.5 }
        ]
      },
      {
        turn: 2, title: "量一段，算全程", duration: 12,
        cues: [
          { kind: "line", path: [[600, 150], [600, 750]], color: "#b9c4cf", width: 5, dashed: true, from: 0.3 },
          { kind: "pulse", at: [600, 150], color: "#ff9f43", radius: 50, from: 0.6 },
          { kind: "label", at: [600, 150], text: "敦刻尔克", side: "right", from: 0.9 },
          { kind: "label", at: [600, 750], text: "巴塞罗那", side: "right", from: 1.6 },
          { kind: "sprite", icon: "🧑‍🔬", path: [[540, 150], [540, 440]], size: 60, travel: 3, from: 2.4 },
          { kind: "sprite", icon: "🧑‍🔬", path: [[660, 750], [660, 460]], size: 60, travel: 3, from: 2.4 },
          { kind: "line", path: [[600, 150], [470, 250], [690, 330], [490, 430], [710, 520], [500, 620], [600, 750]], color: "#ff9f43", width: 5, draw: 4, from: 3.4 },
          { kind: "text", at: [930, 450], text: "这一量就是好几年", size: "s", from: 8 }
        ]
      },
      {
        turn: 3, title: "米原器", duration: 11,
        cues: [
          { kind: "text", at: [600, 150], text: "1799 年", size: "l", from: 0.3 },
          { kind: "ruler", at: [200, 370], length: 800, every: 0, color: "#d7dde5", caption: "铂金米原器", draw: 2, from: 0.8 },
          { kind: "highlight", at: [600, 408], size: [880, 150], from: 3 },
          { kind: "sprite", icon: "📏", path: [[150, 720], [430, 600]], size: 70, travel: 1.5, from: 5 },
          { kind: "sprite", icon: "📏", path: [[1050, 720], [770, 600]], size: 70, travel: 1.5, from: 5.5 },
          { kind: "text", at: [600, 800], text: "做尺子都来比一比", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "米制公约", duration: 11,
        cues: [
          { kind: "text", at: [600, 130], text: "1875 年 米制公约", size: "m", from: 0.3 },
          { kind: "sprite", icon: "📜", path: [[820, 420]], size: 160, wobble: true, from: 0.9 },
          { kind: "count", at: [320, 420], label: "签约国家", start: 0, end: 17, unit: "个", over: 2.5, from: 1.3 },
          { kind: "shape", shape: "pill", at: [820, 640], size: [200, 70], color: "#ff7a6b", text: "中国", motion: "grow", over: 1, from: 5.5 },
          { kind: "label", at: [920, 640], text: "后来也加入了", side: "right", pos: [1000, 560], from: 6.2 },
          { kind: "text", at: [600, 810], text: "绝大多数国家都用米", size: "m", color: "#2f7d32", from: 8 }
        ]
      }
    ]
  },
  {
    question: "meter-light",
    scenes: [
      {
        turn: 0, title: "金属条的烦恼", duration: 11,
        cues: [
          { kind: "ruler", at: [250, 360], length: 700, every: 0, color: "#d7dde5", caption: "米原器", from: 0.3 },
          { kind: "sprite", icon: "☀️", path: [[250, 190]], size: 90, from: 1.6, to: 4.6 },
          { kind: "arrow", path: [[965, 398], [1060, 398]], color: "#e5484d", draw: 0.6, from: 2, to: 4.6 },
          { kind: "text", at: [600, 640], text: "天热长一点点", size: "m", color: "#e5484d", from: 2, to: 4.6 },
          { kind: "sprite", icon: "❄️", path: [[950, 190]], size: 90, from: 4.8, to: 7.6 },
          { kind: "text", at: [600, 640], text: "天冷缩一点点", size: "m", color: "#4d96ff", from: 5, to: 7.6 },
          { kind: "sprite", icon: "💥", path: [[600, 400]], size: 130, from: 8 },
          { kind: "text", at: [600, 640], text: "碰坏、弄丢怎么办？", size: "m", from: 8.2 }
        ]
      },
      {
        turn: 1, title: "光绕地球七圈半", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[600, 460]], size: 240, from: 0.2 },
          { kind: "text", at: [320, 150], text: "永远一样快", size: "m", color: "#ffe08a", from: 0.8 },
          { kind: "flow", path: arc([600, 460], 230, 0, 360, 60), color: "#ffe08a", count: 14, speed: 900, size: 9, from: 1.6 },
          { kind: "count", at: [920, 130], label: "光一秒能跑", start: 0, end: 300000, unit: "千米", over: 2.5, from: 3.2 },
          { kind: "text", at: [600, 820], text: "一秒钟：绕地球七圈半", size: "m", color: "#ffe08a", from: 6 }
        ]
      },
      {
        turn: 2, title: "光跑过的路就是一米", duration: 12,
        cues: [
          { kind: "text", at: [600, 140], text: "1983 年", size: "l", from: 0.3 },
          { kind: "sprite", icon: "🔦", path: [[170, 400]], size: 100, rotate: 45, from: 0.6 },
          { kind: "flow", path: [[240, 400], [1000, 400]], color: "#ffcf3f", count: 6, speed: 500, size: 12, from: 1.2, to: 5.5 },
          { kind: "text", at: [600, 680], text: "299792458 分之一秒", size: "m", color: "#ff9f43", from: 2.6 },
          { kind: "ruler", at: [240, 450], length: 760, every: 0, color: "#ffe08a", caption: "一米", draw: 1.5, from: 4.2 },
          { kind: "sprite", icon: "⚛️", path: [[1060, 240]], size: 80, from: 7.4 },
          { kind: "label", at: [1060, 240], text: "原子钟量时间", side: "left", pos: [820, 240], from: 7.9 }
        ]
      },
      {
        turn: 3, title: "你的尺子还是准的", view: "grid", duration: 11,
        cues: [
          { kind: "shape", shape: "pill", at: [210, 380], size: [270, 100], color: "#ffe08a", text: "光和原子钟", from: 0.5 },
          { kind: "arrow", path: [[355, 380], [450, 380]], draw: 0.6, from: 1.6 },
          { kind: "shape", shape: "pill", at: [600, 380], size: [270, 100], color: "#bfe3ff", text: "实验室激光", from: 2.1 },
          { kind: "arrow", path: [[745, 380], [840, 380]], draw: 0.6, from: 3.2 },
          { kind: "shape", shape: "pill", at: [990, 380], size: [290, 100], color: "#ffd6bf", text: "做尺子的机器", from: 3.7 },
          { kind: "sprite", icon: "📏", path: [[600, 600]], size: 120, from: 6 },
          { kind: "text", at: [600, 800], text: "你的尺子：还是一米", size: "m", color: "#2f7d32", from: 6.6 }
        ]
      },
      {
        turn: 4, title: "米原器成了文物", duration: 10,
        cues: [
          { kind: "sprite", icon: "🔬", path: [[300, 360]], size: 130, from: 0.3 },
          { kind: "label", at: [300, 360], text: "哪国都能自己做", side: "bottom", pos: [300, 520], from: 1 },
          { kind: "shape", shape: "rect", at: [860, 390], size: [380, 260], color: "#f4f8fc", outline: true, from: 3.6 },
          { kind: "ruler", at: [710, 360], length: 300, every: 0, color: "#d7dde5", draw: 0.8, from: 4.2 },
          { kind: "label", at: [860, 470], text: "收藏在法国", side: "bottom", pos: [860, 600], from: 5.5 },
          { kind: "text", at: [600, 790], text: "成了有故事的文物", size: "m", color: "#7a6a55", from: 7 }
        ]
      }
    ]
  },
  {
    question: "light-year",
    scenes: [
      {
        turn: 0, title: "光跑一年的路", view: "space", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "1 光年 = 光跑一年的路", size: "m", color: "#ffe08a", from: 0.3 },
          { kind: "sprite", icon: "🌍", path: [[220, 420]], size: 160, from: 1 },
          { kind: "flow", path: [[310, 420], [1100, 420]], color: "#ffe08a", count: 8, speed: 380, size: 9, from: 1.8 },
          { kind: "text", at: [600, 640], text: "差不多 10 万亿千米", size: "m", color: "#ffffff", from: 4 },
          { kind: "text", at: [600, 780], text: "光年是长度！", size: "l", color: "#ffe08a", from: 7.4 }
        ]
      },
      {
        turn: 1, title: "最近的星星", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[180, 440]], size: 130, from: 0.3 },
          { kind: "sprite", icon: "⭐", path: [[1020, 440]], size: 110, from: 1 },
          { kind: "label", at: [1020, 500], text: "比邻星", side: "bottom", pos: [1020, 600], color: "#ffe08a", from: 1.6 },
          { kind: "line", path: [[260, 440], [950, 440]], color: "#ffe08a", width: 4, dashed: true, draw: 1, from: 2.6 },
          { kind: "label", at: [600, 440], text: "约 4.2 光年", side: "top", pos: [600, 320], color: "#ffe08a", from: 3.4 },
          { kind: "sprite", icon: "✨", path: [[950, 400], [260, 400]], size: 60, travel: 5, from: 4.6 },
          { kind: "text", at: [600, 780], text: "光要跑 4 年多", size: "m", color: "#ffffff", from: 6.8 }
        ]
      },
      {
        turn: 2, title: "看到的是从前", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "☀️", path: [[180, 280]], size: 140, from: 0.3 },
          { kind: "arrow", path: [[270, 280], [830, 280]], color: "#ffe08a", text: "约 8 分钟", draw: 1.2, from: 1 },
          { kind: "sprite", icon: "🌍", path: [[930, 380]], size: 150, from: 1.4 },
          { kind: "sprite", icon: "🌕", path: [[180, 500]], size: 110, from: 3.6 },
          { kind: "arrow", path: [[260, 500], [830, 460]], color: "#ffffff", text: "1 秒多", draw: 0.6, from: 4.2 },
          { kind: "text", at: [600, 760], text: "看到的是以前的样子", size: "m", color: "#ffe08a", from: 7 }
        ]
      },
      {
        turn: 3, title: "手指跳一跳", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "闭左眼、闭右眼", size: "m", from: 0.3 },
          { kind: "sprite", icon: "☝️", path: [[540, 380]], size: 150, from: 1, to: 2.6 },
          { kind: "sprite", icon: "☝️", path: [[660, 380]], size: 150, from: 2.6, to: 4.2 },
          { kind: "sprite", icon: "☝️", path: [[540, 380]], size: 150, from: 4.2 },
          { kind: "text", at: [600, 600], text: "隔半年各看一次", size: "m", color: "#225dac", from: 5.6 },
          { kind: "text", at: [600, 740], text: "跳得越多，离得越近", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 4, title: "同一把尺子", view: "grid", duration: 12,
        cues: [
          { kind: "ruler", at: [150, 220], length: 900, ticks: 10, every: 0, caption: "米", draw: 1.2, from: 0.3 },
          { kind: "text", at: [600, 450], text: "光每秒走的米数", size: "m", color: "#225dac", from: 2.4 },
          { kind: "text", at: [600, 560], text: "× 一年的秒数", size: "m", color: "#225dac", from: 4 },
          { kind: "sprite", icon: "✏️", path: [[420, 720]], size: 100, from: 6.2 },
          { kind: "sprite", icon: "⭐", path: [[780, 720]], size: 100, from: 6.8 },
          { kind: "text", at: [600, 840], text: "同一把尺子", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      }
    ]
  },
  {
    question: "archimedes-volume",
    scenes: [
      {
        turn: 0, title: "占多大地方", view: "grid", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [280, 360], size: [120, 120], color: "#bfe3ff", text: "1毫升", from: 0.4 },
          { kind: "label", at: [280, 430], text: "边长 1 厘米", side: "bottom", pos: [280, 540], from: 1 },
          { kind: "shape", shape: "rect", at: [640, 360], size: [240, 240], color: "#4fb6ff", text: "1 升", from: 2.4 },
          { kind: "label", at: [640, 230], text: "1000 毫升", side: "top", pos: [640, 145], from: 3 },
          { kind: "sprite", icon: "🪨", path: [[1000, 380]], size: 130, from: 5 },
          { kind: "text", at: [600, 790], text: "歪歪扭扭：请水帮忙！", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 1, title: "澡盆溢出的水", duration: 12,
        cues: [
          { kind: "sprite", icon: "👑", path: [[250, 280]], size: 140, from: 0.3 },
          { kind: "label", at: [250, 360], text: "掺了银子？", side: "bottom", pos: [250, 470], from: 1 },
          { kind: "sprite", icon: "🛁", path: [[780, 380]], size: 220, from: 2.6 },
          { kind: "flow", path: [[860, 360], [1040, 540]], icon: "💧", count: 5, speed: 200, size: 12, from: 3.6 },
          { kind: "text", at: [600, 760], text: "占多大地方，挤走多少水", size: "m", color: "#225dac", from: 6.4 }
        ]
      },
      {
        turn: 2, title: "金子比银子紧实", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "同样是 500 克重", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "shape", shape: "rect", at: [330, 380], size: [170, 140], color: "#ffd76a", text: "纯金", from: 1.2 },
          { kind: "label", at: [330, 460], text: "只占约 26 毫升", side: "bottom", pos: [330, 570], from: 1.8 },
          { kind: "shape", shape: "rect", at: [870, 380], size: [240, 190], color: "#dfe5ec", text: "掺银王冠", from: 3.4 },
          { kind: "label", at: [870, 485], text: "涨到 36 毫升", side: "bottom", pos: [870, 590], from: 4 },
          { kind: "text", at: [600, 790], text: "挤出的水变多了！", size: "m", color: "#e5484d", from: 6.8 }
        ]
      },
      {
        turn: 3, title: "量筒减一减", view: "grid", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [230, 380], size: [230, 100], color: "#bfe3ff", text: "200毫升", from: 0.4 },
          { kind: "arrow", path: [[370, 380], [670, 380]], text: "放进石头", draw: 0.7, from: 1.6 },
          { kind: "shape", shape: "pill", at: [830, 380], size: [230, 100], color: "#4fb6ff", text: "260毫升", from: 2.6 },
          { kind: "text", at: [600, 600], text: "260−200=60毫升", size: "m", color: "#225dac", from: 4.8 },
          { kind: "text", at: [600, 760], text: "= 60 立方厘米", size: "l", color: "#2f7d32", from: 7.2 }
        ]
      },
      {
        turn: 4, title: "1 升锁在米上", duration: 11,
        cues: [
          { kind: "text", at: [600, 140], text: "1964 年 国际计量大会", size: "m", color: "#225dac", from: 0.3 },
          { kind: "shape", shape: "rect", at: [600, 420], size: [240, 240], color: "#bfe3ff", text: "1 升", motion: "pulse", from: 1.4 },
          { kind: "label", at: [720, 420], text: "边长 10 厘米", side: "right", pos: [960, 420], from: 2.2 },
          { kind: "text", at: [600, 780], text: "升和米彻底锁在一起", size: "m", color: "#2f7d32", from: 6.4 }
        ]
      }
    ]
  }
];
