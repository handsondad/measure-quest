import type { Film, Point } from "./types.ts";

/** 定位那一场：三颗卫星到小念的距离正好交在 you 这一点 */
const you: Point = [620, 500];
const sats: readonly Point[] = [[300, 300], [900, 280], [560, 820]];
const reach = (sat: Point) => Math.round(Math.hypot(sat[0] - you[0], sat[1] - you[1]) * 2);

export const films: readonly Film[] = [
  {
    question: "gps",
    scenes: [
      {
        turn: 0, title: "天上的导航卫星", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[600, 800]], size: 300, from: 0.2 },
          { kind: "sprite", icon: "🛰️", path: [[250, 220]], size: 80, from: 1 },
          { kind: "sprite", icon: "🛰️", path: [[600, 150]], size: 80, from: 1.4 },
          { kind: "sprite", icon: "🛰️", path: [[950, 230]], size: 80, from: 1.8 },
          { kind: "sprite", icon: "📱", path: [[600, 600]], size: 70, from: 3.4 },
          { kind: "flow", path: [[250, 220], [600, 600]], color: "#ffcf3f", count: 5, speed: 260, from: 4 },
          { kind: "flow", path: [[950, 230], [600, 600]], color: "#ffcf3f", count: 5, speed: 260, from: 4.3 },
          { kind: "label", at: [600, 150], text: "我在哪、现在几点", side: "bottom", pos: [600, 300], from: 6 }
        ]
      },
      {
        turn: 1, title: "飞了多久 × 光速", duration: 12,
        cues: [
          { kind: "sprite", icon: "🛰️", path: [[200, 250]], size: 100, from: 0.3 },
          { kind: "sprite", icon: "📱", path: [[1000, 640]], size: 90, from: 0.6 },
          { kind: "sprite", icon: "✉️", path: [[260, 290], [950, 610]], size: 60, travel: 3, from: 1.5 },
          { kind: "text", at: [600, 120], text: "收到时间 − 发出时间", size: "m", from: 4.6 },
          { kind: "line", path: [[260, 290], [950, 610]], color: "#ff9f43", width: 4, dashed: true, from: 6 },
          { kind: "label", at: [605, 450], text: "离卫星多远", side: "bottom", pos: [500, 560], from: 6.6 },
          { kind: "text", at: [600, 800], text: "飞的时间 × 光速 = 距离", size: "m", color: "#ff9f43", from: 8 }
        ]
      },
      {
        turn: 2, title: "三个圆圈交一点", duration: 13,
        cues: [
          { kind: "sprite", icon: "🛰️", path: [sats[0]], size: 70, from: 0.3 },
          { kind: "shape", shape: "circle", at: sats[0], size: [reach(sats[0]), reach(sats[0])], color: "none", outline: true, motion: "grow", over: 1.5, from: 1 },
          { kind: "sprite", icon: "🛰️", path: [sats[1]], size: 70, from: 3.4 },
          { kind: "shape", shape: "circle", at: sats[1], size: [reach(sats[1]), reach(sats[1])], color: "none", outline: true, motion: "grow", over: 1.5, from: 4 },
          { kind: "sprite", icon: "🛰️", path: [sats[2]], size: 70, from: 6.4 },
          { kind: "shape", shape: "circle", at: sats[2], size: [reach(sats[2]), reach(sats[2])], color: "none", outline: true, motion: "grow", over: 1.5, from: 7 },
          { kind: "highlight", at: you, size: [120, 120], color: "#e5484d", from: 9.2 },
          { kind: "sprite", icon: "📍", path: [[you[0], you[1] - 30]], size: 80, from: 9.6 }
        ]
      },
      {
        turn: 3, title: "差一点，偏很远", duration: 12,
        cues: [
          { kind: "text", at: [600, 120], text: "百万分之一秒", size: "m", from: 0.3 },
          { kind: "ruler", at: [200, 260], length: 800, every: 0, color: "#ffe08a", caption: "光跑 300 米", draw: 2, from: 1.4 },
          { kind: "sprite", icon: "🏠", path: [[260, 640]], size: 110, from: 4 },
          { kind: "label", at: [260, 590], text: "明明在家", side: "top", pos: [260, 480], from: 4.5 },
          { kind: "sprite", icon: "📍", path: [[260, 620], [900, 620]], size: 70, travel: 2, from: 6 },
          { kind: "label", at: [900, 590], text: "地图说在隔壁", side: "top", pos: [900, 480], from: 8.2 },
          { kind: "text", at: [600, 820], text: "所以卫星装原子钟", size: "m", color: "#2f7d32", from: 9.6 }
        ]
      },
      {
        turn: 4, title: "地面站来对钟", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[600, 880]], size: 300, from: 0.2 },
          { kind: "sprite", icon: "🛰️", path: [[620, 220]], size: 100, from: 0.4 },
          { kind: "sprite", icon: "📡", path: [[350, 690]], size: 110, from: 1.4 },
          { kind: "flow", path: [[380, 630], [590, 270]], color: "#ffcf3f", count: 5, speed: 220, from: 2.6 },
          { kind: "label", at: [480, 450], text: "把钟对准", side: "left", pos: [240, 420], from: 3.6 },
          { kind: "sprite", icon: "📱", path: [[880, 680]], size: 80, from: 6 },
          { kind: "label", at: [880, 640], text: "三方一起合作", side: "top", pos: [900, 520], from: 7.2 }
        ]
      }
    ]
  },
  {
    question: "nanometer",
    scenes: [
      {
        turn: 0, title: "1 纳米有多短", view: "grid", duration: 12,
        cues: [
          { kind: "ruler", at: [150, 220], length: 900, ticks: 10, every: 0, caption: "1 米", draw: 1.5, from: 0.3 },
          { kind: "text", at: [600, 110], text: "分成 10 亿份", size: "m", from: 2 },
          { kind: "arrow", path: [[600, 360], [600, 480]], draw: 0.6, from: 3.6 },
          { kind: "text", at: [600, 560], text: "取一份：1 纳米", size: "l", color: "#7a4fd6", from: 4.4 },
          { kind: "sprite", icon: "💇", path: [[240, 760]], size: 100, from: 7 },
          { kind: "label", at: [300, 760], text: "头发丝：好几万纳米", side: "right", pos: [650, 760], from: 7.6 }
        ]
      },
      {
        turn: 1, title: "芯片是“大脑”", duration: 12,
        cues: [
          { kind: "sprite", icon: "📱", path: [[230, 400]], size: 170, from: 0.3 },
          { kind: "arrow", path: [[340, 400], [520, 400]], draw: 0.6, from: 1.4 },
          { kind: "shape", shape: "rect", at: [740, 400], size: [280, 280], color: "#c9d6e3", from: 2 },
          { kind: "flow", path: [[640, 320], [840, 320], [840, 480], [640, 480], [640, 330]], color: "#4fb6ff", count: 16, speed: 0, size: 7, from: 3 },
          { kind: "label", at: [740, 260], text: "指甲盖那么大", side: "top", pos: [740, 160], from: 3.6 },
          { kind: "text", at: [600, 680], text: "几十亿个小开关", size: "m", from: 5.4 },
          { kind: "text", at: [600, 800], text: "越小，算得越快", size: "m", color: "#2f7d32", from: 8.2 }
        ]
      },
      {
        turn: 2, title: "用光来“印”", duration: 12,
        cues: [
          { kind: "sprite", icon: "💡", path: [[600, 130]], size: 100, from: 0.3 },
          { kind: "shape", shape: "rect", at: [600, 300], size: [420, 80], color: "#ffe08a", text: "电路图", from: 1.2 },
          { kind: "arrow", path: [[600, 360], [600, 540]], draw: 0.8, from: 2.8 },
          { kind: "label", at: [610, 450], text: "缩小照下去", side: "right", pos: [860, 450], from: 3.4 },
          { kind: "flow", path: [[600, 180], [600, 560]], color: "#b48cff", count: 6, speed: 240, size: 8, from: 3 },
          { kind: "shape", shape: "rect", at: [600, 630], size: [240, 110], color: "#c9d6e3", text: "硅片", from: 4 },
          { kind: "text", at: [600, 810], text: "一层层印、一层层刻", size: "m", color: "#2f7d32", from: 6.8 }
        ]
      },
      {
        turn: 3, title: "一边做一边量", duration: 12,
        cues: [
          { kind: "sprite", icon: "🔬", path: [[270, 420]], size: 170, from: 0.3 },
          { kind: "label", at: [270, 330], text: "电子显微镜", side: "top", pos: [270, 200], from: 1 },
          { kind: "shape", shape: "rect", at: [880, 420], size: [260, 140], color: "#c9d6e3", text: "硅片", from: 3.4 },
          { kind: "flow", path: [[560, 420], [740, 420]], color: "#e5484d", count: 6, speed: 260, size: 7, from: 4.2 },
          { kind: "label", at: [880, 490], text: "激光量挪了多远", side: "bottom", pos: [880, 600], from: 4.8 },
          { kind: "text", at: [600, 800], text: "量得准，才做得准", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 4, title: "几纳米是名字", duration: 11,
        cues: [
          { kind: "myth", wrong: "几纳米就是线宽几纳米", right: "更像一代代芯片的名字", from: 0.5, to: 6 },
          { kind: "sprite", icon: "📱", path: [[600, 330]], size: 150, from: 6.2 },
          { kind: "flow", path: [[300, 540], [900, 540]], color: "#9b7bea", count: 20, speed: 0, size: 12, from: 6.8 },
          { kind: "text", at: [600, 700], text: "最细处：几十个原子宽", size: "m", from: 7.4 }
        ]
      }
    ]
  },
  {
    question: "earth-checkup",
    scenes: [
      {
        turn: 0, title: "卫星量海面", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🛰️", path: [[600, 180]], size: 130, from: 0.3 },
          { kind: "flow", path: [[580, 260], [580, 580]], color: "#ffe08a", count: 6, speed: 260, size: 9, from: 1.2 },
          { kind: "flow", path: [[620, 580], [620, 260]], color: "#4fb6ff", count: 6, speed: 260, size: 9, from: 2 },
          { kind: "shape", shape: "rect", at: [600, 650], size: [1000, 90], color: "#2b6cb0", text: "大海", from: 0.6 },
          { kind: "label", at: [640, 410], text: "来回时间 × 光速", side: "right", pos: [920, 410], color: "#ffe08a", from: 3.4 },
          { kind: "text", at: [600, 820], text: "量准到厘米和毫米", size: "m", color: "#ffffff", from: 6.8 }
        ]
      },
      {
        turn: 1, title: "每年涨 4 毫米多", view: "grid", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "1993 年起连续记账", size: "m", color: "#225dac", from: 0.3 },
          { kind: "line", path: [[180, 560], [420, 510], [660, 440], [980, 330]], color: "#e5484d", width: 8, draw: 2, from: 1.4 },
          { kind: "count", at: [340, 310], label: "一共涨高", start: 0, end: 11, unit: "厘米多", over: 2, from: 3.6 },
          { kind: "label", at: [980, 330], text: "每年约 4 毫米多", side: "bottom", pos: [920, 470], from: 5.2 },
          { kind: "text", at: [600, 780], text: "全世界的浪花平均抵消", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 2, title: "冰化和海水变胖", duration: 11,
        cues: [
          { kind: "sprite", icon: "🏔️", path: [[300, 330]], size: 150, from: 0.3 },
          { kind: "label", at: [300, 420], text: "冰川融化流进海", side: "bottom", pos: [300, 530], from: 1 },
          { kind: "sprite", icon: "🌡️", path: [[900, 330]], size: 150, from: 2.6 },
          { kind: "label", at: [900, 420], text: "海水受热胀大", side: "bottom", pos: [900, 530], from: 3.2 },
          { kind: "text", at: [600, 770], text: "两件事一起抬高海面", size: "m", color: "#e5484d", from: 6.4 }
        ]
      },
      {
        turn: 3, title: "4000 个潜水浮标", duration: 12,
        cues: [
          { kind: "count", at: [300, 230], label: "海洋浮标", start: 0, end: 4000, unit: "个", over: 2, from: 0.4 },
          { kind: "sprite", icon: "🤿", path: [[760, 220], [760, 580], [760, 240]], size: 110, travel: 5, from: 1.4 },
          { kind: "label", at: [760, 580], text: "潜到 2000 米深", side: "right", pos: [980, 560], from: 3.4 },
          { kind: "sprite", icon: "🛰️", path: [[1020, 190]], size: 100, from: 5.4 },
          { kind: "text", at: [600, 800], text: "沿路量水温，发给卫星", size: "m", color: "#225dac", from: 7 }
        ]
      },
      {
        turn: 4, title: "一百万里数几个", view: "grid", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏔️", path: [[230, 320]], size: 150, from: 0.3 },
          { kind: "label", at: [230, 410], text: "1958 年起天天数", side: "bottom", pos: [230, 520], from: 1 },
          { kind: "shape", shape: "pill", at: [620, 320], size: [220, 96], color: "#bfe3ff", text: "315 个", from: 2.4 },
          { kind: "arrow", path: [[745, 320], [855, 320]], draw: 0.6, from: 3.4 },
          { kind: "shape", shape: "pill", at: [990, 320], size: [240, 96], color: "#ffd6bf", text: "420 多个", from: 4.2 },
          { kind: "text", at: [600, 740], text: "同一套单位，给地球体检", size: "m", color: "#2f7d32", from: 7 }
        ]
      }
    ]
  },
  {
    question: "ligo",
    scenes: [
      {
        turn: 0, title: "4 千米的激光大尺", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🕳️", path: [[260, 260]], size: 120, spin: true, from: 0.3 },
          { kind: "pulse", at: [260, 260], color: "#b48cff", radius: 190, rate: 1.5, from: 0.8 },
          { kind: "line", path: [[640, 220], [640, 620], [1040, 620]], color: "#ffe08a", width: 12, draw: 1.2, from: 2.4 },
          { kind: "label", at: [840, 620], text: "两条 4 千米长臂", side: "bottom", pos: [840, 730], color: "#ffe08a", from: 3.6 },
          { kind: "text", at: [600, 840], text: "捕捉十几亿光年外的涟漪", size: "m", color: "#ffffff", from: 6.8 }
        ]
      },
      {
        turn: 1, title: "质子万分之一", view: "space", duration: 12,
        cues: [
          { kind: "shape", shape: "circle", at: [300, 380], size: [170, 170], color: "#ff9fb0", text: "质子", from: 0.4 },
          { kind: "label", at: [385, 380], text: "再小一万倍！", side: "right", pos: [660, 380], color: "#ffe08a", from: 1.4 },
          { kind: "sprite", icon: "⭐", path: [[980, 260]], size: 110, from: 3.8 },
          { kind: "text", at: [600, 640], text: "4.2 光年外的比邻星", size: "m", color: "#ffffff", from: 4.6 },
          { kind: "text", at: [600, 780], text: "只挪了一根头发丝", size: "m", color: "#ffe08a", from: 6.8 }
        ]
      },
      {
        turn: 2, title: "两束激光对步子", view: "grid", duration: 12,
        cues: [
          { kind: "sprite", icon: "🔦", path: [[200, 560]], size: 110, rotate: 45, from: 0.3 },
          { kind: "line", path: [[340, 560], [340, 180]], color: "#e5484d", width: 8, draw: 0.8, from: 1.2 },
          { kind: "line", path: [[340, 560], [880, 560]], color: "#4fb6ff", width: 8, draw: 0.8, from: 1.6 },
          { kind: "sprite", icon: "🪞", path: [[340, 150]], size: 90, from: 2.4 },
          { kind: "sprite", icon: "🪞", path: [[920, 560]], size: 90, from: 2.6 },
          { kind: "label", at: [340, 560], text: "步调相反：互相抵消", side: "bottom", pos: [560, 690], from: 4.6 },
          { kind: "text", at: [600, 820], text: "平时出口一片漆黑", size: "m", color: "#225dac", from: 7 }
        ]
      },
      {
        turn: 3, title: "一拉一压漏出光", view: "space", duration: 12,
        cues: [
          { kind: "line", path: [[340, 560], [340, 140]], color: "#ff7a8a", width: 10, draw: 0.8, from: 0.4 },
          { kind: "label", at: [340, 260], text: "一条拉长一丁点", side: "right", pos: [610, 240], color: "#ffe08a", from: 1.2 },
          { kind: "line", path: [[340, 560], [800, 560]], color: "#4fb6ff", width: 10, draw: 0.8, from: 2 },
          { kind: "label", at: [620, 560], text: "另一条压短一丁点", side: "top", pos: [680, 440], color: "#ffe08a", from: 2.8 },
          { kind: "pulse", at: [340, 680], color: "#ffe08a", radius: 110, from: 5 },
          { kind: "text", at: [600, 820], text: "步调错开，漏出亮光！", size: "m", color: "#ffe08a", from: 6.4 }
        ]
      },
      {
        turn: 4, title: "3000 千米外一起听", duration: 12,
        cues: [
          { kind: "sprite", icon: "📐", path: [[250, 360]], size: 140, from: 0.3 },
          { kind: "sprite", icon: "📐", path: [[950, 360]], size: 140, from: 1 },
          { kind: "line", path: [[340, 360], [860, 360]], color: "#ff9f43", width: 5, dashed: true, draw: 1, from: 1.8 },
          { kind: "label", at: [600, 360], text: "相隔 3000 千米", side: "top", pos: [600, 240], from: 2.6 },
          { kind: "text", at: [600, 620], text: "几毫秒内同时收到", size: "m", color: "#225dac", from: 5.2 },
          { kind: "text", at: [600, 780], text: "听见宇宙心跳的声音", size: "m", color: "#2f7d32", from: 7.6 }
        ]
      }
    ]
  }
];
