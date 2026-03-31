"use client";

import { useEffect } from "react";
import { useToast } from "./state";

export default function Toast() {
  const message = useToast((state) => state.message);
  const type = useToast((state) => state.type);
  const hideToast = useToast((state) => state.hideToast);

  useEffect(() => {
    if (message) {
      // Calculate timeout based on message length
      // Base time: 2 seconds, plus 40ms per character
      // Minimum: 2 seconds, Maximum: 8 seconds
      const baseTime = 2000;
      const timePerChar = 40;
      const minTime = 2000;
      const maxTime = 8000;

      const calculatedTime = Math.min(
        Math.max(baseTime + message.length * timePerChar, minTime),
        maxTime
      );

      const timer = setTimeout(() => {
        hideToast();
      }, calculatedTime);

      return () => clearTimeout(timer);
    }
  }, [message, hideToast]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-200 text-white px-3 py-2 dark:px-2.5 dark:py-1.5 text-sm w-screen dark:w-[calc(100vw-0.75rem)] dark:rounded-xl dark:mt-1.5 dark:mx-1.5 text-start text-balance ${
        type === "success"
          ? "bg-emerald-500 dark:bg-emerald-500"
          : "bg-red-500 dark:bg-red-600"
      }`}
    >
      {message}
    </div>
  );
}
