import { i as site, n as pageTitle } from "./site-CKp1Foid.js";
//#region src/lib/seo.ts
function pageHead(opts) {
	return {
		meta: [
			{ title: pageTitle(opts.title) },
			{
				name: "description",
				content: opts.description
			},
			{
				name: "theme-color",
				content: "#141210"
			}
		],
		links: [{
			rel: "canonical",
			href: opts.path
		}]
	};
}
site.description;
//#endregion
export { pageHead as t };
