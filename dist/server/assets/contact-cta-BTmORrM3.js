import { a as Button } from "./router-58-p8J_n.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/sections/contact-cta.tsx
function ContactCTA({ title = "Have a Technology Project in Mind?", body = "From network infrastructure and server systems to security, automation, and smart environments, we help design and implement technology solutions suited to your environment." }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden bg-ink-950",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: "/images/cta-texture.jpg",
				alt: "",
				className: "img-editorial absolute inset-0 size-full object-cover opacity-30",
				loading: "lazy"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink-950/80" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 tech-grid opacity-25" }),
			/* @__PURE__ */ jsxs("div", {
				className: "wrap relative py-24 text-center lg:py-32",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-almond-400",
						children: "Next step"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mx-auto mt-5 max-w-3xl text-3xl text-ink-50 sm:text-5xl",
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-300",
						children: body
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ jsx(Button, {
							to: "/consulting",
							children: "Request a Consultation"
						}), /* @__PURE__ */ jsx(Button, {
							to: "/contact",
							variant: "secondary",
							children: "Contact Us"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ContactCTA as t };
