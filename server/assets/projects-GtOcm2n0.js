//#region src/data/projects.ts
var projects = [
	{
		slug: "enterprise-network-infrastructure",
		title: "Enterprise Network Infrastructure",
		category: "Network Infrastructure",
		summary: "A representative campus-style network: structured cabling, segmented switching, firewall, and documented remote access.",
		environment: "Business & Enterprise",
		serviceSlugs: ["network-infrastructure", "security-surveillance"],
		technologies: [
			"Structured cabling",
			"Fiber",
			"Cisco / MikroTik",
			"VPN",
			"Firewall"
		],
		challenge: "Premises that have grown through successive additions often carry data, voice, and cameras on an undifferentiated network, with little documentation for the next change.",
		solution: "A layered design — physical pathways, switching domains, firewall policy, and remote access — specified so each service has a place without requiring a parallel cabling plant.",
		result: "Placeholder. Specific outcomes will be published when a completed case study is available. This page describes the type of work, not a named client engagement.",
		image: "/images/proj-network.jpg",
		imageAlt: "Close view of enterprise switches and fiber transceivers in a rack",
		dateLabel: "Case study forthcoming",
		featured: true
	},
	{
		slug: "smart-building-automation",
		title: "Smart Building Automation",
		category: "Automation",
		summary: "Building automation planned with the network and electrical layers so lighting, climate, and room control remain serviceable.",
		environment: "Residential / Workplace",
		serviceSlugs: [
			"smart-homes-buildings",
			"network-infrastructure",
			"audio-power"
		],
		technologies: [
			"Building automation",
			"Structured cabling",
			"Room control"
		],
		challenge: "Automation introduced as consumer products tends to fragment: each function invents its own hub, wireless, and support path.",
		solution: "A building-level approach — cabling, controllers, and interfaces specified with the same documentation standard as the network.",
		result: "Placeholder. This profile describes a typical engagement pattern. It is not a completed project record.",
		image: "/images/proj-smart.jpg",
		imageAlt: "Modern building facade at dusk with warm interior lighting",
		dateLabel: "Case study forthcoming"
	},
	{
		slug: "cctv-access-control",
		title: "CCTV & Access Control",
		category: "Security",
		summary: "Cameras, door control, and monitoring designed onto the building network rather than as a standalone security island.",
		environment: "Workplace / Specialized Facilities",
		serviceSlugs: ["security-surveillance", "network-infrastructure"],
		technologies: [
			"CCTV",
			"Access control",
			"Integrated monitoring"
		],
		challenge: "Security contractors and IT contractors often leave two networks behind. Coverage gaps and support gaps follow.",
		solution: "A single documented design for cameras, controllers, and the switching that carries them, with monitoring treated as an operational workspace.",
		result: "Placeholder. Named sites and performance claims will be added only when real project data is supplied.",
		image: "/images/proj-cctv.jpg",
		imageAlt: "Surveillance monitoring wall in an unoccupied control room",
		dateLabel: "Case study forthcoming"
	},
	{
		slug: "virtualized-server-environment",
		title: "Virtualized Server Environment",
		category: "Infrastructure",
		summary: "On-premises virtualization and Linux administration so applications, storage, and recovery sit on a coherent platform.",
		environment: "Business & Enterprise",
		serviceSlugs: [
			"infrastructure-administration",
			"enterprise-services",
			"hardware-support"
		],
		technologies: [
			"Linux",
			"Virtualization",
			"Docker",
			"Server deployment"
		],
		challenge: "One-off servers accumulate until backup, access, and capacity are different on every machine.",
		solution: "A virtualized host environment with a defined administration model — so new services are placed, not improvised.",
		result: "Placeholder. This is a representative solution type, not a case study of a specific deployment.",
		image: "/images/proj-virtual.jpg",
		imageAlt: "Server racks receding in a dim equipment room",
		dateLabel: "Case study forthcoming"
	}
];
function getProject(slug) {
	return projects.find((item) => item.slug === slug);
}
//#endregion
export { projects as n, getProject as t };
