import type { FocusArea } from '@/features/about/model/aboutContent';

import styles from './FocusAreaCard.module.scss';

type FocusAreaCardProps = {
  readonly area: FocusArea;
};

export function FocusAreaCard({ area }: FocusAreaCardProps): React.ReactElement {
  return (
    <article className={styles.card}>
      <span>{area.marker}</span>
      <h3>{area.title}</h3>
      <p>{area.description}</p>
    </article>
  );
}
