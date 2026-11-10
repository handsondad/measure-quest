import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "candela",
    scenes: [
      {
        turn: 0, title: "一支蜡烛", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "坎德拉 = 拉丁语“蜡烛”", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "sprite", icon: "🕯️", path: [[360, 470]], size: 210, from: 1.2 },
          { kind: "pulse", at: [360, 380], color: "#ffcf3f", radius: 150, from: 2 },
          { kind: "flow", path: [[420, 380], [1040, 380]], color: "#ffcf3f", count: 6, speed: 220, size: 10, from: 3.4 },
          { kind: "label", at: [760, 380], text: "朝一个方向", side: "top", pos: [800, 270], from: 4 },
          { kind: "text", at: [600, 780], text: "差不多 1 坎德拉", size: "m", color: "#2f7d32", from: 6.6 }
        ]
      },
      {
        turn: 1, title: "蜡烛不一样亮", duration: 12,
        cues: [
          { kind: "text", at: [600, 120], text: "粗细、灯芯不一样", size: "m", from: 0.3 },
          { kind: "sprite", icon: "🕯️", path: [[280, 400]], size: 120, wobble: true, from: 0.8 },
          { kind: "sprite", icon: "🕯️", path: [[600, 400]], size: 190, from: 1.2 },
          { kind: "sprite", icon: "🕯️", path: [[920, 400]], size: 90, wobble: true, from: 1.6 },
          { kind: "text", at: [600, 640], text: "像一拃一拃，不靠谱", size: "m", color: "#e5484d", from: 3.4 },
          { kind: "shape", shape: "pill", at: [600, 790], size: [440, 100], color: "#d8f5a2", text: "改用黄绿光", from: 7 }
        ]
      },
      {
        turn: 2, title: "眼睛最喜欢黄绿", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "一样强的光", size: "m", from: 0.3 },
          { kind: "sprite", icon: "👁️", path: [[600, 280]], size: 150, from: 0.8 },
          { kind: "shape", shape: "circle", at: [300, 560], size: [120, 120], color: "#e5484d", from: 2.2 },
          { kind: "shape", shape: "circle", at: [600, 560], size: [180, 180], color: "#b5e550", motion: "pulse", from: 2.8 },
          { kind: "shape", shape: "circle", at: [900, 560], size: [120, 120], color: "#4d96ff", from: 3.4 },
          { kind: "label", at: [600, 650], text: "看上去最亮", side: "bottom", pos: [600, 770], from: 5 }
        ]
      },
      {
        turn: 3, title: "手电筒聚成一束", duration: 12,
        cues: [
          { kind: "sprite", icon: "💡", path: [[250, 330]], size: 120, from: 0.3 },
          { kind: "pulse", at: [250, 330], color: "#ffcf3f", radius: 150, from: 0.8 },
          { kind: "label", at: [250, 400], text: "往四面八方散开", side: "bottom", pos: [250, 520], from: 1.8 },
          { kind: "sprite", icon: "🔦", path: [[1020, 640]], size: 130, rotate: 45, from: 4 },
          { kind: "flow", path: [[940, 650], [520, 650]], color: "#ffcf3f", count: 8, speed: 280, size: 12, from: 4.6 },
          { kind: "label", at: [700, 630], text: "正前方更亮", side: "top", pos: [700, 510], from: 5.4 },
          { kind: "text", at: [600, 840], text: "别照别人的眼睛", size: "m", color: "#e5484d", from: 8.6 }
        ]
      },
      {
        turn: 4, title: "红绿灯也要量", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "朝某个方向至少多亮", size: "m", from: 0.3 },
          { kind: "sprite", icon: "🚦", path: [[250, 400]], size: 170, from: 1 },
          { kind: "pulse", at: [250, 330], color: "#e5484d", radius: 110, from: 1.6 },
          { kind: "sprite", icon: "🚗", path: [[600, 420]], size: 150, from: 2.4 },
          { kind: "sprite", icon: "🚢", path: [[950, 420]], size: 150, from: 3.2 },
          { kind: "text", at: [600, 660], text: "太暗看不清，太亮晃眼", size: "m", color: "#e5484d", from: 4.8 },
          { kind: "text", at: [600, 790], text: "大家用同一个坎德拉", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      }
    ]
  },
  {
    question: "lux",
    scenes: [
      {
        turn: 0, title: "落在书上的光", duration: 12,
        cues: [
          { kind: "text", at: [600, 100], text: "勒克斯：照到书上的光", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "sprite", icon: "💡", path: [[300, 240]], size: 110, from: 1 },
          { kind: "flow", path: [[330, 300], [560, 520]], color: "#ffcf3f", count: 6, speed: 180, size: 9, from: 1.8 },
          { kind: "sprite", icon: "📖", path: [[620, 580]], size: 170, from: 2.4 },
          { kind: "label", at: [700, 560], text: "课桌至少 300 勒克斯", side: "right", pos: [930, 400], from: 3.8 },
          { kind: "text", at: [600, 800], text: "被窝里：一块亮一块暗", size: "m", color: "#e5484d", from: 7 }
        ]
      },
      {
        turn: 1, title: "离灯近一半", duration: 13,
        cues: [
          { kind: "sprite", icon: "💡", path: [[160, 400]], size: 110, from: 0.3 },
          { kind: "sprite", icon: "📖", path: [[420, 420]], size: 100, from: 1.2 },
          { kind: "label", at: [420, 370], text: "近一半：4 倍", side: "top", pos: [420, 250], from: 2 },
          { kind: "sprite", icon: "📖", path: [[960, 420]], size: 100, from: 4.4 },
          { kind: "label", at: [960, 370], text: "远 2 倍：四分之一", side: "top", pos: [930, 250], from: 5.2 },
          { kind: "text", at: [600, 680], text: "像拿喷壶浇花", size: "m", from: 7.6 },
          { kind: "text", at: [600, 800], text: "近了集中，远了散开", size: "m", color: "#2f7d32", from: 9.4 }
        ]
      },
      {
        turn: 2, title: "太阳和月亮", duration: 12,
        cues: [
          { kind: "sprite", icon: "☀️", path: [[220, 300]], size: 160, from: 0.3 },
          { kind: "label", at: [220, 390], text: "约 10 万勒克斯", side: "bottom", pos: [220, 480], from: 1 },
          { kind: "sprite", icon: "📚", path: [[600, 300]], size: 130, from: 2.6 },
          { kind: "label", at: [600, 235], text: "课桌 300 勒克斯", side: "top", pos: [600, 170], from: 3.2 },
          { kind: "sprite", icon: "🌕", path: [[980, 300]], size: 140, from: 4.8 },
          { kind: "label", at: [980, 390], text: "约零点一勒克斯", side: "bottom", pos: [960, 480], from: 5.4 },
          { kind: "text", at: [600, 720], text: "眼睛从月光到太阳都行", size: "m", color: "#2f7d32", from: 7.8 }
        ]
      },
      {
        turn: 3, title: "眼睛为什么累", duration: 12,
        cues: [
          { kind: "sprite", icon: "👁️", path: [[330, 380]], size: 190, from: 0.3 },
          { kind: "label", at: [330, 470], text: "瞳孔开得大大的", side: "bottom", pos: [330, 580], from: 1 },
          { kind: "sprite", icon: "😫", path: [[870, 380]], size: 150, from: 3 },
          { kind: "label", at: [870, 470], text: "小肌肉累了", side: "bottom", pos: [870, 580], from: 3.6 },
          { kind: "text", at: [600, 760], text: "大灯 + 台灯，光要匀", size: "m", color: "#2f7d32", from: 6.8 }
        ]
      },
      {
        turn: 4, title: "够不够亮", duration: 11,
        cues: [
          { kind: "sprite", icon: "📟", path: [[280, 380]], size: 150, from: 0.3 },
          { kind: "label", at: [280, 460], text: "照度计", side: "bottom", pos: [280, 560], from: 1 },
          { kind: "shape", shape: "pill", at: [800, 260], size: [340, 86], color: "#b9f0c8", text: "字清清楚楚", from: 2.6 },
          { kind: "shape", shape: "pill", at: [800, 390], size: [340, 86], color: "#b9f0c8", text: "亮度匀匀的", from: 3.6 },
          { kind: "shape", shape: "pill", at: [800, 520], size: [340, 86], color: "#b9f0c8", text: "半小时不酸", from: 4.6 },
          { kind: "text", at: [600, 760], text: "过一会儿看看远处", size: "m", color: "#225dac", from: 7 }
        ]
      }
    ]
  }
];
