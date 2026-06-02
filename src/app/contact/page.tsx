import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";

const pageTitle = "Contact FairField Center";
const pageDescription =
  "Contact FairField Center for mediation, police-referred mediation, restorative justice, mediator training, and general inquiries in Harrisonburg, Virginia.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
};

const OFFICE_IMAGE =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600";

const office = {
  venue: "Community Mennonite Church",
  floor: "Second floor",
  address: "70 S High St",
  city: "Harrisonburg, VA 22801",
  phone: "540-434-0059",
  phoneHref: "tel:5404340059",
  email: "info@fairfieldcenter.org",
  emailHref: "mailto:info@fairfieldcenter.org",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=70%20S%20High%20St%20Harrisonburg%20VA%2022801",
};

type DepartmentTone = "primary" | "prm" | "rj" | "training";

const routes = [
  {
    code: "MED",
    name: "Mediation Services",
    description:
      "Court-connected mediation, private mediation intake, and community mediation questions.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600",
    imageAlt: "A mediation handshake at a table",
    phones: [
      {
        label: "Main line",
        value: "540-434-0059 ext. 1",
        href: office.phoneHref,
      },
    ],
    email: "mediation@fairfieldcenter.org",
    emailHref: "mailto:mediation@fairfieldcenter.org",
    tone: "primary",
  },
  {
    code: "TRN",
    name: "Mediator Training",
    description:
      "Mediator certification training, mentoring, course schedules, and continuing education questions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Training notes and a laptop on a desk",
    phones: [
      {
        label: "Main line",
        value: "540-434-0059 ext. 2",
        href: office.phoneHref,
      },
    ],
    email: "trainingsupport@fairfieldcenter.org",
    emailHref: "mailto:trainingsupport@fairfieldcenter.org",
    tone: "training",
  },
  {
    code: "RJ",
    name: "Restorative Justice",
    description:
      "Restorative justice referrals, community conferencing, victim impact workshops, and facilitator questions.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600",
    imageAlt: "People gathered for a group conversation",
    phones: [
      {
        label: "Main line",
        value: "540-434-0059 ext. 3",
        href: office.phoneHref,
      },
      {
        label: "Direct",
        value: "(540) 534-5686",
        href: "tel:+15405345686",
      },
    ],
    email: "rji@fairfieldcenter.org",
    emailHref: "mailto:rji@fairfieldcenter.org",
    tone: "rj",
  },
  {
    code: "PRM",
    name: "Police-Referred Mediation",
    description:
      "Police referrals, officer questions, and community conflict support through PRM.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Legal books and a quiet desk",
    phones: [
      {
        label: "Main line",
        value: "540-434-0059 ext. 4",
        href: office.phoneHref,
      },
      {
        label: "Direct",
        value: "(540) 453-7560",
        href: "tel:+15404537560",
      },
    ],
    email: "prm@fairfieldcetner.org",
    emailHref: "mailto:prm@fairfieldcetner.org",
    tone: "prm",
  },
] satisfies Array<{
  code: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  phones: Array<{
    label: string;
    value: string;
    href: string;
  }>;
  email: string;
  emailHref: string;
  tone: DepartmentTone;
}>;

const routeTone = {
  primary: {
    link: "text-primary-700 hover:text-primary-900",
    row: "bg-primary-50/20 hover:bg-primary-50/35",
    overlay: "from-primary-950/60 via-primary-900/10 to-transparent",
  },
  prm: {
    link: "text-prm-700 hover:text-prm-900",
    row: "bg-prm-50/25 hover:bg-prm-50/40",
    overlay: "from-prm-950/62 via-prm-900/12 to-transparent",
  },
  rj: {
    link: "text-rj-700 hover:text-rj-900",
    row: "bg-rj-50/25 hover:bg-rj-50/40",
    overlay: "from-rj-900/62 via-rj-900/12 to-transparent",
  },
  training: {
    link: "text-training-700 hover:text-training-900",
    row: "bg-training-50/25 hover:bg-training-50/40",
    overlay: "from-training-900/64 via-training-900/12 to-transparent",
  },
} satisfies Record<
  DepartmentTone,
  {
    link: string;
    row: string;
    overlay: string;
  }
