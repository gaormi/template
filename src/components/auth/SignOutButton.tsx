"use client";

import { useRouter } from "next/navigation";
import Button from "~/components/ui/Button";
import { authClient } from "~/util/client/auth";

export default function SignOutButton({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <Button
      type="button"
      variant="outline"
      className={className}
      onClick={handleSignOut}
    >
      Sign out
    </Button>
  );
}
