import { ArrowRight } from 'lucide-react';

import { ContactLink } from '@/features/home/components/contact-link/ContactLink';
import { MetricCell } from '@/features/home/components/metric-cell/MetricCell';
import { PackageCard } from '@/features/home/components/package-card/PackageCard';
import { PlannedToolCard } from '@/features/home/components/planned-tool-card/PlannedToolCard';
import { RuntimeCapabilityCard } from '@/features/home/components/runtime-capability-card/RuntimeCapabilityCard';
import { SectionIntro } from '@/features/home/components/section-intro/SectionIntro';
import {
  contactActions,
  homeMetrics,
  migrationEvidence,
  productPrinciples,
  runtimeCapabilities,
} from '@/features/home/model/homeContent';
import { RuntimePreview } from '@/features/sse-runtime/components/runtime-preview/RuntimePreview';
import { plannedTools, sseRuntime } from '@/features/sse-runtime/model/tools';
import { ROUTES } from '@/shared/config/routes';
import { Badge } from '@/shared/kit/badge/Badge';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';

import styles from './HomePage.module.scss';

export function HomePage(): React.ReactElement {
  const packages = sseRuntime.packages ?? [];

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.heroBackdrop} aria-hidden="true" />

        <div className={styles.heroHeader}>
          <p className={styles.heroEyebrow}>Real-time React infrastructure</p>
          <h1 id="home-hero-title">
            Open-source runtime tools for real-time{' '}
            <span className={styles.heroAccent}>React apps.</span>
          </h1>
          <p className={styles.heroLead}>
            Build stable SSE connections without pushing retries, auth refresh, tab ownership and
            stream diagnostics into React components.
          </p>

          <div className={styles.heroActions}>
            <LinkButton href={ROUTES.SSE_RUNTIME} variant="primary">
              View sse-runtime
              <ArrowRight aria-hidden="true" />
            </LinkButton>
            <LinkButton href={ROUTES.SSE_RUNTIME_CASE_STUDY} variant="secondary">
              Read migration
            </LinkButton>
          </div>

          <p className={styles.heroProof}>
            Extracted from a production migration, published as typed npm packages.
          </p>
        </div>

        <div className={styles.heroPreview}>
          <RuntimePreview />
        </div>
      </section>

      <section className={styles.metricsSection} aria-labelledby="metrics-heading">
        <SectionIntro
          className={styles.metricsHeader}
          id="metrics-heading"
          title="Runtime evidence."
          description="Migration notes, behavior tests and published package status."
        />
        <div className={styles.metricStrip} aria-label="sse-runtime metrics">
          {homeMetrics.map((metric) => (
            <MetricCell metric={metric} key={`${metric.value}-${metric.label}`} />
          ))}
        </div>
      </section>

      <section className={styles.flagshipSection} aria-labelledby="flagship-heading">
        <SectionIntro
          className={styles.sectionIntro}
          id="flagship-heading"
          title="SSE runtime, packaged."
          description="It packages the stream client, React hooks and DevTools panel that used to live inside one commercial app, so new apps do not need to rebuild the same connection layer."
        />

        <div className={styles.packageGrid} aria-label="sse-runtime packages">
          {packages.map((packageLink) => (
            <PackageCard packageLink={packageLink} key={packageLink.name} />
          ))}
        </div>
      </section>

      <section className={styles.capabilitySection} aria-labelledby="capabilities-heading">
        <SectionIntro
          className={styles.sectionIntro}
          id="capabilities-heading"
          title="Streaming logic belongs outside components."
          description="Connection state, retries, auth headers, tab ownership and diagnostics stay outside the UI, with typed events flowing into React."
        />

        <div className={styles.capabilityGrid}>
          {runtimeCapabilities.map((capability) => (
            <RuntimeCapabilityCard capability={capability} key={capability.title} />
          ))}
        </div>
      </section>

      <section className={styles.migrationBand} aria-labelledby="migration-heading">
        <div className={styles.migrationCopy}>
          <h2 id="migration-heading">A real app got smaller.</h2>
          <p>
            The case study walks through the extraction: what moved into packages, what stayed in
            the app and what became easier to test.
          </p>
          <LinkButton href={ROUTES.SSE_RUNTIME_CASE_STUDY} variant="secondary">
            Read the migration
            <ArrowRight aria-hidden="true" />
          </LinkButton>
        </div>

        <div className={styles.migrationReport} aria-label="Migration evidence">
          <div className={styles.migrationReportHeader}>
            <span>Migration snapshot</span>
            <Badge tone="muted">Real app</Badge>
          </div>

          {migrationEvidence.map((item) => (
            <article className={styles.migrationEvidenceItem} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.systemSection} aria-labelledby="system-heading">
        <div className={styles.systemPanel}>
          <SectionIntro
            className={styles.sectionIntro}
            id="system-heading"
            title="Focused runtime packages."
            description="Each tool starts from an operational problem in React apps, then gets documented with package links, migration notes and clear status."
          />

          <ul className={styles.principleList}>
            {productPrinciples.map(({ Icon, text }) => (
              <li key={text}>
                <Icon aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.roadmapPanel}>
          <SectionIntro
            className={styles.roadmapHeader}
            title="Packages still being shaped"
            description="Ideas stay labeled as planned or in progress until there is code worth using."
          />

          <div className={styles.plannedTools}>
            {plannedTools.map((tool) => (
              <PlannedToolCard tool={tool} key={tool.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection} aria-labelledby="contact-heading">
        <SectionIntro
          className={styles.contactHeader}
          id="contact-heading"
          title="Need runtime help?"
          description="Reach out about React architecture, SSE infrastructure, diagnostics tooling or open-source collaboration."
        />

        <div className={styles.contactGrid}>
          {contactActions.map((action) => (
            <ContactLink action={action} key={action.label} />
          ))}
        </div>
      </section>
    </div>
  );
}
