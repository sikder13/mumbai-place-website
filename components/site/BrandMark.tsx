import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
};

const sizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
} as const;

export function BrandMark({ className, size = "md", href = "/" }: Props) {
  return (
    <Link
      href={href}
      aria-label="Mumbai Place — home"
      className={cn("inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display font-medium tracking-tight text-[color:var(--color-ink)]",
          sizes[size],
        )}
      >
        Mumbai Place
      </span>
      <span className="mt-1 flex items-center gap-2 text-[0.625rem] uppercase tracking-[0.25em] text-[color:var(--color-ink-muted)]">
        <span
          aria-hidden
          className="inline-block h-px w-4 bg-[color:var(--color-accent-gold)]"
        />
        Brooklyn
      </span>
    </Link>
  );
}
