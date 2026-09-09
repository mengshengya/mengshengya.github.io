# CEP 2026 材料与网站展示

项目页：`/research/cep-2026/`。首页 Featured research 区直接展示项目卡片，Publications 中的 CEP 2026 条目也链接至项目页及论文 PDF。

## 内容来源

- `materials/publications/cep-2026/cas-dc-template.pdf`：曾用于项目介绍、QLabs 场景说明和结果图核对的 14 页作者稿；已按用户 2026-09-09 的明确要求删除。相关内容仍可由新提供的正式论文及现有结果图核对。
- `materials/publications/cep-2026/representative-publication.pdf`：用户 2026-09-09 新提供的 11 页论文 PDF，由 `materials/inbox/RepresentativePulication_shengya_cep.pdf` 归档并使用小写英文文件名。元数据给出 Control Engineering Practice 173 (2026) 107008 与 DOI `10.1016/j.conengprac.2026.107008`；网站当前的 **Author manuscript PDF** 链接按用户要求改为提供此文件的逐字节副本。
- `materials/projects/cep-2026/main.pdf`：同一题目的 26 页报告，包含并排演讲备注。本轮用于核对内容并归档，未作为公开幻灯片直接发布。
- 卷号 173、文章号 107008 和年份 2026 最初来自用户简历；新提供论文的元数据再次确认这些信息并给出上述 DOI。网站未额外添加代码仓库地址。
- 车辆队列验证是 QLabs 高保真仿真。正文第 10 页 Remark 1 提及在实物 QCar2 与数字孪生上检查部分系统组件，未报告实物多车编队实验；网站保留这一范围区别。
- 起停场景中的领航车加速度偏离恒速设计假设，论文报告较大观测瞬态及加速度振荡沿车队衰减。网站未将这些仿真结果扩写为任意工况下的实车保证。

## 文件对应

| 原始材料 | 网站位置 / 用途 |
| --- | --- |
| `materials/publications/cep-2026/cas-dc-template.pdf` | 已按用户要求删除；不再保留或发布 |
| `materials/publications/cep-2026/representative-publication.pdf` | `public/files/papers/cep-2026/author-manuscript.pdf`，逐字节一致的网站下载副本；保持既有 URL，页面链接无需分散维护 |
| `materials/projects/cep-2026/fig/platoon_4cars.PNG` | `public/images/research/cep-2026/platoon.png`，保留的项目环境图副本，当前页面未引用 |
| `materials/inbox/Qcar_application.png` | `public/images/research/cep-2026/qcar-application.webp`，首页研究卡片配图 |
| `materials/projects/cep-2026/fig/technical-roadmap.png` | 由 `materials/inbox/CEP_route.png` 归档；`public/images/research/cep-2026/technical-roadmap.png` 为项目页封面副本 |
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
- 首页项目链接正常；该次发布后项目页与首页曾共用 `qcar-application.webp`，后续项目页封面替换见下方记录。原始 PNG 与未使用的 `platoon.png` 副本均保留。
- 本地截图位于 `tmp/previews/cep-2026/qcar-cover-local-*`，浏览器检查日志位于 `tmp/logs/qcar-cover-local.json`；线上结果见 [部署记录](deployment.md)。
- 同日已完成自动发布，正式主页在相同四种宽度下验证通过；新 WebP 返回 HTTP 200，尺寸与文件大小一致，完整显示并可进入项目页。线上截图位于 `tmp/previews/cep-2026/qcar-cover-live-*`，日志位于 `tmp/logs/qcar-cover-live.json`。

## 论文 PDF 替换验证（2026-09-09）

- 新 PDF 共 11 页、7,259,938 bytes，无加密、表单或 JavaScript；已渲染检查首页和末页，未见裁切、重叠或无法识别的字符。
- 归档原件、`public/` 下载副本及 `dist/` 构建副本的 SHA-256 均为 `31C7E31520249D48BAAC54560611354D146D3F83211E2DF3CDCA284809CA4EF7`。
- `src/data/cep2026.ts` 继续集中维护稳定 URL `/files/papers/cep-2026/author-manuscript.pdf`；首页和项目页两处链接均自动使用该 URL，无需修改页面模板。
- `npm run check`：0 errors、0 warnings、0 hints；正式站点配置下 `npm run build` 成功生成两个页面，构建产物中的 PDF 元数据和 11 页页数正确。
- 本次仅完成本地替换与验证，尚未提交、推送或部署。

## 项目页技术路线图替换（2026-09-09）

- 用户提供的 `CEP_route.png` 已从收件目录归档为 `materials/projects/cep-2026/fig/technical-roadmap.png`；网站使用逐字节一致的 `public/images/research/cep-2026/technical-roadmap.png` 副本。
- 图片为 929 × 427 px，项目页封面图和 HTML 尺寸声明同步更新，英文图注为 **Technical roadmap**；首页研究卡片继续使用 `qcar-application.webp`。
- 原 14 页 `cas-dc-template.pdf` 已按用户明确要求删除；新归档的 11 页 `representative-publication.pdf` 及其网站副本不受影响。
- `npm run check`：0 errors、0 warnings、0 hints；正式站点配置下 `npm run build` 成功生成两个页面。已查看 1440 × 1000 桌面与 500 × 900 窄屏项目页截图，图片、图注和后续内容布局正常。
- 本次变更尚未提交、推送或部署。
