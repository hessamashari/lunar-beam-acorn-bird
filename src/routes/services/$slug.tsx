import { createFileRoute, notFound } from "@tanstack/react-router";
import { getService } from "@/data/services";
import { pageHead } from "@/lib/seo";
import { ServiceLayout } from "@/components/layout/service-layout";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData?.service.title ?? "Service",
      description: loaderData?.service.summary ?? "",
      path: `/services/${loaderData?.service.slug ?? ""}`,
    }),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return <ServiceLayout service={service} />;
}
