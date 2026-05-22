import Image from "next/image";
import Link from "next/link";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";
import MediationPathExplorer, { type MediationPath } from "./MediationPathExplorer";

type SearchParams = Promise<{
  type?: string | string[];
}>;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=2200";
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
    <main className="bg-primary-50/45 text-slate-800">
      <section className="relative flex min-h-[720px] items-center overflow-hidden pt-28 sm:pt-32 lg:min-h-[88vh]">
        <Image
          src={HERO_IMAGE}
          alt="Two people talking across a quiet table"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/62 to-slate-900/12" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary-50 via-primary-50/55 to-transparent" />

        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary-300" />
                Conflict Resolution & Mediation Services
              </p>
              <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Professional mediation for{" "}
                <span className="font-serif italic text-primary-200">
                  private resolution
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/82">
                Fairfield Center helps individuals, families, businesses, and
                court-referred parties resolve conflict through a confidential,
                neutral process focused on practical agreements.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#choose-path"
                  className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-950/20 transition-colors hover:bg-primary-600"
                >
                  View Private Packages
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services/mediation?type=court#choose-path"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Court-Referred Cases
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section className="border-y border-primary-100 bg-white py-7">
        <Container>
          <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:gap-12">
            {trustItems.map((item) => (
              <p
                key={item}
                className="text-sm font-bold uppercase tracking-widest text-primary-500/70"
              >
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto max-w-5xl text-center">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                What Mediation Does
              </p>
              <h2 className="mt-5 text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                A trained, neutral mediator helps people talk through conflict,
                identify issues, and create agreements that are{" "}
                <span className="font-serif italic text-primary-600">
                  clear enough to use
                </span>
                .
              </h2>
            </div>
          </AnimateIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {valueCards.map((item, index) => (
              <AnimateIn
                key={item.title}
                animation="fade-up"
                delay={index * 90}
                className="flex"
              >
                <div className="flex flex-1 flex-col rounded-[2rem] border border-primary-100 bg-white p-7 shadow-sm">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {item.text}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <MediationPathExplorer initialPath={initialPath} />

      <section id="how-it-works" className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mb-12">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                The Process
              </p>
              <h2 className="mt-4 text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                The 5-step{" "}
                <span className="font-serif italic text-primary-600">
                  journey
                </span>
              </h2>
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
              A structured workflow designed for clarity, safety, and practical
              decision-making. Sessions may be held in person or by video
              conference.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image
                src={PROCESS_IMAGE}
                alt="A person taking notes on a clipboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-5 shadow-2xl backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                  Initial step
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  Intake, safety screening, and orientation
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4">
                {journey.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.step}
                      className={`group relative grid gap-4 rounded-[2rem] border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg sm:grid-cols-[4rem_1fr] ${item.card}`}
                    >
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ring-1 transition-colors ${item.iconStyle}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`text-xs font-bold uppercase tracking-widest ${item.label}`}>
                            Step {item.step}
                          </span>
                          {index === 0 && (
                            <span className={`rounded-full px-3 py-1 text-xs font-bold ${item.badge}`}>
                              Start here
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
              Make resolutions smarter, stronger, and{" "}
              <span className="font-serif italic text-primary-600">
                simpler
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-slate-500">
              Contact Fairfield Center to schedule an intake or ask which
              mediation path fits your case.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-700"
            >
              Start Your Process
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
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
