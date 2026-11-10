import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "mole",
    scenes: [
      {
        turn: 0, title: "一大口水", duration: 12,
        cues: [
          { kind: "sprite", icon: "🥤", path: [[260, 400]], size: 220, from: 0.3 },
          { kind: "label", at: [260, 520], text: "约 18 克", side: "bottom", pos: [260, 640], from: 1.2 },
          { kind: "text", at: [780, 300], text: "6 后面 23 个 0", size: "m", color: "#225dac", from: 2.6 },
          { kind: "flow", path: [[540, 450], [1060, 450]], color: "#4fb6ff", count: 18, speed: 60, size: 8, from: 3 },
          { kind: "sprite", icon: "🏖️", path: [[800, 640]], size: 110, from: 5.6 },
          { kind: "text", at: [600, 820], text: "沙子加起来也没这么多", size: "m", color: "#e5484d", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "一打、一令、一摩尔", duration: 13,
        cues: [
          { kind: "sprite", icon: "🥚", path: [[220, 330]], size: 120, from: 0.3 },
          { kind: "label", at: [220, 400], text: "12 个 = 一打", side: "bottom", pos: [220, 500], from: 0.9 },
          { kind: "sprite", icon: "📄", path: [[600, 330]], size: 120, from: 2.4 },
          { kind: "label", at: [600, 270], text: "500 张 = 一令", side: "top", pos: [600, 190], from: 3 },
          { kind: "sprite", icon: "💧", path: [[980, 330]], size: 120, from: 4.6 },
          { kind: "label", at: [980, 400], text: "1 摩尔：特别大的数", side: "bottom", pos: [930, 500], from: 5.2 },
          { kind: "text", at: [600, 720], text: "不用一个一个去数", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      },
      {
        turn: 2, title: "称一称就能数", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "1 摩尔水分子 ≈ 18 克", size: "m", color: "#225dac", from: 0.3 },
          { kind: "balance", at: [600, 270], size: 210, left: "💧", right: "🧱", from: 1 },
          { kind: "text", at: [600, 730], text: "1 摩尔碳原子 ≈ 12 克", size: "m", from: 4.6 },
          { kind: "text", at: [600, 830], text: "不用数，称出克数", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 3, title: "个数要配对", duration: 12,
        cues: [
          { kind: "shape", shape: "circle", at: [180, 380], size: [100, 100], color: "#ffffff", text: "氢", from: 0.4 },
          { kind: "shape", shape: "circle", at: [300, 380], size: [100, 100], color: "#ffffff", text: "氢", from: 0.8 },
          { kind: "shape", shape: "circle", at: [480, 380], size: [120, 120], color: "#ff9fb0", text: "氧", from: 1.6 },
          { kind: "arrow", path: [[580, 380], [720, 380]], draw: 0.6, from: 2.8 },
          { kind: "shape", shape: "pill", at: [910, 380], size: [260, 110], color: "#bfe3ff", text: "水 水", from: 3.6 },
          { kind: "text", at: [600, 600], text: "个数要配对", size: "l", color: "#c27c0e", from: 5.2 },
          { kind: "text", at: [600, 780], text: "专门一块积木：管个数", size: "m", color: "#7a4fd6", from: 7.8 }
        ]
      },
      {
        turn: 4, title: "阿伏伽德罗常数", duration: 12,
        cues: [
          { kind: "sprite", icon: "👨‍🔬", path: [[250, 400]], size: 170, from: 0.3 },
          { kind: "label", at: [250, 500], text: "两百多年前 · 意大利", side: "bottom", pos: [250, 600], from: 1 },
          { kind: "shape", shape: "rect", at: [800, 400], size: [320, 240], color: "#e9f6ff", outline: true, from: 2.6 },
          { kind: "flow", path: [[690, 330], [910, 330], [910, 470], [690, 470], [690, 340]], color: "#4fb6ff", count: 10, speed: 0, size: 10, from: 3.2 },
          { kind: "label", at: [800, 280], text: "同样大小，个数一样", side: "top", pos: [800, 170], from: 4 },
          { kind: "text", at: [600, 790], text: "2019 年定下，不再改", size: "m", color: "#2f7d32", from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "beans",
    scenes: [
      {
        turn: 0, title: "一样重，不一样多", duration: 12,
        cues: [
          { kind: "balance", at: [600, 250], size: 220, left: "🟢", right: "🟡", caption: "都是一斤", from: 0.3 },
          { kind: "flow", path: [[150, 700], [530, 700]], color: "#3aa655", count: 20, speed: 0, size: 7, from: 3 },
          { kind: "flow", path: [[680, 700], [1050, 700]], color: "#e6c34a", count: 7, speed: 0, size: 18, from: 4 },
          { kind: "text", at: [600, 840], text: "一样重 ≠ 一样多", size: "m", color: "#e5484d", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "先数 100 颗", duration: 12,
        cues: [
          { kind: "flow", path: [[180, 320], [580, 320]], color: "#3aa655", count: 10, speed: 0, size: 10, from: 0.3 },
          { kind: "label", at: [380, 300], text: "先数 100 颗", side: "top", pos: [380, 190], from: 1 },
          { kind: "arrow", path: [[640, 320], [850, 320]], text: "称一称", draw: 0.6, from: 2.6 },
          { kind: "sprite", icon: "⚖️", path: [[980, 320]], size: 130, from: 3.2 },
          { kind: "text", at: [600, 560], text: "一斤是它的多少倍？", size: "m", from: 5 },
          { kind: "text", at: [600, 720], text: "称一称代替数", size: "m", color: "#2f7d32", from: 7.6 }
        ]
      },
      {
        turn: 2, title: "黄豆重好几倍", duration: 11,
        cues: [
          { kind: "text", at: [600, 100], text: "100 颗黄豆重好几倍", size: "m", from: 0.3 },
          { kind: "balance", at: [600, 290], size: 220, left: "🟡", right: "🟢", tilt: 0, tiltTo: -14, over: 1.5, caption: "各 100 颗", from: 1 },
          { kind: "text", at: [600, 760], text: "一斤黄豆：颗数少", size: "m", color: "#c27c0e", from: 6 }
        ]
      },
      {
        turn: 3, title: "化学家数原子", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "个数一样，重量不一样", size: "m", from: 0.3 },
          { kind: "shape", shape: "circle", at: [300, 360], size: [130, 130], color: "#b8c0c8", text: "碳", from: 1.2 },
          { kind: "label", at: [300, 430], text: "≈ 12 克", side: "bottom", pos: [300, 540], from: 1.8 },
          { kind: "shape", shape: "circle", at: [860, 360], size: [180, 180], color: "#d9a07a", text: "铁", from: 3.4 },
          { kind: "label", at: [860, 450], text: "≈ 56 克", side: "bottom", pos: [860, 560], from: 4 },
          { kind: "text", at: [600, 660], text: "都是 1 摩尔", size: "m", color: "#225dac", from: 5.4 },
          { kind: "text", at: [600, 790], text: "就像绿豆和黄豆", size: "m", color: "#2f7d32", from: 7 }
        ]
      },
      {
        turn: 4, title: "皮和馅配对", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "一张皮配一份馅", size: "m", from: 0.3 },
          { kind: "sprite", icon: "🥟", path: [[600, 300]], size: 160, from: 0.8 },
          { kind: "flow", path: [[200, 520], [520, 520]], icon: "⚪", count: 4, speed: 0, size: 14, from: 2.4 },
          { kind: "flow", path: [[680, 520], [1000, 520]], icon: "🟤", count: 4, speed: 0, size: 14, from: 3.2 },
          { kind: "text", at: [600, 760], text: "先想好个数，再称克数", size: "m", color: "#2f7d32", from: 6.4 }
        ]
      }
    ]
  }
];
