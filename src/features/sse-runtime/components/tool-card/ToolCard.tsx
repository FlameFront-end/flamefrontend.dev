import type { ToolSummary } from '@/features/sse-runtime/model/types';
import { Badge } from '@/shared/kit/badge/Badge';
import { Card } from '@/shared/kit/card/Card';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { PackageBadge } from '@/shared/kit/package-badge/PackageBadge';

import styles from './ToolCard.module.scss';

type ToolCardProps = {
  readonly tool: ToolSummary;
  readonly linksLimit?: number;
};

export function ToolCard({ linksLimit = 3, tool }: ToolCardProps): React.ReactElement {
  const statusTone = tool.status === 'available' ? 'accent' : 'muted';
  const visibleLinks = tool.links?.slice(0, linksLimit);

  return (
    <Card className={styles.card}>
      <div className={styles.summary}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{tool.name}</h3>
          <Badge tone={statusTone}>{tool.statusLabel}</Badge>
        </div>
        <p className={styles.description}>{tool.description}</p>
      </div>

      {tool.packages?.length ? (
        <div className={styles.packages}>
          {tool.packages.map((packageLink) => (
            <PackageBadge key={packageLink.name} name={packageLink.name} />
          ))}
        </div>
      ) : null}

      {tool.features?.length ? (
        <div className={styles.features}>
          {tool.features.slice(0, 6).map((feature) => (
            <Badge key={feature} tone="neutral">
              {feature}
            </Badge>
          ))}
        </div>
      ) : null}

      {visibleLinks?.length ? (
        <div className={styles.links}>
          {visibleLinks.map((link, index) => (
            <LinkButton
              href={link.href}
              key={link.href}
              variant={index === 0 ? 'primary' : 'secondary'}
            >
              {link.label}
            </LinkButton>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
