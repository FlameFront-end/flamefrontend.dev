import { ArrowRight } from 'lucide-react';
import { TbBrandGithub } from 'react-icons/tb';

import { RuntimeSidebar } from '@/features/sse-runtime/components/documentation-sidebar/RuntimeSidebar';
import { ProblemRow } from '@/features/sse-runtime/components/problem-row/ProblemRow';
import { RuntimePreview } from '@/features/sse-runtime/components/runtime-preview/RuntimePreview';
import { RuntimePackageCard } from '@/features/sse-runtime/components/runtime-package-card/RuntimePackageCard';
import { RuntimeStep } from '@/features/sse-runtime/components/runtime-step/RuntimeStep';
import { SSE_RUNTIME_GITHUB_URL } from '@/features/sse-runtime/model/links';
import {
  eventSourceLimits,
  runtimeLanes,
  runtimeOverviewStats,
} from '@/features/sse-runtime/model/runtimeContent';
import { sseRuntime } from '@/features/sse-runtime/model/tools';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { Page } from '@/shared/kit/page-layout/PageLayout';

import styles from './SseRuntimePage.module.scss';

export function SseRuntimePage(): React.ReactElement {
  const packages = sseRuntime.packages ?? [];

  return (
    <Page className={styles.page}>
      <section className={styles.hero} aria-labelledby="sse-runtime-title">
        <div className={styles.heroBackdrop} aria-hidden="true" />

        <div className={styles.heroHeader}>
          <p className={styles.heroEyebrow}>Server-Sent Events runtime</p>
          <h1 id="sse-runtime-title">
            sse-runtime for production <span>React streams.</span>
          </h1>
          <p>
            Typed SSE subscriptions with auth refresh, controlled recovery, tab ownership and
            diagnostics, packaged outside application components.
          </p>

          <div className={styles.heroActions}>
            <LinkButton href="#runtime-navigation" variant="primary">
              Explore package docs
              <ArrowRight aria-hidden="true" />
            </LinkButton>
            <LinkButton href={SSE_RUNTIME_GITHUB_URL} variant="secondary">
              <TbBrandGithub aria-hidden="true" />
              GitHub
            </LinkButton>
          </div>

          <p className={styles.heroProof}>
            Extracted from a production migration, split into framework-free core, React bindings
            and DevTools packages.
          </p>
        </div>

        <div className={styles.heroPreview} id="runtime-preview">
          <RuntimePreview />
        </div>
      </section>

      <div className={styles.documentationShell}>
        <RuntimeSidebar packages={packages} />

        <main className={styles.documentationContent}>
          <section className={styles.metricsSection} aria-labelledby="runtime-evidence-title">
            <div className={styles.metricsHeader}>
              <h2 id="runtime-evidence-title">Runtime evidence.</h2>
              <p>Published packages, migration impact and library test coverage.</p>
            </div>

            <div className={styles.metricStrip} aria-label="sse-runtime project metrics">
              {runtimeOverviewStats.map((stat) => (
                <div className={styles.metric} key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.runtimeMap} aria-labelledby="runtime-map-title">
            <div className={styles.sectionIntro}>
              <h2 id="runtime-map-title">One owner for the stream lifecycle</h2>
              <p>
                The application keeps event handling. The runtime takes the repetitive connection
                work that usually leaks across hooks, stores and retry helpers.
              </p>
            </div>

            <ol className={styles.runtimeList}>
              {runtimeLanes.map(({ Icon, description, title }) => (
                <RuntimeStep description={description} Icon={Icon} key={title} title={title} />
              ))}
            </ol>
          </section>

          <section className={styles.comparisonGrid} aria-labelledby="comparison-title">
            <div className={styles.sectionIntro}>
              <h2 id="comparison-title">
                The native API is convenient until production details arrive
              </h2>
              <p>
                Native EventSource is a transport primitive. The runtime covers the operational
                rules that usually spread across hooks, stores and retry utilities.
              </p>
            </div>

            <div className={styles.problemList}>
              {eventSourceLimits.map(({ Icon, description, title }) => (
                <ProblemRow description={description} Icon={Icon} key={title} title={title} />
              ))}
            </div>
          </section>

          <section className={styles.packageSection} aria-labelledby="packages-title">
            <div className={styles.sectionIntro}>
              <h2 id="packages-title">Install only the layer you need</h2>
              <p>
                The core runtime stays framework-free. React bindings and diagnostics are separate
                packages so application code can opt into the right surface area.
              </p>
            </div>

            <div className={styles.packageGrid}>
              {packages.map((packageLink) => (
                <RuntimePackageCard key={packageLink.name} packageLink={packageLink} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </Page>
  );
}
