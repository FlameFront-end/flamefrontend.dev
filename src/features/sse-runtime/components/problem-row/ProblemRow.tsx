import type { LucideIcon } from 'lucide-react';

import styles from './ProblemRow.module.scss';

type ProblemRowProps = {
  readonly description: string;
  readonly Icon: LucideIcon;
  readonly title: string;
};

export function ProblemRow({ description, Icon, title }: ProblemRowProps): React.ReactElement {
  return (
    <article className={styles.row}>
      <div className={styles.icon}>
        <Icon aria-hidden="true" />
      </div>
      <div className={styles.copy}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
