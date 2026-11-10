# AGENTS.md：给接手这个仓库的代码助手

## 这是什么

「📏 度量衡奇遇记」：给 5–12 岁孩子的测量科普网站，奇遇记系列（汉字奇遇记 hanverse、身体奇遇记 bodyverse）的一员。小念（男孩）碰到一件和测量有关的事，问爸爸；爸爸回答，小念接着爸爸的话追问，5–8 轮一路讲到道理，最后小念用自己的话总结。每个问题配一部讲解动画（尺子、天平、钟面、温度计在纸、方格纸、星空、菜市场上逐步出现），小念和爸爸的配音把整段问答读出来，动画跟着声音走。有的问答里嵌着能动手玩的小实验，首页「动手实验室」也能单独打开。

技术栈：React 18 + TypeScript（strict）+ Vite 5，首页 3D 场景用 three + @react-three/fiber。Hash 路由，没有后端，所有内容都是 `src/data/` 里的 TypeScript 数据。

**写内容、写动画、做小实验之前，先读 `skills/measurequest-explainer/SKILL.md`**。

## 命令

需要 Node.js 22.18+，测试和脚本直接用 Node 的 TypeScript 类型擦除跑 `.ts` 文件。

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | 全部测试（`node --test tests/*.test.mjs`） |
| `npm run build` | 生产构建 |
| `node tests/dialogue-rules.mjs src/data/questions/<主题>.ts` | 检查问答写法 |
| `node tests/film-rules.mjs [src/data/films/<主题>.ts]` | 检查动画 |
| `npm run voice [-- <问题id>...]` | 给新的或改过的问答句子配音 |

交付前四个都要过：`npm run typecheck`、`npm test`、`node tests/film-rules.mjs`、`npm run build`。

## 地图

| 路由 | 页面 | 文件 |
|---|---|---|
| `#/` | 首页：标题、小念和爸爸的 3D 场景、「一张图看懂测量」、按三组排的 12 个主题、动手实验室 | `src/pages/HomePage.tsx` |
| `#/units` | 单位大家庭：7 个基本单位、度量衡对照、导出单位、词头表、市制 / 英制换算 | `src/pages/UnitsPage.tsx` |
| `#/unit/<单位id>` | 一个基本单位的档案：有多大、一家子、拿什么量、怎么定下来的、相关问答和实验 | `src/pages/UnitPage.tsx` |
| `#/timeline` | 测量大事年表，按古时候 / 近代 / 现代分 | `src/pages/TimelinePage.tsx` |
| `#/sources` | 资料库，给大人继续查 | `src/pages/SourcesPage.tsx` |
| `#/topic/<主题>` | 一个主题的问题列表，按入门 / 进阶 / 挑战排；七个基本量的主题顶上有单位档案卡 | `src/pages/QuestionListPage.tsx` |
| `#/q/<问题id>` | 一问一答 + 讲解动画 + 嵌入的小实验 + 单位卡片（基本单位能点进档案）+ 给大人 | `src/pages/QuestionPage.tsx` |
| `#/lab/<实验id>` | 单独打开一个小实验 | `src/pages/LabPage.tsx` |

内容和引擎：

- `src/data/questions/<主题>.ts`：问题和问答，类型在 `types.ts`。12 个主题分三组（`topicGroups`）：
  - 测量从哪里来 `origin`：`why` `china` `world`
  - 七个基本量 `si`：`system`（七块积木和词头）`length` `mass` `time` `heat` `electric` `light` `amount`，后七个用 `unit` 挂着对应的基本单位
  - 今天的测量 `today`：`modern`
