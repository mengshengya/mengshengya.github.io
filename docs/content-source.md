# 首页内容来源与维护

首页初稿依据用户提供的 `CV_Shengya_MENG_En.pdf`（4 页）整理，原件归类保存在 `materials/cv/CV_Shengya_MENG_En.pdf`。初次整理日期：2026-09-07。个人事实依据该简历与用户后续提供的材料和更正维护；研究方向描述是对其研究兴趣、学位论文和论文题目的归纳。没有从参考网站沿用任何个人内容。

## 公开数据

首页结构化内容位于 `src/data/profile.ts`，后续修改个人信息优先在此文件进行。

| 首页内容 | 资料来源 | 整理方式 |
| --- | --- | --- |
| 姓名、博士在读身份、机构、研究兴趣、邮箱 | 第 1 页 | `Shengya MENG` 按网站排版统一为 `Shengya Meng`；博士在读自 2023 年 9 月开始，未添加预计毕业时间 |
| 当前工作单位 | 用户 2026-09-08 对话更正 | 使用 `CRAN, University of Lorraine`，同步资料卡、简介、副标题和页面摘要；教育经历保留学位授予机构 |
| LinkedIn | 各页页脚 | 使用简历可见的链接文本并补上 `https://` 协议；PDF 内部链接注释错误地重复了域名和 `/in/`，不复制这一格式错误 |
| 个人简介、三个研究方向 | 第 1 页及第 1–3 页论文题目 | 归纳分布式观测器、非线性系统、车辆应用，以及论文涉及的通信时延、传感器故障和串稳定性；未增加未提供的技能或任职 |
| 三段教育经历与导师 | 第 1 页 Education | 保留机构、专业、年份和学位论文；未将博士在读误写为已获学位 |
| Journal articles (14) | 第 1–2 页 International Journal Papers [1]–[14] | 完整展示简历所列条目；[1]–[4] 保留原文 `Prepared` / `Submitted` 状态，其余条目按年份降序排列 |
| Conference papers (7) | 第 3 页 International Conference Papers [1]–[7] | 完整展示简历所列条目并按年份降序排列；未增加简历没有提供的链接或录用状态 |
| 审稿服务 | 第 3–4 页 Professional Activities | 保留列出的期刊和会议，将 ACC 2024 / 2025 合并显示 |
| 四项学术交流与访问 | 简历第 4 页及用户 2026-09-08 提供的 Academic Exchanges and Visits 截图 | 按时间倒序新增 ArtiSmo、FAAR PRONERGY、SAGIP 三项，保留已有 Groningen 条目，详见下节 |
| Selected honors | 第 4 页 Awards | 选择 CSC 奖学金、东北大学一等奖学金和校长奖学金、贵州省及贵州大学优秀毕业生、数学竞赛一等奖；重复年份合并 |

博士教育条目中的 `Sep 2023 – Present` 与简历 `Since 01/09/2023` 对应。首页整体采用英文以匹配用户提供的英文简历与学术网站参考；这不是独立核验后的最新任职结论，未来用户更新简历时应同步调整。

## 2026-09-08 学术交流补充

以下记录根据用户提供的截图转录，日期、题目、人名和组织名称以截图为准；Groningen 条目与原有资料一致，未重复添加。

| 日期 | 活动与地点 | 邀请人、接待人或组织者 | 报告题目或交流主题 |
| --- | --- | --- | --- |
| 2026-06-15–16 | ArtiSmo project 邀请报告，Rouen | 邀请人：Ali Zemouche | Distributed Observer Design in the Application to Vehicle Platoons |
| 2026-06-10–11 | FAAR PRONERGY 访问 | 邀请人：Adil ALIF | Estimator Validation by Real-World Driving Tests |
| 2025-05-21–23 | 3rd Annual SAGIP Congress 参会并报告，Université de Haute-Alsace “La Fonderie” campus，Mulhouse，France | 组织者：Université de Haute-Alsace | Distributed High-Gain/LMI Observer for Nonlinear System with Application to Vehicle |
| 2024-04-02–05 | University of Groningen · Faculty of Science and Engineering 邀请报告，Groningen，The Netherlands | 接待人：Dr. Saeed Ahmed | Observer Design Method for Nonlinear Generalized Systems with Nonlinear Algebraic Constraints with Applications |

