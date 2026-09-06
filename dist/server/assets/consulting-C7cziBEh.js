import { i as site } from "./site-CKp1Foid.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { t as ConsultationForm } from "./consultation-form-D43nXP22.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/consulting.tsx?tsr-split=component
function ConsultingPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Advisory",
		title: "Request a Consultation",
		kicker: "Describe the environment, the constraints, and what you need the system to do. We will follow up to discuss architecture, equipment, and delivery.",
		crumbs: [{
			label: "Home",
			href: "/"
		}, { label: "Consulting" }]
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap grid gap-14 py-20 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-700",
						children: "Equipment consulting"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl text-ink-950",
						children: "Need help choosing the right equipment?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 leading-relaxed text-ink-700",
						children: "We help customers evaluate, select, and procure appropriate networking, server, security, automation, and IT equipment according to technical requirements, compatibility, and budget."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 leading-relaxed text-ink-700",
						children: "The aim is a specification that can be installed and supported — not a catalogue of products in search of a problem."
					}),
					/* @__PURE__ */ jsxs("dl", {
						className: "mt-10 space-y-5 text-sm",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
								className: "eyebrow text-ink-500",
								children: "Email"
							}), /* @__PURE__ */ jsx("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ jsx("a", {
									href: `mailto:${site.email}`,
									className: "text-ink-900",
									children: site.email
								})
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
								className: "eyebrow text-ink-500",
								children: "Phone"
							}), /* @__PURE__ */ jsx("dd", {
								className: "mt-1",
								children: site.phone
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
								className: "eyebrow text-ink-500",
								children: "Hours"
							}), /* @__PURE__ */ jsx("dd", {
								className: "mt-1",
								children: site.hours
							})] })
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "border border-ink-200 bg-khaki-50 p-6 sm:p-8 lg:col-span-7",
				children: /* @__PURE__ */ jsx(ConsultationForm, {})
			})]
		})
	})] });
}
//#endregion
export { ConsultingPage as component };
