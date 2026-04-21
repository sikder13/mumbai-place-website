import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent-saffron)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-accent-saffron)] text-[color:var(--color-surface-elevated)] hover:bg-[color:var(--color-accent-saffron-deep)]",
  secondary:
    "bg-[color:var(--color-ink)] text-[color:var(--color-surface-elevated)] hover:bg-[color:var(--color-ink)]/85",
  ghost:
    "border border-[color:var(--color-line)] text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)]/40 hover:bg-[color:var(--color-surface-elevated)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps & Omit<ComponentProps<typeof Link>, "className">;
type ButtonProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    return (
      <Link {...(rest as AnchorProps)} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...(rest as ButtonProps)} className={classes}>
      {children}
    </button>
  );
}
