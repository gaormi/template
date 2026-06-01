"use client";

import { useState } from "react";
import Image from "next/image";

interface Step {
  num: string;
  title: string;
  content: string;
  image?: string;
  icon?: React.ReactNode;
}

type AccordionTheme = "training" | "primary";

const accordionThemes = {
  training: {
    activeButton: "bg-training-500 text-white",
    inactiveButton: "bg-training-50 text-neutral-800",
    inactiveNum: "text-training-400",
  },
  primary: {
    activeButton: "bg-primary-600 text-white",
    inactiveButton: "bg-primary-50 text-neutral-800",
    inactiveNum: "text-primary-400",
  },
};

export default function StepAccordion({
  steps,
  label = "Step",
  theme = "training",
}: {
  steps: Step[];
  label?: string;
  theme?: AccordionTheme;
}) {
  const [active, setActive] = useState<number | null>(0);
  const mobileTheme = accordionThemes[theme];

  return (
    <div>
      {/* Desktop: horizontal expanding accordion */}
      <div className="hidden h-[500px] overflow-hidden rounded-2xl lg:flex">
        {steps.map((step, i) => {
          const isActive = active === i;

          return (
            <div
              key={step.num}
              onMouseEnter={() => setActive(i)}
              className="relative cursor-pointer overflow-hidden border-l border-white/20 first:border-l-0"
              style={{
                flex: isActive ? "8" : "1",
                transition: "flex 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Background image */}
              {step.image && (
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700"
                  style={{ transform: isActive ? "scale(1)" : "scale(1.1)" }}
                  sizes={isActive ? "80vw" : "10vw"}
                />
              )}

              {/* Dark overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
                }}
              />

              {/* Active: content at bottom */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: isActive ? "0.4s" : "0s",
                }}
              >
                <span className="mb-3 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase text-white/70 backdrop-blur-sm">
                  {label} {step.num}
                </span>
                <h3 className="text-lg font-bold text-white sm:text-[1.45rem]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                  {step.content}
                </p>
              </div>

              {/* Inactive: vertical title */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-300"
                style={{ opacity: isActive ? 0 : 1 }}
              >
                <span
                  className="text-base font-bold text-white/90 uppercase"
                  style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
                >
                  {step.title}
                </span>
                <span className="text-xs font-extrabold text-white/50">
                  {step.num}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical accordion */}
      <div className="space-y-2 lg:hidden">
        {steps.map((step, i) => {
          const isActive = active === i;

          return (
            <div key={step.num} className="overflow-hidden rounded-xl">
              <button
                onClick={() => setActive(isActive ? null : i)}
                className={`flex w-full items-center gap-3 p-4 text-left transition-colors sm:gap-4 ${
                  isActive ? mobileTheme.activeButton : mobileTheme.inactiveButton
                }`}
              >
                <span className={`text-sm font-extrabold ${isActive ? "text-white/60" : mobileTheme.inactiveNum}`}>
                  {step.num}
                </span>
                <span className="flex-1 text-sm font-bold">{step.title}</span>
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="relative">
                    {step.image && (
                      <div className="relative h-40 w-full">
                        <Image src={step.image} alt={step.title} fill className="object-cover" sizes="100vw" />
                      </div>
                    )}
                    <div className="bg-white p-4">
                      <p className="text-sm leading-relaxed text-neutral-600">{step.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
