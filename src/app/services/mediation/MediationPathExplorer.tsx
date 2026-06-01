"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";
import StepAccordion from "~/components/ui/StepAccordion";

export type MediationPath = "court" | "private";

type AccordionItem = {
  title: string;
  content: string;
  image?: string;
};

type PricingTierColor = "primary" | "yellow" | "green";

const COURT_IMAGE =
  "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?auto=format&fit=crop&q=80&w=1200";
const PRIVATE_IMAGE =
  "https://images.unsplash.com/photo-1752659305529-509d9ca33ebb?auto=format&fit=crop&q=80&w=1200";
const COURT_VISUAL =
  "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?auto=format&fit=crop&q=80&w=1400";
const JDR_VISUAL =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1400";
const PRIVATE_VISUAL =
  "https://images.unsplash.com/photo-1714978444477-18c70c41ddf9?auto=format&fit=crop&q=80&w=1400";

const gdcCourtTopics: AccordionItem[] = [
  {
    title: "How Mediation Works",
    content:
      "Mediation is a confidential process using trained, neutral third-party mediators to help people discuss communication breakdowns, confusion over roles and expectations, and options for resolving conflict.",
  },
  {
    title: "Ground Rules",
    content:
      "Everyone is given an opportunity to speak, share their side of the story, listen openly, remain respectful, and look for common interests that may help everyone find a workable resolution.",
  },
  {
    title: "GDC Civil Topics",
    content:
      "Civil mediation can address landlord-tenant concerns, business and consumer interactions, money owed or debts, return of property, loans, contracts, personal injury, workplace conflict, estate issues, and elder care.",
  },
  {
    title: "Agreement & Court",
    content:
      "When a resolution is reached, the mediator records the points of agreement in a formal document. Once finalized and signed, the agreement is a legally recognized contract designed to be fair, achievable, and enforceable.",
  },
];

const jdrCourtTopics: AccordionItem[] = [
  {
    title: "Custody",
    content:
      "Come prepared to discuss major decisions including medical treatment and emergencies, educational plans and childcare, cultural values and upbringing, travel plans, and contact information.",
  },
  {
    title: "Visitation",
    content:
      "Come prepared to discuss regular weekdays, weekends, summertime, the school year, holidays, vacations, and how major holidays may be shared or alternated between parents.",
  },
  {
    title: "Child Support",
    content:
      "Bring key information such as gross monthly income, child health care costs, work-related child care costs, and extra-curricular activities.",
  },
  {
    title: "Property Separation",
    content:
      "Plans can address house or land, household furnishings, insurance, business interests, retirement, inheritance, bank accounts, spousal support, income tax returns, consumer debt, pets, medical bills, and future debt responsibilities.",
  },
];

const privateTopics: AccordionItem[] = [
  {
    title: "Intake",
    content:
      "Includes individual pre-mediation consultations to identify core issues, screening for domestic safety and suitability, and dedicated case coordination to ensure all parties are prepared.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Mediation Session",
    content:
      "Standard packages include up to 3 hours of direct mediation, typically structured as one 2-hour primary session and one 1-hour follow-up. This covers both joint discussions and private caucuses, or individual meetings, as needed to facilitate settlement.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Documentation",
    content:
      "Professional preparation of formal, formally structured documentation resulting from mediation, such as comprehensive separation or property settlement agreements, parenting plans formatted for court submission, and child support worksheets.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Finalization",
    content:
      "Post-session revisions to draft agreements and support for the formal signing process to ensure the agreement is ready for court filing or implementation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
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
    title: "Session Options",
    text: "Options include in-person sessions or video conferencing.",
  },
];

