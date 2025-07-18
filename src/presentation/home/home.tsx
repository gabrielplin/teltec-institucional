import styles from './home.module.scss';
import { BannerTag, HeaderTag, NewsletterTag } from '@/components';
import {
  SessionBlogTag,
  SessionClientsTag,
  SessionServiceTag,
  SessionWhoWeAreTag,
} from './components';

function HomeComponent() {
  return (
    <div className={styles.home}>
      <HeaderTag />
      <section id="home" className={styles.sessionBanner}>
        <BannerTag />
      </section>

      <SessionWhoWeAreTag />
      <SessionClientsTag />
      <SessionServiceTag />
      <SessionBlogTag />
      <NewsletterTag />
    </div>
  );
}

export default HomeComponent;
