import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "ampere",
    scenes: [
      {
        turn: 0, title: "电荷一起往前挤", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "A = 安培", size: "l", color: "#c27c0e", from: 0.3 },
          { kind: "sprite", icon: "🔌", path: [[600, 270]], size: 110, from: 1 },
          { kind: "shape", shape: "rect", at: [600, 460], size: [1000, 90], color: "#ffd6bf", from: 1.6 },
          { kind: "flow", path: [[120, 460], [1080, 460]], color: "#4fb6ff", count: 14, speed: 160, size: 14, from: 2.4 },
          { kind: "label", at: [300, 460], text: "小小的电荷", side: "bottom", pos: [300, 590], from: 3.4 },
          { kind: "text", at: [600, 700], text: "每秒挤过去多少个", size: "m", from: 5.6 },
          { kind: "text", at: [600, 810], text: "越多，电流越大", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "像水管里的水", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 260], size: [900, 70], color: "#bfe3ff", from: 0.3 },
          { kind: "flow", path: [[170, 260], [1030, 260]], icon: "💧", count: 7, speed: 140, size: 11, from: 0.8 },
          { kind: "label", at: [600, 225], text: "看不见每一滴", side: "top", pos: [600, 130], from: 1.8 },
          { kind: "shape", shape: "rect", at: [600, 520], size: [900, 60], color: "#ffd6bf", from: 3.6 },
          { kind: "flow", path: [[170, 520], [1030, 520]], color: "#4fb6ff", count: 12, speed: 160, size: 11, from: 4 },
          { kind: "sprite", icon: "🎛️", path: [[600, 520]], size: 110, from: 5 },
          { kind: "label", at: [600, 570], text: "电流表读出来", side: "bottom", pos: [600, 680], from: 5.6 },
          { kind: "text", at: [600, 830], text: "安培：两百年前的法国人", size: "m", color: "#7a4fd6", from: 8.4 }
        ]
      },
      {
        turn: 2, title: "600 多亿亿个", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "1 安培", size: "l", color: "#c27c0e", from: 0.3 },
          { kind: "count", at: [600, 320], label: "每秒挤过去", start: 0, end: 600, unit: "多亿亿个", over: 3, from: 1 },
          { kind: "flow", path: [[100, 560], [1100, 560]], color: "#4fb6ff", count: 30, speed: 420, size: 8, from: 1.4 },
          { kind: "text", at: [600, 720], text: "一秒数一个：数两千亿年", size: "m", from: 5.2 },
          { kind: "text", at: [600, 830], text: "2019 年起照着电荷来定", size: "s", color: "#7a4fd6", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "插座能扛多少", duration: 12,
        cues: [
          { kind: "sprite", icon: "📱", path: [[220, 330]], size: 110, from: 0.3 },
          { kind: "label", at: [220, 390], text: "充电器：不算大", side: "bottom", pos: [220, 500], from: 0.9 },
          { kind: "sprite", icon: "🔌", path: [[600, 330]], size: 110, from: 2.4 },
          { kind: "label", at: [600, 275], text: "普通插座 10 安培", side: "top", pos: [600, 200], from: 3 },
          { kind: "sprite", icon: "❄️", path: [[980, 330]], size: 110, from: 4.6 },
          { kind: "label", at: [980, 390], text: "空调 16 安培", side: "bottom", pos: [980, 500], from: 5.2 },
          { kind: "sprite", icon: "🔥", path: [[600, 680]], size: 100, wobble: true, from: 7.6 },
          { kind: "text", at: [600, 820], text: "太大会发烫：电闸跳开", size: "m", color: "#e5484d", from: 8.4 }
        ]
      },
      {
        turn: 4, title: "千万别碰电线", duration: 11,
        cues: [
          { kind: "sprite", icon: "🔌", path: [[380, 380]], size: 150, from: 0.3 },
          { kind: "sprite", icon: "🚫", path: [[380, 380]], size: 230, from: 1.4 },
          { kind: "sprite", icon: "💧", path: [[770, 360]], size: 90, from: 2.6 },
          { kind: "sprite", icon: "🖐️", path: [[860, 400]], size: 110, from: 3 },
          { kind: "sprite", icon: "🚫", path: [[820, 380]], size: 230, from: 3.8 },
          { kind: "text", at: [600, 680], text: "插座小孔不能捅", size: "m", color: "#e5484d", from: 5.4 },
          { kind: "text", at: [600, 800], text: "看到断线：告诉大人", size: "m", color: "#2f7d32", from: 7.6 }
        ]
      }
    ]
  },
  {
    question: "kwh",
    scenes: [
      {
        turn: 0, title: "一度电", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "度 = 千瓦时", size: "l", color: "#c27c0e", from: 0.3 },
          { kind: "sprite", icon: "🧾", path: [[600, 310]], size: 170, from: 1 },
          { kind: "shape", shape: "pill", at: [300, 560], size: [300, 100], color: "#ffe08a", text: "1000 瓦", from: 3.2 },
          { kind: "text", at: [600, 560], text: "×", size: "l", from: 4.4 },
          { kind: "shape", shape: "pill", at: [900, 560], size: [300, 100], color: "#e9dcff", text: "1 小时", from: 5 },
          { kind: "text", at: [600, 760], text: "= 1 度电", size: "l", color: "#2f7d32", from: 7.2 }
        ]
      },
      {
        turn: 1, title: "吃电有多快", duration: 13,
        cues: [
          { kind: "sprite", icon: "💡", path: [[250, 340]], size: 120, from: 0.3 },
          { kind: "meter", at: [250, 540], label: "10 瓦", start: 0, end: 0.01, from: 1 },
          { kind: "sprite", icon: "📺", path: [[600, 340]], size: 120, from: 2.6 },
          { kind: "meter", at: [600, 540], label: "100 瓦", start: 0, end: 0.1, from: 3.2 },
          { kind: "sprite", icon: "❄️", path: [[950, 340]], size: 120, from: 4.8 },
          { kind: "meter", at: [950, 540], label: "1000 瓦", start: 0, end: 1, over: 2.4, from: 5.4 },
          { kind: "text", at: [600, 760], text: "瓦数越大，吃得越快", size: "m", color: "#2f7d32", from: 9 }
        ]
      },
      {
        turn: 2, title: "开了多久", duration: 12,
        cues: [
          { kind: "sprite", icon: "❄️", path: [[170, 290]], size: 110, from: 0.3 },
          { kind: "arrow", path: [[250, 290], [560, 290]], text: "开 1 小时", draw: 0.8, from: 1 },
          { kind: "shape", shape: "pill", at: [740, 290], size: [220, 90], color: "#b9f0c8", text: "1 度", from: 2 },
          { kind: "sprite", icon: "💡", path: [[170, 520]], size: 110, from: 3.6 },
          { kind: "arrow", path: [[250, 520], [560, 520]], text: "亮 100 小时", draw: 1.6, from: 4.2 },
          { kind: "shape", shape: "pill", at: [740, 520], size: [220, 90], color: "#b9f0c8", text: "1 度", from: 6 },
          { kind: "text", at: [600, 760], text: "瓦数 × 小时 ÷ 1000", size: "m", color: "#c27c0e", from: 8 }
        ]
      },
      {
        turn: 3, title: "电表一直在记", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏠", path: [[320, 420]], size: 230, from: 0.3 },
          { kind: "flow", path: [[1150, 200], [900, 300], [440, 400]], color: "#ffcf3f", count: 6, speed: 220, from: 1 },
          { kind: "meter", at: [820, 470], label: "电表在记", start: 0, end: 0.7, over: 8, from: 2 },
          { kind: "sprite", icon: "📡", path: [[1010, 660]], size: 100, from: 5 },
          { kind: "label", at: [960, 660], text: "自己发给供电公司", side: "left", pos: [620, 690], from: 5.6 },
          { kind: "text", at: [600, 840], text: "也要定期查准不准", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      },
      {
        turn: 4, title: "1 度电能做什么", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [600, 130], size: [260, 90], color: "#b9f0c8", text: "1 度电", from: 0.3 },
          { kind: "sprite", icon: "💡", path: [[250, 380]], size: 120, from: 1.2 },
          { kind: "label", at: [250, 440], text: "亮 100 小时", side: "bottom", pos: [250, 540], from: 1.8 },
          { kind: "sprite", icon: "❄️", path: [[600, 380]], size: 120, from: 3 },
          { kind: "label", at: [600, 320], text: "吹 1 小时", side: "top", pos: [600, 250], from: 3.6 },
          { kind: "sprite", icon: "🛵", path: [[950, 380]], size: 120, from: 4.8 },
          { kind: "label", at: [950, 440], text: "跑几十千米", side: "bottom", pos: [950, 540], from: 5.4 },
          { kind: "text", at: [600, 760], text: "随手关灯，帮地球省力", size: "m", color: "#2f7d32", from: 8.4 }
        ]
      }
    ]
  },
  {
    question: "volt",
    scenes: [
      {
        turn: 0, title: "推着电荷走的劲", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "V = 伏特（电压）", size: "l", color: "#c27c0e", from: 0.3 },
          { kind: "shape", shape: "rect", at: [240, 330], size: [180, 220], color: "#bfe3ff", text: "高水箱", from: 1.2 },
          { kind: "flow", path: [[350, 400], [980, 400]], color: "#4fb6ff", count: 10, speed: 280, size: 12, from: 2 },
          { kind: "label", at: [660, 380], text: "水压越大冲得越猛", side: "bottom", pos: [660, 510], from: 3 },
          { kind: "text", at: [600, 760], text: "电压：推着电荷往前跑", size: "m", color: "#2f7d32", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "伏打的小圆塔", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "1800 年：第一块电池", size: "m", color: "#225dac", from: 0.3 },
          { kind: "shape", shape: "pill", at: [520, 320], size: [260, 56], color: "#dfe5ec", text: "锌片", from: 1.2 },
          { kind: "shape", shape: "pill", at: [520, 390], size: [260, 56], color: "#ffe08a", text: "盐水纸", from: 1.8 },
          { kind: "shape", shape: "pill", at: [520, 460], size: [260, 56], color: "#c9ced6", text: "银片", from: 2.4 },
          { kind: "label", at: [660, 390], text: "一层一层叠起来", side: "right", pos: [930, 390], from: 3.4 },
          { kind: "text", at: [600, 760], text: "1881 年定名“伏特”", size: "m", color: "#7a4fd6", from: 6.8 }
        ]
      },
      {
        turn: 2, title: "电池排成一队", view: "grid", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [270, 320], size: [220, 96], color: "#ffe08a", text: "1.5 伏", from: 0.4 },
          { kind: "text", at: [450, 320], text: "+", size: "l", from: 1.2 },
          { kind: "shape", shape: "rect", at: [630, 320], size: [220, 96], color: "#ffe08a", text: "1.5 伏", from: 1.8 },
          { kind: "shape", shape: "pill", at: [960, 320], size: [200, 96], color: "#b9f0c8", text: "3 伏", from: 2.8 },
          { kind: "text", at: [600, 560], text: "四节串起来 = 6 伏", size: "m", color: "#225dac", from: 4.8 },
          { kind: "text", at: [600, 740], text: "5伏×2安培=10瓦", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "1.5 伏和 220 伏", duration: 12,
        cues: [
          { kind: "sprite", icon: "🔋", path: [[250, 330]], size: 130, from: 0.3 },
          { kind: "label", at: [250, 410], text: "1.5 伏：推力小", side: "bottom", pos: [250, 520], from: 1 },
          { kind: "sprite", icon: "⚠️", path: [[600, 330]], size: 120, from: 2.6 },
          { kind: "label", at: [600, 270], text: "超过 36 伏就危险", side: "top", pos: [600, 185], from: 3.2 },
          { kind: "sprite", icon: "🔌", path: [[950, 330]], size: 130, from: 4.8 },
          { kind: "label", at: [950, 410], text: "220 伏：绝对别碰", side: "bottom", pos: [950, 520], from: 5.4 },
          { kind: "text", at: [600, 780], text: "220 伏会冲破皮肤！", size: "m", color: "#e5484d", from: 7.8 }
        ]
      },
      {
        turn: 4, title: "各国电压不一样", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [250, 300], size: [260, 96], color: "#ffd6bf", text: "220 伏", from: 0.4 },
          { kind: "shape", shape: "pill", at: [600, 300], size: [260, 96], color: "#bfe3ff", text: "120 伏", from: 1.4 },
          { kind: "shape", shape: "pill", at: [950, 300], size: [260, 96], color: "#e9dcff", text: "100 伏", from: 2.4 },
          { kind: "sprite", icon: "📱", path: [[340, 600]], size: 120, from: 4.4 },
          { kind: "label", at: [400, 600], text: "100—240V 通用", side: "right", pos: [710, 600], from: 5 },
          { kind: "text", at: [600, 800], text: "插错老电器会烧坏", size: "m", color: "#e5484d", from: 7.8 }
        ]
      }
    ]
  }
];
