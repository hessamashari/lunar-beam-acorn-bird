import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as projects } from "./router-BCUO3Ujm.mjs";
import { t as PageHero } from "./page-hero-Bc5BUcrp.mjs";
import { t as ContactCTA } from "./contact-cta-CQEX_im7.mjs";
import { t as ProjectCard } from "./project-card-DH2kNCP1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BDtmPqSz.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const featured = projects.find((item) => item.featured) ?? projects[0];
	const rest = projects.filter((item) => item.slug !== featured.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Archive",
			title: "Projects",
			kicker: "These pages describe types of work, not named client engagements. Full case studies will replace this placeholder material when project records are supplied.",
			crumbs: [{
				label: "Home",
				href: "/"
			}, { label: "Projects" }],
			meta: "Placeholder content — not a record of completed work"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-950",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-4 py-16 lg:grid-cols-2 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project: featured,
						featured: true
					})
				}), rest.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.slug))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
	] });
}
//#endregion
export { ProjectsPage as component };
