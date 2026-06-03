import { ToolCard } from '@/features/sse-runtime/components/tool-card/ToolCard';
import { plannedTools, sseRuntime } from '@/features/sse-runtime/model/tools';
import { Badge } from '@/shared/kit/badge/Badge';
import { Card } from '@/shared/kit/card/Card';
import { Page, PageHero, PageSection } from '@/shared/kit/page-layout/PageLayout';
import { SectionHeader } from '@/shared/kit/section-header/SectionHeader';

import styles from './ToolsPage.module.scss';

export function ToolsPage(): React.ReactElement {
  return (
    <Page>
      <PageHero
        title="Tools"
        description="A focused catalog of TypeScript runtime tools for real-time UI, frontend infrastructure and production React applications."
      />

      <PageSection>
        <SectionHeader
          title="Flagship runtime"
          description="The main open-source package set is production-oriented and split across core, React and DevTools packages."
        />
        <ToolCard linksLimit={5} tool={sseRuntime} />
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Future runtime tools"
          description="These ideas are planned or being shaped. They are not presented as completed packages."
        />
        <div className={styles.plannedGrid}>
          {plannedTools.map((tool) => (
            <Card className={styles.plannedCard} key={tool.slug}>
              <div className={styles.plannedHeader}>
                <h3 className={styles.plannedTitle}>{tool.name}</h3>
                <Badge tone="muted">{tool.statusLabel}</Badge>
              </div>
              <p className={styles.plannedDescription}>{tool.description}</p>
            </Card>
          ))}
        </div>
      </PageSection>
    </Page>
  );
}
