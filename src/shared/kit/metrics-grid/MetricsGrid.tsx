import type { Metric } from '@/shared/types/metric';

import { MetricCard } from '../metric-card/MetricCard';
import styles from './MetricsGrid.module.scss';

type MetricsGridProps = {
  readonly metrics: readonly Metric[];
};

export function MetricsGrid({ metrics }: MetricsGridProps): React.ReactElement {
  return (
    <div className={styles.grid}>
      {metrics.map((metric) => (
        <MetricCard key={`${metric.value}-${metric.label}`} metric={metric} />
      ))}
    </div>
  );
}
