// app/servizi/[serviceId]/page.tsx
import ServicePage from "@/components/ServicePage";

interface PageProps {
  params: Promise<{ serviceId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { serviceId } = await params;
  return <ServicePage serviceId={serviceId} />;
}
