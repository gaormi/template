"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { DONATION_URL } from "~/components/const/links";

const servicesLinks = [
  { href: "/services/mediation", label: "Mediation" },
  { href: "/services/police-referral", label: "Police Referral" },
  { href: "/services/restorative-justice", label: "Restorative Justice" },
];

const programsLinks = [
  { href: "/training", label: "Become a Mediator" },
  { href: "/training/ethics", label: "Ethics Workshop" },
  { href: "/training/co-parenting", label: "Co-Parenting Class" },
];

const navThemes = {
  primary: {
    nav: "border-primary-300/60 shadow-primary-200/20",
    cta: "bg-primary-500 hover:bg-primary-600",
    hover: "hover:text-primary-600",
    dropdown: "hover:bg-primary-50 hover:text-primary-700",
  },
  training: {
    nav: "border-training-300/70 shadow-training-200/20",
    cta: "bg-training-500 hover:bg-training-600",
    hover: "hover:text-training-600",
    dropdown: "hover:bg-training-50 hover:text-training-700",
  },
  restorativeJustice: {
    nav: "border-rj-300/70 shadow-rj-200/20",
    cta: "bg-rj-500 hover:bg-rj-600",
    hover: "hover:text-rj-600",
    dropdown: "hover:bg-rj-50 hover:text-rj-700",
  },
  policeReferral: {
    nav: "border-prm-300/70 shadow-prm-200/20",
    cta: "bg-prm-600 hover:bg-prm-700",
    hover: "hover:text-prm-600",
    dropdown: "hover:bg-prm-50 hover:text-prm-700",
  },
};

function getNavTheme(pathname: string) {
  if (pathname.startsWith("/services/police-referral")) {
    return navThemes.policeReferral;
  }

  if (pathname.startsWith("/services/restorative-justice")) {
    return navThemes.restorativeJustice;
  }

  if (
    pathname.startsWith("/training") ||
    pathname.startsWith("/program") ||
    pathname.startsWith("/programs")
  ) {
    return navThemes.training;
  }

  return navThemes.primary;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navTheme = getNavTheme(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <nav className={`nav-glass mx-auto max-w-6xl rounded-full border bg-white/70 p-2 shadow-lg backdrop-blur-2xl backdrop-saturate-150 ${navTheme.nav}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="relative h-9 w-9 overflow-hidden rounded-full bg-white/80">
              <Image src="/logo.svg" alt="FairField Center" fill className="object-cover" />
            </span>
            <span className="text-base font-bold text-neutral-800 sm:text-lg lg:text-xl">
              FairField Center
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden items-center gap-0.5 lg:flex">
            <NavLink href="/" hoverClass={navTheme.hover}>Home</NavLink>
            <NavLink href="/about" hoverClass={navTheme.hover}>About Us</NavLink>

            {/* Services Dropdown */}
            <div className="group relative">
              <NavLabel chevron hoverClass={navTheme.hover}>Services</NavLabel>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="min-w-52 overflow-hidden rounded-xl border border-white/40 bg-white/70 p-1.5 shadow-xl backdrop-blur-2xl backdrop-saturate-150">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-4 py-2.5 text-sm text-neutral-700 transition-colors ${navTheme.dropdown}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="group relative">
              <NavLabel chevron hoverClass={navTheme.hover}>Programs</NavLabel>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="min-w-52 overflow-hidden rounded-xl border border-white/40 bg-white/70 p-1.5 shadow-xl backdrop-blur-2xl backdrop-saturate-150">
                  {programsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-4 py-2.5 text-sm text-neutral-700 transition-colors ${navTheme.dropdown}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/contact" hoverClass={navTheme.hover}>Contact</NavLink>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors sm:block md:px-5 ${navTheme.cta}`}
            >
              Donate
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-neutral-600 hover:bg-black/5 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        servicesLinks={servicesLinks}
        programsLinks={programsLinks}
      />
    </header>
  );
}

/* Clickable nav link (for Home, About, Contact) */
function NavLink({
  href,
  children,
  hoverClass,
}: {
  href: string;
  children: React.ReactNode;
  hoverClass: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors ${hoverClass}`}
    >
      {children}
    </Link>
  );
}

/* Non-clickable nav label (for Services, Programs — no link) */
function NavLabel({
  children,
  chevron,
  hoverClass,
}: {
  children: React.ReactNode;
  chevron?: boolean;
  hoverClass: string;
}) {
  return (
    <span className={`flex cursor-default items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors ${hoverClass}`}>
      {children}
      {chevron && (
        <svg className="h-3.5 w-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </span>
  );
}
