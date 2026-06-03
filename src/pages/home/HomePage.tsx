import { PackageCard } from '../../components/package-card/PackageCard';
import { MetricsGrid } from '../../components/metric-card/MetricsGrid';
import { TechStackList } from '../../components/tech-stack-list/TechStackList';
import { ToolCard } from '../../components/tool-card/ToolCard';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/LinkButton';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { GITHUB_PROFILE_URL } from '../../data/links';
import { plannedTools, sseRuntime } from '../../data/tools';
import type { Metric } from '../../data/types';
import styles from './HomePage.module.scss';

const heroBadges = ['typed events', 'reconnect', 'auth refresh', 'devtools', 'single-tab'] as const;

const homeMetrics: readonly Metric[] = [
  {
    value: '-3.5k',
    label: 'lines removed',
  },
  {
    value: '229',
    label: 'unit tests',
  },
  {
    value: '3',
    label: 'npm packages',
  },
  {
    value: '0',
    label: 'core deps',
  },
];

const commercialExperience = [
  'React',
  'TypeScript',
  'real-time UI',
  'frontend architecture',
  'AI SaaS',
  'ERP',
  'fintech',
] as const;

export function HomePage(): React.ReactElement {
  const packages = sseRuntime.packages ?? [];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Developer tools hub</p>
          <h1 className={styles.heroTitle}>
            TypeScript infrastructure tools for production React apps.
          </h1>
          <p className={styles.heroLead}>
            I build open-source libraries for real-time UI, developer tooling and frontend runtime
            architecture.
          </p>
          <div className={styles.heroActions}>
            <LinkButton href="/tools" variant="primary">
              View open-source tools
            </LinkButton>
            <LinkButton href="/tools/sse-runtime" variant="secondary">
              Explore sse-runtime
            </LinkButton>
            <LinkButton href={GITHUB_PROFILE_URL} variant="ghost">
              GitHub
            </LinkButton>
          </div>
        </div>

        <Card className={styles.terminalCard}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
          </div>
          <code className={styles.installCommand}>pnpm add @flamefrontend/sse-runtime-react</code>
          <div className={styles.terminalPackages}>
            <span>@sse-runtime/core</span>
            <span>@sse-runtime/react</span>
            <span>@sse-runtime/devtools</span>
          </div>
          <div className={styles.heroBadges}>
            {heroBadges.map((badge) => (
              <Badge key={badge} tone="accent">
                {badge}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="Featured tool"
          title="sse-runtime"
          description="Production-grade SSE runtime for React applications with typed events, reconnect, auth refresh and DevTools."
        />
        <ToolCard tool={sseRuntime} />
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="Production migration"
          title="Infrastructure extracted from a real app"
          description="The runtime came from removing custom SSE infrastructure and replacing it with a tested open-source package set."
        />
        <MetricsGrid metrics={homeMetrics} />
      </section>

      <section className={styles.section}>
        <SectionHeader
          eyebrow="Packages"
          title="Open-source package surface"
          description="The flagship tool is split into a framework-agnostic core, React integration and a diagnostics panel."
        />
        <div className={styles.packageGrid}>
          {packages.map((packageLink) => (
            <PackageCard key={packageLink.name} packageLink={packageLink} />
          ))}
        </div>
      </section>

      <section className={styles.splitSection}>
        <Card className={styles.snapshotCard}>
          <SectionHeader
            eyebrow="Commercial experience"
            title="Frontend runtime work in production contexts"
            description="4.5+ years across AI SaaS, ERP, fintech, e-commerce and HR products, focused on React, TypeScript and maintainable frontend architecture."
          />
          <TechStackList items={commercialExperience} />
        </Card>

        <Card className={styles.snapshotCard}>
          <SectionHeader
            eyebrow="In progress"
            title="Future runtime tools"
            description="Planned packages are marked clearly so the hub stays honest about what is available today."
          />
          <div className={styles.plannedTools}>
            {plannedTools.map((tool) => (
              <div className={styles.plannedTool} key={tool.slug}>
                <span>{tool.name}</span>
                <Badge tone="muted">{tool.statusLabel}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className={styles.contactSection}>
        <SectionHeader
          eyebrow="Contact"
          title="Build production-grade React infrastructure"
          description="Explore the tools, read the migration case study or follow the open-source work on GitHub."
        />
        <div className={styles.heroActions}>
          <LinkButton href="/case-studies/sse-runtime-production-migration" variant="secondary">
            Read case study
          </LinkButton>
          <LinkButton href={GITHUB_PROFILE_URL} variant="primary">
            GitHub
          </LinkButton>
        </div>
      </section>
    </div>
  );
}
