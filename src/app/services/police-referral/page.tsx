import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=2200";
const OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=1600";
const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1600";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1400";
const REFERRAL_FORM_URL =
  "https://drive.google.com/file/d/1ANjUkPPAkhCrM39vhfTY-gy02MVIKVei/view?usp=drive_link";

const pageTitle = "Police Referral Mediation Program | FairField Center";
const pageDescription =
  "Police-referred mediation, conciliation, restorative justice, and listening sessions for eligible community conflicts in Virginia.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/services/police-referral",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/police-referral",
    images: [HERO_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [HERO_IMAGE],
  },
};

const quickFacts = [
  {
    label: "Free Resource",
    text: "No cost for officers or residents involved in the process.",
  },
  {
    label: "Program Window",
    text: "October 2024 - October 2027",
  },
  {
    label: "Grant Support",
    text: "Supported by Grant No. 15PBJA-24-GG-00236-BRND.",
  },
];

const overviewCards = [
  {
    title: "Officer Resource",
    text: "A strategic tool to de-escalate tension and reduce repeat calls without needing an arrest.",
    icon: ShieldIcon,
  },
  {
    title: "Community Support",
    text: "A safe, neutral space for residents to be heard and find lasting solutions to their disputes.",
    icon: CommunityIcon,
  },
];

const services = [
  {
    title: "Mediation",
    text: "Disputants sit together with a neutral mediator to resolve their issues through structured dialogue.",
    icon: DialogueIcon,
    tone: "red",
  },
  {
    title: "Conciliation",
    text: "A conciliator acts as a go-between to carry information and offers between disputants.",
    icon: ExchangeIcon,
    tone: "blue",
  },
  {
    title: "Restorative Justice",
    text: "Used when harm has occurred to support accountability and healing for all parties.",
    icon: RepairIcon,
    tone: "purple",
  },
  {
    title: "Conflict Exploration",
    text: "Disputants explore options with staff. Ideal when only one party is available.",
    icon: CompassIcon,
    tone: "green",
  },
  {
    title: "Listening Sessions",
    text: "A safe space for people to just be heard and voice concerns without judgment.",
    icon: ListenIcon,
    tone: "orange",
  },
];

const referralTypes = [
  "Noise",
  "Pets",
  "Respect",
  "Boundaries",
  "Communication",
];

const goals = [
  {
    title: "For Law Enforcement",
    items: [
      "Provide officers with an effective, no-cost resource to share with community members in conflict.",
      "Reduce repeated calls for service related to the same disputes.",
      "Free up officer time for cases that require direct intervention.",
    ],
  },
  {
    title: "For Community Members",
    items: [
      "Offer a free, confidential, and non-adversarial way to resolve disputes.",
      "Empower individuals to address and prevent ongoing conflicts.",
      "Promote accountability, communication, and healing within neighborhoods.",
    ],
  },
];

const partners = ["Virginia Tech Center for Peace Studies", "Resolution Virginia"];

