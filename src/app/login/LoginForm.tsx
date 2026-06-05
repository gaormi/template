"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";
import { authClient } from "~/util/client/auth";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackURL = useMemo(
    () => searchParams.get("callbackURL") || "/dashboard",
    [searchParams],
  );
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function continueWithGoogle() {
    setError("");
    const { data, error: signInError } = await authClient.signIn.social({
      provider: "google",
      callbackURL,
      newUserCallbackURL: callbackURL,
      errorCallbackURL: "/login",
    });

    if (signInError) {
      setError(signInError.message || "Google sign-in could not start.");
      return;
    }

    if (data?.url) {
      window.location.href = data.url;
    }
  }

  async function sendMagicLink(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("sending");

    const { error: magicLinkError } = await authClient.signIn.magicLink({
      email,
      callbackURL,
      newUserCallbackURL: callbackURL,
      errorCallbackURL: "/login",
    });

    if (magicLinkError) {
      setStatus("idle");
      setError(magicLinkError.message || "The magic link could not be sent.");
      return;
    }

    setStatus("sent");
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-xl shadow-primary-950/5 sm:p-8 dark:border-neutral-700 dark:bg-neutral-900">
      <div>
        <p className="text-sm font-semibold uppercase text-primary-600">
          Staff access
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-neutral-950 dark:text-white">
          Sign in to continue
        </h1>
        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
          Use a Google account or request a one-time link by email.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={continueWithGoogle}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 text-xs font-bold text-primary-600">
            G
          </span>
          Continue with Google
        </Button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
          <span className="text-xs font-medium uppercase text-neutral-400">
            or
          </span>
          <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
        </div>

        <form className="space-y-4" onSubmit={sendMagicLink}>
          <Input
            id="email"
            label="Email address"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
          />

          <Button
            type="submit"
            className="w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending link..." : "Send magic link"}
          </Button>
        </form>

        {status === "sent" && (
          <p className="rounded-lg bg-training-50 px-3 py-2 text-sm text-training-800 dark:bg-training-900/30 dark:text-training-100">
            Check your inbox for a secure sign-in link.
          </p>
        )}

        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
