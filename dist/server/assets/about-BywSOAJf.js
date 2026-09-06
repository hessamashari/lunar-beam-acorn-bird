import { r as services } from "./services-Dvnnqp2-.js";
import { n as solutions } from "./solutions-B9EHGedA.js";
import { r as principles, t as Process } from "./process-brFrZGj0.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ContactCTA } from "./contact-cta-BTmORrM3.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Studio",
			title: "Building Technology Systems That Work Together",
			kicker: "We are a technology infrastructure practice. The work is to design, implement, configure, integrate, and support systems so they remain coherent after the installers leave.",
			crumbs: [{
				label: "Home",
				href: "/"
			}, { label: "About" }]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-khaki-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Overview"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Company"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-6 lg:col-start-7",
					children: [/* @__PURE__ */ jsx("p", { children: "Meridian provides integrated technology solutions for businesses, organizations, educational institutions, and residential environments." }), /* @__PURE__ */ jsx("p", { children: "The practice covers networking, IT infrastructure, enterprise systems, security, automation, smart homes and buildings, virtualization, communications, and technical support — specified as one architecture rather than a catalogue of disconnected products." })]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			id: "approach",
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Approach"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 max-w-2xl text-3xl text-ink-950",
						children: "Requirements first. Architecture second. Installation third."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid gap-4 md:grid-cols-2",
						children: principles.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "border border-ink-200 p-7",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-mono text-xs tracking-widest text-almond-700",
									children: item.number
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-xl text-ink-950",
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-700",
									children: item.body
								})
							]
						}, item.number))
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
						children: "Capabilities"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl",
						children: "Technical scope"
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-12 grid gap-px bg-ink-100/10 sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((item) => /* @__PURE__ */ jsxs("li", {
							className: "bg-ink-950 p-6",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "font-mono text-xs text-ink-500",
									children: item.number
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-3 text-lg text-ink-50",
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-ink-400",
									children: item.summary
								})
							]
						}, item.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Process, {}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-khaki-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Operations"
					}), /* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Reliability and maintainability"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 leading-relaxed text-ink-700 lg:col-span-6 lg:col-start-7",
					children: [/* @__PURE__ */ jsx("p", { children: "A system that cannot be explained cannot be supported. Documentation, labelling, and a clear administrative model are part of delivery — not an optional extra after commissioning." }), /* @__PURE__ */ jsx("p", { children: "We design for the next change: additional cameras, another floor, a new classroom, a second site. Pathways, addressing, and racks are specified with that in mind." })]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap py-20 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Audience"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Who we serve"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
						children: [solutions.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "border border-ink-200 bg-khaki-50 p-6",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg text-ink-950",
								children: item.title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-700",
								children: item.summary
							})]
						}, item.slug)), /* @__PURE__ */ jsxs("article", {
							className: "border border-ink-200 bg-khaki-50 p-6",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg text-ink-950",
								children: "Individual residences"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-700",
								children: "Homeowners who want infrastructure specified with the same discipline as a workplace, without a consumer-electronics aesthetic."
							})]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(ContactCTA, { title: "Start a conversation about your environment." })
	] });
}
//#endregion
export { AboutPage as component };
