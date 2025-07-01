'use client';

import { ReactNode, useState } from 'react';
import Image from 'next/image';
import styles from './sessionBlog.module.scss';
import { ButtonTag, ContentTag } from '@/components';
import clsx from 'clsx';
import { FaPerson, FaTrophy, FaFolder } from 'react-icons/fa6';
import Router from 'next/router';

interface MenuBlogProps {
  icon: ReactNode;
  label: string;
}

const listMenuBlog: MenuBlogProps[] = [
  { icon: <FaPerson />, label: 'Blog' },
  { icon: <FaTrophy />, label: 'Cases' },
  { icon: <FaFolder />, label: 'Materiais ricos' },
];

type Category = 'Blog' | 'Cases' | 'Materiais ricos';

interface Author {
  name: string;
  photo: string;
}

interface Post {
  id: number;
  title: string;
  summary: string;
  readingTime: string;
  author: Author;
  publishedAt: string;
}

const posts: Record<Category, Post[]> = {
  Blog: [
    {
      id: 1,
      author: { name: 'Teltec Data', photo: '/assets/png/img-example.png' },
      publishedAt: '28 de Junho, 2025',
      readingTime: '8 minutos de leitura',
      summary:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
      title:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
    },
    {
      id: 2,
      author: { name: 'Teltec Data', photo: '/assets/png/img-example.png' },
      publishedAt: '28 de Junho, 2025',
      readingTime: '8 minutos de leitura',
      summary:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
      title:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
    },
  ],
  Cases: [
    {
      id: 1,
      author: { name: 'Thigo', photo: '/assets/png/img-example.png' },
      publishedAt: '28 de Junho, 2025',
      readingTime: '8 minutos de leitura',
      summary:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
      title:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
    },
    {
      id: 2,
      author: { name: 'Thigo', photo: '/assets/png/img-example.png' },
      publishedAt: '28 de Junho, 2025',
      readingTime: '8 minutos de leitura',
      summary:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
      title:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
    },
  ],
  'Materiais ricos': [
    {
      id: 1,
      author: { name: 'Douglas', photo: '/assets/png/img-example.png' },
      publishedAt: '28 de Junho, 2025',
      readingTime: '8 minutos de leitura',
      summary:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
      title:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
    },
    {
      id: 2,
      author: { name: 'Douglas', photo: '/assets/png/img-example.png' },
      publishedAt: '28 de Junho, 2025',
      readingTime: '8 minutos de leitura',
      summary:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
      title:
        'A Importância da Segurança na Era da Inteligência Artificial: Guia Completo 2025',
    },
  ],
};

function SessionBlogComponent() {
  const [activeCategory, setCategory] = useState<Category>('Blog');

  return (
    <section id="blog" className={styles.sessionBlog}>
      <ContentTag>
        <div className={clsx(styles.content, styles.contentBlog)}>
          <h2>Últimas publicações</h2>

          <div className={styles.headerBlog}>
            <p>
              Fique por dentro de tudo que acontece no mercado de Soluções em TI
            </p>

            <ButtonTag label="Ver todas" size="sm" variant="secondary" />
          </div>

          <div className={styles.menuBlog}>
            {listMenuBlog.map((item, index) => (
              <div
                key={index}
                onClick={() => setCategory(item.label as Category)}
                className={clsx(
                  styles.itemMenu,
                  activeCategory === item.label && styles.activeItemMenu
                )}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>

          <div className={styles.postBlog}>
            {posts[activeCategory].map(post => (
              <div key={post.id} className={styles.itemBlog}>
                <span>{post.readingTime}</span>

                <h3>{post.title}</h3>

                <p>{post.summary}</p>

                <div className={styles.profileBlog}>
                  <Image
                    alt="Foto de Perfil"
                    src={post.author.photo}
                    width={56}
                    height={56}
                    className={styles.imgProfileBlog}
                  />

                  <div className={styles.profileInfo}>
                    <strong>{post.author.name}</strong>
                    <p>{post.publishedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ButtonTag
            label="Ver todas"
            size="lg"
            variant="secondary"
            className={styles.btnMobile}
            onClick={() => Router.push('/blog')}
          />
        </div>
      </ContentTag>
    </section>
  );
}

export default SessionBlogComponent;
