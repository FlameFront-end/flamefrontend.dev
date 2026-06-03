import { BookOpen, ExternalLink, Package } from 'lucide-react';
import { useMotionValue, useMotionValueEvent, useSpring } from 'motion/react';
import { useRef, type PointerEvent as ReactPointerEvent } from 'react';

import { sseRuntime } from '@/features/sse-runtime/model/tools';
import type { PackageLink } from '@/features/sse-runtime/model/types';
import { ROUTES } from '@/shared/config/routes';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { Page } from '@/shared/kit/page-layout/PageLayout';

import styles from './ToolsPage.module.scss';

const packageFamilies = [
  {
    name: 'sse-runtime',
    description: 'Runtime packages for typed SSE streams, React bindings and diagnostics.',
    href: ROUTES.SSE_RUNTIME,
    packages: sseRuntime.packages ?? [],
  },
] as const;

export function ToolsPage(): React.ReactElement {
  return (
    <Page>
      <section className={styles.catalog} aria-labelledby="tools-title">
        <div className={styles.catalogHeader}>
          <div className={styles.catalogIntro}>
            <h1 id="tools-title">Tools and packages</h1>
            <p>
              Open-source work published as package families. Each family groups the packages that
              belong together and links to its documentation.
            </p>
          </div>
        </div>

        <div className={styles.familyList}>
          {packageFamilies.map((packageFamily) => (
            <section
              className={styles.family}
              aria-labelledby={`${packageFamily.name}-title`}
              key={packageFamily.name}
            >
              <div className={styles.familyHeader}>
                <div>
                  <div className={styles.familyTitleRow}>
                    <h2 id={`${packageFamily.name}-title`}>{packageFamily.name}</h2>
                    <span>{packageFamily.packages.length} packages</span>
                  </div>
                  <p>{packageFamily.description}</p>
                </div>

                <LinkButton href={packageFamily.href} variant="secondary">
                  <BookOpen aria-hidden="true" />
                  Documentation
                </LinkButton>
              </div>

              <div className={styles.packageGrid}>
                {packageFamily.packages.map((packageLink) => (
                  <PackageCard
                    documentationHref={packageFamily.href}
                    key={packageLink.name}
                    packageLink={packageLink}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Page>
  );
}

type PackageCardProps = {
  readonly documentationHref: string;
  readonly packageLink: PackageLink;
};

function PackageCard({ documentationHref, packageLink }: PackageCardProps): React.ReactElement {
  const ref = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 26, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 26, mass: 0.4 });
  const springOpacity = useSpring(glowOpacity, { stiffness: 220, damping: 28, mass: 0.35 });

  useMotionValueEvent(springX, 'change', (value) => {
    ref.current?.style.setProperty('--package-x', `${value}px`);
  });

  useMotionValueEvent(springY, 'change', (value) => {
    ref.current?.style.setProperty('--package-y', `${value}px`);
  });

  useMotionValueEvent(springOpacity, 'change', (value) => {
    ref.current?.style.setProperty('--package-opacity', String(value));
  });

  const updatePointerPosition = (event: ReactPointerEvent<HTMLElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
    glowOpacity.set(1);
  };

  const hideGlow = (): void => {
    glowOpacity.set(0);
  };

  return (
    <article
      ref={ref}
      className={styles.packageCard}
      onPointerEnter={updatePointerPosition}
      onPointerMove={updatePointerPosition}
      onPointerLeave={hideGlow}
    >
      <span className={styles.packageGlow} aria-hidden="true" />
      <span className={styles.packageIcon} aria-hidden="true">
        <Package />
      </span>

      <div className={styles.packageBody}>
        <code className={styles.packageName}>{packageLink.name}</code>
        <p className={styles.packagePurpose}>{packageLink.purpose}</p>
      </div>

      <div className={styles.packageActions}>
        <LinkButton href={documentationHref} variant="primary">
          <BookOpen aria-hidden="true" />
          Docs
        </LinkButton>
        <LinkButton href={packageLink.href} variant="secondary">
          <ExternalLink aria-hidden="true" />
          npm
        </LinkButton>
      </div>
    </article>
  );
}
