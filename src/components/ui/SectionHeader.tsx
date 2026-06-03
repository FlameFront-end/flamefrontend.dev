import styles from './SectionHeader.module.scss';

type SectionHeaderProps = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
};

export function SectionHeader({
  description,
  eyebrow,
  title,
}: SectionHeaderProps): React.ReactElement {
  return (
    <header className={styles.header}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}

