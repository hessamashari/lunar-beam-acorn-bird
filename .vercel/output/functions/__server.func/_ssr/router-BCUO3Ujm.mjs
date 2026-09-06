import { i as __toESM } from "../_runtime.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { B as require_react, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Dvnnqp2-.js
var services = [
	{
		slug: "network-infrastructure",
		number: "01",
		title: "Network Infrastructure & IT",
		shortTitle: "Network Infrastructure",
		navLabel: "Network Infrastructure & IT",
		footerLabel: "Networking & IT",
		eyebrow: "Connectivity",
		summary: "Structured cabling, fiber, wireless links, LAN/WAN, routing, switching, VPN, firewalls, and network security.",
		intro: "Reliable connectivity is the foundation of every other system we deploy. We design and implement network infrastructure that is orderly, secure, and maintainable — from the physical layer through routing, switching, and controlled remote access.",
		homepageBody: "Physical and logical networks designed as a single system: cabling, fiber, wireless, routing, switching, and security working to the same standard.",
		highlights: [
			"Structured cabling & fiber",
			"LAN / MAN / WAN",
			"Wireless links",
			"VPN & firewalls"
		],
		groups: [
			{
				title: "Physical layer",
				body: "Clean, documented pathways so the network can be extended without disrupting what already works.",
				items: [
					"Structured cabling",
					"Fiber optic and FTTH",
					"Pathway and rack organization"
				]
			},
			{
				title: "Network architecture",
				body: "Segmented, routable networks sized to the environment rather than a generic template.",
				items: [
					"LAN / MAN / WAN",
					"Routing and switching",
					"Traffic management"
				]
			},
			{
				title: "Wireless links",
				body: "Point-to-point and point-to-multipoint links where fiber or copper is impractical.",
				items: ["Point-to-point wireless", "Point-to-multipoint wireless"]
			},
			{
				title: "Secure connectivity",
				body: "Controlled access in and out of the network, with remote work treated as a first-class requirement.",
				items: [
					"VPN",
					"Firewall",
					"Network security",
					"Secure remote access"
				]
			},
			{
				title: "Platforms we work with",
				body: "Designs are built around the equipment the environment actually requires.",
				items: ["Cisco", "MikroTik"]
			}
		],
		environments: [
			{
				title: "Business premises",
				body: "Campus and office networks that carry data, voice, and building systems on a coherent architecture."
			},
			{
				title: "Educational campuses",
				body: "Segmented networks for classrooms, administration, and shared services."
			},
			{
				title: "Residential and mixed-use",
				body: "Quiet, well-structured connectivity that can support automation and security without visible clutter."
			}
		],
		related: [
			"enterprise-services",
			"security-surveillance",
			"infrastructure-administration"
		],
		image: "/images/svc-network.jpg",
		imageAlt: "Enterprise network switches and fiber patch cords in a rack, photographed in warm industrial light"
	},
	{
		slug: "enterprise-services",
		number: "02",
		title: "Enterprise & Network Services",
		shortTitle: "Enterprise Services",
		navLabel: "Enterprise & Network Services",
		footerLabel: "Enterprise Services",
		eyebrow: "Communications",
		summary: "VoIP, TV over LAN, OTT platforms, webinar systems, VDI, virtualization, and Microsoft infrastructure services.",
		intro: "Once the network is in place, the services that run on it need to be designed with the same discipline. We implement communications, media distribution, virtual desktops, and Microsoft infrastructure so they share a common operating environment.",
		homepageBody: "Communications, media, virtual desktops, and Microsoft infrastructure — services that sit on the network and need to be designed with it, not after it.",
		highlights: [
			"VoIP",
			"TV over LAN & OTT",
			"VDI & virtualization",
			"Microsoft infrastructure"
		],
		groups: [
			{
				title: "Communications",
				body: "Voice treated as infrastructure: planned, segmented, and supportable.",
				items: ["VoIP"]
			},
			{
				title: "Media distribution",
				body: "Internal television and streaming platforms delivered over the LAN where the environment requires them.",
				items: ["TV over LAN", "OTT platforms"]
			},
			{
				title: "Collaboration systems",
				body: "Webinar and session infrastructure for organizations that host internal or public programs.",
				items: ["Webinar systems"]
			},
			{
				title: "Desktop and server platforms",
				body: "Virtualization and VDI so compute can be centralized, recovered, and scaled without rebuilding each workstation.",
				items: [
					"VDI",
					"Virtualization",
					"Microsoft infrastructure services"
				]
			}
		],
		environments: [
			{
				title: "Offices and headquarters",
				body: "Voice, desktop virtualization, and internal media on a shared network."
			},
			{
				title: "Education and training",
				body: "Webinar platforms and classroom media distribution alongside campus networking."
			},
			{
				title: "Hospitality",
				body: "In-building media and communications that sit on the same infrastructure as operations."
			}
		],
		related: [
			"network-infrastructure",
			"infrastructure-administration",
			"audio-power"
		],
		image: "/images/svc-enterprise.jpg",
		imageAlt: "Professional equipment rack with neatly laced cabling in a dark technical room"
	},
	{
		slug: "infrastructure-administration",
		number: "03",
		title: "Linux & Infrastructure Administration",
		shortTitle: "Infrastructure Administration",
		navLabel: "Linux & Infrastructure Administration",
		footerLabel: "Infrastructure Administration",
		eyebrow: "Compute",
		summary: "Linux administration, Docker, Kubernetes, virtualization, and server deployment.",
		intro: "Servers only remain useful if they are installed, configured, and operated as a system. We deploy and administer Linux environments, containers, and virtualization so applications, storage, and network services stay coherent over time.",
		homepageBody: "Linux servers, containers, and virtualization deployed and administered as a maintainable platform — not a collection of one-off machines.",
		highlights: [
			"Linux administration",
			"Docker",
			"Kubernetes",
			"Server deployment"
		],
		groups: [
			{
				title: "Operating environments",
				body: "Linux as the default platform for infrastructure services, with administration practices that can be handed over.",
				items: ["Linux administration", "Server deployment"]
			},
			{
				title: "Containers and orchestration",
				body: "Containerized services where they reduce operational complexity rather than add it.",
				items: ["Docker", "Kubernetes"]
			},
			{
				title: "Virtualization",
				body: "Consolidated compute for environments that need isolation, recovery, and efficient use of hardware.",
				items: ["Virtualization"]
			}
		],
		environments: [{
			title: "On-premises server rooms",
			body: "Physical hosts, hypervisors, and containers operated as a single environment."
		}, {
			title: "Hybrid estates",
			body: "Local infrastructure that can later connect to additional sites or hosted services without a redesign."
		}],
		related: [
			"enterprise-services",
			"network-infrastructure",
			"hardware-support"
		],
		image: "/images/svc-linux.jpg",
		imageAlt: "Rows of server racks in a dim equipment room with warm side lighting"
	},
	{
		slug: "smart-homes-buildings",
		number: "04",
		title: "Smart Homes & Buildings",
		shortTitle: "Smart Technology",
		navLabel: "Smart Homes & Buildings",
		footerLabel: "Smart Technology",
		eyebrow: "Automation",
		summary: "Smart homes, offices, building automation, greenhouse automation, smart classrooms, and situation rooms.",
		intro: "Automation is only useful when it is integrated with the building’s network, power, and security. We design smart environments as systems — sensors, controls, and interfaces that can be understood, maintained, and extended.",
		homepageBody: "Homes, offices, classrooms, and specialized rooms automated as part of the building’s infrastructure, not as a stack of disconnected gadgets.",
		highlights: [
			"Smart homes & offices",
			"Building automation",
			"Smart classrooms",
			"Situation rooms"
		],
		groups: [
			{
				title: "Residential and workplace",
				body: "Lighting, climate, access, and media coordinated through a single, documented approach.",
				items: ["Smart homes", "Offices"]
			},
			{
				title: "Building systems",
				body: "Automation planned with the electrical and network layers so it remains serviceable.",
				items: ["Building automation", "Greenhouse automation"]
			},
			{
				title: "Programmed environments",
				body: "Rooms with specific operational purposes, designed around how they are actually used.",
				items: ["Smart classrooms", "Situation rooms"]
			}
		],
		environments: [
			{
				title: "Residences",
				body: "Discreet automation that respects architecture and can be supported after handover."
			},
			{
				title: "Schools and campuses",
				body: "Classrooms and shared rooms with centralized control and monitoring."
			},
			{
				title: "Operational facilities",
				body: "Situation rooms and control environments where systems must be predictable under pressure."
			}
		],
		related: [
			"security-surveillance",
			"network-infrastructure",
			"audio-power"
		],
		image: "/images/svc-smart.jpg",
		imageAlt: "A calm residential interior with concealed lighting and a discreet wall-mounted control panel"
	},
	{
		slug: "security-surveillance",
		number: "05",
		title: "Security & Surveillance",
		shortTitle: "Security & Surveillance",
		navLabel: "Security & Surveillance",
		footerLabel: "Security & Surveillance",
		eyebrow: "Protection",
		summary: "CCTV, alarm systems, access control, automated doors, and integrated monitoring.",
		intro: "Physical security systems should share the same network discipline as everything else. We design CCTV, alarms, access control, and door automation so they can be monitored together and maintained without a separate unofficial infrastructure.",
		homepageBody: "Cameras, alarms, access control, and automated doors designed as one monitoring environment sitting on the building network.",
		highlights: [
			"CCTV",
			"Alarm systems",
			"Access control",
			"Integrated monitoring"
		],
		groups: [
			{
				title: "Observation",
				body: "Camera systems planned for coverage, retention, and the network that carries them.",
				items: ["CCTV"]
			},
			{
				title: "Detection and response",
				body: "Alarms that report into the same operational picture as video and access events.",
				items: ["Alarm systems"]
			},
			{
				title: "Controlled entry",
				body: "Who may enter, when, and through which opening — implemented as a system rather than a set of locks.",
				items: ["Access control", "Automated doors"]
			},
			{
				title: "Operations",
				body: "A monitoring layer that brings those systems into one place.",
				items: ["Integrated monitoring"]
			}
		],
		environments: [
			{
				title: "Workplaces and campuses",
				body: "Perimeter, interior, and access events on a shared monitoring wall or workstation."
			},
			{
				title: "Residences",
				body: "Discreet cameras and entry control that do not require a separate consumer ecosystem."
			},
			{
				title: "Specialized facilities",
				body: "Control rooms where surveillance is part of a broader operational picture."
			}
		],
		related: [
			"network-infrastructure",
			"smart-homes-buildings",
			"audio-power"
		],
		image: "/images/svc-security.jpg",
		imageAlt: "An empty control room with a curved wall of surveillance monitors in dim warm light"
	},
	{
		slug: "audio-power",
		number: "06",
		title: "Audio, Power & Critical Systems",
		shortTitle: "Audio & Power",
		navLabel: "Audio, Power & Critical Systems",
		footerLabel: "Audio & Power",
		eyebrow: "Critical systems",
		summary: "Audio-visual distribution, equipment power, and the supporting systems that keep technical rooms stable.",
		intro: "Rooms that present, monitor, or operate need more than a network drop. We integrate audio-visual systems and the power arrangements they depend on, so racks, rooms, and critical equipment remain orderly and supportable.",
		homepageBody: "Audio-visual systems and the power that supports them, integrated with the same rack, room, and network standards as the rest of the environment.",
		highlights: [
			"Audio-visual distribution",
			"Equipment power",
			"Technical room fit-out",
			"Rack integration"
		],
		groups: [
			{
				title: "Audio and presentation",
				body: "Sound and display systems for rooms that need to communicate clearly — classrooms, meeting spaces, and operational rooms.",
				items: ["Audio-visual distribution", "Room presentation systems"]
			},
			{
				title: "Power for technical systems",
				body: "Power planned for equipment rooms and critical devices so systems do not depend on ad-hoc outlets.",
				items: ["Equipment power", "Critical system support"]
			},
			{
				title: "Integration",
				body: "Racks, cabling, and rooms treated as part of the same installation as network and security.",
				items: ["Rack integration", "Technical room organization"]
			}
		],
		environments: [
			{
				title: "Classrooms and meeting rooms",
				body: "Audio and display that work with the building network and control systems."
			},
			{
				title: "Equipment rooms",
				body: "Power and rack layout that keep network, server, and AV hardware serviceable."
			},
			{
				title: "Situation and control rooms",
				body: "Stable power and audio for environments that cannot afford informal installation."
			}
		],
		related: [
			"smart-homes-buildings",
			"enterprise-services",
			"hardware-support"
		],
		image: "/images/svc-audio.jpg",
		imageAlt: "An audio-visual and power equipment rack with orderly cabling"
	},
	{
		slug: "hardware-support",
		number: "07",
		title: "Hardware & Technical Support",
		shortTitle: "Technical Support",
		navLabel: "Hardware & Technical Support",
		footerLabel: "Technical Support",
		eyebrow: "Support",
		summary: "Computer and laptop servicing, hardware upgrades, troubleshooting, maintenance, and drive/data recovery.",
		intro: "Infrastructure is only as useful as the devices and support behind it. We service computers and laptops, plan upgrades, diagnose faults, and recover data so the wider system remains usable after installation.",
		homepageBody: "Servicing, upgrades, troubleshooting, and data recovery for the computers and hardware that sit on the infrastructure we design.",
		highlights: [
			"Computer & laptop servicing",
			"Hardware upgrades",
			"Troubleshooting",
			"Drive & data recovery"
		],
		groups: [
			{
				title: "Device servicing",
				body: "Repair and maintenance of the computers people actually work on.",
				items: ["Computer and laptop servicing", "Hardware upgrades"]
			},
			{
				title: "Fault finding",
				body: "Methodical troubleshooting across hardware and the systems it connects to.",
				items: ["Troubleshooting", "Maintenance"]
			},
			{
				title: "Data",
				body: "Drive and data recovery when hardware fails and information must be preserved.",
				items: ["Drive and data recovery"]
			}
		],
		environments: [{
			title: "Workstations",
			body: "Business and institutional computers kept current and recoverable."
		}, {
			title: "After deployment",
			body: "Ongoing support for environments we have designed, and for existing estates that need a single technical point of contact."
		}],
		related: [
			"infrastructure-administration",
			"enterprise-services",
			"network-infrastructure"
		],
		image: "/images/svc-hardware.jpg",
		imageAlt: "Open laptop chassis and components on a dark workbench under warm side light"
	}
];
function getService(slug) {
	return services.find((item) => item.slug === slug);
}
var homepageServices = services.filter((item) => item.slug !== "audio-power");
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-B9EHGedA.js
var solutions = [
	{
		slug: "business",
		number: "01",
		title: "Business & Enterprise",
		navLabel: "Business & Enterprise",
		footerLabel: "Business",
		eyebrow: "Workplace",
		summary: "Secure networking, servers, virtualization, communications, surveillance, and infrastructure for commercial environments.",
		intro: "Business environments typically need a network that can carry data, voice, and building systems at once — with servers, access control, and support sitting on the same design. We plan those layers together so growth does not mean a second unofficial infrastructure.",
		requirements: [
			{
				title: "A network that can be segmented",
				body: "Guest, operations, voice, and security traffic should not share an undifferentiated LAN."
			},
			{
				title: "Compute that can be recovered",
				body: "Servers and virtual desktops need a placement, backup, and access model from the start."
			},
			{
				title: "A single security picture",
				body: "Cameras, doors, and remote access should report into the same operational habits as the rest of IT."
			}
		],
		architecture: [
			{
				title: "Core network",
				body: "Structured cabling, switching, routing, firewall, and VPN sized to the premises."
			},
			{
				title: "Server environment",
				body: "Linux or Microsoft infrastructure, virtualization, and the racks that hold them."
			},
			{
				title: "Communications",
				body: "VoIP and, where required, internal media or webinar systems."
			},
			{
				title: "Building security",
				body: "CCTV and access control on the same documented network."
			}
		],
		benefits: [
			{
				title: "One accountable design",
				body: "Networking, servers, and security are specified as a system rather than a sequence of unrelated purchases."
			},
			{
				title: "Room to extend",
				body: "Pathways, addressing, and racks are planned so additional floors, cameras, or services can be added later."
			},
			{
				title: "Supportable operations",
				body: "Handover includes the documentation needed to maintain the environment without the original installer in the room."
			}
		],
		serviceSlugs: [
			"network-infrastructure",
			"enterprise-services",
			"infrastructure-administration",
			"security-surveillance"
		],
		image: "/images/sol-business.jpg",
		imageAlt: "Glass and concrete office building at dusk with warm interior lighting"
	},
	{
		slug: "education",
		number: "02",
		title: "Educational Institutions",
		navLabel: "Educational Institutions",
		footerLabel: "Education",
		eyebrow: "Campus",
		summary: "Smart classrooms, networking, monitoring, centralized services, and supporting infrastructure for schools and campuses.",
		intro: "Campuses combine dense wireless, classroom technology, administrative systems, and safeguarding requirements. We design the network and room systems so teaching spaces, offices, and shared services remain distinct without becoming isolated.",
		requirements: [
			{
				title: "Classroom-ready rooms",
				body: "Displays, audio, cameras, and network ports that teachers can use without a technician present."
			},
			{
				title: "Segmented campus networking",
				body: "Students, staff, administration, and building systems on a coherent addressing and policy model."
			},
			{
				title: "Central services",
				body: "Servers, storage, and communications that can be administered from a small IT function."
			}
		],
		architecture: [
			{
				title: "Campus network",
				body: "Structured cabling, wireless, routing, and firewalling across buildings."
			},
			{
				title: "Smart classrooms",
				body: "Presentation, capture, and control integrated with the room rather than wheeled in."
			},
			{
				title: "Monitoring",
				body: "CCTV and access where the institution requires them, on the same network standard."
			},
			{
				title: "Central infrastructure",
				body: "Servers, virtualization, and communications hosted in a maintainable equipment room."
			}
		],
		benefits: [
			{
				title: "Teaching spaces that stay usable",
				body: "Room technology is specified with support in mind, not as a one-time installation event."
			},
			{
				title: "A campus, not a collection of rooms",
				body: "Buildings share an architecture so additional classrooms do not reinvent addressing and cabling."
			},
			{
				title: "Clearer operations",
				body: "Monitoring and access sit alongside IT rather than as a parallel contractor estate."
			}
		],
		serviceSlugs: [
			"smart-homes-buildings",
			"network-infrastructure",
			"audio-power",
			"enterprise-services"
		],
		image: "/images/sol-education.jpg",
		imageAlt: "Empty modern classroom with a display wall, wood desks, and afternoon light"
	},
	{
		slug: "residential",
		number: "03",
		title: "Residential",
		navLabel: "Residential",
		footerLabel: "Residential",
		eyebrow: "Home",
		summary: "Smart homes, security, automation, networking, and connected technology designed around the building.",
		intro: "A residence is still an infrastructure project: cabling, wireless, access, cameras, and automation should be planned with the architecture, not added as visible afterthoughts. We design home systems that remain quiet, serviceable, and coherent.",
		requirements: [
			{
				title: "Invisible pathways",
				body: "Cabling, access points, and panels located so the interior remains architectural."
			},
			{
				title: "A single home network",
				body: "Automation, media, and security should not each invent a separate wireless world."
			},
			{
				title: "Support after handover",
				body: "Controls and documentation that the owner can live with, and a technician can service."
			}
		],
		architecture: [
			{
				title: "Home network",
				body: "Structured cabling, wireless, and a clearly defined equipment location."
			},
			{
				title: "Automation",
				body: "Lighting, climate, and scene control integrated with the electrical and network layers."
			},
			{
				title: "Security",
				body: "Access, cameras, and alarms on the same system rather than a consumer kit."
			},
			{
				title: "Media",
				body: "Audio-visual distribution where the house requires it, without a stack of boxes in living spaces."
			}
		],
		benefits: [
			{
				title: "The house stays the house",
				body: "Technology is specified to recede — in panels, ceilings, and equipment rooms."
			},
			{
				title: "Fewer competing ecosystems",
				body: "Networking, security, and automation are designed to interoperate on purpose."
			},
			{
				title: "A path to extend",
				body: "Additional rooms, cameras, or controls can be added without rewiring the original intent."
			}
		],
		serviceSlugs: [
			"smart-homes-buildings",
			"security-surveillance",
			"network-infrastructure",
			"audio-power"
		],
		image: "/images/sol-residential.jpg",
		imageAlt: "Twilight interior of a sophisticated home with concealed lighting and garden views"
	},
	{
		slug: "healthcare-hospitality",
		number: "04",
		title: "Healthcare & Hospitality",
		navLabel: "Healthcare & Hospitality",
		footerLabel: "Healthcare & Hospitality",
		eyebrow: "Facilities",
		summary: "Specialized networking, media distribution, communications, monitoring, and infrastructure for care and guest environments.",
		intro: "Healthcare and hospitality buildings serve people continuously. Networks, media, communications, and monitoring have to be designed for occupancy, privacy, and operations that do not stop at the end of a working day.",
		requirements: [
			{
				title: "Always-on infrastructure",
				body: "Power, network, and monitoring planned for spaces that remain occupied."
			},
			{
				title: "Separated traffic",
				body: "Guest or patient-facing services, operations, and security should not share an open network."
			},
			{
				title: "Quiet installation",
				body: "Cameras, access, and media must respect the character of the rooms they serve."
			}
		],
		architecture: [
			{
				title: "Facility network",
				body: "Segmented LAN/WAN, wireless, and secure remote access for operations staff."
			},
			{
				title: "Communications and media",
				body: "VoIP, TV over LAN, and OTT where guest or waiting environments require them."
			},
			{
				title: "Monitoring",
				body: "CCTV and access control designed around circulation rather than afterthought coverage."
			},
			{
				title: "Equipment rooms",
				body: "Racks, power, and cooling for systems that cannot be serviced from a cupboard under the stairs."
			}
		],
		benefits: [
			{
				title: "Operations stay independent of guest experience",
				body: "Staff systems and public systems share infrastructure without sharing exposure."
			},
			{
				title: "Media without clutter",
				body: "Distribution is designed into the building network rather than as a consumer stack in every room."
			},
			{
				title: "A maintainable estate",
				body: "Racks and documentation that a facilities or IT function can live with."
			}
		],
		serviceSlugs: [
			"network-infrastructure",
			"enterprise-services",
			"security-surveillance",
			"audio-power"
		],
		image: "/images/sol-healthcare.jpg",
		imageAlt: "Warm stone hospitality corridor with discreet cameras and an access-controlled door"
	},
	{
		slug: "specialized-facilities",
		number: "05",
		title: "Specialized Facilities",
		navLabel: "Specialized Facilities",
		footerLabel: "Specialized Facilities",
		eyebrow: "Operations",
		summary: "Situation rooms, control environments, secure infrastructure, and customized technology systems.",
		intro: "Some rooms exist to observe, decide, and act. Situation rooms and control environments need networks, displays, communications, and security that behave predictably. We design those rooms as complete systems rather than a wall of screens added to an ordinary office.",
		requirements: [
			{
				title: "Predictable operation",
				body: "Sources, displays, and communications must switch cleanly under pressure."
			},
			{
				title: "Controlled access",
				body: "The room and the systems inside it should not be reachable from the general network by accident."
			},
			{
				title: "Supportable custom work",
				body: "Bespoke does not mean undocumented. The installation has to be serviceable."
			}
		],
		architecture: [
			{
				title: "Secure infrastructure",
				body: "Isolated or tightly firewalled networking, with remote access designed rather than implied."
			},
			{
				title: "Room systems",
				body: "Displays, audio, and control surfaces laid out around the work of the room."
			},
			{
				title: "Surveillance and access",
				body: "Integrated monitoring where the facility requires a live operational picture."
			},
			{
				title: "Compute",
				body: "Servers and virtualization placed so the room is not dependent on a single workstation."
			}
		],
		benefits: [
			{
				title: "The room has an architecture",
				body: "Power, network, and AV are designed together, so later changes do not unravel the original layout."
			},
			{
				title: "Security is structural",
				body: "Access and segmentation are part of the design, not a software setting applied at the end."
			},
			{
				title: "Custom without opacity",
				body: "Specialized systems are documented to the same standard as a conventional network."
			}
		],
		serviceSlugs: [
			"smart-homes-buildings",
			"security-surveillance",
			"network-infrastructure",
			"infrastructure-administration"
		],
		image: "/images/sol-specialized.jpg",
		imageAlt: "Dim control environment with a curved bank of monitoring displays"
	}
];
function getSolution(slug) {
	return solutions.find((item) => item.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/site-CKp1Foid.js
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
//#region node_modules/.nitro/vite/services/ssr/assets/seo-DXFKbuje.js
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
//#region node_modules/.nitro/vite/services/ssr/assets/projects-GtOcm2n0.js
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
//#region node_modules/.nitro/vite/services/ssr/assets/router-BCUO3Ujm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var primaryNav = [
	{
		label: "Services",
		href: "/services",
		children: services.map((item) => ({
			label: item.navLabel,
			href: `/services/${item.slug}`,
			description: item.summary
		}))
	},
	{
		label: "Solutions",
		href: "/solutions",
		children: solutions.map((item) => ({
			label: item.navLabel,
			href: `/solutions/${item.slug}`,
			description: item.summary
		}))
	},
	{
		label: "Projects",
		href: "/projects"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Consulting",
		href: "/consulting"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
var footerNav = {
	company: [
		{
			label: "About",
			href: "/about"
		},
		{
			label: "Our Approach",
			href: "/about#approach"
		},
		{
			label: "Projects",
			href: "/projects"
		},
		{
			label: "Consulting",
			href: "/consulting"
		}
	],
	services: services.map((item) => ({
		label: item.footerLabel,
		href: `/services/${item.slug}`
	})),
	solutions: solutions.map((item) => ({
		label: item.footerLabel,
		href: `/solutions/${item.slug}`
	}))
};
var variants = {
	primary: "bg-almond-400 text-ink-950 hover:bg-almond-300 focus-visible:outline-almond-200",
	secondary: "border border-ink-100/20 bg-transparent text-ink-50 hover:border-almond-400 hover:text-almond-200",
	inverse: "border border-ink-900/15 bg-transparent text-ink-900 hover:border-almond-600 hover:text-almond-800",
	light: "bg-ink-950 text-ink-50 hover:bg-ink-800",
	ghost: "bg-transparent text-ink-50 hover:text-almond-300"
};
var base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-[background-color,color,border-color,transform] duration-150 ease-out active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";
function Button(props) {
	const { variant = "primary", className, children } = props;
	const classes = cn(base, variants[variant], className);
	if ("to" in props && props.to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: props.to,
		className: classes,
		children
	});
	if ("href" in props && props.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: props.href,
		className: classes,
		children
	});
	const { type = "button", ...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: classes,
		...rest,
		children
	});
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.5",
				y: "3.5",
				width: "25",
				height: "25",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "16",
				y1: "7",
				x2: "16",
				y2: "25",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14.4",
				y: "14.4",
				width: "3.2",
				height: "3.2",
				className: "fill-almond-400"
			})
		]
	});
}
function Logo({ className, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4", tone === "dark" ? "text-ink-50" : "text-ink-950", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-sm font-medium tracking-[0.22em] uppercase",
			children: "Meridian"
		})]
	});
}
function MobileMenu() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const panelId = (0, import_react.useId)();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "inline-flex size-11 items-center justify-center rounded-sm text-ink-50",
			"aria-expanded": open,
			"aria-controls": panelId,
			onClick: () => setOpen((value) => !value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: open ? "Close menu" : "Open menu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex w-5 flex-col gap-1.5",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-current transition-transform duration-200", open && "translate-y-2 rotate-45") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-current", open && "opacity-0") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-current transition-transform duration-200", open && "-translate-y-2 -rotate-45") })
				]
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: panelId,
			className: "fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-ink-950 px-5 py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-ink-100/10",
						children: item.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex min-h-12 cursor-pointer list-none items-center justify-between py-3 text-base text-ink-50",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink-400",
								"aria-hidden": "true",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mb-4 space-y-1 pb-2 pl-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.href,
								className: "block py-2 text-sm text-almond-300",
								children: ["View all ", item.label.toLowerCase()]
							}) }), item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: child.href,
								className: "block py-2 text-sm text-ink-300 hover:text-ink-50",
								children: child.label
							}) }, child.href))]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "flex min-h-12 items-center text-base text-ink-50",
							children: item.label
						})
					}, item.href))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/consulting",
						className: "w-full",
						children: "Request a Consultation"
					})
				})]
			})
		}) : null]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200", scrolled ? "border-ink-100/10 bg-ink-950/95 backdrop-blur-md" : "border-transparent bg-ink-950"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap flex h-16 items-center justify-between gap-6 lg:h-[4.25rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden lg:flex lg:items-center lg:gap-1",
					children: primaryNav.map((item) => item.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaItem, {
						item,
						active: pathname === item.href || pathname.startsWith(`${item.href}/`)
					}, item.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: cn("rounded-sm px-3 py-2 text-sm text-ink-200 transition-colors duration-150 hover:text-ink-50", pathname === item.href && "text-ink-50"),
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/consulting",
						className: "hidden sm:inline-flex",
						variant: "primary",
						children: "Request a Consultation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, {})]
				})
			]
		})
	});
}
function MegaItem({ item, active }) {
	const menuId = (0, import_react.useId)();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: item.href,
			className: cn("inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm text-ink-200 transition-colors duration-150 hover:text-ink-50", (active || open) && "text-ink-50"),
			"aria-expanded": open,
			"aria-haspopup": "true",
			"aria-controls": menuId,
			onFocus: () => setOpen(true),
			children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "text-[0.6rem]",
				children: "▾"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: menuId,
			hidden: !open,
			className: cn("absolute left-0 top-full w-[min(36rem,calc(100vw-4rem))] border border-ink-100/10 bg-ink-900 pt-2 shadow-hairline", open ? "visible opacity-100" : "invisible opacity-0"),
			onFocusCapture: () => setOpen(true),
			onBlur: (event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px p-2 sm:grid-cols-2",
				children: item.children?.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: child.href,
					className: "rounded-sm px-3 py-3 transition-colors duration-150 hover:bg-ink-800",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-ink-50",
						children: child.label
					}), child.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 line-clamp-2 block text-xs leading-relaxed text-ink-400",
						children: child.description
					}) : null]
				}, child.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-ink-100/10 px-5 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.href,
					className: "text-xs tracking-wide text-almond-400 hover:text-almond-300",
					children: ["View all ", item.label.toLowerCase()]
				})
			})]
		})]
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-ink-100/10 bg-ink-950 text-ink-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap py-16 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: footerNav.company.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "hover:text-ink-50",
								children: item.label
							}) }, item.href))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: footerNav.services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "hover:text-ink-50",
								children: item.label
							}) }, item.href))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Solutions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: footerNav.solutions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: "hover:text-ink-50",
								children: item.label
							}) }, item.href))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${site.phone}`,
									className: "hover:text-ink-50",
									children: site.phone
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "hover:text-ink-50",
									children: site.email
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Address"
								}), site.address] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Working hours"
								}), site.hours] })
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-col gap-6 border-t border-ink-100/10 pt-8 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-sm text-ink-500",
						children: site.tagline
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-6 gap-y-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-ink-50",
							children: "Privacy Policy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-ink-50",
							children: "Terms"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 font-mono text-xs tracking-wide text-ink-600",
					children: [
						"© ",
						year,
						" ",
						site.legalName,
						". Contact details are placeholders pending confirmation."
					]
				})
			]
		})
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-ink-950 text-ink-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-almond-400 focus:px-4 focus:py-2 focus:text-ink-950",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink-950",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap py-28 lg:py-36",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-almond-400",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-xl text-4xl text-ink-50 sm:text-5xl",
					children: "This page is not on the network."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-lg text-ink-300",
					children: "The address may have changed, or the resource has not been published yet. Return to the homepage or browse services."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/",
						children: "Back to Home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						to: "/services",
						variant: "secondary",
						children: "View Services"
					})]
				})
			]
		})
	});
}
var styles_default = "/assets/styles-D4COAl1G.css";
var APP_NAME = "Meridian";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#141210"
			},
			{
				name: "description",
				content: "Meridian designs, implements, configures, and supports integrated technology and infrastructure systems."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-ink-950 text-ink-50",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-CnfJonqg.mjs");
var Route$11 = createFileRoute("/")({
	head: () => pageHead({
		description: "Meridian designs, implements, configures, and supports integrated technology systems across networking, infrastructure, security, automation, and smart environments.",
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-D-lkJKNC.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => pageHead({
		title: "About",
		description: "Meridian designs technology systems that work together — networking, infrastructure, security, automation, and support as a single practice.",
		path: "/about"
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./consulting-BT-jaJw8.mjs");
var Route$9 = createFileRoute("/consulting")({
	head: () => pageHead({
		title: "Consulting",
		description: "Request a consultation on networking, servers, security, automation, and IT equipment. Technical evaluation and procurement support.",
		path: "/consulting"
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-vx7Adql8.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => pageHead({
		title: "Contact",
		description: "Contact Meridian to request a consultation. Phone, email, and address fields are placeholders until official details are confirmed.",
		path: "/contact"
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./privacy-CTUVMMI2.mjs");
var Route$7 = createFileRoute("/privacy")({
	head: () => pageHead({
		title: "Privacy Policy",
		description: "Placeholder privacy policy for Meridian pending legal review.",
		path: "/privacy"
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./terms-BwB2pyeF.mjs");
var Route$6 = createFileRoute("/terms")({
	head: () => pageHead({
		title: "Terms",
		description: "Placeholder terms of use for Meridian pending legal review.",
		path: "/terms"
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects-BDtmPqSz.mjs");
var Route$5 = createFileRoute("/projects/")({
	head: () => pageHead({
		title: "Projects",
		description: "Representative project types in network infrastructure, building automation, CCTV, and virtualized server environments. Case studies forthcoming.",
		path: "/projects"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_slug-kofwYlNv.mjs");
var Route$4 = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => pageHead({
		title: loaderData?.project.title ?? "Project",
		description: loaderData?.project.summary ?? "",
		path: `/projects/${loaderData?.project.slug ?? ""}`
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services-laxKfmWP.mjs");
var Route$3 = createFileRoute("/services/")({
	head: () => pageHead({
		title: "Services",
		description: "Network infrastructure, enterprise services, Linux administration, smart buildings, security, audio and power, and technical support — designed as one system.",
		path: "/services"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-ku6Ulo7z.mjs");
var Route$2 = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => pageHead({
		title: loaderData?.service.title ?? "Service",
		description: loaderData?.service.summary ?? "",
		path: `/services/${loaderData?.service.slug ?? ""}`
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./solutions-CqzsosFp.mjs");
var Route$1 = createFileRoute("/solutions/")({
	head: () => pageHead({
		title: "Solutions",
		description: "Technology solutions organized by environment: business, education, residential, healthcare and hospitality, and specialized facilities.",
		path: "/solutions"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-CwoDFnh3.mjs");
var Route = createFileRoute("/solutions/$slug")({
	loader: ({ params }) => {
		const solution = getSolution(params.slug);
		if (!solution) throw notFound();
		return { solution };
	},
	head: ({ loaderData }) => pageHead({
		title: loaderData?.solution.title ?? "Solution",
		description: loaderData?.solution.summary ?? "",
		path: `/solutions/${loaderData?.solution.slug ?? ""}`
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var ConsultingRoute = Route$9.update({
	id: "/consulting",
	path: "/consulting",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$7.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var TermsRoute = Route$6.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$12
});
var ProjectsIndexRoute = Route$5.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$12
});
var ProjectsSlugRoute = Route$4.update({
	id: "/projects/$slug",
	path: "/projects/$slug",
	getParentRoute: () => Route$12
});
var ServicesIndexRoute = Route$3.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$12
});
var ServicesSlugRoute = Route$2.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$12
});
var SolutionsIndexRoute = Route$1.update({
	id: "/solutions/",
	path: "/solutions/",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ConsultingRoute,
	ContactRoute,
	PrivacyRoute,
	TermsRoute,
	ProjectsSlugRoute,
	ServicesSlugRoute,
	SolutionsSlugRoute: Route.update({
		id: "/solutions/$slug",
		path: "/solutions/$slug",
		getParentRoute: () => Route$12
	}),
	ProjectsIndexRoute,
	ServicesIndexRoute,
	SolutionsIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Button as a, projectTypes as c, solutions as d, getService as f, Route$4 as i, site as l, services as m, Route as n, projects as o, homepageServices as p, Route$2 as r, capabilities as s, router_exports as t, cn as u };
