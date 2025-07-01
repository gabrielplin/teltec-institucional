import { BanerStaticTag, ContentTag } from '@/components';

function ServiceComponent() {
  return (
    <>
      <BanerStaticTag backgroundColor="#1947B8" title="Serviços" />

      <section>
        <ContentTag>
          <h2>Como trabalhamos</h2>

          <div>
            <p>
              Combinamos tecnologia de ponta, visão estratégica e atuação
              próxima para entregar soluções em cloud, dados, segurança,
              inteligência artificial, automação, entre outras. Nossa abordagem
              é flexível, escalável e alinhada às necessidades reais de cada
              negócio
            </p>

            <p>
              Você pode explorar cada uma das nossas frentes de atuação e
              entender como ajudamos empresas a modernizar suas operações,
              acelerar a inovação e alcançar novos níveis de eficiência
            </p>
          </div>
        </ContentTag>
      </section>
    </>
  );
}

export default ServiceComponent;
