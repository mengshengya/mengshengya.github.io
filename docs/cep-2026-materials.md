# CEP 2026 材料与网站展示

项目页：`/research/cep-2026/`。首页研究方向下方设有项目卡片，Selected publications 中的 CEP 2026 条目也链接至项目页及作者稿。

## 内容来源

- `materials/publications/cep-2026/cas-dc-template.pdf`：14 页，含 1 页 Highlights 和正文 13 页。正文标题、作者、摘要及第 2–3 节用于项目介绍；第 4 节用于 QLabs 场景说明；正文第 12 页 Figure 8、Figure 9 用于起停结果图。文件保留作者稿格式，网站下载按钮明确标为 **Author manuscript PDF**。
- `materials/projects/cep-2026/main.pdf`：同一题目的 26 页报告，包含并排演讲备注。本轮用于核对内容并归档，未作为公开幻灯片直接发布。
- 卷号 173、文章号 107008、年份 2026 来自用户此前提供的简历；本次作者稿未提供 DOI，不猜测或添加 DOI、代码仓库和出版社地址。
- 车辆队列验证是 QLabs 高保真仿真。正文第 10 页 Remark 1 提及在实物 QCar2 与数字孪生上检查部分系统组件，未报告实物多车编队实验；网站保留这一范围区别。
- 起停场景中的领航车加速度偏离恒速设计假设，论文报告较大观测瞬态及加速度振荡沿车队衰减。网站未将这些仿真结果扩写为任意工况下的实车保证。

## 文件对应

| 原始材料 | 网站位置 / 用途 |
| --- | --- |
| `materials/publications/cep-2026/cas-dc-template.pdf` | `public/files/papers/cep-2026/author-manuscript.pdf`，逐字节保留的作者稿副本 |
| `materials/projects/cep-2026/fig/platoon_4cars.PNG` | `public/images/research/cep-2026/platoon.png`，项目页环境图 |
| `materials/inbox/Qcar_application.png` | `public/images/research/cep-2026/qcar-application.webp`，用户 2026-09-08 指定的首页研究卡片配图 |
| `materials/media/video/cep-2026/QLab_4QCar_ObsCtr.mp4` | `public/media/video/cep-2026/smooth-road.mp4`，平路仿真演示 |
| `materials/media/video/cep-2026/QLab_4QCar_ObsCtr_wave_road.mp4` | `public/media/video/cep-2026/wave-road.mp4`，波浪路面仿真演示 |
| 两段原视频各自第 30 秒画面 | `public/media/posters/cep-2026/`，真实视频封面 |
| `fig/EstimationError_SpeedChange_20260220_175756-eps-converted-to.pdf` | `public/images/research/cep-2026/start-stop-estimation.png`，对应作者稿 Figure 8 |
| `fig/TrueVehicleState_SpeedChange_20260220_170151-eps-converted-to.pdf` | `public/images/research/cep-2026/start-stop-states.png`，对应作者稿 Figure 9 |

表中简写 `fig/` 位于 `materials/projects/cep-2026/fig/`。图表由所提供 PDF 直接渲染成长边 1600 px 的 PNG，保留坐标、图例和曲线，没有重绘数据。页面提供原尺寸图片入口。

`platoon_4cars.PNG` 与 `platoon_4cars_small.PNG` 的 SHA-256 相同，网站仅使用一个副本，两个原文件均保留。其余 EPS、图表 PDF 和 `physical_qcar2.png` 全部归档；未确认与正文图号的对应关系前，不自动加入项目页。

2026-09-08 首页卡片改用用户提供的 `Qcar_application.png`，原件保留在收件目录。原图为 4400 × 2306 px、10,154,245 bytes；网页副本通过 Sharp 等比例缩放为 1600 × 839 px，并编码为质量 92 的 WebP，大小 250,704 bytes。保留完整画面与全部标注；首页图片采用自然比例，移除可能遮挡图中文字的 QLabs 角标。该配图单独由 `cep2026.featuredImage` 维护，项目页环境图继续使用 `cep2026.cover`。新图中的实物插图不改变前文对实验验证范围的描述。

## 视频处理

两段原片均为 1920×1080、30 fps、H.264 视频，分别约 111.53 s 和 80.70 s。完整音轨经 FFmpeg `volumedetect` 检查均为静音（mean / max -91 dB）。网页版本保留完整画面、时长和帧率，去掉静音音轨，使用 H.264 / yuv420p、CRF 24、medium preset 和 faststart。

| 视频 | 原文件大小 | 网页文件大小 |
| --- | ---: | ---: |
| 平路 | 36,926,657 bytes | 16,015,637 bytes |
| 波浪路面 | 26,538,562 bytes | 10,281,512 bytes |

视频先展示封面与播放按钮，点击后加载，使用原生播放、拖动进度和全屏控件，默认 `preload="none"`，不自动播放；页面附无声视频的文字场景说明及直接下载链接。两段视频同时操作时，仅播放最近启动的一段。禁用 JavaScript 时保留原生控件和下载入口。

FFmpeg 安装在忽略的 `tmp/media-tools/` 中，未新增网站运行依赖。PDF 提取、渲染、视频检查、压缩日志和源文件哈希清单均位于 `tmp/processing/cep2026/`。

## 后续更新

- 项目元数据、资源路径和 BibTeX 在 `src/data/cep2026.ts`；CEP 首页书目信息从该文件读取。
- 长篇介绍在 `src/content/projects/cep-2026.md`；项目页在 `src/pages/research/cep-2026.astro`，独立样式在 `src/styles/project.css`。
- 继续提供新视频、图表或最终论文版本时，保留原件，再更新相同项目标识下的展示资源。
- 首次项目页实现的验证记录如下；后续线上状态见 [部署记录](deployment.md)。

## 首次项目页实现验证记录

- `npm run check`：0 errors、0 warnings、0 hints；`npm run build` 成功生成首页及项目页。
- Chrome 中检查 1440、768、390、320 px 视口：首页入口、项目页、返回链接与图片显示正常，无横向溢出或浏览器错误。
- 实际点击播放两段视频，确认解码正常、1080p 分辨率与完整时长保留；启动第二段会暂停第一段，服务器支持用于进度跳转的 HTTP Range 请求。
- 未点击时没有 MP4 请求；作者稿及站内资源链接可访问，BibTeX 可复制。
- 禁用 JavaScript 时保留正文、原生视频控件、下载链接及可手动复制的引用文本。
- 检查发布目录仅包含指定的作者稿 PDF，未混入原始简历、带备注报告稿或项目说明文档。
- 截图与验证结果位于 `tmp/previews/cep-2026/`。

## 首页配图替换验证（2026-09-08）

- `npm run check`：0 errors、0 warnings、0 hints；正式站点配置下 `npm run build` 成功生成两个页面。
- 本地 Chrome 在 1440、768、390、320 px 视口下确认新图成功加载、保持自然比例、没有横向溢出；已查看桌面与手机卡片截图。
- 首页项目链接正常，项目页环境图仍使用 `platoon.png`；无浏览器错误。原始 PNG 保留，网站只发布生成的 WebP 副本。
- 本地截图位于 `tmp/previews/cep-2026/qcar-cover-local-*`，浏览器检查日志位于 `tmp/logs/qcar-cover-local.json`；线上结果见 [部署记录](deployment.md)。
- 同日已完成自动发布，正式主页在相同四种宽度下验证通过；新 WebP 返回 HTTP 200，尺寸与文件大小一致，完整显示并可进入项目页。线上截图位于 `tmp/previews/cep-2026/qcar-cover-live-*`，日志位于 `tmp/logs/qcar-cover-live.json`。
