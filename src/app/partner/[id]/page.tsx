import { partners } from '../partnerData';
import { notFound } from 'next/navigation';
import { PartnerDetailTag } from '@/presentation';

interface PartnerPageProps {
  params: { id: string };
}

export default function PartnerPage({ params }: PartnerPageProps) {
  const partner = partners.find(p => p.id === params.id);

  if (!partner) return notFound();

  return <PartnerDetailTag />;
}
