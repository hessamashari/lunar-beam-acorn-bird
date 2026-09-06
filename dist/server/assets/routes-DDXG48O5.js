import { n as homepageServices } from "./services-Dvnnqp2-.js";
import { n as solutions } from "./solutions-B9EHGedA.js";
import { t as cn } from "./utils-C_uf36nf.js";
import { t as capabilities } from "./site-CKp1Foid.js";
import { n as projects } from "./projects-GtOcm2n0.js";
import { a as Button } from "./router-58-p8J_n.js";
import { n as SectionHeading, r as principles, t as Process } from "./process-brFrZGj0.js";
import { t as ContactCTA } from "./contact-cta-BTmORrM3.js";
import { t as Icon } from "./icon-0numnsEC.js";
import { t as SolutionCard } from "./solution-card-b5nSblpP.js";
import { t as ProjectCard } from "./project-card-DH2kNCP1.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/sections/hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden bg-ink-950",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: "/images/hero.jpg",
				alt: "Rows of enterprise server racks in a dim equipment room with warm side lighting",
				className: "img-editorial absolute inset-0 size-full object-cover",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-ink-950/72" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 tech-grid opacity-30" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-ink-100/10 lg:block" }),
			/* @__PURE__ */ jsxs("div", {
				className: "wrap relative grid min-h-[min(88vh,52rem)] items-end py-20 lg:grid-cols-12 lg:py-28",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow text-almond-400",
							children: "SYS.01 — Integrated systems"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 max-w-4xl text-4xl text-ink-50 sm:text-5xl lg:text-6xl",
							children: "Integrated Technology & Infrastructure Solutions"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-ink-200",
							children: "We design, implement, configure, and support reliable technology systems across networking, infrastructure, security, automation, and smart environments."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ jsx(Button, {
								to: "/consulting",
								children: "Request a Consultation"
							}), /* @__PURE__ */ jsx(Button, {
								to: "/services",
								variant: "secondary",
								children: "Explore Our Services"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "mt-12 hidden font-mono text-xs tracking-widest text-ink-300 lg:col-span-4 lg:mt-0 lg:flex lg:flex-col lg:items-end lg:justify-end lg:gap-4",
					children: [
						/* @__PURE__ */ jsx("p", { children: "N 40.21 / INF-04" }),
						/* @__PURE__ */ jsx("p", { children: "LAYER 1 — PHYSICAL" }),
						/* @__PURE__ */ jsx("p", { children: "LAYER 2 — LOGICAL" }),
						/* @__PURE__ */ jsx("p", { children: "LAYER 3 — OPERATIONAL" })
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/sections/capability-strip.tsx
function CapabilityStrip() {
	return /* @__PURE__ */ jsx("section", {
		"aria-label": "Capabilities",
		className: "border-y border-ink-100/10 bg-ink-900",
		children: /* @__PURE__ */ jsx("ul", {
			className: "wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5",
			children: capabilities.map((item, index) => /* @__PURE__ */ jsxs("li", {
				className: "flex items-center gap-8 font-mono text-xs tracking-widest text-ink-200 uppercase",
				children: [index > 0 ? /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					className: "hidden h-3 w-px bg-ink-100/15 sm:block"
				}) : null, /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "size-1.5 bg-almond-400",
						"aria-hidden": "true"
					}), item]
				})]
			}, item))
		})
	});
}
//#endregion
//#region src/components/sections/about-positioning.tsx
function AboutPositioning() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-khaki-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ jsx(SectionHeading, {
						tone: "light",
						eyebrow: "Practice",
						title: "Technology Systems Designed to Work Together"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 lg:col-start-8",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-lg leading-relaxed text-ink-700",
						children: "We provide integrated technology solutions for businesses, organizations, educational institutions, and residential environments. From network infrastructure and servers to surveillance, access control, automation, and smart systems, we design technologies that work together as a unified and maintainable system."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-8",
						children: /* @__PURE__ */ jsx(Button, {
							to: "/about",
							variant: "light",
							children: "Learn More About Us"
						})
					})]
				}),
				/* @__PURE__ */ jsx("figure", {
					className: "lg:col-span-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 lg:grid-cols-12",
						children: [/* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-sm lg:col-span-8",
							children: /* @__PURE__ */ jsx("img", {
								src: "/images/about-cabling.jpg",
								alt: "Neatly dressed structured cabling entering a patch panel",
								className: "img-editorial aspect-21/9 w-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsxs("figcaption", {
							className: "flex flex-col justify-between border border-ink-200 bg-ink-50 p-6 lg:col-span-4",
							children: [/* @__PURE__ */ jsx("p", {
								className: "eyebrow text-almond-700",
								children: "SYS.02"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-8 text-sm leading-relaxed text-ink-700",
								children: "Physical layer, logical network, and operational systems specified as one architecture — so the next change has a place to go."
							})]
						})]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/sections/services-grid.tsx
function ServicesGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink-950 text-ink-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap py-20 lg:py-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Services",
					title: "Core technical disciplines",
					kicker: "Six primary domains, designed to be specified together rather than procured as unrelated trades."
				}), /* @__PURE__ */ jsx(Button, {
					to: "/services",
					variant: "secondary",
					className: "self-start",
					children: "View All Services"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 space-y-16 lg:space-y-24",
				children: homepageServices.map((service, index) => {
					const reverse = index % 2 === 1;
					return /* @__PURE__ */ jsxs("article", {
						className: "grid items-center gap-8 border-t border-ink-100/10 pt-10 lg:grid-cols-12 lg:gap-12",
						children: [/* @__PURE__ */ jsx("div", {
							className: cn("lg:col-span-6", reverse && "lg:col-start-7 lg:row-start-1"),
							children: /* @__PURE__ */ jsx("div", {
								className: "overflow-hidden rounded-sm border border-ink-100/10",
								children: /* @__PURE__ */ jsx("img", {
									src: service.image,
									alt: service.imageAlt,
									className: "img-editorial aspect-3/2 w-full object-cover",
									loading: "lazy"
								})
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: cn("lg:col-span-5", reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"),
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow text-almond-400",
									children: service.number
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-3xl",
									children: service.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 leading-relaxed text-ink-300",
									children: service.homepageBody
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-6 grid gap-2 sm:grid-cols-2",
									children: service.highlights.map((item) => /* @__PURE__ */ jsx("li", {
										className: "border-l border-ink-100/15 pl-3 text-sm text-ink-200",
										children: item
									}, item))
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/services/$slug",
									params: { slug: service.slug },
									className: "mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-almond-300 hover:text-almond-200",
									children: ["Explore service", /* @__PURE__ */ jsx(Icon, {
										name: "arrow",
										className: "size-4"
									})]
								})
							]
						})]
					}, service.slug);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/sections/solutions-grid.tsx
function SolutionsGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap py-20 lg:py-28",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				tone: "light",
				eyebrow: "Environments",
				title: "Solutions for Different Environments",
				kicker: "Customers often search for a place — an office, a campus, a home, a facility — rather than a technology. These pages start from that need."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: solutions.map((solution, index) => /* @__PURE__ */ jsx("div", {
					className: index === 0 ? "sm:col-span-2 lg:col-span-1" : void 0,
					children: /* @__PURE__ */ jsx(SolutionCard, { solution })
				}, solution.slug))
			})]
		})
	});
}
//#endregion
//#region src/components/sections/why-us.tsx
function WhyUs() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-khaki-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap py-20 lg:py-28",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				tone: "light",
				eyebrow: "Approach",
				title: "Built for Reliability. Designed for Integration."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6",
				children: principles.map((item, index) => /* @__PURE__ */ jsxs("article", {
					className: index < 3 ? "border border-ink-200 bg-ink-50 p-7 lg:col-span-2" : "border border-ink-200 bg-ink-50 p-7 md:col-span-1 lg:col-span-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-mono text-xs tracking-widest text-almond-700",
								children: item.number
							}), /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								className: "mt-1 size-8 border border-ink-200",
								style: { backgroundImage: "linear-gradient(135deg, transparent 46%, var(--color-ink-200) 46%, var(--color-ink-200) 54%, transparent 54%)" }
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-8 text-xl text-ink-950",
							children: item.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-ink-700",
							children: item.body
						})
					]
				}, item.number))
			})]
		})
	});
}
//#endregion
//#region src/components/sections/projects-preview.tsx
function ProjectsPreview() {
	const featured = projects.find((item) => item.featured) ?? projects[0];
	const rest = projects.filter((item) => item.slug !== featured.slug);
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink-950 text-ink-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap py-20 lg:py-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Work",
					title: "Selected Projects & Solutions",
					kicker: "Representative solution types. Named case studies will be published when project records are available."
				}), /* @__PURE__ */ jsx(Button, {
					to: "/projects",
					variant: "secondary",
					children: "View Projects"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsx(ProjectCard, {
					project: featured,
					featured: true
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-4",
					children: rest.slice(0, 2).map((project) => /* @__PURE__ */ jsx(ProjectCard, { project }, project.slug))
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/sections/consultation-cta.tsx
function ConsultationCTA() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-khaki-50 text-ink-900",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap grid items-center gap-10 py-20 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					tone: "light",
					eyebrow: "Consulting",
					title: "Need Help Choosing the Right Equipment?",
					kicker: "We help customers evaluate, select, and procure appropriate networking, server, security, automation, and IT equipment according to technical requirements, compatibility, and budget."
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(Button, {
						to: "/consulting",
						variant: "light",
						children: "Talk to an Expert"
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-sm border border-ink-200",
					children: /* @__PURE__ */ jsx("img", {
						src: "/images/consulting.jpg",
						alt: "Enterprise networking equipment photographed for specification and selection",
						className: "img-editorial aspect-3/2 w-full object-cover",
						loading: "lazy"
					})
				})
			})]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(CapabilityStrip, {}),
		/* @__PURE__ */ jsx(AboutPositioning, {}),
		/* @__PURE__ */ jsx(ServicesGrid, {}),
		/* @__PURE__ */ jsx(SolutionsGrid, {}),
		/* @__PURE__ */ jsx(Process, {}),
		/* @__PURE__ */ jsx(WhyUs, {}),
		/* @__PURE__ */ jsx(ProjectsPreview, {}),
		/* @__PURE__ */ jsx(ConsultationCTA, {}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
//#endregion
export { Home as component };
