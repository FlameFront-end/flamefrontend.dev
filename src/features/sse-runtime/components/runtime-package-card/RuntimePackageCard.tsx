import { ExternalLink } from 'lucide-react';

import { getPackageAnchorId } from '@/features/sse-runtime/lib/packageNavigation';
import type { PackageLink } from '@/features/sse-runtime/model/types';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';

import styles from './RuntimePackageCard.module.scss';

type RuntimePackageCardProps = {
  readonly packageLink: PackageLink;
};

export function RuntimePackageCard({ packageLink }: RuntimePackageCardProps): React.ReactElement {
  return (
    <article className={styles.card} id={getPackageAnchorId(packageLink.name)}>
      <div className={styles.summary}>
        <span>{packageLink.label}</span>
        <code>{packageLink.name}</code>
      </div>
      <p>{packageLink.purpose}</p>
      <LinkButton href={packageLink.href} variant="ghost">
        npm
        <ExternalLink aria-hidden="true" />
      </LinkButton>
    </article>
  );
}
