// import { partners } from '../partnerData';
// import { notFound } from 'next/navigation';
import { PartnerDetailTag } from '@/presentation';

// export async function generateStaticParams() {
//   return partners.map(partner => ({ id: partner.id }));
// }
// { params }: { params: { id: string } }
export default function PartnerPage() {
  // const partner = partners.find(p => p.id === params.id);

  // if (!partner) return notFound();

  return <PartnerDetailTag />;
}
