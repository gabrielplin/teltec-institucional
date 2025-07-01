'use client';
import { ButtonTag } from '@/components';
import Image from 'next/image';
import styles from './card-service.module.scss';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface CardServiceProps {
  imgLeftPosition: boolean;
  image: string;
  title: string;
  description: string;
}

function CardServiceComponent({ ...props }: CardServiceProps) {
  const { isMobile } = useBreakpoint();
  return (
    <div className={styles.contentCardService}>
      {props.imgLeftPosition ? (
        <div className={styles.itemService}>
          <Image
            alt="Serviço prestado"
            src={props.image}
            height={550}
            width={400}
          />
          <div className={styles.descriptionCardService}>
            <h2>{props.title}</h2>

            <p>{props.description}</p>

            <ButtonTag
              label="Conhecer solução"
              size={isMobile ? 'lg' : 'md'}
              variant="primary"
            />
          </div>
        </div>
      ) : (
        <div className={styles.itemService}>
          {isMobile && (
            <Image
              alt="Serviço prestado"
              src={props.image}
              height={550}
              width={400}
            />
          )}
          <div className={styles.descriptionCardService}>
            <h2>{props.title}</h2>

            <p>{props.description}</p>

            <ButtonTag
              label="Conhecer solução"
              size={isMobile ? 'lg' : 'md'}
              variant="primary"
            />
          </div>
          {!isMobile && (
            <Image
              alt="Serviço prestado"
              src={props.image}
              height={550}
              width={400}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default CardServiceComponent;
