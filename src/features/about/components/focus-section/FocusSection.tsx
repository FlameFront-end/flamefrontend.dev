import { FocusAreaCard } from '@/features/about/components/focus-area-card/FocusAreaCard';
import { focusAreas } from '@/features/about/model/aboutContent';

import styles from './FocusSection.module.scss';

export function FocusSection(): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="focus-title">
      <div className={styles.intro}>
        <h2 id="focus-title">What I focus on.</h2>
        <p>Most of my work starts where product code begins carrying infrastructure concerns.</p>
      </div>

      <div className={styles.grid}>
        {focusAreas.map((area) => (
          <FocusAreaCard area={area} key={area.title} />
        ))}
      </div>
    </section>
  );
}
