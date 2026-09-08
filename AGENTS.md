# 项目协作约定

## 当前范围

- 项目用于建设用户的个人网站，参考来源与已核实的技术栈见 `docs/reference.md`。
- 当前已实现 Astro + TypeScript 首页及本地开发、检查、构建和预览命令；页面入口为 `src/pages/index.astro`，公开资料集中在 `src/data/profile.ts`。
- 首页包含用户简历中的研究方向、6 篇代表论文、4 篇准备中或已投稿稿件、教育与学术访问、学术服务、奖励和用户照片。论文与稿件状态应按资料区分维护。
- 已接入 CEP 2026 项目页 `/research/cep-2026/`、两段视频、作者稿及结果图。项目数据在 `src/data/cep2026.ts`，长篇介绍在 `src/content/projects/cep-2026.md`；材料对应与验证范围见 `docs/cep-2026-materials.md`。
- 运行环境要求 Node.js `>=22.12.0`；使用 npm 与 `package-lock.json`。Git 已初始化为 `main` 分支，公开仓库为 `https://github.com/mengshengya/mengshengya.github.io`；GitHub Pages 工作流已配置，仅发布 `dist/`。首次推送与发布仍在进行，目标地址 `https://mengshengya.github.io/` 待在线验证；不要将本地构建成功描述成已经上线。
- 随用户后续指示推进页面、素材处理、构建和部署；实施后同步更新说明，避免状态记录过期。

## 文件放置

- 页面、布局、组件、样式和结构化公开内容分别放入 `src/` 对应目录。
- 可公开的图片、音视频、字幕和下载附件放入 `public/` 对应目录。这里的文件会直接进入网站发布内容。
- 用户提供的原始资料放入 `materials/`；未分类文件先放 `materials/inbox/`。
- 原件与处理成品分别保留，处理时生成副本，不覆盖用户原件。
- 已提供的简历原件位于 `materials/cv/`，照片原件位于 `materials/media/images/`；网站仅引用 `src/` 和 `public/` 内的公开内容。
- 临时下载、转码结果、截图和日志分别放入 `tmp/` 对应目录，不散落在项目根目录。
- 构建输出约定为 `dist/`，不手工维护，不把整个项目根目录作为发布目录。
- 说明文档放 `docs/`，可重复使用的工具放 `scripts/`，自动化流程放 `.github/workflows/`。

## 内容与维护

- 以用户提供的个人资料为事实依据；不虚构经历、论文、链接或联系方式，不沿用参考作者的个人内容。
- 用户已明确指定用于公开的内容，按该用途继续处理；用途不明时先留在 `materials/`，可继续整理其他内容。
- `materials/`、`tmp/` 和 `dist/` 的实际内容默认不提交；不要强制添加被忽略的个人原稿。
- 长期需要的工作记录移入 `docs/`，不要依赖临时目录保存。
- 公开文件使用小写英文、数字和连字符命名；同一项目的介绍、配图和音视频使用一致的标识。
- 文本使用 UTF-8，遵循 `.editorconfig`；清理仅针对已识别的临时产物，不删除原始资料。
- 依据改动执行必要检查，并明确区分“目录已建立”“可本地运行”和“已部署”。
- 日常检查使用 `npm run check`、`npm run build`，再检查页面布局和链接；Windows PowerShell 可使用等价的 `npm.cmd` 命令，并在当前终端设置 `$env:ASTRO_TELEMETRY_DISABLED = '1'`，避免遥测缓存写入 roaming 目录。只在实际执行成功后记录验证通过。
