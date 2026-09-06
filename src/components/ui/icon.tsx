import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: IconName;
  className?: string;
};

export type IconName =
  | "network"
  | "enterprise"
  | "linux"
  | "smart"
  | "security"
  | "audio"
  | "hardware"
  | "arrow"
  | "arrow-up-right";

const paths: Record<IconName, ReactNode> = {
  network: (
    <>
      <circle cx="6" cy="12" r="2.25" />
      <circle cx="18" cy="6" r="2.25" />
      <circle cx="18" cy="18" r="2.25" />
      <path d="M8.1 11.1 15.9 6.9M8.1 12.9 15.9 17.1" />
    </>
  ),
  enterprise: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="1" />
      <path d="M8 7V5h8v2M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
    </>
  ),
  linux: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="1.5" />
      <path d="M8 8h8M8 12h5M8 16h3" />
    </>
  ),
  smart: (
    <>
      <path d="M4 18V8l8-4 8 4v10" />
      <path d="M9 18v-5h6v5" />
    </>
  ),
  security: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20" />
    </>
  ),
  audio: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1.5" />
      <circle cx="12" cy="15" r="2" />
      <path d="M10 7h4" />
    </>
  ),
  hardware: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M7 10h4M7 14h2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      {paths[name]}
    </svg>
  );
}

export const serviceIcons: Record<string, IconName> = {
  "network-infrastructure": "network",
  "enterprise-services": "enterprise",
  "infrastructure-administration": "linux",
  "smart-homes-buildings": "smart",
  "security-surveillance": "security",
  "audio-power": "audio",
  "hardware-support": "hardware",
};
