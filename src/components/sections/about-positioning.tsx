import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutPositioning() {
  return (
    <section className="bg-khaki-50 text-ink-900">
      <div className="wrap grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-6">
          <SectionHeading
            tone="light"
            eyebrow="Practice"
            title="Technology Systems Designed to Work Together"
          />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-lg leading-relaxed text-ink-700">
            We provide integrated technology solutions for businesses,
            organizations, educational institutions, and residential
            environments. From network infrastructure and servers to
            surveillance, access control, automation, and smart systems, we
            design technologies that work together as a unified and
            maintainable system.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="light">
              Learn More About Us
            </Button>
          </div>
        </div>
        <figure className="lg:col-span-12">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="overflow-hidden rounded-sm lg:col-span-8">
              <img
                src="/images/about-cabling.jpg"
                alt="Neatly dressed structured cabling entering a patch panel"
                className="img-editorial aspect-21/9 w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="flex flex-col justify-between border border-ink-200 bg-ink-50 p-6 lg:col-span-4">
              <p className="eyebrow text-almond-700">SYS.02</p>
              <p className="mt-8 text-sm leading-relaxed text-ink-700">
                Physical layer, logical network, and operational systems
                specified as one architecture — so the next change has a place
                to go.
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
