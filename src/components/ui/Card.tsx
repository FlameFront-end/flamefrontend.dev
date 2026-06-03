import type { ReactNode } from 'react';

import styles from './Card.module.scss';

type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Card({ children, className }: CardProps): React.ReactElement {
  const cardClassName = className ? `${styles.card} ${className}` : styles.card;

  return <article className={cardClassName}>{children}</article>;
}

