# 运行与部署约定

## 当前状态

项目使用 Astro + TypeScript 静态构建，首页入口为 `src/pages/index.astro`，公开资料为 `src/data/profile.ts`。Git 已初始化为 `main` 分支，公开仓库 [mengshengya/mengshengya.github.io](https://github.com/mengshengya/mengshengya.github.io) 已创建，[部署工作流](../.github/workflows/deploy.yml) 已配置。

网站已于 2026-09-08 首次发布并通过在线验证，生产地址为 [https://mengshengya.github.io/](https://mengshengya.github.io/)。GitHub Pages 发布来源为 GitHub Actions（`build_type=workflow`），强制 HTTPS 已开启。未配置自定义域名或单独的线上预览环境。

同日已发布当前单位与四项学术交流更新，首页在桌面、平板和两种手机宽度下完成线上验证，详见下方更新记录。

同日随后已将首页 CEP 2026 卡片配图替换为用户提供的 QCar 应用图，并完成相同四种宽度的线上验证。

2026-09-08 已完成本地验证：`npm run check` 得到 0 errors、0 warnings、0 hints；使用 `SITE_URL=https://mengshengya.github.io` 和 `BASE_PATH=/` 构建成功，生成首页与 `/research/cep-2026/` 两个页面。本地浏览器在 1440 px 桌面与 390 px 手机宽度下检查两个页面，均返回 200，未发现横向溢出、坏图、锚点错误或 JavaScript 错误；13 条站内页面与资源的 HEAD 请求均返回 200。两段视频元数据可读取，时长分别约 111.53 秒与 80.70 秒。正式网站验证结果见下节。

## 本地运行与构建

运行环境要求 Node.js `>=22.12.0`。当前使用 Astro `7.3.1`、TypeScript `6.0.3` 和 `@astrojs/check 0.9.10`；具体版本以 `package.json` 与 `package-lock.json` 为准。

Windows PowerShell 在当前终端临时关闭 Astro 遥测，避免缓存写入 roaming 目录；此设置不修改系统配置：

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
npm.cmd ci --cache tmp/npm-cache
npm.cmd run dev
```

开发服务和构建预览按需单独启动，通常使用 `http://localhost:4321`，实际地址以终端输出为准。在同一终端运行检查、构建与预览：

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

`check` 检查类型与 Astro 文件，`build` 生成静态网站，`preview` 预览已有构建。其他系统可使用等价的 `npm` 命令。调整依赖时使用 `npm install --cache tmp/npm-cache`，同步更新锁文件。

`src/` 提供网站源码，`public/` 存放可直接访问的静态资源。依赖安装在 `node_modules/`，Astro 自动生成文件位于 `.astro/`，构建产物统一写入 `dist/`；这些目录不提交。npm 缓存放在 `tmp/npm-cache/`。

## 站点地址与路径

`astro.config.mjs` 使用 `output: 'static'`。未设置环境变量时，不预设公开域名，路径默认为 `/`，适合本地运行。

- `SITE_URL`：站点 origin，即协议与域名，用于 canonical 等绝对地址；当前为 `https://mengshengya.github.io`。
- `BASE_PATH`：站点路径前缀。域名根目录使用 `/`；仓库子路径使用 `/<仓库名>/`。

当前仓库采用个人站点根路径。本地复现生产构建时，在运行构建命令的同一终端设置：

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
$env:SITE_URL = 'https://mengshengya.github.io'
$env:BASE_PATH = '/'
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

页面资源路径依据 `import.meta.env.BASE_URL` 生成；后续新增图片、附件或页面链接也应考虑该前缀。工作流通过 `actions/configure-pages` 获取 `origin` 和 `base_path`，分别传给 `SITE_URL` 和 `BASE_PATH`；空 `base_path` 使用 `/`。无需手工添加同名仓库变量。此配置也支持未来的普通仓库子路径，采用自定义域名时先更新 GitHub Pages 设置。

## GitHub Pages 发布流程

1. 仓库 **Settings → Pages → Build and deployment → Source** 已设为 **GitHub Actions**，并已启用强制 HTTPS。工作流读取已有 Pages 设置，不自行启用 Pages。
2. 本地完成检查与生产构建，检查 `git status`，暂存需要发布的源码、公开素材和说明修改后提交。推送到 `main`：

   ```sh
   git push origin main
   ```

3. [仓库 Actions](https://github.com/mengshengya/mengshengya.github.io/actions) 自动运行 `Deploy website to GitHub Pages`。构建 job 使用 Node.js 22，依次运行 `npm ci`、`npm run check`、`npm run build`；检查或构建失败会阻止发布。
4. 构建 job 仅上传 `dist/`，部署 job 在 `github-pages` 环境发布该产物。所有发布共用 `pages` 并发组，不取消正在进行的发布。也可在 Actions 页面选择该工作流，使用 **Run workflow** 并选择 `main` 手动触发；其他分支会跳过构建。
5. 工作流成功后打开环境中给出的站点地址，验证首页、CEP 2026 项目页、图片、两段视频播放和 PDF 下载，并检查手机与桌面布局。将实际检查结果更新到下节，再记录已上线。

源码、协作文档、原始资料和临时文件不作为整仓上传的网站内容；不要在页面代码中导入 `materials/` 或 `tmp/`。仓库中 `materials/` 和 `tmp/` 仅保留说明与目录占位文件，`dist/` 始终由源码重新生成。

音视频原件保留在 `materials/`，网页只使用压缩后的展示版本。若以后需要单独托管大型视频，可把内容中的资源路径替换为外部地址，继续保留同一套项目介绍、封面和字幕结构。

配置依据：[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)与 [configure-pages 输出定义](https://github.com/actions/configure-pages/blob/v6/action.yml)。

## 生产验证记录

2026-09-08 首次发布记录：

- 网站源码提交：[`cfb44acb2db5660746e3420d47faf9c255ae4465`](https://github.com/mengshengya/mengshengya.github.io/commit/cfb44acb2db5660746e3420d47faf9c255ae4465)。
- [GitHub Actions 运行 34235287601](https://github.com/mengshengya/mengshengya.github.io/actions/runs/34235287601) 最终为 `success`，依赖安装、类型检查、静态构建和 Pages 部署均成功。
- [首页](https://mengshengya.github.io/)和 [CEP 2026 项目页](https://mengshengya.github.io/research/cep-2026/)在桌面 1440 × 1000 与手机 390 × 844 视口下均返回 HTTP 200，canonical 使用正式 HTTPS 地址。截图显示布局与本地一致，未发现横向溢出、坏图、无效页内锚点或 JavaScript 错误。
- 13 条站内页面、样式、图片、PDF 和视频资源的 HEAD 请求均返回 HTTP 200。
- 桌面浏览器分别点击两段视频的播放按钮，确认播放时间向前推进且无媒体错误；两种视口均成功读取时长约 111.53 秒、80.70 秒的元数据。本次未逐帧检查完整视频，也未在实体手机上验证。
- 论文 PDF 的字节范围下载成功，响应文件头为 `%PDF-`；本次未重新逐页核对论文内容。

浏览器截图及机器检查结果保留在本地 `tmp/previews/live-*.png` 与 `tmp/logs/live-verification.json`，不提交到公开仓库。首次上线后的记录同步提交仅修改说明文件，不改变已验证的网站产物。

### 2026-09-08 单位与学术交流更新

- 网站源码提交：[`7118bacc8d11d3535f7af7755289ac160f4db053`](https://github.com/mengshengya/mengshengya.github.io/commit/7118bacc8d11d3535f7af7755289ac160f4db053)。
- [GitHub Actions 运行 34244700247](https://github.com/mengshengya/mengshengya.github.io/actions/runs/34244700247) 最终为 `success`，完成自动构建与 Pages 发布。
- 当前单位更新为 `CRAN, University of Lorraine`；Academic exchanges and visits 按日期倒序展示 ArtiSmo、FAAR PRONERGY、SAGIP 与 Groningen 共四项。内容来源及完整转录见 [首页内容来源](content-source.md)。
- 本地 `npm run check` 得到 0 errors、0 warnings、0 hints；使用正式站点配置构建成功，生成两个页面。
- 正式首页在 1440 × 1000、768 × 1024、390 × 844、320 × 740 视口下均返回 HTTP 200。已核对四项经历的日期、题目与相关人员信息，以及资料卡、副标题、简介和页面摘要中的单位名称。
- 四种视口均无横向溢出、无效页内锚点或浏览器错误；照片加载、页内导航、稿件列表键盘展开与收起，以及禁用 JavaScript 后的基本功能均正常。已查看桌面与小屏经历区域截图。
- 本次浏览器验证范围为更新后的首页；CEP 项目页的视频播放与 PDF 验证仍对应首次发布记录。

本次线上截图与检查结果保存在 `tmp/previews/homepage/visits-update-live-*`。发布后的记录同步提交仅修改说明文件，不改变已验证的网站产物。

### 2026-09-08 首页 QCar 应用配图更新

- 网站源码提交：[`24f83622b0bca665612df1ffb6f0b9d720adcc07`](https://github.com/mengshengya/mengshengya.github.io/commit/24f83622b0bca665612df1ffb6f0b9d720adcc07)。
- [GitHub Actions 运行 34246425957](https://github.com/mengshengya/mengshengya.github.io/actions/runs/34246425957) 最终为 `success`。
- 首页研究卡片改用用户提供的 `Qcar_application.png` 的网页副本，保留完整比例与图内标注；图片转换和材料对应见 [CEP 2026 材料说明](cep-2026-materials.md)。
- 本地 `npm run check` 得到 0 errors、0 warnings、0 hints，正式站点配置下 `npm run build` 成功。
- 正式首页在 1440 × 1000、768 × 1024、390 × 844、320 × 740 视口下均返回 HTTP 200；新 WebP 为 1600 × 839 px、250,704 bytes，资源类型正确、加载成功，展示比例与原图一致，无横向溢出或浏览器错误。已查看桌面和手机卡片截图。
- 首页项目链接正常，项目页环境图仍为 `platoon.png`。本次未重测视频播放及 PDF 下载。
- 线上截图位于 `tmp/previews/cep-2026/qcar-cover-live-*`，验证日志位于 `tmp/logs/qcar-cover-live.json`。发布后的记录同步提交仅修改说明文件。

## 2026-09-09 蓝色主题与完整论文列表更新

- 首页和 CEP 项目页移除页眉字母图标；首页主标题增加中文名“孟圣亚”。
- 主题由绿色调整为色调与原绿色相配的蓝色，研究方向改为三张卡片，并适当放大、加粗主标题和分区标题。
- Publications 完整展示简历中的 14 篇期刊论文（含 4 篇带状态稿件）和 7 篇会议论文，分组数量由数据自动计算。
- CEP 项目页改为与首页 “String-stable vehicle platoons” 相同的配图。
- `npm run check` 通过（0 errors、0 warnings、0 hints），`npm run build` 成功生成 2 个页面；已生成桌面首页、手机样式首页和桌面项目页的本地截图用于检查。
- 用户完成本地确认后发布；网站源码提交为 [`5bb85212b04812a85401b146e55af91a9379a6ce`](https://github.com/mengshengya/mengshengya.github.io/commit/5bb85212b04812a85401b146e55af91a9379a6ce)。
- [GitHub Actions 运行 34339005909](https://github.com/mengshengya/mengshengya.github.io/actions/runs/34339005909) 最终为 `success`，完成自动构建与 Pages 部署。
- 正式首页与 CEP 项目页均返回 HTTP 200；线上 HTML 已确认中文名、`Journal articles (14)`、`Conference papers (7)`、页眉图标移除及项目页共用图片全部生效。
- 共用 WebP、作者稿 PDF 和两段 MP4 视频均返回 HTTP 200，Content-Type 分别为 `image/webp`、`application/pdf` 和 `video/mp4`。
- 已查看正式站点 1440 × 1000 桌面首页、500 × 900 窄屏首页及 1440 × 1000 项目页截图，布局与本地确认版本一致；截图保存在 `tmp/previews/*-blue-live-*`，不提交。

## 2026-09-09 CEP 论文 PDF 与技术路线图本地更新

- 用户新提供的 11 页 CEP 2026 论文已归档至 `materials/publications/cep-2026/representative-publication.pdf`，网站下载副本更新至原有稳定 URL `/files/papers/cep-2026/author-manuscript.pdf`。
- 原 14 页作者稿 `materials/publications/cep-2026/cas-dc-template.pdf` 已按用户后续明确要求删除。
- 用户提供的 `CEP_route.png` 已归档并作为项目页新封面，英文图注为 **Technical roadmap**；首页项目卡片图片保持不变。
- 首页 Research 区改为 **Featured research** 项目卡片网格，移除原来的三张研究兴趣卡片；参考 Liming Zheng 首页 Selected research，采用开放式分区及“顶部媒体、下方完整信息”的纵向圆角卡片。`CEP · 2026` 适当放大，并在卡片底部突出四项主要创新关键词。
- 新增 IFAC WC 2026 研究卡片，标题为 **Resilient Trust-Aware Distributed Observer Design for Connected Vehicle Platoons**；图片区域暂时留白，尚未提供的简介、入口和创新点统一以 `？？？？` 占位。
- 正式站点配置下 `npm run check` 与 `npm run build` 均成功；原件、公开副本和构建副本哈希一致。
- Featured research 与其他首页同级分区标题统一调整为比姓名低一档的响应式字号。已查看 1440 × 1500 桌面和 500 × 1900 窄屏预览：双卡片网格、放大的期刊/会议与年份、CEP 四个创新点标签及 IFAC WC 留白图片区均显示正常，窄屏自动切换为单列且无横向溢出。
- 本节修改已随下方 IFAC WC 2026 项目页更新一并发布；正式网站现已提供新 CEP PDF、技术路线图和 Featured research 双卡片版式。

## 2026-09-09 IFAC WC 2026 项目页本地更新

- 根据用户提供的手稿完善首页 IFAC WC 2026 研究卡片，并新增 `/research/ifac-wc-2026/` 项目页；页面覆盖信任评估、自适应融合权重、本地观测器锚点、有限窗口回滚、验证结果与适用边界。
- 首页卡片媒体改为回滚演示视频；项目页使用同一视频，并展示用户提供的 trust-aware cooperative state estimation 实验系统图。原始 HEVC 视频保留在内部归档，公开副本转为无音轨 H.264 以兼容浏览器，并从约 104 MB 缩减至约 18.7 MB。
- 三个已使用文件均已从 `materials/inbox/` 移至 IFAC WC 2026 对应归档目录并规范命名。视频和图片另有 `public/` 副本；手稿 PDF 只保留在被 Git 忽略的 `materials/publications/`，没有公开副本或网站链接。
- `npm run check` 通过（0 errors、0 warnings、0 hints），`npm run build` 成功生成 3 个页面。Chrome 已确认首页 H.264 视频为 1920 × 1440、约 37.38 秒，能够自动播放且无媒体错误；桌面首页、桌面项目页和 500 px 窄屏项目页预览均无横向溢出。
- 网站源码提交为 [`17d4ee728c126a7ec43953b10c1604498a029f41`](https://github.com/mengshengya/mengshengya.github.io/commit/17d4ee728c126a7ec43953b10c1604498a029f41)。
- [GitHub Actions 运行 34357826129](https://github.com/mengshengya/mengshengya.github.io/actions/runs/34357826129) 最终为 `success`，完成自动检查、构建与 Pages 部署。
- 正式首页、CEP 2026 项目页和 IFAC WC 2026 项目页均返回 HTTP 200；IFAC 页面未包含 PDF 链接。IFAC 视频、系统图、CEP PDF 与技术路线图均返回 HTTP 200，Content-Type 正确。
- 正式首页中的 IFAC 视频已在 Chrome 中验证：可读取 1920 × 1440、约 37.38 秒的元数据，播放时间推进至 6.4 秒且无媒体错误。桌面及 500 px 窄屏 IFAC 项目页截图与本地确认版本一致。

## 更新与回退

后续内容修改在本地检查后提交并推送 `main`，由同一工作流重新发布。需要撤销已发布修改时，为要撤销的提交创建反向提交并推送：

```sh
git revert <要撤销的提交SHA>
git push origin main
```

回退保留已有提交历史，不使用强制推送改写历史。若只需重新发布当前 `main`，可手动运行部署工作流。每次回退或重新发布后，确认 Actions 成功并重新检查受影响页面。
