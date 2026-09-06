import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import { AboutPositioning } from "@/components/sections/about-positioning";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { Process } from "@/components/sections/process";
import { WhyUs } from "@/components/sections/why-us";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { ConsultationCTA } from "@/components/sections/consultation-cta";
import { ContactCTA } from "@/components/sections/contact-cta";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      description:
        "Meridian designs, implements, configures, and supports integrated technology systems across networking, infrastructure, security, automation, and smart environments.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <AboutPositioning />
      <ServicesGrid />
      <SolutionsGrid />
      <Process />
      <WhyUs />
      <ProjectsPreview />
      <ConsultationCTA />
      <ContactCTA />
    </>
  );
}
