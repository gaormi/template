"use client";

import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
import Toast from "~/components/Toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
        <Toast />
      </SWRConfig>
    </ThemeProvider>
  );
}
