import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { PageHero } from "@/components/layout/page-hero";
import { SolutionCard } from "@/components/cards/solution-card";
import { ContactCTA } from "@/components/sections/contact-cta";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    pageHead({
      title: "Solutions",
      description:
        "Technology solutions organized by environment: business, education, residential, healthcare and hospitality, and specialized facilities.",
      path: "/solutions",
    }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Environments"
        title="Solutions"
        kicker="The same technical disciplines, arranged around the kind of place they serve. Start here if you know the environment more clearly than the equipment."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
      />
      <section className="bg-ink-50 text-ink-900">
        <div className="wrap grid gap-4 py-16 sm:grid-cols-2 lg:py-24">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
