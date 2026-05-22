import type { Metadata, Viewport } from "next";

import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

import "~/app/globals.css";
import { Providers } from "~/app/providers";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_URL,
  APP_OG_IMAGE_URL,
} from "~/components/const/constants";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  applicationName: APP_NAME,
  openGraph: {
    type: "website",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: APP_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [APP_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fira.variable} font-sans`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
