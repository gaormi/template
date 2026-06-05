import { getCloudflareContext } from "@opennextjs/cloudflare";
import { APP_NAME } from "~/components/const/constants";

type AuthEmail = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

const DEFAULT_FROM = "no-reply@fairfieldcenter.org";

export async function sendAuthEmail({ to, subject, html, text }: AuthEmail) {
  const { env, ctx } = await getCloudflareContext({ async: true });
  const from = process.env.AUTH_EMAIL_FROM || DEFAULT_FROM;

  if (!env.EMAIL) {
    throw new Error("Cloudflare Email Service binding EMAIL is not configured.");
  }

  const send = env.EMAIL.send({
    to,
    from: { email: from, name: APP_NAME },
    subject,
    html,
    text,
  });

  ctx.waitUntil(send);
  await send;
}

export function buildMagicLinkEmail(url: string) {
  const subject = `Sign in to ${APP_NAME}`;
  const text = [
    `Use this secure link to sign in to ${APP_NAME}:`,
    "",
    url,
    "",
    "If you did not request this email, you can ignore it.",
  ].join("\n");

  return {
    subject,
    text,
    html: authEmailHtml({
      eyebrow: "Secure sign in",
      title: `Sign in to ${APP_NAME}`,
      body: "Use the button below to finish signing in. This link expires soon and can only be used once.",
      buttonLabel: "Sign in",
      url,
    }),
  };
}

export function buildVerificationEmail(url: string) {
  const subject = `Verify your ${APP_NAME} email`;
  const text = [
    `Verify your email address for ${APP_NAME}:`,
    "",
    url,
    "",
    "If you did not create this account, you can ignore this email.",
  ].join("\n");

  return {
    subject,
    text,
    html: authEmailHtml({
      eyebrow: "Email verification",
      title: "Verify your email address",
      body: "Confirm this address before accessing protected FairField Center tools.",
      buttonLabel: "Verify email",
      url,
    }),
  };
}

function authEmailHtml({
  eyebrow,
  title,
  body,
  buttonLabel,
  url,
}: {
  eyebrow: string;
  title: string;
  body: string;
  buttonLabel: string;
  url: string;
}) {
  const safeUrl = escapeHtml(url);

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f5f7fb;color:#171717;font-family:Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f7fb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:32px;">
            <tr>
              <td>
                <p style="margin:0 0 12px;color:#2272b8;font-size:13px;font-weight:700;text-transform:uppercase;">${escapeHtml(eyebrow)}</p>
                <h1 style="margin:0 0 16px;color:#111827;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
                <p style="margin:0 0 24px;color:#4b5563;font-size:16px;line-height:1.6;">${escapeHtml(body)}</p>
                <p style="margin:0 0 24px;">
                  <a href="${safeUrl}" style="display:inline-block;background:#2984d1;color:#ffffff;text-decoration:none;border-radius:8px;padding:12px 18px;font-weight:700;">${escapeHtml(buttonLabel)}</a>
                </p>
                <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6;">If the button does not work, copy and paste this link into your browser:<br><a href="${safeUrl}" style="color:#2272b8;word-break:break-all;">${safeUrl}</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
