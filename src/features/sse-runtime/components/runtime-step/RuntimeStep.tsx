import type { LucideIcon } from 'lucide-react';

import styles from './RuntimeStep.module.scss';

type RuntimeStepProps = {
  readonly description: string;
  readonly Icon: LucideIcon;
  readonly title: string;
};

export function RuntimeStep({ description, Icon, title }: RuntimeStepProps): React.ReactElement {
  return (
    <li className={styles.step}>
      <div className={styles.icon}>
        <Icon aria-hidden="true" />
      </div>
      <div className={styles.copy}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
