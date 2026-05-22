import Image from "next/image";
import Container from "~/components/layout/Container";
import AnimateIn from "~/components/ui/AnimateIn";
import Button from "~/components/ui/Button";
import StepAccordion from "~/components/ui/StepAccordion";

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
);

const trainingCalendarUrl = "https://calendar.google.com/calendar/embed?src=c_45e7f382f3ae921e0e047070d0d1d8d8ba02d21bae9bce774ed38dae5183981e%40group.calendar.google.com&ctz=America%2FNew_York";

/* ── Step icons (small, 16x16) ── */
const UserCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0M17.25 15l2.25 2.25L21.75 15" /></svg>
);
const MapIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503-11.573l5.25-2.1A.75.75 0 0121.75 4.5v13.5a.75.75 0 01-.497.707l-5.25 2.1a.75.75 0 01-.506 0L9.75 18.75l-5.25 2.1A.75.75 0 013.75 20.1V6.6a.75.75 0 01.497-.707l5.25-2.1a.75.75 0 01.506 0L15.75 5.85z" /></svg>
);
const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
);
const UsersSmIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
);
const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0019.875 10.875a3.375 3.375 0 00-3.375-3.375h-9A3.375 3.375 0 004.125 10.875 3.375 3.375 0 007.5 14.25v4.5m4.5-15v3.75" /></svg>
);
const RefreshIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>
);

/* ── Section icons ── */
const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
);
const CalendarClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
);
const ShieldAlertIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>
);
const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
);
const FileTextIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
);

/* ── Data ── */

const steps = [
  {
    num: "01",
    title: "Check Eligibility",
    content: "You need a minimum Bachelor's degree. If you don't have one, you can apply for a waiver by submitting a letter to Dispute Resolution Services (DRS) with your resume and two recommendation letters addressing your communication skills. A character review is also conducted — felony convictions or revoked professional licenses are permanent bars.",
    image: "/photos/step-1.jpg",

    icon: <UserCheckIcon />,
  },
  {
    num: "02",
    title: "Choose Your Track",
    content: "Virginia offers four main certification tracks based on the type of cases you want to mediate. Many mediators start with GDC (the entry-level track) and build upward, as holding a lower certification reduces mentorship requirements for higher levels.",
    image: "/photos/step-2.jpg",
    icon: <MapIcon />,
  },
  {
    num: "03",
    title: "Complete Training",
    content: "All tracks start with the 24-hour Basic Mediation (GDC) Training and the 4-hour Virginia's Judicial System course. Family tracks add specialized courses in family mediation, domestic abuse screening, and support matters. You must complete all training within 24 months of your first course.",
    image: "/photos/step-3.jpg",
    icon: <BookOpenIcon />,
  },
  {
    num: "04",
    title: "Complete Mentorship",
    content: "After training, you work with a Virginia-certified mentor mediator. This includes observing real mediation sessions and co-mediating cases under supervision. Fairfield Center can pair you with a mentor and provides an OES-approved 8-hour Observation Course when live cases aren't available.",
    image: "/photos/step-4.jpg",
    icon: <UsersSmIcon />,
  },
  {
    num: "05",
    title: "Get Certified",
    content: "Compile your Mentee Portfolio Forms (ADR-1008), Mentee Evaluation Forms (ADR-1001), and required Memoranda of Agreement samples. Submit everything along with Form ADR-1000A to DRS. Once approved, you are a Virginia-certified mediator.",
    image: "/photos/step-5.jpg",
    icon: <AwardIcon />,
  },
  {
    num: "06",
    title: "Stay Current",
    content: "Certified mediators must earn Continuing Mediator Education (CME) credits and apply for recertification periodically. Fairfield Center offers OES-compliant CME courses and ethics workshops to keep your certification active.",
    image: "/photos/step-6.jpg",
    icon: <RefreshIcon />,
  },
];

