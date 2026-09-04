# 艾窝窝OPC社区 · 官网

北京市OPC(一人公司)认证社区「艾窝窝 / AI WOWO」的官方网站。Next.js 16 单页营销站 + 面向 AI 代理的机器可读接口。

- 线上地址:<https://aiwowo-website.vercel.app>
- 代码仓库:<https://github.com/yangshiqi/aiwowo>
- 技术栈与目录结构:见 [AGENTS.md](./AGENTS.md)

---

## 给 AI 代理的三条规则

本仓库欢迎 WorkBuddy、Codex、Claude Code 等代理参与。动手之前先读完这一节。

> **默认分支是 `master`,不是 `main`。** 下文所有命令都用 `master`。
>
> 目前仓库**没有开启分支保护**,技术上推得动 `master` —— 但这是团队约定,请自觉遵守,不要因为"能推"就直接推。

### 1. 提需求:开 Issue,不要直接改 `master`

发现问题或有改动想法,**先开 issue 讨论,不要直接提交代码到 `master`**。

仓库配了两个 issue 表单,在网页上开 issue 会自动带出必填项,选对应的一个即可:

- **需求 / 改动提议** —— 新功能、内容调整、改进建议
- **问题反馈** —— 页面错误、构建失败、样式异常、接口返回不对

空白 issue 已关闭,确保需求描述完整。命令行开 issue 用:

```bash
gh issue create \
  --title "简明扼要的一句话" \
  --body "背景 / 现状 / 期望 / 影响范围"
```

issue 里请写清楚:

| 项 | 说明 |
| --- | --- |
| 背景 | 为什么需要这个改动 |
| 现状 | 现在是什么行为,附页面路径或文件路径 |
| 期望 | 改完应该是什么样 |
| 影响范围 | 涉及哪些页面/组件,是否动到设计或文案 |

**绝对不要做的事:**

- 直接 `git push origin master`
- 直接 `git commit` 到本地 `master` 再推
- 绕过 issue 和 PR 直接改线上内容

### 2. 改代码:走 Pull Request

所有代码改动都通过 PR 合入,一个 PR 对应一件事。

```bash
# 1. 从最新 master 切分支
git checkout master && git pull origin master
git checkout -b fix/hero-spacing        # 或 feat/xxx、docs/xxx、chore/xxx

# 2. 改代码,然后本地自检(必须全绿)
npm run check                            # lint + typecheck + test + build

# 3. 提交并推分支
git add -A
git commit -m "一句话说明改了什么和为什么"
git push -u origin fix/hero-spacing

# 4. 开 PR,关联 issue
gh pr create --base master \
  --title "Fix hero spacing on mobile" \
  --body "Closes #12

## 改了什么
...

## 怎么验证的
..."
```

开 PR 时会自动带出模板(`.github/PULL_REQUEST_TEMPLATE.md`),按里面的自检清单逐条确认。

PR 要求:

- **关联 issue**,在描述里写 `Closes #编号`。
- **本地 `npm run check` 全绿**再提。CI 会重跑 lint、typecheck、测试和构建,失败的 PR 不合入。
- **改了行为就补测试**,测试放在 `tests/`,用 `npm test` 跑。
- **动了视觉就附截图**,桌面和移动各一张。
- 保持 diff 聚焦,不要顺手重排无关代码。

### 3. 本地部署:初始化与启动

**环境要求:** Node.js 24.x(见 `package.json` 的 `engines`),包管理器用 npm(仓库提交的是 `package-lock.json`,不要换成 pnpm 或 yarn)。生成 OG 分享图还需要 Python 3 和 Pillow,日常开发用不到。

```bash
# 初始化
git clone https://github.com/yangshiqi/aiwowo.git
cd aiwowo
npm install

# 启动开发服务器 → http://localhost:3000
npm run dev
```

常用命令:

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 开发服务器,默认 3000 端口 |
| `npm run build` | 生产构建 |
| `npm start` | 跑生产构建的产物(需先 build) |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm test` | 跑测试(vitest) |
| `npm run test:watch` | 测试监听模式 |
| `npm run check` | 上面四项串跑,提 PR 前必跑 |
| `npm run og` | 重新生成 OG 分享图(需 Python 3 + Pillow) |

**不需要任何环境变量就能跑起来。** 只有绑定自定义域名时才需要设 `NEXT_PUBLIC_SITE_URL`,它决定 canonical、sitemap、llms.txt 和 MCP 服务卡片里的绝对地址。不设时回退到 Vercel 的生产域名。

验证本地服务正常:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/          # 200
curl -s -H 'Accept: text/markdown' http://localhost:3000/ | head -3      # Markdown 正文
curl -s http://localhost:3000/llms.txt | head -3                          # llms.txt
```

---

## 本项目注意事项

以下都是踩过的坑,动手前扫一眼能省很多时间。

### Next.js 16 与你记忆里的不一样

