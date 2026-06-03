import type { ReactNode } from 'react';

import { cx } from '@/shared/lib/cx';

import styles from './IconBox.module.scss';

type IconBoxProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function IconBox({ children, className }: IconBoxProps): React.ReactElement {
  return (
    <span className={cx(styles.box, className)} aria-hidden="true">
      {children}
    </span>
  );
}
