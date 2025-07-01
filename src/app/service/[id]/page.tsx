import { ServiceDetailTag } from '@/presentation';
import { serviceList } from '../serviceData';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ServicePage({ params }: PageProps) {
  const service = serviceList.find(s => s.id === params.id);

  if (!service) return notFound();

  return <ServiceDetailTag serviceList={service} />;
}
