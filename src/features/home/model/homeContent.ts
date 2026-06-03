import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Boxes,
  BriefcaseBusiness,
  Code,
  Gauge,
  GitBranch,
  Lock,
  Mail,
  Package,
  RefreshCw,
  Route,
  Send,
} from 'lucide-react';

import { contactLinks } from '@/shared/config/links';
import type { Metric } from '@/shared/types/metric';

export type RuntimeCapability = {
  readonly title: string;
  readonly description: string;
  readonly Icon: LucideIcon;
};

export type MigrationEvidence = {
  readonly label: string;
  readonly value: string;
  readonly description: string;
};

export type ProductPrinciple = {
  readonly text: string;
  readonly Icon: LucideIcon;
};

export type ContactAction = {
  readonly href: string;
  readonly label: string;
  readonly description: string;
  readonly Icon: LucideIcon;
};

export const homeMetrics: readonly Metric[] = [
  {
    value: '~3.5k',
    label: 'application lines removed in migration',
  },
  {
    value: '229',
    label: 'runtime behavior tests',
  },
  {
    value: '3',
    label: 'published npm packages',
  },
  {
    value: '0',
    label: 'dependencies in the core package',
  },
];

export const runtimeCapabilities: readonly RuntimeCapability[] = [
  {
    title: 'Typed event contracts',
    description: 'Payload types flow from client setup into React hooks.',
    Icon: Code,
  },
  {
    title: 'Reconnect and resume',
    description: 'Backoff and Last-Event-ID resume are handled in one place.',
    Icon: RefreshCw,
  },
  {
    title: 'Auth header refresh',
    description: 'Fresh headers are requested without pushing auth rules into UI code.',
    Icon: Lock,
  },
  {
    title: 'One stream across tabs',
    description: 'Web Locks and BroadcastChannel prevent duplicate tab connections.',
    Icon: GitBranch,
  },
  {
    title: 'Zero-dependency core',
    description: 'The core client stays framework-agnostic and dependency-free.',
    Icon: Boxes,
  },
  {
    title: 'Built-in diagnostics',
    description: 'Stream health, reconnects, stale states and events are visible.',
    Icon: Activity,
  },
];

export const migrationEvidence: readonly MigrationEvidence[] = [
  {
    label: 'App cleanup',
    value: '23 files',
    description: 'Removed from the app after stream logic moved into packages.',
  },
  {
    label: 'React versions',
    value: '18 / 19',
    description: 'Provider and hooks tested against current React releases.',
  },
  {
    label: 'Browser tabs',
    value: 'Web Locks + BroadcastChannel',
    description: 'Duplicate tabs share one stream instead of opening their own.',
  },
];

export const productPrinciples: readonly ProductPrinciple[] = [
  {
    text: 'Typed contracts before component state',
    Icon: Code,
  },
  {
    text: 'Diagnostics where connections enter the app',
    Icon: Gauge,
  },
  {
    text: 'Small packages with narrow responsibilities',
    Icon: Package,
  },
  {
    text: 'Future tools labeled before release',
    Icon: Route,
  },
];

const contactDescriptions = {
  GitHub: 'Packages, issues and source code',
  Telegram: '@Artem_Kaliganov',
  LinkedIn: 'Work history and professional context',
  Email: 'flame.kaliganov@gmail.com',
} as const;

const contactIcons = {
  GitHub: Code,
  Telegram: Send,
  LinkedIn: BriefcaseBusiness,
  Email: Mail,
} as const;

const contactLabels = ['GitHub', 'Telegram', 'LinkedIn', 'Email'] as const;

export const contactActions: readonly ContactAction[] = contactLabels.flatMap((label) => {
  const link = contactLinks.find((contactLink) => contactLink.label === label);

  return link
    ? [
        {
          ...link,
          description: contactDescriptions[label],
          Icon: contactIcons[label],
        },
      ]
    : [];
});
