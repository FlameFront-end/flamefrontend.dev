import styles from '../../components/ui/PageIntro.module.scss';

export function AboutPage(): React.ReactElement {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>About</p>
      <h1 className={styles.title}>Frontend infrastructure and developer tooling.</h1>
      <p className={styles.lead}>
        Frontend developer focused on React, TypeScript, real-time interfaces and runtime
        architecture.
      </p>
    </section>
  );
}
