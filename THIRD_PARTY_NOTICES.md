# 第三方声明

度量衡奇遇记的代码是本项目自己写的，播放器、动画引擎和首页 3D 场景与奇遇记系列（汉字奇遇记、身体奇遇记）共用。下面这些素材和做法来自第三方。

## 3D 角色

首页小念和爸爸的 3D 模型来源见 `public/models/CREDITS.md`（Quaternius，CC0）。

## 字体

页面正文和动画用 Google Fonts 上的 Comic Neue 和 Ma Shan Zheng（均为 SIL OFL 1.1），运行时从 Google Fonts 加载，不随网站发布。

## BodyVista（MIT）

`src/lib/motion.ts` 中的相位曲线和"相位驱动教学动画"的做法参考并改写自 BodyVista（经身体奇遇记）。

```
MIT License

Copyright (c) 2026 FreedomAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## HyperFrames（Apache-2.0）

讲解动画的做法参考了 HyperFrames（heygen-com/hyperframes）的动效指南：画面是时间 t 的纯函数、可以拖动和暂停；到达用长尾 ease-out、退场比进场短；"一张图逐步长出来"。只借鉴了思路，没有复制代码。

## 配音（Microsoft Edge 在线语音）

`public/voice/` 里的小念和爸爸的配音由 [edge-tts](https://github.com/rany2/edge-tts)（GPL-3.0，只在生成时使用，不随网站发布）调用微软 Edge"大声朗读"的在线神经语音生成：小念 `zh-CN-YunxiaNeural`，爸爸 `zh-CN-YunxiNeural`。这项服务没有为批量生成音频单独给出授权条款，所以这些音频只按家庭和非商业用途考虑；公开发布或商用前，应改用有明确商用授权的语音服务（如 Azure AI Speech）重新生成。
