import type { Metric } from '@/shared/types/metric';

import styles from './MetricCell.module.scss';

type MetricCellProps = {
  readonly metric: Metric;
};

export function MetricCell({ metric }: MetricCellProps): React.ReactElement {
  return (
    <div className={styles.cell}>
      <strong>{metric.value}</strong>
      <span>{metric.label}</span>
    </div>
  );
}
