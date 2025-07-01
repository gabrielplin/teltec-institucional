'use client';

import { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styles from './partner-slider.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

export type Partner = {
  id: string;
  name: string;
  logo: string; // URL
  link: string;
};

interface PartnersSliderProps {
  partners: Partner[];
}

function PartnerSliderComponent({ partners }: PartnersSliderProps) {
  const [shuffledPartners, setShuffledPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const shuffled = [...partners].sort(() => Math.random() - 0.5);
    setShuffledPartners([...shuffled, ...shuffled, ...shuffled, ...shuffled]);
  }, [partners]);
  return (
    <div className={styles.sliderWrapper}>
      <motion.div
        className={styles.sliderTrack}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 200,
          repeat: Infinity,
        }}
      >
        {shuffledPartners.map(partner => (
          <a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerCard}
          >
            <div className={styles.circlePartnerLogo}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={25}
                height={25}
              />
            </div>

            <div className={styles.contentTextPartner}>
              <span>{partner.name}</span>
              <FiArrowUpRight size={16} />
            </div>
          </a>
        ))}
      </motion.div>
      <motion.div
        className={styles.sliderTrack}
        animate={{ x: ['-50%', '0'] }}
        transition={{
          ease: 'linear',
          duration: 200,
          repeat: Infinity,
        }}
      >
        {shuffledPartners.map(partner => (
          <a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerCard}
          >
            <div className={styles.circlePartnerLogo}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={25}
                height={25}
              />
            </div>

            <div className={styles.contentTextPartner}>
              <span>{partner.name}</span>
              <FiArrowUpRight size={16} />
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default PartnerSliderComponent;
