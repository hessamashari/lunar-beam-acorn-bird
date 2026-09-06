import { t as cn } from "./utils-C_uf36nf.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/data/principles.ts
var processSteps = [
	{
		number: "01",
		title: "Understand",
		body: "We assess the requirements, environment, priorities, constraints, and expected outcomes."
	},
	{
		number: "02",
		title: "Design",
		body: "We develop an appropriate technical architecture and select suitable technologies."
	},
	{
		number: "03",
		title: "Implement",
		body: "We install, configure, integrate, and test the complete system."
	},
	{
		number: "04",
		title: "Support",
		body: "We provide maintenance, troubleshooting, upgrades, and ongoing technical support."
	}
];
var principles = [
	{
		number: "01",
		title: "Integrated Expertise",
		body: "Multiple technology domains coordinated within one project, so networking, security, and automation are not handed off as unrelated trades."
	},
	{
		number: "02",
		title: "Practical Engineering",
		body: "Solutions based on actual requirements rather than unnecessary complexity. The architecture should be as simple as the environment allows."
	},
	{
		number: "03",
		title: "Scalable Infrastructure",
		body: "Systems designed to support future growth and technological change — pathways, addressing, and capacity with a next step in mind."
	},
	{
		number: "04",
		title: "Security & Reliability",
		body: "Focus on stability, secure communication, controlled access, and maintainability — not ornament."
	},
	{
		number: "05",
		title: "End-to-End Delivery",
		body: "Design, implementation, configuration, integration, and support treated as one sequence of work."
	}
];
//#endregion
//#region src/components/ui/section-heading.tsx
function SectionHeading({ eyebrow, title, kicker, align = "left", tone = "dark", className }) {
	return /* @__PURE__ */ jsxs("header", {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ jsx("p", {
				className: cn("eyebrow mb-4", tone === "dark" ? "text-almond-400" : "text-almond-700"),
				children: eyebrow
			}) : null,
			/* @__PURE__ */ jsx("h2", {
				className: cn("text-3xl leading-tight sm:text-4xl", tone === "dark" ? "text-ink-50" : "text-ink-950"),
				children: title
			}),
			kicker ? /* @__PURE__ */ jsx("p", {
				className: cn("mt-5 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-ink-300" : "text-ink-700"),
				children: kicker
			}) : null
		]
	});
}
//#endregion
//#region src/components/sections/process.tsx
function Process() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-jet-950 text-ink-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap py-20 lg:py-28",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Method",
				title: "From Requirement to Deployment",
				kicker: "A four-step sequence used on every engagement, regardless of scale."
			}), /* @__PURE__ */ jsxs("ol", {
				className: "relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-0",
				children: [/* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "absolute top-5 right-0 left-0 hidden h-px bg-ink-100/15 lg:block"
				}), processSteps.map((step) => /* @__PURE__ */ jsxs("li", {
					className: "relative lg:px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "relative z-10 flex size-10 items-center justify-center rounded-full border border-almond-400 bg-jet-950 font-mono text-xs text-almond-300",
							children: step.number
						}), /* @__PURE__ */ jsx("p", {
							className: "eyebrow text-ink-300",
							children: step.title
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-xs text-sm leading-relaxed text-ink-200",
						children: step.body
					})]
				}, step.number))]
			})]
		})
	});
}
//#endregion
export { SectionHeading as n, principles as r, Process as t };
