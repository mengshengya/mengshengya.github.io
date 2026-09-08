# 运行与部署约定

## 当前状态

项目使用 Astro + TypeScript 静态构建，首页入口为 `src/pages/index.astro`，公开资料为 `src/data/profile.ts`。Git 已初始化为 `main` 分支，公开仓库 [mengshengya/mengshengya.github.io](https://github.com/mengshengya/mengshengya.github.io) 已创建，[部署工作流](../.github/workflows/deploy.yml) 已配置。

GitHub Pages 已启用，发布来源为 GitHub Actions（`build_type=workflow`），强制 HTTPS 已开启。首次推送与首次发布仍在进行。目标生产地址为 [https://mengshengya.github.io/](https://mengshengya.github.io/)，当前待在线验证，尚不记录为已上线。未配置自定义域名或单独的线上预览环境。

2026-09-08 已完成本地验证：`npm run check` 得到 0 errors、0 warnings、0 hints；使用 `SITE_URL=https://mengshengya.github.io` 和 `BASE_PATH=/` 构建成功，生成首页与 `/research/cep-2026/` 两个页面。本地浏览器在 1440 px 桌面与 390 px 手机宽度下检查两个页面，均返回 200，未发现横向溢出、坏图、锚点错误或 JavaScript 错误；13 条站内页面与资源的 HEAD 请求均返回 200。两段视频元数据可读取，时长分别约 111.53 秒与 80.70 秒。以上均为本地验证，线上结果待首次发布后补充。

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

首次发布待完成。待记录发布提交、成功的 Actions 运行、实际生产地址，以及首页、项目页、图片、视频、PDF、手机和桌面布局的在线检查结果；不能以本地检查或构建成功替代线上验证。

## 更新与回退

后续内容修改在本地检查后提交并推送 `main`，由同一工作流重新发布。需要撤销已发布修改时，为要撤销的提交创建反向提交并推送：

```sh
git revert <要撤销的提交SHA>
git push origin main
```

回退保留已有提交历史，不使用强制推送改写历史。若只需重新发布当前 `main`，可手动运行部署工作流。每次回退或重新发布后，确认 Actions 成功并重新检查受影响页面。
