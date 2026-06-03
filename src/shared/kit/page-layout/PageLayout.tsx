import type { ReactNode } from 'react';

import styles from './PageLayout.module.scss';

type PageProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

type PageHeroProps = {
  readonly title: string;
  readonly description: string;
  readonly actions?: ReactNode;
  readonly className?: string;
  readonly width?: 'narrow' | 'wide';
};

type PageSectionProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Page({ children, className }: PageProps): React.ReactElement {
  return <div className={joinClassNames(styles.page, className)}>{children}</div>;
}

export function PageHero({
  actions,
  className,
  description,
  title,
  width = 'narrow',
}: PageHeroProps): React.ReactElement {
  return (
    <section className={joinClassNames(styles.hero, styles[width], className)}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lead}>{description}</p>
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}

export function PageSection({ children, className }: PageSectionProps): React.ReactElement {
  return <section className={joinClassNames(styles.section, className)}>{children}</section>;
}

function joinClassNames(...classNames: readonly (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ');
}
