import { pageTitle, site } from "@/data/site";

export function pageHead(opts: { title?: string; description: string; path: string }) {
  const title = pageTitle(opts.title);
  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      { name: "theme-color", content: "#141210" },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}

export const defaultDescription = site.description;
