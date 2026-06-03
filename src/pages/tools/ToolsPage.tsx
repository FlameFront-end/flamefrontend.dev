import styles from '../../components/ui/PageIntro.module.scss';

export function ToolsPage(): React.ReactElement {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Open source</p>
      <h1 className={styles.title}>Tools</h1>
      <p className={styles.lead}>
        A focused catalog of TypeScript runtime tools for React applications.
      </p>
    </section>
  );
}
