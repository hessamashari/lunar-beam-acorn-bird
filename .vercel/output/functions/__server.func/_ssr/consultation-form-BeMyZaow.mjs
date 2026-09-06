import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Button, c as projectTypes, l as site, u as cn } from "./router-BCUO3Ujm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consultation-form-BeMyZaow.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "mt-2 w-full rounded-md border border-ink-200 bg-ink-50 px-3 py-2.5 text-ink-900 outline-none transition-colors duration-150 placeholder:text-ink-400 focus:border-almond-600";
function ConsultationForm({ tone = "light" }) {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)(null);
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (!name || !email || !message) {
			setError("Name, email, and a short project description are required.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}
		setError(null);
		setStatus("sent");
	}
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("border p-8", tone === "light" ? "border-ink-200 bg-ink-50 text-ink-900" : "border-ink-100/15 bg-ink-900 text-ink-50"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-almond-600",
				children: "Request prepared"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-2xl",
				children: "Thank you. Your details are ready to send."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("mt-4 text-sm leading-relaxed", tone === "light" ? "text-ink-700" : "text-ink-300"),
				children: [
					"A form endpoint has not been connected yet. Please email",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${site.email}`,
						className: "underline underline-offset-4",
						children: site.email
					}),
					" ",
					"or call ",
					site.phone,
					" with the same information. Nothing has been stored on a server."
				]
			})
		]
	});
	const labelClass = tone === "light" ? "text-ink-800" : "text-ink-200";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		action: `mailto:${site.email}`,
		method: "post",
		encType: "text/plain",
		className: "grid gap-5",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: cn("text-sm", labelClass),
					children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						autoComplete: "name",
						required: true,
						className: fieldClass
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: cn("text-sm", labelClass),
					children: ["Company / Organization", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "company",
						autoComplete: "organization",
						className: fieldClass
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: cn("text-sm", labelClass),
					children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true,
						className: fieldClass
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: cn("text-sm", labelClass),
					children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "phone",
						type: "tel",
						autoComplete: "tel",
						className: fieldClass
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn("text-sm", labelClass),
				children: ["Project Type", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "projectType",
					className: fieldClass,
					defaultValue: "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Select a category"
					}), projectTypes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: item
					}, item))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn("text-sm", labelClass),
				children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					rows: 6,
					required: true,
					className: cn(fieldClass, "resize-y")
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "text-sm text-almond-800",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Request a Consultation"
			}) })
		]
	});
}
//#endregion
export { ConsultationForm as t };
