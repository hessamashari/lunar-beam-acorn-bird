import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description: "Placeholder privacy policy for Meridian pending legal review.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        kicker="This page is a structural placeholder. It is not a legal policy and should be replaced with counsel-reviewed text before public use."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="bg-ink-50 text-ink-900">
        <div className="wrap max-w-3xl space-y-6 py-16 leading-relaxed text-ink-700">
          <p>
            {site.legalName} has not yet published a formal privacy policy. Until
            that document is in place, this site does not operate an account
            system and does not store consultation requests on a server.
          </p>
          <p>
            If you send a message by email or through the consultation form, the
            contents of that message are processed only to respond to the
            enquiry.
          </p>
          <p>
            Contact:{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
