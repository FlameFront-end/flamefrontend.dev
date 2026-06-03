import styles from '../../components/ui/PageIntro.module.scss';

export function CaseStudyPage(): React.ReactElement {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Case study</p>
      <h1 className={styles.title}>Extracting SSE infrastructure from a production React app</h1>
      <p className={styles.lead}>
        How an internal real-time layer became an open-source TypeScript runtime.
      </p>
    </section>
  );
}
