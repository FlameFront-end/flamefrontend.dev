import { Badge } from '@/shared/kit/badge/Badge';

import styles from './FeatureGrid.module.scss';

type FeatureGridProps = {
  readonly features: readonly string[];
};

export function FeatureGrid({ features }: FeatureGridProps): React.ReactElement {
  return (
    <div className={styles.grid}>
      {features.map((feature) => (
        <div className={styles.feature} key={feature}>
          <Badge tone="accent">Feature</Badge>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}
