import { services } from "./services";
import { solutions } from "./solutions";

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: services.map((item) => ({
      label: item.navLabel,
      href: `/services/${item.slug}`,
      description: item.summary,
    })),
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: solutions.map((item) => ({
      label: item.navLabel,
      href: `/solutions/${item.slug}`,
      description: item.summary,
    })),
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Consulting", href: "/consulting" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Our Approach", href: "/about#approach" },
    { label: "Projects", href: "/projects" },
    { label: "Consulting", href: "/consulting" },
  ],
  services: services.map((item) => ({
    label: item.footerLabel,
    href: `/services/${item.slug}`,
  })),
  solutions: solutions.map((item) => ({
    label: item.footerLabel,
    href: `/solutions/${item.slug}`,
  })),
};
