import { processSteps } from "@/data/principles";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section className="bg-jet-950 text-ink-50">
      <div className="wrap py-20 lg:py-28">
        <SectionHeading
          eyebrow="Method"
          title="From Requirement to Deployment"
          kicker="A four-step sequence used on every engagement, regardless of scale."
        />
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-0">
          <span
            aria-hidden="true"
            className="absolute top-5 right-0 left-0 hidden h-px bg-ink-100/15 lg:block"
          />
          {processSteps.map((step) => (
            <li key={step.number} className="relative lg:px-6">
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-almond-400 bg-jet-950 font-mono text-xs text-almond-300">
                  {step.number}
                </span>
                <p className="eyebrow text-ink-300">{step.title}</p>
              </div>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-200">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