- `src/data/units.ts`：7 个基本单位的档案、度量衡对照、导出单位、词头、市制 / 英制换算；`timeline.ts` 是大事年表，`library.ts` 是资料库。`tests/units.test.mjs` 检查它们和问题、主题对得上。
- `src/data/films/<主题>.ts`：每个问题一部动画，格式见 `types.ts`，汇总在 `index.ts`；`paths.ts` 有画弧线、一拃一拃的路线的小工具。
- `src/lib/film.ts`：时间线、镜头、钟面指针，全是纯函数；`src/components/film/FilmStage.tsx` 把某一时刻画成 SVG（底图和所有元素，包括 `ruler` `balance` `clock` `thermo`），`FilmPlayer.tsx` 管播放、拖动、分段和配音同步。
- `src/lib/narration.ts`：配音版时间线，按每轮问答的配音长度把对应的戏等比例拉长。
- `src/data/labs.ts` + `src/components/labs/`：七个小实验（`hand-span` `balance` `sixty` `thermometer` `gps` `prefix` `power`），`LabView.tsx` 按 id 选组件。问答里用 `show: { kind: "lab", lab: "<id>" }` 嵌进去。
- `src/data/voice.ts` + `src/data/voice-manifest.json`：配音的时长和指纹；音频在 `public/voice/<问题id>/<轮次>-<nian|dad>.mp3`。
- `tools/voice/`：配音脚本。
- `src/components/RunLab3D.tsx`、`run-lab/`：首页小星球上的 3D 小念和爸爸，和身体奇遇记、汉字奇遇记共用，轻易不要改。
- `docs/`：早期版本的产品文档和资料清单，只作参考，不参与构建。

## 加一个新问题

1. **问答**：写进 `src/data/questions/<主题>.ts`，跑 `node tests/dialogue-rules.mjs <文件>` 直到通过。
2. **动画**：写进 `src/data/films/<主题>.ts`，跑 `node tests/film-rules.mjs <文件>` 直到通过。
3. **配音**：`npm run voice -- <问题id>`。要联网，需要 `python -m pip install edge-tts`，PATH 里要有 ffmpeg / ffprobe。
4. **测试**：`npm test`。每个问题都要有动画，每句话都要有配音而且读的是现在的文字，每个小实验都要挂在某个问题里。
5. **浏览器里看一遍**：打开 `#/q/<问题id>`，开声音听一遍，再看一眼手机宽度（390px）。

## 硬性规矩

- **孩子的内容**：
  - 不编数字。屏幕上（动画、小实验）出现的数字必须是爸爸台词里说过的，精确值和出处写在 `parentTip` 和 `sources`。
  - 传说要说是传说（秤上的星、十六两的来历）；简化的地方在 `parentTip` 里说明（比如定位用平面三个圆简化）。
  - 不用术语表里的词，见 `tests/dialogue-rules.mjs` 的 `jargon`。
- **小念是男孩**，用"他"；配音是 `zh-CN-YunxiaNeural`。爸爸是 `zh-CN-YunxiNeural`。
- **小实验**：能用鼠标、手指、键盘操作；按钮写 `aria-label`，结果写进 `aria-live` 的一句话里；动效在 `prefers-reduced-motion` 下关掉。
- **素材许可**：新素材要在 `THIRD_PARTY_NOTICES.md` 里写明来源。配音只按非商业使用考虑。
- **代码风格**：照周围代码写。中文注释只写代码本身表达不了的约束；改动要小而完整，不顺手重构无关代码。

## 已知的坑

- **`.ts` 扩展名**：Node 直接跑 `.ts`，所以 `src/data/` 和 `src/lib/` 里被测试导入的文件，相互导入时要写 `.ts` 扩展名。`tsconfig` 开了 `allowImportingTsExtensions`。
- **Windows 不显示国旗 emoji**：要表示国家用写字的 `pill`，别用 🇨🇳。
- **配音会串**：播放器同一时间只让一部动画出声。用浏览器测有声动画，测完把它暂停，或者离开问答页。
- **手机上字会放大**：舞台窄于 560px 时，`label` 和 `text` 最多放大到 1.6 倍，桌面上不挤的三个并排标签到手机上会叠在一起。并排的三个标签，把中间那个放到图标上方（`side: "top"`）；天平、尺子的 `caption` 下面留够地方再放 `text`。
- **竖箭头别写字**：`arrow` 的 `text` 画在箭头中点上方，竖着的箭头会被字压住，要说明就另放一个 `label` 或 `text`。
- **后台标签页**：浏览器标签页在后台时 requestAnimationFrame 会被限速，动画走得很慢，截图也可能是旧画面。要看某一帧，直接用 `FilmStage` 在给定 t 渲染，或者把标签页切到前台。
