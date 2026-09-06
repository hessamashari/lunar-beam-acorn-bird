import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <img
        src="/images/hero.jpg"
        alt="Rows of enterprise server racks in a dim equipment room with warm side lighting"
        className="img-editorial absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-ink-950/72" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-ink-100/10 lg:block" />

      <div className="wrap relative grid min-h-[min(88vh,52rem)] items-end py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <p className="eyebrow text-almond-400">
            SYS.01 — Integrated systems
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl text-ink-50 sm:text-5xl lg:text-6xl">
            Integrated Technology & Infrastructure Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
            We design, implement, configure, and support reliable technology
            systems across networking, infrastructure, security, automation, and
            smart environments.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/consulting">Request a Consultation</Button>
            <Button to="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </div>
        <aside className="mt-12 hidden font-mono text-xs tracking-widest text-ink-300 lg:col-span-4 lg:mt-0 lg:flex lg:flex-col lg:items-end lg:justify-end lg:gap-4">
          <p>N 40.21 / INF-04</p>
          <p>LAYER 1 — PHYSICAL</p>
          <p>LAYER 2 — LOGICAL</p>
          <p>LAYER 3 — OPERATIONAL</p>
        </aside>
      </div>
    </section>
  );
}
