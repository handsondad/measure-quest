import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "prefixes",
    scenes: [
      {
        turn: 0, title: "米前面的那个字", view: "grid", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "词头：放大还是缩小", size: "m", from: 0.3 },
          { kind: "ruler", at: [150, 230], length: 900, ticks: 10, every: 0, caption: "1 米", draw: 1.5, from: 0.8 },
          { kind: "shape", shape: "pill", at: [250, 480], size: [260, 100], color: "#ffe08a", text: "千×1000", from: 2.6 },
          { kind: "shape", shape: "pill", at: [600, 480], size: [260, 100], color: "#bfe3ff", text: "厘：百分之一", from: 4.4 },
          { kind: "shape", shape: "pill", at: [950, 480], size: [260, 100], color: "#e9dcff", text: "毫÷1000", from: 6.2 },
          { kind: "text", at: [600, 720], text: "1 千米 = 1000 米", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "东西有大有小", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏙️", path: [[170, 300]], size: 110, from: 0.3 },
          { kind: "sprite", icon: "🏙️", path: [[1030, 300]], size: 110, from: 0.6 },
          { kind: "line", path: [[250, 320], [950, 320]], color: "#ff9f43", width: 5, dashed: true, draw: 1.2, from: 1.2 },
          { kind: "label", at: [600, 320], text: "城市之间：用千米", side: "top", pos: [600, 200], from: 2.4 },
          { kind: "sprite", icon: "✏️", path: [[600, 590]], size: 130, rotate: -30, from: 4.8 },
          { kind: "label", at: [640, 560], text: "铅笔芯：用毫米", side: "right", pos: [930, 600], from: 5.6 },
          { kind: "text", at: [600, 810], text: "换个词头，数字好读", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      },
      {
        turn: 2, title: "千克也是一千倍", duration: 12,
        cues: [
          { kind: "text", at: [600, 140], text: "千 = 一千倍", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "shape", shape: "pill", at: [260, 300], size: [240, 100], color: "#ffe08a", text: "千米", from: 1 },
          { kind: "shape", shape: "pill", at: [600, 300], size: [240, 100], color: "#ffe08a", text: "千克", from: 1.6 },
          { kind: "shape", shape: "pill", at: [940, 300], size: [240, 100], color: "#ffe08a", text: "千瓦", from: 2.2 },
          { kind: "text", at: [600, 500], text: "毫 = 千分之一", size: "m", color: "#225dac", from: 4.8 },
          { kind: "shape", shape: "pill", at: [260, 660], size: [240, 100], color: "#bfe3ff", text: "毫米", from: 5.6 },
          { kind: "shape", shape: "pill", at: [600, 660], size: [240, 100], color: "#bfe3ff", text: "毫升", from: 6.2 },
          { kind: "shape", shape: "pill", at: [940, 660], size: [240, 100], color: "#bfe3ff", text: "毫克", from: 6.8 }
        ]
      },
      {
        turn: 3, title: "吉、微、纳", duration: 12,
        cues: [
          { kind: "sprite", icon: "📱", path: [[230, 260]], size: 120, from: 0.3 },
          { kind: "label", at: [290, 260], text: "吉 G：十亿倍", side: "right", pos: [560, 260], from: 1 },
          { kind: "text", at: [600, 470], text: "微：百万分之一", size: "m", color: "#225dac", from: 3.4 },
          { kind: "text", at: [600, 580], text: "纳：十亿分之一", size: "m", color: "#7a4fd6", from: 5.2 },
          { kind: "sprite", icon: "💇", path: [[230, 760]], size: 110, from: 7.2 },
          { kind: "label", at: [290, 760], text: "头发丝：好几万纳米", side: "right", pos: [640, 760], from: 7.8 }
        ]
      },
      {
        turn: 4, title: "最大的词头", view: "space", duration: 11,
        cues: [
          { kind: "text", at: [600, 120], text: "2022 年：四个新词头", size: "m", color: "#ffe08a", from: 0.3 },
          { kind: "shape", shape: "pill", at: [600, 330], size: [320, 120], color: "#e9dcff", text: "昆", motion: "pulse", from: 1.4 },
          { kind: "text", at: [600, 500], text: "1 后面跟 30 个 0", size: "m", color: "#ffffff", from: 2.6 },
          { kind: "sprite", icon: "🌍", path: [[300, 680]], size: 130, from: 4.6 },
          { kind: "sprite", icon: "💾", path: [[900, 680]], size: 110, from: 5.2 },
          { kind: "text", at: [600, 840], text: "旧词头快不够用了", size: "m", color: "#ffe08a", from: 7 }
        ]
      }
    ]
  },
  {
    question: "seven-units",
    scenes: [
      {
        turn: 0, title: "7 个基本单位", view: "grid", duration: 13,
        cues: [
          { kind: "shape", shape: "pill", at: [210, 330], size: [220, 100], color: "#bfe3ff", text: "米 m", from: 0.5 },
          { kind: "shape", shape: "pill", at: [470, 330], size: [220, 100], color: "#b9f0c8", text: "千克 kg", from: 1.6 },
          { kind: "shape", shape: "pill", at: [730, 330], size: [220, 100], color: "#e9dcff", text: "秒 s", from: 2.7 },
          { kind: "shape", shape: "pill", at: [990, 330], size: [220, 100], color: "#ffe08a", text: "安培 A", from: 3.8 },
          { kind: "shape", shape: "pill", at: [340, 520], size: [220, 100], color: "#ffd6bf", text: "开尔文 K", from: 4.9 },
          { kind: "shape", shape: "pill", at: [600, 520], size: [220, 100], color: "#c9f2ee", text: "摩尔 mol", from: 6 },
          { kind: "shape", shape: "pill", at: [860, 520], size: [220, 100], color: "#fff3d6", text: "坎德拉 cd", from: 7.1 },
          { kind: "text", at: [600, 140], text: "国际单位制", size: "l", color: "#7a4fd6", from: 9 }
        ]
      },
      {
        turn: 1, title: "像搭积木", duration: 11,
        cues: [
          { kind: "shape", shape: "pill", at: [230, 300], size: [160, 90], color: "#bfe3ff", text: "米", from: 0.3 },
          { kind: "shape", shape: "pill", at: [230, 450], size: [160, 90], color: "#e9dcff", text: "秒", from: 0.8 },
          { kind: "arrow", path: [[330, 375], [540, 375]], text: "米 ÷ 秒", draw: 0.8, from: 2 },
          { kind: "sprite", icon: "🚗", path: [[660, 375]], size: 100, from: 3 },
          { kind: "label", at: [700, 375], text: "速度", side: "right", pos: [900, 375], from: 3.5 },
          { kind: "shape", shape: "rect", at: [660, 620], size: [170, 170], color: "#ffe08a", text: "平方米", from: 5.2 },
          { kind: "label", at: [745, 620], text: "面积=长×宽", side: "right", pos: [960, 620], from: 5.8 },
          { kind: "text", at: [600, 830], text: "7 块积木，搭出万种房子", size: "m", color: "#2f7d32", from: 8.2 }
        ]
      },
      {
        turn: 2, title: "积木少不容易乱", duration: 10,
        cues: [
          { kind: "text", at: [600, 120], text: "块数少，不容易乱", size: "m", from: 0.4 },
          { kind: "shape", shape: "rect", at: [520, 380], size: [480, 150], color: "#ffe08a", text: "7 块积木", motion: "pulse", from: 0.8 },
          { kind: "sprite", icon: "🎯", path: [[520, 590]], size: 100, from: 2.6 },
          { kind: "text", at: [520, 740], text: "每块都定得特别准", size: "m", color: "#2f7d32", from: 3.2 },
          { kind: "sprite", icon: "🚫", path: [[1000, 380]], size: 90, from: 6 },
          { kind: "label", at: [1000, 340], text: "轻易不加新的", side: "top", pos: [960, 230], from: 6.6 }
        ]
      },
      {
        turn: 3, title: "国际计量局", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏛️", path: [[600, 380]], size: 200, from: 0.3 },
          { kind: "label", at: [600, 290], text: "国际计量局", side: "top", pos: [600, 190], from: 1 },
          { kind: "text", at: [600, 90], text: "在法国巴黎旁边", size: "s", from: 1.6 },
          { kind: "count", at: [300, 640], label: "签约国家", start: 0, end: 17, unit: "个", over: 2, from: 3 },
          { kind: "text", at: [860, 640], text: "1875 年 米制公约", size: "m", from: 3.6 },
          { kind: "text", at: [600, 830], text: "各国一起商量", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "交给不变的数", view: "space", duration: 12,
        cues: [
          { kind: "text", at: [600, 120], text: "2019 年", size: "l", color: "#ffe08a", from: 0.3 },
          { kind: "sprite", icon: "💡", path: [[250, 400]], size: 110, from: 1.5 },
          { kind: "label", at: [250, 450], text: "米：光速", side: "bottom", pos: [250, 560], from: 2 },
          { kind: "sprite", icon: "⚛️", path: [[600, 400]], size: 110, from: 3.5 },
          { kind: "label", at: [600, 345], text: "秒：铯原子", side: "top", pos: [600, 250], from: 4 },
          { kind: "sprite", icon: "🧲", path: [[950, 400]], size: 110, from: 5.5 },
          { kind: "label", at: [950, 450], text: "千克：普朗克常数", side: "bottom", pos: [950, 560], from: 6 },
          { kind: "text", at: [600, 790], text: "在火星也能做出一样的", size: "m", color: "#ffe08a", from: 8.4 }
        ]
      }
    ]
  }
];
