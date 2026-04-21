"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { CloseIcon } from "@/components/ui/Icon";
import { locations } from "@/lib/locations";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type OrderSheetContextValue = {
  open: () => void;
  close: () => void;
};

const OrderSheetContext = createContext<OrderSheetContextValue | null>(null);

export function useOrderSheet() {
  const ctx = useContext(OrderSheetContext);
  if (!ctx) {
    throw new Error("useOrderSheet must be used inside <OrderSheetProvider>");
  }
  return ctx;
}

export function OrderSheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const value: OrderSheetContextValue = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return (
    <OrderSheetContext.Provider value={value}>
      {children}
      <div
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          aria-label="Close order picker"
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-[color:var(--color-ink)]/40 backdrop-blur-sm"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose a location to order from"
          className={cn(
            "absolute bottom-0 left-1/2 w-full max-w-lg -translate-x-1/2 rounded-t-3xl bg-[color:var(--color-surface-elevated)] p-6 shadow-2xl transition-transform duration-300 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:rounded-3xl",
            isOpen
              ? "translate-y-0"
              : "translate-y-full sm:translate-y-[calc(-50%+1rem)]",
          )}
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-saffron)]">
                Order Online
              </p>
              <h2 className="font-display mt-2 text-2xl tracking-tight">
                Choose your location
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-[color:var(--color-line)] p-2 text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]"
            >
              <CloseIcon size={16} />
            </button>
          </div>
          <ul className="space-y-3">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <a
                  href={loc.menufyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5 transition-colors hover:border-[color:var(--color-accent-saffron)]"
                >
                  <div>
                    <p className="font-display text-lg tracking-tight">
                      {loc.neighborhood}
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
                      {loc.addressLine1}
                    </p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent-saffron)] transition-transform group-hover:translate-x-1">
                    Order &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center text-xs text-[color:var(--color-ink-muted)]">
            Online ordering is powered by Menufy.
          </p>
          <div className="mt-4 sm:hidden">
            <Button
              variant="ghost"
              size="md"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </OrderSheetContext.Provider>
  );
}
