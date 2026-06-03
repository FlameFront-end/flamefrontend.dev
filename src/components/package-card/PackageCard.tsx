import type { PackageLink } from '../../data/types';
import { Card } from '../ui/Card';
import { LinkButton } from '../ui/LinkButton';
import styles from './PackageCard.module.scss';

type PackageCardProps = {
  readonly packageLink: PackageLink;
};

export function PackageCard({ packageLink }: PackageCardProps): React.ReactElement {
  return (
    <Card className={styles.card}>
      <code className={styles.name}>{packageLink.name}</code>
      <p className={styles.purpose}>{packageLink.purpose}</p>
      <LinkButton href={packageLink.href} variant="ghost">
        {packageLink.label}
      </LinkButton>
    </Card>
  );
}

