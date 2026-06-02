import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";

const pageTitle = "About FairField Center";
const pageDescription =
  "Founded in 1982, FairField Center provides professional conflict resolution, restorative justice services, and training in Virginia.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/about",
  },
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2200";

const team = [
  {
    name: "Aaron F. Hagmaier",
    role: "Director of Training Programs / Mediator",
    image:
      "https://i0.wp.com/fairfieldcenter.org/wp-content/uploads/2024/08/Aaron-Hagmaier.png?fit=1251%2C1251&ssl=1",
  },
  {
    name: "Suzanne Praill",
    role: "Director of Restorative Justice / Mediator",
    note: "My goal is to live lightly on the Earth, do no harm and support those who seek to make amends.",
    image:
      "https://i0.wp.com/fairfieldcenter.org/wp-content/uploads/2024/08/Sue.png?fit=1280%2C1280&ssl=1",
  },
  {
    name: "Rina Gao",
    role: "Operational Manager / Visual Communications Specialist",
    note: "Life goes on",
    image:
      "https://i0.wp.com/fairfieldcenter.org/wp-content/uploads/2024/08/Rina.png?fit=1251%2C1251&ssl=1",
  },
  {
    name: "Rachel Bishop",
    role: "Court Coordinator / Case Manager",
    image:
      "https://i0.wp.com/fairfieldcenter.org/wp-content/uploads/2025/01/IMG_6676-Large.jpeg?fit=1280%2C1280&ssl=1",
  },
  {
    name: "Helen Momoh",
    role: "Volunteer / Mediator",
    note: "We are bound in our humanity and in oneness and relationship with others.",
    image:
      "https://i0.wp.com/fairfieldcenter.org/wp-content/uploads/2024/08/Helen.png?fit=1251%2C1251&ssl=1",
  },
  {
    name: "Anna Pierce",
    role: "Client Services Coordinator",
    image:
      "https://i0.wp.com/fairfieldcenter.org/wp-content/uploads/2025/01/IMG_6670-Large.jpeg?fit=1280%2C1280&ssl=1",
  },
] satisfies Array<{
  name: string;
  role: string;
  note?: string;
  image: string;
}>;

const serviceAreas = [
  {
    title: "Mediation",
    text: "Private and court-connected processes for people who need practical agreements.",
    href: "/services/mediation",
    color: "bg-primary-500",
    textColor: "text-primary-700",
  },
  {
    title: "Training",
    text: "Mediator education for people building professional conflict resolution skills.",
    href: "/training",
    color: "bg-training-500",
    textColor: "text-training-700",
  },
  {
    title: "Restorative Justice",
    text: "Facilitated processes focused on accountability, repair, and community impact.",
    href: "/services/restorative-justice",
    color: "bg-rj-500",
    textColor: "text-rj-700",
  },
  {
    title: "Police Referral",
    text: "Police-referred mediation for appropriate community conflict calls.",
    href: "/services/police-referral",
    color: "bg-prm-500",
    textColor: "text-prm-700",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-neutral-950 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:min-h-[78vh]">
        <Image
          src={HERO_IMAGE}
          alt="A team gathered around a work table"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-950/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/82 via-neutral-950/52 to-neutral-950/18" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent" />

        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase text-primary-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-training-300" />
                About FairField Center
              </p>
              <h1 className="mt-6 text-[2.55rem] font-medium leading-[1.05] text-white sm:text-[4.35rem] lg:text-[5.2rem]">
                Virginia's first mediation center, built for{" "}
                <span className="font-serif italic text-primary-200">
                  practical resolution
                </span>
                .
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/82 sm:text-xl">
                Founded in 1982, the Community Mediation Center now doing
                business as the FairField Center, was the pioneering
                organization in Virginia offering professional conflict
                resolution and restorative justice services and training.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#team"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-primary-700 shadow-xl shadow-neutral-950/20 transition-colors duration-300 hover:bg-primary-500 hover:text-white"
                >
                  Meet the Team
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/28 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition-colors duration-300 hover:bg-white/20"
                >
                  Contact FairField
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section
        id="team"
        className="border-y border-neutral-200 bg-neutral-50 py-14 sm:py-20"
      >
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase text-primary-700 ring-1 ring-neutral-200">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                Our Team Members
              </p>
              <h2 className="mt-5 text-3xl font-medium leading-tight text-neutral-950 sm:text-[3rem]">
                People who keep the work personal, neutral, and prepared.
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => (
              <AnimateIn
                key={person.name}
                animation="fade-up"
                delay={index * 70}
                className="flex"
              >
                <article className="group flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm shadow-neutral-200/60 transition-colors duration-300 hover:border-primary-200">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <Image
                      src={person.image}
                      alt={`${person.name}, ${person.role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-bold leading-tight text-neutral-950">
                      {person.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-neutral-600">
                      {person.role}
                    </p>
                    {person.note ? (
                      <p className="mt-5 border-t border-neutral-200 pt-5 text-sm leading-relaxed text-neutral-500">
                        {person.note}
                      </p>
                    ) : null}
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <AnimateIn animation="fade-right">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-xs font-bold uppercase text-neutral-700 ring-1 ring-neutral-200">
                  <span className="h-2 w-2 rounded-full bg-training-500" />
                  What We Do
                </p>
                <h2 className="mt-5 text-3xl font-medium leading-tight text-neutral-950 sm:text-[3rem]">
                  One center, several ways to support conflict resolution.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                  FairField Center combines direct services, education, and
                  restorative practices so people can find the right path for
                  the conflict in front of them.
                </p>
              </div>
            </AnimateIn>

            <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm shadow-neutral-200/60">
              {serviceAreas.map((service, index) => (
                <AnimateIn
                  key={service.title}
                  animation="fade-up"
                  delay={index * 70}
                >
                  <Link
                    href={service.href}
                    className="group grid gap-4 border-b border-neutral-200 p-5 transition-colors duration-300 last:border-b-0 hover:bg-neutral-50 sm:grid-cols-[160px_1fr_auto] sm:items-center sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-3 w-3 shrink-0 rounded-full ${service.color}`}
                      />
                      <span
                        className={`text-base font-bold ${service.textColor}`}
                      >
                        {service.title}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {service.text}
                    </p>
                    <ArrowRightIcon className="h-4 w-4 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-700" />
                  </Link>
                </AnimateIn>
              ))}
            </div>
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
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
