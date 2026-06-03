import styles from './PackageBadge.module.scss';

type PackageBadgeProps = {
  readonly name: string;
};

export function PackageBadge({ name }: PackageBadgeProps): React.ReactElement {
  return <code className={styles.badge}>{name}</code>;
}
