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
  title: "Dashboard | FairField Center",
  alternates: {
    canonical: "/dashboard",
  },
};

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?callbackURL=/dashboard");
  }

  if (!session.user.emailVerified || !isAuthorizedUser(session.user)) {
    redirect(getAuthRedirect(session.user));
  }

  return (
    <section className="bg-neutral-50 pt-32 pb-20 dark:bg-neutral-950">
      <Container>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-600">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-neutral-950 dark:text-white">
              FairField Center
            </h1>
          </div>
          <SignOutButton />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Signed in as
            </p>
            <p className="mt-2 break-words text-base font-semibold text-neutral-950 dark:text-white">
              {session.user.email}
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Email status
            </p>
            <p className="mt-2 text-base font-semibold text-training-700 dark:text-training-300">
              Verified
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Access level
            </p>
            <p className="mt-2 text-base font-semibold text-primary-700 dark:text-primary-300">
              {session.user.role || "Bootstrap admin"}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
