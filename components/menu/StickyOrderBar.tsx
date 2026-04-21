"use client";

import { useOrderSheet } from "@/components/site/OrderOnlineSheet";

export function StickyOrderBar() {
  const { open } = useOrderSheet();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-4 sm:hidden">
      <button
        type="button"
        onClick={open}
        className="pointer-events-auto inline-flex h-12 items-center gap-3 rounded-full bg-[color:var(--color-accent-saffron)] px-6 text-sm font-medium tracking-tight text-[color:var(--color-surface-elevated)] shadow-lg shadow-[color:var(--color-ink)]/20 transition-colors hover:bg-[color:var(--color-accent-saffron-deep)]"
      >
        Order Online
        <span aria-hidden>&rarr;</span>
      </button>
    </div>
  );
}
