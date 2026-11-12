import { arc, spans } from "./paths.ts";
import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "hand-span",
    scenes: [
      {
        turn: 0, title: "小手和大手", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 560], size: [900, 60], color: "#d9a066", text: "书桌", from: 0.2 },
          { kind: "sprite", icon: "🧒", path: [[130, 300]], size: 90, from: 0.5 },
          { kind: "line", path: spans(150, 528, 8, 112.5, 70), color: "#ff9f43", width: 7, draw: 3, from: 1 },
          { kind: "count", at: [330, 150], label: "小念量的", start: 0, end: 8, unit: "拃", over: 3, from: 1 },
          { kind: "sprite", icon: "👨", path: [[1070, 300]], size: 100, from: 5 },
          { kind: "line", path: spans(150, 528, 5, 180, 130), color: "#4d96ff", width: 7, draw: 2.5, from: 5.5 },
          { kind: "count", at: [870, 150], label: "爸爸量的", start: 0, end: 5, unit: "拃", over: 2.5, from: 5.5 },
          { kind: "text", at: [600, 780], text: "桌子没变，是手不一样大", size: "m", color: "#7a6a55", from: 8.5 }
        ]
      },
      {
        turn: 1, title: "用身体来量", duration: 11,
        cues: [
          { kind: "text", at: [600, 130], text: "身体就是尺子", size: "l", from: 0.3 },
          { kind: "sprite", icon: "☝️", path: [[250, 400]], size: 120, from: 1.2 },
          { kind: "label", at: [250, 400], text: "布指知寸", side: "bottom", from: 1.7 },
          { kind: "sprite", icon: "🖐️", path: [[600, 400]], size: 130, from: 3 },
          { kind: "label", at: [600, 400], text: "布手知尺", side: "bottom", from: 3.5 },
          { kind: "sprite", icon: "💪", path: [[950, 400]], size: 130, from: 6 },
          { kind: "label", at: [950, 400], text: "古埃及：肘尺", side: "bottom", from: 6.5 },
          { kind: "sprite", icon: "🔺", path: [[950, 720]], size: 110, from: 8 }
        ]
      },
      {
        turn: 2, title: "大家照着肘尺棒", duration: 11,
        cues: [
          { kind: "shape", shape: "pill", at: [420, 230], size: [340, 56], color: "#ffd6bf", text: "长胳膊", from: 0.3 },
          { kind: "shape", shape: "pill", at: [360, 320], size: [220, 56], color: "#ffd6bf", text: "短胳膊", from: 0.9 },
          { kind: "text", at: [880, 270], text: "不一样长？", size: "m", color: "#e5484d", from: 1.6, to: 4.5 },
          { kind: "ruler", at: [200, 470], length: 800, ticks: 7, every: 0, color: "#e8c48a", caption: "肘尺棒", draw: 1.5, from: 3.5 },
          { kind: "label", at: [600, 520], text: "照着它量", side: "top", pos: [880, 400], from: 5.5 },
          { kind: "text", at: [600, 790], text: "大家都照着用：标准", size: "m", color: "#2f7d32", from: 7.5 }
        ]
      },
      {
        turn: 3, title: "没有标准会乱套", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 230], size: [640, 90], color: "#bfe3ff", text: "一块布", from: 0.3 },
          { kind: "sprite", icon: "🖐️", path: [[330, 420]], size: 120, from: 1.2, to: 6 },
          { kind: "label", at: [330, 420], text: "大手量：够了", side: "bottom", from: 1.7, to: 6 },
          { kind: "sprite", icon: "✋", path: [[870, 420]], size: 80, from: 2.8, to: 6 },
          { kind: "label", at: [870, 420], text: "小手量：不够", side: "bottom", from: 3.3, to: 6 },
          { kind: "sprite", icon: "😠", path: [[600, 430]], size: 90, wobble: true, from: 4.4, to: 6 },
          { kind: "sprite", icon: "🏚️", path: [[600, 520]], size: 170, wobble: true, from: 6.3 },
          { kind: "text", at: [600, 780], text: "量的数字要能互相相信", size: "m", color: "#2f7d32", from: 8.5 }
        ]
      },
      {
        turn: 4, title: "两把尺子一样长", view: "grid", duration: 10,
        cues: [
          { kind: "ruler", at: [150, 230], length: 600, ticks: 10, unit: "厘米", caption: "小念的尺子", from: 0.3 },
          { kind: "sprite", icon: "🧒", path: [[930, 270]], size: 90, from: 0.6 },
          { kind: "ruler", at: [150, 470], length: 600, ticks: 10, unit: "厘米", color: "#bfe3ff", caption: "爸爸的尺子", from: 2 },
          { kind: "sprite", icon: "👨", path: [[930, 510]], size: 100, from: 2.3 },
          { kind: "line", path: [[750, 200], [750, 580]], color: "#e5484d", width: 5, dashed: true, from: 4.2 },
          { kind: "text", at: [600, 780], text: "一样长！", size: "l", color: "#2f7d32", from: 5.2 }
        ]
      }
    ]
  },
  {
    question: "fair-scale",
    scenes: [
      {
        turn: 0, title: "看一眼说不准", view: "market", duration: 11,
        cues: [
          { kind: "text", at: [600, 200], text: "看一眼说不准", size: "m", from: 0.3, to: 4.6 },
          { kind: "balance", at: [600, 280], left: "🥬", right: "🥔", tilt: 0, tiltTo: 14, over: 1.4, from: 0.8 },
          { kind: "highlight", at: [813, 455], size: [230, 160], from: 2.5, to: 5 },
          { kind: "label", at: [813, 455], text: "土豆更重", side: "right", from: 2.8 },
          { kind: "text", at: [600, 200], text: "秤把轻重变成数字", size: "m", color: "#2f7d32", from: 5.2 }
        ]
      },
      {
        turn: 1, title: "缺斤短两", view: "market", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 560], size: [460, 90], color: "#9fb3c8", from: 0.3 },
          { kind: "shape", shape: "rect", at: [600, 420], size: [260, 110], color: "#d8f5d0", text: "一斤", from: 0.6 },
          { kind: "sprite", icon: "🥔", path: [[600, 500]], size: 80, from: 1 },
          { kind: "myth", wrong: "秤上一斤，就一定是一斤", right: "坏秤：其实只有九两", from: 2.2, to: 7 },
          { kind: "meter", at: [600, 200], label: "被少给的", start: 0, end: 0.85, color: "#e5484d", over: 3, from: 7.2 }
        ]
      },
      {
        turn: 2, title: "公平秤来评理", view: "market", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [320, 560], size: [300, 80], color: "#9fb3c8", text: "阿姨的秤", from: 0.3 },
          { kind: "shape", shape: "rect", at: [880, 560], size: [300, 80], color: "#ffd76a", text: "公平秤", from: 1.5 },
          { kind: "sprite", icon: "🛍️", path: [[320, 470], [600, 330], [880, 470]], size: 80, travel: 2.2, from: 2.8 },
          { kind: "highlight", at: [880, 520], size: [380, 220], color: "#2f7d32", from: 5 },
          { kind: "text", at: [600, 220], text: "两台秤一对，就清楚", size: "m", from: 5.5 },
          { kind: "label", at: [880, 560], text: "自己得特别准", side: "bottom", from: 7.5 }
        ]
      },
      {
        turn: 3, title: "一级一级往上对", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [560, 730], size: [720, 100], color: "#ffe08a", text: "菜市场的秤", from: 0.3 },
          { kind: "sprite", icon: "🏷️", path: [[150, 600]], size: 70, from: 1.2 },
          { kind: "label", at: [150, 600], text: "合格贴标签", side: "top", pos: [190, 490], from: 1.6 },
          { kind: "shape", shape: "rect", at: [560, 590], size: [540, 100], color: "#ffd6bf", text: "检查的砝码", from: 2.8 },
          { kind: "shape", shape: "rect", at: [560, 450], size: [380, 100], color: "#bfe3ff", text: "更准的砝码", from: 4.6 },
          { kind: "shape", shape: "rect", at: [560, 310], size: [260, 100], color: "#b9f0c8", text: "国家标准", from: 6.4 },
          { kind: "arrow", path: [[1000, 760], [1000, 300]], color: "#ff9f43", draw: 1.2, from: 7.4 },
          { kind: "text", at: [600, 145], text: "一级一级往上对", size: "m", from: 8.8 }
        ]
      },
      {
        turn: 4, title: "全世界一样的一千克", duration: 11,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[600, 400]], size: 260, from: 0.3 },
          { kind: "text", at: [600, 120], text: "大自然里不变的数", size: "m", color: "#7a4fd6", from: 1.6 },
          { kind: "sprite", icon: "🍎", path: [[330, 650]], size: 80, from: 4.5 },
          { kind: "label", at: [330, 650], text: "中国：一千克", side: "left", from: 4.9 },
          { kind: "sprite", icon: "🍎", path: [[870, 650]], size: 80, from: 5.6 },
          { kind: "label", at: [870, 650], text: "法国：一千克", side: "right", from: 6 },
          { kind: "text", at: [600, 820], text: "一样多！", size: "l", color: "#2f7d32", from: 7.5 }
        ]
      }
    ]
  },
  {
    question: "mars-orbiter",
    scenes: [
      {
        turn: 0, title: "飞向火星", view: "space", duration: 11,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[170, 690]], size: 140, from: 0.2 },
          { kind: "shape", shape: "circle", at: [880, 380], size: [300, 300], color: "#e0703a", text: "火星", from: 0.5 },
          { kind: "text", at: [600, 110], text: "飞了九个多月", size: "m", color: "#ffe08a", from: 1 },
          { kind: "line", path: arc([880, 380], 230), color: "#ffffff", width: 4, dashed: true, draw: 1.5, from: 1.8 },
          { kind: "sprite", icon: "🛰️", path: [[230, 640], [460, 560], [640, 470], [720, 400], [760, 380]], size: 70, travel: 5, from: 2.2 },
          { kind: "pulse", at: [745, 385], color: "#ff5a5f", radius: 110, from: 7.2 },
          { kind: "text", at: [600, 820], text: "飞得太低，联系不上了", size: "m", color: "#ff5a5f", from: 8 }
        ]
      },
      {
        turn: 1, title: "磅和公制", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [290, 340], size: [300, 160], color: "#ffd6bf", text: "算推力", from: 0.3 },
          { kind: "label", at: [290, 260], text: "用了英制：磅", side: "top", pos: [290, 195], from: 1.5 },
          { kind: "shape", shape: "rect", at: [910, 340], size: [300, 160], color: "#bfe3ff", text: "领航", from: 0.9 },
          { kind: "flow", path: [[450, 340], [750, 340]], icon: "📄", count: 3, speed: 120, size: 14, from: 3, to: 6.5 },
          { kind: "label", at: [910, 260], text: "以为是公制", side: "top", pos: [910, 195], from: 4.5 },
          { kind: "meter", at: [600, 590], label: "以为的推力", start: 0, end: 0.22, color: "#9fb3c8", from: 6.5 },
          { kind: "meter", at: [600, 690], label: "真正的推力", start: 0, end: 1, color: "#ff9f43", from: 7.2 },
          { kind: "text", at: [600, 820], text: "差了四倍多", size: "m", color: "#e5484d", from: 9.4 }
        ]
      },
      {
        turn: 2, title: "小错攒成大错", view: "space", duration: 11,
        cues: [
          { kind: "line", path: [[150, 720], [1050, 260]], color: "#bfe3ff", width: 4, dashed: true, draw: 1.5, from: 0.3 },
          { kind: "label", at: [750, 413], text: "原来的路线", side: "top", from: 1.2 },
          { kind: "text", at: [600, 110], text: "每次只差一点点", size: "m", color: "#ffe08a", from: 1.8, to: 6.5 },
          { kind: "line", path: [[150, 720], [400, 640], [650, 580], [900, 545], [1050, 530]], color: "#ff5a5f", width: 5, draw: 5, from: 2.2 },
          { kind: "sprite", icon: "🛰️", path: [[150, 720], [400, 640], [650, 580], [900, 545], [1050, 530]], size: 60, travel: 5, from: 2.2 },
          { kind: "text", at: [600, 110], text: "越偏越远", size: "m", color: "#ff5a5f", from: 7 },
          { kind: "label", at: [1050, 530], text: "偏离了", side: "bottom", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "几个什么？", duration: 11,
        cues: [
          { kind: "text", at: [600, 180], text: "给你 5", size: "l", from: 0.3 },
          { kind: "sprite", icon: "🍬", path: [[380, 450]], size: 100, from: 2.4 },
          { kind: "label", at: [380, 450], text: "5 块糖？", side: "bottom", from: 2.9 },
          { kind: "sprite", icon: "📦", path: [[820, 450]], size: 120, from: 3.8 },
          { kind: "label", at: [820, 450], text: "5 箱糖？", side: "bottom", from: 4.3 },
          { kind: "text", at: [600, 790], text: "单位：说清几个什么", size: "m", color: "#2f7d32", from: 7 }
        ]
      },
      {
        turn: 4, title: "每个数都写单位", view: "grid", duration: 11,
        cues: [
          { kind: "text", at: [600, 130], text: "每个数字后面写清单位", size: "m", from: 0.4 },
          { kind: "shape", shape: "rect", at: [600, 450], size: [600, 380], color: "#ffffff", outline: true, from: 0.8 },
          { kind: "shape", shape: "pill", at: [420, 420], size: [150, 84], color: "#bfe3ff", text: "米", from: 2 },
          { kind: "shape", shape: "pill", at: [600, 420], size: [150, 84], color: "#b9f0c8", text: "千克", from: 2.7 },
          { kind: "shape", shape: "pill", at: [780, 420], size: [150, 84], color: "#e9dcff", text: "秒", from: 3.4 },
          { kind: "sprite", icon: "✅", path: [[600, 560]], size: 80, from: 4.8 },
          { kind: "sprite", icon: "🔍", path: [[300, 730], [900, 730]], size: 80, travel: 2.5, from: 6.2 }
        ]
      }
    ]
  }
];
