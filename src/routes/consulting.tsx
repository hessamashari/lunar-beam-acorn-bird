import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { site } from "@/data/site";

export const Route = createFileRoute("/consulting")({
  head: () =>
    pageHead({
      title: "Consulting",
      description:
        "Request a consultation on networking, servers, security, automation, and IT equipment. Technical evaluation and procurement support.",
      path: "/consulting",
    }),
  component: ConsultingPage,
});

function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory"
        title="Request a Consultation"
        kicker="Describe the environment, the constraints, and what you need the system to do. We will follow up to discuss architecture, equipment, and delivery."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Consulting" },
        ]}
      />

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-almond-700">Equipment consulting</p>
            <h2 className="mt-4 text-3xl text-ink-950">
              Need help choosing the right equipment?
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700">
              We help customers evaluate, select, and procure appropriate
              networking, server, security, automation, and IT equipment
              according to technical requirements, compatibility, and budget.
            </p>
            <p className="mt-5 leading-relaxed text-ink-700">
              The aim is a specification that can be installed and supported —
              not a catalogue of products in search of a problem.
            </p>
            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="eyebrow text-ink-500">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-ink-900">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-500">Phone</dt>
                <dd className="mt-1">{site.phone}</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-500">Hours</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
            </dl>
          </div>
          <div className="border border-ink-200 bg-khaki-50 p-6 sm:p-8 lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