const tracks = [
  {
    id: "gdc",
    name: "General District Court (GDC)",
    scope: "Civil cases: contracts, personal injury, employment disputes, small claims, landlord-tenant.",
    hours: "28",
    courses: [
      "24-hour Basic Mediation (GDC) Training",
      "4-hour Virginia's Judicial System",
    ],
    mentorship: "2 observations + 3 co-mediations (min 5 hours)",
    memo: "1 Memorandum of Agreement",
  },
  {
    id: "ccc",
    name: "Circuit Court Civil (CCC)",
    scope: "Complex civil cases: medical malpractice, personal injury, contracts, condemnation.",
    hours: "48",
    courses: [
      "24-hour Basic Mediation (GDC) Training",
      "4-hour Virginia's Judicial System",
      "20-hour Circuit Court Civil Training",
    ],
    mentorship: "2 observations + 5 co-mediations (min 10 hours). If you hold GDC: 1 observation + 2 co-mediations.",
    memo: "1 Memorandum of Agreement",
  },
  {
    id: "jdr",
    name: "Juvenile & Domestic Relations (J&DR)",
    scope: "Family cases: custody, visitation, support matters in JDR Court.",
    hours: "64",
    courses: [
      "24-hour Basic Mediation (GDC) Training",
      "4-hour Virginia's Judicial System",
      "20-hour Family Mediation Skills",
      "8-hour Screening for Domestic Abuse",
      "8-hour Support Matters in VA Family Courts",
    ],
    mentorship: "2 observations + 5 co-mediations (min 10 hours)",
    memo: "MoA in Custody/Visitation + 2 Child Support Calculation Worksheets",
  },
  {
    id: "ccf",
    name: "Circuit Court Family (CCF)",
    scope: "Family cases in Circuit Court: equitable distribution, divorce.",
    hours: "76",
    courses: [
      "All J&DR courses (64 hours)",
      "12-hour Circuit Court Family Training",
    ],
    mentorship: "2 observations + 5 co-mediations (min 10 hours). If you hold J&DR: 1 observation + 2 co-mediations.",
    memo: "MoA in equitable distribution + Custody/Visitation MoA + 2 CS Worksheets",
  },
];

const trackStyles: Record<string, { bg: string; dot: string; title: string; decorFrom: string; decorTo: string; decor: "puzzle" | "diamond" | "leaves" | "cube" }> = {
  gdc: {
    bg: "bg-[#F0F4FF]",
    dot: "bg-[#4F46E5]",
    title: "text-[#1E3A8A]",
    decorFrom: "#C7D2FE",
    decorTo: "#6366F1",
    decor: "puzzle",
  },
  ccc: {
    bg: "bg-[#FFFCF0]",
    dot: "bg-[#EAB308]",
    title: "text-[#423800]",
    decorFrom: "#FEF08A",
    decorTo: "#EAB308",
    decor: "diamond",
  },
  jdr: {
    bg: "bg-[#EBF5EE]",
    dot: "bg-[#2D9966]",
    title: "text-[#123D29]",
    decorFrom: "#BDE2CB",
    decorTo: "#2D9966",
    decor: "leaves",
  },
  ccf: {
    bg: "bg-[#FFF4ED]",
    dot: "bg-[#FF7733]",
    title: "text-[#2B1A10]",
    decorFrom: "#FFD5BB",
    decorTo: "#FF7733",
    decor: "cube",
  },
};