export default function PoliceReferralPage() {
  return (
    <main className="bg-white text-neutral-800">
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-0 lg:pb-0">
        <Image
          src={HERO_IMAGE}
          alt="Hands joined in support"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-900/64 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-prm-950/50 via-transparent to-police-950/25" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/55 to-transparent" />

        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase text-prm-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-prm-300" />
                October 2024 - October 2027
              </p>
              <h1 className="mt-6 text-[2.25rem] font-medium leading-[1.08] text-white sm:text-[4.25rem] sm:leading-[1.05] md:text-[5.125rem]">
                Police-Referred{" "}
                <span className="font-serif italic text-prm-200">
                  Mediation Program
                </span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/82 sm:text-xl">
                A partnership between the FairField Center and local law
                enforcement agencies to resolve community conflicts through
                constructive dialogue.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={REFERRAL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-prm-800 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-prm-800/90 hover:text-white active:scale-[0.98]"
                >
                  Refer a Case
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="#program-details"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-[0.98]"
                >
                  Program Details
                </Link>
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-xs font-bold uppercase text-white/62">
                Supported by Grant No. 15PBJA-24-GG-00236-BRND - Bureau of
                Justice Assistance
              </p>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section className="border-y border-neutral-100 bg-white py-7">
        <Container>
          <div className="grid gap-5 text-center md:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-sm font-bold uppercase text-prm-800/75">
                  {fact.label}
                </p>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="program-details"
        className="relative overflow-hidden py-10 sm:py-20"
      >
        <GridBackdrop />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <AnimateIn animation="fade-right" className="h-full">
              <div className="relative h-full min-h-[440px] overflow-hidden rounded-[2.5rem] shadow-xl shadow-neutral-200/60">
                <Image
                  src={OVERVIEW_IMAGE}
                  alt="Mediator speaking with a participant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prm-950/70 via-prm-900/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/90 p-5 shadow-2xl backdrop-blur">
                  <p className="text-xs font-bold uppercase text-police-700">
                    Free Resource
                  </p>
                  <p className="mt-1 text-lg font-bold text-neutral-900">
                    No cost for officers or residents involved in the process.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={120} className="h-full">
              <div className="flex h-full flex-col justify-center">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-prm-800">
                  <span className="h-2 w-2 rounded-full bg-police-500" />
                  Program Overview
                </p>
                <h2 className="mt-4 text-4xl font-normal text-neutral-900 sm:text-[3.45rem]">
                  What is{" "}
                  <span className="font-semibold text-prm-800">
                    Police-Referred Mediation?
                  </span>
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  The Police-Referred Mediation Program (PRM) offers law
                  enforcement officers a free, community-based resource to help
                  residents resolve conflicts safely and constructively.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  When officers encounter non-violent situations where a
                  criminal charge isn't necessary, but conflict or tension
                  remains, they can refer the individuals involved to the
                  FairField Center.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  This initiative runs from October 2024 through October 2027
                  and is part of a national effort to strengthen relationships
                  between communities and law enforcement through dialogue and
                  peaceful problem-solving.
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {overviewCards.map((card, index) => (
              <AnimateIn
                key={card.title}
                animation="fade-up"
                delay={index * 100}
                className="flex"
              >
                <OverviewCard {...card} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-neutral-50 py-10 sm:py-20">
        <GridBackdrop />
        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-prm-800">
                <span className="h-2 w-2 rounded-full bg-prm-700" />
                How Mediation Helps
              </p>
              <h2 className="mt-4 text-4xl font-normal text-neutral-900 sm:text-[3.45rem]">
                Services &{" "}
                <span className="font-semibold text-prm-800">Solutions</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
                Our mediators and practitioners take the time needed to help
                participants get to the root causes of their conflict and work
                toward resolution.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimateIn
                key={service.title}
                animation="fade-up"
                delay={index * 80}
                className="flex"
              >
                <ServiceCard {...service} />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={160}>
            <div className="mt-10 rounded-[2.5rem] border border-neutral-100 bg-white p-7 shadow-sm shadow-police-100/50 sm:p-8">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-prm-800">
                <span className="h-2 w-2 rounded-full bg-police-500" />
                Common Referrals
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-500">
                Common referrals include issues between neighbors, family
                members, co-parents, or others involving:
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {referralTypes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-prm-200/70 bg-prm-50/70 px-4 py-2 text-sm font-bold text-prm-800 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section className="py-10 sm:py-20">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-prm-800">
                <span className="h-2 w-2 rounded-full bg-prm-700" />
                Program Goals
              </p>
              <h2 className="mt-4 text-4xl font-normal text-neutral-900 sm:text-[3.45rem]">
                A practical path for officers and{" "}
                <span className="font-semibold text-prm-800">
                  community members
                </span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-6 lg:grid-cols-2">
            {goals.map((group, index) => (
              <AnimateIn
                key={group.title}
                animation="fade-up"
                delay={index * 100}
              >
                <GoalCard {...group} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-prm-950 py-10 text-white sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <AnimateIn animation="fade-right">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-prm-100">
                  <span className="h-2 w-2 rounded-full bg-prm-300" />
                  Statewide Initiative
                </p>
                <h2 className="mt-4 text-4xl font-normal text-white sm:text-[3.45rem]">
                  Pilot Project Background
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  FairField Center is proud to be part of a federally funded
                  pilot project coordinated by Resolution Virginia. Secured by
                  U.S. Senators Mark R. Warner and Tim Kaine as part of the
                  fiscal 2024 appropriations bill, this initiative aims to
                  provide residents across Virginia with free access to
                  mediation and conflict resolution services.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                  The project's goal is to reduce reliance on police departments
                  and courts while decreasing levels of community violence. By
                  working with local law enforcement, we identify conflicts -
                  such as neighborhood disputes or domestic issues - that can be
                  resolved through early intervention rather than criminal
                  charges.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={120}>
              <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-xl shadow-prm-950/20">
                <Image
                  src={BACKGROUND_IMAGE}
                  alt="Community gathering outdoors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prm-950/80 via-prm-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/90 p-5 shadow-2xl backdrop-blur">
                  <p className="text-xs font-bold uppercase text-police-700">
                    Key Partners
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {partners.map((partner) => (
                      <span
                        key={partner}
                        className="rounded-full bg-police-50 px-3 py-1.5 text-sm font-bold text-police-700"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn animation="fade-up" delay={180}>
            <blockquote className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-white shadow-xl shadow-prm-950/20 backdrop-blur sm:p-10">
              <p className="font-serif text-2xl leading-snug text-white/86">
                "This project helps Virginians get easy access to justice... It
                provides a less adversarial, less formal, and more empowering
                way to resolve conflicts."
              </p>
              <p className="mt-6 text-sm font-bold uppercase text-prm-100">
                Christine Poulson Executive Director, Resolution Virginia
              </p>
            </blockquote>
          </AnimateIn>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-20">
        <Container>
          <div className="grid overflow-hidden rounded-[2.5rem] border border-neutral-100 bg-white shadow-xl shadow-police-100/60 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[320px] bg-prm-950">
              <Image
                src={CONTACT_IMAGE}
                alt="Community conversation around a table"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prm-950/70 via-prm-950/10 to-transparent" />
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-prm-800">
                <span className="h-2 w-2 rounded-full bg-police-500" />
                How Officers Can Refer a Case
              </p>
              <h2 className="mt-4 text-4xl font-normal text-neutral-900 sm:text-[3.45rem]">
                Download and complete the{" "}
                <span className="font-semibold text-prm-800">
                  fillable PDF referral form
                </span>{" "}
                to start the process.
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:prm@fairfieldcetner.org"
                  className="rounded-2xl border border-police-100 bg-neutral-50 p-5 transition-colors hover:border-police-300"
                >
                  <p className="text-xs font-bold uppercase text-neutral-400">
                    Email
                  </p>
                  <p className="mt-1 text-lg font-bold text-neutral-900">
                    prm@fairfieldcetner.org
                  </p>
                </a>
                <a
                  href="tel:+15404537560"
                  className="rounded-2xl border border-police-100 bg-neutral-50 p-5 transition-colors hover:border-police-300"
                >
                  <p className="text-xs font-bold uppercase text-neutral-400">
                    Phone
                  </p>
                  <p className="mt-1 text-lg font-bold text-neutral-900">
                    (540) 453-7560
                  </p>
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={REFERRAL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-prm-800 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-prm-900 active:scale-[0.98]"
                >
                  Download Referral Form
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-police-100 px-8 py-3.5 text-sm font-bold text-police-700 transition-all duration-300 hover:bg-police-50 active:scale-[0.98]"
                >
                  Connect With Us
                </Link>
              </div>

              <div className="mt-10 rounded-[2rem] border border-neutral-100 bg-neutral-50 p-5">
                <p className="text-xs font-bold uppercase text-neutral-500">
                  About Our Funding
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  This project is supported by Grant No.
                  15PBJA-24-GG-00236-BRND, awarded by the Bureau of Justice
                  Assistance (BJA), a component of the U.S. Department of
                  Justice's Office of Justice Programs.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  Points of view or opinions expressed here do not necessarily
                  represent the official position or policies of the U.S.
                  Department of Justice.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function GridBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-layout-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-layout-grid) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(circle at center, black, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
      }}
    />
  );
}

function OverviewCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: (props: { className?: string }) => React.ReactNode;
}) {
  return (
    <div className="group flex flex-1 flex-col rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-police-100/60 sm:p-8">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-police-100 text-police-600 transition-colors duration-300 group-hover:bg-police-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-500">{text}</p>
    </div>
  );
}

function ServiceCard({
  title,
  text,
  icon: Icon,
  tone,
}: {
  title: string;
  text: string;
  icon: (props: { className?: string }) => React.ReactNode;
  tone: string;
}) {
  const theme = {
    red: "bg-prm-100 text-prm-800 group-hover:bg-prm-800",
    blue: "bg-police-100 text-police-600 group-hover:bg-police-600",
    purple: "bg-rj-100 text-rj-600 group-hover:bg-rj-600",
    green: "bg-training-100 text-training-600 group-hover:bg-training-600",
    orange: "bg-coparent-100 text-coparent-600 group-hover:bg-coparent-600",
  }[tone];

  return (
    <div className="group flex flex-1 flex-col rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-police-100/50">
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white ${theme}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-500">{text}</p>
    </div>
  );
}

function GoalCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full rounded-[2.5rem] border border-neutral-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-police-100/60 sm:p-8">
      <p className="text-xs font-bold uppercase text-prm-800">
        {title}
      </p>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-prm-100 text-prm-800">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
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
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function CommunityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 12a6 6 0 0 1 12 0M19.5 10.5a2.25 2.25 0 1 1-3.1-2.08M4.5 10.5a2.25 2.25 0 1 0 3.1-2.08" />
    </svg>
  );
}

function DialogueIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 14.25H6l-3 3V6.75A2.25 2.25 0 0 1 5.25 4.5h9A2.25 2.25 0 0 1 16.5 6.75v5.25a2.25 2.25 0 0 1-2.25 2.25H7.5Zm3 3h6L21 21.75V10.5a2.25 2.25 0 0 0-2.25-2.25H18" />
    </svg>
  );
}

function ExchangeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 7.5h10.25L15 4.75m2.75 2.75L15 10.25M16.5 16.5H6.25L9 13.75M6.25 16.5 9 19.25" />
    </svg>
  );
}

function RepairIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 20s-7.5-4.5-7.5-10.1A4.1 4.1 0 0 1 12 7.65a4.1 4.1 0 0 1 7.5 2.25C19.5 15.5 12 20 12 20Zm-7.5-5.25 2.25 1.5m12.75-1.5-2.25 1.5" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

function ListenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.25 9.75a3.75 3.75 0 0 1 7.5 0c0 3-3.75 3.25-3.75 6.75m0 3h.01M4.5 10.5a7.5 7.5 0 1 1 15 0" />
    </svg>
  );
}
