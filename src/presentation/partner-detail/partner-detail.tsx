import { Partner } from '@/app/partner/partnerData';
import BannerStaticComponent from '@/components/banner-static/banner-static';

interface IPartnerDetailProps {
  partners: Partner[];
}

function PartnerDetailComponent({ partners }: IPartnerDetailProps) {
  return (
    <>
      <BannerStaticComponent
        backgroundColor="#F1511B"
        title="Microsoft"
        logo="/assets/png/microsoft-logo.png"
      />
      <section>Description Partner</section>
      <section>copy Teltec</section>
      <section>modules from partner</section>
      <section>content servicesr</section>
    </>
  );
}

export default PartnerDetailComponent;
