import { TechStackList } from '../../components/tech-stack-list/TechStackList';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/LinkButton';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { GITHUB_PROFILE_URL } from '../../data/links';
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
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.title}>Frontend infrastructure and developer tooling.</h1>
        <p className={styles.lead}>
          Frontend developer focused on React, TypeScript, real-time interfaces, frontend
          infrastructure and developer tooling.
        </p>
        <div className={styles.actions}>
          <LinkButton href="/tools/sse-runtime" variant="primary">
            Explore sse-runtime
          </LinkButton>
          <LinkButton href={GITHUB_PROFILE_URL} variant="secondary">
            GitHub
          </LinkButton>
        </div>
      </section>

      <section className={styles.grid}>
        <Card className={styles.card}>
          <SectionHeader
            eyebrow="Focus"
            title="Production React architecture"
            description="The work is centered on infrastructure that makes React applications easier to operate, debug and evolve."
          />
          <TechStackList items={focusAreas} />
        </Card>

        <Card className={styles.card}>
          <SectionHeader
            eyebrow="Experience"
            title="Commercial product contexts"
            description="Experience spans business applications and product surfaces where correctness, maintainability and delivery speed matter."
          />
          <TechStackList items={experienceContexts} />
        </Card>
      </section>
    </div>
  );
}
