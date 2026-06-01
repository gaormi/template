import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";

const pageTitle = "Mediation Ethics Workshop | Fairfield Center";
const pageDescription =
  "Fairfield Center's online Mediation Ethics workshop reviews Virginia mediator ethics, VA Code connections, UPL issues, and the mediator complaint process.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/training/ethics",
  },
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2200";
const DISCUSSION_IMAGE =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1400";

const courseFacts = [
  {
    label: "Credits",
    value: "2 Ethics credits",
    detail:
      "Approved by the Office of the Executive Secretary of the Supreme Court of Virginia.",
    icon: AwardIcon,
  },
  {
    label: "Time",
    value: "3:00 PM - 5:00 PM",
    detail: "Interactive session with group scenario discussion.",
    icon: ClockIcon,
  },
  {
    label: "Mode",
    value: "Interactive Zoom",
    detail: "Camera, microphone, and secure internet connection required.",
    icon: MonitorIcon,
  },
  {
    label: "Price",
    value: "$70",
    detail: "Registration is handled through Fairfield Center's training portal.",
    icon: TagIcon,
  },
];

const dates = [
  {
    date: "June 24, 2026",
    url: "https://www.vistashare.com/forms/v2/intake/56b2bc27a4c944bab2c19d7f035eb41b/",
  },
  {
    date: "August 19, 2026",
    url: "https://www.vistashare.com/forms/v2/intake/56a7372eeeed4244897bb0305a95de74/",
  },
  {
    date: "September 23, 2026",
    url: "https://www.vistashare.com/forms/v2/intake/f608f0b65d1e427b85eeb2b6c7d2db46/",
  },
  {
    date: "October 28, 2026",
    url: "https://www.vistashare.com/forms/v2/intake/1c84c8e258634be48d5964c35606c8a5/",
  },
];

const topics = [
  {
    title: "Virginia Standards of Ethics",
    text: "Review key mediator ethics areas in a practical format designed for active discussion.",
  },
  {
    title: "VA Code & UPL",
    text: "Connect ethics questions to areas within the Virginia Code and Unauthorized Practice of Law concerns.",
  },
  {
    title: "Complaint Process",
    text: "Work through group scenarios touching on the mediator complaint process.",
  },
];

const policies = [
  "Participants need a computer with camera and microphone, plus a strong and secure internet connection.",
  "Missing any portion of the training may affect whether a completion certificate can be issued.",
  "Missed time must be approved by Fairfield Center. If make-up time is possible outside class, one-on-one instructor time is billed at $75 per hour.",
  "OES approval does not by itself guarantee successful completion for mediator certification purposes.",
];

