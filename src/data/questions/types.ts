/**
 * 小念 × 爸爸：问题驱动的讲解。
 * 小念从生活里碰到的一件事发问，爸爸回答；小念接着爸爸刚说的话追问，一问一答一路讲到道理。
 * 从头读到尾，就能弄懂标题里的那个问题。
 */

import type { BaseUnitId } from "../units.ts";

export type TopicId =
  | "why" | "china" | "world"
  | "system" | "length" | "mass" | "time" | "heat" | "electric" | "light" | "amount"
  | "modern";

/** 首页把主题分成三排：测量从哪来、七个基本量、今天的测量 */
export type TopicGroup = "origin" | "si" | "today";

export const topicGroups: readonly { id: TopicGroup; title: string; hint: string }[] = [
  { id: "origin", title: "🧭 测量从哪里来", hint: "从一拃、一步、一杆秤，到全世界说好的同一把尺子" },
  { id: "si", title: "🧩 七个基本量", hint: "国际单位制只有 7 块积木，其他单位都是它们拼出来的" },
  { id: "today", title: "🚀 今天的测量", hint: "卫星、芯片里，测量准到什么地步" }
];

export type Topic = {
  id: TopicId;
  group: TopicGroup;
  emoji: string;
  title: string;
  color: string;
  /** 这一类讲的是七个基本单位里的哪一个，有就在列表页挂上它的档案卡 */
  unit?: BaseUnitId;
  /** 小念眼里这一类是什么 */
  kidHook: string;
  /** 爸爸眼里这一类在讲什么 */
  dadLens: string;
};

export const topics: readonly Topic[] = [
  {
    id: "why", group: "origin", emoji: "🤝", title: "为什么要量", color: "#ff9f43",
    kidHook: "我的一拃和爸爸的一拃不一样长，那到底听谁的？",
    dadLens: "为什么大家要用同一把尺子：公平、合作，还有写错单位的教训"
  },
  {
    id: "china", group: "origin", emoji: "🏯", title: "中国的度量衡", color: "#e2574c",
    kidHook: "秦始皇为什么要统一尺子？奶奶说的三尺布有多长？",
    dadLens: "中国的度、量、衡：秦朝的大统一，到今天的市制和米制"
  },
  {
    id: "world", group: "origin", emoji: "🌍", title: "世界各地的单位", color: "#f2a541",
    kidHook: "英尺是国王的脚吗？英里、海里为什么都叫“里”？",
    dadLens: "英尺、英寸、英里、海里这些老单位的来历，和它们怎么交给了米"
  },
  {
    id: "system", group: "si", emoji: "🧱", title: "七块积木和词头", color: "#9b7bea",
    kidHook: "全世界一共有几把“尺子”？千米的“千”是什么意思？",
    dadLens: "国际单位制：7 个基本单位，和放大缩小它们的词头"
  },
  {
    id: "length", group: "si", unit: "metre", emoji: "📏", title: "长度 · 米", color: "#4fb6ff",
    kidHook: "一米是谁定的？光年是时间还是长度？",
    dadLens: "长度：从量地球到用光定义的米，一直量到星星"
  },
  {
    id: "mass", group: "si", unit: "kilogram", emoji: "⚖️", title: "质量 · 千克", color: "#6fd39a",
    kidHook: "天平怎么知道一样重？到了月球我会变轻吗？",
    dadLens: "质量：天平、砝码、被换掉的千克原器，还有质量和重力的区别"
  },
  {
    id: "time", group: "si", unit: "second", emoji: "⏰", title: "时间 · 秒", color: "#b48cff",
    kidHook: "为什么一分钟是 60 秒？一秒钟是谁说了算？",
    dadLens: "时间：古巴比伦的六十进位和原子钟"
  },
  {
    id: "heat", group: "si", unit: "kelvin", emoji: "🌡️", title: "温度 · 开尔文", color: "#ff7a8a",
    kidHook: "温度计怎么知道有多热？世界上最冷能冷到多少度？",
    dadLens: "温度：热胀冷缩、摄氏度、华氏度，和从绝对零度算起的开尔文"
  },
  {
    id: "electric", group: "si", unit: "ampere", emoji: "⚡", title: "电流 · 安培", color: "#f5c542",
    kidHook: "充电器上的 2A 是什么？电费单上的“一度电”是多少？",
    dadLens: "电流：数一秒钟流过多少电荷，还有瓦和度电"
  },
  {
    id: "light", group: "si", unit: "candela", emoji: "💡", title: "发光强度 · 坎德拉", color: "#ffb84d",
    kidHook: "灯有多亮怎么量？在多亮的地方看书眼睛才不累？",
    dadLens: "光：从一支蜡烛来的坎德拉，和照到书上的勒克斯"
  },
  {
    id: "amount", group: "si", unit: "mole", emoji: "🫘", title: "物质的量 · 摩尔", color: "#7cc4a4",
    kidHook: "一口水里有多少个水分子？一斤绿豆和一斤黄豆谁的颗数多？",
    dadLens: "摩尔：数不清的小颗粒，怎么用称一称来数"
  },
  {
    id: "modern", group: "today", emoji: "🛰️", title: "今天的测量", color: "#4fd1c5",
    kidHook: "手机地图怎么知道我在哪？芯片里的线有多细？",
    dadLens: "卫星定位、纳米芯片，和越来越准的测量"
  }
];

/** 问题列表里从简单到复杂的排序 */
export type Difficulty = 1 | 2 | 3;
export const difficultyLabel: Record<Difficulty, string> = { 1: "入门", 2: "进阶", 3: "挑战" };

/** 能动手玩的小实验，组件在 src/components/labs/ */
export type LabId = "hand-span" | "balance" | "sixty" | "thermometer" | "gps" | "prefix" | "power";

export type ShowFrame = { icon: string; label: string };

/** 爸爸讲这一段时配的东西：图解步骤，或者一个能动手玩的小实验 */
export type BeatShow =
  | { kind: "steps"; frames: readonly ShowFrame[] }
  | { kind: "lab"; lab: LabId };

export type DialogueTurn = {
  /** 小念：第一句说碰到的事，之后每一句都接着爸爸上一句里的说法追问；最后一句用自己的话总结 */
  nian: string;
  /** 爸爸的回答 */
  dad: string;
  show?: BeatShow;
};

/** 给大人看的出处：机构、博物馆、百科 */
export type Source = { label: string; url: string };

export type MeasureQuestion = {
  id: string;
  topic: TopicId;
  /** 列表上显示的问题，用小念的口吻 */
  title: string;
  /** 小念刚刚遇到的事 */
  trigger: string;
  difficulty: Difficulty;
  /** 这一问讲到的单位和工具，页尾做成小卡片，比如「米」「天平」 */
  units: readonly string[];
  /** 一问一答，从碰到的事讲到道理 */
  dialogue: readonly DialogueTurn[];
  /** 给大人：补充背景、数字的出处、还有争议的地方 */
  parentTip: string;
  sources: readonly Source[];
};
