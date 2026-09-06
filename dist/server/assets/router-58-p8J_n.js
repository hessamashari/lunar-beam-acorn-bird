import { r as services, t as getService } from "./services-Dvnnqp2-.js";
import { n as solutions, t as getSolution } from "./solutions-B9EHGedA.js";
import { t as cn } from "./utils-C_uf36nf.js";
import { i as site } from "./site-CKp1Foid.js";
import { t as pageHead } from "./seo-DXFKbuje.js";
import { t as getProject } from "./projects-GtOcm2n0.js";
import { useEffect, useId, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, notFound, useRouter, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { TriangleAlert } from "lucide-react";
import { z } from "zod";
//#region \0rolldown/runtime.js
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
//#endregion
//#region src/lib/error-component.tsx
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsx(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
//#endregion
//#region src/lib/auth/provider.tsx
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
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/lib/preview-embedder-origin.ts
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
//#endregion
//#region src/lib/preview-host-bridge.ts
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = z.object({
	channel: z.literal(PREVIEW_BRIDGE_CHANNEL),
	version: z.number().int().positive(),
	type: z.string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: z.literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: z.literal("navigate"),
	path: z.string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: z.literal("history"),
	delta: z.union([z.literal(-1), z.literal(1)])
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
//#endregion
//#region src/components/preview-host-bridge.tsx
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	useEffect(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
//#endregion
//#region src/data/navigation.ts
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
//#endregion
//#region src/components/ui/button.tsx
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
	if ("to" in props && props.to) return /* @__PURE__ */ jsx(Link, {
		to: props.to,
		className: classes,
		children
	});
	if ("href" in props && props.href) return /* @__PURE__ */ jsx("a", {
		href: props.href,
		className: classes,
		children
	});
	const { type = "button", ...rest } = props;
	return /* @__PURE__ */ jsx("button", {
		type,
		className: classes,
		...rest,
		children
	});
}
//#endregion
//#region src/components/layout/logo.tsx
function LogoMark({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "3.5",
				y: "3.5",
				width: "25",
				height: "25",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "16",
				y1: "7",
				x2: "16",
				y2: "25",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ jsx("rect", {
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
	return /* @__PURE__ */ jsxs(Link, {
		to: "/",
		className: cn("flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4", tone === "dark" ? "text-ink-50" : "text-ink-950", className),
		children: [/* @__PURE__ */ jsx(LogoMark, {}), /* @__PURE__ */ jsx("span", {
			className: "font-display text-sm font-medium tracking-widest uppercase",
			children: "Meridian"
		})]
	});
}
//#endregion
//#region src/components/layout/mobile-menu.tsx
function MobileMenu() {
	const [open, setOpen] = useState(false);
	const panelId = useId();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => {
		setOpen(false);
	}, [pathname]);
	useEffect(() => {
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
	return /* @__PURE__ */ jsxs("div", {
		className: "lg:hidden",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "inline-flex size-11 items-center justify-center rounded-sm text-ink-50",
			"aria-expanded": open,
			"aria-controls": panelId,
			onClick: () => setOpen((value) => !value),
			children: [/* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: open ? "Close menu" : "Open menu"
			}), /* @__PURE__ */ jsxs("span", {
				className: "flex w-5 flex-col gap-1.5",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ jsx("span", { className: cn("block h-px w-full bg-current transition-transform duration-200", open && "translate-y-2 rotate-45") }),
					/* @__PURE__ */ jsx("span", { className: cn("block h-px w-full bg-current", open && "opacity-0") }),
					/* @__PURE__ */ jsx("span", { className: cn("block h-px w-full bg-current transition-transform duration-200", open && "-translate-y-2 -rotate-45") })
				]
			})]
		}), open ? /* @__PURE__ */ jsx("div", {
			id: panelId,
			className: "fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-ink-950 px-5 py-6",
			children: /* @__PURE__ */ jsxs("nav", {
				"aria-label": "Mobile",
				children: [/* @__PURE__ */ jsx("ul", {
					className: "space-y-1",
					children: primaryNav.map((item) => /* @__PURE__ */ jsx("li", {
						className: "border-b border-ink-100/10",
						children: item.children ? /* @__PURE__ */ jsxs("details", {
							className: "group",
							children: [/* @__PURE__ */ jsx("summary", {
								className: "min-h-12 cursor-pointer list-none py-3 text-base text-ink-50 marker:content-none [&::-webkit-details-marker]:hidden",
								children: /* @__PURE__ */ jsxs("span", {
									className: "flex items-center justify-between",
									children: [item.label, /* @__PURE__ */ jsx("span", {
										className: "text-ink-400 transition-transform duration-200 group-open:rotate-45",
										"aria-hidden": "true",
										children: "+"
									})]
								})
							}), /* @__PURE__ */ jsxs("ul", {
								className: "mb-4 space-y-1 pb-2 pl-1",
								children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									to: item.href,
									className: "block py-2 text-sm text-almond-300",
									children: ["View all ", item.label.toLowerCase()]
								}) }), item.children.map((child) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: child.href,
									className: "block py-2 text-sm text-ink-300 hover:text-ink-50",
									children: child.label
								}) }, child.href))]
							})]
						}) : /* @__PURE__ */ jsx(Link, {
							to: item.href,
							className: "flex min-h-12 items-center text-base text-ink-50",
							children: item.label
						})
					}, item.href))
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(Button, {
						to: "/consulting",
						className: "w-full",
						children: "Request a Consultation"
					})
				})]
			})
		}) : null]
	});
}
//#endregion
//#region src/components/layout/header.tsx
function Header() {
	const [scrolled, setScrolled] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsx("header", {
		className: cn("sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200", scrolled ? "border-ink-100/10 bg-ink-950/95 backdrop-blur-md" : "border-transparent bg-ink-950"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap flex h-16 items-center justify-between gap-6 lg:h-[4.25rem]",
			children: [
				/* @__PURE__ */ jsx(Logo, {}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Primary",
					className: "hidden lg:flex lg:items-center lg:gap-1",
					children: primaryNav.map((item) => item.children ? /* @__PURE__ */ jsx(MegaItem, {
						item,
						active: pathname === item.href || pathname.startsWith(`${item.href}/`)
					}, item.href) : /* @__PURE__ */ jsx(Link, {
						to: item.href,
						className: cn("rounded-sm px-3 py-2 text-sm text-ink-200 transition-colors duration-150 hover:text-ink-50", pathname === item.href && "text-ink-50"),
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Button, {
						to: "/consulting",
						className: "hidden sm:inline-flex",
						variant: "primary",
						children: "Request a Consultation"
					}), /* @__PURE__ */ jsx(MobileMenu, {})]
				})
			]
		})
	});
}
function MegaItem({ item, active }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "group relative",
		children: [/* @__PURE__ */ jsxs(Link, {
			to: item.href,
			className: cn("inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm text-ink-200 transition-colors duration-150 hover:text-ink-50 group-hover:text-ink-50 group-focus-within:text-ink-50", active && "text-ink-50"),
			"aria-haspopup": "true",
			children: [item.label, /* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				className: "text-xs",
				children: "▾"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "invisible absolute left-0 top-full z-50 w-[min(36rem,calc(100vw-4rem))] border border-ink-100/10 bg-ink-900 pt-1 opacity-0 shadow-hairline transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid gap-px p-2 sm:grid-cols-2",
				children: item.children?.map((child) => /* @__PURE__ */ jsxs(Link, {
					to: child.href,
					className: "rounded-sm px-3 py-3 transition-colors duration-150 hover:bg-ink-800",
					children: [/* @__PURE__ */ jsx("span", {
						className: "block text-sm text-ink-50",
						children: child.label
					}), child.description ? /* @__PURE__ */ jsx("span", {
						className: "mt-1 line-clamp-2 block text-xs leading-relaxed text-ink-400",
						children: child.description
					}) : null]
				}, child.href))
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-ink-100/10 px-5 py-3",
				children: /* @__PURE__ */ jsxs(Link, {
					to: item.href,
					className: "text-xs tracking-wide text-almond-400 hover:text-almond-300",
					children: ["View all ", item.label.toLowerCase()]
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/layout/footer.tsx
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-ink-100/10 bg-ink-950 text-ink-300",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap py-16 lg:py-20",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Company"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: footerNav.company.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: item.href,
								className: "hover:text-ink-50",
								children: item.label
							}) }, item.href))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Services"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: footerNav.services.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: item.href,
								className: "hover:text-ink-50",
								children: item.label
							}) }, item.href))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Solutions"
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: footerNav.solutions.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: item.href,
								className: "hover:text-ink-50",
								children: item.label
							}) }, item.href))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "eyebrow mb-5 text-almond-400",
							children: "Contact"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Phone"
								}), /* @__PURE__ */ jsx("a", {
									href: `tel:${site.phone}`,
									className: "hover:text-ink-50",
									children: site.phone
								})] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Email"
								}), /* @__PURE__ */ jsx("a", {
									href: `mailto:${site.email}`,
									className: "hover:text-ink-50",
									children: site.email
								})] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Address"
								}), site.address] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xs uppercase tracking-widest text-ink-500",
									children: "Working hours"
								}), site.hours] })
							]
						})] })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-16 flex flex-col gap-6 border-t border-ink-100/10 pt-8 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-sm text-sm text-ink-500",
						children: site.tagline
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-x-6 gap-y-2 text-sm",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/privacy",
							className: "hover:text-ink-50",
							children: "Privacy Policy"
						}), /* @__PURE__ */ jsx(Link, {
							to: "/terms",
							className: "hover:text-ink-50",
							children: "Terms"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
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
//#endregion
//#region src/components/layout/site-shell.tsx
function SiteShell({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-dvh flex-col bg-ink-950 text-ink-50",
		children: [
			/* @__PURE__ */ jsx("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-almond-400 focus:px-4 focus:py-2 focus:text-ink-950",
				children: "Skip to content"
			}),
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
//#region src/components/layout/not-found.tsx
function NotFound() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap py-28 lg:py-36",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-almond-400",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-5 max-w-xl text-4xl text-ink-50 sm:text-5xl",
					children: "This page is not on the network."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 max-w-lg text-ink-300",
					children: "The address may have changed, or the resource has not been published yet. Return to the homepage or browse services."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ jsx(Button, {
						to: "/",
						children: "Back to Home"
					}), /* @__PURE__ */ jsx(Button, {
						to: "/services",
						variant: "secondary",
						children: "View Services"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-B6yZMFHX.css";
//#endregion
//#region src/routes/__root.tsx
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
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
			className: "bg-ink-950 text-ink-50",
			children: [
				/* @__PURE__ */ jsx(PreviewHostBridge, {}),
				/* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(SiteShell, { children: /* @__PURE__ */ jsx(Outlet, {}) }) }),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$11 = () => import("./routes-DDXG48O5.js");
var Route$11 = createFileRoute("/")({
	head: () => pageHead({
		description: "Meridian designs, implements, configures, and supports integrated technology systems across networking, infrastructure, security, automation, and smart environments.",
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$10 = () => import("./about-BywSOAJf.js");
var Route$10 = createFileRoute("/about")({
	head: () => pageHead({
		title: "About",
		description: "Meridian designs technology systems that work together — networking, infrastructure, security, automation, and support as a single practice.",
		path: "/about"
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/consulting.tsx
var $$splitComponentImporter$9 = () => import("./consulting-C7cziBEh.js");
var Route$9 = createFileRoute("/consulting")({
	head: () => pageHead({
		title: "Consulting",
		description: "Request a consultation on networking, servers, security, automation, and IT equipment. Technical evaluation and procurement support.",
		path: "/consulting"
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$8 = () => import("./contact-rxKSGES4.js");
var Route$8 = createFileRoute("/contact")({
	head: () => pageHead({
		title: "Contact",
		description: "Contact Meridian to request a consultation. Phone, email, and address fields are placeholders until official details are confirmed.",
		path: "/contact"
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/privacy.tsx
var $$splitComponentImporter$7 = () => import("./privacy-CTUVMMI2.js");
var Route$7 = createFileRoute("/privacy")({
	head: () => pageHead({
		title: "Privacy Policy",
		description: "Placeholder privacy policy for Meridian pending legal review.",
		path: "/privacy"
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/terms.tsx
var $$splitComponentImporter$6 = () => import("./terms-BwB2pyeF.js");
var Route$6 = createFileRoute("/terms")({
	head: () => pageHead({
		title: "Terms",
		description: "Placeholder terms of use for Meridian pending legal review.",
		path: "/terms"
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/projects/index.tsx
var $$splitComponentImporter$5 = () => import("./projects-DY5Cv7ZO.js");
var Route$5 = createFileRoute("/projects/")({
	head: () => pageHead({
		title: "Projects",
		description: "Representative project types in network infrastructure, building automation, CCTV, and virtualized server environments. Case studies forthcoming.",
		path: "/projects"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/projects/$slug.tsx
var $$splitComponentImporter$4 = () => import("./_slug-DUqTzQ9v.js");
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
//#endregion
//#region src/routes/services/index.tsx
var $$splitComponentImporter$3 = () => import("./services-DA1W1cWy.js");
var Route$3 = createFileRoute("/services/")({
	head: () => pageHead({
		title: "Services",
		description: "Network infrastructure, enterprise services, Linux administration, smart buildings, security, audio and power, and technical support — designed as one system.",
		path: "/services"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/services/$slug.tsx
var $$splitComponentImporter$2 = () => import("./_slug-mABaNIsq.js");
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
//#endregion
//#region src/routes/solutions/index.tsx
var $$splitComponentImporter$1 = () => import("./solutions-oq4_igPP.js");
var Route$1 = createFileRoute("/solutions/")({
	head: () => pageHead({
		title: "Solutions",
		description: "Technology solutions organized by environment: business, education, residential, healthcare and hospitality, and specialized facilities.",
		path: "/solutions"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/solutions/$slug.tsx
var $$splitComponentImporter = () => import("./_slug-DJCDD5H6.js");
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
//#endregion
//#region src/routeTree.gen.ts
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
//#endregion
//#region src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Button as a, getRouter, Route$4 as i, Route as n, Route$2 as r, router_exports as t };
