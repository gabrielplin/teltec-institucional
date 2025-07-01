import { ReactNode } from 'react';

export interface ServiceDetails {
  id: string;
  backgroundColor: string;
  hoverCardColor: string;
  hoverTextColor: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  description3: string;
  ctaLabel?: string;
  benefitsTitle: string;
  benefits: {
    title: string;
    description: string;
    icon?: ReactNode;
  }[];
}

export const serviceList: ServiceDetails[] = [
  {
    id: 'cms',
    backgroundColor: '#1947B8',
    hoverCardColor: '#00A1BC',
    hoverTextColor: '#fafafa',
    title: 'Teltec Cloud Managed Services (CMS)',
    subtitle:
      'Transforme sua gestão em nuvem com segurança, eficiência e redução de custos',
    description1:
      'O Teltec Cloud Managed Services (CMS) é nossa solução de outsourcing para quem quer levar a gestão da nuvem a um novo nível. Combinando agilidade, eficiência e segurança, ajudamos sua empresa a reduzir custos operacionais e a concentrar esforços no que realmente importa: gerar valor ao cliente',
    description2:
      'O Teltec CMS é a escolha ideal para empresas que buscam um serviço gerenciado de nuvem confiável, seguro e altamente integrado aos seus objetivos estratégicos da sua organização',
    description3: '',
    benefitsTitle:
      'Conheça os principais benefícios que oferecemos em Teltec Cloud Managed Services (CMS)',
    benefits: [
      {
        title: 'Redução de custos',
        description:
          'Diminua gastos com infraestrutura e manutenção, otimizando investimentos em TI',
      },
      {
        title: 'Segurança e Conformidade',
        description:
          'Processos auditados e conformidade com os principais padrões do mercado',
      },
      {
        title: 'Monitoramento 24/7',
        description:
          'Ferramentas avançadas para identificação e resolução de falhas em tempo real',
      },
      {
        title: 'Suporte especializado',
        description:
          'Conte com uma equipe de especialistas para atuar em diversas situações do seu ambiente',
      },
    ],
  },
  {
    id: 'pms',
    backgroundColor: '#1947B8',
    hoverCardColor: '#00A1BC',
    hoverTextColor: '#fafafa',
    title: 'Teltec Productivity Managed Services (PMS)',
    subtitle: 'Gerencie suas soluções Microsoft 365 com segurança e eficiência',
    description1:
      'O Teltec Productivity Management Services (PMS) é nossa solução de outsourcing completa para quem quer tirar o máximo do Microsoft 365 sem complicação. Cuidamos de tudo: gerenciamento, suporte, administração, adoção e evolução contínua, sempre com atenção ao que realmente importa para o seu negócio',
    description2:
      'Sua empresa ganha tempo, segurança e tranquilidade para focar no que faz de melhor, enquanto garantimos que suas ferramentas estejam sempre alinhadas à estratégia, à rotina e aos desafios do seu time. A solução Teltec PMS é a escolha ideal para empresas que buscam um serviço gerenciado confiável, seguro e altamente integrado aos seus objetivos estratégicos da sua organização',
    description3: '',
    benefitsTitle:
      'Conheça os principais benefícios que oferecemos em Productivity Managed Services (PMS)',
    benefits: [
      {
        title: 'Redução de custos',
        description:
          'Diminua gastos com infraestrutura, contratação de especialistas internos e suporte técnico',
      },
      {
        title: 'Segurança e Conformidade',
        description:
          'Aplique as melhores práticas de segurança e conformidade para proteger dados e acessos',
      },
      {
        title: 'Eficiência Operacional',
        description:
          'Otimize processos para melhor desempenho e menos tempo gasto com administração e suporte',
      },
      {
        title: 'Suporte especializado',
        description:
          'Atendimento contínuo através de uma equipe altamente qualificada para suas operações',
      },
      {
        title: 'Adoção e Treinamento',
        description:
          'Capacitação contínua para maximizar o uso das ferramentas Microsoft 365 e aumentar a produtividade da equipe',
      },
      {
        title: 'Gestão Proativa',
        description:
          'Monitoramento e manutenção constantes para antecipar problemas e garantir alto desempenho.',
      },
    ],
  },
  {
    id: 'isv',
    backgroundColor: '#E0C128',
    hoverCardColor: '#E0C128',
    hoverTextColor: '#121212',
    title: 'ISV Program',
    subtitle: 'Impulsione sua empresa digital com o ISV Program da Teltec',
    description1:
      'Empresas que nasceram no digital precisam de muito mais do que tecnologia, precisam de parceiros que entendam seu ritmo, seus desafios e suas ambições. O ISV Program da Teltec foi criado justamente para isso: apoiar negócios digitais com inteligência, proximidade e visão de futuro',
    description2:
      'Combinamos nossa expertise em nuvem, modernização de aplicações e gestão de consumo com suporte personalizado e ações estratégicas de marketing e vendas.',
    description3:
      'Tudo para que sua empresa ganhe velocidade, diferenciação e capacidade de escalar com consistência. Porque, no fim do dia, crescer de forma sustentável é ter tecnologia que acompanha seu potencial. E nisso, a gente caminha junto.',
    ctaLabel: 'Conhecer programa',
    benefitsTitle:
      'Conheça os principais benefícios que oferecemos com o Programa de ISV',
    benefits: [
      {
        title: 'Redução de custos',
        description:
          'Diminua gastos com infraestrutura e manutenção, otimizando investimentos em TI',
      },
      {
        title: 'Go to market',
        description:
          'Ações para apoiar sua marca a crescer ainda mais no ecossistema',
      },
      {
        title: 'Ecossistema de startup',
        description:
          'Acesso facilitado a espaços, parceiros e empresas que fazem sentido para seu negócio',
      },
      {
        title: 'Suporte especializado',
        description:
          'Atendimento diferenciado e ágil, menor tempo de espera e contato direto com a Microsoft',
      },
    ],
  },
];
