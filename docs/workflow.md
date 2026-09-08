# 共同维护与更新流程

## 从资料到网页

1. 用户将资料放入 `materials/inbox/` 或对应分类，也可以在对话中提供文字与用途说明。
2. 按内容归类原始文件，保留原件；不确定的事实或展示用途记录在原件旁的说明中。
3. 把已确定用于网站的资料整理到 `src/data/` 或 `src/content/`，由页面和组件引用。
4. 图片、音视频处理的中间结果放入 `tmp/processing/`，网页使用的成品放入 `public/`，预览截图放入 `tmp/previews/`。
5. 执行 `npm run check` 与 `npm run build`，用 `npm run dev` 或构建后的 `npm run preview` 检查实际页面、移动端布局、链接和媒体播放，再依照部署约定发布。Windows PowerShell 可使用等价的 `npm.cmd` 命令。

## 命名与对应关系

原件可以保留原名称。网页使用的文件优先采用小写英文、数字和连字符，不使用空格；日期采用 `YYYY-MM-DD`，例如 `2026-09-07-talk-slides.pdf`。

同一研究项目使用稳定标识，例如 `robot-navigation`：

| 内容 | 示例位置 |
| --- | --- |
| 原始项目说明 | `materials/projects/robot-navigation/` |
| 原始演示视频 | `materials/media/video/robot-navigation/` |
| 网页项目介绍 | `src/content/projects/robot-navigation.md` |
| 展示图片 | `public/images/research/robot-navigation-overview.webp` |
| 视频成品 | `public/media/video/robot-navigation-demo.mp4` |
| 视频封面 | `public/media/posters/robot-navigation-demo.webp` |
| 英文字幕 | `public/media/captions/robot-navigation-demo.en.vtt` |

以上仅是路径示例，尚未创建对应内容文件。详细页、图片、视频、封面和字幕通过内容中的资源路径关联，后续不只依靠文件名推断关系。

## 后续更新

- 更新个人简介、研究方向、教育经历、论文、学术服务或奖励时，优先修改 `src/data/profile.ts`，避免在多个页面重复手工维护。保持已发表论文与准备中、已投稿稿件的状态区分。
- 首页结构在 `src/pages/index.astro`，公共布局在 `src/layouts/BaseLayout.astro`，样式在 `src/styles/global.css`；当前头像成品为 `public/images/profile/shengya-meng.jpg`。
- 新增项目时，沿用稳定项目标识，把介绍和媒体放入各自目录。
- 更新公开简历时，原始版本归档到 `materials/cv/`，公开文件可以使用 `public/files/cv/cv.pdf`，保持下载地址稳定。
- 完成一次更新后，将值得长期保留的决定写入 `docs/`，临时截图和日志留在 `tmp/`。
- 使用 Git 时，提交源码、公开素材和必要说明；检查提交列表符合 `.gitignore` 的约定。

## 当前状态与下一步

当前已根据用户简历和照片实现首页，包含个人简介、研究方向、6 篇代表论文、4 篇准备中或已投稿稿件、教育与学术访问、学术服务、奖励和照片。简历与照片原件分别保留在 `materials/cv/`、`materials/media/images/`。

Astro 本地开发、检查、构建和预览命令已配置，运行要求 Node.js `>=22.12.0`。首次安装使用 `npm ci --cache tmp/npm-cache`；调整依赖使用 `npm install --cache tmp/npm-cache`，并保留更新后的锁文件。

网站已于 2026-09-08 首次上线至 [mengshengya.github.io](https://mengshengya.github.io/)，公开仓库为 [mengshengya/mengshengya.github.io](https://github.com/mengshengya/mengshengya.github.io)。`main` 推送通过 GitHub Actions 完成检查、构建并仅发布 `dist/`；首次部署及线上页面、布局和资源验证已完成，详见 [运行与部署记录](deployment.md)。后续可继续补充项目与媒体、完善独立页面。阶段完成后同步更新本节与根目录 README，检查结果只记录实际执行情况。

已完成首个独立项目页 `/research/cep-2026/`，并接入首页研究卡片与论文链接。新增材料按论文、项目资料和原始视频分类归档；网页使用的媒体和作者稿放入 `public/`。详见 [CEP 2026 材料说明](cep-2026-materials.md)。
