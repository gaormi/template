"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";

export type MediationPath = "court" | "private";

type AccordionItem = {
  title: string;
  content: string;
};

type PricingTierColor = "primary" | "training" | "coparent";

const COURT_IMAGE =
  "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?auto=format&fit=crop&q=80&w=1200";
const PRIVATE_IMAGE =
  "https://images.unsplash.com/photo-1752659305529-509d9ca33ebb?auto=format&fit=crop&q=80&w=1200";
const COURT_VISUAL =
  "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?auto=format&fit=crop&q=80&w=1400";
const PRIVATE_VISUAL =
  "https://images.unsplash.com/photo-1714978444477-18c70c41ddf9?auto=format&fit=crop&q=80&w=1400";

const courtTopics: AccordionItem[] = [
  {
    title: "Court Orientation",
    content:
      "Court-referred parties may be required to attend a brief orientation. The orientation explains mediation, confidentiality, and whether the process is a good fit. Choosing to continue with mediation remains voluntary.",
  },
  {
    title: "GDC & Circuit Civil Matters",
    content:
      "Fairfield mediates civil disputes including landlord-tenant concerns, business and consumer interactions, money owed, debts, return of property, loans, contracts, personal injury, workplace conflict, estate issues, and elder care.",
  },
  {
    title: "JDR Family Matters",
    content:
      "For custody, visitation, support, and separation issues, parties can discuss parenting plans, medical and educational decisions, childcare, travel, holiday schedules, support information, property, debt, and other family transitions.",
  },
  {
    title: "Agreement & Court",
    content:
      "When an agreement is reached, the mediator records the terms in a formal document. Agreements can be enforceable contracts and may be entered as an order when appropriate. If no agreement is reached, the court date remains available.",
  },
];

const privateTopics: AccordionItem[] = [
  {
    title: "Comprehensive Case Assessment & Intake",
    content:
      "Includes individual pre-mediation consultations to identify core issues, screening for domestic safety and suitability, and dedicated case coordination so all parties are prepared.",
  },
  {
    title: "Structured Mediation Sessions",
    content:
      "Standard packages include up to 3 hours of direct mediation, typically structured as one 2-hour primary session and one 1-hour follow-up. This may include joint discussions and private caucuses as needed.",
  },
  {
    title: "Professional Documentation Services",
    content:
      "Includes preparation of formal documentation resulting from mediation, such as comprehensive separation or property settlement agreements, court-ready parenting plans, and child support worksheets when applicable.",
  },
  {
    title: "Administrative & Finalization Support",
    content:
      "Includes post-session revisions to draft agreements and support for the signing process so the agreement is ready for court filing or implementation.",
  },
];

const courtDetails = [
  {
    title: "Attorneys",
    text: "You may bring your attorney. If an attorney is not present, you may consult before signing an agreement.",
  },
  {
    title: "Strict Confidentiality",
    text: "Mediation discussions, notes, and offers cannot be used against you in court if unresolved. Mediators do not testify.",
  },
  {
    title: "Court-Subsidized",
    text: "Court-referred cases are generally subsidized through contracts with the Supreme Court of Virginia.",
  },
];

