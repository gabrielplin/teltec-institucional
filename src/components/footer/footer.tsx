'use client';

import Link from 'next/link';
import styles from './footer.module.scss';
import { ButtonTag } from '../button';
import {
  FiArrowUp,
  FiArrowUpRight,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const accordionData = [
  {
    title: 'Teltec Data',
    links: [
      { label: 'Início', path: '/' },
      { label: 'Quem somos', path: '/' },
      { label: 'Fale conosco', path: '/' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'ISV', path: '/service/isv' },
      { label: 'CMS', path: '/service/cms' },
      { label: 'PMS', path: '/service/pms' },
    ],
  },
  {
    title: 'Mundo Teltec',
    links: [
      { label: 'Blog', path: '/blog' },
      { label: 'Cases', path: '' },
      { label: 'Fale conosco', path: '' },
    ],
  },
  {
    title: 'Parceiros',
    links: [
      { label: 'Microsoft', path: '/partner/microsoft' },
      { label: 'Fortinet', path: '' },
      { label: 'Paloalto', path: '' },
    ],
  },
];

const socialLinks = {
  instagram: 'https://www.instagram.com/teltecdata/',
  linkedin: 'https://www.linkedin.com/company/teltec-data',
  whatsapp: 'https://web.whatsapp.com/send?phone=+55%2048%209114-8365',
  youtube: 'https://www.youtube.com/@teltecdata',
};

export function redirectToSocial(media: keyof typeof socialLinks) {
  const url = socialLinks[media];
  if (url) window.open(url, '_blank');
}

function FooterComponent() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (index: number) => {
    if (!isMobile) return; // não colapsa no desktop

    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.listLinkUtils}>
          {accordionData.map((section, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{section.title}</h3>
                {isMobile &&
                  (openIndexes.includes(index) ? (
                    <FiChevronUp size={20} color="#fff" />
                  ) : (
                    <FiChevronDown size={20} color="#fff" />
                  ))}
              </button>
              <ul
                className={`${styles.accordionContent} ${
                  !isMobile || openIndexes.includes(index) ? styles.open : ''
                }`}
              >
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.listContacts}>
          <div className={styles.itemContact}>
            <p>Endereço</p>

            <Link
              href="https://maps.google.com/?q=R. Henri Dunant, 873 – Chácara Santo Antônio, São Paulo"
              target="_blank"
              rel="noopener noreferrer"
            >
              R. Henri Dunant, 873 - Chácara Santo Antônio, São Paulo
              <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
          <div className={styles.itemContact}>
            <p>Contato</p>

            <Link
              href="mailto:contato@teltecsolutions.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              contato@teltecsolutions.com.br{' '}
              <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
          <div className={styles.itemContact}>
            <p>Telefone</p>

            <Link
              href="tel:+551135086180"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 3508-6180 <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2025 Teltec Data 2025. Todos os direitos reservados.</p>
          <p>Política de Privacidade</p>{' '}
          <p>Política de Segurança da Informação</p>
        </div>

        <div className={styles.listButtons}>
          <ul>
            <li>
              <ButtonTag
                label=""
                size="sm"
                variant="inverse"
                icon={<FaWhatsapp size={30} color="#121212" />}
                onClick={() => redirectToSocial('whatsapp')}
              />
            </li>
            <li>
              <ButtonTag
                label=""
                size="sm"
                variant="inverse"
                icon={<FaLinkedin size={30} color="#121212" />}
                onClick={() => redirectToSocial('linkedin')}
              />
            </li>
            <li>
              <ButtonTag
                label=""
                size="sm"
                variant="inverse"
                icon={<FaYoutube size={30} color="#121212" />}
                onClick={() => redirectToSocial('youtube')}
              />
            </li>
            <li>
              <ButtonTag
                label=""
                size="sm"
                variant="inverse"
                icon={<FaInstagram size={30} color="#121212" />}
                onClick={() => redirectToSocial('instagram')}
              />
            </li>
          </ul>

          <div className={styles.boxBackToUp}>
            {!isMobile && <span>Voltar ao topo</span>}
            <div className={styles.circleBtn}>
              <FiArrowUp size={18} color="#121212" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