const privatePricingGroups = [
  {
    tier: "Tier 1",
    title: "General Civil & Community Mediation",
    subtitle: "GDC & CCC",
    color: "primary",
    summary:
      "General civil and community mediation for GDC and CCC matters.",
    options: [
      {
        label: "Tier 1A",
        title: "General District Court (GDC)",
        price: "$450",
        text: "Applicable to: Court-related civil matters, including but not limited to Small Claims, Monies related to Contract and Business disputes, Landlord-Tenant issues, Consumer-Merchant disputes, and personal property disagreements meeting the GDC jurisdiction.",
      },
      {
        label: "Tier 1B",
        title: "Circuit Court Civil Mediation (CCC)",
        price: "$550",
        text: "Applicable to: Civil issues in and/or out of court, including but not limited to, complex business and contract disputes, personal injury claims, high-value estate/probate contests, employment disputes, and complex property or land disagreements meeting the CCC jurisdiction.",
      },
    ],
  },
  {
    tier: "Tier 2",
    title: "Comprehensive Separation & Divorce Mediation",
    subtitle: "CCF w/CVS or no CVS",
    color: "yellow",
    summary:
      "This tier is divided based on whether Child, Visitation, and Support matters are included.",
    options: [
      {
        label: "Tier 2A / CCF",
        title: "Financial & Property Only (No CVS)",
        price: "$550",
        color: "yellow",
        text: "Applicable to: Divorce and Equitable Distribution, retirement accounts, business interests, debt allocation, and separation agreements that do not involve minor children.",
      },
      {
        label: "Tier 2B / CVS",
        title: "Separation & Divorce (With CVS)",
        price: "$650",
        color: "yellow",
        text: "Applicable to: Full-service mediation including all financial and property issues plus complex parenting plans, custody arrangements, visitation schedules, and child support calculations.",
      },
    ],
  },
  {
    tier: "Tier 3",
    title: "Custody, Visitation & Support",
    subtitle: "CVS",
    color: "green",
    summary:
      "Custody, visitation, and support mediation for parenting plans, co-parenting arrangements, and support modifications.",
    options: [
      {
        label: "Tier 3 / CVS",
        title: "Custody, Visitation & Support",
        price: "$550",
        color: "green",
        text: "Applicable to: Co-parenting arrangements, visitation schedules, child support calculations, and parenting plans for unmarried parents or post-divorce modifications.",
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
    color?: PricingTierColor;
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
            "linear-gradient(to right, var(--color-layout-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-layout-grid) 1px, transparent 1px)",
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
            <h2 className="mt-4 text-3xl font-normal tracking-tight text-neutral-900 sm:text-[2.75rem]">
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
          <div className="mb-8 flex justify-start">
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
      className={`group overflow-hidden rounded-[2rem] border bg-white text-left shadow-sm transition-colors duration-300 sm:rounded-[2.5rem] ${
        active
          ? "border-primary-500 shadow-md shadow-primary-100/70"
          : "border-white hover:border-primary-200"
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
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
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
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            Court-Referred Cases
          </p>
          <h3 className="mt-4 max-w-4xl text-3xl font-normal tracking-tight text-neutral-900 sm:text-[2.75rem]">
            What to expect when the court refers your case
          </h3>
          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-neutral-500">
            Court-referred mediation depends on the type of court case. GDC
            civil matters and JDR family matters prepare for different
            conversations, documents, and outcomes.
          </p>
        </div>
      </AnimateIn>

      <div className="grid gap-6 lg:grid-cols-2">
        <AnimateIn animation="fade-up">
          <CourtTrackPanel
            eyebrow="GDC brochure"
            title="General District Court Civil Mediation"
            description="For civil disputes such as landlord-tenant concerns, business and consumer interactions, money owed, property return, loans, contracts, personal injury, workplace conflict, estate issues, and elder care."
            image={COURT_VISUAL}
            topics={gdcCourtTopics}
          />
        </AnimateIn>
        <AnimateIn animation="fade-up" delay={100}>
          <CourtTrackPanel
            eyebrow="JDR brochure"
            title="Juvenile & Domestic Relations Family Mediation"
            description="For family matters involving custody, visitation, support, property separation, parenting schedules, communication, and agreements focused on children's best interests."
            image={JDR_VISUAL}
            topics={jdrCourtTopics}
          />
        </AnimateIn>
      </div>

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
    </div>
  );
}

function CourtTrackPanel({
  eyebrow,
  title,
  description,
  image,
  topics,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  topics: AccordionItem[];
}) {
  return (
    <section className="h-full overflow-hidden rounded-[2.5rem] border border-neutral-100 bg-white shadow-sm">
      <div className="relative min-h-72 overflow-hidden bg-primary-950">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/88 via-primary-900/34 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-100">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-3xl font-bold leading-tight">{title}</h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-white/86">
            {description}
          </p>
        </div>
      </div>

      <div className="divide-y divide-neutral-200 p-6 sm:p-8">
        {topics.map((topic, index) => (
          <div
            key={topic.title}
            className="grid gap-4 py-5 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr]"
          >
            <p className="text-xs font-bold tracking-widest text-primary-500">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <h4 className="text-lg font-bold leading-snug text-neutral-900">
                {topic.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {topic.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrivateContent() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <AnimateIn animation="fade-up">
        <OverviewPanel
          eyebrow="Private Mediation"
          title="A start-to-finish package for direct mediation request"
          titleSingleLine
          description="Private mediation is for people who want to begin outside a court referral. Packages include intake, screening, mediation time, documentation, revisions, and signing support."
          items={privateTopics}
          itemPresentation="visual"
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
            <h3 className="mt-3 text-3xl font-normal tracking-tight text-neutral-900 sm:text-[2.75rem]">
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

      <AnimateIn animation="fade-up">
        <div className="border-t border-neutral-200 pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                Private package terms
              </p>
              <h3 className="mt-3 text-3xl font-normal leading-tight tracking-tight text-neutral-900">
                Read before intake
              </h3>
            </div>
            <ol className="relative border-l border-primary-100">
              {privateTerms.map((item, index) => (
                <li
                  key={item}
                  className="relative mb-7 border-b border-neutral-200 pb-7 pl-8 last:mb-0 last:border-b-0 last:pb-0 sm:pl-10"
                >
                  <span className="absolute -left-[1.125rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-primary-100 bg-white text-xs font-bold text-primary-600 shadow-sm shadow-primary-100/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </AnimateIn>
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
  itemPresentation = "plain",
  titleSingleLine = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: AccordionItem[];
  image: string;
  label: string;
  visualTitle: string;
  visualText: string;
  itemPresentation?: "plain" | "visual";
  titleSingleLine?: boolean;
}) {
  return (
    <div>
      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500">
        <span className="h-2 w-2 rounded-full bg-primary-500" />
        {eyebrow}
      </p>
      <h3
        className={`mt-4 text-3xl font-normal tracking-tight text-neutral-900 sm:text-[2.75rem] ${
          titleSingleLine ? "max-w-none xl:whitespace-nowrap" : "max-w-4xl"
        }`}
      >
        {title}
      </h3>
      <p className="mt-5 max-w-5xl text-lg leading-relaxed text-neutral-500">
        {description}
      </p>

      {itemPresentation === "visual" ? (
        <VisualOverviewLayout items={items} />
      ) : (
        <div className="mt-9 grid gap-5 lg:auto-rows-fr lg:grid-cols-3">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-lg shadow-neutral-200/60 lg:row-span-2 lg:min-h-0">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
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

          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex min-h-48 flex-col rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-primary-200 hover:bg-primary-50/30"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary-500">
                Included {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-5 text-lg font-bold leading-snug text-neutral-900">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function VisualOverviewLayout({
  items,
}: {
  items: AccordionItem[];
}) {
  const accordionItems = items.map((item, index) => ({
    num: String(index + 1).padStart(2, "0"),
    title: item.title,
    content: item.content,
    image: item.image,
  }));

  return (
    <div className="mt-9">
      <StepAccordion
        steps={accordionItems}
        label="Included"
        theme="primary"
      />
    </div>
  );
}

function DetailCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-1 flex-col rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-primary-200 hover:bg-primary-50/30">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
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
    color?: PricingTierColor;
    text: string;
  }>;
}) {
  const theme = {
    primary: {
      card: "border-primary-100 bg-primary-50/55",
      dot: "bg-primary-500",
      label: "text-primary-600",
      divider: "border-primary-900/[0.08]",
      optionAccent: "border-primary-100",
    },
    yellow: {
      card: "border-cert-ccc-decor-start bg-cert-ccc-bg",
      dot: "bg-cert-ccc-dot",
      label: "text-yellow-700",
      divider: "border-cert-ccc-text/[0.12]",
      optionAccent: "border-cert-ccc-decor-start",
    },
    green: {
      card: "border-cert-jdr-decor-start bg-cert-jdr-bg",
      dot: "bg-cert-jdr-dot",
      label: "text-emerald-700",
      divider: "border-cert-jdr-text/[0.12]",
      optionAccent: "border-cert-jdr-decor-start",
    },
  }[color];

  const optionThemes = {
    primary: {
      accent: "border-primary-100",
      dot: "bg-primary-500",
      label: "text-primary-600",
    },
    yellow: {
      accent: "border-cert-ccc-decor-start",
      dot: "bg-cert-ccc-dot",
      label: "text-yellow-700",
    },
    green: {
      accent: "border-cert-jdr-decor-start",
      dot: "bg-cert-jdr-dot",
      label: "text-emerald-700",
    },
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-sm sm:rounded-[2.5rem] sm:p-8 ${theme.card}`}
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
        {options.map((option, optionIndex) => {
          const optionTheme = option.color
            ? optionThemes[option.color]
            : {
                accent: theme.optionAccent,
                dot: theme.dot,
                label: theme.label,
              };

          return (
            <div
              key={option.label}
              className={`flex flex-col border-l-4 pl-4 ${optionTheme.accent}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${optionTheme.label}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${optionTheme.dot}`}
                    />
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
          );
        })}

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
