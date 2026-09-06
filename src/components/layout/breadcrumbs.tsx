import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-wide">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  to={item.href}
                  className={cn(
                    "hover:text-almond-400",
                    tone === "dark" ? "text-ink-400" : "text-ink-600",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={tone === "dark" ? "text-ink-200" : "text-ink-800"}>
                  {item.label}
                </span>
              )}
              {!last ? (
                <span
                  aria-hidden="true"
                  className={tone === "dark" ? "text-ink-700" : "text-ink-400"}
                >
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
