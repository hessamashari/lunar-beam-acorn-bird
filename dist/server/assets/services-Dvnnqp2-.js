//#region src/data/services.ts
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
export { homepageServices as n, services as r, getService as t };
