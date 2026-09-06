export const site = {
  name: "Meridian",
  legalName: "Meridian Systems",
  tagline: "Integrated Technology & Infrastructure Solutions",
  description:
    "We design, implement, configure, and support reliable technology systems across networking, infrastructure, security, automation, and smart environments.",
  email: "consult@company.com",
  phone: "+1 (000) 000-0000",
  address: "Address to be provided",
  hours: "Monday–Friday, 09:00–18:00",
  url: "",
} as const;

export const capabilities = [
  "Networking",
  "Infrastructure",
  "Security",
  "Automation",
  "Virtualization",
  "Smart Technology",
] as const;

export const projectTypes = [
  "Network Infrastructure",
  "Enterprise & Network Services",
  "Linux & Infrastructure Administration",
  "Smart Homes & Buildings",
  "Security & Surveillance",
  "Audio, Power & Critical Systems",
  "Hardware & Technical Support",
  "Equipment Consulting",
  "Other",
] as const;

export function pageTitle(title?: string) {
  return title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
}
