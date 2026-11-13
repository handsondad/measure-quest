import { arc } from "./paths.ts";
import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "sixty-seconds",
    scenes: [
      {
        turn: 0, title: "古巴比伦的数法", duration: 11,
        cues: [
          { kind: "clock", at: [300, 420], size: 340, speed: 6, caption: "60 秒一分", from: 0.3 },
          { kind: "sprite", icon: "🏛️", path: [[850, 300]], size: 120, from: 1.5 },
          { kind: "label", at: [850, 300], text: "古巴比伦", side: "bottom", pos: [850, 420], from: 2 },
          { kind: "text", at: [850, 130], text: "大约四千年前", size: "m", from: 2.4 },
          { kind: "text", at: [850, 560], text: "六十个六十个地数", size: "m", color: "#7a4fd6", from: 4 },
          { kind: "count", at: [850, 760], label: "一分钟有", start: 0, end: 60, unit: "秒", over: 3, from: 6.6 }
        ]
      },
      {
        turn: 1, title: "60 特别好分", view: "grid", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [300, 430], size: [280, 280], color: "#ffe08a", text: "60", from: 0.3, to: 7.2 },
          { kind: "shape", shape: "pill", at: [820, 200], size: [300, 76], color: "#b9f0c8", text: "÷2=30", from: 1.5 },
          { kind: "shape", shape: "pill", at: [820, 300], size: [300, 76], color: "#b9f0c8", text: "÷3=20", from: 2.3 },
          { kind: "shape", shape: "pill", at: [820, 400], size: [300, 76], color: "#b9f0c8", text: "÷4=15", from: 3.1 },
          { kind: "shape", shape: "pill", at: [820, 500], size: [300, 76], color: "#b9f0c8", text: "÷5=12", from: 3.9 },
          { kind: "shape", shape: "pill", at: [820, 600], size: [300, 76], color: "#b9f0c8", text: "÷6=10", from: 4.7 },
          { kind: "shape", shape: "rect", at: [300, 430], size: [280, 280], color: "#ffd6bf", text: "100", from: 7.4 },
          { kind: "text", at: [600, 800], text: "100 分不成 3 份", size: "m", color: "#e5484d", from: 8.4 }
        ]
      },
      {
        turn: 2, title: "一天 24 小时", duration: 11,
        cues: [
          { kind: "sprite", icon: "🔺", path: [[600, 170]], size: 90, from: 0.4 },
          { kind: "sprite", icon: "☀️", path: [[340, 320]], size: 120, from: 1 },
          { kind: "text", at: [340, 470], text: "白天 12 段", size: "m", from: 1.6 },
          { kind: "sprite", icon: "🌙", path: [[860, 320]], size: 120, from: 2.6 },
          { kind: "text", at: [860, 470], text: "黑夜 12 段", size: "m", from: 3.2 },
          { kind: "text", at: [600, 650], text: "12+12=24 小时", size: "l", color: "#ff9f43", from: 5 }
        ]
      },
      {
        turn: 3, title: "十进制时间", duration: 11,
        cues: [
          { kind: "text", at: [600, 130], text: "两百多年前的法国", size: "m", from: 0.4 },
          { kind: "clock", at: [330, 360], size: 280, speed: 30, caption: "老钟表", from: 0.8 },
          { kind: "shape", shape: "circle", at: [870, 350], size: [260, 260], color: "#fff3d6", text: "十进制", outline: true, from: 1.8 },
          { kind: "text", at: [870, 540], text: "一天 10 小时", size: "s", from: 2.4, to: 6.1 },
          { kind: "text", at: [870, 605], text: "一小时 100 分", size: "s", from: 3.2, to: 6.1 },
          { kind: "text", at: [870, 670], text: "一分 100 秒", size: "s", from: 4, to: 6.1 },
          { kind: "myth", wrong: "十进制时间更好用", right: "大家用不惯，没多久就放弃", from: 6.4 }
        ]
      },
      {
        turn: 4, title: "一秒有多长？", duration: 10,
        cues: [
          { kind: "text", at: [600, 120], text: "一秒到底有多长？", size: "m", from: 0.4 },
          { kind: "sprite", icon: "🌍", path: [[320, 420]], size: 190, from: 0.8 },
          { kind: "label", at: [320, 420], text: "以前：地球转一圈", side: "bottom", pos: [320, 600], from: 1.5 },
          { kind: "arrow", path: [[500, 420], [680, 420]], draw: 0.7, from: 3.4 },
          { kind: "sprite", icon: "⚛️", path: [[880, 420]], size: 170, from: 4.2 },
          { kind: "label", at: [880, 420], text: "现在：原子钟", side: "bottom", pos: [880, 600], from: 4.9 }
        ]
      }
    ]
  },
  {
    question: "atomic-second",
    scenes: [
      {
        turn: 0, title: "一天分成 86400 份", duration: 11,
        cues: [
          { kind: "sprite", icon: "☀️", path: [[320, 140]], size: 80, from: 0.3 },
          { kind: "sprite", icon: "🌍", path: [[320, 430]], size: 220, spin: true, from: 0.6 },
          { kind: "label", at: [320, 430], text: "转一圈：一天", side: "bottom", pos: [320, 640], from: 1.6 },
          { kind: "text", at: [820, 250], text: "24 × 60 × 60", size: "m", from: 3 },
          { kind: "count", at: [820, 440], label: "一天有", start: 0, end: 86400, unit: "秒", over: 2.5, from: 4 },
          { kind: "text", at: [600, 810], text: "一份就是一秒", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 1, title: "地球钟不太准", view: "space", duration: 11,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[600, 440]], size: 240, spin: true, from: 0.3 },
          { kind: "text", at: [600, 110], text: "有时快，有时慢", size: "m", color: "#ffe08a", from: 1.5 },
          { kind: "flow", path: arc([600, 440], 220, 0, 360, 48), icon: "🌊", count: 4, speed: 120, size: 16, from: 4 },
          { kind: "label", at: [790, 330], text: "潮水像刹车", side: "right", from: 5 },
          { kind: "text", at: [600, 820], text: "一秒跟着变了", size: "m", color: "#ff5a5f", from: 8 }
        ]
      },
      {
        turn: 2, title: "铯原子在摆动", duration: 12,
        cues: [
          { kind: "shape", shape: "circle", at: [600, 400], size: [220, 220], color: "#e9dcff", text: "铯原子", motion: "pulse", from: 0.3 },
          { kind: "pulse", at: [600, 400], color: "#7a4fd6", radius: 200, rate: 3, from: 1.5 },
          { kind: "text", at: [600, 110], text: "又快又整齐，永远不变", size: "m", from: 2 },
          { kind: "text", at: [170, 230], text: "1967 年", size: "s", from: 3 },
          { kind: "count", at: [600, 700], label: "摆动次数", start: 0, end: 9192631770, over: 4, from: 4.2 },
          { kind: "text", at: [600, 840], text: "= 一秒", size: "m", color: "#2f7d32", from: 8.8 }
        ]
      },
      {
        turn: 3, title: "上亿年才差一秒", duration: 11,
        cues: [
          { kind: "clock", at: [330, 420], size: 300, caption: "原子钟", from: 0.3 },
          { kind: "label", at: [330, 300], text: "上亿年才差一秒", side: "top", pos: [330, 150], from: 1.8 },
          { kind: "clock", at: [870, 420], size: 300, speed: 1.04, start: 10 * 3600 + 10 * 60 + 4, caption: "电子手表", from: 3.6 },
          { kind: "label", at: [870, 300], text: "一个月差好几秒", side: "top", pos: [870, 150], from: 4.4 },
          { kind: "text", at: [600, 800], text: "才发现地球忽快忽慢", size: "m", color: "#7a4fd6", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "加一个闰秒", duration: 12,
        cues: [
          { kind: "clock", at: [300, 420], size: 300, caption: "原子钟", from: 0.3 },
          { kind: "sprite", icon: "🌍", path: [[880, 420]], size: 200, from: 0.9 },
          { kind: "label", at: [880, 330], text: "转慢了", side: "top", pos: [880, 220], from: 1.6 },
          { kind: "text", at: [600, 100], text: "1972 年起：闰秒", size: "m", from: 3 },
          { kind: "shape", shape: "pill", at: [600, 650], size: [220, 84], color: "#ffe08a", text: "+1 秒", motion: "pulse", from: 3.8 },
          { kind: "text", at: [600, 810], text: "2035 年前不再加", size: "m", color: "#7a6a55", from: 8 }
        ]
      }
    ]
  },
  {
    question: "quarter-hour",
    scenes: [
      {
        turn: 0, title: "刻在尺上的时间", duration: 12,
        cues: [
          { kind: "clock", at: [310, 400], size: 290, speed: 15, caption: "一刻钟", from: 0.3 },
          { kind: "ruler", at: [820, 160], length: 440, ticks: 8, every: 0, vertical: true, color: "#e8c48a", caption: "漏箭", draw: 1.4, from: 1.4 },
          { kind: "label", at: [780, 600], text: "走一道 = 一刻", side: "bottom", pos: [820, 690], from: 3 },
          { kind: "text", at: [600, 820], text: "铜壶滴漏记时间", size: "m", color: "#c27c0e", from: 6.6 }
        ]
      },
      {
        turn: 1, title: "水涨箭浮", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [420, 230], size: [220, 150], color: "#c99a5b", text: "漏壶", from: 0.3 },
          { kind: "flow", path: [[420, 320], [420, 500]], icon: "💧", count: 5, speed: 150, size: 11, from: 1 },
          { kind: "shape", shape: "rect", at: [420, 610], size: [260, 200], color: "#bfe3ff", text: "受水壶", from: 1.6 },
          { kind: "sprite", icon: "📏", path: [[420, 520], [420, 390]], size: 110, travel: 5, from: 2.4 },
          { kind: "label", at: [480, 430], text: "浮舟托着漏箭升", side: "right", pos: [830, 430], from: 3.4 },
          { kind: "text", at: [600, 820], text: "阴天半夜都能报时", size: "m", color: "#2f7d32", from: 7.2 }
        ]
      },
      {
        turn: 2, title: "多级平水壶", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [300, 210], size: [200, 110], color: "#d8b07a", text: "日天壶", from: 0.3 },
          { kind: "shape", shape: "rect", at: [480, 380], size: [220, 110], color: "#c99a5b", text: "平水壶", from: 1.2 },
          { kind: "label", at: [590, 380], text: "水面永远一样高", side: "right", pos: [880, 320], from: 2.2 },
          { kind: "flow", path: [[480, 450], [480, 580]], icon: "💧", count: 4, speed: 160, size: 11, from: 3 },
          { kind: "shape", shape: "rect", at: [480, 650], size: [240, 130], color: "#bfe3ff", text: "受水壶", from: 3.6 },
          { kind: "text", at: [600, 820], text: "水压稳，滴水一样快", size: "m", color: "#2f7d32", from: 6.8 }
        ]
      },
      {
        turn: 3, title: "一天 100 刻", view: "grid", duration: 11,
        cues: [
          { kind: "shape", shape: "pill", at: [360, 340], size: [280, 110], color: "#ffe08a", text: "100 刻", from: 0.4 },
          { kind: "shape", shape: "pill", at: [840, 340], size: [280, 110], color: "#e9dcff", text: "12 时辰", from: 1.6 },
          { kind: "text", at: [600, 560], text: "1 刻 ≈ 14 分多", size: "m", color: "#225dac", from: 3.6 },
          { kind: "text", at: [600, 740], text: "100 ÷ 12 除不尽", size: "m", color: "#e5484d", from: 6.4 }
        ]
      },
      {
        turn: 4, title: "清朝改成 96 刻", view: "grid", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "清朝初年：一天 96 刻", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "shape", shape: "pill", at: [300, 360], size: [280, 100], color: "#bfe3ff", text: "24 小时", from: 1.4 },
          { kind: "arrow", path: [[460, 360], [660, 360]], text: "1 小时 4 刻", draw: 0.7, from: 2.6 },
          { kind: "shape", shape: "pill", at: [860, 360], size: [300, 100], color: "#b9f0c8", text: "96 刻", from: 3.6 },
          { kind: "text", at: [600, 620], text: "1 刻 = 15 分钟", size: "l", color: "#2f7d32", from: 5.6 },
          { kind: "text", at: [600, 790], text: "一直留到了今天", size: "m", color: "#7a4fd6", from: 8.2 }
        ]
      }
    ]
  },
  {
    question: "optical-clock",
    scenes: [
      {
        turn: 0, title: "激光格子里的光钟", view: "space", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "光钟：快几万倍", size: "m", color: "#ffe08a", from: 0.3 },
          { kind: "shape", shape: "circle", at: [600, 410], size: [220, 220], color: "#e9dcff", text: "光钟", motion: "pulse", from: 1 },
          { kind: "pulse", at: [600, 410], color: "#b48cff", radius: 220, rate: 4, from: 1.6 },
          { kind: "text", at: [600, 720], text: "一百多亿年", size: "m", color: "#ffffff", from: 4.6 },
          { kind: "text", at: [600, 830], text: "误差不到 1 秒", size: "m", color: "#ffe08a", from: 6.8 }
        ]
      },
      {
        turn: 1, title: "抬高几厘米就变快", duration: 12,
        cues: [
          { kind: "clock", at: [320, 500], size: 240, speed: 1, caption: "低处慢一丁点", from: 0.4 },
          { kind: "clock", at: [880, 320], size: 240, speed: 1.25, caption: "高处快一丁点", from: 1.6 },
          { kind: "arrow", path: [[600, 520], [600, 320]], color: "#ff9f43", text: "抬高几厘米", draw: 0.8, from: 3.2 },
          { kind: "text", at: [600, 790], text: "引力轻一点，时间快一点", size: "m", color: "#7a4fd6", from: 6.4 }
        ]
      },
      {
        turn: 2, title: "拿钟表量高山", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏔️", path: [[560, 420]], size: 280, from: 0.3 },
          { kind: "sprite", icon: "⏰", path: [[360, 540]], size: 90, from: 1.4 },
          { kind: "sprite", icon: "⏰", path: [[560, 250]], size: 90, from: 2.2 },
          { kind: "label", at: [620, 250], text: "比一比谁走得快", side: "right", pos: [900, 250], from: 3 },
          { kind: "text", at: [600, 770], text: "算出高度差了几厘米", size: "m", color: "#2f7d32", from: 6.4 }
        ]
      },
      {
        turn: 3, title: "月球每天快 56 微秒", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[280, 380]], size: 180, from: 0.3 },
          { kind: "sprite", icon: "🌕", path: [[900, 380]], size: 140, from: 1.2 },
          { kind: "label", at: [900, 280], text: "每天快约 56 微秒", side: "top", pos: [880, 175], color: "#ffe08a", from: 2.4 },
          { kind: "count", at: [600, 620], label: "光能跑将近", start: 0, end: 17, unit: "千米", over: 2, from: 4.8 },
          { kind: "text", at: [600, 820], text: "不对准就会偏十几千米", size: "m", color: "#ff5a5f", from: 7.6 }
        ]
      },
      {
        turn: 4, title: "月球时间和新秒针", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌕", path: [[320, 380]], size: 150, from: 0.3 },
          { kind: "label", at: [320, 480], text: "专门的月球时间", side: "bottom", pos: [320, 580], color: "#ffe08a", from: 1.2 },
          { kind: "sprite", icon: "⚛️", path: [[880, 380]], size: 150, from: 3 },
          { kind: "label", at: [880, 480], text: "2030 年前后换新秒", side: "bottom", pos: [880, 580], color: "#ffe08a", from: 3.8 },
          { kind: "text", at: [600, 790], text: "秒针再准上一百倍", size: "m", color: "#ffffff", from: 7.2 }
        ]
      }
    ]
  }
];
