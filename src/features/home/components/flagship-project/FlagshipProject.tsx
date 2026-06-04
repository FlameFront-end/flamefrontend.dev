import { ArrowRight } from 'lucide-react';

import { sseRuntime } from '@/features/sse-runtime/model/tools';
import { ROUTES } from '@/shared/config/routes';
import { Badge } from '@/shared/kit/badge/Badge';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';

import styles from './FlagshipProject.module.scss';

const packageCount = sseRuntime.packages?.length ?? 0;

export function FlagshipProject(): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="flagship-heading">
      <div className={styles.intro}>
        <h2 id="flagship-heading">Current flagship: sse-runtime.</h2>
        <p>
          The first finished package family covers typed SSE streams, React bindings and a small
          diagnostics panel. The detailed product story lives on its own page.
        </p>
      </div>

      <article className={styles.card}>
        <div className={styles.summary}>
          <div className={styles.titleRow}>
            <code>{sseRuntime.name}</code>
            <Badge tone="muted">{sseRuntime.statusLabel}</Badge>
          </div>

          <p>{sseRuntime.description}</p>

          <dl className={styles.factGrid}>
            <div>
              <dt>Packages</dt>
              <dd>{packageCount}</dd>
            </div>
            <div>
              <dt>Core</dt>
              <dd>0 deps</dd>
            </div>
            <div>
              <dt>Origin</dt>
              <dd>production migration</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <LinkButton href={ROUTES.SSE_RUNTIME} variant="primary">
              Open project
              <ArrowRight aria-hidden="true" />
            </LinkButton>
            <LinkButton href={ROUTES.SSE_RUNTIME_CASE_STUDY} variant="secondary">
              Read case study
            </LinkButton>
          </div>
        </div>

        <div className={styles.notes} aria-label="sse-runtime scope">
          <p>
            The pattern is simple: move repeated connection work into typed packages that a React
            app can adopt without buying into a framework.
          </p>
          <p>
            The next tools follow the same idea for tabs, auth transitions, form drafts and runtime
            diagnostics.
          </p>
        </div>
      </article>
    </section>
  );
}