function TrackDecor({
  variant,
  from,
  to,
}: {
  variant: "puzzle" | "diamond" | "leaves" | "cube";
  from: string;
  to: string;
}) {
  const gradientId = `track-decor-${variant}`;

  if (variant === "puzzle") {
    return (
      <svg className="pointer-events-none absolute bottom-4 right-5 h-40 w-40 opacity-45 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-60 md:h-48 md:w-48" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <g transform="translate(50, 50) scale(1.35) translate(-48, -54)">
          <path d="M 28 28 H 68 V 43 A 11 11 0 1 1 68 65 V 80 H 28 V 65 A 11 11 0 1 0 28 43 Z" fill={`url(#${gradientId})`} />
        </g>
      </svg>
    );
  }

  if (variant === "diamond") {
    return (
      <svg className="pointer-events-none absolute bottom-4 right-5 h-40 w-40 opacity-45 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-60 md:h-48 md:w-48" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path d="M50 10 Q 75 50 90 50 Q 75 50 50 90 Q 25 50 10 50 Q 25 50 50 10 Z" fill={`url(#${gradientId})`} />
      </svg>
    );
  }

  if (variant === "leaves") {
    return (
      <svg className="pointer-events-none absolute bottom-4 right-5 h-40 w-40 opacity-40 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-55 md:h-48 md:w-48" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <g fill={`url(#${gradientId})`}>
          <path d="M 46 46 H 10 A 36 36 0 0 1 46 10 V 46 Z" />
          <path d="M 54 46 V 10 A 36 36 0 0 1 90 46 H 54 Z" />
          <path d="M 46 54 V 90 A 36 36 0 0 1 10 54 H 46 Z" />
          <path d="M 54 54 H 90 A 36 36 0 0 1 54 90 V 54 Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg className="pointer-events-none absolute bottom-4 right-5 h-40 w-40 opacity-45 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-60 md:h-48 md:w-48" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <g transform="translate(50, 50) scale(1.1) translate(-50, -55)" stroke={`url(#${gradientId})`} strokeWidth="6" strokeLinejoin="round" fill="none">
        <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
        <polyline points="15,35 50,55 85,35" />
        <line x1="50" y1="55" x2="50" y2="95" />
        <line x1="32.5" y1="25" x2="67.5" y2="45" />
      </g>
    </svg>
  );
}

type CourseTone = "blue" | "green" | "orange" | "purple";

type Course = {
  title: string;
  hours: string;
  desc: string;
  tracks: string;
  url: string;
  image: string;
  imageAlt: string;
  tone: CourseTone;
};

const courses: Course[] = [
  {
    title: "Basic Mediation (GDC) Training",
    hours: "24 hours",
    desc: "Build core mediation skills through negotiation, communication, and guided practice.",
    tracks: "All tracks",
    url: "https://www.resolutionvirginia.org/event-details/basic-mediation-gdc-training-2026-07-06-08-30",
    image: "https://images.unsplash.com/photo-1673861895743-43e136439ee4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Round table and empty chairs in a quiet meeting room",
    tone: "blue",
  },
  {
    title: "Virginia's Judicial System",
    hours: "4 hours",
    desc: "Learn how Virginia courts work and where mediation fits in the legal process.",
    tracks: "All tracks",
    url: "https://www.resolutionvirginia.org/event-details/va-judicial-system-training-2026-07-24-12-30",
    image: "https://images.unsplash.com/photo-1750365501430-395251fe4b7e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Courthouse building with columns and trees",
    tone: "blue",
  },
  {
    title: "GDC Observation Class",
    hours: "8 hours",
    desc: "Observe modeled mediation sessions when live observation is not available.",
    tracks: "GDC",
    url: "https://www.resolutionvirginia.org/event-details/basic-mediation-gdc-observation-class-2026-08-06-08-30",
    image: "https://images.unsplash.com/photo-1694253987646-353954f1889d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Empty training room with a projector screen",
    tone: "blue",
  },
  {
    title: "Family Mediation Skills",
    hours: "20 hours",
    desc: "Practice helping families make child-focused parenting and support agreements.",
    tracks: "J&DR, CCF",
    url: "https://www.resolutionvirginia.org/event-details/family-mediation-jdr-training-2026-05-11-08-30",
    image: "https://images.unsplash.com/photo-1758790015866-eca4eead1900?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Children's playroom with toys and storage",
    tone: "green",
  },
  {
    title: "Screening for Domestic Abuse",
    hours: "8 hours",
    desc: "Learn screening tools and safety practices for domestic abuse concerns.",
    tracks: "J&DR, CCF",
    url: "https://www.resolutionvirginia.org/event-details/domestic-violence-and-mediation-training-2026-06-04-15-00",
    image: "https://images.unsplash.com/photo-1763370356082-124761e8c989?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Padlock secured on an old wooden door",
    tone: "green",
  },
  {
    title: "Support Matters in VA Family Courts",
    hours: "8 hours",
    desc: "Work through child support, spousal support, worksheets, and court-ready agreements.",
    tracks: "J&DR, CCF",
    url: "https://www.resolutionvirginia.org/event-details/support-matters-in-virginias-family-courts-2026-03-12-08-30",
    image: "https://images.unsplash.com/photo-1747161960385-3f0124db4365?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Calculator, pen, and documents on a desk",
    tone: "green",
  },
  {
    title: "Circuit Court Civil Training",
    hours: "20 hours",
    desc: "Develop advanced skills for complex civil and multi-party disputes.",
    tracks: "CCC",
    url: "https://www.resolutionvirginia.org/event-details/circuit-court-civil-training",
    image: "https://images.unsplash.com/photo-1767972159871-b9f5d320be2b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wooden gavel resting on a closed law book",
    tone: "orange",
  },
  {
    title: "Circuit Court Family Training",
    hours: "12 hours",
    desc: "Prepare to mediate divorce, equitable distribution, and family financial issues.",
    tracks: "CCF",
    url: "https://www.resolutionvirginia.org/event-details/circuit-court-family-training-2026-09-21-08-30",
    image: "https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Two wedding rings on a neutral surface",
    tone: "orange",
  },
  {
    title: "Mentoring Others Seeking Mediator Certification",
    hours: "4 hours",
    desc: "Learn how to guide new mediators through planning, feedback, and evaluation.",
    tracks: "Mentor certification",
    url: "https://www.resolutionvirginia.org/event-details/mentoring-others-seeking-mediator-certification-2026-08-10-08-30",
    image: "https://images.unsplash.com/photo-1644030692053-7af7d152471a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Open journal with a pen and glasses on a white surface",
    tone: "purple",
  },
];

const allTracksTagTheme = "bg-[#E6E0F3]/75 text-[#7E70A8]";

const courseTagThemes: Record<CourseTone, { btn: string; tag: string; title: string }> = {
  blue: {
    btn: "bg-[#B6D2E6] text-white",
    tag: "bg-[#EAF4FA]/85 text-[#5F87A3]",
    title: "group-hover:text-[#5F87A3]",
  },
  green: {
    btn: "bg-[#B8D7BE] text-white",
    tag: "bg-[#E4F0E6]/80 text-[#6F9576]",
    title: "group-hover:text-[#6F9576]",
  },
  orange: {
    btn: "bg-[#F6CA9D] text-white",
    tag: "bg-[#FCECDF]/80 text-[#BC875D]",
    title: "group-hover:text-[#BC875D]",
  },
  purple: {
    btn: "bg-[#CCC3E8] text-white",
    tag: allTracksTagTheme,
    title: "group-hover:text-[#7E70A8]",
  },
};

const tips = [
  {
    title: "Education",
    icon: GraduationCapIcon,
    bg: "bg-primary-100",
    iconColor: "text-primary-600",
    desc: "A Bachelor's degree is required. If you lack one, apply for a waiver before starting training by submitting your resume and two recommendation letters to DRS.",
  },
  {
    title: "24-Month Deadline",
    icon: CalendarClockIcon,
    bg: "bg-coparent-100",
    iconColor: "text-coparent-600",
    desc: "Effective January 2026, all training, mentorship, and your certification application must be completed within 24 months of your first training course. Plan accordingly.",
  },
  {
    title: "Background Check",
    icon: ShieldAlertIcon,
    bg: "bg-red-100",
    iconColor: "text-red-600",
    desc: "A character review is conducted. Felony convictions, misdemeanors involving moral turpitude, or revoked professional licenses are permanent bars. All prior convictions must be disclosed.",
  },
  {
    title: "Strategy Tip",
    icon: LightbulbIcon,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    desc: "Many mediators start with GDC certification first, then add J&DR or CCC. Holding a lower certification significantly reduces mentorship requirements for higher levels — fewer observations and co-mediations needed.",
  },
];

const forms = [
  { id: "ADR-1000A", name: "Application for Mediator Certification", url: "https://www.vacourts.gov/static/courtadmin/aoc/djs/programs/drs/mediation/forms/adr1000a_web.pdf" },
  { id: "ADR-1000C", name: "Certification Checklist (track-specific)", url: "https://www.vacourts.gov/courtadmin/aoc/djs/programs/drs/mediation/forms/home.html" },
  { id: "ADR-1008", name: "Mentee Portfolio Form (one per co-mediation)", url: "https://www.vacourts.gov/static/courtadmin/aoc/djs/programs/drs/mediation/forms/adr1008.pdf" },
  { id: "ADR-1001", name: "Mentee Evaluation Form (one per co-mediation)", url: "https://www.vacourts.gov/static/courtadmin/aoc/djs/programs/drs/mediation/forms/adr1001.pdf" },
  { id: "ADR-1003", name: "Application for Recertification", url: "https://www.vacourts.gov/static/courtadmin/aoc/djs/programs/drs/mediation/forms/adr1003.pdf" },
  { id: "ADR-1010", name: "CME Proof of Attendance", url: "https://www.vacourts.gov/static/courtadmin/aoc/djs/programs/drs/mediation/forms/adr1010.pdf" },
  { id: "ADR-1011", name: "CME Self-Reflection Credit Request", url: "https://www.vacourts.gov/static/courtadmin/aoc/djs/programs/drs/mediation/forms/adr1011.pdf" },
];

export default function TrainingPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
         ══════════════════════════════════════════════ */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-0 lg:pb-0">
        <Image
          src="/photos/training-hero.jpg"
          alt="Misty mountain valley with river at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/55 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <AnimateIn animation="fade-up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-training-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-training-300" />
              Training Programs
            </span>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={100}>
            <h1 className="text-[2.25rem] font-medium leading-[1.08] text-white sm:text-[4.25rem] sm:leading-[1.05] md:text-[5.125rem]">
              <span className="sm:whitespace-nowrap">Become a Virginia</span>
              <br />
              <span className="sm:whitespace-nowrap">
                Certified{" "}
                <span className="font-serif italic text-training-200">
                  Mediator
                </span>
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={200}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/82 sm:text-xl">
              Fairfield Center offers all four Virginia Supreme Court
              certification tracks. Our training meets the January 2026
              OES guidelines and includes mentorship support to guide you
              from your first class to full certification.
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={trainingCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="ghost"
                className="rounded-full bg-white text-training-600 shadow-xl backdrop-blur-sm transition-all hover:bg-training-500/75 hover:text-white hover:backdrop-blur-md"
              >
                View Course Calendar
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW TO BECOME — Card accordion with grid bg
         ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-10 sm:py-20">
        {/* Grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />

        <Container className="relative z-10">
          <AnimateIn animation="fade-up">
            <div className="mb-10 flex flex-col gap-5 sm:mb-16 sm:gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-training-500">
                  <span className="h-2 w-2 rounded-full bg-training-500" />
                  Process
                </span>
                <h2 className="text-4xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
                  How to Become a{" "}
                  <br className="hidden sm:block" />
                  <span className="font-semibold text-training-500">
                    Certified Mediator.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-neutral-500 sm:text-xl md:pb-4 md:text-right">
                A step-by-step guide to Certification.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={100}>
            <StepAccordion steps={steps} />
          </AnimateIn>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          CERTIFICATION TRACKS — Colored cards
         ══════════════════════════════════════════════ */}
      <section id="tracks" className="py-10 sm:py-20 scroll-mt-20">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-training-500">
                <span className="h-2 w-2 rounded-full bg-training-500" />
                Four Tracks
              </span>
              <h2 className="text-4xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
                Certification{" "}
                <span className="font-semibold text-training-500">Tracks</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-500 sm:text-xl">
                Each track prepares you for a specific court level.
                Many mediators start with GDC and add certifications over time.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:gap-6 lg:auto-rows-fr lg:grid-cols-2 lg:gap-8">
            {tracks.map((track, i) => {
              const s = trackStyles[track.id];

              return (
                <AnimateIn key={track.id} animation="fade-up" delay={i * 100} className="h-full">
                  <div className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] ${s.bg} p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2.5rem] sm:p-8 md:p-10`}>
                    <TrackDecor variant={s.decor} from={s.decorFrom} to={s.decorTo} />

                    {/* Header */}
                    <div className="relative z-10 mb-5 sm:mb-6">
                      <div className="mb-4 inline-flex items-center rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold text-neutral-700 shadow-sm backdrop-blur-md">
                        <span className={`mr-2 h-2.5 w-2.5 rounded-full ${s.dot}`} />
                        {track.hours} hrs minimum
                      </div>
                      <h3 className={`text-lg font-bold leading-tight tracking-tight sm:text-[1.7rem] ${s.title}`}>
                        {track.name}
                      </h3>
                      <p className={`mt-2 text-sm font-medium leading-relaxed opacity-75 ${s.title}`}>
                        {track.scope}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="relative z-10 flex flex-1 flex-col gap-5 border-t border-black/[0.08] pt-5 sm:gap-6 sm:pt-6 xl:flex-row xl:gap-8">
                      <div className="flex-1">
                        <p className={`mb-3 text-[11px] font-bold uppercase tracking-widest ${s.title}`}>
                          Required Courses
                        </p>
                        <ul className="space-y-2.5">
                          {track.courses.map((c, ci) => (
                            <li key={ci} className="flex items-start">
                              <span className={`mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`} />
                              <span className={`text-sm leading-snug opacity-80 sm:font-semibold ${s.title}`}>
                                {c}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
                        <div>
                          <p className={`mb-2 text-[11px] font-bold uppercase tracking-widest ${s.title}`}>
                            Mentorship
                          </p>
                          <p className={`text-sm leading-relaxed opacity-80 sm:font-semibold ${s.title}`}>
                            {track.mentorship}
                          </p>
                        </div>
                        <div>
                          <p className={`mb-2 text-[11px] font-bold uppercase tracking-widest ${s.title}`}>
                            Required Documents
                          </p>
                          <p className={`text-sm leading-relaxed opacity-80 sm:font-semibold ${s.title}`}>
                            {track.memo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          TRAINING COURSES — Card grid with tags
         ══════════════════════════════════════════════ */}
      <section className="bg-white py-10 sm:py-20">
        <Container>
          <AnimateIn animation="fade-up">
            <div className="mb-8 sm:mb-12">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-training-500">
                <span className="h-2 w-2 rounded-full bg-training-500" />
                Courses We Offer
              </span>
              <h2 className="text-3xl font-normal tracking-tight text-neutral-900 sm:text-[3.45rem]">
                Training{" "}
                <span className="font-semibold text-training-500">Courses</span>
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-500 sm:mt-5 sm:text-xl">
                All courses are Virginia Supreme Court approved and meet the January 2026 OES guidelines.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
            {courses.map((course, i) => {
              const theme = courseTagThemes[course.tone];
              const trackTagTheme = course.tracks === "All tracks" ? allTracksTagTheme : theme.tag;
              const descriptionSpacing = course.tone === "orange" ? "" : "flex-1";

              return (
                <AnimateIn key={course.title} animation="fade-up" delay={i * 60}>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col cursor-pointer rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:rounded-none sm:border-0 sm:p-0 sm:shadow-none sm:hover:shadow-none"
                  >
                    {/* Image area with bottom-right rounded cutout button */}
                    <div className="relative mb-6 hidden sm:block">
                      <div className="relative h-[220px] w-full overflow-hidden rounded-[1.75rem] bg-neutral-200">
                        <Image
                          src={course.image}
                          alt={course.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/[0.03]" />
                      </div>

                      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-[54px] w-[54px] rounded-tl-[2rem] bg-white" />
                      <svg className="pointer-events-none absolute bottom-[53px] right-0 z-10 h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M0 24C13.2548 24 24 13.2548 24 0V24H0Z" />
                      </svg>
                      <svg className="pointer-events-none absolute bottom-0 right-[53px] z-10 h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M0 24C13.2548 24 24 13.2548 24 0V24H0Z" />
                      </svg>

                      <div className={`absolute bottom-0 right-0 z-20 flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110 ${theme.btn}`}>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </div>

                    {/* Title + description */}
                    <div className="flex items-start gap-3">
                      <h3 className={`flex-1 pr-2 text-lg font-bold leading-snug text-neutral-900 transition-colors sm:pr-4 sm:text-[1.45rem] ${theme.title}`}>
                        {course.title}
                      </h3>
                      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:hidden ${theme.btn}`}>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </span>
                    </div>
                    <p className={`mt-2 pr-4 text-sm leading-relaxed text-neutral-500 sm:mt-2.5 sm:text-base ${descriptionSpacing}`}>
                      {course.desc}
                    </p>

                    {/* Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-2 sm:mt-4 sm:gap-2.5">
                      <span className="rounded-md bg-yellow-100/70 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-yellow-700/70 sm:text-[10px]">
                        {course.hours}
                      </span>
                      <span className={`rounded-md px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest sm:text-[10px] ${trackTagTheme}`}>
                        {course.tracks}
                      </span>
                    </div>
                  </a>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          REQUIREMENTS & APPLICATION FORMS
         ══════════════════════════════════════════════ */}
      <section className="py-10 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left — Requirements & Tips */}
            <AnimateIn animation="fade-right">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-training-500">
                  <span className="h-2 w-2 rounded-full bg-training-500" />
                  Good to Know
                </span>
                <h2 className="text-3xl font-normal tracking-tight text-neutral-900 sm:text-[2.55rem]">
                  Requirements &amp;{" "}
                  <span className="font-semibold text-training-500">Tips</span>
                </h2>

                <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
                  {tips.map((tip) => {
                    const Icon = tip.icon;
                    return (
                      <div key={tip.title} className="flex gap-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${tip.bg}`}>
                          <Icon className={`h-6 w-6 ${tip.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">{tip.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                            {tip.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateIn>

            {/* Right — Application Forms */}
            <AnimateIn animation="fade-left" delay={150}>
              <div className="rounded-3xl border border-neutral-100 bg-white p-4 shadow-xl shadow-neutral-200/50 sm:p-6 lg:p-8">
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-2xl font-normal text-neutral-900 sm:text-[1.7rem]">
                    Application{" "}
                    <span className="font-semibold text-training-500">Forms</span>
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-500 sm:text-lg">
                    All forms are available on the{" "}
                    <a
                      href="https://www.vacourts.gov/courtadmin/aoc/djs/programs/drs/mediation/forms/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-training-600 underline hover:text-training-700"
                    >
                      VA Courts website
                    </a>.
                  </p>
                </div>

                <div className="space-y-2">
                  {forms.map((form) => (
                    <a
                      key={form.id}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-neutral-50 p-3 transition-all hover:border-neutral-200 hover:bg-neutral-50 sm:p-3.5"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 transition-colors group-hover:bg-training-500/10 group-hover:text-training-500 sm:h-9 sm:w-9">
                          <FileTextIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                            {form.id}
                          </span>
                          <p className="text-sm font-semibold leading-snug text-neutral-800 sm:text-base">
                            {form.name}
                          </p>
                        </div>
                      </div>
                      <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors group-hover:bg-training-500/10 group-hover:text-training-500 sm:h-9 sm:w-9">
                        <ExternalLinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
