import type { ReactNode } from 'react';

import styles from './Badge.module.scss';

type BadgeTone = 'neutral' | 'accent' | 'muted';

type BadgeProps = {
  readonly children: ReactNode;
  readonly tone?: BadgeTone;
};

export function Badge({ children, tone = 'neutral' }: BadgeProps): React.ReactElement {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}

