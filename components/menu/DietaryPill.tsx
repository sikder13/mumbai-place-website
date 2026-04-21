import type { DietaryTag, SpiceLevel } from "@/lib/menu";
import { dietaryLabels, dietaryShort } from "@/lib/menu";

export function DietaryPill({ tag }: { tag: DietaryTag }) {
  return (
    <span
      title={dietaryLabels[tag]}
      aria-label={dietaryLabels[tag]}
      className="inline-flex h-5 items-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-2 text-[0.625rem] font-medium uppercase tracking-[0.15em] text-[color:var(--color-ink-muted)]"
    >
      {dietaryShort[tag]}
    </span>
  );
}

const spiceLabels: Record<SpiceLevel, string> = {
  1: "Mild",
  2: "Medium",
  3: "Spicy",
};

export function SpiceIndicator({ level }: { level: SpiceLevel }) {
  return (
    <span
      title={spiceLabels[level]}
      aria-label={`Spice: ${spiceLabels[level]}`}
      className="inline-flex items-center gap-0.5 text-[color:var(--color-accent-saffron)]"
    >
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          aria-hidden
          className={
            i <= level
              ? "h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-saffron)]"
              : "h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-saffron)]/20"
          }
        />
      ))}
    </span>
  );
}
