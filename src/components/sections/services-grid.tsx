import { Link } from "@tanstack/react-router";
import { homepageServices } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <section className="bg-ink-950 text-ink-50">
      <div className="wrap py-20 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Core technical disciplines"
            kicker="Six primary domains, designed to be specified together rather than procured as unrelated trades."
          />
          <Button to="/services" variant="secondary" className="self-start">
            View All Services
          </Button>
        </div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {homepageServices.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={service.slug}
                className="grid items-center gap-8 border-t border-ink-100/10 pt-10 lg:grid-cols-12 lg:gap-12"
              >
                <div
                  className={cn(
                    "lg:col-span-6",
                    reverse && "lg:col-start-7 lg:row-start-1",
                  )}
                >
                  <div className="overflow-hidden rounded-sm border border-ink-100/10">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="img-editorial aspect-3/2 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className={cn(
                    "lg:col-span-5",
                    reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8",
                  )}
                >
                  <p className="eyebrow text-almond-400">{service.number}</p>
                  <h3 className="mt-4 text-3xl">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-300">
                    {service.homepageBody}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="border-l border-ink-100/15 pl-3 text-sm text-ink-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-almond-300 hover:text-almond-200"
                  >
                    Explore service
                    <Icon name="arrow" className="size-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
