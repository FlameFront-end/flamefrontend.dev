import { ArrowRight } from 'lucide-react';

import { ContactLink } from '@/features/home/components/contact-link/ContactLink';
import { FlagshipProject } from '@/features/home/components/flagship-project/FlagshipProject';
import { MetricCell } from '@/features/home/components/metric-cell/MetricCell';
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
import { plannedTools } from '@/features/sse-runtime/model/tools';
import { ROUTES } from '@/shared/config/routes';
import { Badge } from '@/shared/kit/badge/Badge';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';

import styles from './HomePage.module.scss';

export function HomePage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.heroBackdrop} aria-hidden="true" />

        <div className={styles.heroHeader}>
          <p className={styles.heroEyebrow}>Frontend infrastructure and open source</p>
          <h1 id="home-hero-title">
            I turn real frontend infrastructure work into{' '}
            <span className={styles.heroAccent}>developer tools.</span>
          </h1>
          <p className={styles.heroLead}>
            Senior frontend developer working with React, TypeScript, real-time interfaces and small
            open-source packages for problems that do not belong in product components.
          </p>

          <div className={styles.heroActions}>
            <LinkButton href={ROUTES.TOOLS} variant="primary">
              Explore tools
              <ArrowRight aria-hidden="true" />
            </LinkButton>
            <LinkButton href={ROUTES.SSE_RUNTIME} variant="secondary">
              View sse-runtime
            </LinkButton>
          </div>

          <p className={styles.heroProof}>
            Current flagship: sse-runtime, a typed SSE runtime family extracted from a real app
            migration.
          </p>
        </div>

        <div className={styles.heroPreview}>
          <div className={styles.heroSignal} aria-label="Engineering focus map">
            <div className={styles.signalHeader}>
              <span>flamefrontend.dev</span>
              <Badge tone="muted">tooling lab</Badge>
            </div>

            <div className={styles.signalGrid}>
              <article>
                <span>01</span>
                <h2>Real-time UI</h2>
                <p>Streams, reconnects, stale states and typed server events.</p>
              </article>
              <article>
                <span>02</span>
                <h2>Runtime layers</h2>
                <p>Connection and browser behavior pulled out of hooks and screens.</p>
              </article>
              <article>
                <span>03</span>
                <h2>Developer diagnostics</h2>
                <p>Debug views for network, browser and runtime state that is usually hidden.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metricsSection} aria-labelledby="metrics-heading">
        <SectionIntro
          className={styles.metricsHeader}
          id="metrics-heading"
          title="The work sits between product UI and frontend infrastructure."
          description="This site collects the tools, notes and migration stories behind that work."
        />
        <div className={styles.metricStrip} aria-label="engineering profile metrics">
          {homeMetrics.map((metric) => (
            <MetricCell metric={metric} key={`${metric.value}-${metric.label}`} />
          ))}
        </div>
      </section>

      <FlagshipProject />

      <section className={styles.capabilitySection} aria-labelledby="capabilities-heading">
        <SectionIntro
          className={styles.sectionIntro}
          id="capabilities-heading"
          title="The same problems show up in different apps."
          description="The common thread is infrastructure that often leaks into components, effects and local helpers."
        />

        <div className={styles.capabilityGrid}>
          {runtimeCapabilities.map((capability) => (
            <RuntimeCapabilityCard capability={capability} key={capability.title} />
          ))}
        </div>
      </section>

      <section className={styles.migrationBand} aria-labelledby="migration-heading">
        <div className={styles.migrationCopy}>
          <div className={styles.migrationCopyHeader}>
            <h2 id="migration-heading">How a package earns its page.</h2>
            <LinkButton href={ROUTES.SSE_RUNTIME_CASE_STUDY} variant="secondary">
              See the first extraction
              <ArrowRight aria-hidden="true" />
            </LinkButton>
          </div>
          <p>
            Speculative package names are cheap. A tool belongs here only after it solves a real app
            problem, has a small API and comes with enough tests and notes for another developer to
            judge it.
          </p>
        </div>

        <div className={styles.migrationReport} aria-label="Package extraction model">
          <div className={styles.migrationReportHeader}>
            <span>Package model</span>
            <Badge tone="muted">Production first</Badge>
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
            title="What stays consistent across projects."
            description="Small boundaries, explicit runtime state, typed contracts and diagnostics that make behavior easier to reason about."
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
            title="The runtime family is growing"
            description="Future tools stay marked as planned or in progress until there is code, documentation and enough confidence to use them."
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
          title="Work, collaboration and source code."
          description="Reach out about React architecture, real-time UI, frontend infrastructure, developer tooling or open-source collaboration."
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
