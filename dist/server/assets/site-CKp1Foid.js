//#region src/data/site.ts
var site = {
	name: "Meridian",
	legalName: "Meridian Systems",
	tagline: "Integrated Technology & Infrastructure Solutions",
	description: "We design, implement, configure, and support reliable technology systems across networking, infrastructure, security, automation, and smart environments.",
	email: "consult@company.com",
	phone: "+1 (000) 000-0000",
	address: "Address to be provided",
	hours: "Monday–Friday, 09:00–18:00",
	url: ""
};
var capabilities = [
	"Networking",
	"Infrastructure",
	"Security",
	"Automation",
	"Virtualization",
	"Smart Technology"
];
var projectTypes = [
	"Network Infrastructure",
	"Enterprise & Network Services",
	"Linux & Infrastructure Administration",
	"Smart Homes & Buildings",
	"Security & Surveillance",
	"Audio, Power & Critical Systems",
	"Hardware & Technical Support",
	"Equipment Consulting",
	"Other"
];
function pageTitle(title) {
	return title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
}
//#endregion
export { site as i, pageTitle as n, projectTypes as r, capabilities as t };
