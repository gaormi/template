import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Container from "~/components/layout/Container";
import SignOutButton from "~/components/auth/SignOutButton";
import ResendVerificationButton from "~/app/auth/verify-email/ResendVerificationButton";
import {
  getAuthRedirect,
  getServerSession,
  isAuthorizedUser,
} from "~/util/server/auth";

export const metadata: Metadata = {
  title: "Verify email | FairField Center",
  alternates: {
    canonical: "/auth/verify-email",
  },
};

export default async function VerifyEmailPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?callbackURL=/dashboard");
  }

  if (session.user.emailVerified) {
    redirect(isAuthorizedUser(session.user) ? "/dashboard" : getAuthRedirect(session.user));
  }

  return (
    <section className="bg-white pt-32 pb-20 dark:bg-neutral-950">
      <Container>
        <div className="mx-auto max-w-2xl rounded-lg border border-neutral-200 bg-white p-8 shadow-xl shadow-primary-950/5 dark:border-neutral-700 dark:bg-neutral-900">
          <p className="text-sm font-semibold uppercase text-primary-600">
            Email verification
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-950 dark:text-white">
            Check your inbox
          </h1>
          <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            Verify <span className="font-semibold">{session.user.email}</span>{" "}
            before accessing the dashboard.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ResendVerificationButton email={session.user.email} />
            <SignOutButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
