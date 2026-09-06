import { Link } from "@tanstack/react-router";
import type { Solution } from "@/data/solutions";
import { Icon } from "@/components/ui/icon";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link
      to="/solutions/$slug"
      params={{ slug: solution.slug }}
      className="group relative isolate flex min-h-72 flex-col justify-end overflow-hidden rounded-sm"
    >
      <img
        src={solution.image}
        alt={solution.imageAlt}
        className="img-editorial absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/55 to-ink-950/10" />
      <div className="relative p-6 sm:p-7">
        <p className="eyebrow text-almond-300">{solution.eyebrow}</p>
        <h3 className="mt-3 text-2xl text-ink-50">{solution.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-200">
          {solution.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm text-almond-300">
          View solution
          <Icon name="arrow" className="size-4" />
        </span>
      </div>
    </Link>
  );
}
