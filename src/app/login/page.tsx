import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import Container from "~/components/layout/Container";
import LoginForm from "~/app/login/LoginForm";
import { getAuthRedirect, getServerSession } from "~/util/server/auth";

export const metadata: Metadata = {
  title: "Sign in | FairField Center",
  alternates: {
    canonical: "/login",
  },
};

export default async function LoginPage() {
  const session = await getServerSession();

  if (session?.user) {
    redirect(getAuthRedirect(session.user));
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-training-50 pt-32 pb-20 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900">
      <Container>
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-700 dark:text-primary-300">
              FairField Center
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              Protected access for trusted staff and administrators.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
              New accounts can sign in, but dashboard access remains pending
              until the account is approved.
            </p>
          </div>

          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
