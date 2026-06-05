# Dashboard System Plan

本文档记录后台系统的依赖选择、安装规则和建设顺序。当前目标是先建立 auth 系统，再建立一个空白 dashboard 壳。

## 当前项目基础

- Framework: Next.js 16 App Router
- Runtime/deploy: OpenNext Cloudflare
- UI: React 19, Tailwind CSS 4
- Database: PostgreSQL + Prisma
- Existing client state/data libs: `swr`, `zustand`

## 已确定选择

- Auth library: `better-auth`
- Dashboard design system: `shadcn/ui`
- Email system: Cloudflare Email Service

## 当前已安装

- `prisma`: `^7.8.0`
- `@prisma/client`: `^7.8.0`
- `@prisma/adapter-pg`: `^7.8.0`
- `better-auth`: `^1.6.14`
- `zod`: `^4.4.3`
- `react-hook-form`: `^7.77.0`
- `@hookform/resolvers`: `^5.4.0`

## Agent Tooling

Installed official Cloudflare skills into the local Codex skills directory:

- `cloudflare`
- `cloudflare-email-service`
- `wrangler`
- `workers-best-practices`

Configured project MCP servers in `.codex/config.toml`:

- `prisma-local`: local Prisma MCP via `yarn prisma mcp`
- `cloudflare-docs`: official Cloudflare documentation MCP
- `cloudflare-api`: official Cloudflare API MCP
- `cloudflare-bindings`: official Workers bindings MCP
- `cloudflare-builds`: official Workers builds MCP
- `cloudflare-observability`: official Cloudflare observability MCP

No official Codex documentation MCP/skill was found for `zod`, `react-hook-form`, or `@hookform/resolvers`. Better Auth provides an MCP plugin for applications that need to act as an MCP/OAuth provider, but it is not a Codex documentation MCP.

When implementing or changing Better Auth, always check the official Better Auth docs first: `https://www.better-auth.com/docs`. Follow their current best practices for Next.js, Prisma, session handling, plugins, and schema generation.

Prisma 已升级到 v7 写法：

- 数据库连接 URL 从 `prisma/schema.prisma` 移到 `prisma.config.ts`
- Prisma Client 使用 `prisma-client` generator
- 生成目录为 `src/generated/prisma`
- Cloudflare runtime 使用 `runtime = "cloudflare"`
- 应用代码从 `~/generated/prisma/client` 引入 `PrismaClient`

## 安装规则

在建设过程中，如果需要安装本文档中的任意依赖，需要先向项目负责人确认，不直接安装。

确认方式应该明确说明：

- 要安装的包名
- 安装原因
- 当前步骤是否必须安装
- 预计会修改哪些配置或文件

## 推荐依赖清单

### Auth and Access

| Package | 用途 | 优先级 | 备注 |
| --- | --- | --- | --- |
| `better-auth` | 登录、注册、session、auth API | 必需 | 先安装。需要与 Prisma schema 集成。 |
| Better Auth admin plugin | 用户管理、角色、封禁、权限判断 | 建议 | 可以在基础 auth 跑通后加入。 |
| Better Auth organization plugin | 多组织、多团队、邀请成员 | 可选 | 只有需要多租户或团队权限时再加。 |
| Better Auth email OTP / magic link / 2FA plugins | 邮箱验证、无密码登录、二次验证 | 按需求 | 建议先做邮箱密码登录，再加验证邮件或 OTP。 |

### Forms and Validation

| Package | 用途 | 优先级 | 备注 |
| --- | --- | --- | --- |
| `zod` | 表单、API、server action 入参校验 | 必需 | 建议作为服务端和客户端共享 schema。 |
| `react-hook-form` | 登录、注册、后台编辑表单 | 必需 | 与 shadcn `Form` 组件配合。 |
| `@hookform/resolvers` | 让 React Hook Form 使用 Zod schema | 必需 | 通常和上面两个一起安装。 |

### Dashboard UI

| Package | 用途 | 优先级 | 备注 |
| --- | --- | --- | --- |
| `lucide-react` | shadcn 常用图标 | 必需 | 侧边栏、按钮、菜单需要。 |
| `sonner` | toast 反馈 | 建议 | 登录失败、保存成功、删除确认等反馈。 |
| `recharts` | 图表 | 可选 | shadcn Chart 基于 Recharts。空白 dashboard 阶段不需要。 |
| `date-fns` | 日期格式化、时间筛选 | 建议 | 后台列表和日志常用。 |

