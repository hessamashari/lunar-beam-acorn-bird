import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { ConsultationForm } from "@/components/forms/consultation-form";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact",
      description:
        "Contact Meridian to request a consultation. Phone, email, and address fields are placeholders until official details are confirmed.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Correspondence"
        title="Contact"
        kicker="Use the form for a consultation request, or the details opposite once official contact information is published."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-almond-700">Details</p>
            <h2 className="mt-4 text-3xl text-ink-950">Contact information</h2>
            <p className="mt-4 text-sm text-ink-600">
              The fields below are placeholders and can be replaced in one
              configuration file when official details are confirmed.
            </p>
            <dl className="mt-10 divide-y divide-ink-200 border-y border-ink-200">
              <Info label="Business email">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </Info>
              <Info label="Phone">{site.phone}</Info>
              <Info label="Address">{site.address}</Info>
              <Info label="Working hours">{site.hours}</Info>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-ink-200 bg-khaki-50 p-6 sm:p-8">
              <h2 className="text-2xl text-ink-950">Request a consultation</h2>
              <p className="mt-2 mb-8 text-sm text-ink-700">
                Tell us about the environment and we will follow up.
              </p>
              <ConsultationForm />
            </div>
            <div className="mt-6 overflow-hidden border border-ink-200">
              <div className="relative flex aspect-21/9 items-center justify-center bg-stone-100">
                <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
                <p className="relative font-mono text-xs tracking-widest text-ink-500">
                  Map placeholder — coordinates to be provided
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 py-5 sm:grid-cols-3">
      <dt className="eyebrow text-ink-500">{label}</dt>
      <dd className="text-ink-900 sm:col-span-2">{children}</dd>
    </div>
  );
}
