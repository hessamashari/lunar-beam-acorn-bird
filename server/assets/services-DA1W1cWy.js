import { r as services } from "./services-Dvnnqp2-.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ContactCTA } from "./contact-cta-BTmORrM3.js";
import { n as serviceIcons, t as Icon } from "./icon-0numnsEC.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/cards/service-card.tsx
function ServiceCard({ service }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/services/$slug",
		params: { slug: service.slug },
		className: "group flex flex-col border border-ink-200 bg-ink-50 p-6 transition-[border-color,background-color] duration-200 hover:border-almond-500 hover:bg-khaki-50 sm:p-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ jsx("span", {
					className: "inline-flex size-10 items-center justify-center border border-ink-200 text-ink-800",
					children: /* @__PURE__ */ jsx(Icon, { name: serviceIcons[service.slug] ?? "network" })
				}), /* @__PURE__ */ jsx("span", {
					className: "font-mono text-xs tracking-widest text-ink-400",
					children: service.number
				})]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-8 text-xl text-ink-950",
				children: service.title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-ink-700",
				children: service.summary
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "mt-6 space-y-1.5 text-sm text-ink-600",
				children: service.highlights.slice(0, 4).map((item) => /* @__PURE__ */ jsxs("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ jsx("span", { className: "mt-2 size-1 shrink-0 bg-almond-500" }), item]
				}, item))
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "mt-8 inline-flex items-center gap-2 text-sm text-almond-800 group-hover:text-almond-700",
				children: ["Explore service", /* @__PURE__ */ jsx(Icon, {
					name: "arrow",
					className: "size-4"
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/services/index.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Disciplines",
			title: "Services",
			kicker: "Seven categories covering the physical network, the services that run on it, the rooms they occupy, and the support that keeps them usable.",
			crumbs: [{
				label: "Home",
				href: "/"
			}, { label: "Services" }]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsx("div", {
				className: "wrap grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-24",
				children: services.map((service) => /* @__PURE__ */ jsx(ServiceCard, { service }, service.slug))
			})
		}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
//#endregion
export { ServicesPage as component };
