import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Container from "~/components/layout/Container";
import SignOutButton from "~/components/auth/SignOutButton";
import {
  getAuthRedirect,
  getServerSession,
  isAuthorizedUser,
} from "~/util/server/auth";

export const metadata: Metadata = {
  title: "Pending approval | FairField Center",
  alternates: {
    canonical: "/auth/pending",
  },
};

export default async function PendingPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?callbackURL=/dashboard");
  }

  if (!session.user.emailVerified || isAuthorizedUser(session.user)) {
    redirect(getAuthRedirect(session.user));
  }

  return (
    <section className="bg-white pt-32 pb-20 dark:bg-neutral-950">
      <Container>
        <div className="mx-auto max-w-2xl rounded-lg border border-neutral-200 bg-white p-8 shadow-xl shadow-primary-950/5 dark:border-neutral-700 dark:bg-neutral-900">
          <p className="text-sm font-semibold uppercase text-training-600">
            Pending approval
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-950 dark:text-white">
            Your account is waiting for access
          </h1>
          <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            You are signed in as{" "}
            <span className="font-semibold">{session.user.email}</span>. An
            administrator must approve this account before dashboard access is
            available.
          </p>

          <div className="mt-7">
            <SignOutButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
