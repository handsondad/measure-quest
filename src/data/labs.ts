import type { LabId } from "./questions/types.ts";

/** 动手实验室：每个小实验都挂在某一问的某一轮里，也能单独打开 */
export type Lab = {
  id: LabId;
  emoji: string;
  title: string;
  /** 一句话告诉孩子要玩什么 */
  hook: string;
  color: string;
};

export const labs: readonly Lab[] = [
  { id: "hand-span", emoji: "✋", title: "一拃一拃量桌子", hook: "小念和爸爸各量一次，数字为什么打架？再拿尺子来评评理。", color: "#ff9f43" },
  { id: "balance", emoji: "⚖️", title: "天平称水果", hook: "往盘子里加砝码，让天平平下来，读出水果有多重。", color: "#6fd39a" },
  { id: "sixty", emoji: "🍬", title: "60 颗糖分给好朋友", hook: "60 颗和 100 颗，分给几个人都不剩？", color: "#b48cff" },
  { id: "thermometer", emoji: "🌡️", title: "两把温度尺子", hook: "拖动红线，看摄氏度和华氏度一起变。", color: "#ff7a8a" },
  { id: "gps", emoji: "🛰️", title: "三颗卫星找小念", hook: "一颗一颗打开卫星的圆圈，找出小念藏在哪。", color: "#4fd1c5" },
  { id: "prefix", emoji: "🪜", title: "给东西挑尺子", hook: "城市间的路、铅笔芯、芯片里的线条，各用千米、毫米还是纳米？", color: "#9b7bea" },
  { id: "power", emoji: "🔌", title: "当一回电表", hook: "让小灯、电视、空调各开一会儿，算算一共用了几度电。", color: "#f5c542" }
];

export const labById = (id: string): Lab | undefined => labs.find((lab) => lab.id === id);
