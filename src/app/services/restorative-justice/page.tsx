import Image from "next/image";
import Link from "next/link";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2200";
const PHILOSOPHY_IMAGE =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600";

type ProgramTone = "primary" | "training" | "coparent" | "rj";

const programs = [
  {
    title: "Restorative Community Conferencing",
    text: "A voluntary process that allows all stakeholders affected by a specific crime to actively participate in the justice process, working collaboratively to decide how to repair the harm and create a mutually acceptable response.",
    details: [
      "Stakeholders affected by a specific crime participate directly.",
      "The group works collaboratively to identify harm, needs, and obligations.",
      "The outcome is a practical plan for repair that participants can support.",
    ],
    icon: CircleDialogueIcon,
    tone: "primary",
  },
  {
    title: "Victim Impact Workshops",
    text: "Group workshops that develop an understanding of the impact of crime, encouraging participants to take responsibility for their actions and make amends. Conducted with court-referred youth and residents of incarceration facilities.",
    details: [
      "Designed for court-referred youth and residents of incarceration facilities.",
      "Participants examine the broader impact of crime on harmed people, families, and communities.",
      "Workshop discussion encourages accountability without a hostile setting.",
    ],
    icon: HeartHandsIcon,
    tone: "training",
  },
  {
    title: "Talking & Peacemaking Circles",
    text: "Based on ancient traditions, circles build trusting relationships through open sharing and deep listening. This format supports businesses, schools, and organizations with constructive communication and collaborative problem solving.",
    details: [
      "Rooted in traditions that use circle process for teaching, healing, and community repair.",
      "Useful for businesses, schools, organizations, and groups working through conflict.",
      "Creates a structured space for constructive communication.",
    ],
    icon: CircleNodesIcon,
    tone: "coparent",
  },
  {
    title: "Facilitator Training",
    text: "Three-day, 21-hour RCC facilitator training covering Restorative Justice foundations, facilitation stages, working with clients, challenging situations, agreement writing, and role-playing practice.",
    details: [
      "Three-day training for Restorative Community Conferencing facilitation.",
      "Covers RJ foundations, working with clients, challenging situations, and agreement writing.",
      "Includes extensive role-playing practice.",
    ],
    icon: GuideIcon,
    tone: "rj",
  },
] satisfies Array<{
  title: string;
  text: string;
  details: string[];
  icon: (props: { className?: string }) => React.ReactNode;
  tone: ProgramTone;
}>;

const process = [
  {
    step: "01",
    title: "Referral Received",
    text: "A case is referred from courts, police, schools, or private sources. Facilitators make initial contact with all parties.",
    icon: InboxIcon,
  },
  {
    step: "02",
    title: "Individual Meetings",
    text: "Facilitators meet separately with each party to hear their story, explain the process, and discuss expectations.",
    icon: ConversationIcon,
  },
  {
    step: "03",
    title: "Readiness Assessment",
    text: "The person causing harm must be willing to take responsibility, and the person harmed must be willing to explore a path forward.",
    icon: GaugeIcon,
  },
  {
    step: "04",
    title: "Face-to-Face Dialogue",
    text: "Participants share how the incident affected them, what they need, and what they would like to see happen next.",
    icon: UsersIcon,
  },
  {
    step: "05",
    title: "Agreement & Follow-Up",
    text: "A collaborative plan for making amends is written, signed, and followed up so the agreement terms are completed.",
    icon: DocumentCheckIcon,
  },
];

const benefits = [
  {
    title: "For the Person Harmed",
    items: [
      "Tell their story and be heard",
      "Ask questions and express impact",
      "Participate directly in the justice process",
      "Reduce fear through meaningful accountability",
    ],
  },
  {
    title: "For the Person Causing Harm",
    items: [
      "Face the human impact of their actions",
      "Take responsibility in a structured setting",
      "Have a say in making things right",
      "Build empathy and stronger community ties",
    ],
  },
  {
    title: "For the Community",
    items: [
      "Strengthen connections between people",
      "Support collaborative problem solving",
      "Increase empowerment after harm",
      "Build long-term resilience and safety",
    ],
  },
];

const voices = [
  "Now I have a real understanding of the extent of the impact of my wrongdoing.",
  "I will think about how my actions might affect someone before doing them.",
  "The structure allowed me to face my offence in a non-hostile way.",
  "Learning about how crime hurts a lot of people, not just the victim.",
];

