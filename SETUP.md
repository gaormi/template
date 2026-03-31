# Template Setup Guide

This is a **Next.js + Cloudflare Workers** template with Prisma (PostgreSQL), Tailwind CSS 4, SWR, and Zustand.

## Quick Start

```bash
yarn install
cp .env.example .env   # then fill in your DB credentials
npx prisma generate
yarn dev
```

---

## Placeholders to Fill In

### 1. App Constants

**File:** `src/components/const/constants.ts`

| Constant | What to set |
|---|---|
| `APP_URL` | Your production URL (e.g. `https://myapp.com`) |
| `APP_NAME` | Your app name |
| `APP_DESCRIPTION` | Short description for SEO/OG |
| `APP_OG_IMAGE_URL` | URL to your Open Graph image (1200x630). Add the image to `public/og.jpg` or use an external URL. |

### 2. Environment Variables

**File:** `.env` (copy from `.env.example`)

| Variable | What to set |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (with pooler, e.g. pgBouncer port 6543) |
| `DIRECT_URL` | Direct PostgreSQL connection string (for migrations, port 5432) |
| `ENCRYPTION_PASSWORD` | Password for server-side AES-256-GCM encryption (if using `encryption.ts`) |
| `ENCRYPTION_SALT` | Salt for encryption key derivation (if using `encryption.ts`) |

### 3. Package Name

**File:** `package.json`

Update `"name"` to your project name.

### 4. Cloudflare / Wrangler Config

**File:** `wrangler.json`

| Placeholder | What to set |
|---|---|
| `<YOUR_WORKER_NAME>` | Your Cloudflare Worker name (appears in `name` and `services[0].service` — must match) |
| `<YOUR_HYPERDRIVE_ID>` | Your Hyperdrive configuration ID (`wrangler hyperdrive create <name> --connection-string="..."`) |
| `<YOUR_LOCAL_DB_CONNECTION_STRING>` | Your local/dev database connection string |
| `<YOUR_R2_BUCKET_NAME>` | Your R2 bucket for Next.js incremental cache (`wrangler r2 bucket create <name>`) |

To add a custom domain, add a `routes` field:
```json
"routes": [{ "pattern": "myapp.com", "custom_domain": true }]
```

### 5. Prisma Schema

**File:** `prisma/schema.prisma`

The template includes a sample `User` model. Replace it with your own models, then run:
```bash
npx prisma generate
npx prisma db push        # or use migrations
```

### 6. PWA Manifest

**File:** `public/manifest.json`

Update `name`, `short_name`, `theme_color`, `background_color`, and `icons` to match your app.

### 7. Favicon & OG Image

Replace `public/favicon.ico` with your own icon. Optionally add `public/og.jpg` (1200x630) for Open Graph previews.

---

## Project Structure

```
src/
  app/
    app.tsx          # Main client component (your app goes here)
    page.tsx         # Next.js page with metadata
    layout.tsx       # Root layout with providers
    providers.tsx    # ThemeProvider, SWR, Toast
    globals.css      # Tailwind CSS + theme variables
  components/
    Toast.tsx        # Toast notification component
    state.tsx        # Zustand stores (useToast)
    const/
      constants.ts   # App-wide constants (URL, name, etc.)
      index.tsx      # Shared constants
    icons/
      icons.tsx      # SVG icon components (Star, Cross, Check, Warning, Arrow, Link)
      loading-dots.tsx
  util/
    client/
      useOnClickOutside.tsx  # Click-outside hook
      useIsScrollToEnd.ts    # Infinite scroll / scroll-end detection hook
    server/
      prisma.ts      # Prisma client setup (Cloudflare Hyperdrive compatible)
      encryption.ts  # AES-256-GCM encrypt/decrypt utility
prisma/
  schema.prisma      # Database schema
scripts/
  dev.js             # Dev server with localtunnel
  preview.js         # Cloudflare preview with localtunnel
```

## Available Scripts

| Script | Description |
|---|---|
| `yarn dev` | Start Next.js dev server |
| `yarn p` | Start dev server with localtunnel (for testing on other devices) |
| `yarn build` | Build for production |
| `yarn cb` | Build for Cloudflare |
| `yarn cp` | Build + preview on Cloudflare locally |
| `yarn deploy` | Build + deploy to Cloudflare |
| `yarn c` | Kill process on port 3000 |
| `yarn cc` | Kill process on port 8787 |

## Stack

- **Framework:** Next.js 16 (App Router)
- **Deployment:** Cloudflare Workers via OpenNext
- **Database:** PostgreSQL with Prisma (Cloudflare Hyperdrive for connection pooling)
- **Styling:** Tailwind CSS 4
- **State:** Zustand
- **Data Fetching:** SWR
- **Theme:** next-themes (dark mode)
- **Utilities:** use-debounce, use-local-storage-state
