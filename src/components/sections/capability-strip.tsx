import { capabilities } from "@/data/site";

export function CapabilityStrip() {
  return (
    <section
      aria-label="Capabilities"
      className="border-y border-ink-100/10 bg-ink-900"
    >
      <ul className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
        {capabilities.map((item, index) => (
          <li
            key={item}
            className="flex items-center gap-8 font-mono text-xs tracking-widest text-ink-200 uppercase"
          >
            {index > 0 ? (
              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-ink-100/15 sm:block"
              />
            ) : null}
            <span className="flex items-center gap-2">
              <span className="size-1.5 bg-almond-400" aria-hidden="true" />
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
