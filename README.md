# Lin Audio Works Portfolio

React + Vite 单页商业作品集官网，面向专业混音/母带工程师展示作品、服务与合作咨询。

## 本地运行

```bash
pnpm install
pnpm run dev
```

如使用 npm，也可以执行：

```bash
npm install
npm run dev
```

## 发布与自动部署

生产构建命令：

```bash
pnpm run build
```

Vercel 自动部署建议配置：

- Framework Preset: Vite
- Install Command: `pnpm install`
- Build Command: `pnpm run build`
- Output Directory: `dist`

连接 GitHub 仓库后，每次提交并推送到主分支，Vercel 会自动重新构建并更新线上站点。

## 内容替换

- 个人信息：修改 `src/main.jsx` 顶部的 `engineer`。
- 导航：修改 `src/main.jsx` 的 `navItems`。
- 作品集：修改 `src/main.jsx` 的 `works`。
- 作品封面：修改每首作品的 `coverSrc`。
- 网易云链接：修改每首作品的 `songId`。代码中已用 `【歌曲ID替换位】` 标注歌曲名、艺人与 ID 的对应关系，弹窗按钮会跳转到对应歌曲详情页。
- Credits：修改每首作品的 `credits` 和 `creditSource`。当前 40 首均按“混音：林晨旭 / 母带：林晨旭”展示；歌词接口可确认的歌曲标为“歌词署名已确认”，其余标为“按用户确认标注”。
- 服务项目：修改 `src/main.jsx` 的 `services`。
- 社交链接：修改 `src/main.jsx` 的 `socials`。

## 交互说明

- 顶部导航固定，滚动后背景加深。
- 作品支持标签筛选、弹窗详情和网易云完整版本外链。
- 移动端导航自动切换为汉堡菜单侧边滑出。
- 页面元素进入视口时淡入上移，动效统一为 0.5s ease-out。
