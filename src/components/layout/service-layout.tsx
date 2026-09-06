import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";
import { getService, services } from "@/data/services";
import { PageHero } from "@/components/layout/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Button } from "@/components/ui/button";
import { Icon, serviceIcons } from "@/components/ui/icon";

export function ServiceLayout({ service }: { service: Service }) {
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));

  return (
    <>
      <PageHero
        eyebrow={`${service.number} — ${service.eyebrow}`}
        title={service.title}
        kicker={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="eyebrow text-almond-700">What we provide</p>
            <h2 className="mt-4 text-3xl text-ink-950">{service.summary}</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-ink-200 bg-khaki-50 px-4 py-4 text-sm text-ink-800"
              >
                <span className="mt-1 size-1.5 shrink-0 bg-almond-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink-950 text-ink-50">
        <div className="wrap py-20 lg:py-24">
          <p className="eyebrow text-almond-400">Capabilities</p>
          <h2 className="mt-4 max-w-2xl text-3xl">Detailed technical scope</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {service.groups.map((group) => (
              <article
                key={group.title}
                className="border border-ink-100/10 bg-ink-900 p-7"
              >
                <h3 className="text-xl text-ink-50">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{group.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-ink-100/10 px-3 py-1.5 font-mono text-xs tracking-wide text-ink-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-khaki-50 text-ink-900">
        <div className="wrap py-20 lg:py-24">
          <p className="eyebrow text-almond-700">Applications</p>
          <h2 className="mt-4 text-3xl text-ink-950">Typical environments</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.environments.map((item) => (
              <article key={item.title} className="border border-ink-200 bg-ink-50 p-6">
                <h3 className="text-lg text-ink-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap py-20">
          <p className="eyebrow text-almond-700">Adjacent work</p>
          <h2 className="mt-4 text-3xl text-ink-950">Related services</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="group border border-ink-200 bg-khaki-50 p-6 hover:border-almond-500"
              >
                <Icon
                  name={serviceIcons[item.slug] ?? "network"}
                  className="text-ink-800"
                />
                <h3 className="mt-6 text-lg text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{item.summary}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/consulting" variant="light">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />

      <nav
        aria-label="All services"
        className="border-t border-ink-100/10 bg-ink-900"
      >
        <ul className="wrap flex flex-wrap gap-x-6 gap-y-2 py-6 font-mono text-xs tracking-wide text-ink-400">
          {services.map((item) => (
            <li key={item.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: item.slug }}
                className={
                  item.slug === service.slug
                    ? "text-almond-300"
                    : "hover:text-ink-50"
                }
              >
                {item.number} {item.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
