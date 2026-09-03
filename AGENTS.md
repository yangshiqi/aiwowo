# 艾窝窝OPC社区 · 官网

北京市OPC认证社区「艾窝窝(AI WOWO)」的官方网站。单页营销站:孵化中外OPC(一人公司)、以AI赋能企业服务生态。

## 技术栈
- **框架:** Next.js 16(App Router, React 19, TypeScript strict)
- **样式:** Tailwind CSS v4 + 自定义设计令牌(OPC Warm Blueprint:暖纸张底 + 蓝图蓝 + 规划橙)
- **字体:** Barlow Condensed(标题/数字)、思源黑体 Noto Sans SC(正文/中文)、IBM Plex Mono(等宽)
- **图标:** morphicons(交互形变)+ Lucide 描边数据;静态图标走零 JS 的 `LucideGlyph`

## 命令
- `npm run dev` — 开发服务器
- `npm run build` — 生产构建
- `npm run lint` / `npm run typecheck`

## 结构
```
src/
  app/                                  # 路由(单页:/)+ layout / globals.css
  components/sites/.../root-8a5edab2/   # 页面各版块组件
  components/sites/.../shared/          # 共享图标、morph 组件
docs/research/aiwowo-source/            # 站点内容来源存档
scripts/                                # 单文件 HTML 打包
public/sites/.../                       # 字体、图片、SVG、SEO 资源
```

## 设计原则(OPC Warm Blueprint)
- 全站浅色单主题,暖纸张底(#f0e8e0),不做深浅反转
- 蓝图蓝负责秩序线条,橙色只用于编号/节点/重点状态,绝不大面积使用
- 卡片以细线+留白组织,圆角 0–4px,阴影极轻
- 动效克制:优先 transform/opacity,离屏暂停,尊重 `prefers-reduced-motion`

## 内容维护
- 站点文案与数据直接改各版块组件;结构化数据见 `.../root-8a5edab2/jsonld.ts`
- 打包分享单文件:`npm run build` → 抓取渲染后 DOM → `python3 scripts/package-single-html.py`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
