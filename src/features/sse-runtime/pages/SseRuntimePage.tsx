import { CaseStudyPreview } from '@/features/sse-runtime/components/case-study-preview/CaseStudyPreview';
import { FeatureGrid } from '@/features/sse-runtime/components/feature-grid/FeatureGrid';
import { PackageCard } from '@/features/sse-runtime/components/package-card/PackageCard';
import { SSE_RUNTIME_GITHUB_URL } from '@/features/sse-runtime/model/links';
import { sseRuntimeProductionMigration } from '@/features/sse-runtime/model/caseStudy';
import { sseRuntime } from '@/features/sse-runtime/model/tools';
import { ROUTES } from '@/shared/config/routes';
import { Card } from '@/shared/kit/card/Card';
import { CodeBlock } from '@/shared/kit/code-block/CodeBlock';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { Page, PageHero, PageSection } from '@/shared/kit/page-layout/PageLayout';
import { SectionHeader } from '@/shared/kit/section-header/SectionHeader';

import styles from './SseRuntimePage.module.scss';

const eventSourceProblems = [
  'no auth headers',
  'payload is not typed',
  'reconnect behavior is hard to control',
  'cleanup becomes application-specific',
  'multiple tabs can open duplicate streams',
  'observability has to be built from scratch',
] as const;

const runtimeSolutions = [
  'framework-agnostic core',
  'React hooks and provider',
  'Floating DevTools panel',
] as const;

const quickStartCode = `pnpm add @flamefrontend/sse-runtime-react

import { SseRuntimeProvider, useSseEvent } from '@flamefrontend/sse-runtime-react';

type ServerEvents = {
  notification: { id: string; title: string };
};

export function App() {
  return (
    <SseRuntimeProvider<ServerEvents> endpoint="/api/events">
      <Notifications />
    </SseRuntimeProvider>
  );
}

function Notifications() {
  useSseEvent('notification', (event) => {
    console.log(event.title);
  });

  return null;
}`;

export function SseRuntimePage(): React.ReactElement {
  const packages = sseRuntime.packages ?? [];
  const features = sseRuntime.features ?? [];
  const links = sseRuntime.links ?? [];

  return (
    <Page>
      <PageHero
        title="sse-runtime"
        description="TypeScript SSE runtime for production React applications with typed events, reconnect, auth refresh, DevTools and single-tab coordination."
        actions={
          <>
            <LinkButton href={ROUTES.SSE_RUNTIME_CASE_STUDY} variant="primary">
              Read case study
            </LinkButton>
            <LinkButton href={SSE_RUNTIME_GITHUB_URL} variant="secondary">
              GitHub
            </LinkButton>
          </>
        }
      />

      <section className={styles.twoColumn}>
        <Card className={styles.textCard}>
          <SectionHeader title="Native EventSource is not enough for production React apps" />
          <ul className={styles.list}>
            {eventSourceProblems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </Card>

        <Card className={styles.textCard}>
          <SectionHeader title="A TypeScript runtime for SSE infrastructure" />
          <p>
            sse-runtime extracts connection lifecycle, diagnostics and React integration into a
            tested package set.
          </p>
          <ul className={styles.list}>
            {runtimeSolutions.map((solution) => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
        </Card>
      </section>

      <PageSection>
        <SectionHeader
          title="Core, React integration and DevTools"
          description="Use the framework-agnostic runtime directly or mount the React provider and hooks in an application."
        />
        <div className={styles.packageGrid}>
          {packages.map((packageLink) => (
            <PackageCard key={packageLink.name} packageLink={packageLink} />
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Built around production SSE requirements"
          description="The feature set focuses on connection correctness, tab coordination and runtime diagnostics."
        />
        <FeatureGrid features={features} />
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Install the React package and subscribe to typed events"
          description="The snippet is intentionally compact and shows the shape of provider setup and event subscription."
        />
        <CodeBlock code={quickStartCode} language="tsx" />
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Diagnostics instead of custom logging widgets"
          description="The DevTools package is designed as a floating panel for runtime status, connection state and event diagnostics."
        />
        <Card className={styles.devtoolsCard}>
          <p>
            The goal is to make reconnect behavior, stale streams, auth refreshes and cross-tab
            coordination visible without building a bespoke logger inside every application.
          </p>
        </Card>
      </PageSection>

      <PageSection>
        <CaseStudyPreview caseStudy={sseRuntimeProductionMigration} />
      </PageSection>

      <PageSection>
        <SectionHeader title="Source and packages" />
        <div className={styles.links}>
          {links.map((link, index) => (
            <LinkButton
              href={link.href}
              key={link.href}
              variant={index === 0 ? 'primary' : 'secondary'}
            >
              {link.label}
            </LinkButton>
          ))}
        </div>
      </PageSection>
    </Page>
  );
}
