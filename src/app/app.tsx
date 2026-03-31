"use client";

import { APP_NAME } from "~/components/const/constants";

export default function App() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
          {APP_NAME}
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Edit <code className="font-mono text-xs">src/app/app.tsx</code> to get
          started.
        </p>
      </div>
    </div>
  );
}
