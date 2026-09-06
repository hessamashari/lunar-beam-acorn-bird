import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { principles } from "@/data/principles";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { PageHero } from "@/components/layout/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Process } from "@/components/sections/process";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About",
      description:
        "Meridian designs technology systems that work together — networking, infrastructure, security, automation, and support as a single practice.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="Building Technology Systems That Work Together"
        kicker="We are a technology infrastructure practice. The work is to design, implement, configure, integrate, and support systems so they remain coherent after the installers leave."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="bg-khaki-50 text-ink-900">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-almond-700">Overview</p>
            <h2 className="mt-4 text-3xl text-ink-950">Company</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-6 lg:col-start-7">
            <p>
              Meridian provides integrated technology solutions for businesses,
              organizations, educational institutions, and residential
              environments.
            </p>
            <p>
              The practice covers networking, IT infrastructure, enterprise
              systems, security, automation, smart homes and buildings,
              virtualization, communications, and technical support — specified
              as one architecture rather than a catalogue of disconnected
              products.
            </p>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-ink-50 text-ink-900">
        <div className="wrap py-20 lg:py-24">
          <p className="eyebrow text-almond-700">Approach</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-ink-950">
            Requirements first. Architecture second. Installation third.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.number} className="border border-ink-200 p-7">
                <p className="font-mono text-xs tracking-widest text-almond-700">
                  {item.number}
                </p>
                <h3 className="mt-4 text-xl text-ink-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 text-ink-50">
        <div className="wrap py-20 lg:py-24">
          <p className="eyebrow text-almond-400">Capabilities</p>
          <h2 className="mt-4 text-3xl">Technical scope</h2>
          <ul className="mt-12 grid gap-px bg-ink-100/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <li key={item.slug} className="bg-ink-950 p-6">
                <p className="font-mono text-xs text-ink-500">{item.number}</p>
                <h3 className="mt-3 text-lg text-ink-50">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-400">{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />

      <section className="bg-khaki-50 text-ink-900">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-almond-700">Operations</p>
            <h2 className="mt-4 text-3xl text-ink-950">
              Reliability and maintainability
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-ink-700 lg:col-span-6 lg:col-start-7">
            <p>
              A system that cannot be explained cannot be supported. Documentation,
              labelling, and a clear administrative model are part of delivery —
              not an optional extra after commissioning.
            </p>
            <p>
              We design for the next change: additional cameras, another floor,
              a new classroom, a second site. Pathways, addressing, and racks are
              specified with that in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap py-20 lg:py-24">
          <p className="eyebrow text-almond-700">Audience</p>
          <h2 className="mt-4 text-3xl text-ink-950">Who we serve</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <article key={item.slug} className="border border-ink-200 bg-khaki-50 p-6">
                <h3 className="text-lg text-ink-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {item.summary}
                </p>
              </article>
            ))}
            <article className="border border-ink-200 bg-khaki-50 p-6">
              <h3 className="text-lg text-ink-950">Individual residences</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Homeowners who want infrastructure specified with the same
                discipline as a workplace, without a consumer-electronics
                aesthetic.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ContactCTA title="Start a conversation about your environment." />
    </>
  );
}
