import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsPreview() {
  const featured = projects.find((item) => item.featured) ?? projects[0];
  const rest = projects.filter((item) => item.slug !== featured.slug);

  return (
    <section className="bg-ink-950 text-ink-50">
      <div className="wrap py-20 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Work"
            title="Selected Projects & Solutions"
            kicker="Representative solution types. Named case studies will be published when project records are available."
          />
          <Button to="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <ProjectCard project={featured} featured />
          <div className="grid gap-4">
            {rest.slice(0, 2).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
