import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ConsultationCTA() {
  return (
    <section className="bg-khaki-50 text-ink-900">
      <div className="wrap grid items-center gap-10 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <SectionHeading
            tone="light"
            eyebrow="Consulting"
            title="Need Help Choosing the Right Equipment?"
            kicker="We help customers evaluate, select, and procure appropriate networking, server, security, automation, and IT equipment according to technical requirements, compatibility, and budget."
          />
          <div className="mt-8">
            <Button to="/consulting" variant="light">
              Talk to an Expert
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-sm border border-ink-200">
            <img
              src="/images/consulting.jpg"
              alt="Enterprise networking equipment photographed for specification and selection"
              className="img-editorial aspect-3/2 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
