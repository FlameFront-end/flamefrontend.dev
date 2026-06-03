import styles from '../../components/ui/PageIntro.module.scss';

export function ArticlesPage(): React.ReactElement {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Articles</p>
      <h1 className={styles.title}>Technical writing coming soon.</h1>
    </section>
  );
}
