import { solutions } from "@/data/solutions";
import { SolutionCard } from "@/components/cards/solution-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function SolutionsGrid() {
  return (
    <section className="bg-ink-50 text-ink-900">
      <div className="wrap py-20 lg:py-28">
        <SectionHeading
          tone="light"
          eyebrow="Environments"
          title="Solutions for Different Environments"
          kicker="Customers often search for a place — an office, a campus, a home, a facility — rather than a technology. These pages start from that need."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={solution.slug}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <SolutionCard solution={solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
