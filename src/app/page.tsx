import Link from "next/link";
import Image from "next/image";
import Container from "~/components/layout/Container";
import Button from "~/components/ui/Button";
import AnimateIn from "~/components/ui/AnimateIn";
import FAQ from "~/components/ui/FAQ";

/* ── Icons ── */
const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>
);
const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
);
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
);
const AcademicIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
);
const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
);
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
);

/* ── Decorative elements ── */
function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

function DotScatter({ className }: { className?: string }) {
  const dots = [
    { cx: 8, cy: 5, r: 2.5 },
    { cx: 28, cy: 12, r: 3 },
    { cx: 50, cy: 3, r: 2 },
    { cx: 15, cy: 30, r: 3 },
    { cx: 42, cy: 25, r: 2.5 },
    { cx: 65, cy: 18, r: 2 },
    { cx: 5, cy: 52, r: 2 },
    { cx: 30, cy: 48, r: 2.5 },
    { cx: 55, cy: 42, r: 3 },
    { cx: 72, cy: 38, r: 2 },
    { cx: 18, cy: 68, r: 2.5 },
    { cx: 45, cy: 62, r: 2 },
    { cx: 68, cy: 58, r: 2.5 },
    { cx: 35, cy: 75, r: 3 },
    { cx: 60, cy: 72, r: 2 },
  ];
  return (
    <svg className={className} viewBox="0 0 80 80" fill="currentColor">
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} opacity={0.3 + (i % 3) * 0.15} />
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — Left text + Right photo collage
         ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/50 to-training-50/30 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28">
        {/* Subtle background dots */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #2984D1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Text */}
            <div>
              <AnimateIn animation="fade-up">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100/80 px-4 py-2">
                  <span className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-training-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rj-400" />
                  </span>
                  <span className="text-sm font-semibold text-primary-700">
                    Serving Virginia Since 1982
                  </span>
                </div>
              </AnimateIn>

              <AnimateIn animation="fade-up" delay={100}>
                <h1 className="text-5xl font-medium leading-[1.05] text-neutral-900 sm:text-6xl lg:text-7xl">
                  Empowering{" "}
                  <span className="text-primary-500">Resolution.</span>
                  <br />
                  Building{" "}
                  <span className="font-serif italic text-training-500">
                    Peace.
                  </span>
                </h1>
              </AnimateIn>

              <AnimateIn animation="fade-up" delay={200}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  Fairfield Center provides expert neutral ground and
                  professional guidance to navigate complex disputes and foster
                  restorative justice for a stronger community.
                </p>
              </AnimateIn>

              <AnimateIn animation="fade-up" delay={300}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/services" size="lg" className="rounded-full bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/25">
                    Explore Our Programs
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                  <Button href="/contact" size="lg" variant="outline" className="rounded-full">
                    Contact Us
                  </Button>
                </div>
              </AnimateIn>
            </div>

            {/* Right — Photo collage with decorative elements */}
            <AnimateIn animation="fade-left" delay={200}>
              <div className="relative mx-auto max-w-md lg:max-w-none">

                {/* ── Two-photo layout (top-aligned) ── */}
                <div className="relative flex items-start gap-4">
                  {/* Photo A — Main (larger): TL rounded, TR square, BL rounded, BR rounded */}
                  <div className="relative w-[58%] shrink-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl rounded-tr-lg shadow-xl">
                      <Image
                        src="/photos/hero-main.jpg"
                        alt="People enjoying a sunny day together in a community park"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 60vw, 30vw"
                        priority
                      />
                    </div>

                    {/* ── Stamp badge at bottom-right of left photo ── */}
                    <div className="absolute -bottom-5 -right-5 z-20 sm:-bottom-6 sm:-right-6">
                      <div className="hero-stamp relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-[3px] border-dashed border-primary-400/60 bg-white shadow-lg sm:h-[5.5rem] sm:w-[5.5rem]">
                        <div className="text-center">
                          <p className="text-[9px] font-bold uppercase leading-tight tracking-wider text-primary-600 sm:text-[10px]">Since</p>
                          <p className="text-base font-extrabold leading-none text-primary-700 sm:text-lg">1982</p>
                          <p className="text-[7px] font-semibold uppercase tracking-wide text-primary-500 sm:text-[8px]">40+ Years</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Photo B — Secondary: TR rounded, BR rounded, TL square, BL square */}
                  <div className="relative w-[42%]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl rounded-tl-lg rounded-bl-lg shadow-xl">
                      <Image
                        src="/photos/hero-hands.jpg"
                        alt="Two people shaking hands, symbolizing agreement and peace"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 40vw, 20vw"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* ── Sparkles (varied sizes, some overlapping photos) ── */}
                <Sparkle className="sparkle-float absolute -top-4 right-16 z-30 h-8 w-8 text-training-400" />
                <Sparkle className="sparkle-float-delay absolute right-0 top-[40%] z-30 h-4 w-4 text-rj-400" />
                <Sparkle className="sparkle-float absolute -left-3 top-[20%] z-30 h-3 w-3 text-primary-400" />
                <Sparkle className="sparkle-float-delay absolute bottom-8 right-[30%] z-30 h-6 w-6 text-training-300" />
                <Sparkle className="sparkle-float absolute -bottom-3 left-[15%] z-30 h-3.5 w-3.5 text-rj-300" />

                {/* ── Irregular dot scatter (behind photos) ── */}
                <DotScatter className="absolute -bottom-14 -left-14 -z-10 h-32 w-32 text-primary-300" />
                <DotScatter className="absolute -top-12 -right-12 -z-10 h-28 w-28 text-training-300/70" />

              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          TRANSITION — divider strip
         ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-10 dark:bg-neutral-900">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-800" />
              <div className="flex items-center gap-3 text-sm font-medium text-neutral-400 dark:text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-training-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-rj-400" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-800" />
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          MISSION — right text + left visual (swapped from hero)
         ══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-white via-primary-50/30 to-training-50/20 py-14 sm:py-20 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — Visual (swapped side from hero) */}
            <AnimateIn animation="fade-right">
              <div className="relative">
                <DotScatter className="absolute -top-8 -right-4 h-24 w-24 text-training-300" />
                <Sparkle className="sparkle-float absolute -bottom-4 right-8 h-5 w-5 text-primary-400" />

                {/* Vision quote card */}
                <div className="relative overflow-hidden rounded-3xl border border-primary-200/50 bg-gradient-to-br from-primary-50 to-training-50 p-8 shadow-lg dark:border-primary-800/30 dark:from-primary-900/30 dark:to-training-900/20">
                  <div className="relative">
                    <blockquote className="text-lg italic leading-relaxed text-neutral-700 dark:text-neutral-300">
                      &ldquo;A community where conflict is handled with dignity,
                      where justice is restorative, and where every voice is heard
                      in the pursuit of peace.&rdquo;
                    </blockquote>
                    <p className="mt-4 text-sm font-semibold text-primary-500">
                      &mdash; Our Vision
                    </p>
                  </div>

                  {/* Community image */}
                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200"
                      alt="Diverse community members smiling together"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Right — Text (swapped side from hero) */}
            <AnimateIn animation="fade-left" delay={150}>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary-500">
                  Our Mission & Legacy
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
                  Restoring relationships for over four decades
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                  To provide and promote professional services that help
                  individuals and organizations navigate conflict constructively
                  and restore relationships.
                </p>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Founded as Virginia&apos;s first mediation center, Fairfield
                  Center was created as a progressive alternative to the
                  adversarial court system. For over 40 years, we have grown
                  from a local initiative into a statewide resource hub.
                </p>
                <div className="mt-10 flex gap-8 sm:gap-12">
                  {[
                    { value: "1982", label: "Founded" },
                    { value: "40+", label: "Years of Service" },
                    { value: "500+", label: "Cases Annually" },
                  ].map((stat) => (
                    <div key={stat.label}>
              <p className="text-3xl font-extrabold tracking-tight text-primary-500 sm:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          CORE PROGRAMS — colorful cards
         ══════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-500">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
                Core Programs
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                From mediation to training, we provide comprehensive conflict
                resolution services for individuals, families, and communities.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Mediation — circle shape */}
            <AnimateIn animation="fade-up" delay={0} className="flex">
              <Link href="/services/mediation" className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-200/40 dark:from-primary-900/20 dark:to-primary-900/10">
                {/* Diamond grid */}
                <div className="absolute top-3 right-3 grid grid-cols-2 gap-1.5 transition-transform duration-300 group-hover:scale-110">
                  <div className="h-4 w-4 rotate-45 rounded-sm bg-primary-300/35" />
                  <div className="h-4 w-4 rotate-45 rounded-sm bg-primary-200/30" />
                  <div className="h-4 w-4 rotate-45 rounded-sm bg-primary-200/30" />
                  <div className="h-4 w-4 rotate-45 rounded-sm bg-primary-300/35" />
                </div>
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-neutral-800">
                    <ScaleIcon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    Mediation Services
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Confidential process where neutral professionals facilitate
                    dialogue to help parties reach mutual agreements.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary-400" />Family, Divorce & Custody</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary-400" />Workplace & HR Disputes</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary-400" />Civil & Small Claims</li>
                  </ul>
                  <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-500">
                    Explore <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {/* Training — triangle/corner-fold shape */}
            <AnimateIn animation="fade-up" delay={100} className="flex">
              <Link href="/training" className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-training-50 to-training-100/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-training-200/40 dark:from-training-900/20 dark:to-training-900/10">
                {/* Cross flower */}
                <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:scale-110">
                  <div className="relative h-11 w-11">
                    <div className="absolute top-0 left-1/2 h-full w-3.5 -translate-x-1/2 rounded-full bg-training-300/30" />
                    <div className="absolute top-1/2 left-0 h-3.5 w-full -translate-y-1/2 rounded-full bg-training-300/30" />
                  </div>
                </div>
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-neutral-800">
                    <AcademicIcon className="h-6 w-6 text-training-500" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    Training & Workshops
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Professional skill-building for individuals and organizations
                    in conflict resolution and mediation.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-training-500" />Certified Mediator Training</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-training-500" />Continuing Education (CME)</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-training-500" />Mediation Ethics Workshop</li>
                  </ul>
                  <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-training-500">
                    View Calendar <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {/* Co-Parenting — heart shape */}
            <AnimateIn animation="fade-up" delay={200} className="flex">
              <Link href="/training/co-parenting" className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-coparent-50 to-coparent-100/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-coparent-200/40 dark:from-coparent-900/20 dark:to-coparent-900/10">
                {/* Asterisk / star */}
                <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:scale-110">
                  <div className="relative h-11 w-11">
                    <div className="absolute top-0 left-1/2 h-full w-3 -translate-x-1/2 rounded-full bg-coparent-300/30" />
                    <div className="absolute top-0 left-1/2 h-full w-3 -translate-x-1/2 rotate-[60deg] rounded-full bg-coparent-200/35" />
                    <div className="absolute top-0 left-1/2 h-full w-3 -translate-x-1/2 rotate-[-60deg] rounded-full bg-coparent-200/35" />
                  </div>
                </div>
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-neutral-800">
                    <UsersIcon className="h-6 w-6 text-coparent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    Co-Parenting Workshops
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Court-approved &ldquo;Meeting in the Middle&rdquo; class
                    helping parents navigate co-parenting after separation.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-coparent-400" />Court-Approved Program</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-coparent-400" />Online via Zoom</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-coparent-400" />Sliding Fee Scale</li>
                  </ul>
                  <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-coparent-500">
                    Learn More <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {/* Restorative Justice — organic blob shape */}
            <AnimateIn animation="fade-up" delay={300} className="flex">
              <Link href="/services/restorative-justice" className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-rj-50 to-rj-100/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rj-200/40 dark:from-rj-900/20 dark:to-rj-900/10">
                {/* Circle grid */}
                <div className="absolute top-3 right-3 grid grid-cols-2 gap-1.5 transition-transform duration-300 group-hover:scale-110">
                  <div className="h-5 w-5 rounded-full bg-rj-200/40" />
                  <div className="h-5 w-5 rounded-full bg-rj-300/30" />
                  <div className="h-5 w-5 rounded-full bg-rj-300/30" />
                  <div className="h-5 w-5 rounded-full bg-rj-200/40" />
                </div>
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-neutral-800">
                    <HeartIcon className="h-6 w-6 text-rj-400" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    Restorative Justice
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Focused on repairing harm and addressing the needs of victims
                    and the community rather than punishment.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-rj-400" />Victim-Offender Dialogue</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-rj-400" />Community Circles</li>
                    <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-rj-400" />Youth Programs</li>
                  </ul>
                  <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-rj-400">
                    Learn More <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          TRAINING HIGHLIGHT — mirrored: left text + right photo
         ══════════════════════════════════════════════ */}
      <section className="bg-training-50/40 py-14 sm:py-20 dark:bg-neutral-950">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            {/* Left — 3/4 circle photo + badge */}
            <AnimateIn animation="fade-right">
              <div className="relative w-[320px] sm:w-[380px] lg:w-full lg:max-w-[460px]">
                {/* Decorative color circle — behind photo */}
                <div className="absolute -top-6 -left-6 h-44 w-44 rounded-full bg-training-200/50 sm:h-52 sm:w-52" />

                {/* Main photo — circle with square top-right corner */}
                <div
                  className="relative aspect-square overflow-hidden shadow-xl"
                  style={{ borderRadius: "50% 0.75rem 50% 50%" }}
                >
                  <Image
                    src="/photos/training.jpg"
                    alt="Professional training workshop in session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 360px, 500px"
                  />
                </div>

                {/* Decorative crescent — behind badge */}
                <div className="absolute -bottom-2 right-6 h-20 w-20 rounded-full bg-training-300/60 sm:right-10 sm:h-24 sm:w-24" />

                {/* 4 Tracks badge circle — bottom-right */}
                <div className="absolute -bottom-4 right-0 z-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg sm:right-4 sm:h-32 sm:w-32">
                  <div className="text-center px-2">
                    <AcademicIcon className="mx-auto h-6 w-6 text-training-500" />
                    <p className="mt-1 text-2xl font-extrabold leading-none text-neutral-900">4</p>
                    <p className="text-xs font-semibold text-neutral-900">Tracks</p>
                    <p className="mt-0.5 text-[10px] text-neutral-500">Certification</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Right — Text */}
            <AnimateIn animation="fade-left" delay={150}>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-training-500">
                  Training Programs
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
                  Become a Certified Mediator
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Virginia Supreme Court certified training for aspiring and
                  current mediators. Our programs meet all state certification
                  requirements.
                </p>

                {/* Certification tracks */}
                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    { label: "General District Court", sub: "28 hrs training · 2 obs · 3 co-meds" },
                    { label: "Circuit Court Civil", sub: "48 hrs training · 2 obs · 5 co-meds" },
                    { label: "Juvenile & Domestic Relations", sub: "64 hrs training · 2 obs · 5 co-meds" },
                    { label: "Circuit Court Family", sub: "76 hrs training · 2 obs · 5 co-meds" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-training-500 mt-0.5">
                        <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{item.label}</p>
                        <p className="text-xs text-neutral-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Requirements */}
                <div className="mt-8 rounded-xl bg-training-50/80 p-5 dark:bg-training-900/10">
                  <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">Requirements</p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-training-400" />
                      Minimum Bachelor&apos;s degree (waiver available with relevant experience)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-training-400" />
                      All tracks start with the 24-hr Basic Mediation (GDC) Training + 4-hr VA Judicial System
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-training-400" />
                      Mentorship includes observations and co-mediations with a certified mentor
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href="/training" variant="ghost" className="rounded-full border border-training-500 bg-training-500 text-white hover:bg-transparent hover:text-training-600 transition-colors">
                    View Training Calendar
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          CO-PARENTING — card layout
         ══════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="overflow-hidden rounded-3xl bg-coparent-50 p-6 sm:p-10 dark:bg-coparent-900/10">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                {/* Left — Title + Button + Photo */}
                <div className="flex flex-col">
                  <p className="text-sm font-bold uppercase tracking-widest text-coparent-500">
                    Co-Parenting Program
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
                    Meeting in the Middle
                  </h2>
                  <div className="mt-4">
                    <Button href="/training/co-parenting" variant="ghost" className="rounded-full border border-coparent-500 bg-coparent-500 text-white hover:bg-transparent hover:text-coparent-600 transition-colors">
                      Register for a Class
                    </Button>
                  </div>
                  <div className="mt-6 flex-1">
                    <div className="relative h-full min-h-[220px] overflow-hidden rounded-2xl">
                      <Image
                        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1200"
                        alt="Parents in a supportive co-parenting conversation"
                        fill
                        className="object-cover object-[30%_center]"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Right — Description + Features */}
                <div className="flex flex-col justify-between">
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Our court-approved co-parenting education class helps parents
                    develop effective communication skills and create a cooperative
                    parenting plan that puts children first.
                  </p>

                  <div className="mt-8 space-y-6">
                    {[
                      {
                        title: "Court-Approved",
                        desc: "Required by Virginia courts for custody and divorce proceedings. Meets all state requirements.",
                      },
                      {
                        title: "Online via Zoom",
                        desc: "Half-day session (9 AM – 1 PM). Attend comfortably from home — no travel needed.",
                      },
                      {
                        title: "Affordable & Accessible",
                        desc: "$50 standard / $30 reduced fee. Financial barriers should never prevent access to this program.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coparent-500 mt-0.5">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</p>
                          <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
         ══════════════════════════════════════════════ */}
      <section className="bg-neutral-50/50 py-14 sm:py-20 dark:bg-neutral-950">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-500">
                Community Voices
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
                Hear from Those We&apos;ve Served
              </h2>
            </div>
          </AnimateIn>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "Fairfield Center provided a bridge when we thought all communication had been destroyed. Their team is compassionate and truly professional.",
                role: "Mediation Client",
                color: "primary" as const,
              },
              {
                quote: "The restorative justice process helped our family heal in a way the traditional court system never could. It gave everyone a voice and a path forward.",
                role: "RJ Participant",
                color: "rj" as const,
              },
              {
                quote: "The mediation training was transformative for our HR department. We now handle internal friction with a completely different mindset.",
                role: "Training Alum",
                color: "training" as const,
              },
            ].map((t, i) => {
              const c = {
                primary: { dot: "bg-primary-400", text: "text-primary-500", bg: "bg-primary-50" },
                rj: { dot: "bg-rj-400", text: "text-rj-400", bg: "bg-rj-50" },
                training: { dot: "bg-training-400", text: "text-training-500", bg: "bg-training-50" },
              }[t.color];

              return (
                <AnimateIn key={i} animation="fade-up" delay={i * 120}>
                  <div className="relative rounded-2xl bg-white p-8 shadow-sm dark:bg-neutral-900">
                    {/* Color dot accent */}
                    <div className={`absolute top-6 right-6 h-3 w-3 rounded-full ${c.dot}`} />
                    <svg className="mb-4 h-8 w-8 text-neutral-200 dark:text-neutral-700" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                    </svg>
                    <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {t.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${c.bg} dark:bg-neutral-800`}>
                        <span className={`text-sm font-bold ${c.text}`}>{t.role[0]}</span>
                      </div>
                      <span className={`text-sm font-semibold ${c.text}`}>{t.role}</span>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
         ══════════════════════════════════════════════ */}
      <section className="bg-neutral-50/50 py-14 sm:py-20 dark:bg-neutral-950">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-500">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimateIn>
          <div className="mt-12">
            <AnimateIn animation="fade-up" delay={100}>
              <FAQ />
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          CTA — Donation / Contact
         ══════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden py-14 sm:py-20">
        {/* Background image with overlay */}
        <Image
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1600"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-[350px] w-[350px] rounded-full bg-training-400/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-rj-400/15 blur-3xl" />
        </div>
        <Container className="relative">
          <AnimateIn animation="fade-up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Help Us Foster Peace
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-100">
                Your tax-deductible contributions ensure that professional
                mediation and restorative justice remain accessible to all
                community members, regardless of financial circumstances.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" className="rounded-full bg-white text-primary-700 shadow-lg hover:bg-primary-50 focus-visible:ring-white">
                  Donate to Fairfield
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 text-white hover:bg-white/10"
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
