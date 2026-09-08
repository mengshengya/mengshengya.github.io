# 个人网站

用于共同建设和维护个人网站，风格与栏目参考 [Liming-Zheng 的网站项目](https://github.com/Liming-Zheng/Liming-Zheng.github.io)。

已根据用户提供的英文简历和照片实现 Astro + TypeScript 首页，展示个人简介、研究方向、6 篇代表论文、4 篇准备中或已投稿稿件、教育与学术访问、学术服务、奖励和个人照片。页面入口为 `src/pages/index.astro`，公开内容集中维护在 `src/data/profile.ts`。

2026-09-08 根据用户补充截图将学术交流与访问扩展为四项，并将当前单位更新为 `CRAN, University of Lorraine`。本地检查、构建及 1440、768、390、320 像素视口验证通过；内容来源见 [首页内容维护记录](docs/content-source.md)，本次线上状态见 [部署记录](docs/deployment.md)。

网站已于 2026-09-08 首次上线：[mengshengya.github.io](https://mengshengya.github.io/)。源码位于公开仓库 [mengshengya/mengshengya.github.io](https://github.com/mengshengya/mengshengya.github.io)，推送到 `main` 后通过 GitHub Actions 检查、构建并发布至 GitHub Pages，已启用 HTTPS。

2026-09-08 本地检查通过（0 errors、0 warnings、0 hints），生产构建与首次自动部署成功。正式网站的首页、CEP 2026 项目页、桌面与手机布局、图片、视频启动播放及 PDF 响应已验证；详情见 [运行与部署记录](docs/deployment.md)。

CEP 2026 研究项目页位于 `/research/cep-2026/`，包含研究介绍、两段 QLabs 仿真视频、结果图、作者稿 PDF 与 BibTeX；首页研究卡片和论文条目均可进入。材料对应关系见 [CEP 2026 材料说明](docs/cep-2026-materials.md)。

## 本地运行

需要 Node.js `22.12.0` 或更高版本，使用 npm 和已有的 `package-lock.json` 安装一致的依赖。

Windows PowerShell 在当前终端临时关闭 Astro 遥测，避免缓存写入 roaming 目录：

```powershell
$env:ASTRO_TELEMETRY_DISABLED = '1'
npm.cmd ci --cache tmp/npm-cache
npm.cmd run dev
```

开发服务通常位于 `http://localhost:4321`，实际地址以终端输出为准。检查、构建及预览按需在同一终端运行；其他系统可使用等价的 `npm` 命令。

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

新增或调整依赖时使用 `npm install --cache tmp/npm-cache`，并同步保留锁文件。构建结果写入 `dist/`；预览命令用于检查已生成的网站。部署路径和环境配置见 [运行与部署约定](docs/deployment.md)。

## 发布与更新

提交并推送到 `main` 后，[部署工作流](.github/workflows/deploy.yml) 自动安装依赖、检查、构建并将 `dist/` 发布到 GitHub Pages；也可在仓库 Actions 页面选择 `main` 手动运行。工作流从 GitHub Pages 配置读取站点地址和路径，无需另外配置这两个仓库变量。首次发布完成后须验证首页、CEP 2026 项目页、图片、视频与 PDF，再更新上线状态；操作与回退方法见 [部署说明](docs/deployment.md)。

## 项目文件树

```text
PersonalWebsite/
├── src/                         # 网站源码和已整理的公开内容
│   ├── components/              # 导航、个人资料卡、论文卡片等组件
│   ├── layouts/                 # 页面公共布局
│   ├── pages/                   # index.astro 首页与 research/cep-2026.astro 项目页
│   ├── styles/                  # 全局样式与主题
│   ├── data/                    # profile.ts：结构化公开资料与列表数据
│   └── content/
│       ├── projects/            # 研究项目详细介绍
│       └── publications/        # 需要独立页面的论文介绍
├── public/                      # 可直接发布的静态文件
│   ├── images/
│   │   ├── profile/             # 网页头像和个人照片
│   │   ├── research/            # 研究配图、论文缩略图
│   │   └── experience/          # 经历与活动配图
│   ├── media/
│   │   ├── audio/               # 网页使用的音频成品
│   │   ├── video/               # 网页使用的视频成品
│   │   ├── posters/             # 视频封面
│   │   └── captions/            # 字幕和文字稿
│   └── files/
│       ├── cv/                  # 公开简历 PDF
│       ├── papers/              # 公开论文附件
│       └── slides/              # 公开演示文稿
├── materials/                   # 原始个人资料与素材，默认不进入 Git
│   ├── inbox/                   # 新提供、尚未分类的文件
│   ├── profile/                 # 个人简介、教育和工作经历原稿
│   ├── cv/                      # 简历源文件与历史版本
│   ├── publications/            # 论文信息、BibTeX 和原始附件
│   ├── projects/                # 项目介绍和背景材料
│   └── media/
│       ├── images/             # 原始照片和图片
│       ├── audio/              # 原始录音
│       └── video/              # 原始视频
├── docs/                        # 参考记录、协作与部署说明
├── scripts/                     # 预留给构建和素材处理工具
├── tmp/                         # 临时文件，默认不进入 Git
│   ├── downloads/              # 临时下载的参考资料
│   ├── processing/             # 裁剪、压缩、转码等中间结果
│   ├── previews/               # 页面截图与预览导出
│   └── logs/                   # 调试和构建日志
├── dist/                        # 构建输出，不进入 Git，不手工编辑
├── node_modules/                # 本地安装的依赖，不进入 Git
├── .astro/                      # Astro 生成的类型与缓存，不进入 Git
├── .github/workflows/           # deploy.yml：自动检查、构建和 GitHub Pages 发布
├── package.json                 # npm 依赖与运行命令
├── package-lock.json            # 固定依赖版本
├── astro.config.mjs             # 静态构建、站点地址与路径配置
├── tsconfig.json                # TypeScript 检查配置
├── AGENTS.md                    # 本项目的 AI 协作约定
├── .editorconfig                # 文本格式约定
├── .gitattributes               # Git 换行和二进制文件规则
├── .gitignore                   # 原始资料、临时文件和产物忽略规则
└── README.md
```

空目录中的 `.gitkeep` 用于在 Git 仓库中保留目录。`dist/` 和 `.astro/` 由工具生成，`node_modules/` 由 npm 安装生成。临时 npm 缓存和浏览器验证工具分别放在 `tmp/npm-cache/` 与 `tmp/browser-tools/`。

## 你可以怎样提供资料

可以先把文件放入 `materials/inbox/`，也可以直接放入对应分类。文件保留原始名称即可；如果方便，请附上它的用途、希望展示的文字，以及是否用于公开网站。资料可以分批提供，不需要一次备齐。

我会依据你的说明整理内容，把网页所需的文字放入 `src/`，把适合发布的图片、音视频与附件放入 `public/`。原始文件保留在 `materials/`，处理过程中的文件放入 `tmp/`。

本次简历原件已归入 `materials/cv/`，照片原件归入 `materials/media/images/`，网站展示副本位于 `public/images/profile/shengya-meng.jpg`。

## 维护入口

- [资料与素材放置说明](materials/README.md)
- [共同维护与更新流程](docs/workflow.md)
- [首页内容来源与维护](docs/content-source.md)
- [CEP 2026 材料与网站展示](docs/cep-2026-materials.md)
- [参考网站与结构选择](docs/reference.md)
- [运行与部署约定](docs/deployment.md)
- [临时文件使用说明](tmp/README.md)

网站源码、公开素材和说明文档适合版本管理；`materials/` 与 `tmp/` 仅保留说明和空目录占位文件。Git 忽略不等于备份，原始资料需要另行保留备份。