const privatePricingGroups = [
  {
    tier: "Tier 1",
    title: "General Civil & Community Mediation",
    subtitle: "GDC & CCC",
    color: "primary",
    summary:
      "Civil cases: contracts, business disputes, small claims, landlord-tenant issues, consumer-merchant disputes, estate distribution, neighborhood and workplace conflict.",
    options: [
      {
        label: "Tier 1A",
        title: "General District Court",
        price: "$450",
        text: "Court-related civil matters including small claims, contract and business disputes, landlord-tenant issues, consumer-merchant disputes, and estate distribution disagreements.",
      },
      {
        label: "Tier 1B",
        title: "Community Mediation",
        price: "$550",
        text: "Community-based disputes such as neighborhood and HOA grievances, workplace conflicts, interpersonal disputes, and other non-court-specific community issues.",
      },
    ],
  },
  {
    tier: "Tier 2",
    title: "Comprehensive Separation & Divorce",
    subtitle: "CCF with CVS or no CVS",
    color: "training",
    summary:
      "Separation cases: equitable distribution, retirement accounts, business interests, debt allocation, parenting plans, custody, visitation, and child support.",
    options: [
      {
        label: "Tier 2A",
        title: "Financial & Property Only",
        price: "$550",
        text: "Equitable distribution, retirement accounts, business interests, debt allocation, and separation agreements that do not involve minor children.",
      },
      {
        label: "Tier 2B",
        title: "Separation & Divorce with CVS",
        price: "$650",
        text: "Full-service mediation for financial and property issues plus complex parenting plans, custody arrangements, visitation schedules, and child support calculations.",
      },
    ],
  },
  {
    tier: "Tier 3",
    title: "Custody, Visitation & Support",
    subtitle: "Parenting plans and support modifications",
    color: "coparent",
    summary:
      "Family cases: co-parenting arrangements, visitation schedules, child support calculations, parenting plans, and post-divorce modifications.",
    options: [
      {
        label: "Tier 3",
        title: "Custody, Visitation & Support",
        price: "$550",
        text: "Co-parenting arrangements, visitation schedules, child support calculations, and parenting plans for unmarried parents or post-divorce modifications.",
      },
    ],
  },
] satisfies Array<{
  tier: string;
  title: string;
  subtitle: string;
  color: PricingTierColor;
  summary: string;
  options: Array<{
    label: string;
    title: string;
    price: string;
    text: string;
  }>;
}>;

const privateTerms = [
  "Each private package is designed as a start-to-finish solution for the dispute.",
  "A non-refundable $50 administrative fee is required to begin the process and is included in the total package price.",
  "If mediation requires more than the allotted 3 hours, additional time is billed at $150 per hour, per person.",
  "If you need financial assistance, please call Fairfield Center to ask about available options.",
];

function getPathFromSearch(value: string | null): MediationPath {
  return value === "court" ? "court" : "private";
}

export default function MediationPathExplorer({
  initialPath,
}: {
  initialPath: MediationPath;
}) {
  const [activePath, setActivePath] = useState<MediationPath>(initialPath);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setActivePath(getPathFromSearch(searchParams.get("type")));
  }, [searchParams]);

  function selectPath(path: MediationPath) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", path);
    setActivePath(path);
    router.replace(`${pathname}?${params.toString()}#choose-path`, {
      scroll: false,
    });
  }

  return (
    <section
      id="choose-path"
      className="relative overflow-hidden bg-primary-50/35 py-10 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
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
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              Choose Your Path
            </p>
            <h2 className="mt-4 text-4xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
              Start with the right{" "}
              <span className="font-semibold text-primary-500">
                mediation path
              </span>
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={100}>
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <PathChoice
              active={activePath === "private"}
              eyebrow="Primary path"
              title="Private Mediation"
              text="For individuals, families, businesses, workplaces, and community members who want to begin mediation directly."
              image={PRIVATE_IMAGE}
              onClick={() => selectPath("private")}
            />
            <PathChoice
              active={activePath === "court"}
              eyebrow="Court order or referral"
              title="Court-Referred Mediation"
              text="For General District, Circuit civil, or Juvenile and Domestic Relations matters where the court referred parties to mediation or orientation."
              image={COURT_IMAGE}
              onClick={() => selectPath("court")}
            />
          </div>
        </AnimateIn>

        <div className="mt-10 border-t border-primary-100/80 pt-8 sm:mt-14 sm:pt-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                Currently viewing
              </p>
              <h3 className="mt-1 text-2xl font-bold text-neutral-900">
                {activePath === "private"
                  ? "Private Mediation"
                  : "Court-Referred Mediation"}
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-primary-700 active:scale-[0.98]"
            >
              Contact Intake
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {activePath === "court" ? <CourtContent /> : <PrivateContent />}
        </div>
      </Container>
    </section>
  );
}

