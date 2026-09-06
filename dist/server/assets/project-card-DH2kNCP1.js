import { t as cn } from "./utils-C_uf36nf.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/cards/project-card.tsx
function ProjectCard({ project, featured = false }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/projects/$slug",
		params: { slug: project.slug },
		className: cn("group relative isolate flex overflow-hidden rounded-sm", featured ? "min-h-[28rem] lg:min-h-[36rem]" : "min-h-72"),
		children: [
			/* @__PURE__ */ jsx("img", {
				src: project.image,
				alt: project.imageAlt,
				className: "img-editorial absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105",
				loading: featured ? "eager" : "lazy"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/50 to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mt-auto p-6 sm:p-8",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-300",
						children: project.category
					}),
					/* @__PURE__ */ jsx("h3", {
						className: cn("mt-3 text-ink-50", featured ? "text-3xl sm:text-4xl" : "text-2xl"),
						children: project.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-xl text-sm leading-relaxed text-ink-200",
						children: project.summary
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 font-mono text-xs tracking-widest text-ink-400",
						children: project.dateLabel
					})
				]
			})
		]
	});
}
//#endregion
export { ProjectCard as t };