>;

const officeNotes = [
  {
    label: "Hours",
    value:
      "Monday-Friday, 9:00 AM-5:00 PM. Closed on Federal Holidays. Schedule follows local court closures.",
  },
  {
    label: "Appointments",
    value: "Virtual and in-person appointments may be available depending on the service.",
  },
  {
    label: "Immediate safety",
    value: "For emergencies or immediate safety concerns, call 911.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white pt-28 pb-10 sm:pt-32 sm:pb-14">
        <GridBackdrop />
        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <AnimateIn animation="fade-right">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-xs font-bold uppercase text-primary-700 ring-1 ring-primary-100">
                  <span className="h-2 w-2 rounded-full bg-primary-500" />
                  Contact
                </p>
                <h1 className="mt-6 max-w-3xl text-[2.45rem] font-medium leading-[1.06] text-neutral-950 sm:text-[4rem] lg:text-[4.8rem]">
                  Contact FairField Center
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Use the main office for general questions, or go directly to
                  the program contact that matches your request.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-left" delay={100}>
              <div className="overflow-hidden rounded-[2rem] border border-neutral-100 bg-white shadow-xl shadow-neutral-200/60 sm:rounded-[2.5rem]">
                <div className="grid md:grid-cols-[0.58fr_1fr]">
                  <div className="relative min-h-[220px] border-b border-neutral-200 md:min-h-full md:border-r md:border-b-0">
                    <Image
                      src={OFFICE_IMAGE}
                      alt="A calm office meeting space"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 34vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-primary-950/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-mono text-xs font-bold uppercase text-white/75">
                        Harrisonburg office
                      </p>
                      <p className="mt-2 text-xl font-bold leading-tight text-white">
                        {office.address}
                      </p>
                      <p className="text-sm font-semibold text-white/82">
                        {office.floor} - {office.city}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-neutral-200">
                    <ContactLine
                      icon={<MapPinIcon className="h-5 w-5" />}
                      label="Office"
                      title={office.address}
                      detail={`${office.venue}, ${office.floor} - ${office.city}`}
                      href={office.mapHref}
                      action="Get directions"
                    />
                    <ContactLine
                      icon={<PhoneIcon className="h-5 w-5" />}
                      label="Main phone"
                      title={office.phone}
                      detail="General office line. Select the program extension when prompted."
                      href={office.phoneHref}
                      action="Call"
                    />
                    <ContactLine
                      icon={<MailIcon className="h-5 w-5" />}
                      label="General email"
                      title={office.email}
                      detail="General inquiries"
                      href={office.emailHref}
                      action="Email"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 py-8">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="grid overflow-hidden rounded-[2rem] border border-neutral-100 bg-white shadow-sm shadow-neutral-200/50 sm:grid-cols-3 sm:rounded-[2.5rem]">
              {officeNotes.map((note, index) => (
                <div
                  key={note.label}
                  className={`p-5 ${index === 0 ? "" : "border-t border-neutral-200 sm:border-t-0 sm:border-l"}`}
                >
                  <p className="text-xs font-bold uppercase text-neutral-400">
                    {note.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-neutral-800">
                    {note.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
            <AnimateIn animation="fade-right">
              <div>
                <h2 className="text-3xl font-medium text-neutral-950 sm:text-[3.1rem]">
                  Route your message once.
                </h2>
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-left" delay={80}>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-600 lg:ml-auto">
                Every program contact is visible here. If you are not sure
                where to start, call the main office or use the general email
                and staff will route your question.
              </p>
            </AnimateIn>
          </div>

          <AnimateIn animation="fade-up" delay={120}>
            <div className="overflow-hidden rounded-[2rem] border border-neutral-100 bg-white shadow-sm shadow-neutral-200/50 sm:rounded-[2.5rem]">
              {routes.map((route, index) => (
                <RouteRow
                  key={route.code}
                  route={route}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-10">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase text-primary-700">
                Need service details first?
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
                Review program information before contacting the office, or
                send a general email and FairField Center staff will help route
                the request.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/services/mediation"
                className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-4 py-3 text-sm font-bold text-primary-700 transition-colors hover:bg-primary-50"
              >
                Mediation
              </Link>
              <Link
                href="/training"
                className="inline-flex items-center justify-center rounded-full border border-training-200 bg-training-50 px-4 py-3 text-sm font-bold text-training-700 transition-colors hover:bg-training-100"
              >
                Training
              </Link>
              <Link
                href="/services/restorative-justice"
                className="inline-flex items-center justify-center rounded-full border border-rj-200 bg-rj-50 px-4 py-3 text-sm font-bold text-rj-700 transition-colors hover:bg-rj-100"
              >
                Restorative Justice
              </Link>
              <Link
                href="/services/police-referral"
                className="inline-flex items-center justify-center rounded-full border border-prm-200 bg-prm-50 px-4 py-3 text-sm font-bold text-prm-800 transition-colors hover:bg-prm-100"
              >
                PRM
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function ContactLine({
  icon,
  label,
  title,
  detail,
  href,
  action,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  detail: string;
  href: string;
  action: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group grid gap-4 p-5 transition-colors hover:bg-primary-50/55 sm:grid-cols-[auto_1fr_auto] sm:items-center"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 ring-1 ring-primary-100 transition-colors group-hover:bg-white">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase text-neutral-400">
          {label}
        </p>
        <p className="mt-1 break-words text-lg font-bold leading-snug text-neutral-950">
          {title}
        </p>
        <p className="mt-1 text-sm text-neutral-500">{detail}</p>
      </div>
      <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 transition-colors group-hover:text-primary-900">
        {action}
        <ArrowRightIcon className="h-4 w-4" />
      </span>
    </a>
  );
}

function RouteRow({
  route,
  isFirst,
}: {
  route: (typeof routes)[number];
  isFirst: boolean;
}) {
  const tone = routeTone[route.tone];

  return (
    <div
      className={`relative grid gap-5 p-5 transition-colors duration-300 sm:p-6 lg:grid-cols-[10rem_1fr_0.8fr] lg:items-center ${tone.row} ${
        isFirst ? "" : "border-t border-neutral-200"
      }`}
    >
      <div className="pl-2">
        <div className="relative min-h-36 overflow-hidden rounded-[1.75rem] bg-neutral-100 shadow-sm sm:min-h-40 lg:min-h-28">
          <Image
            src={route.image}
            alt={route.imageAlt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 10rem"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${tone.overlay}`} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-neutral-950">
          {route.name}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
          {route.description}
        </p>
      </div>
      <div className="grid gap-3 text-sm lg:justify-items-end lg:text-right">
        {route.phones.map((phone) => (
          <a
            key={`${route.code}-${phone.value}`}
            href={phone.href}
            className={`block font-bold ${tone.link}`}
          >
            <span className="block text-[11px] font-bold uppercase text-neutral-400">
              {phone.label}
            </span>
            <span className="block">{phone.value}</span>
          </a>
        ))}
        <a
          href={route.emailHref}
          className={`block min-w-0 break-all font-bold ${tone.link}`}
        >
          <span className="block text-[11px] font-bold uppercase text-neutral-400">
            Email
          </span>
          <span className="block">{route.email}</span>
        </a>
      </div>
    </div>
  );
}

function GridBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-70"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-layout-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-layout-grid) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "linear-gradient(to bottom, black, transparent 76%)",
        WebkitMaskImage: "linear-gradient(to bottom, black, transparent 76%)",
      }}
    />
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.77.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.44.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 7.743V7.5" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
