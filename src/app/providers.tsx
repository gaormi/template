"use client";

import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
import { Agentation } from "agentation";
import Toast from "~/components/Toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <SWRConfig
        value={{
          errorRetryCount: 2,
          errorRetryInterval: 1000,
          revalidateOnFocus: false,
          revalidateOnReconnect: true,
          dedupingInterval: 2000,
        }}
      >
        {children}
        {process.env.NODE_ENV === "development" && (
          <Agentation endpoint="http://localhost:4747" />
        )}
        <Toast />
      </SWRConfig>
    </ThemeProvider>
  );
}
