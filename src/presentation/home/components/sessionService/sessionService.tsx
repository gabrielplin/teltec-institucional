import Image from 'next/image';
import { ButtonTag, ContentTag, Tag } from '@/components';
import clsx from 'clsx';
import { FiArrowRight } from 'react-icons/fi';
import styles from './sessionService.module.scss';

function SessionService() {
  return (
    <section id="servicos" className={styles.sessionService}>
      <ContentTag>
        <div className={clsx(styles.content, styles.serviceContent)}>
          <Image
            alt="certificações"
            src="/assets/png/img-example.png"
            width={458}
            height={550}
          />

          <div className={styles.serviceDescription}>
            <Tag>O que oferecemos</Tag>

            <h2>Nossos serviços</h2>

            <p>
              Na Teltec Data, acreditamos que toda empresa carrega grandes
              possibilidades, e que a tecnologia certa, aplicada com
              inteligência, pode desbloquear esse potencial.
            </p>

            <p>
              Mais do que oferecer serviços no campo da tecnologia da
              informação, ajudamos organizações a romper limites antigos, ganhar
              velocidade, tomar decisões mais claras e responder ao novo com
              agilidade.
            </p>

            <ButtonTag
              label="Conhecer serviços"
              size="md"
              variant="primary"
              icon={<FiArrowRight size={20} color="#fafafa" />}
            />
          </div>
        </div>
      </ContentTag>
    </section>
  );
}

export default SessionService;
