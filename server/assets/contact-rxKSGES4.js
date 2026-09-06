import { i as site } from "./site-CKp1Foid.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ConsultationForm } from "./consultation-form-D43nXP22.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Correspondence",
		title: "Contact",
		kicker: "Use the form for a consultation request, or the details opposite once official contact information is published.",
		crumbs: [{
			label: "Home",
			href: "/"
		}, { label: "Contact" }]
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap grid gap-14 py-20 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Details"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Contact information"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm text-ink-600",
						children: "The fields below are placeholders and can be replaced in one configuration file when official details are confirmed."
					}),
					/* @__PURE__ */ jsxs("dl", {
						className: "mt-10 divide-y divide-ink-200 border-y border-ink-200",
						children: [
							/* @__PURE__ */ jsx(Info, {
								label: "Business email",
								children: /* @__PURE__ */ jsx("a", {
									href: `mailto:${site.email}`,
									children: site.email
								})
							}),
							/* @__PURE__ */ jsx(Info, {
								label: "Phone",
								children: site.phone
							}),
							/* @__PURE__ */ jsx(Info, {
								label: "Address",
								children: site.address
							}),
							/* @__PURE__ */ jsx(Info, {
								label: "Working hours",
								children: site.hours
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "border border-ink-200 bg-khaki-50 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl text-ink-950",
							children: "Request a consultation"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 mb-8 text-sm text-ink-700",
							children: "Tell us about the environment and we will follow up."
						}),
						/* @__PURE__ */ jsx(ConsultationForm, {})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-6 overflow-hidden border border-ink-200",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative flex aspect-21/9 items-center justify-center bg-stone-100",
						children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 tech-grid opacity-40" }), /* @__PURE__ */ jsx("p", {
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
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-1 py-5 sm:grid-cols-3",
		children: [/* @__PURE__ */ jsx("dt", {
			className: "eyebrow text-ink-500",
			children: label
		}), /* @__PURE__ */ jsx("dd", {
			className: "text-ink-900 sm:col-span-2",
			children
		})]
	});
}
//#endregion
export { ContactPage as component };