const partners = [
  "Harrisonburg Police Department",
  "26th District Court",
  "Virginia Juvenile Court Service Unit",
  "Judges & Attorneys",
  "Harrisonburg City Schools",
  "Private Sources",
];

const values = [
  "Empowerment",
  "Inclusivity",
  "Collaboration",
  "Interconnectedness",
  "Respect",
  "Voluntary Participation",
];

export default function RestorativeJusticePage() {
  return (
    <main className="bg-white text-slate-800">
      <section className="relative flex min-h-[720px] items-center overflow-hidden pt-28 sm:pt-32 lg:min-h-[88vh]">
        <Image
          src={HERO_IMAGE}
          alt="People gathered outdoors in conversation"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/58 to-training-900/18" />
        <WaveDivider />

        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-rj-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-rj-300" />
                Restorative Justice
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Healing harm through{" "}
                <span className="font-serif italic text-rj-200">
                  accountability
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/82">
                Fairfield Center helps people and communities respond to harm
                through voluntary processes rooted in empathy, responsibility,
                dialogue, and meaningful repair.
              </p>
              <div className="mt-10">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
                >
                  Explore our approach
                  <DownArrowIcon className="h-4 w-4 animate-bounce" />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section id="about" className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimateIn animation="fade-right">
              <div className="relative min-h-[440px] overflow-hidden rounded-[2.5rem] shadow-xl">
                <Image
                  src={PHILOSOPHY_IMAGE}
                  alt="Community members speaking together around a table"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rj-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-5 shadow-2xl backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-widest text-rj-500">
                    Values-based process
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    Empowerment, inclusion, collaboration, and respect
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={120}>
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rj-500">
                  <span className="h-2 w-2 rounded-full bg-rj-500" />
                  Our Philosophy
                </p>
                <h2 className="mt-4 text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                  Justice that focuses on{" "}
                  <span className="font-serif italic text-rj-500">people</span>,
                  not punishment
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-500">
                  Restorative Justice is an alternative way of viewing justice
                  that focuses on people and relationships rather than laws and
                  punishments. It seeks to meet the needs of people harmed by
                  wrongdoing while giving those who caused harm space to take
                  responsibility and make amends.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
                  Restorative practices have roots in Indigenous cultures and
                  traditions around the world, where teaching and healing take
                  precedence over punishment. The healing extends beyond
                  individuals to families, neighborhoods, schools, and whole
                  communities.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-rj-100 bg-white px-4 py-2 text-sm font-semibold text-rj-700 shadow-sm shadow-rj-100/40"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn animation="fade-up" delay={160}>
            <blockquote className="relative mt-14 rounded-[2rem] border border-rj-100 bg-white px-7 py-12 text-center shadow-xl shadow-rj-100/45 sm:px-12 lg:px-20">
              <div className="absolute left-8 top-0 font-serif text-8xl font-bold leading-none text-rj-100">
                &ldquo;
              </div>
              <p className="relative mx-auto max-w-5xl font-serif text-xl font-normal leading-snug text-slate-500 sm:text-2xl">
                &quot;Restorative Justice is a process to involve, to the extent
                possible, those who have a stake in a specific offense and to
                collectively identify and address harms, needs, and obligations,
                in order to heal and put things as right as possible.&quot;
              </p>
              <div className="mx-auto mt-9 h-px max-w-md bg-rj-200" />
              <p className="mt-6 text-base font-normal tracking-wide text-[#C9A96E]">
                - Howard Zehr,{" "}
                <span className="font-serif italic">
                  The Little Book of Restorative Justice
                </span>{" "}
                (2002)
              </p>
            </blockquote>
          </AnimateIn>
        </Container>
      </section>

      <section
        id="programs"
        className="bg-gradient-to-b from-[#FBF7F4] via-[#F0E6F6] to-[#FBF7F4] py-20 sm:py-24"
      >
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rj-500">
                What We Do
              </p>
              <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[#4A1942] sm:text-5xl">
                Our Programs & Services
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#6B4F6B]">
                Fairfield Center offers restorative practices for courts,
                schools, organizations, community members, and people directly
                affected by harm.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <AnimateIn
                key={program.title}
                animation="fade-up"
                delay={index * 80}
                className="flex"
              >
                <ProgramCard {...program} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-14 max-w-4xl text-center">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rj-500">
                <span className="h-2 w-2 rounded-full bg-rj-500" />
                The Process
              </p>
              <h2 className="mt-4 text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                How restorative community{" "}
                <span className="font-serif italic text-rj-500">
                  conferencing
                </span>{" "}
                works
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
                A structured process helps participants prepare, speak honestly,
                understand impact, and document a realistic plan for repair.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 lg:grid-cols-5">
            {process.map((item, index) => (
              <AnimateIn
                key={item.step}
                animation="fade-up"
                delay={index * 70}
                className="flex"
              >
                <ProcessCard {...item} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#6B2D7B] py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(155,89,182,0.18),transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(201,169,110,0.13),transparent_45%)]" />
        <Container>
          <AnimateIn animation="fade-up" className="relative">
            <div className="mb-12">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rj-100">
                Why It Matters
              </p>
              <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-white sm:text-5xl">
                Benefits of Restorative Justice
              </h2>
            </div>
          </AnimateIn>

          <div className="relative grid gap-6 md:grid-cols-3">
            {benefits.map((group, index) => (
              <AnimateIn
                key={group.title}
                animation="fade-up"
                delay={index * 90}
              >
                <div className="h-full rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur transition-colors hover:bg-white/[0.1]">
                  <h3 className="font-serif text-2xl font-normal leading-tight text-white">
                    <span className="mb-1 block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-rj-100">
                      For the
                    </span>
                    {group.title.replace("For the ", "")}
                  </h3>
                  <div className="mt-5 h-px bg-white/10" />
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-white/75"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rj-300/25 text-[10px] font-bold text-rj-100">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rj-500">
                <span className="h-2 w-2 rounded-full bg-rj-500" />
                Participant Reflections
              </p>
              <h2 className="mt-4 text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                What people remember after the{" "}
                <span className="font-serif italic text-rj-500">process</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {voices.map((quote, index) => (
              <AnimateIn
                key={quote}
                animation="fade-up"
                delay={index * 70}
                className="flex"
              >
                <blockquote className="flex h-full flex-col rounded-[2rem] border border-rj-100 bg-white p-6 shadow-sm shadow-rj-100/50">
                  <p className="font-serif text-4xl leading-none text-rj-100">
                    &ldquo;
                  </p>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600">
                    {quote}
                  </p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-rj-500">
                    Workshop Participant
                  </p>
                </blockquote>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F0E6F6] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <AnimateIn animation="fade-right">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rj-500">
                  <span className="h-px w-8 bg-rj-400" />
                  Our Partners
                </p>
                <h2 className="mt-4 max-w-xl font-serif text-4xl font-normal leading-tight text-[#4A1942] sm:text-5xl">
                  Case Referral Sources
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#6B4F6B]">
                  Cases come to us from across the Harrisonburg community and
                  beyond, from institutions, courts, and individuals seeking a
                  better path to justice.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="flex min-h-12 items-center rounded-full border border-rj-950/10 bg-white px-5 py-3 text-sm font-semibold text-[#4A1942] shadow-sm shadow-rj-100/50 transition-all hover:-translate-y-0.5 hover:bg-[#4A1942] hover:text-white"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid overflow-hidden rounded-[2.5rem] border border-rj-100 bg-rj-50/45 shadow-xl shadow-rj-100/60 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[320px]">
              <Image
                src={CONTACT_IMAGE}
                alt="Community members gathered in conversation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rj-500">
                <span className="h-2 w-2 rounded-full bg-rj-500" />
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                Ready to explore restorative{" "}
                <span className="font-serif italic text-rj-500">justice?</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
                If you or someone you know is involved in a harm that could be
                handled through Restorative Justice, contact Sue Praill for
                further information.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+15405345686"
                  className="rounded-2xl border border-rj-100 bg-white p-5 transition-colors hover:border-rj-300"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    (540) 534-5686
                  </p>
                </a>
                <a
                  href="mailto:rji@fairfieldcenter.org"
                  className="rounded-2xl border border-rj-100 bg-white p-5 transition-colors hover:border-rj-300"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    rji@fairfieldcenter.org
                  </p>
                </a>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-rj-500 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-rj-600"
              >
                Contact Sue Praill
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ProgramCard({
  title,
  text,
  icon: Icon,
  tone,
}: {
  title: string;
  text: string;
  icon: (props: { className?: string }) => React.ReactNode;
  tone: ProgramTone;
}) {
  const theme = {
    primary: {
      icon: "bg-primary-100 text-primary-600",
      accent: "before:bg-primary-500",
      border: "hover:border-primary-200 hover:shadow-primary-100/60",
    },
    training: {
      icon: "bg-training-100 text-training-600",
      accent: "before:bg-training-500",
      border: "hover:border-training-200 hover:shadow-training-100/60",
    },
    coparent: {
      icon: "bg-coparent-100 text-coparent-600",
      accent: "before:bg-coparent-500",
      border: "hover:border-coparent-200 hover:shadow-coparent-100/60",
    },
    rj: {
      icon: "bg-rj-100 text-rj-600",
      accent: "before:bg-rj-500",
      border: "hover:border-rj-200 hover:shadow-rj-100/60",
    },
  }[tone];

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-rj-100/70 bg-white p-10 shadow-sm shadow-rj-100/30 transition-all before:absolute before:inset-x-0 before:top-0 before:h-1 before:opacity-0 before:transition-opacity hover:-translate-y-1 hover:before:opacity-100 ${theme.accent} ${theme.border}`}
    >
      <div
        className={`mb-7 flex h-14 w-14 items-center justify-center rounded-[0.875rem] ${theme.icon}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-serif text-2xl font-normal leading-tight text-[#4A1942]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-[#6B4F6B]">{text}</p>
    </div>
  );
}

function ProcessCard({
  step,
  title,
  text,
  icon: Icon,
}: {
  step: string;
  title: string;
  text: string;
  icon: (props: { className?: string }) => React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-rj-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rj-100 text-rj-600">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-bold text-rj-300">{step}</span>
      </div>
      <h3 className="mt-6 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

function WaveDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[1] text-white">
      <svg viewBox="0 0 1440 120" className="h-20 w-full sm:h-28" preserveAspectRatio="none">
        <path
          d="M0 56 80 64c80 8 240 24 400 4s320-76 480-66.7C1040 10 1200 84 1320 101.3l120 18.7V120H0V56Z"
          fill="currentColor"
        />
      </svg>
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

function DownArrowIcon({ className }: { className?: string }) {
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
        d="M12 5v14m0 0 7-7m-7 7-7-7"
      />
    </svg>
  );
}

function CircleDialogueIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 12.75H6l-3 3V6.75A2.25 2.25 0 0 1 5.25 4.5h9A2.25 2.25 0 0 1 16.5 6.75v5.25a2.25 2.25 0 0 1-2.25 2.25H10.5m2.25 3H18l3 3v-9" />
    </svg>
  );
}

function HeartHandsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 20s-7.5-4.5-7.5-10.1A4.1 4.1 0 0 1 12 7.65a4.1 4.1 0 0 1 7.5 2.25C19.5 15.5 12 20 12 20Zm-7.5-5.25 2.25 1.5m12.75-1.5-2.25 1.5" />
    </svg>
  );
}

function CircleNodesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm13 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM14.5 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM7.5 9.5l3 6m6-6-3 6m-5-7.5h7" />
    </svg>
  );
}

function GuideIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 17.25 21H6.75a2.25 2.25 0 0 1-2.25-2.25V5.25Zm4.5 3h6m-6 4.5h6M9 17.25h3" />
    </svg>
  );
}

function InboxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 14.25 6.75 5.25h10.5l2.25 9M4.5 14.25v3A2.25 2.25 0 0 0 6.75 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25v-3h-4.25a3.25 3.25 0 0 1-6.5 0H4.5Z" />
    </svg>
  );
}

function ConversationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 14.25H6l-3 3V6.75A2.25 2.25 0 0 1 5.25 4.5h8.25a2.25 2.25 0 0 1 2.25 2.25v5.25a2.25 2.25 0 0 1-2.25 2.25h-6Zm3 3h6l3 3v-9.75" />
    </svg>
  );
}

function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 15a7.5 7.5 0 1 1 15 0v2.25A1.75 1.75 0 0 1 17.75 19H6.25a1.75 1.75 0 0 1-1.75-1.75V15Zm7.5 0 3.25-4.25M7.5 15h.01M16.5 15h.01" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 12a6 6 0 0 1 12 0M19.5 10.5a2.25 2.25 0 1 1-3.1-2.08M4.5 10.5a2.25 2.25 0 1 0 3.1-2.08" />
    </svg>
  );
}

function DocumentCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.25 3.75H7.5A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18v-6.75m-4.5-7.5 4.5 4.5m-4.5-4.5v4.5h4.5M8.75 15l2 2 4.5-5" />
    </svg>
  );
}
