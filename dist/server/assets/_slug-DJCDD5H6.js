import { t as getService } from "./services-Dvnnqp2-.js";
import { a as Button, n as Route } from "./router-58-p8J_n.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ContactCTA } from "./contact-cta-BTmORrM3.js";
import { n as serviceIcons, t as Icon } from "./icon-0numnsEC.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/solutions/$slug.tsx?tsr-split=component
function SolutionPage() {
	const { solution } = Route.useLoaderData();
	const relatedServices = solution.serviceSlugs.map((slug) => getService(slug)).filter((item) => Boolean(item));
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: `${solution.number} — ${solution.eyebrow}`,
			title: solution.title,
			kicker: solution.intro,
			image: solution.image,
			imageAlt: solution.imageAlt,
			crumbs: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: "Solutions",
					href: "/solutions"
				},
				{ label: solution.navLabel }
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Typical requirements"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "What these environments need"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: solution.requirements.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "border border-ink-200 bg-khaki-50 p-6",
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
			className: "bg-ink-950 text-ink-50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-400",
						children: "Architecture"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 max-w-2xl text-3xl",
						children: "Example components"
					}),
					/* @__PURE__ */ jsx("ol", {
						className: "mt-12 grid gap-8 lg:grid-cols-4",
						children: solution.architecture.map((item, index) => /* @__PURE__ */ jsxs("li", {
							className: "border-t border-ink-100/15 pt-6",
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "font-mono text-xs tracking-widest text-ink-500",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-xl",
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-300",
									children: item.body
								})
							]
						}, item.title))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-khaki-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Outcome"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Why this arrangement"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-8 lg:col-span-7 lg:col-start-6",
					children: solution.benefits.map((item) => /* @__PURE__ */ jsxs("article", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-xl text-ink-950",
						children: item.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 leading-relaxed text-ink-700",
						children: item.body
					})] }, item.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Disciplines"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Relevant services"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: relatedServices.map((item) => item ? /* @__PURE__ */ jsxs(Link, {
							to: "/services/$slug",
							params: { slug: item.slug },
							className: "flex gap-4 border border-ink-200 bg-khaki-50 p-6 hover:border-almond-500",
							children: [/* @__PURE__ */ jsx(Icon, {
								name: serviceIcons[item.slug] ?? "network",
								className: "mt-1 text-ink-800"
							}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
								className: "block text-lg text-ink-950",
								children: item.title
							}), /* @__PURE__ */ jsx("span", {
								className: "mt-1 block text-sm text-ink-700",
								children: item.summary
							})] })]
						}, item.slug) : null)
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
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
//#endregion
export { SolutionPage as component };
