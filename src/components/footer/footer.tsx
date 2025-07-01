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
    links: ['Início', 'Quem somos', 'Fale conosco'],
  },
  {
    title: 'Serviços',
    links: ['IRV', 'CMS', 'PMS'],
  },
  {
    title: 'Mundo Teltec',
    links: ['Blog', 'Cases', 'Fale conosco'],
  },
  {
    title: 'Parceiros',
    links: ['Microsoft', 'Fortinet', 'Paloalto'],
  },
];

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
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.listContacts}>
          <div className={styles.itemContact}>
            <p>Endereço</p>

            <Link href="">
              R. Henri Dunant, 873 - Chácara Santo Antônio, São Paulo
              <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
          <div className={styles.itemContact}>
            <p>Contato</p>

            <Link href="">
              contato@teltecsolutions.com.br{' '}
              <FiArrowUpRight size={20} color="#fafafa" />
            </Link>
          </div>
          <div className={styles.itemContact}>
            <p>Telefone</p>

            <Link href="">
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
              />
            </li>
            <li>
              <ButtonTag
                label=""
                size="sm"
                variant="inverse"
                icon={<FaLinkedin size={30} color="#121212" />}
              />
            </li>
            <li>
              <ButtonTag
                label=""
                size="sm"
                variant="inverse"
                icon={<FaYoutube size={30} color="#121212" />}
              />
            </li>
            <li>
              <ButtonTag
                label=""
                size="sm"
                variant="inverse"
                icon={<FaInstagram size={30} color="#121212" />}
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
