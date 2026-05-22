"use client";

import { useState } from "react";

const items = [
  {
    q: "How much does mediation cost?",
    a: "As a non-profit, Fairfield Center offers services on a sliding fee scale based on household income. We believe financial barriers should not prevent access to resolution.",
  },
  {
    q: "Is mediation confidential?",
    a: "Yes. Under Virginia law, mediation is a confidential process. What is said in mediation cannot be used in a court of law as evidence.",
  },
  {
    q: "What if the other party refuses to participate?",
    a: "Mediation is a voluntary process. We can invite the other party to participate and explain the benefits, but they cannot be forced to attend unless court-ordered.",
  },
  {
    q: "How long does a typical mediation session take?",
    a: "Most mediation sessions last between 1.5 to 3 hours. Complex cases may require multiple sessions. Your mediator will work with all parties to find a suitable schedule.",
  },
  {
    q: "Do I need a lawyer for mediation?",
    a: "A lawyer is not required for mediation. However, you are welcome to consult with an attorney before, during, or after the process. Mediation empowers you to speak for yourself in a safe, guided environment.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-neutral-200 dark:divide-neutral-800">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {item.q}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