这个版本有破坏性变更,API、约定和文件结构都可能和训练数据不同。**写代码前先读 `node_modules/next/dist/docs/` 里对应的文档**,不要凭印象写。几个已经踩过的点:

- 中间件已更名为 **Proxy**,文件是根目录的 `src/proxy.ts`,导出函数叫 `proxy`,不再是 `middleware`。
- **不要给 `next.config.ts` 加 `output: "standalone"`。** Vercel 的构建器不兼容,会在 `onBuildComplete` 阶段报 `ENOENT .next/next-server.js.nft.json`,构建直接失败。本仓库没有自托管场景,不需要它。
- App Router 的 HTML 响应里 **`Vary` 头由框架接管**,`next.config.ts` 和 `vercel.json` 都覆盖不掉(其他自定义头可以)。内容协商的正确性靠 `src/proxy.ts` 在缓存前逐请求判断,不要试图靠 `Vary` 解决。

### 文案和数据只有一处来源

站点文案、FAQ、联系方式集中在 `src/lib/`:

| 文件 | 内容 |
| --- | --- |
| `src/lib/site.ts` | 站点名、域名、联系方式、认证、关键数字 |
| `src/lib/faq.ts` | 全部 FAQ 问答 + 检索函数 |
| `src/lib/agent-content.ts` | 各页 Markdown 正文、llms.txt、适用场景 |

这些数据同时喂给页面组件、JSON-LD 结构化数据、`llms.txt`、各 `.md` 变体和 MCP 工具。**改文案请改这里,不要直接改组件里的硬编码字符串**,否则几处会各说各话。改完跑 `npm test`,测试会校验一致性。

### 动效性能是长期要求

这是项目的硬性偏好,不是建议:

- 优先用 `transform` / `opacity` 做动画,避免触发布局重排。
- 离屏内容必须暂停动画,参考 `PerfOptimizer` 和各处的 `IntersectionObserver`。
- 尊重 `prefers-reduced-motion`,组件里用 `motion-safe:` / `motion-reduce:` 或 `reducedMotion="user"`。
- 不要为了省事把装饰性 SVG 换成外链 `<img>` —— 那样离屏暂停逻辑就够不到里面的动画了。

### 设计系统:OPC Warm Blueprint

改样式前先看 [AGENTS.md](./AGENTS.md) 的设计原则。几条容易违反的:

- **全站浅色单主题**,暖纸张底 `#f0e8e0`,不做深浅反转。
- **橙色 `#e85820` 只用于编号、节点、重点状态**,绝不大面积铺。
- 圆角 0–4px,阴影极轻,卡片靠细线和留白组织。
- 标题层级不能跳级(`h1` 后面不能直接跟 `h3`),这条有测试和审计在盯。

### 目录名是克隆遗留,不要随手重命名

`src/components/sites/router-com-92408672/` 和 `public/sites/router-com-92408672/` 这个命名是早期从模板克隆时留下的,和现在的内容无关。**它牵着大量资源路径,不要顺手改名**,除非专门开 issue 做这件事。

### 其他零碎

- **Tailwind v4** 会扫描仓库里的类名字符串,`globals.css` 里用 `@source not` 排除了 `docs/` 和 `scripts/`,新增会误伤的目录时记得补上。
- **改了 `@theme` 里的设计令牌,dev 服务器的热更新可能不生效**,重启 `npm run dev`。
- **换端口重启前先清干净旧进程**,否则会拿到旧构建产物:`pkill -f "next start"; lsof -ti :3000 | xargs kill -9`。
- **OG 分享图是脚本生成的**,不是手工图。改了品牌信息后跑 `npm run og` 重新生成 `public/.../seo/og-image.png`。
- **机器可读接口要一起维护**:新增页面时同步更新 `src/app/sitemap.ts`、`src/lib/agent-content.ts` 里的链接清单,以及对应的 `.md` 路由。
- **站点文案是简体中文**,新增内容保持中文,英文只用于品牌名和技术术语。

### CI 与部署

- 推送到 `master` 或对 `master` 提 PR 会触发 CI(`.github/workflows/ci.yml`),依次跑 lint、typecheck、测试、构建。
- `master` 有更新时 Vercel 自动部署到生产环境。**这意味着直接推 `master` 会立刻上线**,这也是必须走 PR 的原因。

---

## 机器可读接口

站点为 AI 代理提供了这些入口,改动相关代码时请一并验证:

| 路径 | 说明 |
| --- | --- |
| `/llms.txt` | 站点索引与适用场景(llmstxt.org 格式) |
| `/llms-full.txt` | 全站正文合集 |
| `/sitemap.xml` | 可索引 URL |
| `/index.md`、`/about.md` 等 | 各页 Markdown 变体 |
| `/api/mcp` | MCP 服务器(Streamable HTTP),5 个工具 |
| `/.well-known/mcp/server-card.json` | MCP 服务卡片 |

任意页面带 `Accept: text/markdown` 请求也会返回 Markdown 正文。详见站内 [/agents](https://aiwowo-website.vercel.app/agents) 页。
