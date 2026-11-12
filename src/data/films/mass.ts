import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "balance",
    scenes: [
      {
        turn: 0, title: "像个跷跷板", duration: 11,
        cues: [
          { kind: "balance", at: [600, 250], left: "🍎🍎", right: "🍎", tilt: 0, tiltTo: -14, over: 1.4, from: 0.3, to: 5.4 },
          { kind: "label", at: [600, 250], text: "支点", side: "right", pos: [800, 160], from: 1, to: 5.4 },
          { kind: "text", at: [600, 820], text: "哪边重，哪边沉", size: "m", color: "#e5484d", from: 1.8, to: 5.4 },
          { kind: "balance", at: [600, 250], left: "🍎", right: "🍎", tilt: 0, from: 5.6 },
          { kind: "highlight", at: [600, 225], size: [110, 120], from: 6.4 },
          { kind: "text", at: [600, 820], text: "一样重：平平的", size: "m", color: "#2f7d32", from: 6.6 }
        ]
      },
      {
        turn: 1, title: "谁重谁就沉", duration: 11,
        cues: [
          { kind: "balance", at: [600, 250], left: "👨", right: "🧒", tilt: 0, tiltTo: -16, over: 1.6, size: 240, from: 0.3 },
          { kind: "text", at: [600, 110], text: "离中间一样远", size: "m", from: 2.2 },
          { kind: "text", at: [600, 820], text: "天平：两条臂一样长", size: "m", color: "#2f7d32", from: 5.6 },
          { kind: "sprite", icon: "⚖️", path: [[1080, 640]], size: 90, from: 7 },
          { kind: "label", at: [1080, 640], text: "长短不一就不准", side: "top", pos: [960, 520], from: 7.6 }
        ]
      },
      {
        turn: 2, title: "砝码告诉答案", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "1 克、10 克、100 克", size: "s", from: 0.3 },
          { kind: "balance", at: [600, 260], left: "🍎", tilt: -14, from: 0.6, to: 5 },
          { kind: "sprite", icon: "🔘", path: [[1060, 140], [820, 300]], size: 60, travel: 1.2, from: 2.2, to: 5 },
          { kind: "sprite", icon: "🔘", path: [[1060, 140], [820, 300]], size: 50, travel: 1.2, from: 3.4, to: 5 },
          { kind: "balance", at: [600, 260], left: "🍎", right: "🔘🔘", tilt: -8, tiltTo: 0, over: 1.6, from: 5 },
          { kind: "highlight", at: [600, 235], size: [110, 120], from: 7 },
          { kind: "text", at: [600, 820], text: "砝码加起来就是苹果重", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 3, title: "一棒传一棒", duration: 11,
        cues: [
          { kind: "shape", shape: "circle", at: [200, 430], size: [190, 190], color: "#d7dde5", text: "国家标准", from: 0.5 },
          { kind: "arrow", path: [[310, 430], [430, 430]], draw: 0.6, from: 1.6 },
          { kind: "shape", shape: "circle", at: [520, 430], size: [150, 150], color: "#e6eaf0", text: "更准的", from: 2.1 },
          { kind: "arrow", path: [[610, 430], [720, 430]], draw: 0.6, from: 3.2 },
          { kind: "shape", shape: "circle", at: [800, 430], size: [120, 120], color: "#f0f2f5", text: "砝码", from: 3.7 },
          { kind: "arrow", path: [[875, 430], [970, 430]], draw: 0.6, from: 4.8 },
          { kind: "sprite", icon: "⚖️", path: [[1060, 430]], size: 100, from: 5.3 },
          { kind: "text", at: [600, 790], text: "最开始那一棒：一千克", size: "m", color: "#ff9f43", from: 7.2 }
        ]
      },
      {
        turn: 4, title: "一千克有多重", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [420, 400], size: [120, 260], color: "#bfe3ff", text: "500毫升", from: 0.6 },
          { kind: "shape", shape: "rect", at: [580, 400], size: [120, 260], color: "#bfe3ff", text: "500毫升", from: 1.3 },
          { kind: "text", at: [500, 640], text: "两瓶水 ≈ 一千克", size: "m", from: 2.6 },
          { kind: "shape", shape: "rect", at: [930, 420], size: [220, 220], color: "#4fb6ff", text: "装满水", motion: "grow", over: 1.2, from: 4.6 },
          { kind: "label", at: [1040, 420], text: "边长 10 厘米", side: "top", pos: [930, 240], from: 5.6 },
          { kind: "text", at: [600, 820], text: "一千克 = 两斤", size: "m", color: "#2f7d32", from: 8 }
        ]
      }
    ]
  },
  {
    question: "big-k",
    scenes: [
      {
        turn: 0, title: "大K", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "1889 年起以它为准", size: "m", from: 0.3 },
          { kind: "shape", shape: "rect", at: [600, 490], size: [170, 170], color: "#c9ced6", text: "大K", motion: "pulse", from: 0.6 },
          { kind: "label", at: [600, 490], text: "铂和铱做的", side: "left", pos: [260, 400], from: 1.6, to: 5.2 },
          { kind: "sprite", icon: "⛳", path: [[260, 640]], size: 70, from: 2.6, to: 5.2 },
          { kind: "shape", shape: "pill", at: [600, 450], size: [260, 300], color: "none", outline: true, from: 4.2 },
          { kind: "shape", shape: "pill", at: [600, 430], size: [330, 380], color: "none", outline: true, from: 4.8 },
          { kind: "shape", shape: "pill", at: [600, 410], size: [400, 460], color: "none", outline: true, from: 5.4 },
          { kind: "text", at: [600, 800], text: "锁在地下保险库", size: "m", color: "#7a6a55", from: 7 }
        ]
      },
      {
        turn: 1, title: "和兄弟们比一比", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 380], size: [140, 140], color: "#c9ced6", text: "大K", from: 0.3 },
          { kind: "shape", shape: "rect", at: [230, 610], size: [110, 110], color: "#dfe3e8", text: "兄弟", from: 1 },
          { kind: "shape", shape: "rect", at: [470, 660], size: [110, 110], color: "#dfe3e8", text: "兄弟", from: 1.3 },
          { kind: "shape", shape: "rect", at: [730, 660], size: [110, 110], color: "#dfe3e8", text: "兄弟", from: 1.6 },
          { kind: "shape", shape: "rect", at: [970, 610], size: [110, 110], color: "#dfe3e8", text: "兄弟", from: 1.9 },
          { kind: "text", at: [600, 140], text: "差了约 50 微克", size: "m", color: "#e5484d", from: 4.4 },
          { kind: "sprite", icon: "🔍", path: [[860, 320]], size: 80, wobble: true, from: 6.4 },
          { kind: "text", at: [600, 830], text: "≈ 一粒细沙那么重", size: "m", from: 6.8 }
        ]
      },
      {
        turn: 2, title: "会变的标准", duration: 11,
        cues: [
          { kind: "sprite", icon: "💊", path: [[300, 280]], size: 90, from: 0.5 },
          { kind: "sprite", icon: "💻", path: [[600, 280]], size: 90, from: 1.1 },
          { kind: "sprite", icon: "🔭", path: [[900, 280]], size: 90, from: 1.7 },
          { kind: "text", at: [600, 440], text: "都要特别准", size: "m", from: 2.4 },
          { kind: "shape", shape: "rect", at: [600, 640], size: [140, 140], color: "#c9ced6", text: "大K", motion: "wiggle", from: 4 },
          { kind: "pulse", at: [600, 640], color: "#e5484d", radius: 160, from: 5 },
          { kind: "text", at: [600, 830], text: "标准一变，全都跟着变", size: "m", color: "#e5484d", from: 6.4 }
        ]
      },
      {
        turn: 3, title: "交给不变的数", duration: 11,
        cues: [
          { kind: "text", at: [600, 170], text: "普朗克常数", size: "l", color: "#7a4fd6", from: 0.5 },
          { kind: "sprite", icon: "💡", path: [[340, 410]], size: 100, from: 1.8 },
          { kind: "label", at: [340, 460], text: "像光速一样不变", side: "bottom", pos: [340, 550], from: 2.3 },
          { kind: "shape", shape: "circle", at: [860, 420], size: [200, 200], color: "#e9dcff", text: "不变", motion: "pulse", from: 2.8 },
          { kind: "text", at: [600, 700], text: "2019年5月20日起", size: "m", from: 4.8 },
          { kind: "text", at: [600, 825], text: "大K退休了", size: "m", color: "#7a6a55", from: 7.6 }
        ]
      },
      {
        turn: 4, title: "看不见的手往上托", duration: 12,
        cues: [
          { kind: "text", at: [600, 140], text: "基布尔秤：不用砝码", size: "m", from: 0.5 },
          { kind: "shape", shape: "rect", at: [600, 560], size: [400, 40], color: "#9fb3c8", from: 0.8 },
          { kind: "sprite", icon: "🍎", path: [[600, 490]], size: 100, from: 1.3 },
          { kind: "sprite", icon: "🧲", path: [[360, 690]], size: 80, from: 2.4 },
          { kind: "sprite", icon: "🧲", path: [[840, 690]], size: 80, from: 2.8 },
          { kind: "arrow", path: [[600, 740], [600, 600]], color: "#7a4fd6", text: "往上托", draw: 0.8, from: 3.8 },
          { kind: "text", at: [600, 830], text: "算出用了多大力", size: "m", color: "#2f7d32", from: 6.8 },
          { kind: "label", at: [640, 490], text: "有多重", side: "right", pos: [860, 430], from: 8.6 }
        ]
      }
    ]
  },
  {
    question: "moon-weight",
    scenes: [
      {
        turn: 0, title: "到月球变轻了？", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[300, 260]], size: 150, from: 0.3 },
          { kind: "sprite", icon: "🧑‍🚀", path: [[300, 430]], size: 120, from: 0.8 },
          { kind: "meter", at: [300, 590], label: "地球上", start: 0, end: 1, from: 1.4 },
          { kind: "sprite", icon: "🌕", path: [[900, 260]], size: 150, from: 3.4 },
          { kind: "sprite", icon: "🧑‍🚀", path: [[900, 430]], size: 120, from: 3.8 },
          { kind: "meter", at: [900, 590], label: "月球上", start: 0, end: 0.17, from: 4.4 },
          { kind: "text", at: [600, 790], text: "只剩六分之一左右", size: "m", color: "#225dac", from: 7.4 }
        ]
      },
      {
        turn: 1, title: "体重秤量的是拉力", duration: 12,
        cues: [
          { kind: "sprite", icon: "🧍", path: [[600, 250]], size: 170, from: 0.3 },
          { kind: "shape", shape: "rect", at: [600, 420], size: [300, 60], color: "#d8dde3", text: "体重秤", from: 1 },
          { kind: "line", path: [[540, 470], [660, 500], [540, 530], [660, 560], [540, 590], [660, 620]], color: "#7a4fd6", width: 5, draw: 1, from: 2 },
          { kind: "label", at: [660, 560], text: "里面的弹簧", side: "right", pos: [930, 560], from: 3 },
          { kind: "arrow", path: [[330, 200], [330, 500]], color: "#e5484d", draw: 0.8, from: 4.6 },
          { kind: "text", at: [330, 570], text: "地球往下拉", size: "s", color: "#e5484d", from: 5.2 },
          { kind: "text", at: [600, 780], text: "压下去多少，读出多少", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 2, title: "质量哪儿都不变", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "质量：用千克", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "balance", at: [600, 250], size: 200, left: "🧒", right: "🧱", caption: "25 千克", from: 1 },
          { kind: "text", at: [600, 720], text: "两边一起变轻，还是平", size: "m", from: 4.6 },
          { kind: "text", at: [600, 820], text: "到哪儿都不变", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 3, title: "千克和牛顿", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [320, 300], size: [340, 100], color: "#ffe08a", text: "质量：千克", from: 0.3 },
          { kind: "shape", shape: "pill", at: [880, 300], size: [340, 100], color: "#bfe3ff", text: "重力：牛顿", from: 1.8 },
          { kind: "sprite", icon: "🍎", path: [[600, 470]], size: 110, from: 3.4 },
          { kind: "text", at: [600, 640], text: "体重、几斤几两", size: "m", from: 5 },
          { kind: "text", at: [600, 770], text: "地球上就混着说了", size: "m", color: "#225dac", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "苹果和月亮", view: "space", duration: 12,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[600, 520]], size: 230, from: 0.3 },
          { kind: "sprite", icon: "🍎", path: [[600, 200]], size: 80, from: 1.2 },
          { kind: "arrow", path: [[600, 250], [600, 380]], color: "#ffe08a", draw: 0.6, from: 1.8 },
          { kind: "sprite", icon: "🌕", path: [[1000, 330]], size: 110, from: 3 },
          { kind: "arrow", path: [[940, 360], [740, 460]], color: "#ffe08a", draw: 0.6, from: 3.6 },
          { kind: "text", at: [600, 110], text: "苹果和月亮：同一种力", size: "m", color: "#ffe08a", from: 4.8 },
          { kind: "text", at: [600, 800], text: "月球的拉力：约六分之一", size: "m", color: "#ffffff", from: 7.6 }
        ]
      }
    ]
  }
];
