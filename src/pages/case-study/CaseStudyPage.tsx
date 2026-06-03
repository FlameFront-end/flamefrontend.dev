import { MetricsGrid } from '../../components/metric-card/MetricsGrid';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/LinkButton';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { migrationMetrics } from '../../data/metrics';
import { sseRuntimeProductionMigration } from '../../data/projects';
import styles from './CaseStudyPage.module.scss';

const extractionSteps = [
  'Identified generic SSE lifecycle logic inside application code.',
  'Moved connection, reconnect and resume behavior into a framework-agnostic runtime.',
  'Wrapped the runtime with React provider and hooks.',
  'Replaced custom observability UI with a reusable DevTools package.',
] as const;

const improvements = [
  'less application-specific infrastructure code',
  'tested runtime behavior outside the product repository',
  'clear package boundaries for core, React and DevTools',
  'better visibility into connection state and diagnostics',
] as const;

export function CaseStudyPage(): React.ReactElement {
  const caseStudy = sseRuntimeProductionMigration;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{caseStudy.title}</h1>
        <p className={styles.lead}>{caseStudy.subtitle}</p>
        <div className={styles.actions}>
          <LinkButton href="/tools/sse-runtime" variant="primary">
            Explore sse-runtime
          </LinkButton>
          <LinkButton href="https://github.com/FlameFront-end/sse-runtime" variant="secondary">
            GitHub
          </LinkButton>
        </div>
      </section>

      <section className={styles.section}>
        <MetricsGrid metrics={migrationMetrics} />
      </section>

      <section className={styles.section}>
        <SectionHeader
          title="An internal real-time layer had become product infrastructure"
          description="The application already had production SSE behavior, but it lived as custom app code with connection management, tab coordination and diagnostics mixed into product concerns."
        />
      </section>

      <section className={styles.comparisonGrid}>
        <Card className={styles.storyCard}>
          <SectionHeader title="Application-owned infrastructure" />
          <ul className={styles.list}>
            {caseStudy.before.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card className={styles.storyCard}>
          <SectionHeader title="Runtime boundaries pulled out" />
          <ol className={styles.orderedList}>
            {extractionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>

        <Card className={styles.storyCard}>
          <SectionHeader title="Thin app layer over a tested runtime" />
          <ul className={styles.list}>
            {caseStudy.after.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className={styles.section}>
        <SectionHeader
          title="Measured code removal and package extraction"
          description="The result is not a decorative rewrite. It is a smaller application integration backed by a reusable package set."
        />
        <div className={styles.tableWrap}>
          <table className={styles.resultsTable}>
            <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              {caseStudy.results.map((row) => (
                <tr key={row.metric}>
                  <td>{row.metric}</td>
                  <td>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeader
          title="The application kept domain logic and dropped reusable runtime work"
        />
        <div className={styles.improvementGrid}>
          {improvements.map((improvement) => (
            <Card className={styles.improvementCard} key={improvement}>
              {improvement}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
