import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getSolution } from "@/data/solutions";
import { getService } from "@/data/services";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Button } from "@/components/ui/button";
import { Icon, serviceIcons } from "@/components/ui/icon";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.solution.title ?? "Solution",
      description: loaderData?.solution.summary ?? "",
      path: `/solutions/${loaderData?.solution.slug ?? ""}`,
    }),
  component: SolutionPage,
});

function SolutionPage() {
  const { solution } = Route.useLoaderData();
  const relatedServices = solution.serviceSlugs
    .map((slug) => getService(slug))
    .filter((item) => Boolean(item));

  return (
    <>
      <PageHero
        eyebrow={`${solution.number} — ${solution.eyebrow}`}
        title={solution.title}
        kicker={solution.intro}
        image={solution.image}
        imageAlt={solution.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.navLabel },
        ]}
      />

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap py-20 lg:py-24">
          <p className="eyebrow text-almond-700">Typical requirements</p>
          <h2 className="mt-4 text-3xl text-ink-950">What these environments need</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solution.requirements.map((item) => (
              <article key={item.title} className="border border-ink-200 bg-khaki-50 p-6">
                <h3 className="text-lg text-ink-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 text-ink-50">
        <div className="wrap py-20 lg:py-24">
          <p className="eyebrow text-almond-400">Architecture</p>
          <h2 className="mt-4 max-w-2xl text-3xl">Example components</h2>
          <ol className="mt-12 grid gap-8 lg:grid-cols-4">
            {solution.architecture.map((item, index) => (
              <li key={item.title} className="border-t border-ink-100/15 pt-6">
                <p className="font-mono text-xs tracking-widest text-ink-500">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-khaki-50 text-ink-900">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="eyebrow text-almond-700">Outcome</p>
            <h2 className="mt-4 text-3xl text-ink-950">Why this arrangement</h2>
          </div>
          <div className="space-y-8 lg:col-span-7 lg:col-start-6">
            {solution.benefits.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl text-ink-950">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap py-20">
          <p className="eyebrow text-almond-700">Disciplines</p>
          <h2 className="mt-4 text-3xl text-ink-950">Relevant services</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {relatedServices.map((item) =>
              item ? (
                <Link
                  key={item.slug}
                  to="/services/$slug"
                  params={{ slug: item.slug }}
                  className="flex gap-4 border border-ink-200 bg-khaki-50 p-6 hover:border-almond-500"
                >
                  <Icon
                    name={serviceIcons[item.slug] ?? "network"}
                    className="mt-1 text-ink-800"
                  />
                  <span>
                    <span className="block text-lg text-ink-950">{item.title}</span>
                    <span className="mt-1 block text-sm text-ink-700">{item.summary}</span>
                  </span>
                </Link>
              ) : null,
            )}
          </div>
          <div className="mt-10">
            <Button to="/consulting" variant="light">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
