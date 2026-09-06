import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { getService } from "@/data/services";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.project.title ?? "Project",
      description: loaderData?.project.summary ?? "",
      path: `/projects/${loaderData?.project.slug ?? ""}`,
    }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = project.serviceSlugs
    .map((slug) => getService(slug))
    .filter((item) => Boolean(item));

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        kicker={project.summary}
        image={project.image}
        imageAlt={project.imageAlt}
        meta={`${project.environment} · ${project.dateLabel}`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <section className="bg-khaki-50 text-ink-900">
        <div className="wrap py-8">
          <p className="border border-almond-600/30 bg-almond-50 px-4 py-3 text-sm text-ink-800">
            Placeholder profile. This is a representative solution type, not a
            case study of a named client or a completed project.
          </p>
        </div>
      </section>

      <section className="bg-ink-50 text-ink-900">
        <div className="wrap grid gap-12 py-20 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <p className="eyebrow text-almond-700">Challenge</p>
            <h2 className="mt-4 text-3xl text-ink-950">The usual problem</h2>
            <p className="mt-5 leading-relaxed text-ink-700">{project.challenge}</p>
            <p className="eyebrow mt-12 text-almond-700">Solution</p>
            <h2 className="mt-4 text-3xl text-ink-950">How we approach it</h2>
            <p className="mt-5 leading-relaxed text-ink-700">{project.solution}</p>
            <p className="eyebrow mt-12 text-almond-700">Result</p>
            <h2 className="mt-4 text-3xl text-ink-950">What to expect</h2>
            <p className="mt-5 leading-relaxed text-ink-700">{project.result}</p>
          </article>
          <aside className="space-y-8 lg:col-span-4 lg:col-start-9">
            <div className="border border-ink-200 p-6">
              <p className="eyebrow text-almond-700">Environment</p>
              <p className="mt-3 text-ink-900">{project.environment}</p>
            </div>
            <div className="border border-ink-200 p-6">
              <p className="eyebrow text-almond-700">Technologies</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-700">
                {project.technologies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-ink-200 p-6">
              <p className="eyebrow text-almond-700">Services involved</p>
              <ul className="mt-4 space-y-2 text-sm">
                {related.map((item) =>
                  item ? (
                    <li key={item.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: item.slug }}
                        className="text-ink-800 underline-offset-4 hover:text-almond-800 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
            <Button to="/consulting" variant="light" className="w-full">
              Request a Consultation
            </Button>
          </aside>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
