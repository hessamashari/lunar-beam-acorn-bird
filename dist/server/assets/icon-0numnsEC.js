import { t as cn } from "./utils-C_uf36nf.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ui/icon.tsx
var paths = {
	network: /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "6",
			cy: "12",
			r: "2.25"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "18",
			cy: "6",
			r: "2.25"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "18",
			cy: "18",
			r: "2.25"
		}),
		/* @__PURE__ */ jsx("path", { d: "M8.1 11.1 15.9 6.9M8.1 12.9 15.9 17.1" })
	] }),
	enterprise: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("rect", {
		x: "4",
		y: "7",
		width: "16",
		height: "12",
		rx: "1"
	}), /* @__PURE__ */ jsx("path", { d: "M8 7V5h8v2M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" })] }),
	linux: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("rect", {
		x: "5",
		y: "4",
		width: "14",
		height: "16",
		rx: "1.5"
	}), /* @__PURE__ */ jsx("path", { d: "M8 8h8M8 12h5M8 16h3" })] }),
	smart: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("path", { d: "M4 18V8l8-4 8 4v10" }), /* @__PURE__ */ jsx("path", { d: "M9 18v-5h6v5" })] }),
	security: /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "3"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "8"
		}),
		/* @__PURE__ */ jsx("path", { d: "M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20" })
	] }),
	audio: /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("rect", {
			x: "6",
			y: "3",
			width: "12",
			height: "18",
			rx: "1.5"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "15",
			r: "2"
		}),
		/* @__PURE__ */ jsx("path", { d: "M10 7h4" })
	] }),
	hardware: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("rect", {
		x: "3",
		y: "6",
		width: "18",
		height: "12",
		rx: "1.5"
	}), /* @__PURE__ */ jsx("path", { d: "M7 10h4M7 14h2" })] }),
	arrow: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }),
	"arrow-up-right": /* @__PURE__ */ jsx("path", { d: "M7 17 17 7M8 7h9v9" })
};
function Icon({ name, className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.4",
		strokeLinecap: "square",
		strokeLinejoin: "miter",
		"aria-hidden": "true",
		className: cn("size-5", className),
		children: paths[name]
	});
}
var serviceIcons = {
	"network-infrastructure": "network",
	"enterprise-services": "enterprise",
	"infrastructure-administration": "linux",
	"smart-homes-buildings": "smart",
	"security-surveillance": "security",
	"audio-power": "audio",
	"hardware-support": "hardware"
};
//#endregion
export { serviceIcons as n, Icon as t };
