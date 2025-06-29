'use client';
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
    </div>
  );
}

export default NewsletterComponent;
