import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";
import MediationPathExplorer, { type MediationPath } from "./MediationPathExplorer";

type SearchParams = Promise<{
  type?: string | string[];
}>;

const HERO_IMAGE = "/photos/mediation.jpg";
const PROCESS_IMAGE =
  "https://images.unsplash.com/photo-1762341104168-63ddb56e9805?auto=format&fit=crop&q=80&w=1600";

const pageTitle = "Mediation Services in Virginia | FairField Center";
const pageDescription =
  "Confidential mediation for private disputes, court-referred matters, family conflicts, civil cases, and practical agreements in Virginia.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/services/mediation",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/mediation",
    images: [HERO_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [HERO_IMAGE],
  },
};

const valueCards = [
  {
    title: "Neutral & Impartial",
    text: "Mediators do not take sides. They structure a fair conversation so parties can clarify concerns and find common ground.",
    icon: BalanceIcon,
  },
  {
    title: "Confidential",
    text: "Mediation is private. Discussions, notes, and offers are legally protected and cannot be used in court if unresolved.",
    icon: LockIcon,
  },
  {
    title: "Practical",
    text: "The process helps people identify issues, consider options, and write agreements designed around real schedules and responsibilities.",
    icon: ClipboardCheckIcon,
  },
];

const journey = [
  {
    step: "01",
    title: "Intake & Screening",
    text: "Staff speak with each party individually to understand the issues, confirm willingness, and screen for safety and suitability.",
    card: "border-neutral-200 bg-white",
    label: "text-primary-600",
    badge: "bg-primary-100 text-primary-700",
  },
  {
    step: "02",
    title: "Orientation",
    text: "The mediator explains the process, confidentiality, ground rules, and the voluntary choice to continue.",
    card: "border-neutral-200 bg-white",
    label: "text-primary-600",
    badge: "bg-primary-100 text-primary-700",
  },
  {
    step: "03",
    title: "Joint Session",
    text: "Parties share perspectives, identify concerns, and may use private caucuses when separate conversations would help.",
    card: "border-neutral-200 bg-white",
    label: "text-primary-600",
    badge: "bg-primary-100 text-primary-700",
  },
  {
    step: "04",
    title: "Agreement Drafting",
    text: "When a resolution is reached, the mediator records the agreed points in a formal document for review and signing.",
    card: "border-neutral-200 bg-white",
    label: "text-primary-600",
    badge: "bg-primary-100 text-primary-700",
  },
  {
    step: "05",
    title: "Resolution",
    text: "Signed agreements can be implemented privately or, for court matters, submitted to the court as appropriate.",
    card: "border-neutral-200 bg-white",
    label: "text-primary-600",
    badge: "bg-primary-100 text-primary-700",
  },
];

function getInitialPath(type: string | string[] | undefined): MediationPath {
  const value = Array.isArray(type) ? type[0] : type;
  return value === "court" ? "court" : "private";
}

