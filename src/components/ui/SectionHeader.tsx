import styles from './SectionHeader.module.scss';

type SectionHeaderProps = {
  readonly title: string;
  readonly description?: string;
};

export function SectionHeader({ description, title }: SectionHeaderProps): React.ReactElement {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
