import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as site } from "./router-BCUO3Ujm.mjs";
import { t as PageHero } from "./page-hero-Bc5BUcrp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-CTUVMMI2.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Privacy Policy",
		kicker: "This page is a structural placeholder. It is not a legal policy and should be replaced with counsel-reviewed text before public use.",
		crumbs: [{
			label: "Home",
			href: "/"
		}, { label: "Privacy Policy" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap max-w-3xl space-y-6 py-16 leading-relaxed text-ink-700",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [site.legalName, " has not yet published a formal privacy policy. Until that document is in place, this site does not operate an account system and does not store consultation requests on a server."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you send a message by email or through the consultation form, the contents of that message are processed only to respond to the enquiry." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Contact:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
