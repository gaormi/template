# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router project targeting Cloudflare via OpenNext. Routes live in `src/app`; shared UI lives in `src/components`. Use `src/components/layout` for layout, `src/components/ui` for primitives, `src/components/const` for constants, and `src/util/client` or `src/util/server`.

Static assets live in `public`, including photos in `public/photos`. Prisma schema is in `prisma/schema.prisma`; Prisma v7 CLI config is in `prisma.config.ts`. Generated Prisma Client output goes to `src/generated/prisma`; regenerate it, do not edit it.

Project-scoped Codex MCP configuration lives in `.codex/config.toml`. It includes local Prisma MCP and official Cloudflare MCP servers.

## Build, Test, and Development Commands

- `yarn dev`: run the local Next.js development server with webpack.
- `yarn build`: create a production Next.js build.
- `yarn prisma generate`: regenerate Prisma Client after schema changes.
- `yarn migrate`: generate the initial migration SQL from `prisma/schema.prisma`.
- `yarn cb`: build for Cloudflare with OpenNext.
- `yarn cp`: build for Cloudflare and start the local preview script.
- `yarn deploy`: build and deploy with OpenNext Cloudflare.

There is no dedicated `test` script yet.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow existing formatting: two-space indentation, semicolons, double quotes, and `~/` imports for files under `src`.

Use PascalCase for component files, for example `Container.tsx`. Use camelCase for hooks/utilities, for example `useOnClickOutside.tsx`. Keep server-only utilities under `src/util/server`.

ESLint extends `next/core-web-vitals` and `next/typescript`; run `yarn build` before handoff to catch TypeScript and Next.js issues.

## Testing Guidelines

No test framework is configured yet. Verify changes with `yarn build` and focused manual checks. When tests are added, prefer colocated `*.test.ts`/`*.test.tsx` files and Playwright specs for auth and protected routes.

## Official Docs, MCP & Skills

Before changing `better-auth`, Prisma, Cloudflare, `zod`, `react-hook-form`, or `@hookform/resolvers`, check official docs first. For Better Auth, use `https://www.better-auth.com/docs`. Prefer configured MCP servers: `prisma-local` for Prisma, `cloudflare-docs`/`cloudflare-api` for Cloudflare. Cloudflare email work must use Cloudflare Email Service docs and the `cloudflare-email-service` skill.

## Commit & Pull Request Guidelines

Recent commits use imperative summaries, such as `Add production redirects and domain config`. Keep subjects concise, capitalized, and action-oriented.

Pull requests should include a description, changed routes/components, screenshots for UI changes, and notes about database, Prisma, Cloudflare, or env-var impacts. Link issues when available.

## Security & Configuration Tips

Do not commit `.env` files. Use `.env.example` for required names only. Prisma CLI URLs live in `prisma.config.ts`; runtime database access uses Cloudflare Hyperdrive in `src/util/server/prisma.ts`.
