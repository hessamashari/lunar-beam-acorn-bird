import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <section className="bg-ink-950">
      <div className="wrap py-28 lg:py-36">
        <p className="eyebrow text-almond-400">404</p>
        <h1 className="mt-5 max-w-xl text-4xl text-ink-50 sm:text-5xl">
          This page is not on the network.
        </h1>
        <p className="mt-5 max-w-lg text-ink-300">
          The address may have changed, or the resource has not been published
          yet. Return to the homepage or browse services.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button to="/services" variant="secondary">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