function PathChoice({
  active,
  eyebrow,
  title,
  text,
  image,
  onClick,
}: {
  active: boolean;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`group overflow-hidden rounded-[2rem] border bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-1 sm:rounded-[2.5rem] ${
        active
          ? "border-primary-500 shadow-xl shadow-primary-200/70"
          : "border-white hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/60"
      }`}
    >
      <div className="grid min-h-full sm:grid-cols-[0.45fr_0.55fr]">
        <div className="relative min-h-56 overflow-hidden bg-neutral-200 sm:min-h-full">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
        </div>
        <div className="flex min-h-72 flex-col justify-between p-6 sm:p-8">
          <div>
            <p
              className={`text-xs font-bold uppercase tracking-widest ${
                active ? "text-primary-600" : "text-slate-400"
              }`}
            >
              {eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              {text}
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <span
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                active
                  ? "bg-primary-600 text-white"
                  : "bg-primary-50 text-primary-600"
              }`}
            >
              {active ? "Showing now" : "Switch to this"}
            </span>
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                active
                  ? "bg-primary-100 text-primary-700"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function CourtContent() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <AnimateIn animation="fade-up">
        <OverviewPanel
          eyebrow="Court-Referred Cases"
          title="What to expect when the court refers your case"
          description="The court may require a short orientation, but the decision to mediate is voluntary. If everyone chooses to continue, the mediator helps the parties discuss issues and write any agreement reached."
          items={courtTopics}
          image={COURT_VISUAL}
          label="Orientation"
          visualTitle="10-15 minutes to understand the process"
          visualText="Parties learn how mediation works, what confidentiality means, and whether the process fits their case."
        />
      </AnimateIn>

      <div className="grid gap-5 md:grid-cols-3">
        {courtDetails.map((item, index) => (
          <AnimateIn
            key={item.title}
            animation="fade-up"
            delay={index * 90}
            className="flex"
          >
            <DetailCard {...item} />
          </AnimateIn>
        ))}
      </div>

      <AnimateIn animation="fade-up">
        <div className="rounded-[2.5rem] bg-primary-900 p-7 text-white shadow-xl shadow-primary-100/70 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-200">
                Come Prepared
              </p>
              <h3 className="mt-3 text-3xl font-medium leading-tight">
                Helpful topics to think through before mediation
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Children's best interests",
                "Medical and educational decisions",
                "Holiday and vacation schedules",
                "Income, childcare, and healthcare costs",
                "Property, debts, and support",
                "Business, contracts, or money owed",
              ].map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}

function PrivateContent() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <AnimateIn animation="fade-up">
        <OverviewPanel
          eyebrow="Private Mediation"
          title="A start-to-finish package for direct mediation requests"
          description="Private mediation is for people who want to begin outside a court referral. Packages include intake, screening, mediation time, documentation, revisions, and signing support."
          items={privateTopics}
          image={PRIVATE_VISUAL}
          label="Package Includes"
          visualTitle="Up to 3 hours of direct mediation"
          visualText="Most packages are structured as one primary session and one follow-up, with additional time available for complex cases."
        />
      </AnimateIn>

      <div>
        <div className="mb-8">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              Fee Tiers
            </p>
            <h3 className="mt-3 text-4xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
              Private service packages
            </h3>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-500">
            Prices are listed per person. If you need economic assistance,
            please call Fairfield Center to ask about available options.
          </p>
        </div>

        <div className="space-y-6">
          {privatePricingGroups.map((group, index) => (
            <AnimateIn key={group.tier} animation="fade-up" delay={index * 100}>
              <PricingTierGroup {...group} />
            </AnimateIn>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {privateTerms.map((item, index) => (
          <AnimateIn
            key={item}
            animation="fade-up"
            delay={index * 80}
            className="flex"
          >
            <div className="flex flex-1 flex-col rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-100/60">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <CheckIcon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold leading-relaxed text-neutral-700">
                {item}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

function OverviewPanel({
  eyebrow,
  title,
  description,
  items,
  image,
  label,
  visualTitle,
  visualText,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: AccordionItem[];
  image: string;
  label: string;
  visualTitle: string;
  visualText: string;
}) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
        <span className="h-2 w-2 rounded-full bg-primary-500" />
        {eyebrow}
      </p>
      <h3 className="mt-4 max-w-4xl text-4xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
        {title}
      </h3>
      <p className="mt-5 max-w-5xl text-lg leading-relaxed text-neutral-500">
        {description}
      </p>

      <div className="mt-9 grid gap-5 lg:auto-rows-fr lg:grid-cols-3">
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-xl shadow-neutral-200/60 lg:row-span-2 lg:min-h-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-900/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-100">
              {label}
            </p>
            <h4 className="mt-3 text-2xl font-bold leading-tight">
              {visualTitle}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-white/82">
              {visualText}
            </p>
          </div>
        </div>

        {items.map((item) => (
          <div
            key={item.title}
            className="group flex min-h-48 flex-col rounded-[2rem] border border-primary-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-100/60"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
              <CheckIcon className="h-5 w-5" />
            </div>
            <h4 className="text-lg font-bold leading-snug text-neutral-900">
              {item.title}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group flex flex-1 flex-col rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-100/60">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
        <ShieldIcon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-500">{text}</p>
    </div>
  );
}

function PricingTierGroup({
  tier,
  title,
  subtitle,
  summary,
  color,
  options,
}: {
  tier: string;
  title: string;
  subtitle: string;
  summary: string;
  color: PricingTierColor;
  options: Array<{
    label: string;
    title: string;
    price: string;
    text: string;
  }>;
}) {
  const theme = {
    primary: {
      card: "border-primary-100 bg-primary-50/55",
      dot: "bg-primary-500",
      label: "text-primary-600",
      divider: "border-primary-900/[0.08]",
      shadow: "hover:shadow-primary-100/80",
    },
    training: {
      card: "border-training-100 bg-training-50/60",
      dot: "bg-training-500",
      label: "text-training-600",
      divider: "border-training-900/[0.08]",
      shadow: "hover:shadow-training-100/80",
    },
    coparent: {
      card: "border-coparent-100 bg-coparent-50/65",
      dot: "bg-coparent-500",
      label: "text-coparent-600",
      divider: "border-coparent-900/[0.08]",
      shadow: "hover:shadow-coparent-100/80",
    },
  }[color];

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2.5rem] sm:p-8 ${theme.card} ${theme.shadow}`}
    >
      <div className="mb-6">
        <div className="mb-4 inline-flex items-center rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur-md">
          <span className={`mr-2 h-2.5 w-2.5 rounded-full ${theme.dot}`} />
          {subtitle}
        </div>
        <h3 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900">
          {title}
        </h3>
        <p className="mt-2 text-[15px] font-medium leading-relaxed text-neutral-600">
          {summary}
        </p>
      </div>

      <div
        className={`grid gap-5 border-t pt-6 ${theme.divider} ${
          options.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
        }`}
      >
        {options.map((option) => (
          <div key={option.label} className="flex flex-col rounded-[1.75rem] bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${theme.label}`}>
                  {option.label}
                </p>
                <h4 className="mt-1 text-xl font-bold text-neutral-900">
                  {option.title}
                </h4>
              </div>
              <p className="shrink-0 text-neutral-900">
                <span className="text-4xl font-bold">{option.price}</span>
                <span className="ml-1 text-sm font-semibold text-neutral-500">
                  /pp
                </span>
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              {option.text}
            </p>
          </div>
        ))}

        <Link
          href="/contact"
          className={`inline-flex items-center justify-self-start text-sm font-bold ${theme.label} ${options.length > 1 ? "md:col-span-2" : ""}`}
        >
          Start intake
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-12 items-center gap-3 rounded-2xl bg-white/12 px-4 py-3 text-sm font-semibold text-white">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary-700">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
      {children}
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

function ShieldIcon({ className }: { className?: string }) {
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
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}
