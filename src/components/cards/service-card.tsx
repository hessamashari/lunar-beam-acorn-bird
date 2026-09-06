import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";
import { Icon, serviceIcons } from "@/components/ui/icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex flex-col border border-ink-200 bg-ink-50 p-6 transition-[border-color,background-color] duration-200 hover:border-almond-500 hover:bg-khaki-50 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-10 items-center justify-center border border-ink-200 text-ink-800">
          <Icon name={serviceIcons[service.slug] ?? "network"} />
        </span>
        <span className="font-mono text-xs tracking-widest text-ink-400">
          {service.number}
        </span>
      </div>
      <h3 className="mt-8 text-xl text-ink-950">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{service.summary}</p>
      <ul className="mt-6 space-y-1.5 text-sm text-ink-600">
        {service.highlights.slice(0, 4).map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 bg-almond-500" />
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-8 inline-flex items-center gap-2 text-sm text-almond-800 group-hover:text-almond-700">
        Explore service
        <Icon name="arrow" className="size-4" />
      </span>
    </Link>
  );
}
