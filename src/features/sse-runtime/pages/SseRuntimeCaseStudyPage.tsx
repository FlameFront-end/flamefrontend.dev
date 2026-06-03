import { SSE_RUNTIME_GITHUB_URL } from '@/features/sse-runtime/model/links';
import { sseRuntimeProductionMigration } from '@/features/sse-runtime/model/caseStudy';
import { migrationMetrics } from '@/features/sse-runtime/model/metrics';
import { ROUTES } from '@/shared/config/routes';
import { Card } from '@/shared/kit/card/Card';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { MetricsGrid } from '@/shared/kit/metrics-grid/MetricsGrid';
import { Page, PageHero, PageSection } from '@/shared/kit/page-layout/PageLayout';
import { SectionHeader } from '@/shared/kit/section-header/SectionHeader';

import styles from './SseRuntimeCaseStudyPage.module.scss';

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

export function SseRuntimeCaseStudyPage(): React.ReactElement {
  const caseStudy = sseRuntimeProductionMigration;

  return (
    <Page>
      <PageHero
        title={caseStudy.title}
        description={caseStudy.subtitle}
        width="wide"
        actions={
          <>
            <LinkButton href={ROUTES.SSE_RUNTIME} variant="primary">
              Explore sse-runtime
            </LinkButton>
            <LinkButton href={SSE_RUNTIME_GITHUB_URL} variant="secondary">
              GitHub
            </LinkButton>
          </>
        }
      />

      <PageSection>
        <MetricsGrid metrics={migrationMetrics} />
      </PageSection>

      <PageSection>
        <SectionHeader
          title="An internal real-time layer had become product infrastructure"
          description="The application already had production SSE behavior, but it lived as custom app code with connection management, tab coordination and diagnostics mixed into product concerns."
        />
      </PageSection>

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

      <PageSection>
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
                  <td data-label="Metric">{row.metric}</td>
                  <td data-label="Result">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader title="The application kept domain logic and dropped reusable runtime work" />
        <div className={styles.improvementGrid}>
          {improvements.map((improvement) => (
            <Card className={styles.improvementCard} key={improvement}>
              {improvement}
            </Card>
          ))}
        </div>
      </PageSection>
    </Page>
  );
}