export default async function MediationPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const initialPath = getInitialPath(params.type);

  return (
    <main className="bg-white text-neutral-800">
      <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-20 lg:pb-16">
        <Image
          src={HERO_IMAGE}
          alt="Two people talking across a quiet table"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 via-transparent to-primary-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/55 to-transparent" />

        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-[11px] font-bold uppercase leading-relaxed text-primary-100 backdrop-blur sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-primary-300" />
                Conflict Resolution & Mediation Services
              </p>
              <h1 className="mt-6 text-[2.25rem] font-medium leading-[1.08] text-white sm:text-[4.25rem] sm:leading-[1.05] md:text-[5.125rem]">
                Professional mediation for{" "}
                <span className="font-serif italic text-primary-200">
                  private resolution
                </span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/82 sm:text-xl">
                FairField Center helps individuals, families, businesses, and
                court-referred parties resolve conflict through a confidential,
                neutral process focused on practical agreements.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="#choose-path"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary-600 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-primary-500/85 hover:text-white active:scale-[0.98]"
                >
                  View Private Packages
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services/mediation?type=court#choose-path"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-[0.98]"
                >
                  Court-Referred Cases
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section className="relative overflow-hidden py-10 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-layout-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-layout-grid) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-10 max-w-6xl text-center sm:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary-500">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                What Mediation Does
              </p>
              <h2 className="mt-5 text-3xl font-normal text-neutral-900 sm:text-[2.75rem]">
                A trained neutral mediator helps people{" "}
                <span className="font-semibold text-primary-500">
                  clarify issues and reach practical agreements.
                </span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {valueCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimateIn
                  key={item.title}
                  animation="fade-up"
                  delay={index * 100}
                  className="flex"
                >
                  <div className="flex flex-1 flex-col rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-200 transition-colors duration-300 hover:border-primary-200 hover:bg-primary-50 sm:p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      <MediationPathExplorer initialPath={initialPath} />

      <section id="how-it-works" className="bg-white py-10 sm:py-20">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mb-10 max-w-4xl sm:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary-500">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                The Process
              </p>
              <h2 className="mt-4 text-3xl font-normal text-neutral-900 sm:text-[2.75rem]">
                The 5-step{" "}
                <span className="font-semibold text-primary-500">
                  journey
                </span>
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
                A structured workflow designed for clarity, safety, and practical
                decision-making. Sessions may be held in person or by video
                conference.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up">
            <div className="relative min-h-[320px] overflow-hidden rounded-[2.5rem] shadow-lg shadow-neutral-200/60">
              <Image
                src={PROCESS_IMAGE}
                alt="A person taking notes on a clipboard"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-900/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 max-w-md text-white sm:bottom-8 sm:left-8">
                <p className="text-xs font-bold uppercase text-primary-100">
                  Initial step
                </p>
                <p className="mt-2 text-2xl font-bold leading-tight">
                  Intake, safety screening, and orientation
                </p>
              </div>
            </div>
          </AnimateIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((item, index) => {
              return (
                <AnimateIn
                  key={item.step}
                  animation="fade-up"
                  delay={index * 80}
                  className="flex"
                >
                  <div
                    className={`flex flex-1 flex-col rounded-[2rem] border p-5 shadow-sm shadow-neutral-200 transition-colors duration-300 hover:border-primary-200 hover:bg-primary-50 ${item.card}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-sm font-bold text-primary-700 ring-1 ring-primary-100">
                        {item.step}
                      </div>
                      <span className={`text-xs font-bold uppercase ${item.label}`}>
                        {index === 0 ? "Start here" : `Step ${item.step}`}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

    </main>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function BalanceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.9}
        d="M12 4v16m-6-3h12M7 7h10M7 7l-4 7h8L7 7Zm10 0-4 7h8l-4-7Z"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.9}
        d="M7 10V8a5 5 0 0 1 10 0v2m-9 0h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm4 4v2"
      />
    </svg>
  );
}

function ClipboardCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 5.25h6m-6 0A2.25 2.25 0 0 1 11.25 3h1.5A2.25 2.25 0 0 1 15 5.25m-6 0h-.75A2.25 2.25 0 0 0 6 7.5v11.25A2.25 2.25 0 0 0 8.25 21h7.5A2.25 2.25 0 0 0 18 18.75V7.5a2.25 2.25 0 0 0-2.25-2.25H15m-6.75 8.25 2.25 2.25 4.5-5"
      />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z"
      />
    </svg>
  );
}

function ConversationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7.5 14.25H6l-3 3V6.75A2.25 2.25 0 0 1 5.25 4.5h9A2.25 2.25 0 0 1 16.5 6.75v5.25a2.25 2.25 0 0 1-2.25 2.25H7.5Zm3 3h6L21 21.75V10.5a2.25 2.25 0 0 0-2.25-2.25H18"
      />
    </svg>
  );
}

function DocumentPenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M14.25 3.75H7.5A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18v-6.75m-4.5-7.5 4.5 4.5m-4.5-4.5v4.5h4.5M8.75 14.75l3.75-3.75 2 2-3.75 3.75H8.75v-2Z"
      />
    </svg>
  );
}

function SealCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="m12 3 2.1 2.25 3.04-.43.52 3.03 2.73 1.4-1.4 2.73.43 3.04-3.03.52-1.4 2.73-2.73-1.4-3.04.43-.52-3.03-2.73-1.4 1.4-2.73-.43-3.04 3.03-.52L12 3Zm-3 9 2 2 4-5"
      />
    </svg>
  );
}
