import { ArrowRight, ExternalLink } from 'lucide-react';

import { GITHUB_PROFILE_URL } from '@/shared/config/links';
import { ROUTES } from '@/shared/config/routes';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';

import styles from './AboutHero.module.scss';

export function AboutHero(): React.ReactElement {
  return (
    <section className={styles.hero} aria-labelledby="about-title">
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.copy}>
        <h1 id="about-title">Artem Kaliganov</h1>
        <p className={styles.lead}>
          Frontend engineer focused on React architecture, TypeScript libraries and real-time
          product UI.
        </p>

        <div className={styles.actions}>
          <LinkButton href={ROUTES.SSE_RUNTIME} variant="primary">
            Explore sse-runtime
            <ArrowRight aria-hidden="true" />
          </LinkButton>
          <LinkButton href={GITHUB_PROFILE_URL} variant="secondary">
            <ExternalLink aria-hidden="true" />
            GitHub
          </LinkButton>
        </div>

        <p className={styles.meta}>React architecture / TypeScript packages / real-time UI</p>
      </div>

      <aside className={styles.panel} aria-label="Frontend infrastructure focus">
        <p>
          I turn repeated UI runtime concerns into small APIs: connection state, retries, browser
          coordination and diagnostics.
        </p>
        <strong>Fewer hidden hooks. Clearer runtime state.</strong>
      </aside>
    </section>
  );
}
