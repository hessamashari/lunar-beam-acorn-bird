import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="25"
        height="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="16"
        y1="7"
        x2="16"
        y2="25"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect x="14.4" y="14.4" width="3.2" height="3.2" className="fill-almond-400" />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4",
        tone === "dark" ? "text-ink-50" : "text-ink-950",
        className,
      )}
    >
      <LogoMark />
      <span className="font-display text-sm font-medium tracking-widest uppercase">
        Meridian
      </span>
    </Link>
  );
}
