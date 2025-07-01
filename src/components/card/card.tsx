'use client';
import Image from 'next/image';
import styles from './card.module.scss';
import { useState } from 'react';

interface ICardProps {
  id: string;
  logo: string;
  title: string;
  description: string;
  backgroundColor?: string;
  hoverCardColor?: string;
  hoverTextColor?: string;
}

function CardComponent({
  id,
  logo,
  title,
  description,
  backgroundColor = '',
  hoverCardColor = '',
  hoverTextColor = '',
}: ICardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      key={id}
      className={styles.itemCard}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? hoverCardColor : backgroundColor,
        color: hover ? hoverTextColor : 'inherit',
      }}
    >
      <div className={styles.circleCardLogo}>
        <Image src={logo} alt={title} width={25} height={25} />
      </div>

      <div className={styles.contentTextCard}>
        <span style={{ color: hover ? hoverTextColor : undefined }}>
          {title}
        </span>
        <p style={{ color: hover ? hoverTextColor : undefined }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
