import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-almond-400 text-ink-950 hover:bg-almond-300 focus-visible:outline-almond-200",
  secondary:
    "border border-ink-100/20 bg-transparent text-ink-50 hover:border-almond-400 hover:text-almond-200",
  inverse:
    "border border-ink-900/15 bg-transparent text-ink-900 hover:border-almond-600 hover:text-almond-800",
  light: "bg-ink-950 text-ink-50 hover:bg-ink-800",
  ghost: "bg-transparent text-ink-50 hover:text-almond-300",
} as const;

export type ButtonVariant = keyof typeof variants;

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-[background-color,color,border-color,transform] duration-150 ease-out active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";

type Common = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

type ButtonAsLink = Common & {
  to: string;
  href?: never;
};

type ButtonAsAnchor = Common & {
  href: string;
  to?: never;
};

export function Button(props: ButtonAsButton | ButtonAsLink | ButtonAsAnchor) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if ("to" in props && props.to) {
    return (
      <Link to={props.to as never} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
