import Image from 'next/image';
import styles from './banner-static.module.scss';
import { FiPlus } from 'react-icons/fi';

interface IBannerStaticProps {
  logo?: string;
  title: string;
  description?: string;
  backgroundColor: string;
}

function BannerStaticComponent({ ...props }: IBannerStaticProps) {
  return (
    <section
      style={{ backgroundColor: props.backgroundColor }}
      className={styles.contentBanner}
    >
      {props.logo && (
        <div className={styles.imgBoxIcons}>
          <div>
            <Image
              alt={props.title}
              src={props.logo as string}
              width={18}
              height={18}
            />
          </div>
          <div>
            <Image
              alt={props.title}
              src={props.logo as string}
              width={18}
              height={18}
            />
          </div>
          <div>
            <Image
              alt={props.title}
              src={props.logo as string}
              width={18}
              height={18}
            />
          </div>
          <div>
            <Image
              alt={props.title}
              src={props.logo as string}
              width={18}
              height={18}
            />
          </div>
          <div>
            <FiPlus />
          </div>
        </div>
      )}
      <h1>{props.title}</h1>
      {props.description && <p>{props.title}</p>}

      <Image
        alt="branding"
        src="/assets/png/branding-partner.png"
        height={606}
        width={788}
        className={styles.bannerBrandingPartner}
      />
    </section>
  );
}

export default BannerStaticComponent;
