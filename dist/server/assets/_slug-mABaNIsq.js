import { r as services, t as getService } from "./services-Dvnnqp2-.js";
import { a as Button, r as Route } from "./router-58-p8J_n.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ContactCTA } from "./contact-cta-BTmORrM3.js";
import { n as serviceIcons, t as Icon } from "./icon-0numnsEC.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/layout/service-layout.tsx
function ServiceLayout({ service }) {
	const related = service.related.map((slug) => getService(slug)).filter((item) => Boolean(item));
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
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
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "What we provide"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: service.summary
					})]
				}), /* @__PURE__ */ jsx("ul", {
					className: "grid gap-3 sm:grid-cols-2 lg:col-span-8",
					children: service.highlights.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-start gap-3 border border-ink-200 bg-khaki-50 px-4 py-4 text-sm text-ink-800",
						children: [/* @__PURE__ */ jsx("span", { className: "mt-1 size-1.5 shrink-0 bg-almond-600" }), item]
					}, item))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-950 text-ink-50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-400",
						children: "Capabilities"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 max-w-2xl text-3xl",
						children: "Detailed technical scope"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 lg:grid-cols-2",
						children: service.groups.map((group) => /* @__PURE__ */ jsxs("article", {
							className: "border border-ink-100/10 bg-ink-900 p-7",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl text-ink-50",
									children: group.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-300",
									children: group.body
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-6 flex flex-wrap gap-2",
									children: group.items.map((item) => /* @__PURE__ */ jsx("li", {
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
		/* @__PURE__ */ jsx("section", {
			className: "bg-khaki-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Applications"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Typical environments"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: service.environments.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "border border-ink-200 bg-ink-50 p-6",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg text-ink-950",
								children: item.title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-700",
								children: item.body
							})]
						}, item.title))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Adjacent work"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Related services"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-4 md:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ jsxs(Link, {
							to: "/services/$slug",
							params: { slug: item.slug },
							className: "group border border-ink-200 bg-khaki-50 p-6 hover:border-almond-500",
							children: [
								/* @__PURE__ */ jsx(Icon, {
									name: serviceIcons[item.slug] ?? "network",
									className: "text-ink-800"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-6 text-lg text-ink-950",
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-ink-700",
									children: item.summary
								})
							]
						}, item.slug))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10",
						children: /* @__PURE__ */ jsx(Button, {
							to: "/consulting",
							variant: "light",
							children: "Request a Consultation"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(ContactCTA, {}),
		/* @__PURE__ */ jsx("nav", {
			"aria-label": "All services",
			className: "border-t border-ink-100/10 bg-ink-900",
			children: /* @__PURE__ */ jsx("ul", {
				className: "wrap flex flex-wrap gap-x-6 gap-y-2 py-6 font-mono text-xs tracking-wide text-ink-400",
				children: services.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
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
//#endregion
//#region src/routes/services/$slug.tsx?tsr-split=component
function ServicePage() {
	const { service } = Route.useLoaderData();
	return /* @__PURE__ */ jsx(ServiceLayout, { service });
}
//#endregion
export { ServicePage as component };
