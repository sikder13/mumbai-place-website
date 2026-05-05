"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Dish = {
  slug: string;
  name: string;
  section: string;
  image?: string;
};

type Props = {
  dishes: Dish[];
  intervalMs?: number;
};

export function HeroDishCarousel({ dishes, intervalMs = 4500 }: Props) {
  const visible = dishes.filter(
    (d): d is Dish & { image: string } => Boolean(d.image),
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || paused || visible.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % visible.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [reduce, paused, visible.length, intervalMs]);

  const current = visible[index];
  if (!current) return null;

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current.slug}
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.name}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 43vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[color:var(--color-ink)]/55 via-[color:var(--color-ink)]/10 to-transparent"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-6 left-6 max-w-[calc(100%-7rem)]"
        >
          <p className="text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-saffron-soft)]">
            {current.section}
          </p>
          <p className="font-display mt-2 text-2xl tracking-tight text-[color:var(--color-surface-elevated)] sm:text-3xl">
            {current.name}
          </p>
        </motion.div>
      </AnimatePresence>

      {visible.length > 1 && (
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          {visible.map((d, i) => (
            <button
              key={d.slug}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${d.name}`}
              aria-current={i === index ? "true" : undefined}
              className={cn(
                "h-2 w-2 rounded-full transition-colors duration-300",
                i === index
                  ? "bg-[color:var(--color-accent-saffron)]"
                  : "bg-[color:var(--color-surface-elevated)]/40 hover:bg-[color:var(--color-surface-elevated)]/70",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
