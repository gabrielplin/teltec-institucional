'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';

const menuItems = [
  { id: 'home', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' },
];

function HeaderComponent() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // margem de offset

      menuItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Image
          src="/assets/png/teltec-logo.png"
          alt="Teltec"
          width={135}
          height={47}
          className={styles.logoHeader}
        />

        <ul className={styles.listMenu}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/">Quem Somos</Link>
          </li>
          <li>
            <Link href="/">Serviços</Link>
          </li>
          <li>
            <Link href="/">Mundo Telltec</Link>
          </li>
          <li>
            <Link href="/">Parceiros</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
