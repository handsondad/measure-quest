import type { Film } from "./types.ts";

const celsius = [{ at: 0.1, text: "0 度" }, { at: 0.9, text: "100 度" }];

export const films: readonly Film[] = [
  {
    question: "thermometer",
    scenes: [
      {
        turn: 0, title: "热胀冷缩", duration: 12,
        cues: [
          { kind: "thermo", at: [350, 720], height: 520, start: 0.35, end: 0.78, over: 3, from: 0.3, to: 6.2 },
          { kind: "label", at: [350, 720], text: "小泡里的红液体", side: "right", pos: [620, 760], from: 1 },
          { kind: "sprite", icon: "☀️", path: [[820, 230]], size: 110, from: 1.8, to: 6 },
          { kind: "text", at: [820, 430], text: "红线往上爬", size: "m", color: "#e5484d", from: 3, to: 6 },
          { kind: "thermo", at: [350, 720], height: 520, start: 0.78, end: 0.3, over: 3, from: 6.2 },
          { kind: "sprite", icon: "❄️", path: [[820, 230]], size: 110, from: 6.4 },
          { kind: "text", at: [820, 430], text: "红线往下降", size: "m", color: "#4d96ff", from: 7.6 }
        ]
      },
      {
        turn: 1, title: "细管子的魔法", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "管子特别细！", size: "m", from: 0.6 },
          { kind: "shape", shape: "rect", at: [330, 560], size: [240, 200], color: "#bfe3ff", text: "一杯水", from: 1 },
          { kind: "arrow", path: [[470, 560], [640, 560]], draw: 0.6, from: 2.4 },
          { kind: "shape", shape: "rect", at: [790, 450], size: [44, 460], color: "#4fb6ff", motion: "grow", over: 2, from: 3 },
          { kind: "label", at: [812, 330], text: "吸管里显得高", side: "right", pos: [990, 300], from: 5 },
          { kind: "text", at: [600, 820], text: "一点点变成长长一截", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 2, title: "0 度和 100 度", duration: 12,
        cues: [
          { kind: "text", at: [880, 150], text: "摄氏度", size: "l", color: "#e5484d", from: 0.4 },
          { kind: "thermo", at: [460, 780], height: 560, start: 0.1, end: 0.1, marks: celsius, from: 0.6, to: 5.2 },
          { kind: "sprite", icon: "🧊", path: [[260, 670]], size: 90, from: 1.4 },
          { kind: "thermo", at: [460, 780], height: 560, start: 0.1, end: 0.9, over: 3, marks: celsius, from: 5.2 },
          { kind: "sprite", icon: "♨️", path: [[260, 220]], size: 90, from: 6.2 },
          { kind: "text", at: [880, 430], text: "分成 100 份", size: "m", from: 8.4 },
          { kind: "text", at: [880, 530], text: "一份 = 1 度", size: "m", color: "#2f7d32", from: 9.4 }
        ]
      },
      {
        turn: 3, title: "一开始定反了", duration: 11,
        cues: [
          { kind: "thermo", at: [400, 650], height: 450, start: 0.5, end: 0.5, marks: [{ at: 0.12, text: "100 结冰" }, { at: 0.9, text: "0 烧开" }], from: 0.3, to: 5.6 },
          { kind: "myth", wrong: "一开始就是冰水 0 度", right: "摄尔修斯起初定反了", from: 1.6, to: 5.6 },
          { kind: "thermo", at: [400, 650], height: 450, start: 0.5, end: 0.5, marks: [{ at: 0.12, text: "0 结冰" }, { at: 0.9, text: "100 烧开" }], from: 5.6 },
          { kind: "text", at: [870, 360], text: "倒过来！", size: "l", color: "#ff9f43", from: 6 },
          { kind: "text", at: [870, 520], text: "说好了就能用", size: "m", color: "#2f7d32", from: 7.8 }
        ]
      },
      {
        turn: 4, title: "我的体温", duration: 11,
        cues: [
          { kind: "thermo", at: [380, 780], height: 520, start: 0.2, end: 0.62, over: 2.5, marks: [{ at: 0.62, text: "36～37 度" }], from: 0.3 },
          { kind: "sprite", icon: "🧒", path: [[870, 360]], size: 160, from: 1 },
          { kind: "label", at: [870, 430], text: "36 到 37 度", side: "bottom", pos: [870, 540], from: 2.6 },
          { kind: "sprite", icon: "🌡️", path: [[1040, 260]], size: 80, rotate: 30, from: 4.4 },
          { kind: "text", at: [870, 700], text: "高了不少：告诉大人", size: "s", color: "#e5484d", from: 6.6 }
        ]
      }
    ]
  },
  {
    question: "fahrenheit",
    scenes: [
      {
        turn: 0, title: "77 度？", duration: 11,
        cues: [
          { kind: "sprite", icon: "📺", path: [[600, 320]], size: 230, from: 0.3 },
          { kind: "text", at: [600, 330], text: "77 度", size: "l", color: "#e5484d", from: 0.9 },
          { kind: "sprite", icon: "😱", path: [[920, 230]], size: 100, from: 2, to: 5 },
          { kind: "text", at: [600, 600], text: "华氏 77 = 摄氏 25", size: "m", from: 5.2 },
          { kind: "sprite", icon: "👕", path: [[560, 770]], size: 100, from: 7.4 },
          { kind: "label", at: [600, 770], text: "穿短袖刚好", side: "right", pos: [860, 770], from: 8 }
        ]
      },
      {
        turn: 1, title: "两把温度的尺子", duration: 13,
        cues: [
          { kind: "text", at: [380, 140], text: "摄氏度", size: "m", from: 0.4 },
          { kind: "thermo", at: [380, 780], height: 500, start: 0.1, end: 0.1, marks: [{ at: 0.1, text: "0" }, { at: 0.9, text: "100" }], from: 0.6 },
          { kind: "text", at: [820, 140], text: "华氏度", size: "m", from: 2.6 },
          { kind: "thermo", at: [820, 780], height: 500, start: 0.1, end: 0.1, marks: [{ at: 0.1, text: "32" }, { at: 0.9, text: "212" }], from: 2.8 },
          { kind: "label", at: [358, 490], text: "100 格", side: "left", pos: [200, 490], from: 6 },
          { kind: "label", at: [798, 490], text: "180 格", side: "left", pos: [640, 490], from: 7.4 },
          { kind: "text", at: [600, 860], text: "华氏一格更小", size: "m", color: "#ff9f43", from: 10 }
        ]
      },
      {
        turn: 2, title: "冰、水和一种盐", duration: 11,
        cues: [
          { kind: "text", at: [600, 120], text: "三百年前：华伦海特", size: "m", from: 0.3 },
          { kind: "sprite", icon: "🧊", path: [[280, 400]], size: 100, from: 1 },
          { kind: "sprite", icon: "💧", path: [[430, 400]], size: 90, from: 1.5 },
          { kind: "sprite", icon: "🧂", path: [[580, 400]], size: 90, from: 2 },
          { kind: "arrow", path: [[670, 400], [800, 400]], draw: 0.6, from: 3 },
          { kind: "text", at: [960, 400], text: "华氏 0 度", size: "m", color: "#4d96ff", from: 3.6 },
          { kind: "text", at: [600, 620], text: "普通冰水：32 度", size: "m", from: 6 },
          { kind: "text", at: [600, 760], text: "做得准，流行起来", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "多数国家用摄氏度", duration: 11,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[600, 440]], size: 280, from: 0.3 },
          { kind: "text", at: [600, 140], text: "0 度结冰，100 度烧开", size: "m", from: 1.4 },
          { kind: "label", at: [520, 420], text: "多数国家：摄氏", side: "left", pos: [240, 330], from: 3.6 },
          { kind: "label", at: [690, 380], text: "美国：华氏", side: "right", pos: [980, 300], from: 5 },
          { kind: "text", at: [600, 780], text: "都没错，只是习惯不同", size: "m", color: "#2f7d32", from: 7.6 }
        ]
      },
      {
        turn: 4, title: "减 30，除以 2", view: "grid", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [200, 400], size: [200, 90], color: "#ffd6bf", text: "77", from: 0.5 },
          { kind: "arrow", path: [[310, 400], [430, 400]], text: "−30", draw: 0.6, from: 1.6 },
          { kind: "shape", shape: "pill", at: [540, 400], size: [200, 90], color: "#ffe08a", text: "47", from: 2.6 },
          { kind: "arrow", path: [[650, 400], [770, 400]], text: "÷2", draw: 0.6, from: 3.6 },
          { kind: "shape", shape: "pill", at: [890, 400], size: [220, 90], color: "#b9f0c8", text: "约 23", from: 4.6 },
          { kind: "text", at: [600, 620], text: "真的是 25 度，差不远", size: "m", from: 6.6 },
          { kind: "text", at: [600, 780], text: "零下 40 度：两种一样", size: "m", color: "#7a4fd6", from: 9 }
        ]
      }
    ]
  },
  {
    question: "kelvin",
    scenes: [
      {
        turn: 0, title: "最冷能有多冷", duration: 13,
        cues: [
          { kind: "thermo", at: [360, 780], height: 560, start: 0.6, end: 0.04, over: 6, color: "#4d96ff", marks: [{ at: 0.5, text: "−18 冷冻室" }, { at: 0.3, text: "−80 多 南极" }, { at: 0.04, text: "−273.15" }], from: 0.3 },
          { kind: "sprite", icon: "🧊", path: [[820, 260]], size: 110, from: 1.6 },
          { kind: "sprite", icon: "🐧", path: [[820, 440]], size: 110, from: 3.4 },
          { kind: "text", at: [820, 630], text: "再也不能更冷", size: "m", color: "#225dac", from: 6.6 },
          { kind: "text", at: [820, 760], text: "绝对零度", size: "l", color: "#2f7d32", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "冷热是抖动", duration: 12,
        cues: [
          { kind: "flow", path: [[200, 220], [460, 220], [460, 440], [200, 440], [200, 220]], color: "#e5484d", count: 8, speed: 380, size: 12, from: 0.3 },
          { kind: "label", at: [330, 460], text: "越热抖得越厉害", side: "bottom", pos: [330, 560], from: 1 },
          { kind: "flow", path: [[740, 220], [1000, 220], [1000, 440], [740, 440], [740, 220]], color: "#4d96ff", count: 8, speed: 50, size: 12, from: 3 },
          { kind: "label", at: [870, 460], text: "越冷抖得越慢", side: "bottom", pos: [870, 560], from: 3.6 },
          { kind: "text", at: [600, 760], text: "绝对零度：几乎抖不动", size: "m", color: "#225dac", from: 7 }
        ]
      },
      {
        turn: 2, title: "开尔文的起点", duration: 12,
        cues: [
          { kind: "thermo", at: [360, 780], height: 560, start: 0.04, end: 0.04, color: "#4d96ff", marks: [{ at: 0.04, text: "0 开" }], from: 0.3 },
          { kind: "sprite", icon: "🧔", path: [[820, 280]], size: 150, from: 1.4 },
          { kind: "label", at: [820, 360], text: "开尔文勋爵", side: "bottom", pos: [820, 460], from: 2 },
          { kind: "text", at: [820, 600], text: "起点：最冷的尽头", size: "m", color: "#225dac", from: 4.4 },
          { kind: "text", at: [820, 740], text: "1 开 = 1 摄氏度", size: "m", color: "#2f7d32", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "没有负数的温度", duration: 13,
        cues: [
          { kind: "thermo", at: [360, 780], height: 560, start: 0.05, end: 0.82, over: 5, color: "#e5484d", marks: [{ at: 0.05, text: "0 开" }, { at: 0.65, text: "273 开 冰水" }, { at: 0.82, text: "310 开 体温" }], from: 0.3 },
          { kind: "sprite", icon: "🧊", path: [[820, 260]], size: 100, from: 2.4 },
          { kind: "sprite", icon: "🧒", path: [[960, 260]], size: 100, from: 4.4 },
          { kind: "text", at: [820, 500], text: "永远没有负数", size: "m", color: "#225dac", from: 6.4 },
          { kind: "text", at: [820, 650], text: "7 个基本单位之一", size: "m", color: "#2f7d32", from: 9 }
        ]
      },
      {
        turn: 4, title: "宇宙里的冷", view: "space", duration: 12,
        cues: [
          { kind: "text", at: [600, 120], text: "比 0 开只高十亿分之一", size: "m", color: "#ffe08a", from: 0.3 },
          { kind: "sprite", icon: "⚛️", path: [[330, 380]], size: 150, from: 1.4 },
          { kind: "label", at: [330, 470], text: "实验室的冷原子", side: "bottom", pos: [330, 570], color: "#ffe08a", from: 2 },
          { kind: "sprite", icon: "🌌", path: [[870, 380]], size: 150, from: 4.4 },
          { kind: "label", at: [870, 470], text: "太空约 3 开", side: "bottom", pos: [870, 570], color: "#ffe08a", from: 5 },
          { kind: "text", at: [600, 770], text: "冰棍算热乎的", size: "m", color: "#ffffff", from: 8 }
        ]
      }
    ]
  }
];
