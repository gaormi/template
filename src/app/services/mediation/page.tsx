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

const trustItems = [
  "Virginia's First Mediation Center",
  "Established 1982",
  "Se provee servicios en espanol",
];

const valueCards = [
  {
    title: "Neutral & Impartial",
    text: "Mediators do not take sides. They structure a fair conversation so parties can clarify concerns and find common ground.",
  },
  {
    title: "Confidential",
    text: "Mediation is private. Discussions, notes, and offers are legally protected and cannot be used in court if unresolved.",
  },
  {
    title: "Practical",
    text: "The process helps people identify issues, consider options, and write agreements designed around real schedules and responsibilities.",
  },
];

const journey = [
  {
    step: "01",
    title: "Intake & Screening",
    text: "Staff speak with each party individually to understand the issues, confirm willingness, and screen for safety and suitability.",
    icon: ClipboardCheckIcon,
    card: "border-primary-100 bg-primary-50/55 hover:shadow-primary-100/70",
    iconStyle:
      "bg-white text-primary-600 ring-primary-100 group-hover:bg-primary-600 group-hover:text-white",
    label: "text-primary-500/70",
    badge: "bg-primary-100 text-primary-700",
  },
  {
    step: "02",
    title: "Orientation",
    text: "The mediator explains the process, confidentiality, ground rules, and the voluntary choice to continue.",
    icon: CompassIcon,
    card:
      "border-training-100 bg-training-50/60 hover:shadow-training-100/70",
    iconStyle:
      "bg-white text-training-600 ring-training-100 group-hover:bg-training-600 group-hover:text-white",
    label: "text-training-600/75",
    badge: "bg-training-100 text-training-700",
  },
  {
    step: "03",
    title: "Joint Session",
    text: "Parties share perspectives, identify concerns, and may use private caucuses when separate conversations would help.",
    icon: ConversationIcon,
    card: "border-coparent-100 bg-coparent-50/65 hover:shadow-coparent-100/70",
    iconStyle:
      "bg-white text-coparent-600 ring-coparent-100 group-hover:bg-coparent-600 group-hover:text-white",
    label: "text-coparent-600/75",
    badge: "bg-coparent-100 text-coparent-700",
  },
  {
    step: "04",
    title: "Agreement Drafting",
    text: "When a resolution is reached, the mediator records the agreed points in a formal document for review and signing.",
    icon: DocumentPenIcon,
    card: "border-rj-100 bg-rj-50/60 hover:shadow-rj-100/70",
    iconStyle:
      "bg-white text-rj-600 ring-rj-100 group-hover:bg-rj-600 group-hover:text-white",
    label: "text-rj-600/75",
    badge: "bg-rj-100 text-rj-700",
  },
  {
    step: "05",
    title: "Resolution",
    text: "Signed agreements can be implemented privately or, for court matters, submitted to the court as appropriate.",
    icon: SealCheckIcon,
    card: "border-slate-200 bg-slate-50 hover:shadow-slate-200/70",
    iconStyle:
      "bg-white text-slate-600 ring-slate-200 group-hover:bg-slate-800 group-hover:text-white",
    label: "text-slate-500",
    badge: "bg-slate-200 text-slate-700",
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
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-0 lg:pb-0">
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
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-100 backdrop-blur">
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
                Fairfield Center helps individuals, families, businesses, and
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

      <section className="border-y border-neutral-100 bg-white py-7">
        <Container>
          <div className="grid gap-5 text-center md:grid-cols-3">
            {trustItems.map((item) => (
              <p
                key={item}
                className="text-sm font-bold uppercase tracking-widest text-primary-500/75"
              >
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-10 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-training-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-training-grid) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                What Mediation Does
              </p>
              <h2 className="mt-5 text-4xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
                A trained, neutral mediator helps people talk through conflict,
                identify issues, and create agreements that are{" "}
                <span className="font-semibold text-primary-500">
                  clear enough to use
                </span>
                .
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {valueCards.map((item, index) => (
              <AnimateIn
                key={item.title}
                animation="fade-up"
                delay={index * 100}
                className="flex"
              >
                <div className="group flex flex-1 flex-col rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-100/60 sm:p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.text}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <MediationPathExplorer initialPath={initialPath} />

      <section id="how-it-works" className="bg-white py-10 sm:py-20">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mb-10 max-w-4xl sm:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                The Process
              </p>
              <h2 className="mt-4 text-4xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
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
            <div className="relative min-h-[340px] overflow-hidden rounded-[2.5rem] shadow-xl shadow-neutral-200/60">
              <Image
                src={PROCESS_IMAGE}
                alt="A person taking notes on a clipboard"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-900/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 max-w-md rounded-3xl bg-white/92 p-5 shadow-2xl backdrop-blur sm:bottom-8 sm:left-8 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                  Initial step
                </p>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  Intake, safety screening, and orientation
                </p>
              </div>
            </div>
          </AnimateIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimateIn
                  key={item.step}
                  animation="fade-up"
                  delay={index * 80}
                  className="flex"
                >
                  <div
                    className={`group flex flex-1 flex-col rounded-[2rem] border p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${item.card}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ring-1 transition-colors ${item.iconStyle}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest ${item.label}`}>
                        Step {item.step}
                      </span>
                    </div>
                    {index === 0 && (
                      <span className={`mt-5 self-start rounded-full px-3 py-1 text-xs font-bold ${item.badge}`}>
                        Start here
                      </span>
                    )}
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
