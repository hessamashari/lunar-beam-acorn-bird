export type Solution = {
  slug: string;
  number: string;
  title: string;
  navLabel: string;
  footerLabel: string;
  eyebrow: string;
  summary: string;
  intro: string;
  requirements: { title: string; body: string }[];
  architecture: { title: string; body: string }[];
  benefits: { title: string; body: string }[];
  serviceSlugs: string[];
  image: string;
  imageAlt: string;
};

export const solutions: Solution[] = [
  {
    slug: "business",
    number: "01",
    title: "Business & Enterprise",
    navLabel: "Business & Enterprise",
    footerLabel: "Business",
    eyebrow: "Workplace",
    summary:
      "Secure networking, servers, virtualization, communications, surveillance, and infrastructure for commercial environments.",
    intro:
      "Business environments typically need a network that can carry data, voice, and building systems at once — with servers, access control, and support sitting on the same design. We plan those layers together so growth does not mean a second unofficial infrastructure.",
    requirements: [
      {
        title: "A network that can be segmented",
        body: "Guest, operations, voice, and security traffic should not share an undifferentiated LAN.",
      },
      {
        title: "Compute that can be recovered",
        body: "Servers and virtual desktops need a placement, backup, and access model from the start.",
      },
      {
        title: "A single security picture",
        body: "Cameras, doors, and remote access should report into the same operational habits as the rest of IT.",
      },
    ],
    architecture: [
      {
        title: "Core network",
        body: "Structured cabling, switching, routing, firewall, and VPN sized to the premises.",
      },
      {
        title: "Server environment",
        body: "Linux or Microsoft infrastructure, virtualization, and the racks that hold them.",
      },
      {
        title: "Communications",
        body: "VoIP and, where required, internal media or webinar systems.",
      },
      {
        title: "Building security",
        body: "CCTV and access control on the same documented network.",
      },
    ],
    benefits: [
      {
        title: "One accountable design",
        body: "Networking, servers, and security are specified as a system rather than a sequence of unrelated purchases.",
      },
      {
        title: "Room to extend",
        body: "Pathways, addressing, and racks are planned so additional floors, cameras, or services can be added later.",
      },
      {
        title: "Supportable operations",
        body: "Handover includes the documentation needed to maintain the environment without the original installer in the room.",
      },
    ],
    serviceSlugs: [
      "network-infrastructure",
      "enterprise-services",
      "infrastructure-administration",
      "security-surveillance",
    ],
    image: "/images/sol-business.jpg",
    imageAlt: "Glass and concrete office building at dusk with warm interior lighting",
  },
  {
    slug: "education",
    number: "02",
    title: "Educational Institutions",
    navLabel: "Educational Institutions",
    footerLabel: "Education",
    eyebrow: "Campus",
    summary:
      "Smart classrooms, networking, monitoring, centralized services, and supporting infrastructure for schools and campuses.",
    intro:
      "Campuses combine dense wireless, classroom technology, administrative systems, and safeguarding requirements. We design the network and room systems so teaching spaces, offices, and shared services remain distinct without becoming isolated.",
    requirements: [
      {
        title: "Classroom-ready rooms",
        body: "Displays, audio, cameras, and network ports that teachers can use without a technician present.",
      },
      {
        title: "Segmented campus networking",
        body: "Students, staff, administration, and building systems on a coherent addressing and policy model.",
      },
      {
        title: "Central services",
        body: "Servers, storage, and communications that can be administered from a small IT function.",
      },
    ],
    architecture: [
      {
        title: "Campus network",
        body: "Structured cabling, wireless, routing, and firewalling across buildings.",
      },
      {
        title: "Smart classrooms",
        body: "Presentation, capture, and control integrated with the room rather than wheeled in.",
      },
      {
        title: "Monitoring",
        body: "CCTV and access where the institution requires them, on the same network standard.",
      },
      {
        title: "Central infrastructure",
        body: "Servers, virtualization, and communications hosted in a maintainable equipment room.",
      },
    ],
    benefits: [
      {
        title: "Teaching spaces that stay usable",
        body: "Room technology is specified with support in mind, not as a one-time installation event.",
      },
      {
        title: "A campus, not a collection of rooms",
        body: "Buildings share an architecture so additional classrooms do not reinvent addressing and cabling.",
      },
      {
        title: "Clearer operations",
        body: "Monitoring and access sit alongside IT rather than as a parallel contractor estate.",
      },
    ],
    serviceSlugs: [
      "smart-homes-buildings",
      "network-infrastructure",
      "audio-power",
      "enterprise-services",
    ],
    image: "/images/sol-education.jpg",
    imageAlt: "Empty modern classroom with a display wall, wood desks, and afternoon light",
  },
  {
    slug: "residential",
    number: "03",
    title: "Residential",
    navLabel: "Residential",
    footerLabel: "Residential",
    eyebrow: "Home",
    summary:
      "Smart homes, security, automation, networking, and connected technology designed around the building.",
    intro:
      "A residence is still an infrastructure project: cabling, wireless, access, cameras, and automation should be planned with the architecture, not added as visible afterthoughts. We design home systems that remain quiet, serviceable, and coherent.",
    requirements: [
      {
        title: "Invisible pathways",
        body: "Cabling, access points, and panels located so the interior remains architectural.",
      },
      {
        title: "A single home network",
        body: "Automation, media, and security should not each invent a separate wireless world.",
      },
      {
        title: "Support after handover",
        body: "Controls and documentation that the owner can live with, and a technician can service.",
      },
    ],
    architecture: [
      {
        title: "Home network",
        body: "Structured cabling, wireless, and a clearly defined equipment location.",
      },
      {
        title: "Automation",
        body: "Lighting, climate, and scene control integrated with the electrical and network layers.",
      },
      {
        title: "Security",
        body: "Access, cameras, and alarms on the same system rather than a consumer kit.",
      },
      {
        title: "Media",
        body: "Audio-visual distribution where the house requires it, without a stack of boxes in living spaces.",
      },
    ],
    benefits: [
      {
        title: "The house stays the house",
        body: "Technology is specified to recede — in panels, ceilings, and equipment rooms.",
      },
      {
        title: "Fewer competing ecosystems",
        body: "Networking, security, and automation are designed to interoperate on purpose.",
      },
      {
        title: "A path to extend",
        body: "Additional rooms, cameras, or controls can be added without rewiring the original intent.",
      },
    ],
    serviceSlugs: [
      "smart-homes-buildings",
      "security-surveillance",
      "network-infrastructure",
      "audio-power",
    ],
    image: "/images/sol-residential.jpg",
    imageAlt: "Twilight interior of a sophisticated home with concealed lighting and garden views",
  },
  {
    slug: "healthcare-hospitality",
    number: "04",
    title: "Healthcare & Hospitality",
    navLabel: "Healthcare & Hospitality",
    footerLabel: "Healthcare & Hospitality",
    eyebrow: "Facilities",
    summary:
      "Specialized networking, media distribution, communications, monitoring, and infrastructure for care and guest environments.",
    intro:
      "Healthcare and hospitality buildings serve people continuously. Networks, media, communications, and monitoring have to be designed for occupancy, privacy, and operations that do not stop at the end of a working day.",
    requirements: [
      {
        title: "Always-on infrastructure",
        body: "Power, network, and monitoring planned for spaces that remain occupied.",
      },
      {
        title: "Separated traffic",
        body: "Guest or patient-facing services, operations, and security should not share an open network.",
      },
      {
        title: "Quiet installation",
        body: "Cameras, access, and media must respect the character of the rooms they serve.",
      },
    ],
    architecture: [
      {
        title: "Facility network",
        body: "Segmented LAN/WAN, wireless, and secure remote access for operations staff.",
      },
      {
        title: "Communications and media",
        body: "VoIP, TV over LAN, and OTT where guest or waiting environments require them.",
      },
      {
        title: "Monitoring",
        body: "CCTV and access control designed around circulation rather than afterthought coverage.",
      },
      {
        title: "Equipment rooms",
        body: "Racks, power, and cooling for systems that cannot be serviced from a cupboard under the stairs.",
      },
    ],
    benefits: [
      {
        title: "Operations stay independent of guest experience",
        body: "Staff systems and public systems share infrastructure without sharing exposure.",
      },
      {
        title: "Media without clutter",
        body: "Distribution is designed into the building network rather than as a consumer stack in every room.",
      },
      {
        title: "A maintainable estate",
        body: "Racks and documentation that a facilities or IT function can live with.",
      },
    ],
    serviceSlugs: [
      "network-infrastructure",
      "enterprise-services",
      "security-surveillance",
      "audio-power",
    ],
    image: "/images/sol-healthcare.jpg",
    imageAlt: "Warm stone hospitality corridor with discreet cameras and an access-controlled door",
  },
  {
    slug: "specialized-facilities",
    number: "05",
    title: "Specialized Facilities",
    navLabel: "Specialized Facilities",
    footerLabel: "Specialized Facilities",
    eyebrow: "Operations",
    summary:
      "Situation rooms, control environments, secure infrastructure, and customized technology systems.",
    intro:
      "Some rooms exist to observe, decide, and act. Situation rooms and control environments need networks, displays, communications, and security that behave predictably. We design those rooms as complete systems rather than a wall of screens added to an ordinary office.",
    requirements: [
      {
        title: "Predictable operation",
        body: "Sources, displays, and communications must switch cleanly under pressure.",
      },
      {
        title: "Controlled access",
        body: "The room and the systems inside it should not be reachable from the general network by accident.",
      },
      {
        title: "Supportable custom work",
        body: "Bespoke does not mean undocumented. The installation has to be serviceable.",
      },
    ],
    architecture: [
      {
        title: "Secure infrastructure",
        body: "Isolated or tightly firewalled networking, with remote access designed rather than implied.",
      },
      {
        title: "Room systems",
        body: "Displays, audio, and control surfaces laid out around the work of the room.",
      },
      {
        title: "Surveillance and access",
        body: "Integrated monitoring where the facility requires a live operational picture.",
      },
      {
        title: "Compute",
        body: "Servers and virtualization placed so the room is not dependent on a single workstation.",
      },
    ],
    benefits: [
      {
        title: "The room has an architecture",
        body: "Power, network, and AV are designed together, so later changes do not unravel the original layout.",
      },
      {
        title: "Security is structural",
        body: "Access and segmentation are part of the design, not a software setting applied at the end.",
      },
      {
        title: "Custom without opacity",
        body: "Specialized systems are documented to the same standard as a conventional network.",
      },
    ],
    serviceSlugs: [
      "smart-homes-buildings",
      "security-surveillance",
      "network-infrastructure",
      "infrastructure-administration",
    ],
    image: "/images/sol-specialized.jpg",
    imageAlt: "Dim control environment with a curved bank of monitoring displays",
  },
];

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}
