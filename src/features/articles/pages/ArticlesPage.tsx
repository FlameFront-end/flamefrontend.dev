import { ROUTES } from '@/shared/config/routes';
import { Badge } from '@/shared/kit/badge/Badge';
import { Card } from '@/shared/kit/card/Card';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { Page, PageHero, PageSection } from '@/shared/kit/page-layout/PageLayout';
import { SectionHeader } from '@/shared/kit/section-header/SectionHeader';

import styles from './ArticlesPage.module.scss';

const plannedArticles = [
  'How I extracted SSE infrastructure from a React app',
  'Why native EventSource is not enough for production React apps',
  'Web Locks + BroadcastChannel for single-tab coordination',
] as const;

export function ArticlesPage(): React.ReactElement {
  return (
    <Page>
      <PageHero
        title="Technical writing coming soon."
        description="Future notes will focus on production React infrastructure, real-time UI and browser coordination patterns."
      />

      <PageSection>
        <SectionHeader
          title="Writing backlog"
          description="No fake blog archive yet. These are the topics planned for the first technical articles."
        />
        <div className={styles.articleGrid}>
          {plannedArticles.map((article) => (
            <Card className={styles.articleCard} key={article}>
              <div className={styles.articleHeader}>
                <h3>{article}</h3>
                <Badge tone="muted">Planned</Badge>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      <section className={styles.contact}>
        <SectionHeader
          title="Read the production migration case study"
          description="The current long-form engineering story is the sse-runtime extraction case study."
        />
        <LinkButton href={ROUTES.SSE_RUNTIME_CASE_STUDY} variant="primary">
          Open case study
        </LinkButton>
      </section>
    </Page>
  );
}
