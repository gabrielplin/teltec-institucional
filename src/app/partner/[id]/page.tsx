import { partners } from '../partnerData';
import { notFound } from 'next/navigation';
import { PartnerDetailTag } from '@/presentation';

export default function PartnerPage({ params }: { params: { id: string } }) {
  const partner = partners.find(p => p.id === params.id);

  if (!partner) return notFound();

  return <PartnerDetailTag />;
}
