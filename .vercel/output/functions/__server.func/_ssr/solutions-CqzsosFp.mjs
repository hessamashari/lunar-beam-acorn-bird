import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as solutions } from "./router-BCUO3Ujm.mjs";
import { t as PageHero } from "./page-hero-Bc5BUcrp.mjs";
import { t as ContactCTA } from "./contact-cta-CQEX_im7.mjs";
import { t as SolutionCard } from "./solution-card-b5nSblpP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-CqzsosFp.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Environments",
			title: "Solutions",
			kicker: "The same technical disciplines, arranged around the kind of place they serve. Start here if you know the environment more clearly than the equipment.",
			crumbs: [{
				label: "Home",
				href: "/"
			}, { label: "Solutions" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-50 text-ink-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap grid gap-4 py-16 sm:grid-cols-2 lg:py-24",
				children: solutions.map((solution) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionCard, { solution }, solution.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
	] });
}
//#endregion
export { SolutionsPage as component };
