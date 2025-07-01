import { BannerStaticTag, CardTag, ContentTag } from '@/components';
import styles from './service-detail.module.scss';
import { ServiceDetails } from '@/app/service/serviceData';

interface IServiceProps {
  serviceList: ServiceDetails;
}

function ServiceDetailComponente({ serviceList }: IServiceProps) {
  console.log(serviceList);
  return (
    <main>
      <BannerStaticTag
        backgroundColor={serviceList.backgroundColor}
        title={serviceList.title}
      />
      <section className={styles.contentServiceInternal}>
        <ContentTag>
          <h2 className={styles.titleServiceInternal}>
            {serviceList.subtitle}
          </h2>

          <div className={styles.descriptionServiceInternal}>
            <p>{serviceList.description1}</p>

            <p>{serviceList.description2}</p>
          </div>
        </ContentTag>
      </section>

      <section className={styles.contentApresentation}>
        <h2>{serviceList.benefitsTitle}</h2>
      </section>

      <section className={styles.contentBenefitList}>
        <ContentTag>
          <div className={styles.contentWrapCards}>
            {serviceList.benefits.map((benefit, index) => (
              <CardTag
                key={index}
                title={benefit.title}
                description={benefit.description}
                id={`${serviceList.id}-${index}`}
                logo="/"
                hoverCardColor={serviceList.hoverCardColor}
                hoverTextColor={serviceList.hoverTextColor}
              />
            ))}
          </div>
        </ContentTag>
      </section>
    </main>
  );
}

export default ServiceDetailComponente;
