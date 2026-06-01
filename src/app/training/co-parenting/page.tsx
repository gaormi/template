import type { Metadata } from "next";
import Image from "next/image";

import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";
import Button from "~/components/ui/Button";

const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/meeting-in-the-middle-positive-parenting-in-two-households-online-tickets-1975146673871";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=2200";
const REGISTRATION_IMAGE =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=900";

const courseDetails = [
  { label: "Format", value: "Online through Zoom" },
  { label: "Time", value: "9:00 AM - 1:00 PM ET" },
  { label: "Ticket Price", value: "$50 standard / $30 reduced fee" },
  { label: "Schedule", value: "Current dates and availability on Eventbrite" },
];

const registrationFacts = [
  {
    title: "Live schedule",
    detail: "Current class dates and availability are maintained on Eventbrite.",
  },
  {
    title: "Online format",
    detail: "Each class is held online through Zoom from 9:00 AM - 1:00 PM ET.",
  },
  {
    title: "Ticket options",
    detail: "$50 standard tickets and $30 reduced-fee tickets are available there.",
  },
];

const topicCards = [
  {
    title: "Developmental stages of children",
    description:
      "Understand age-appropriate needs as children adjust between households.",
    tag: "Child focus",
    bg: "bg-cert-jdr-bg",
    dot: "bg-cert-jdr-dot",
    text: "text-cert-jdr-text",
  },
  {
    title: "Options for dealing with conflict",
    description:
      "Consider practical choices that lower intensity and keep children out of the middle.",
    tag: "Conflict tools",
    bg: "bg-cert-gdc-bg",
    dot: "bg-cert-gdc-dot",
    text: "text-cert-gdc-text",
  },
  {
    title: "Improving communication skills",
    description:
      "Build clearer exchanges around schedules, decisions, and shared expectations.",
    tag: "Communication",
    bg: "bg-cert-ccc-bg",
    dot: "bg-cert-ccc-dot",
    text: "text-cert-ccc-text",
  },
  {
    title: "Co-parenting and parallel parenting",
    description:
      "Compare cooperative and lower-contact approaches for parenting in two homes.",
    tag: "Two homes",
    bg: "bg-cert-ccf-bg",
    dot: "bg-cert-ccf-dot",
    text: "text-cert-ccf-text",
  },
];

const faqs = [
  {
    question: "Why should I take this class?",
    answer:
      "Parenting children in two households can add unexpected and difficult dynamics. The class supports communication, understanding, and healthy conflict resolution.",
  },
  {
    question: "What do I need to attend?",
    answer:
      "Use an internet-enabled device that can run Zoom with audio and video. Participants should be visible online for identity verification and ready to take part with limited distractions.",
  },
  {
    question: "What about the other parent?",
    answer:
      "Fairfield strongly recommends that both parents attend. During registration, you will be asked whether you want to attend with the other parent.",
  },
  {
    question: "Who should attend?",
    answer:
      "Anyone with custody of a child is encouraged to attend, including parents, caregivers, grandparents, stepparents, and other involved parties.",
  },
];

export const metadata: Metadata = {
  title: "Co-Parenting Class | Meeting in the Middle | Fairfield Center",
  description:
    "Court-approved online co-parenting class for parents and caregivers raising children in two households.",
  alternates: {
    canonical: "/training/co-parenting",
  },
  openGraph: {
    title: "Meeting in the Middle: Positive Parenting in Two Households",
    description:
      "Court-approved online co-parenting class focused on communication, conflict resolution, and parenting across two households.",
    images: [HERO_IMAGE],
  },
};

function CalendarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3v3M17 3v3M4.5 9.5h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12 4.2 4.2L19 6.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CoParentingPage() {
  return (
    <main className="overflow-hidden bg-[#f5f8ee] text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <section className="relative border-b border-training-200/70 bg-[#f5f8ee] pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 dark:border-white/10 dark:bg-neutral-950">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="A parent and child spending quiet time together"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/88 via-neutral-950/58 to-neutral-950/20" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#f5f8ee] via-[#f5f8ee]/86 to-transparent dark:from-neutral-950 dark:via-neutral-950/82" />
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <AnimateIn className="max-w-3xl pt-8 text-white">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase text-training-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-coparent-400" />
                Co-parenting class
              </p>
              <h1 className="max-w-4xl text-balance text-5xl font-normal leading-[1.03] sm:text-6xl lg:text-[4.85rem]">
                Meeting in the{" "}
                <span className="font-serif italic text-training-100">
                  Middle
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-xl font-medium leading-relaxed text-white/86 sm:text-2xl">
                Positive Parenting in Two Households
              </p>
              <div className="mt-5 h-1.5 w-24 rounded-full bg-coparent-400" />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
                A court-approved online class for parents and caregivers
                raising children in different homes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={EVENTBRITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  className="rounded-full bg-training-600 text-white hover:bg-training-700 focus-visible:ring-training-300"
                >
                  Register on Eventbrite
                  <ArrowRightIcon />
                </Button>
                <Button
                  href="#registration"
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/18 focus-visible:ring-white"
                >
                  View Registration
                </Button>
              </div>
              <dl className="mt-8 grid gap-3 sm:grid-cols-3 lg:hidden">
                {courseDetails.slice(0, 3).map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl border border-white/20 bg-white/12 p-4 backdrop-blur"
                  >
                    <dt className="text-xs font-bold uppercase text-training-100">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-white">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </AnimateIn>

            <AnimateIn delay={120} animation="fade-left" className="hidden lg:block">
              <div className="overflow-hidden rounded-[2rem] border border-white/22 bg-white/92 shadow-2xl shadow-neutral-950/24 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/88">
                <div className="border-b border-training-100 bg-training-50 p-6 dark:border-white/10 dark:bg-training-900/18">
                  <p className="text-sm font-bold uppercase text-training-700 dark:text-training-200">
                    Live registration
                  </p>
                  <div className="mt-4 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-training-600 text-white">
                      <CalendarIcon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-neutral-950 dark:text-white">
                        Current dates on Eventbrite
                      </p>
                      <p className="mt-1 text-sm font-semibold text-neutral-600 dark:text-neutral-300">
                        See available sessions, tickets, and checkout details.
                      </p>
                    </div>
                  </div>
                </div>
                <dl className="divide-y divide-neutral-200 dark:divide-white/10">
                  {courseDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="grid grid-cols-[112px_minmax(0,1fr)] gap-4 px-6 py-5"
                    >
                      <dt className="text-sm font-bold uppercase text-training-700 dark:text-training-200">
                        {detail.label}
                      </dt>
                      <dd className="text-base font-semibold leading-6 text-neutral-800 dark:text-neutral-100">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section id="registration" className="bg-[#f5f8ee] py-20 dark:bg-neutral-950">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <AnimateIn className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-training-700 dark:text-training-200">
                <span className="h-2 w-2 rounded-full bg-training-500" />
                Registration
              </p>
              <h2 className="mt-3 text-3xl font-normal leading-tight text-neutral-950 sm:text-[3.1rem] dark:text-white">
                Use Eventbrite for the{" "}
                <span className="font-semibold text-training-600 dark:text-training-200">
                  live schedule.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
                Class dates and ticket availability change over time, so this
                page sends families to the active registration page instead of
                duplicating a schedule that can go stale.
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <ol className="relative border-l border-training-100 dark:border-white/10">
                {registrationFacts.map((fact, index) => (
                  <li
                    key={fact.title}
                    className="relative mb-7 border-b border-training-100 pb-7 pl-8 last:mb-0 last:border-b-0 last:pb-0 sm:pl-10 dark:border-white/10"
                  >
                    <span className="absolute -left-[1.125rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-training-100 bg-white text-xs font-bold text-training-600 shadow-sm shadow-training-100/50 dark:border-white/10 dark:bg-neutral-900 dark:text-training-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold leading-7 text-neutral-950 dark:text-white">
                      {fact.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
                      {fact.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-neutral-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(220px,0.68fr)_minmax(0,1.32fr)] lg:items-start xl:gap-16">
            <AnimateIn className="max-w-md">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-training-700 dark:text-training-200">
                <span className="h-2 w-2 rounded-full bg-training-500" />
                What it covers
              </p>
              <h2 className="mt-3 text-3xl font-normal leading-tight text-neutral-950 sm:text-[3.1rem] dark:text-white">
                Skills for{" "}
                <span className="font-semibold text-training-600 dark:text-training-200">
                  two-household parenting.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
                The class focuses on co-parenting through separation and
                divorce, with practical discussion for parents and caregivers
                making decisions across different homes.
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="grid gap-4 sm:gap-6 lg:auto-rows-fr lg:grid-cols-2">
                {topicCards.map((topic) => (
                  <div
                    key={topic.title}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] ${topic.bg} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-7`}
                  >
                    <div className="relative z-10 mb-5">
                      <div className="mb-4 inline-flex items-center rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold text-neutral-700 shadow-sm backdrop-blur-md">
                        <span className={`mr-2 h-2.5 w-2.5 rounded-full ${topic.dot}`} />
                        {topic.tag}
                      </div>
                      <h3 className={`text-xl font-bold leading-tight sm:text-[1.45rem] ${topic.text}`}>
                        {topic.title}
                      </h3>
                    </div>
                    <div className="relative z-10 mt-auto border-t border-black/[0.08] pt-5">
                      <p className={`text-base font-semibold leading-relaxed opacity-80 ${topic.text}`}>
                        {topic.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f8ee] py-20 dark:bg-neutral-950">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <AnimateIn>
              <div className="rounded-[2rem] border border-training-200 bg-white p-6 shadow-sm shadow-training-100/60 sm:p-8 dark:border-white/10 dark:bg-neutral-900 dark:shadow-none">
                <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-training-700 dark:text-training-200">
                  <span className="h-2 w-2 rounded-full bg-training-500" />
                  Common questions
                </p>
                <div className="mt-6 divide-y divide-neutral-200 dark:divide-white/10">
                  {faqs.map((item) => (
                    <div
                      key={item.question}
                      className="grid gap-3 py-6 first:pt-0 last:pb-0 md:grid-cols-[240px_minmax(0,1fr)]"
                    >
                      <h3 className="text-lg font-semibold leading-7 text-neutral-950 dark:text-white">
                        {item.question}
                      </h3>
                      <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={120} animation="fade-left">
              <aside className="relative overflow-hidden rounded-[2rem] border border-training-200 p-6 text-white shadow-2xl shadow-training-200/70 sm:p-8 dark:border-white/10 dark:shadow-none">
                <Image
                  src={REGISTRATION_IMAGE}
                  alt="A workshop group reviewing materials together"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-training-900/78 via-training-900/68 to-coparent-900/66" />
                <div className="relative z-10">
                  <p className="text-sm font-bold uppercase text-coparent-100">
                    Before registration
                  </p>
                  <ul className="mt-6 space-y-5 text-base leading-7 text-white/88">
                    <li>
                      Use Eventbrite for the current schedule, ticket
                      availability, and checkout steps.
                    </li>
                    <li>
                      Reduced fee tickets are available on the registration page
                      for eligible participants with income under $30,000 per
                      year.
                    </li>
                    <li>
                      Fairfield notes refunds minus a 10% administrative fee
                      when canceling more than 10 days before the training date;
                      no refunds within 7 days.
                    </li>
                    <li>
                      If you cannot attend within 7 days of the class, the
                      training fee can be honored for another class within 365
                      days.
                    </li>
                  </ul>
                  <a
                    href={EVENTBRITE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-training-800 shadow-sm transition-colors hover:bg-training-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-training-900"
                  >
                    Get Tickets
                    <ArrowRightIcon />
                  </a>
                </div>
              </aside>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
