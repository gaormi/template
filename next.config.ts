import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", ".prisma/client", "@prisma/adapter-pg"],
  async redirects() {
    return [
      {
        source: "/mediation",
        destination: "/services/mediation",
        permanent: true,
      },
      {
        source: "/mediation/:path*",
        destination: "/services/mediation",
        permanent: true,
      },
      {
        source: "/conflict-resolution",
        destination: "/services/mediation",
        permanent: true,
      },
      {
        source: "/conflict-resolution/:path*",
        destination: "/services/mediation",
        permanent: true,
      },
      {
        source: "/prm",
        destination: "/services/police-referral",
        permanent: true,
      },
      {
        source: "/prm/:path*",
        destination: "/services/police-referral",
        permanent: true,
      },
      {
        source: "/restorative-justice",
        destination: "/services/restorative-justice",
        permanent: true,
      },
      {
        source: "/restorative-justice/:path*",
        destination: "/services/restorative-justice",
        permanent: true,
      },
      {
        source: "/training/parenting-workshops",
        destination: "/training/co-parenting",
        permanent: true,
      },
      {
        source: "/training/parenting-workshops/:path*",
        destination: "/training/co-parenting",
        permanent: true,
      },
      {
        source: "/training/mediation-ethics",
        destination: "/training/ethics",
        permanent: true,
      },
      {
        source: "/training/mediation-ethics/:path*",
        destination: "/training/ethics",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/:path*",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
