import { ToolCard } from '../../components/tool-card/ToolCard';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { plannedTools, sseRuntime } from '../../data/tools';
import styles from './ToolsPage.module.scss';

export function ToolsPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Open source</p>
        <h1 className={styles.title}>Tools</h1>
        <p className={styles.lead}>
          A focused catalog of TypeScript runtime tools for real-time UI, frontend infrastructure
          and production React applications.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="Available now"
          title="Flagship runtime"
          description="The main open-source package set is production-oriented and split across core, React and DevTools packages."
        />
        <ToolCard linksLimit={5} tool={sseRuntime} />
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="In progress"
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
      </section>
    </div>
  );
}
