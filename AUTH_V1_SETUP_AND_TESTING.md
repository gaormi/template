# Auth v1 Setup and Testing

This document lists the remaining setup and verification work for the Better Auth v1 implementation.

## Already Implemented

- Better Auth route at `/api/auth/[...all]`
- Login page at `/login`
- Protected dashboard at `/dashboard`
- Pending approval page at `/auth/pending`
- Email verification page at `/auth/verify-email`
- Google OAuth sign-in
- Email magic-link sign-in
- Cloudflare Email Service sender using the `EMAIL` binding
- Better Auth Prisma schema models
- `send_email` binding in `wrangler.json`

Committed in `2616787` with subject `Add Better Auth login flow`.

## Environment Variables

Configure these locally and in production:

```env
BETTER_AUTH_SECRET="generate-with-openssl-rand-base64-32"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
ADMIN_EMAILS="admin@fairfieldcenter.org"
AUTH_EMAIL_FROM="no-reply@fairfieldcenter.org"
DATABASE_URL="postgresql://user:password@host:6543/database?pgbouncer=true"
DIRECT_URL="postgresql://user:password@host:5432/database"
```

Use this to generate `BETTER_AUTH_SECRET`:

```bash
openssl rand -base64 32
```

For production, set:

```env
BETTER_AUTH_URL="https://fairfieldcenter.org"
AUTH_EMAIL_FROM="no-reply@fairfieldcenter.org"
```

`ADMIN_EMAILS` is the bootstrap admin list. Any matching verified email is allowed into `/dashboard`. Separate multiple emails with commas.

## Google OAuth Setup

In Google Cloud Console, configure these authorized redirect URIs:

```text
http://localhost:3000/api/auth/callback/google
https://fairfieldcenter.org/api/auth/callback/google
```

Also confirm the OAuth client ID and secret are set in the app environment:

```env
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

## Cloudflare Setup

Confirm these Cloudflare items before testing email auth:

- `fairfieldcenter.org` is onboarded to Cloudflare Email Service.
- `no-reply@fairfieldcenter.org` is allowed as a sender.
- Required SPF/DKIM records from Cloudflare Email Service are active.
- `wrangler.json` has the `send_email` binding named `EMAIL`.
- The `HYPERDRIVE` binding is configured before runtime auth testing.

The current Hyperdrive binding is:

```json
{
  "binding": "HYPERDRIVE",
  "id": "69e54062157a46d7b20d9794bcad18c5"
}
```

For local development, keep the direct database URL in the ignored local env file:

```env
CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_HYPERDRIVE="postgresql://..."
```

Current note: the installed Wrangler CLI did not support `wrangler email sending list`, so verify Email Service domain status in the Cloudflare Dashboard or with a newer Wrangler version.

## Database Setup

The Prisma schema now includes Better Auth tables:

- `user`
- `session`
- `account`
- `verification`

The generated Prisma Client is configured with `runtime = "nodejs"` and
`engineType = "client"`. This avoids the Cloudflare/WASM query compiler failing
to load during local Next.js development while still using the driver adapter
path required for Hyperdrive.

The initial migration has been created at:

```text
prisma/migrations/20260605000000_init_auth/migration.sql
```

It has been applied to the configured Supabase database. The current public tables are:

- `_prisma_migrations`
- `account`
- `session`
- `user`
- `verification`

If this schema is ever applied to another existing database, review the migration carefully because the starter `User` model was replaced by Better Auth's required `User` shape.

Recommended sequence:

```bash
yarn prisma generate
```

`yarn dev` and `yarn build` also run `prisma generate` automatically through
package scripts because `src/generated/prisma` is intentionally gitignored.

To verify migration status:

```bash
yarn prisma migrate status
```

## Local Testing

Run:

```bash
yarn dev
```

Manual checks:

1. Visit `/dashboard` while signed out. It should redirect to `/login?callbackURL=/dashboard`.
2. Sign in with a magic link using an email listed in `ADMIN_EMAILS`.
3. Confirm a real email is sent through Cloudflare Email Service.
4. Open the magic link. The user should land on `/dashboard`.
5. Sign out from the dashboard.
6. Visit `/dashboard` again. It should redirect back to `/login`.
7. Sign in with Google using an email listed in `ADMIN_EMAILS`. It should reach `/dashboard`.
8. Sign in with a verified non-admin email. It should land on `/auth/pending`.
9. If an account is unverified, it should land on `/auth/verify-email`.
10. Use the resend button on `/auth/verify-email` and confirm another verification email is sent.

## Troubleshooting

### Google sign-in returns 500

If the browser shows:

```text
POST /api/auth/sign-in/social 500
```

Check `.next/dev/logs/next-development.log` or the terminal running `yarn dev`.
If the error includes `PrismaClientInitializationError` and
`The loaded wasm module was unexpectedly undefined or null once loaded`, run:

```bash
yarn prisma generate
```

Then restart `yarn dev` and try Google sign-in again. A healthy first step
returns `200 OK` from `/api/auth/sign-in/social` and a Google OAuth URL using:

```text
http://localhost:3000/api/auth/callback/google
```

The browser `:4747/health` and `:4747/sessions` errors are from the local
Agentation feedback toolbar, not from Better Auth.

## Production Checks

Before deploy:

```bash
yarn build
yarn cb
```

After deploy:

1. Confirm `/login` loads on `https://fairfieldcenter.org`.
2. Confirm Google OAuth returns to `https://fairfieldcenter.org/api/auth/callback/google`.
3. Confirm magic-link emails are delivered from `no-reply@fairfieldcenter.org`.
4. Confirm `/dashboard` is blocked for signed-out users.
5. Confirm admin bootstrap through `ADMIN_EMAILS`.
6. Confirm non-admin users remain on `/auth/pending`.

## Known Operational Dependencies

- Database migration must be applied before real sign-in works. The current Supabase database is up to date as of the initial auth migration.
- Hyperdrive must be configured because runtime Prisma access uses `env.HYPERDRIVE.connectionString`.
- Cloudflare Email Service must be active for `fairfieldcenter.org`.
- Google OAuth redirect URIs must match the exact local and production URLs.
- The current v1 does not include a full admin user-management UI. Approval is handled by `ADMIN_EMAILS` and prepared role fields.
