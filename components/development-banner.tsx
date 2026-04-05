"use client";

import { AlertCircle } from "lucide-react";

export default function DevelopmentBanner() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-4 dark:border-amber-900/40 dark:from-amber-950/40 dark:to-orange-950/40">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
        <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
          This website is currently <span className="font-semibold">under development</span>. Some features may be incomplete or subject to change.
        </p>
      </div>
    </div>
  );
}