截图未给出 FAAR PRONERGY 访问地点和 SAGIP 个人接待人，网页相应省略。四项归入 Education & experience 下的 Academic exchanges and visits 小节；邀请人、组织者与接待人分别标注。CEP 2026 项目页沿用作者稿中的机构署名。

## 论文展示说明

- Journal articles 标题后的 14 是简历期刊分组的条目总数，其中包含 1 个 Prepared 和 3 个 Submitted；页面以状态标签区分，不将它们误写为已发表成果。
- 第 2 页期刊 [8] 与 [9] 标题完全相同，但作者、期刊和年份不同；首页按简历原文保留为两个独立条目，未擅自更正。
- 未为会议论文额外断言口头报告、获奖或录用状态；只呈现简历记载的会议书目信息。
- 简历没有提供 Google Scholar、ORCID、GitHub 或论文下载链接，因此没有创建这些链接。
- 已用 `pdfinfo -url` 检查 PDF 链接注释，期刊与会议名称只有颜色格式，未包含文章链接；只找到页脚的联系方式链接。
- 出生日期、性别、国籍、详细地址、电话号码不属于当前首页需要展示的内容，未写入公开数据。
- 原始 PDF 包含上述非必要信息，保留在 `materials/`，当前没有将整份 PDF 复制到 `public/` 或添加下载入口。

## 素材与临时文件

照片原件归类保存在 `materials/media/images/Shengya.jpg`；网站使用的照片副本放入 `public/images/profile/`。具体公开照片路径由 `profile.photo` 维护。

本次 PDF 文本提取和页面渲染临时文件放入 `tmp/processing/cv/`，不参与网站发布和 Git 提交。个人资料原件也遵循现有忽略规则。

## 后续维护

CEP 2026 条目已根据新提供的作者稿、报告和演示文件扩展：增加项目页与作者稿链接，元数据集中在 `src/data/cep2026.ts`。本次材料对应关系见 [CEP 2026 材料说明](cep-2026-materials.md)。上文“未添加论文 PDF 或项目链接”记录的是简历整理阶段的状态。

更新论文时同时维护状态、作者顺序、题目、出版信息；只有用户提供或核实的地址才能加入链接。若论文从 Submitted 变为发表，将其从 `manuscripts` 移入 `publications` 并填入对应年份与书目信息。Journal articles 与 Conference papers 的数量由结构化数据自动计算。

## 初稿验证（2026-09-07）

- `npm run check`：0 errors、0 warnings、0 hints。
- `npm run build`：成功生成静态首页。
- 使用本机 Chrome 检查 1440、768、390、320 像素视口：照片加载、页内导航、键盘展开和收起稿件列表均正常，没有横向溢出或浏览器错误。
- 禁用 JavaScript 时，正文、论文列表和原生稿件展开功能仍可使用。
- 检查构建文件：未包含原始简历或项目说明文档；网页照片副本与原图一致。
- 预览截图及临时验证脚本保存在 `tmp/`，未进行线上部署。

## 学术交流与单位更新验证（2026-09-08）

- `npm run check`：0 errors、0 warnings、0 hints。
- 正式站点配置下 `npm run build` 成功生成首页与 CEP 2026 项目页。
- 本机 Chrome 在 1440、768、390、320 像素视口下确认四项经历的日期、题目、邀请人、组织者和接待人与截图一致；资料卡、副标题、简介和页面摘要均使用新单位。
- 页内导航、稿件列表键盘展开与收起、照片加载及禁用 JavaScript 后的基本功能正常，无横向溢出或浏览器错误；已查看桌面与小屏截图。
- 本地截图与检查结果位于 `tmp/previews/homepage/visits-update-*`，线上发布状态另见 [部署记录](deployment.md)。
- 同日已完成 GitHub Pages 发布，正式主页在相同四种宽度下的内容、布局与交互检查通过；线上截图与日志位于 `tmp/previews/homepage/visits-update-live-*`，详见 [部署记录](deployment.md)。
