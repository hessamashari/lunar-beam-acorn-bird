import { i as site } from "./site-CKp1Foid.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/terms.tsx?tsr-split=component
function TermsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Legal",
		title: "Terms of Use",
		kicker: "This page is a structural placeholder and does not constitute contractual terms.",
		crumbs: [{
			label: "Home",
			href: "/"
		}, { label: "Terms" }]
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap max-w-3xl space-y-6 py-16 leading-relaxed text-ink-700",
			children: [
				/* @__PURE__ */ jsxs("p", { children: [
					"The content on this website describes the type of work ",
					site.name,
					" ",
					"undertakes. It is not an offer, a quotation, or a record of completed projects unless a specific case study says otherwise."
				] }),
				/* @__PURE__ */ jsx("p", { children: "Project pages marked as placeholders are illustrative. They should not be read as claims about named clients, results, or performance." }),
				/* @__PURE__ */ jsx("p", { children: "Formal terms of engagement are issued with proposals, not on this page." })
			]
		})
	})] });
}
//#endregion
export { TermsPage as component };
