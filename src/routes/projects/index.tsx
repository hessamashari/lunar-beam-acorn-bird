import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { projects } from "@/data/projects";
import { PageHero } from "@/components/layout/page-hero";
import { ProjectCard } from "@/components/cards/project-card";
import { ContactCTA } from "@/components/sections/contact-cta";

export const Route = createFileRoute("/projects/")({
  head: () =>
    pageHead({
      title: "Projects",
      description:
        "Representative project types in network infrastructure, building automation, CCTV, and virtualized server environments. Case studies forthcoming.",
      path: "/projects",
    }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featured = projects.find((item) => item.featured) ?? projects[0];
  const rest = projects.filter((item) => item.slug !== featured.slug);

  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Projects"
        kicker="These pages describe types of work, not named client engagements. Full case studies will replace this placeholder material when project records are supplied."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
        meta="Placeholder content — not a record of completed work"
      />
      <section className="bg-ink-950">
        <div className="wrap grid gap-4 py-16 lg:grid-cols-2 lg:py-20">
          <div className="lg:col-span-2">
            <ProjectCard project={featured} featured />
          </div>
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
