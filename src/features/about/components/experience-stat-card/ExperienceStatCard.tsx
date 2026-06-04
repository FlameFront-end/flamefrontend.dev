import type { ExperienceStat } from '@/features/about/model/aboutContent';

import styles from './ExperienceStatCard.module.scss';

type ExperienceStatCardProps = {
  readonly stat: ExperienceStat;
};

export function ExperienceStatCard({ stat }: ExperienceStatCardProps): React.ReactElement {
  return (
    <article className={styles.card}>
      <strong>{stat.value}</strong>
      <span>{stat.label}</span>
      <p>{stat.description}</p>
    </article>
  );
}
