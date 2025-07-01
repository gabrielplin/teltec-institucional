import { ServiceDetailTag } from '@/presentation';
import { serviceList } from '../serviceData';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = serviceList.find(s => s.id === id);

  if (!service) return notFound();

  return <ServiceDetailTag serviceList={service} />;
}
