'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import { ButtonTag } from '../button';
import clsx from 'clsx';

const menuItems = [
  { id: 'home', label: 'Início' },
  { id: 'sobre', label: 'Quem somos' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'blog', label: 'Mundo Teltec' },
  { id: 'partner', label: 'Parceiros' },
];

function HeaderComponent() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';

      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa no início

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
          {menuItems.map(item => (
            <ButtonTag
              key={item.id}
              label={item.label}
              size="sm"
              variant={
                clsx(activeSection === item.id ? 'secondary' : 'ghost') as
                  | 'primary'
                  | 'secondary'
                  | 'ghost'
              }
              onClick={() => scrollToSection(item.id)}
            />
          ))}
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
