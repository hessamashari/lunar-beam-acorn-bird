import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms",
      description: "Placeholder terms of use for Meridian pending legal review.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        kicker="This page is a structural placeholder and does not constitute contractual terms."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <section className="bg-ink-50 text-ink-900">
        <div className="wrap max-w-3xl space-y-6 py-16 leading-relaxed text-ink-700">
          <p>
            The content on this website describes the type of work {site.name}{" "}
            undertakes. It is not an offer, a quotation, or a record of completed
            projects unless a specific case study says otherwise.
          </p>
          <p>
            Project pages marked as placeholders are illustrative. They should
            not be read as claims about named clients, results, or performance.
          </p>
          <p>
            Formal terms of engagement are issued with proposals, not on this
            page.
          </p>
        </div>
      </section>
    </>
  );
}
