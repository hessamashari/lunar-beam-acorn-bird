import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as site } from "./router-BCUO3Ujm.mjs";
import { t as PageHero } from "./page-hero-Bc5BUcrp.mjs";
import { t as ConsultationForm } from "./consultation-form-BeMyZaow.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-vx7Adql8.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Correspondence",
		title: "Contact",
		kicker: "Use the form for a consultation request, or the details opposite once official contact information is published.",
		crumbs: [{
			label: "Home",
			href: "/"
		}, { label: "Contact" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-14 py-20 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-almond-700",
						children: "Details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Contact information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-ink-600",
						children: "The fields below are placeholders and can be replaced in one configuration file when official details are confirmed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 divide-y divide-ink-200 border-y border-ink-200",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Business email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									children: site.email
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Phone",
								children: site.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Address",
								children: site.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								label: "Working hours",
								children: site.hours
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-ink-200 bg-khaki-50 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl text-ink-950",
							children: "Request a consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 mb-8 text-sm text-ink-700",
							children: "Tell us about the environment and we will follow up."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, {})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden border border-ink-200",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex aspect-21/9 items-center justify-center bg-stone-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 tech-grid opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative font-mono text-xs tracking-widest text-ink-500",
							children: "Map placeholder — coordinates to be provided"
						})]
					})
				})]
			})]
		})
	})] });
}
function Info({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1 py-5 sm:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "eyebrow text-ink-500",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-ink-900 sm:col-span-2",
			children
		})]
	});
}
//#endregion
export { ContactPage as component };
