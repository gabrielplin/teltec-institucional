'use client';
import Image from 'next/image';
import { ContentTag } from '../content';
import { Tag } from '../tag';
import { NewsletterFormTag } from './components';
import styles from './newsletter.module.scss';

function NewsletterComponent() {
  return (
    <div className={styles.newsletterWrapper}>
      <ContentTag>
        <div className={styles.contentNewsletter}>
          <div className={styles.descriptionNewsletter}>
            <Tag>Fale conosco</Tag>
            <h2>
              Informe seu <strong>e-mail</strong> e nossa equipe entrará em
              contato com você
            </h2>
          </div>

          <NewsletterFormTag />
        </div>
      </ContentTag>

      <Image
        alt="animation"
        src="/assets/png/branding-gray-form.png"
        width={626}
        height={438}
        className={styles.imgBrandingForm}
      />
    </div>
  );
}

export default NewsletterComponent;
