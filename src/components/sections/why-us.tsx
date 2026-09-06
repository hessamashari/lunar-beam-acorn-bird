import { principles } from "@/data/principles";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyUs() {
  return (
    <section className="bg-khaki-50 text-ink-900">
      <div className="wrap py-20 lg:py-28">
        <SectionHeading
          tone="light"
          eyebrow="Approach"
          title="Built for Reliability. Designed for Integration."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {principles.map((item, index) => (
            <article
              key={item.number}
              className={
                index < 3
                  ? "border border-ink-200 bg-ink-50 p-7 lg:col-span-2"
                  : "border border-ink-200 bg-ink-50 p-7 md:col-span-1 lg:col-span-3"
              }
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-almond-700">
                  {item.number}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 size-8 border border-ink-200"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, transparent 46%, var(--color-ink-200) 46%, var(--color-ink-200) 54%, transparent 54%)",
                  }}
                />
              </div>
              <h3 className="mt-8 text-xl text-ink-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
