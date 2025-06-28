import Image from 'next/image';
import styles from './home.module.scss';
import { HeaderTag } from '@/components';

function HomeComponent() {
  return (
    <>
      <HeaderTag />
      <section
        id="home"
        style={{ height: '100vh' }}
        className={styles.sessionBanner}
      >
        <Image
          alt="Quem somos"
          src="/assets/png/img-example.png"
          width={100}
          height={100}
          className={styles.imgBanner}
        />
      </section>
      <section
        id="sobre"
        style={{ height: '100vh' }}
        className={styles.sessionWhoWeAre}
      >
        <Image
          alt="Quem somos"
          src="/assets/png/img-example.png"
          width={671}
          height={100}
          className={styles.imgWhoWeAre}
        />

        <div className={styles.sessionWhoWeAre__content}>
          <span>Quem somos</span>
          <h2>
            Conheça a <strong>Teltec Data</strong>
          </h2>

          <p>
            Somos uma empresa brasileira de tecnologia que acredita no poder da
            transformação digital como motor de crescimento. Com um time
            curioso, colaborativo e empenhado em resolver problemas,
            desenvolvemos soluções sob medida para cada desafio, porque
            entendemos que cada caso é único.
          </p>
          <p>
            Mais do que entregar tecnologia, modernização de legado, queremos
            construir relações duradouras e entregar resultados que realmente
            façam sentido. Estamos lado a lado com nossos clientes em cada passo
            da jornada, ajudando a tornar seus negócios mais ágeis, preparados e
            com espaço para evolução.
          </p>
        </div>
      </section>

      <section
        id="partner"
        style={{ height: '100vh' }}
        className="session-client"
      >
        <div className="session-client__card">
          <span>Clientes</span>
          <strong>+ 1.000</strong>

          <p>
            Time multidisciplinar formado por especialistas comprometidos com a
            excelência em cada entrega.
          </p>

          <Image alt="" src="" width={100} height={100} />
        </div>
        <div className="session-client__card">
          <span>Certificações</span>
          <strong>+ 400</strong>

          <p>
            Time multidisciplinar formado por especialistas comprometidos com a
            excelência em cada entrega.
          </p>

          <Image alt="" src="" width={100} height={100} />
        </div>
        <div className="session-client__card">
          <span>Horas de Projeto</span>
          <strong>+ 180.000</strong>

          <p>
            Time multidisciplinar formado por especialistas comprometidos com a
            excelência em cada entrega.
          </p>

          <Image alt="" src="" width={100} height={100} />
        </div>
      </section>

      <section
        id="servicos"
        style={{ height: '100vh' }}
        className="session-service"
      >
        <div className={styles.content}>
          <span>O que oferecemos</span>

          <h2>Nossos serviços</h2>

          <p>
            Na Teltec Data, acreditamos que toda empresa carrega grandes
            possibilidades, e que a tecnologia certa, aplicada com inteligência,
            pode desbloquear esse potencial.
          </p>

          <p>
            Mais do que oferecer serviços no campo da tecnologia da informação,
            ajudamos organizações a romper limites antigos, ganhar velocidade,
            tomar decisões mais claras e responder ao novo com agilidade.
          </p>

          <button>Conhecer serviços</button>
        </div>
      </section>

      <section id="blog" style={{ height: '100vh' }} className="session-blog">
        <h2>Últimas publicações</h2>

        <div>
          <p>
            Fique por dentro de tudo que acontece no mercado de Soluções em TI
          </p>

          <button>Ver todas</button>
        </div>

        <div>menu table</div>

        <div>Cards</div>
        <div>Cards</div>
      </section>

      <footer>footer</footer>
    </>
  );
}

export default HomeComponent;
