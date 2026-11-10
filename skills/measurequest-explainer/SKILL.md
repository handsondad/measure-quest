---
name: measurequest-explainer
description: >-
  Writes new 度量衡奇遇记 content in the house style: a 小念 × 爸爸 question-and-answer dialogue
  about measurement (length, mass, time, temperature, ancient Chinese 度量衡, SI units, GPS), a
  matching narrated explainer animation with rulers, balances, clocks and thermometers, an
  optional hands-on lab, and the voice clips. Use when adding or revising a question, writing or
  fixing a film (src/data/films), building a lab (src/components/labs), or generating narration in
  the measure-quest repo, or when the user mentions 小念, 爸爸, 讲解动画, 配音, 小实验 or 新问题.
---

# 度量衡奇遇记：写问答、做讲解动画和小实验

目标只有一个：孩子从头听到尾，就真的弄懂了标题里的那个问题。问答把道理讲对、讲顺；动画让孩子"看见"尺子、天平、钟是怎么回事；小实验让孩子亲手试一次；配音让不认字的孩子也能跟着听。仓库结构、命令和硬性规矩见根目录 `AGENTS.md`。

## 做一个新问题

```
- [ ] 1. 选题：小念真会碰到的事（量东西、看钟、称重、天气预报、手机地图），答案能落到一个具体的单位或工具上；放进 12 个主题里对应的那个（基本量的问题放对应单位的主题），新的年份大事顺手加进 src/data/timeline.ts
- [ ] 2. 问答：写进 src/data/questions/<主题>.ts → node tests/dialogue-rules.mjs <文件> 通过
- [ ] 3. 核对事实：数字、年份、机构名都查到出处，写进 parentTip 和 sources（https）
- [ ] 4. 分镜：每轮问答一场戏，先列出每场的底图、出现顺序和对应的那句台词
- [ ] 5. 动画：写进 src/data/films/<主题>.ts → node tests/film-rules.mjs <文件> 通过
- [ ] 6. 小实验（可选）：能玩的地方用 show: { kind: "lab", lab } 嵌进那一轮
- [ ] 7. 配音：npm run voice -- <问题id>
- [ ] 8. npm run typecheck && npm test && npm run build
- [ ] 9. 浏览器里看 #/q/<问题id>：开声音从头听一遍，再看手机宽度 390px，测完暂停
```

## 讲法（问答）

- **小念**是 7 岁男孩，好奇、爱追问，说话像孩子："桌子怎么会变短了？"
- **爸爸**温和、具体、不说教。先拿孩子见过的东西打比方（跷跷板、吸管、分糖、接力赛、积木），再说一次真名。
- **一条追问链**：从第 2 轮起，小念的问题要接住爸爸上一句里的一个词（检查器会查）。常见顺序：碰到的怪事 → 原因 → 古人怎么办 → 为什么要统一 / 改进 → 今天的样子。
- **长度**：5–8 轮；爸爸每句 20–170 字，小念每句不超过 90 字；除最后一轮外小念都要带"？"。
- **最后一轮**：小念以"我懂了""我明白了"开头，用自己的话串一遍；爸爸夸一句，再给一个马上能试的小窍门。
- **诚实**：传说要说是传说；给孩子的比喻（铯原子"摆动"）和简化（平面上三个圆定位）在 `parentTip` 里讲清楚。
- `units` 写这一问认识的单位和工具（1–6 个，都要在对话里出现），页尾做成卡片。

## 画法（动画）

格式见 `src/data/films/types.ts`，画布 1200×900。

1. **一轮问答一场戏**，每场 4–14 秒，整部 30–110 秒，至少 4 场；总结轮可以不配戏。
2. **先实物，再道理**：先出孩子认得的东西（emoji、天平、钟），再出关键词和数字。说到哪个，哪个才出现；用 `to` 收走旧元素，同时不超过 8 个。
3. **测量工具用专门的元素**：`ruler`（`every: 0` 只画刻度不写数）、`balance`（`tilt` → `tiltTo` 演示哪边重）、`clock`（`speed` 让指针快转）、`thermo`（`start` → `end` 液柱涨落，`marks` 标刻度）。
4. **底图跟着问题走**：比大小、算数用 `grid`（方格纸），天上和宇宙用 `space`，买卖和公平秤用 `market`，其他用默认的纸。
5. **误会要翻过来**：爸爸辟谣的那一轮放 `myth`。
6. **数字要对得上**：屏幕上的每个数字都要在爸爸那一轮的台词里出现过。
7. **字要少**：标签 ≤12 字，大字 ≤14 字，场次标题 ≤12 字，`caption` ≤8 字。
8. **给手机留地方**：手机上标签和大字会放大到 1.6 倍。三个并排的图标，中间那个的标签放到上方（`side: "top"`）；天平、尺子带 `caption` 时，下面的大字离开至少 150；竖箭头不写 `text`，另放标签。

写完一个文件就跑 `node tests/film-rules.mjs <文件>`，它会查时长、元素数量、文字长度、是否出了画面。

## 小实验

- 组件放 `src/components/labs/`，在 `src/data/labs.ts` 登记（emoji、标题、一句话玩法、颜色），在 `LabView.tsx` 的 `views` 里挂上。
- 一个实验只演示一件事；数字和问答里爸爸说的一致（比如桌子 120 厘米，小念 8 拃、爸爸 5 拃）。
- 底部用一句 `lab-say`（`aria-live`）告诉孩子刚才发生了什么、下一步试什么。
- 按钮写 `aria-label`；`prefers-reduced-motion` 下关动效；390px 宽也要能玩。

## 配音

- `npm run voice -- <问题id>` 生成每一句：小念 `zh-CN-YunxiaNeural`，爸爸 `zh-CN-YunxiNeural`（-5%）。只重配新的或改过的句子。
- 打开声音时播放器按配音长度把每场戏等比例拉长，所以动画按原始节奏写，元素出现的先后和台词先后一致即可。
- 改了问答文字，`npm test` 会报配音过期，重新跑 `npm run voice`。
