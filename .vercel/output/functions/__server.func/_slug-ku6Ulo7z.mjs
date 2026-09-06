import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Button, f as getService, m as services, r as Route$2 } from "./_ssr/router-BCUO3Ujm.mjs";
import { t as PageHero } from "./_ssr/page-hero-Bc5BUcrp.mjs";
import { t as ContactCTA } from "./_ssr/contact-cta-CQEX_im7.mjs";
import { n as serviceIcons, t as Icon } from "./_ssr/icon-0numnsEC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-ku6Ulo7z.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceLayout({ service }) {
	const related = service.related.map((slug) => getService(slug)).filter((item) => Boolean(item));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: `${service.number} — ${service.eyebrow}`,
			title: service.title,
			kicker: service.intro,
			image: service.image,
			imageAlt: service.imageAlt,
			crumbs: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Services",
					href: "/services"
				},
				{ label: service.shortTitle }
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-almond-700",
						children: "What we provide"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: service.summary
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2 lg:col-span-8",
					children: service.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 border border-ink-200 bg-khaki-50 px-4 py-4 text-sm text-ink-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-1.5 shrink-0 bg-almond-600" }), item]
					}, item))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-950 text-ink-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-almond-400",
						children: "Capabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 max-w-2xl text-3xl",
						children: "Detailed technical scope"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 lg:grid-cols-2",
						children: service.groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-ink-100/10 bg-ink-900 p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl text-ink-50",
									children: group.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-300",
									children: group.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-wrap gap-2",
									children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border border-ink-100/10 px-3 py-1.5 font-mono text-xs tracking-wide text-ink-200",
										children: item
									}, item))
								})
							]
						}, group.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-khaki-50 text-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-almond-700",
						children: "Applications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Typical environments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: service.environments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-ink-200 bg-ink-50 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg text-ink-950",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-700",
								children: item.body
							})]
						}, item.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-almond-700",
						children: "Adjacent work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Related services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: item.slug },
							className: "group border border-ink-200 bg-khaki-50 p-6 hover:border-almond-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: serviceIcons[item.slug] ?? "network",
									className: "text-ink-800"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-lg text-ink-950",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-700",
									children: item.summary
								})
							]
						}, item.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							to: "/consulting",
							variant: "light",
							children: "Request a Consultation"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "All services",
			className: "border-t border-ink-100/10 bg-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "wrap flex flex-wrap gap-x-6 gap-y-2 py-6 font-mono text-xs tracking-wide text-ink-400",
				children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: item.slug },
					className: item.slug === service.slug ? "text-almond-300" : "hover:text-ink-50",
					children: [
						item.number,
						" ",
						item.shortTitle
					]
				}) }, item.slug))
			})
		})
	] });
}
function ServicePage() {
	const { service } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceLayout, { service });
}
//#endregion
export { ServicePage as component };
