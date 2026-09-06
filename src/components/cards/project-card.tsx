import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={cn(
        "group relative isolate flex overflow-hidden rounded-sm",
        featured ? "min-h-[28rem] lg:min-h-[36rem]" : "min-h-72",
      )}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className="img-editorial absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading={featured ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/50 to-transparent" />
      <div className="relative mt-auto p-6 sm:p-8">
        <p className="eyebrow text-almond-300">{project.category}</p>
        <h3
          className={cn(
            "mt-3 text-ink-50",
            featured ? "text-3xl sm:text-4xl" : "text-2xl",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-200">
          {project.summary}
        </p>
        <p className="mt-4 font-mono text-xs tracking-widest text-ink-400">
          {project.dateLabel}
        </p>
      </div>
    </Link>
  );
}