### Tables and URL State

| Package | 用途 | 优先级 | 备注 |
| --- | --- | --- | --- |
| `@tanstack/react-table` | 后台列表、排序、筛选、分页 | 建议 | 用户列表、提交记录等会用到。空白 dashboard 阶段可暂缓。 |
| `nuqs` | URL query 状态管理 | 建议 | 让筛选、分页、排序可复制链接和刷新保留。 |

### Email

邮件系统使用 Cloudflare Email Service。实现发送、接收、邮箱验证、密码重置或邀请邮件前，先查看 Cloudflare 官方文档、`cloudflare-email-service` skill 和 Cloudflare MCP。`resend` 和 `@react-email/components` 不作为默认方案，只有 Cloudflare 方案无法覆盖需求时再重新评估。

### Production and Testing

| Package | 用途 | 优先级 | 备注 |
| --- | --- | --- | --- |
| `@sentry/nextjs` | 错误监控 | 生产建议 | 上线前加入更合适。 |
| `@upstash/ratelimit` | 非 auth API 限流 | 按需求 | Better Auth 自带 auth rate limit；其它公开接口再考虑。 |
| `@upstash/redis` | Upstash rate limit 存储 | 按需求 | 与 `@upstash/ratelimit` 搭配。 |
| `vitest` | 单元测试 | 建议 | auth helper、schema、server action 可测。 |
| `@testing-library/react` | React 组件测试 | 建议 | 登录/注册表单可测。 |
| `@testing-library/jest-dom` | DOM matcher | 建议 | 与 Testing Library 搭配。 |
| `playwright` | E2E 测试 | 建议 | 登录、注册、受保护路由跳转应做 E2E。 |

## 建设顺序

### Phase 1: Auth foundation

目标：先跑通注册、登录、登出、session 检查和受保护路由。

建议顺序：

1. 确认 auth 方式：先使用邮箱 + 密码。
2. 查看 Better Auth 官方文档，确认当前 Next.js + Prisma 最佳实践。
3. 询问并安装 `better-auth`、`zod`、`react-hook-form`、`@hookform/resolvers`。
4. 新增 Better Auth server config。
5. 新增 Better Auth API route: `/api/auth/[...all]`。
6. 调整 Prisma schema，加入 Better Auth 需要的表和字段。
7. 生成并执行数据库迁移。
8. 新增 auth client helper。
9. 新增登录页和注册页。
10. 新增 session 检查逻辑。
11. 保护 `/dashboard` 路由，未登录跳转登录页。

### Phase 2: Empty dashboard shell

目标：登录后能进入一个空白 dashboard 页面，但暂时不做业务模块。

建议顺序：

1. 询问并安装/初始化 `shadcn/ui` 需要的依赖和配置。
2. 加入基础 layout：sidebar、top bar、content area。
3. 建立 `/dashboard` 空白首页。
4. 加入用户菜单：显示当前用户、登出按钮。
5. 确认移动端 sidebar 行为。

### Phase 3: Admin basics

目标：有最小后台管理能力。

建议顺序：

1. 加入 Better Auth admin plugin。
2. 定义角色：`admin`、`user`。
3. 增加用户列表页面。
4. 增加基础权限判断 helper。
5. 对 dashboard 页面做 role gate。

### Phase 4: Operational polish

目标：补齐后台常用体验和上线保障。

建议顺序：

1. 表格筛选、分页、排序。
2. Toast、loading、empty state、error state。
3. 邮箱验证或密码重置。
4. E2E 测试登录/注册/登出流程。
5. 上线前接入错误监控。

## 当前建议起点

现在应该从 Phase 1 开始：先建立基础 auth 系统。

理由：

- Dashboard 是受保护区域，必须先有 session 和路由保护。
- Auth 会影响 Prisma schema，需要先定下来，避免后面 dashboard 数据模型反复调整。
- 先做空白 dashboard 是合理的，但它应该建立在登录态已经可用的基础上。

当前最小可交付结果：

- 用户可以注册
- 用户可以登录
- 用户可以登出
- 登录后访问 `/dashboard`
- 未登录访问 `/dashboard` 会跳转到登录页
- `/dashboard` 页面先保持空白或只显示最小 layout
