import styles from './home.module.scss';
import { BannerTag, FooterTag, HeaderTag, NewsletterTag } from '@/components';
import {
  SessionBlogTag,
  SessionClientsTag,
  SessionServiceTag,
  SessionWhoWeAreTag,
} from './components';

function HomeComponent() {
  return (
    <>
      <HeaderTag />
      <section id="home" className={styles.sessionBanner}>
        <BannerTag />
      </section>

      <SessionWhoWeAreTag />
      <SessionClientsTag />
      <SessionServiceTag />
      <SessionBlogTag />
      <NewsletterTag />
      <FooterTag />
    </>
  );
}

export default HomeComponent;
