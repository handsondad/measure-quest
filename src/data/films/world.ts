import type { Film } from "./types.ts";

/** 四种“里”按真实长短画成从 x=150 起的条，1852 米的海里画成 900 */
const bar = (metres: number) => Math.round((metres / 1852) * 900);
const mid = (metres: number) => 150 + bar(metres) / 2;

export const films: readonly Film[] = [
  {
    question: "foot",
    scenes: [
      {
        turn: 0, title: "foot 就是脚", duration: 12,
        cues: [
          { kind: "sprite", icon: "🦶", path: [[280, 360]], size: 180, from: 0.3 },
          { kind: "label", at: [280, 460], text: "foot = 脚", side: "bottom", pos: [280, 570], from: 1 },
          { kind: "ruler", at: [560, 300], length: 520, ticks: 12, every: 0, caption: "1 英尺", draw: 1.5, from: 2.4 },
          { kind: "text", at: [820, 530], text: "约 30 厘米", size: "m", from: 4 },
          { kind: "sprite", icon: "👞", path: [[820, 670]], size: 110, from: 5.4 },
          { kind: "text", at: [600, 800], text: "12 英寸 = 1 英尺", size: "m", color: "#225dac", from: 7.8 }
        ]
      },
      {
        turn: 1, title: "国王的脚？", duration: 12,
        cues: [
          { kind: "sprite", icon: "🤴", path: [[480, 380]], size: 240, from: 0.3 },
          { kind: "line", path: [[500, 330], [900, 330]], color: "#ff9f43", width: 5, dashed: true, draw: 1, from: 1.6 },
          { kind: "label", at: [760, 330], text: "1 码？鼻尖到拇指", side: "top", pos: [820, 210], from: 2.2 },
          { kind: "label", at: [480, 500], text: "1 英尺？国王的脚", side: "bottom", pos: [480, 620], from: 3.6, to: 5.9 },
          { kind: "myth", wrong: "1 英尺就是国王的脚", right: "只是传说，没有真凭实据", from: 6.2 }
        ]
      },
      {
        turn: 2, title: "三粒大麦", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "七百年前的英国法令", size: "m", from: 0.3 },
          { kind: "flow", path: [[430, 380], [770, 380]], icon: "🌾", count: 3, speed: 0, size: 26, from: 1.4 },
          { kind: "line", path: [[390, 470], [810, 470]], color: "#ff9f43", width: 6, draw: 0.8, from: 3.2 },
          { kind: "label", at: [600, 480], text: "= 1 英寸", side: "bottom", pos: [600, 580], from: 3.8 },
          { kind: "text", at: [600, 720], text: "麦粒有大有小，不够准", size: "m", color: "#e5484d", from: 6 },
          { kind: "sprite", icon: "🔒", path: [[600, 840]], size: 80, from: 8.8 }
        ]
      },
      {
        turn: 3, title: "英寸交给了米", view: "grid", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "1959 年 商量好", size: "m", from: 0.3 },
          { kind: "ruler", at: [150, 220], length: 900, ticks: 10, every: 0, caption: "米尺", draw: 1.5, from: 1 },
          { kind: "text", at: [600, 470], text: "1 英寸 = 2.54 厘米", size: "m", color: "#225dac", from: 3 },
          { kind: "text", at: [600, 620], text: "一点不多，一点不少", size: "m", from: 5.4 },
          { kind: "text", at: [600, 780], text: "背后藏着米", size: "l", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 4, title: "两套一起用", duration: 12,
        cues: [
          { kind: "sprite", icon: "🗽", path: [[600, 280]], size: 170, from: 0.3 },
          { kind: "shape", shape: "pill", at: [320, 520], size: [320, 100], color: "#ffd6bf", text: "日常：英尺", from: 1.6 },
          { kind: "shape", shape: "pill", at: [880, 520], size: [320, 100], color: "#bfe3ff", text: "科学：米", from: 3 },
          { kind: "sprite", icon: "🛰️", path: [[420, 740]], size: 90, from: 6.4 },
          { kind: "label", at: [470, 740], text: "混着用容易出错", side: "right", pos: [760, 740], from: 7 }
        ]
      }
    ]
  },
  {
    question: "mile",
    scenes: [
      {
        turn: 0, title: "四种“里”排排队", view: "grid", duration: 13,
        cues: [
          { kind: "shape", shape: "rect", at: [mid(500), 200], size: [bar(500), 70], color: "#ffd6bf", text: "里", from: 0.4 },
          { kind: "label", at: [150 + bar(500), 200], text: "500 米", side: "right", pos: [580, 200], from: 1 },
          { kind: "shape", shape: "rect", at: [mid(1000), 340], size: [bar(1000), 70], color: "#bfe3ff", text: "公里", from: 2.4 },
          { kind: "shape", shape: "rect", at: [mid(1609), 480], size: [bar(1609), 70], color: "#e9dcff", text: "英里", from: 4 },
          { kind: "label", at: [150 + bar(1609), 480], text: "约 1.6 公里", side: "right", pos: [1050, 400], from: 4.6 },
          { kind: "shape", shape: "rect", at: [mid(1852), 620], size: [bar(1852), 70], color: "#b9f0c8", text: "海里", from: 6 },
          { kind: "label", at: [1050, 655], text: "约 1.85 公里", side: "bottom", pos: [1020, 720], from: 6.6 },
          { kind: "text", at: [600, 820], text: "海里最长", size: "l", color: "#2f7d32", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "罗马士兵的一千步", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "左右脚各一次 = 一步", size: "m", from: 0.3 },
          { kind: "flow", path: [[150, 520], [850, 520]], icon: "👣", count: 6, speed: 0, size: 14, from: 1 },
          { kind: "sprite", icon: "💂", path: [[150, 400], [850, 400]], size: 120, travel: 5, from: 1.4 },
          { kind: "sprite", icon: "🪧", path: [[1020, 420]], size: 120, from: 6.4 },
          { kind: "label", at: [1020, 350], text: "里程碑", side: "top", pos: [1020, 240], from: 6.8 },
          { kind: "text", at: [600, 720], text: "拉丁语 mille：一千", size: "m", color: "#7a4fd6", from: 7.6 },
          { kind: "text", at: [600, 830], text: "约 1.5 公里", size: "m", color: "#2f7d32", from: 9.4 }
        ]
      },
      {
        turn: 2, title: "8 弗隆", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 300], size: [880, 70], color: "#c7e6a3", text: "一条田垄", from: 0.3 },
          { kind: "label", at: [600, 265], text: "1 弗隆", side: "top", pos: [600, 160], from: 1 },
          { kind: "flow", path: [[160, 460], [1040, 460]], color: "#8a6a3f", count: 9, speed: 0, size: 10, from: 2.6 },
          { kind: "text", at: [600, 560], text: "8 弗隆 = 1 英里", size: "m", from: 3.2 },
          { kind: "text", at: [600, 680], text: "= 5280 英尺", size: "m", color: "#225dac", from: 5.4 },
          { kind: "text", at: [600, 810], text: "变成约 1.6 公里", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 3, title: "海里跟着地球", duration: 13,
        cues: [
          { kind: "sprite", icon: "🌍", path: [[400, 470]], size: 420, from: 0.3 },
          { kind: "line", path: [[400, 470], [400, 280]], color: "#e5484d", width: 5, draw: 0.8, from: 1.6 },
          { kind: "line", path: [[400, 470], [590, 470]], color: "#e5484d", width: 5, draw: 0.8, from: 2.2 },
          { kind: "label", at: [470, 400], text: "赤道到北极 90 度", side: "right", pos: [860, 260], from: 3 },
          { kind: "text", at: [880, 470], text: "1 度分成 60 份", size: "m", from: 5.4 },
          { kind: "text", at: [880, 590], text: "一份 = 1 海里", size: "m", color: "#225dac", from: 7.4 },
          { kind: "sprite", icon: "⛵", path: [[880, 760]], size: 110, from: 9.4 }
        ]
      },
      {
        turn: 4, title: "都跟米说好了", duration: 12,
        cues: [
          { kind: "text", at: [600, 140], text: "海里：1852 米", size: "m", color: "#225dac", from: 0.3 },
          { kind: "text", at: [600, 260], text: "英里：1609.344 米", size: "m", color: "#7a4fd6", from: 2 },
          { kind: "ruler", at: [150, 420], length: 900, ticks: 10, every: 0, caption: "米", draw: 1.2, from: 4 },
          { kind: "text", at: [600, 720], text: "名字再老，背后都是米", size: "m", color: "#2f7d32", from: 7 }
        ]
      }
    ]
  }
];
