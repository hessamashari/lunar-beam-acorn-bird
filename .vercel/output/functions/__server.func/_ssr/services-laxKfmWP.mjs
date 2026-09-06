import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as services } from "./router-BCUO3Ujm.mjs";
import { t as PageHero } from "./page-hero-Bc5BUcrp.mjs";
import { t as ContactCTA } from "./contact-cta-CQEX_im7.mjs";
import { n as serviceIcons, t as Icon } from "./icon-0numnsEC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-laxKfmWP.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/services/$slug",
		params: { slug: service.slug },
		className: "group flex flex-col border border-ink-200 bg-ink-50 p-6 transition-[border-color,background-color] duration-200 hover:border-almond-500 hover:bg-khaki-50 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-10 items-center justify-center border border-ink-200 text-ink-800",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: serviceIcons[service.slug] ?? "network" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs tracking-widest text-ink-400",
					children: service.number
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-8 text-xl text-ink-950",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-ink-700",
				children: service.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-1.5 text-sm text-ink-600",
				children: service.highlights.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 bg-almond-500" }), item]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-8 inline-flex items-center gap-2 text-sm text-almond-800 group-hover:text-almond-700",
				children: ["Explore service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: "arrow",
					className: "size-4"
				})]
			})
		]
	});
}
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Disciplines",
			title: "Services",
			kicker: "Seven categories covering the physical network, the services that run on it, the rooms they occupy, and the support that keeps them usable.",
			crumbs: [{
				label: "Home",
				href: "/"
			}, { label: "Services" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-24",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service }, service.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
	] });
}
//#endregion
export { ServicesPage as component };
