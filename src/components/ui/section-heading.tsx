import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  kicker,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  kicker?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-4",
            tone === "dark" ? "text-almond-400" : "text-almond-700",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl leading-tight sm:text-4xl",
          tone === "dark" ? "text-ink-50" : "text-ink-950",
        )}
      >
        {title}
      </h2>
      {kicker ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-300" : "text-ink-700",
          )}
        >
          {kicker}
        </p>
      ) : null}
    </header>
  );
}
