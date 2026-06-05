import { headers } from "next/headers";
import { betterAuth } from "better-auth/minimal";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, magicLink } from "better-auth/plugins";
import { getPrisma } from "~/util/server/prisma";
import {
  buildMagicLinkEmail,
  buildVerificationEmail,
  sendAuthEmail,
} from "~/util/server/auth-email";
import { APP_NAME } from "~/components/const/constants";

type AuthUser = {
  email: string;
  emailVerified: boolean;
  role?: string | null;
};

export function getAuth() {
  return betterAuth({
    appName: APP_NAME,
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    database: prismaAdapter(getPrisma(), {
      provider: "postgresql",
    }),
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      },
    },
    emailVerification: {
      sendOnSignUp: true,
      autoSignInAfterVerification: true,
      async sendVerificationEmail({ user, url }) {
        const email = buildVerificationEmail(url);
        await sendAuthEmail({
          to: user.email,
          subject: email.subject,
          html: email.html,
          text: email.text,
        });
      },
    },
    databaseHooks: {
      user: {
        create: {
          async before(user) {
            if (isBootstrapAdminEmail(String(user.email))) {
              return {
                data: {
                  ...user,
                  role: "admin",
                },
              };
            }
          },
        },
      },
    },
    plugins: [
      admin(),
      magicLink({
        async sendMagicLink({ email, url }) {
          const message = buildMagicLinkEmail(url);
          await sendAuthEmail({
            to: email,
            subject: message.subject,
            html: message.html,
            text: message.text,
          });
        },
      }),
    ],
  });
}

export async function getServerSession() {
  const requestHeaders = new Headers(await headers());
  return getAuth().api.getSession({
    headers: requestHeaders,
  });
}

export function isBootstrapAdminEmail(email?: string | null) {
  if (!email) {
    return false;
  }

  return getAdminEmails().has(normalizeEmail(email));
}

export function isAuthorizedUser(user: AuthUser) {
  if (!user.emailVerified) {
    return false;
  }

  return (
    isBootstrapAdminEmail(user.email) ||
    hasRole(user.role, "admin") ||
    hasRole(user.role, "authorized")
  );
}

export function getAuthRedirect(user: AuthUser) {
  if (!user.emailVerified) {
    return "/auth/verify-email";
  }

  if (!isAuthorizedUser(user)) {
    return "/auth/pending";
  }

  return "/dashboard";
}

function getAdminEmails() {
  return new Set(
    (process.env.ADMIN_EMAILS || "")
      .split(",")
      .map((email) => normalizeEmail(email))
      .filter(Boolean),
  );
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function hasRole(role: string | null | undefined, expected: string) {
  return (role || "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .includes(expected);
}
