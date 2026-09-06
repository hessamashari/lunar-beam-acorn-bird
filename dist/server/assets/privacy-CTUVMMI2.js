import { i as site } from "./site-CKp1Foid.js";
import { t as PageHero } from "./page-hero-Bc5BUcrp.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/privacy.tsx?tsr-split=component
function PrivacyPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Legal",
		title: "Privacy Policy",
		kicker: "This page is a structural placeholder. It is not a legal policy and should be replaced with counsel-reviewed text before public use.",
		crumbs: [{
			label: "Home",
			href: "/"
		}, { label: "Privacy Policy" }]
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap max-w-3xl space-y-6 py-16 leading-relaxed text-ink-700",
			children: [
				/* @__PURE__ */ jsxs("p", { children: [site.legalName, " has not yet published a formal privacy policy. Until that document is in place, this site does not operate an account system and does not store consultation requests on a server."] }),
				/* @__PURE__ */ jsx("p", { children: "If you send a message by email or through the consultation form, the contents of that message are processed only to respond to the enquiry." }),
				/* @__PURE__ */ jsxs("p", { children: [
					"Contact:",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: `mailto:${site.email}`,
						className: "underline underline-offset-4",
						children: site.email
					}),
					"."
				] })
			]
		})
	})] });
}
//#endregion
export { PrivacyPage as component };
