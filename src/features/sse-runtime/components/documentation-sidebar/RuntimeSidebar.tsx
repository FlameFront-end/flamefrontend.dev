import { BookOpen, FlaskConical, FolderOpen, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  getPackageAnchorId,
  getPackageNavigationTitle,
} from '@/features/sse-runtime/lib/packageNavigation';
import type { PackageLink } from '@/features/sse-runtime/model/types';
import { ROUTES } from '@/shared/config/routes';

import styles from './RuntimeSidebar.module.scss';

type RuntimeSidebarProps = {
  readonly packages: readonly PackageLink[];
};

export function RuntimeSidebar({ packages }: RuntimeSidebarProps): React.ReactElement {
  return (
    <aside className={styles.sidebar} id="runtime-navigation" aria-label="sse-runtime navigation">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span>sse-runtime</span>
          <strong>Navigation</strong>
        </div>

        <nav className={styles.nav}>
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
    <section className={styles.group} aria-labelledby={`${getSidebarGroupId(title)}-title`}>
      <h2 id={`${getSidebarGroupId(title)}-title`}>
        <Icon aria-hidden="true" />
        <span>{title}</span>
      </h2>
      <div className={styles.linkList}>{children}</div>
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
      <a className={styles.link} href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className={styles.link} to={href}>
      {label}
    </Link>
  );
}

function getSidebarGroupId(title: string): string {
  return title.toLowerCase().replaceAll(' ', '-');
}
