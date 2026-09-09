# 参考网站与结构选择

## 参考来源

- 用户指定的仓库：[Liming-Zheng/Liming-Zheng.github.io](https://github.com/Liming-Zheng/Liming-Zheng.github.io)。
- 本次核实日期：2026-09-07。
- 核实版本：[481687c9ecb0279c5419e3b7f23be0edd628dd9b](https://github.com/Liming-Zheng/Liming-Zheng.github.io/tree/481687c9ecb0279c5419e3b7f23be0edd628dd9b)。

本次读取的仓库使用 Astro + TypeScript，依赖声明包含 `astro ^4.16.18`，源码位于 `src/`，静态资源位于 `public/`，构建结果位于 `dist/`。这是参考仓库的现状记录，不是本项目的依赖版本选择。依据：[package.json](https://github.com/Liming-Zheng/Liming-Zheng.github.io/blob/481687c9ecb0279c5419e3b7f23be0edd628dd9b/package.json)、[README](https://github.com/Liming-Zheng/Liming-Zheng.github.io/blob/481687c9ecb0279c5419e3b7f23be0edd628dd9b/README.md)。

## 后续设计参考

参考网站的主要栏目为 Home、Research、Experience、Publications 和 CV。首页采用个人资料侧栏，搭配研究介绍、视频卡片、经历展示和论文列表。后续根据用户实际资料决定栏目内容。

视觉方向为浅灰白背景、白色卡片、深绿文字与青绿色强调，使用无衬线字体、顶部固定导航和响应式布局。来源：[页面源码](https://github.com/Liming-Zheng/Liming-Zheng.github.io/tree/481687c9ecb0279c5419e3b7f23be0edd628dd9b/src/pages)、[全局样式](https://github.com/Liming-Zheng/Liming-Zheng.github.io/blob/481687c9ecb0279c5419e3b7f23be0edd628dd9b/src/styles/global.css)。

## 本项目采用的结构

- 保留根级 `src/`、`public/` 和 `dist/`，方便后续初始化 Astro。
- 在 `src/data/` 维护简短、重复展示的数据；在 `src/content/` 维护需要独立页面的项目和论文长文，避免同一份信息重复维护。
- 静态素材按图片、音视频与附件分类，并预留封面和字幕位置。
- 新增 `materials/` 与 `tmp/`，分别承接个人原始资料和过程中产生的文件。
- 使用 `docs/`、`scripts/` 与 `.github/workflows/` 支持长期维护。

2026-09-09 再次参考正式首页的 **Selected research** 版式：该分区使用接近 48 px 的大标题，以及顶部媒体、下方元信息/标题/简介/操作的纵向圆角卡片。本项目据此将首页 Featured research 改为开放式分区和响应式双卡片网格，同时保留自身蓝色主题、项目创新点标签及既有内容。

本阶段只参考结构与设计，没有导入参考仓库的代码、个人资料或媒体文件。若后续引入上游代码或其他第三方素材，同时记录来源及适用许可。
