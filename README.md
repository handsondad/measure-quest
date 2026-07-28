# MeasureQuest

MeasureQuest 是一个关于度量衡的可探索知识站：从真实历史故事进入，再连接单位、制度、日常技术与可复核的原始资料。

它的中心问题是：**人类如何让一个数字被彼此陌生的人共同相信？**

## 产品结构

网站不是按一串文章目录组织，而提供三种入口：

- **故事**：从《米制公约》、SI 重定义等可核对的转折事件进入。
- **知识地图**：按“文明与制度、单位与概念、生活与技术、前沿与参与”持续扩展。
- **实验室**：将抽象尺度变为可操作的近似体验，并明确标注模型假设。

资料库横向服务所有内容，保留机构来源与延伸阅读入口。完整的信息架构、内容单元和编辑原则见 [docs/product-architecture.md](docs/product-architecture.md)。

## 内容与来源标准

每个新增内容都应有：

1. 一个读者问题；
2. 可快速记忆的事实卡；
3. 背景、转折和意义三个叙事段落；
4. 至少一个权威可访问来源；
5. 关联的下一篇内容或互动。

定义、时间和机构事实优先使用 BIPM、NIST、国家计量机构、博物馆和大学资料。未经可靠出处支持的趣闻不能写成事实；估算模型必须说明它是示意而非历史复原。

## 项目结构

```text
src/data.js                  内容数据、探索路径、来源和故事卡
src/components/              可复用页面与互动组件
docs/product-architecture.md 产品信息架构与编辑规范
tests/site-structure.test.mjs 架构与内容模型测试
```

React Router 使用 Hash Router，以兼容 GitHub Pages 的静态部署。

## 本地开发

```text
npm install
npm run dev
npm test
npm run build
```

## 如何添加一个经过验证的故事

1. 先阅读并记录权威来源，核对日期、机构和术语。
2. 在 `src/data.js` 中增加数据：标题、摘要、所属探索路径、相关章节、来源名与 URL。
3. 若需要长文，在章节数据中使用 `question`、`facts` 与 `sections`。
4. 把新内容连接到至少一个相关故事、概念或实验。
5. 运行测试与构建，确认静态站点可部署。

## 第一批验证来源

- [NIST · SI Units](https://www.nist.gov/pml/owm/metric-si/si-units)
- [NIST · SI Redefinition](https://www.nist.gov/si-redefinition)
- [BIPM · CGPM Resolution 1 (2018)](https://www.bipm.org/en/committees/cg/cgpm/26-2018/resolution-1)
- [BIPM · SI Brochure](https://www.bipm.org/en/publications/si-brochure)
