import { PropsWithChildren } from 'react';
import styles from './tag.module.scss';

function TagComponent({ children }: PropsWithChildren) {
  return <span className={styles.tag}>{children}</span>;
}

export default TagComponent;
