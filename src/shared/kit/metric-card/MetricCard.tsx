import type { Metric } from '@/shared/types/metric';
import styles from './MetricCard.module.scss';

type MetricCardProps = {
  readonly metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps): React.ReactElement {
  return (
    <div className={styles.card}>
      <strong className={styles.value}>{metric.value}</strong>
      <span className={styles.label}>{metric.label}</span>
    </div>
  );
}
