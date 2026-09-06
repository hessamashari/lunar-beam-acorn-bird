import { t as cn } from "./utils-C_uf36nf.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/layout/breadcrumbs.tsx
function Breadcrumbs({ items, tone = "dark" }) {
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": "Breadcrumb",
		className: "mb-8",
		children: /* @__PURE__ */ jsx("ol", {
			className: "flex flex-wrap items-center gap-2 font-mono text-xs tracking-wide",
			children: items.map((item, index) => {
				const last = index === items.length - 1;
				return /* @__PURE__ */ jsxs("li", {
					className: "flex items-center gap-2",
					children: [item.href && !last ? /* @__PURE__ */ jsx(Link, {
						to: item.href,
						className: cn("hover:text-almond-400", tone === "dark" ? "text-ink-400" : "text-ink-600"),
						children: item.label
					}) : /* @__PURE__ */ jsx("span", {
						className: tone === "dark" ? "text-ink-200" : "text-ink-800",
						children: item.label
					}), !last ? /* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: tone === "dark" ? "text-ink-700" : "text-ink-400",
						children: "/"
					}) : null]
				}, `${item.label}-${index}`);
			})
		})
	});
}
//#endregion
//#region src/components/layout/page-hero.tsx
function PageHero({ eyebrow, title, kicker, crumbs, meta, image, imageAlt, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden border-b border-ink-100/10 bg-ink-950",
		children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 tech-grid opacity-40" }), /* @__PURE__ */ jsxs("div", {
			className: "wrap relative grid gap-10 py-14 lg:grid-cols-12 lg:items-end lg:py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn(image ? "lg:col-span-7" : "lg:col-span-10"),
				children: [
					crumbs ? /* @__PURE__ */ jsx(Breadcrumbs, { items: crumbs }) : null,
					eyebrow ? /* @__PURE__ */ jsx("p", {
						className: "eyebrow mb-4 text-almond-400",
						children: eyebrow
					}) : null,
					/* @__PURE__ */ jsx("h1", {
						className: "max-w-4xl text-4xl text-ink-50 sm:text-5xl",
						children: title
					}),
					kicker ? /* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-ink-300",
						children: kicker
					}) : null,
					meta ? /* @__PURE__ */ jsx("p", {
						className: "mt-4 font-mono text-xs tracking-widest text-ink-500",
						children: meta
					}) : null,
					children
				]
			}), image ? /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-sm border border-ink-100/10",
					children: /* @__PURE__ */ jsx("img", {
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
