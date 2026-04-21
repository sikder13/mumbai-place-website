"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useOrderSheet } from "@/components/site/OrderOnlineSheet";

type Props = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children?: ReactNode;
};

export function OrderOnlineButton({
  variant = "primary",
  size = "md",
  className,
  children = "Order Online",
}: Props) {
  const { open } = useOrderSheet();
  return (
    <Button variant={variant} size={size} className={className} onClick={open}>
      {children}
    </Button>
  );
}
