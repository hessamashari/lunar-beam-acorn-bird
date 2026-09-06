import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceCard } from "@/components/cards/service-card";
import { ContactCTA } from "@/components/sections/contact-cta";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Services",
      description:
        "Network infrastructure, enterprise services, Linux administration, smart buildings, security, audio and power, and technical support — designed as one system.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Disciplines"
        title="Services"
        kicker="Seven categories covering the physical network, the services that run on it, the rooms they occupy, and the support that keeps them usable."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <section className="bg-ink-50 text-ink-900">
        <div className="wrap grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-24">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
