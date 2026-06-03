import { Package } from 'lucide-react';

import type { PackageLink } from '@/features/sse-runtime/model/types';
import { IconBox } from '@/shared/kit/icon-box/IconBox';
import { getExternalLinkAttrs } from '@/shared/lib/externalLink';

import styles from './PackageCard.module.scss';

type PackageCardProps = {
  readonly packageLink: PackageLink;
};

export function PackageCard({ packageLink }: PackageCardProps): React.ReactElement {
  return (
    <a className={styles.card} href={packageLink.href} {...getExternalLinkAttrs(packageLink.href)}>
      <IconBox className={styles.icon}>
        <Package />
      </IconBox>
      <code className={styles.name}>{packageLink.name}</code>
      <p className={styles.purpose}>{packageLink.purpose}</p>
    </a>
  );
}
