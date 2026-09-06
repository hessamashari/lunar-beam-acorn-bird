import { t as Icon } from "./icon-0numnsEC.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/cards/solution-card.tsx
function SolutionCard({ solution }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/solutions/$slug",
		params: { slug: solution.slug },
		className: "group relative isolate flex min-h-72 flex-col justify-end overflow-hidden rounded-sm",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: solution.image,
				alt: solution.imageAlt,
				className: "img-editorial absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105",
				loading: "lazy"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/55 to-ink-950/10" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative p-6 sm:p-7",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-300",
						children: solution.eyebrow
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-3 text-2xl text-ink-50",
						children: solution.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 line-clamp-3 text-sm leading-relaxed text-ink-200",
						children: solution.summary
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "mt-4 inline-flex items-center gap-2 text-sm text-almond-300",
						children: ["View solution", /* @__PURE__ */ jsx(Icon, {
							name: "arrow",
							className: "size-4"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { SolutionCard as t };
