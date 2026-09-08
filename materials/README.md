# 原始资料与素材

此目录接收你提供的资料。除本说明与 `.gitkeep` 空目录占位文件外，所有内容都被根目录的 `.gitignore` 忽略。

| 目录 | 适合放置的内容 |
| --- | --- |
| `inbox/` | 暂时不确定分类的新文件，以及配套说明 |
| `profile/` | 姓名、简介、研究兴趣、教育和工作经历、公开联系链接 |
| `cv/` | Word、LaTeX 等简历源文件及不同日期的 PDF 原件 |
| `publications/` | 论文清单、BibTeX、摘要、作者顺序和原始附件 |
| `projects/` | 项目说明、成果介绍和相关链接；可以按项目建立子目录 |
| `media/images/` | 原始头像、照片、研究图片和高分辨率原图 |
| `media/audio/` | 原始录音、配音及配套说明 |
| `media/video/` | 原始视频、录像及剪辑源素材 |

提供文件时，可以在同一目录附一个文本说明，记录对应项目、预期用途、需要保留的片段、配文和公开范围。已经在对话里说明的内容不需要重复填写。

例如，一段研究演示可以先放为 `media/video/project-name/demo-original.mp4`；中间转码结果放入 `tmp/processing/project-name/`，最终网页版本放入 `public/media/video/project-name-demo.mp4`。

只将需要发布的成品复制到 `public/`。原始目录不会参与网站构建，但也不会随普通 Git 提交备份；请为需要长期保存的原件保留额外备份。
