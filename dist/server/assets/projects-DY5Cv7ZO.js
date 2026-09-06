import { n as projects } from "./projects-GtOcm2n0.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ContactCTA } from "./contact-cta-BTmORrM3.js";
import { t as ProjectCard } from "./project-card-DH2kNCP1.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/projects/index.tsx?tsr-split=component
function ProjectsPage() {
	const featured = projects.find((item) => item.featured) ?? projects[0];
	const rest = projects.filter((item) => item.slug !== featured.slug);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Archive",
			title: "Projects",
			kicker: "These pages describe types of work, not named client engagements. Full case studies will replace this placeholder material when project records are supplied.",
			crumbs: [{
				label: "Home",
				href: "/"
			}, { label: "Projects" }],
			meta: "Placeholder content — not a record of completed work"
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-950",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap grid gap-4 py-16 lg:grid-cols-2 lg:py-20",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ jsx(ProjectCard, {
						project: featured,
						featured: true
					})
				}), rest.map((project) => /* @__PURE__ */ jsx(ProjectCard, { project }, project.slug))]
			})
		}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
//#endregion
export { ProjectsPage as component };
