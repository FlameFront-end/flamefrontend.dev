import { ExperienceStatCard } from '@/features/about/components/experience-stat-card/ExperienceStatCard';
import { experienceStats } from '@/features/about/model/aboutContent';

import styles from './ExperienceSection.module.scss';

export function ExperienceSection(): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <h2 id="experience-title">Where this comes from.</h2>
      <p>The open-source work on this site comes from product code, not isolated experiments.</p>

      <div className={styles.grid}>
        {experienceStats.map((stat) => (
          <ExperienceStatCard stat={stat} key={stat.value} />
        ))}
      </div>
    </section>
  );
}
