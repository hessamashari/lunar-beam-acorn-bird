import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Button, f as getService, i as Route$4 } from "./_ssr/router-BCUO3Ujm.mjs";
import { t as PageHero } from "./_ssr/page-hero-Bc5BUcrp.mjs";
import { t as ContactCTA } from "./_ssr/contact-cta-CQEX_im7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-kofwYlNv.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { project } = Route$4.useLoaderData();
	const related = project.serviceSlugs.map((slug) => getService(slug)).filter((item) => Boolean(item));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: project.category,
			title: project.title,
			kicker: project.summary,
			image: project.image,
			imageAlt: project.imageAlt,
			meta: `${project.environment} · ${project.dateLabel}`,
			crumbs: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Projects",
					href: "/projects"
				},
				{ label: project.title }
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-khaki-50 text-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "border border-almond-600/30 bg-almond-50 px-4 py-3 text-sm text-ink-800",
					children: "Placeholder profile. This is a representative solution type, not a case study of a named client or a completed project."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-12 py-20 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-almond-700",
							children: "Challenge"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl text-ink-950",
							children: "The usual problem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-relaxed text-ink-700",
							children: project.challenge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-12 text-almond-700",
							children: "Solution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl text-ink-950",
							children: "How we approach it"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-relaxed text-ink-700",
							children: project.solution
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-12 text-almond-700",
							children: "Result"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl text-ink-950",
							children: "What to expect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-relaxed text-ink-700",
							children: project.result
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-8 lg:col-span-4 lg:col-start-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-ink-200 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-almond-700",
								children: "Environment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-ink-900",
								children: project.environment
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-ink-200 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-almond-700",
								children: "Technologies"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-ink-700",
								children: project.technologies.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-ink-200 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-almond-700",
								children: "Services involved"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: related.map((item) => item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services/$slug",
									params: { slug: item.slug },
									className: "text-ink-800 underline-offset-4 hover:text-almond-800 hover:underline",
									children: item.title
								}) }, item.slug) : null)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							to: "/consulting",
							variant: "light",
							className: "w-full",
							children: "Request a Consultation"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
	] });
}
//#endregion
export { ProjectPage as component };
