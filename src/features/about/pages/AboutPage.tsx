import { GITHUB_PROFILE_URL } from '@/shared/config/links';
import { ROUTES } from '@/shared/config/routes';
import { Card } from '@/shared/kit/card/Card';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { Page, PageHero } from '@/shared/kit/page-layout/PageLayout';
import { SectionHeader } from '@/shared/kit/section-header/SectionHeader';
import { TagList } from '@/shared/kit/tag-list/TagList';

import styles from './AboutPage.module.scss';

const focusAreas = [
  'React',
  'TypeScript',
  'real-time interfaces',
  'frontend infrastructure',
  'developer tooling',
] as const;

const experienceContexts = [
  '4.5+ years commercial experience',
  'AI SaaS',
  'ERP',
  'fintech',
  'e-commerce',
  'HR projects',
  'open-source tools',
] as const;

export function AboutPage(): React.ReactElement {
  return (
    <Page>
      <PageHero
        title="Frontend infrastructure and developer tooling."
        description="Frontend developer focused on React, TypeScript, real-time interfaces, frontend infrastructure and developer tooling."
        actions={
          <>
            <LinkButton href={ROUTES.SSE_RUNTIME} variant="primary">
              Explore sse-runtime
            </LinkButton>
            <LinkButton href={GITHUB_PROFILE_URL} variant="secondary">
              GitHub
            </LinkButton>
          </>
        }
      />

      <section className={styles.grid}>
        <Card className={styles.card}>
          <SectionHeader
            title="Production React architecture"
            description="The work is centered on infrastructure that makes React applications easier to operate, debug and evolve."
          />
          <TagList items={focusAreas} />
        </Card>

        <Card className={styles.card}>
          <SectionHeader
            title="Commercial product contexts"
            description="Experience spans business applications and product surfaces where correctness, maintainability and delivery speed matter."
          />
          <TagList items={experienceContexts} />
        </Card>
      </section>
    </Page>
  );
}
