import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  kicker,
  crumbs,
  meta,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  kicker?: string;
  crumbs?: Crumb[];
  meta?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="wrap relative grid gap-10 py-14 lg:grid-cols-12 lg:items-end lg:py-20">
        <div className={cn(image ? "lg:col-span-7" : "lg:col-span-10")}>
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          {eyebrow ? (
            <p className="eyebrow mb-4 text-almond-400">{eyebrow}</p>
          ) : null}
          <h1 className="max-w-4xl text-4xl text-ink-50 sm:text-5xl">{title}</h1>
          {kicker ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{kicker}</p>
          ) : null}
          {meta ? (
            <p className="mt-4 font-mono text-xs tracking-widest text-ink-500">{meta}</p>
          ) : null}
          {children}
        </div>
        {image ? (
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-sm border border-ink-100/10">
              <img
                src={image}
                alt={imageAlt ?? ""}
                className="img-editorial aspect-4/3 h-full w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
