"use client";

import { useEffect, useState } from "react";
import type { MenuSection } from "@/lib/menu";

type Props = { sections: MenuSection[] };

export function MenuNav({ sections }: Props) {
  const [active, setActive] = useState<string>(sections[0]?.slug ?? "");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Menu sections"
      className="sticky top-16 z-30 -mx-6 border-y border-[color:var(--color-line)] bg-[color:var(--color-surface)]/90 backdrop-blur-sm sm:-mx-8 lg:-mx-10"
    >
      <ul className="flex gap-x-6 gap-y-2 overflow-x-auto whitespace-nowrap px-6 py-3 text-sm sm:px-8 lg:px-10">
        {sections.map((s) => (
          <li key={s.slug}>
            <a
              href={`#${s.slug}`}
              className={`inline-flex items-center gap-2 uppercase tracking-[0.2em] text-[0.7rem] transition-colors ${
                active === s.slug
                  ? "text-[color:var(--color-accent-saffron)]"
                  : "text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]"
              }`}
            >
              <span
                aria-hidden
                className={`h-px w-4 transition-colors ${
                  active === s.slug
                    ? "bg-[color:var(--color-accent-saffron)]"
                    : "bg-[color:var(--color-line)]"
                }`}
              />
              {s.slug}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
