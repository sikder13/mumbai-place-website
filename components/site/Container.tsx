import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

export function Container({ size = "default", className, ...rest }: Props) {
  const width =
    size === "wide"
      ? "max-w-7xl"
      : size === "narrow"
        ? "max-w-3xl"
        : "max-w-6xl";
  return (
    <div
      {...rest}
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-10", width, className)}
    />
  );
}
