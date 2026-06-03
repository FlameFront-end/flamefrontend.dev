import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/LinkButton';
import { SectionHeader } from '../../components/ui/SectionHeader';
import styles from './ArticlesPage.module.scss';

const plannedArticles = [
  'How I extracted SSE infrastructure from a React app',
  'Why native EventSource is not enough for production React apps',
  'Web Locks + BroadcastChannel for single-tab coordination',
] as const;

export function ArticlesPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Technical writing coming soon.</h1>
        <p className={styles.lead}>
          Future notes will focus on production React infrastructure, real-time UI and browser
          coordination patterns.
        </p>
      </section>

      <section className={styles.section}>
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
      </section>

      <section className={styles.contact}>
        <SectionHeader
          title="Read the production migration case study"
          description="The current long-form engineering story is the sse-runtime extraction case study."
        />
        <LinkButton href="/case-studies/sse-runtime-production-migration" variant="primary">
          Open case study
        </LinkButton>
      </section>
    </div>
  );
}
