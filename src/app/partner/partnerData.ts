export interface PartnerModule {
  title: string;
  subtitle: string;
  logo: string;
}

export interface Partner {
  id: string;
  name: string;
  image: string;
  description: string;
  modules: PartnerModule[];
}

export const partners: Partner[] = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    image: '/assets/img/microsoft.png',
    description: 'A Microsoft é uma empresa global líder em tecnologia.',
    modules: [
      {
        title: 'Azure',
        subtitle: 'Plataforma de computação em nuvem',
        logo: '/assets/img/azure-logo.png',
      },
      {
        title: 'Microsoft 365',
        subtitle: 'Pacote de produtividade e colaboração',
        logo: '/assets/img/m365-logo.png',
      },
    ],
  },
  {
    id: 'fortinet',
    name: 'Fortinet',
    image: '/assets/img/fortinet.png',
    description: 'Empresa de segurança de rede com soluções avançadas.',
    modules: [
      {
        title: 'FortiGate',
        subtitle: 'Firewall de próxima geração',
        logo: '/assets/img/fortigate-logo.png',
      },
    ],
  },
];
