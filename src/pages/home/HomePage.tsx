import styles from '../../components/ui/PageIntro.module.scss';

export function HomePage(): React.ReactElement {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Developer tools hub</p>
      <h1 className={styles.title}>TypeScript infrastructure tools for production React apps.</h1>
      <p className={styles.lead}>
        I build open-source libraries for real-time UI, developer tooling and frontend runtime
        architecture.
      </p>
    </section>
  );
}
