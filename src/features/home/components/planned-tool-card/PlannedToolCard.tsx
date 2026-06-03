import type { ToolSummary } from '@/features/sse-runtime/model/types';
import { Badge } from '@/shared/kit/badge/Badge';

import styles from './PlannedToolCard.module.scss';

type PlannedToolCardProps = {
  readonly tool: ToolSummary;
};

export function PlannedToolCard({ tool }: PlannedToolCardProps): React.ReactElement {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <code className={styles.name}>{tool.name}</code>
        <Badge tone="muted">{tool.statusLabel}</Badge>
      </div>
      <p className={styles.description}>{tool.description}</p>
    </article>
  );
}
