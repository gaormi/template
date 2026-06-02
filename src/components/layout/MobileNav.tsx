"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DONATION_URL } from "~/components/const/links";

interface NavLink {
  href: string;
  label: string;
}

const mobileThemes = {
  primary: {
    text: "text-primary-700 dark:text-primary-400",
    button: "bg-primary-600 hover:bg-primary-700",
  },
  training: {
    text: "text-training-700 dark:text-training-300",
    button: "bg-training-600 hover:bg-training-700",
  },
  restorativeJustice: {
    text: "text-rj-700 dark:text-rj-300",
    button: "bg-rj-600 hover:bg-rj-700",
  },
  policeReferral: {
    text: "text-prm-700 dark:text-prm-300",
    button: "bg-prm-600 hover:bg-prm-700",
  },
};

function getMobileTheme(pathname: string) {
  if (pathname.startsWith("/services/police-referral")) {
    return mobileThemes.policeReferral;
  }

  if (pathname.startsWith("/services/restorative-justice")) {
    return mobileThemes.restorativeJustice;
  }

  if (
    pathname.startsWith("/training") ||
    pathname.startsWith("/program") ||
    pathname.startsWith("/programs")
  ) {
    return mobileThemes.training;
  }

  return mobileThemes.primary;
}

export default function MobileNav({
  open,
  onClose,
  servicesLinks,
  programsLinks,
}: {
  open: boolean;
  onClose: () => void;
  servicesLinks: NavLink[];
  programsLinks: NavLink[];
}) {
  const pathname = usePathname();
  const theme = getMobileTheme(pathname);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 animate-[fade-in_180ms_ease-out] bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-[82vw] max-w-80 animate-[slide-in-right_220ms_cubic-bezier(0.22,1,0.36,1)] overflow-y-auto bg-white p-4 shadow-xl dark:bg-neutral-900">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative h-7 w-7 overflow-hidden rounded-full bg-white">
              <Image src="/logo.svg" alt="FairField Center" fill className="object-cover" />
            </span>
            <span className="text-base font-bold text-neutral-900 dark:text-neutral-100">
              FairField Center
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-0.5">
          <Link href="/" onClick={onClose} className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 ${theme.text}`}>
            Home
          </Link>
          <Link href="/about" onClick={onClose} className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 ${theme.text}`}>
            About Us
          </Link>

          {/* Services Section */}
          <div className="mt-1.5">
            <span className={`block px-3 py-1.5 text-sm font-semibold ${theme.text}`}>
              Services
            </span>
            <div className="ml-4 flex flex-col gap-0.5">
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs Section */}
          <div className="mt-1.5">
            <span className={`block px-3 py-1.5 text-sm font-semibold ${theme.text}`}>
              Programs
            </span>
            <div className="ml-4 flex flex-col gap-0.5">
              {programsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" onClick={onClose} className={`mt-1.5 rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 ${theme.text}`}>
            Contact
          </Link>

          <Link
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`mt-3 rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${theme.button}`}
          >
            Donate
          </Link>
        </nav>
      </div>
    </div>
  );
}
