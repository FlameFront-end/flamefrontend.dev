import { ArrowRight, ExternalLink, Package } from 'lucide-react';

import { RuntimeCapabilityCard } from '@/features/home/components/runtime-capability-card/RuntimeCapabilityCard';
import {
  contactActions,
  homeMetrics,
  migrationEvidence,
  productPrinciples,
  runtimeCapabilities,
} from '@/features/home/model/homeContent';
import { RuntimePreview } from '@/features/sse-runtime/components/runtime-preview/RuntimePreview';
import { plannedTools, sseRuntime } from '@/features/sse-runtime/model/tools';
import { GITHUB_PROFILE_URL } from '@/shared/config/links';
import { ROUTES } from '@/shared/config/routes';
import { Badge } from '@/shared/kit/badge/Badge';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import type { Metric } from '@/shared/types/metric';

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
            I extract the stream clients, reconnect logic, tab coordination and diagnostics teams
            keep rebuilding into small TypeScript packages.
          </p>

          <div className={styles.heroActions}>
            <LinkButton className={styles.heroPrimaryAction} href={ROUTES.SSE_RUNTIME} variant="primary">
              View sse-runtime
              <ArrowRight aria-hidden="true" />
            </LinkButton>
            <LinkButton
              className={styles.heroSecondaryAction}
              href={ROUTES.SSE_RUNTIME_CASE_STUDY}
              variant="secondary"
            >
              Read migration
            </LinkButton>
            <LinkButton className={styles.heroGhostAction} href={GITHUB_PROFILE_URL} variant="ghost">
              GitHub
              <ExternalLink aria-hidden="true" />
            </LinkButton>
          </div>
        </div>

        <div className={styles.heroPreview}>
          <RuntimePreview />
        </div>
      </section>

      <section className={styles.metricStrip} aria-label="sse-runtime metrics">
        {homeMetrics.map((metric) => (
          <MetricCell metric={metric} key={`${metric.value}-${metric.label}`} />
        ))}
      </section>

      <section className={styles.flagshipSection} aria-labelledby="flagship-heading">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionKicker}>Available now</p>
          <h2 id="flagship-heading">sse-runtime turns SSE connection code into packages.</h2>
          <p>
            It packages the stream client, React hooks and DevTools panel that used to live inside
            one commercial app, so new apps do not need to rebuild the same connection layer.
          </p>
        </div>

        <div className={styles.packageGrid} aria-label="sse-runtime packages">
          {packages.map((packageLink) => (
            <a
              className={styles.packageCard}
              href={packageLink.href}
              key={packageLink.name}
              rel="noreferrer"
              target="_blank"
            >
              <span className={styles.packageIcon} aria-hidden="true">
                <Package />
              </span>
              <code>{packageLink.name}</code>
              <p>{packageLink.purpose}</p>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.capabilitySection} aria-labelledby="capabilities-heading">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionKicker}>What it handles</p>
          <h2 id="capabilities-heading">The streaming work that should not live in components.</h2>
          <p>
            Connection state, retries, auth headers, tab ownership and diagnostics stay outside the
            UI, with typed events flowing into React.
          </p>
        </div>

        <div className={styles.capabilityGrid}>
          {runtimeCapabilities.map((capability) => (
            <RuntimeCapabilityCard capability={capability} key={capability.title} />
          ))}
        </div>
      </section>

      <section className={styles.migrationBand} aria-labelledby="migration-heading">
        <div className={styles.migrationCopy}>
          <p className={styles.sectionKicker}>Migration story</p>
          <h2 id="migration-heading">A real app got smaller after the runtime moved out.</h2>
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
          <div className={styles.sectionIntro}>
            <p className={styles.sectionKicker}>How I ship</p>
            <h2 id="system-heading">A product hub for focused runtime packages.</h2>
            <p>
              Each tool starts from an operational problem in React apps, then gets documented with
              package links, migration notes and clear status.
            </p>
          </div>

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
          <div className={styles.roadmapHeader}>
            <p className={styles.sectionKicker}>Next tools</p>
            <h2>Runtime packages still being shaped</h2>
            <p>Ideas stay labeled as planned or in progress until there is code worth using.</p>
          </div>

          <div className={styles.plannedTools}>
            {plannedTools.map((tool) => (
              <article className={styles.plannedTool} key={tool.slug}>
                <div className={styles.plannedToolHeader}>
                  <code>{tool.name}</code>
                  <Badge tone="muted">{tool.statusLabel}</Badge>
                </div>
                <p>{tool.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection} aria-labelledby="contact-heading">
        <div className={styles.contactHeader}>
          <p className={styles.sectionKicker}>Contact</p>
          <h2 id="contact-heading">Need a frontend runtime pulled into shape?</h2>
          <p>
            Reach out about React architecture, SSE infrastructure, diagnostics tooling or
            open-source collaboration.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactActions.map(({ href, label, description, Icon }) => {
            const isEmailLink = href.startsWith('mailto:');

            return (
              <a
                className={styles.contactLink}
                href={href}
                key={label}
                rel={isEmailLink ? undefined : 'noreferrer'}
                target={isEmailLink ? undefined : '_blank'}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <Icon />
                </span>
                <span className={styles.contactContent}>
                  <strong>{label}</strong>
                  <span>{description}</span>
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

type MetricCellProps = {
  readonly metric: Metric;
};

function MetricCell({ metric }: MetricCellProps): React.ReactElement {
  return (
    <div className={styles.metric}>
      <strong>{metric.value}</strong>
      <span>{metric.label}</span>
    </div>
  );
}
