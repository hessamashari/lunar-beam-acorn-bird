import { n as solutions } from "./solutions-B9EHGedA.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ContactCTA } from "./contact-cta-BTmORrM3.js";
import { t as SolutionCard } from "./solution-card-b5nSblpP.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/solutions/index.tsx?tsr-split=component
function SolutionsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Environments",
			title: "Solutions",
			kicker: "The same technical disciplines, arranged around the kind of place they serve. Start here if you know the environment more clearly than the equipment.",
			crumbs: [{
				label: "Home",
				href: "/"
			}, { label: "Solutions" }]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ jsx("div", {
				className: "wrap grid gap-4 py-16 sm:grid-cols-2 lg:py-24",
				children: solutions.map((solution) => /* @__PURE__ */ jsx(SolutionCard, { solution }, solution.slug))
			})
		}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
//#endregion
export { SolutionsPage as component };