export default function EthicsTrainingPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-0 lg:pb-0">
        <Image
          src={HERO_IMAGE}
          alt="People discussing professional ethics around a meeting table"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-900/62 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-training-900/55 via-training-900/12 to-primary-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/55 to-transparent" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <AnimateIn animation="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase text-training-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-training-300" />
                Mediator Ethics Workshop
              </span>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={100}>
              <h1 className="mt-6 text-[2.25rem] font-normal leading-[1.08] text-white sm:text-[4.15rem] sm:leading-[1.05] md:text-[4.85rem]">
                Mediation ethics,{" "}
                <span className="font-serif italic text-training-200">
                  applied.
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={200}>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/82 sm:text-xl">
                A live online workshop for mediators reviewing Virginia
                Standards of Ethics, VA Code connections, UPL concerns, and
                practical complaint-process scenarios.
              </p>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={300}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#dates"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-training-700 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-training-500/85 hover:text-white active:scale-[0.98]"
                >
                  Register for a Date
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/training"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 active:scale-[0.98]"
                >
                  Back to Training
                </Link>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-10 sm:py-20">
        <GridBackdrop />
        <Container className="relative z-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courseFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <AnimateIn key={fact.label} animation="fade-up" delay={index * 70}>
                  <div className="flex h-full flex-col rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm shadow-neutral-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-training-200 hover:bg-training-50/30 sm:p-7">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-training-100 text-training-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-bold uppercase text-neutral-400">
                      {fact.label}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold leading-tight text-neutral-950">
                      {fact.value}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {fact.detail}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-10 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <AnimateIn animation="fade-right" className="h-full">
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] bg-neutral-200 shadow-xl shadow-neutral-200/70 sm:rounded-[2.5rem] lg:min-h-0">
                <Image
                  src={DISCUSSION_IMAGE}
                  alt="A facilitator leading a professional discussion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-training-900/70 via-training-900/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase text-training-100">
                    Live Scenario Discussion
                  </p>
                  <p className="mt-2 max-w-lg text-xl font-semibold leading-snug text-white sm:text-2xl">
                    Ethics questions are easier to remember when they are tied
                    to real mediation choices.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={120}>
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase text-training-600">
                  <span className="h-2 w-2 rounded-full bg-training-500" />
                  About the Session
                </span>
                <h2 className="mt-4 text-3xl font-normal leading-tight text-neutral-950 sm:text-[3.1rem]">
                  A practical review of{" "}
                  <span className="font-semibold text-training-500">
                    mediator duties.
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  This online workshop uses a focused review and group
                  discussion format to connect ethics standards with legal
                  boundaries and complaint-process issues Virginia mediators
                  may encounter.
                </p>

                <div className="mt-8 grid gap-4">
                  {topics.map((topic) => (
                    <div
                      key={topic.title}
                      className="rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm shadow-neutral-200/40"
                    >
                      <h3 className="text-lg font-semibold leading-7 text-neutral-950">
                        {topic.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {topic.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section id="dates" className="scroll-mt-24 py-10 sm:py-20">
        <Container>
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
            <AnimateIn animation="fade-right">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase text-training-600">
                  <span className="h-2 w-2 rounded-full bg-training-500" />
                  Upcoming Dates
                </span>
                <h2 className="mt-3 text-3xl font-normal leading-tight text-neutral-950 sm:text-[3.1rem]">
                  2026 ethics sessions
                </h2>
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-left" delay={80}>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-600 lg:ml-auto">
                These are the future 2026 sessions listed by Fairfield Center
                as of June 1, 2026. Each session uses the same online format
                and listed time.
              </p>
            </AnimateIn>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dates.map((session, index) => (
              <AnimateIn key={session.date} animation="fade-up" delay={index * 80}>
                <a
                  href={session.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm shadow-neutral-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-training-200 hover:bg-training-50/35"
                >
                  <span className="text-xs font-bold uppercase text-training-600">
                    Register
                  </span>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-neutral-950 sm:text-2xl">
                    {session.date}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-neutral-500">
                    3:00 PM - 5:00 PM
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-bold text-training-700">
                    Open registration
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-training-50/45 py-10 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <AnimateIn animation="fade-right">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase text-training-700">
                  <span className="h-2 w-2 rounded-full bg-training-500" />
                  Requirements & Policies
                </span>
                <h2 className="mt-4 text-3xl font-normal leading-tight text-neutral-950 sm:text-[3.1rem]">
                  Prepare before class.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600">
                  The course is online and attendance-sensitive. Review the
                  requirements before registering so your certificate is not at
                  risk.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={120}>
              <ol className="relative border-l border-training-100">
                {policies.map((policy, index) => (
                  <li
                    key={policy}
                    className="relative mb-7 border-b border-training-100/80 pb-7 pl-8 last:mb-0 last:border-b-0 last:pb-0 sm:pl-10"
                  >
                    <span className="absolute -left-[1.125rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-training-100 bg-white text-xs font-bold text-training-700 shadow-sm shadow-training-100/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold leading-relaxed text-neutral-700 sm:text-base">
                      {policy}
                    </p>
                  </li>
                ))}
              </ol>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <div className="grid gap-6 rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-xl shadow-neutral-200/50 sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-training-600">
                Questions before registering?
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">
                Contact the training team.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                Use the training support email for course questions,
                cancellation needs, or registration help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="mailto:trainingsupport@fairfieldcenter.org"
                className="inline-flex items-center justify-center rounded-full bg-training-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-training-700"
              >
                trainingsupport@fairfieldcenter.org
              </a>
              <a
                href="#dates"
                className="inline-flex items-center justify-center rounded-full border border-training-200 bg-training-50 px-5 py-3 text-sm font-bold text-training-700 transition-colors hover:bg-training-100"
              >
                Register
              </a>
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
          "linear-gradient(to right, var(--color-training-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-training-grid) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(circle at center, black, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
      }}
    />
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0019.875 10.875 3.375 3.375 0 0016.5 7.5h-9a3.375 3.375 0 00-3.375 3.375A3.375 3.375 0 007.5 14.25v4.5m4.5-15v3.75" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 17.25h6M8.25 21h7.5M3.75 4.5h16.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H3.75A.75.75 0 013 15.75V5.25a.75.75 0 01.75-.75z" />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l8.432 8.432a2.25 2.25 0 003.182 0l4.318-4.318a2.25 2.25 0 000-3.182L11.159 3.659A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}
