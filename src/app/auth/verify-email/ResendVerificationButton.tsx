"use client";

import { useState } from "react";
import Button from "~/components/ui/Button";
import { authClient } from "~/util/client/auth";

export default function ResendVerificationButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function resend() {
    setError("");
    setStatus("sending");

    const { error: resendError } = await authClient.sendVerificationEmail({
      email,
      callbackURL: "/dashboard",
    });

    if (resendError) {
      setStatus("idle");
      setError(resendError.message || "The verification email could not be sent.");
      return;
    }

    setStatus("sent");
  }

  return (
    <div className="space-y-3">
      <Button
        type="button"
        onClick={resend}
        disabled={status === "sending" || status === "sent"}
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
            ? "Email sent"
            : "Send verification email"}
      </Button>

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </p>
      )}
    </div>
  );
}
