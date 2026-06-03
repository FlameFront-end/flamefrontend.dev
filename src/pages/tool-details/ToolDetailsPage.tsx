import { CaseStudyPreview } from '../../components/case-study-preview/CaseStudyPreview';
import { FeatureGrid } from '../../components/feature-grid/FeatureGrid';
import { PackageCard } from '../../components/package-card/PackageCard';
import { Card } from '../../components/ui/Card';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { LinkButton } from '../../components/ui/LinkButton';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { sseRuntimeProductionMigration } from '../../data/projects';
import { sseRuntime } from '../../data/tools';
import styles from './ToolDetailsPage.module.scss';

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

export function ToolDetailsPage(): React.ReactElement {
  const packages = sseRuntime.packages ?? [];
  const features = sseRuntime.features ?? [];
  const links = sseRuntime.links ?? [];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Flagship tool</p>
        <h1 className={styles.title}>sse-runtime</h1>
        <p className={styles.lead}>
          TypeScript SSE runtime for production React applications with typed events, reconnect,
          auth refresh, DevTools and single-tab coordination.
        </p>
        <div className={styles.actions}>
          <LinkButton href="/case-studies/sse-runtime-production-migration" variant="primary">
            Read case study
          </LinkButton>
          <LinkButton href="https://github.com/FlameFront-end/sse-runtime" variant="secondary">
            GitHub
          </LinkButton>
        </div>
      </section>

      <section className={styles.twoColumn}>
        <Card className={styles.textCard}>
          <SectionHeader
            eyebrow="Problem"
            title="Native EventSource is not enough for production React apps"
          />
          <ul className={styles.list}>
            {eventSourceProblems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </Card>

        <Card className={styles.textCard}>
          <SectionHeader
            eyebrow="Solution"
            title="A TypeScript runtime for SSE infrastructure"
          />
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

      <section className={styles.section}>
        <SectionHeader
          eyebrow="Packages"
          title="Core, React integration and DevTools"
          description="Use the framework-agnostic runtime directly or mount the React provider and hooks in an application."
        />
        <div className={styles.packageGrid}>
          {packages.map((packageLink) => (
            <PackageCard key={packageLink.name} packageLink={packageLink} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="Features"
          title="Built around production SSE requirements"
          description="The feature set focuses on connection correctness, tab coordination and runtime diagnostics."
        />
        <FeatureGrid features={features} />
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="Quick start"
          title="Install the React package and subscribe to typed events"
          description="The snippet is intentionally compact and shows the shape of provider setup and event subscription."
        />
        <CodeBlock code={quickStartCode} language="tsx" />
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="DevTools"
          title="Diagnostics instead of custom logging widgets"
          description="The DevTools package is designed as a floating panel for runtime status, connection state and event diagnostics."
        />
        <Card className={styles.devtoolsCard}>
          <p>
            The goal is to make reconnect behavior, stale streams, auth refreshes and cross-tab
            coordination visible without building a bespoke logger inside every application.
          </p>
        </Card>
      </section>

      <section className={styles.section}>
        <CaseStudyPreview caseStudy={sseRuntimeProductionMigration} />
      </section>

      <section className={styles.section}>
        <SectionHeader eyebrow="Links" title="Source and packages" />
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
      </section>
    </div>
  );
}
