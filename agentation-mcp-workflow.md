# Agentation MCP Workflow

这个文档记录在本项目里如何让 Codex 和 Agentation MCP 配合处理网页标注。

## 已配置内容

项目里已经安装并接入了 Agentation：

- React 组件在 `src/app/providers.tsx` 中加载。
- 组件已连接本地 MCP HTTP server：

```tsx
<Agentation endpoint="http://localhost:4747" />
```

Codex MCP 配置里也已经添加了 Agentation server：

```toml
[mcp_servers.agentation]
command = "npx"
args = ["-y", "agentation-mcp", "server"]
```

## 每次使用流程

1. 启动开发服务器：

```bash
npm run dev
```

2. 打开本地页面，例如：

```text
http://localhost:3000/services/mediation
```

3. 在聊天里让 Codex 开始监听：

```text
开始监听 Agentation，先处理 pending，再持续 watch
```

默认监听参数：

```text
timeoutSeconds: 300
batchWindowSeconds: 5
```

这表示 Codex 最多等待 5 分钟；你添加第一个 mark 后，再等 5 秒收集同一批标注，然后开始处理。

4. 在网页上用 Agentation mark/comment。

5. Codex 收到标注后会按这个流程处理：

```text
acknowledge -> 修改代码 -> build 验证 -> resolve annotation
```

## 如果已经标注了但没有在监听

直接对 Codex 说：

```text
处理 Agentation pending
```

Codex 会拉取已经存在的 pending annotations，不需要重新 mark。

## 重要注意

- Codex 只有在当前回合调用 `agentation_watch_annotations` 时才会持续监听。
- 如果你中断了 Codex 回合，或者 Codex 已经发了最终回复，监听就结束了。
- 下一次需要继续自动处理时，再说一次：

```text
开始监听 Agentation，先处理 pending，再持续 watch
```

- 如果 MCP 工具不可用，先重启 Codex，让它重新读取 `~/.codex/config.toml`。
- Agentation 只在 development 环境下加载，所以需要使用 `npm run dev`。

## 检查命令

查看 Codex 是否配置了 Agentation MCP：

```bash
codex mcp list
```

预期能看到：

```text
agentation  npx  -y agentation-mcp server  enabled
```

检查本地 Agentation HTTP server 是否在运行：

```bash
lsof -nP -iTCP:4747 -sTCP:LISTEN
```
