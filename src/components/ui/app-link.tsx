import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkProps = ComponentProps<typeof Link>;

export function AppLink({
  to,
  className,
  children,
  ...rest
}: Omit<LinkProps, "to"> & { to: string; children: ReactNode }) {
  return (
    <Link to={to as LinkProps["to"]} className={cn(className)} {...rest}>
      {children}
    </Link>
  );
}
