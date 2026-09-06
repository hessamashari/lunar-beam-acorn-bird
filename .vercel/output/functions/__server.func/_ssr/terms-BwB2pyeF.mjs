import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as site } from "./router-BCUO3Ujm.mjs";
import { t as PageHero } from "./page-hero-Bc5BUcrp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-BwB2pyeF.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Terms of Use",
		kicker: "This page is a structural placeholder and does not constitute contractual terms.",
		crumbs: [{
			label: "Home",
			href: "/"
		}, { label: "Terms" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap max-w-3xl space-y-6 py-16 leading-relaxed text-ink-700",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The content on this website describes the type of work ",
					site.name,
					" ",
					"undertakes. It is not an offer, a quotation, or a record of completed projects unless a specific case study says otherwise."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Project pages marked as placeholders are illustrative. They should not be read as claims about named clients, results, or performance." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Formal terms of engagement are issued with proposals, not on this page." })
			]
		})
	})] });
}
//#endregion
export { TermsPage as component };
