import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as cn } from "./router-BCUO3Ujm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-Bc5BUcrp.js
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumbs({ items, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "mb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-2 font-mono text-xs tracking-wide",
			children: items.map((item, index) => {
				const last = index === items.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [item.href && !last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: cn("hover:text-almond-400", tone === "dark" ? "text-ink-400" : "text-ink-600"),
						children: item.label
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: tone === "dark" ? "text-ink-200" : "text-ink-800",
						children: item.label
					}), !last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: tone === "dark" ? "text-ink-700" : "text-ink-400",
						children: "/"
					}) : null]
				}, `${item.label}-${index}`);
			})
		})
	});
}
function PageHero({ eyebrow, title, kicker, crumbs, meta, image, imageAlt, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-ink-100/10 bg-ink-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 tech-grid opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap relative grid gap-10 py-14 lg:grid-cols-12 lg:items-end lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn(image ? "lg:col-span-7" : "lg:col-span-10"),
				children: [
					crumbs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: crumbs }) : null,
					eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4 text-almond-400",
						children: eyebrow
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-4xl text-4xl text-ink-50 sm:text-5xl",
						children: title
					}),
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-ink-300",
						children: kicker
					}) : null,
					meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-xs tracking-widest text-ink-500",
						children: meta
					}) : null,
					children
				]
			}), image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-sm border border-ink-100/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: imageAlt ?? "",
						className: "img-editorial aspect-4/3 h-full w-full object-cover"
					})
				})
			}) : null]
		})]
	});
}
//#endregion
export { PageHero as t };
