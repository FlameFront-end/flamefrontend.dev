import {
  Activity,
  ArrowRight,
  BookOpen,
  Braces,
  Cable,
  ExternalLink,
  FlaskConical,
  FolderOpen,
  GitBranch,
  LockKeyhole,
  Radio,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react';
import { TbBrandGithub } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { RuntimePreview } from '@/features/sse-runtime/components/runtime-preview/RuntimePreview';
import { SSE_RUNTIME_GITHUB_URL } from '@/features/sse-runtime/model/links';
import { sseRuntime } from '@/features/sse-runtime/model/tools';
import type { PackageLink } from '@/features/sse-runtime/model/types';
import { ROUTES } from '@/shared/config/routes';
import { LinkButton } from '@/shared/kit/link-button/LinkButton';
import { Page } from '@/shared/kit/page-layout/PageLayout';

import styles from './SseRuntimePage.module.scss';

const overviewStats = [
  {
    value: '3',
    label: 'published npm packages',
  },
  {
    value: '0',
    label: 'runtime dependencies in core',
  },
  {
    value: '229',
    label: 'unit tests in the library repo',
  },
  {
    value: '~3.5k',
    label: 'application lines removed in migration',
  },
] as const;

const runtimeLanes = [
  {
    title: 'Connection',
    description: 'fetch stream, parser, heartbeat watchdog',
    Icon: Cable,
  },
  {
    title: 'Recovery',
    description: 'retry policy, backoff, Last-Event-ID resume',
    Icon: RotateCcw,
  },
  {
    title: 'Ownership',
    description: 'Web Locks leader with BroadcastChannel fan-out',
    Icon: GitBranch,
  },
  {
    title: 'Diagnostics',
    description: 'typed hooks, event log, floating DevTools panel',
    Icon: Activity,
  },
] as const;

const eventSourceLimits = [
  {
    title: 'Headers are locked out',
    description: 'Native EventSource cannot send bearer tokens or refresh auth at connection time.',
    Icon: LockKeyhole,
  },
  {
    title: 'Payloads stay untyped',
    description: 'Every handler owns parsing, validation and mismatched event names locally.',
    Icon: Braces,
  },
  {
    title: 'Reconnects are opaque',
    description: 'Retry timing, stale streams and resume behavior are hard to control consistently.',
    Icon: Radio,
  },
] as const;

export function SseRuntimePage(): React.ReactElement {
  const packages = sseRuntime.packages ?? [];

  return (
    <Page className={styles.page}>
      <section className={styles.hero} aria-labelledby="sse-runtime-title">
        <div className={styles.heroBackdrop} aria-hidden="true" />

        <div className={styles.heroHeader}>
          <p className={styles.heroEyebrow}>Server-Sent Events runtime</p>
          <h1 id="sse-runtime-title">
            sse-runtime for production <span>React streams.</span>
          </h1>
          <p>
            Typed SSE subscriptions with auth refresh, controlled recovery, tab ownership and
            diagnostics, packaged outside application components.
          </p>

          <div className={styles.heroActions}>
            <LinkButton href="#runtime-navigation" variant="primary">
              Explore package docs
              <ArrowRight aria-hidden="true" />
            </LinkButton>
            <LinkButton href={SSE_RUNTIME_GITHUB_URL} variant="secondary">
              <TbBrandGithub aria-hidden="true" />
              GitHub
            </LinkButton>
          </div>

          <p className={styles.heroProof}>
            Extracted from a production migration, split into framework-free core, React bindings
            and DevTools packages.
          </p>
        </div>

        <div className={styles.heroPreview} id="runtime-preview">
          <RuntimePreview />
        </div>
      </section>

      <div className={styles.documentationShell}>
        <RuntimeSidebar packages={packages} />

        <main className={styles.documentationContent}>
          <section className={styles.metricsSection} aria-labelledby="runtime-evidence-title">
            <div className={styles.metricsHeader}>
              <h2 id="runtime-evidence-title">Runtime evidence.</h2>
              <p>Published packages, migration impact and library test coverage.</p>
            </div>

            <div className={styles.metricStrip} aria-label="sse-runtime project metrics">
              {overviewStats.map((stat) => (
                <div className={styles.metric} key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.runtimeMap} aria-labelledby="runtime-map-title">
            <div className={styles.sectionIntro}>
              <h2 id="runtime-map-title">One owner for the stream lifecycle</h2>
              <p>
                The application keeps event handling. The runtime takes the repetitive connection
                work that usually leaks across hooks, stores and retry helpers.
              </p>
            </div>

            <ol className={styles.runtimeList}>
              {runtimeLanes.map(({ Icon, description, title }) => (
                <RuntimeStep description={description} Icon={Icon} key={title} title={title} />
              ))}
            </ol>
          </section>

          <section className={styles.comparisonGrid} aria-labelledby="comparison-title">
            <div className={styles.sectionIntro}>
              <h2 id="comparison-title">
                The native API is convenient until production details arrive
              </h2>
              <p>
                Native EventSource is a transport primitive. The runtime covers the operational
                rules that usually spread across hooks, stores and retry utilities.
              </p>
            </div>

            <div className={styles.problemList}>
              {eventSourceLimits.map(({ Icon, description, title }) => (
                <ProblemRow description={description} Icon={Icon} key={title} title={title} />
              ))}
            </div>
          </section>

          <section className={styles.packageSection} aria-labelledby="packages-title">
            <div className={styles.sectionIntro}>
              <h2 id="packages-title">Install only the layer you need</h2>
              <p>
                The core runtime stays framework-free. React bindings and diagnostics are separate
                packages so application code can opt into the right surface area.
              </p>
            </div>

            <div className={styles.packageGrid}>
              {packages.map((packageLink) => (
                <RuntimePackageCard
                  id={getPackageAnchorId(packageLink.name)}
                  key={packageLink.name}
                  packageLink={packageLink}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </Page>
  );
}

type RuntimeSidebarProps = {
  readonly packages: readonly PackageLink[];
};

function RuntimeSidebar({ packages }: RuntimeSidebarProps): React.ReactElement {
  return (
    <aside className={styles.sidebar} id="runtime-navigation" aria-label="sse-runtime navigation">
      <div className={styles.sidebarInner}>
        <div className={styles.sidebarHeader}>
          <span>sse-runtime</span>
          <strong>Navigation</strong>
        </div>

        <nav className={styles.sidebarNav}>
          <SidebarGroup Icon={BookOpen} title="Documentation">
            {packages.map((packageLink) => (
              <SidebarLink
                href={`#${getPackageAnchorId(packageLink.name)}`}
                key={packageLink.name}
                label={getPackageNavigationTitle(packageLink.name)}
              />
            ))}
          </SidebarGroup>

          <SidebarGroup Icon={FolderOpen} title="Migration">
            <SidebarLink href={ROUTES.SSE_RUNTIME_CASE_STUDY} label="Production migration" />
          </SidebarGroup>

          <SidebarGroup Icon={FlaskConical} title="Demos">
            <SidebarLink href="#runtime-preview" label="React chat demo" />
          </SidebarGroup>
        </nav>
      </div>
    </aside>
  );
}

type SidebarGroupProps = {
  readonly children: React.ReactNode;
  readonly Icon: LucideIcon;
  readonly title: string;
};

function SidebarGroup({ children, Icon, title }: SidebarGroupProps): React.ReactElement {
  return (
    <section className={styles.sidebarGroup} aria-labelledby={`${getSidebarGroupId(title)}-title`}>
      <h2 id={`${getSidebarGroupId(title)}-title`}>
        <Icon aria-hidden="true" />
        <span>{title}</span>
      </h2>
      <div className={styles.sidebarLinkList}>{children}</div>
    </section>
  );
}

type SidebarLinkProps = {
  readonly href: string;
  readonly label: string;
};

function SidebarLink({ href, label }: SidebarLinkProps): React.ReactElement {
  if (href.startsWith('#')) {
    return (
      <a className={styles.sidebarLink} href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className={styles.sidebarLink} to={href}>
      {label}
    </Link>
  );
}

type IconCardProps = {
  readonly description: string;
  readonly Icon: LucideIcon;
  readonly title: string;
};

function RuntimeStep({ description, Icon, title }: IconCardProps): React.ReactElement {
  return (
    <li className={styles.runtimeStep}>
      <div className={styles.stepIcon}>
        <Icon aria-hidden="true" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

function ProblemRow({ description, Icon, title }: IconCardProps): React.ReactElement {
  return (
    <article className={styles.problemRow}>
      <div className={styles.problemIcon}>
        <Icon aria-hidden="true" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

type RuntimePackageCardProps = {
  readonly id: string;
  readonly packageLink: PackageLink;
};

function RuntimePackageCard({ id, packageLink }: RuntimePackageCardProps): React.ReactElement {
  return (
    <article className={styles.packageCard} id={id}>
      <div>
        <span>{packageLink.label}</span>
        <code>{packageLink.name}</code>
      </div>
      <p>{packageLink.purpose}</p>
      <LinkButton href={packageLink.href} variant="ghost">
        npm
        <ExternalLink aria-hidden="true" />
      </LinkButton>
    </article>
  );
}

function getPackageAnchorId(packageName: string): string {
  const shortName = packageName.replace('@flamefrontend/sse-runtime-', '');

  return `package-${shortName}`;
}

function getPackageNavigationTitle(packageName: string): string {
  return packageName.replace('@flamefrontend/sse-runtime-', '');
}

function getSidebarGroupId(title: string): string {
  return title.toLowerCase().replaceAll(' ', '-');
}
