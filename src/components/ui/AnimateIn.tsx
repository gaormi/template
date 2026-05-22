"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-up" | "fade-left" | "fade-right" | "fade" | "scale";

export default function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base: Record<Animation, { hidden: string; visible: string }> = {
    "fade-up": {
      hidden: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      hidden: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      hidden: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    fade: {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
    scale: {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? base[animation].visible : base[animation].hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
