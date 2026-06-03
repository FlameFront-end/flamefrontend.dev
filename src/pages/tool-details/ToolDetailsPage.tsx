import styles from '../../components/ui/PageIntro.module.scss';

export function ToolDetailsPage(): React.ReactElement {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Flagship tool</p>
      <h1 className={styles.title}>sse-runtime</h1>
      <p className={styles.lead}>TypeScript SSE runtime for production React applications.</p>
    </section>
  );
}
