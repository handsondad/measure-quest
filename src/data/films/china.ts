import type { Film } from "./types.ts";

export const films: readonly Film[] = [
  {
    question: "du-liang-heng",
    scenes: [
      {
        turn: 0, title: "度·量·衡", duration: 12,
        cues: [
          { kind: "glyph", char: "度", at: [250, 280], size: 200, caption: "量长短", from: 0.3 },
          { kind: "sprite", icon: "📏", path: [[250, 590]], size: 100, from: 1.2 },
          { kind: "glyph", char: "量", at: [600, 280], size: 200, caption: "量多少", from: 2.6 },
          { kind: "sprite", icon: "🪣", path: [[600, 590]], size: 100, from: 3.5 },
          { kind: "glyph", char: "衡", at: [950, 280], size: 200, caption: "称轻重", from: 4.9 },
          { kind: "sprite", icon: "⚖️", path: [[950, 590]], size: 100, from: 5.8 },
          { kind: "text", at: [600, 800], text: "合起来就是测量", size: "m", color: "#2f7d32", from: 8.2 }
        ]
      },
      {
        turn: 1, title: "一斗一斗地量", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 540], size: [320, 220], color: "#c99a5b", text: "斗", from: 0.3 },
          { kind: "flow", path: [[600, 140], [600, 440]], icon: "🌾", count: 8, speed: 220, size: 14, from: 1, to: 5.2 },
          { kind: "line", path: [[430, 430], [770, 430]], color: "#4a3b2a", width: 8, draw: 0.8, from: 5.2 },
          { kind: "label", at: [770, 430], text: "刮平就是一斗", side: "right", pos: [960, 360], from: 5.8 },
          { kind: "text", at: [600, 820], text: "十升是一斗", size: "m", color: "#7a6a55", from: 8 }
        ]
      },
      {
        turn: 2, title: "杆秤和秤砣", duration: 12,
        cues: [
          { kind: "line", path: [[230, 380], [1000, 380]], color: "#8a6232", width: 12, draw: 1, from: 0.3 },
          { kind: "line", path: [[400, 380], [400, 240]], color: "#8a6232", width: 3, draw: 0.5, from: 1.1 },
          { kind: "line", path: [[290, 380], [290, 450]], color: "#8a6232", width: 3, draw: 0.5, from: 1.6 },
          { kind: "sprite", icon: "🧺", path: [[290, 500]], size: 90, from: 2 },
          { kind: "sprite", icon: "⚫", path: [[560, 430], [880, 430]], size: 64, travel: 3, from: 3.2 },
          { kind: "label", at: [880, 430], text: "秤砣，也叫权", side: "bottom", pos: [880, 560], from: 6.6 },
          { kind: "text", at: [600, 800], text: "权衡：掂量轻重", size: "m", color: "#ff9f43", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "离得越远越压得动", duration: 11,
        cues: [
          { kind: "line", path: [[230, 400], [1000, 400]], color: "#8a6232", width: 12, draw: 0.6, from: 0.3 },
          { kind: "sprite", icon: "🛍️", path: [[290, 500]], size: 110, from: 0.6 },
          { kind: "sprite", icon: "⚫", path: [[920, 460]], size: 60, from: 1 },
          { kind: "pulse", at: [400, 400], color: "#ff9f43", radius: 60, from: 1.8 },
          { kind: "arrow", path: [[400, 340], [295, 340]], color: "#ff9f43", text: "很近", draw: 0.6, from: 2.6 },
          { kind: "arrow", path: [[400, 300], [920, 300]], color: "#4d96ff", text: "挪得很远", draw: 1, from: 3.8 },
          { kind: "text", at: [600, 760], text: "小秤砣撑起一大袋米", size: "m", color: "#2f7d32", from: 6.4 }
        ]
      },
      {
        turn: 4, title: "秤上的星", duration: 11,
        cues: [
          { kind: "line", path: [[200, 450], [1000, 450]], color: "#8a6232", width: 14, draw: 0.6, from: 0.3 },
          { kind: "flow", path: [[330, 450], [960, 450]], icon: "⭐", count: 8, speed: 0, size: 10, from: 1 },
          { kind: "label", at: [645, 450], text: "秤星就是刻度", side: "bottom", pos: [645, 570], from: 1.8 },
          { kind: "text", at: [600, 200], text: "传说：秤星是天上的星", size: "m", color: "#7a4fd6", from: 3 },
          { kind: "text", at: [600, 740], text: "每一颗星都是良心", size: "m", color: "#2f7d32", from: 6.6 }
        ]
      }
    ]
  },
  {
    question: "qin-unify",
    scenes: [
      {
        turn: 0, title: "各国的升不一样", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [300, 440], size: [180, 180], color: "#c99a5b", text: "秦", from: 0.5 },
          { kind: "shape", shape: "rect", at: [600, 440], size: [240, 240], color: "#d8b07a", text: "齐", from: 1.1 },
          { kind: "shape", shape: "rect", at: [900, 440], size: [140, 140], color: "#b98a4e", text: "楚", from: 1.7 },
          { kind: "text", at: [600, 130], text: "大小都不一样", size: "m", from: 2.6 },
          { kind: "sprite", icon: "🌾", path: [[300, 300], [600, 280]], size: 60, travel: 2, from: 4.2 },
          { kind: "text", at: [600, 760], text: "公元前 221 年 秦统一", size: "m", color: "#e2574c", from: 7.6 }
        ]
      },
      {
        turn: 1, title: "交多交少", duration: 11,
        cues: [
          { kind: "meter", at: [380, 300], label: "这里交的粮", start: 0, end: 0.9, color: "#ff9f43", from: 0.6 },
          { kind: "meter", at: [380, 420], label: "那里交的粮", start: 0, end: 0.5, color: "#ff9f43", from: 1.4 },
          { kind: "text", at: [380, 540], text: "很不公平", size: "m", color: "#e5484d", from: 3.8 },
          { kind: "sprite", icon: "🛒", path: [[720, 300], [1060, 300]], size: 80, travel: 2, from: 5.4 },
          { kind: "text", at: [890, 420], text: "到处换算", size: "m", from: 6.4 },
          { kind: "sprite", icon: "😠", path: [[890, 560]], size: 90, wobble: true, from: 7.8 }
        ]
      },
      {
        turn: 2, title: "全国只用秦国的", duration: 12,
        cues: [
          { kind: "sprite", icon: "📜", path: [[220, 400]], size: 140, from: 0.3 },
          { kind: "label", at: [220, 400], text: "下一道命令", side: "bottom", pos: [220, 540], from: 1 },
          { kind: "arrow", path: [[320, 400], [460, 400]], draw: 0.6, from: 2 },
          { kind: "shape", shape: "rect", at: [580, 380], size: [180, 130], color: "#c99a5b", text: "量器", from: 2.6 },
          { kind: "shape", shape: "circle", at: [580, 540], size: [110, 110], color: "#a68a64", text: "权", from: 3.1 },
          { kind: "flow", path: [[690, 450], [1060, 260]], icon: "📦", count: 3, speed: 150, size: 14, from: 4.4 },
          { kind: "text", at: [600, 120], text: "刻着四十个字的命令", size: "m", color: "#7a6a55", from: 6.4 },
          { kind: "text", at: [600, 800], text: "全国一个样", size: "m", color: "#2f7d32", from: 9 }
        ]
      },
      {
        turn: 3, title: "商鞅方升", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [540, 440], size: [300, 220], color: "#b98a4e", text: "商鞅方升", from: 0.5 },
          { kind: "shape", shape: "rect", at: [780, 440], size: [180, 52], color: "#b98a4e", from: 1.1 },
          { kind: "label", at: [540, 330], text: "带把手的小方盒", side: "top", pos: [540, 210], from: 2 },
          { kind: "sprite", icon: "📜", path: [[260, 600]], size: 80, from: 4.8 },
          { kind: "label", at: [540, 550], text: "底上补刻命令", side: "bottom", pos: [540, 680], from: 5.2 },
          { kind: "text", at: [600, 820], text: "装满就是秦国一升", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 4, title: "大约 200 毫升", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [330, 450], size: [220, 180], color: "#b98a4e", text: "方升", from: 0.3 },
          { kind: "flow", path: [[450, 450], [740, 450]], color: "#bfe3ff", count: 6, speed: 200, size: 12, from: 1.5, to: 5.2 },
          { kind: "sprite", icon: "🥛", path: [[860, 450]], size: 150, from: 2.6 },
          { kind: "count", at: [600, 170], label: "装满大约", start: 0, end: 200, unit: "毫升", over: 2, from: 3.2 },
          { kind: "text", at: [600, 780], text: "古代一升比今天小", size: "m", color: "#e2574c", from: 7 }
        ]
      }
    ]
  },
  {
    question: "half-jin",
    scenes: [
      {
        turn: 0, title: "半斤 = 八两", duration: 11,
        cues: [
          { kind: "balance", at: [600, 250], left: "半斤", right: "八两", tilt: 0, from: 0.3 },
          { kind: "text", at: [600, 820], text: "古代：一斤=十六两", size: "m", from: 2.4 },
          { kind: "text", at: [600, 110], text: "一样重！", size: "m", color: "#2f7d32", from: 4.4 },
          { kind: "sprite", icon: "🧒", path: [[170, 640]], size: 90, from: 6.4 },
          { kind: "sprite", icon: "👦", path: [[1030, 640]], size: 90, from: 6.7 }
        ]
      },
      {
        turn: 1, title: "十六颗星的传说", view: "space", duration: 11,
        cues: [
          { kind: "flow", path: [[150, 250], [250, 230], [340, 260], [410, 320], [510, 330], [550, 420], [430, 430]], icon: "⭐", count: 7, speed: 0, size: 10, from: 0.6 },
          { kind: "text", at: [340, 540], text: "北斗七星", size: "s", color: "#ffe08a", from: 1.2 },
          { kind: "flow", path: [[700, 250], [780, 220], [860, 250], [900, 330], [980, 350], [1050, 300]], icon: "⭐", count: 6, speed: 0, size: 10, from: 2.4 },
          { kind: "text", at: [880, 450], text: "南斗六星", size: "s", color: "#ffe08a", from: 3 },
          { kind: "flow", path: [[480, 640], [720, 640]], icon: "🌟", count: 3, speed: 0, size: 12, from: 4.4 },
          { kind: "text", at: [600, 730], text: "福、禄、寿", size: "s", color: "#ffe08a", from: 5 },
          { kind: "text", at: [600, 840], text: "这只是传说", size: "m", color: "#ff9f43", from: 7.4 }
        ]
      },
      {
        turn: 2, title: "16 一直能对半分", view: "grid", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [600, 150], size: [260, 80], color: "#ffe08a", text: "16 两", from: 0.3 },
          { kind: "shape", shape: "pill", at: [400, 310], size: [200, 72], color: "#ffd6bf", text: "8 两", from: 1.6 },
          { kind: "shape", shape: "pill", at: [800, 310], size: [200, 72], color: "#ffd6bf", text: "8 两", from: 1.8 },
          { kind: "shape", shape: "pill", at: [280, 470], size: [170, 66], color: "#bfe3ff", text: "4 两", from: 3.2 },
          { kind: "shape", shape: "pill", at: [520, 470], size: [170, 66], color: "#bfe3ff", text: "4 两", from: 3.4 },
          { kind: "shape", shape: "pill", at: [210, 630], size: [130, 60], color: "#b9f0c8", text: "2 两", from: 4.8 },
          { kind: "shape", shape: "pill", at: [360, 630], size: [130, 60], color: "#b9f0c8", text: "2 两", from: 5 },
          { kind: "text", at: [850, 620], text: "一直是整两", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "改成十两", duration: 11,
        cues: [
          { kind: "text", at: [600, 130], text: "1959 年", size: "l", from: 0.3 },
          { kind: "shape", shape: "pill", at: [330, 380], size: [320, 110], color: "#ffd6bf", text: "一斤十六两", from: 1 },
          { kind: "arrow", path: [[510, 380], [680, 380]], draw: 0.6, from: 2.4 },
          { kind: "shape", shape: "pill", at: [870, 380], size: [320, 110], color: "#b9f0c8", text: "一斤十两", from: 2.9 },
          { kind: "text", at: [600, 590], text: "一斤 = 500 克", size: "m", from: 5 },
          { kind: "text", at: [600, 690], text: "一两 = 50 克", size: "m", from: 6.2 },
          { kind: "text", at: [600, 820], text: "满十进一，好算", size: "m", color: "#2f7d32", from: 8.2 }
        ]
      },
      {
        turn: 4, title: "还能碰到的老规矩", duration: 10,
        cues: [
          { kind: "text", at: [600, 150], text: "半斤八两 = 差不多", size: "m", color: "#7a4fd6", from: 0.3 },
          { kind: "sprite", icon: "🏙️", path: [[600, 440]], size: 170, from: 3 },
          { kind: "label", at: [600, 520], text: "香港的老市场", side: "bottom", pos: [600, 610], from: 3.8 },
          { kind: "text", at: [600, 770], text: "还能碰到十六两一斤", size: "m", from: 5.4 }
        ]
      }
    ]
  },
  {
    question: "shi-zhi",
    scenes: [
      {
        turn: 0, title: "三尺正好一米", view: "grid", duration: 12,
        cues: [
          { kind: "ruler", at: [150, 180], length: 900, ticks: 3, every: 0, caption: "1 米", draw: 1.2, from: 0.3 },
          { kind: "shape", shape: "rect", at: [300, 420], size: [290, 70], color: "#ffd6bf", text: "1 尺", from: 1.8 },
          { kind: "shape", shape: "rect", at: [600, 420], size: [290, 70], color: "#ffd6bf", text: "1 尺", from: 2.4 },
          { kind: "shape", shape: "rect", at: [900, 420], size: [290, 70], color: "#ffd6bf", text: "1 尺", from: 3 },
          { kind: "text", at: [600, 575], text: "1 市尺 = 三分之一米", size: "m", color: "#225dac", from: 4.4 },
          { kind: "sprite", icon: "👵", path: [[300, 740]], size: 120, from: 7 },
          { kind: "label", at: [360, 740], text: "三尺布正好 1 米", side: "right", pos: [680, 740], from: 7.6 }
        ]
      },
      {
        turn: 1, title: "1959 年的约定", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "1959 年：米制为主", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "sprite", icon: "📏", path: [[220, 340]], size: 120, from: 1.4 },
          { kind: "label", at: [220, 410], text: "1 尺 = 三分之一米", side: "bottom", pos: [220, 520], from: 2 },
          { kind: "sprite", icon: "⚖️", path: [[600, 340]], size: 120, from: 3.6 },
          { kind: "label", at: [600, 280], text: "1 斤 = 500 克", side: "top", pos: [600, 215], from: 4.2 },
          { kind: "sprite", icon: "🛤️", path: [[980, 340]], size: 120, from: 5.8 },
          { kind: "label", at: [980, 410], text: "1 里 = 500 米", side: "bottom", pos: [980, 520], from: 6.4 },
          { kind: "text", at: [600, 740], text: "老名字搭在米制上", size: "m", color: "#2f7d32", from: 8.6 }
        ]
      },
      {
        turn: 2, title: "公斤就是千克", view: "market", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "公斤就是千克", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "balance", at: [600, 240], size: 200, left: "🧒", right: "🧱", caption: "25 公斤", from: 1 },
          { kind: "text", at: [600, 720], text: "1 公斤 = 2 斤", size: "m", color: "#225dac", from: 4.6 },
          { kind: "text", at: [600, 820], text: "1 两 = 50 克", size: "m", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "全国换成法定单位", duration: 12,
        cues: [
          { kind: "text", at: [600, 140], text: "1984 年：法定计量单位", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "sprite", icon: "📚", path: [[300, 340]], size: 120, from: 1.4 },
          { kind: "sprite", icon: "📦", path: [[600, 340]], size: 120, from: 2 },
          { kind: "sprite", icon: "⚖️", path: [[900, 340]], size: 120, from: 2.6 },
          { kind: "text", at: [600, 500], text: "课本、包装、秤和尺", size: "m", from: 3.4 },
          { kind: "text", at: [600, 630], text: "都用米、千克、升", size: "m", color: "#225dac", from: 5.6 },
          { kind: "text", at: [600, 780], text: "1990 年底换完", size: "m", color: "#2f7d32", from: 8 }
        ]
      },
      {
        turn: 4, title: "一亩地有多大", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [380, 360], size: [440, 300], color: "#c7e6a3", text: "1 亩", from: 0.3 },
          { kind: "label", at: [380, 510], text: "约 667 平方米", side: "bottom", pos: [380, 610], from: 1.2 },
          { kind: "sprite", icon: "🏀", path: [[880, 360]], size: 130, from: 3 },
          { kind: "label", at: [880, 430], text: "一个半篮球场", side: "bottom", pos: [880, 530], from: 3.6 },
          { kind: "text", at: [600, 720], text: "1 公顷 = 15 亩", size: "m", color: "#225dac", from: 6.4 },
          { kind: "text", at: [600, 830], text: "= 10000 平方米", size: "m", from: 8.4 }
        ]
      }
    ]
  },
  {
    question: "eight-chi",
    scenes: [
      {
        turn: 0, title: "身长八尺？", duration: 12,
        cues: [
          { kind: "sprite", icon: "🧔", path: [[280, 420]], size: 220, from: 0.3 },
          { kind: "label", at: [280, 540], text: "诸葛亮：八尺", side: "bottom", pos: [280, 640], from: 1 },
          { kind: "text", at: [800, 240], text: "三国 1 尺 ≈ 24 厘米", size: "m", color: "#c27c0e", from: 2.6 },
          { kind: "count", at: [800, 470], label: "八尺大约", start: 0, end: 192, unit: "厘米", over: 2.2, from: 4.2 },
          { kind: "text", at: [600, 800], text: "一米九出头的大高个", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      },
      {
        turn: 1, title: "博物馆里的汉尺", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "出土的铜尺、骨尺", size: "m", from: 0.3 },
          { kind: "ruler", at: [220, 260], length: 700, ticks: 10, every: 0, color: "#e8c48a", caption: "汉朝一尺", draw: 1.4, from: 1 },
          { kind: "text", at: [600, 540], text: "1 尺 ≈ 23 厘米", size: "m", color: "#225dac", from: 3.4 },
          { kind: "sprite", icon: "🧍", path: [[300, 740]], size: 130, from: 5.8 },
          { kind: "label", at: [360, 740], text: "七尺 ≈ 162 厘米", side: "right", pos: [660, 740], from: 6.4 }
        ]
      },
      {
        turn: 2, title: "尺子慢慢长大", view: "grid", duration: 13,
        cues: [
          { kind: "shape", shape: "rect", at: [445, 220], size: [590, 72], color: "#ffd6bf", text: "汉尺", from: 0.4 },
          { kind: "label", at: [740, 220], text: "以前短得多", side: "right", pos: [950, 220], from: 1 },
          { kind: "shape", shape: "rect", at: [535, 390], size: [770, 72], color: "#ffe08a", text: "唐大尺", from: 2.4 },
          { kind: "label", at: [920, 390], text: "约 30 厘米", side: "right", pos: [1060, 310], from: 3 },
          { kind: "shape", shape: "rect", at: [560, 560], size: [820, 72], color: "#bfe3ff", text: "明清尺", from: 4.4 },
          { kind: "label", at: [970, 596], text: "约 32 厘米", side: "bottom", pos: [960, 670], from: 5 },
          { kind: "text", at: [600, 810], text: "尺子做长，收税更多", size: "m", color: "#e5484d", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "大尺和小尺", duration: 12,
        cues: [
          { kind: "text", at: [600, 130], text: "唐朝：大尺和小尺", size: "m", color: "#c27c0e", from: 0.3 },
          { kind: "sprite", icon: "🧵", path: [[300, 360]], size: 120, from: 1.2 },
          { kind: "label", at: [300, 430], text: "大尺 30 厘米", side: "bottom", pos: [300, 540], from: 1.8 },
          { kind: "sprite", icon: "🎵", path: [[900, 360]], size: 120, from: 3.4 },
          { kind: "label", at: [900, 430], text: "小尺 24 厘米多", side: "bottom", pos: [900, 540], from: 4 },
          { kind: "text", at: [600, 770], text: "裁衣、木匠、量田各不同", size: "m", color: "#7a4fd6", from: 7 }
        ]
      },
      {
        turn: 4, title: "再也不偷偷变长", duration: 11,
        cues: [
          { kind: "text", at: [600, 130], text: "1929年：市尺三分之一米", size: "m", color: "#225dac", from: 0.3 },
          { kind: "ruler", at: [150, 280], length: 900, ticks: 10, every: 0, caption: "米", draw: 1.2, from: 1.4 },
          { kind: "sprite", icon: "💡", path: [[320, 620]], size: 120, from: 4.4 },
          { kind: "label", at: [380, 620], text: "光速定得死死的", side: "right", pos: [680, 620], from: 5 },
          { kind: "text", at: [600, 810], text: "过一千年也不会变长", size: "m", color: "#2f7d32", from: 7.4 }
        ]
      }
    ]
  }
];
