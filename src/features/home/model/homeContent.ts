import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  AppWindow,
  Boxes,
  Code,
  Compass,
  Gauge,
  GitBranch,
  Lock,
  Package,
  Radar,
  Route,
  TestTube2,
} from 'lucide-react';
import type { IconType } from 'react-icons';
import { TbBrandGithub, TbBrandLinkedin, TbMail, TbSend } from 'react-icons/tb';

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
  readonly Icon: IconType;
};

export const homeMetrics: readonly Metric[] = [
  {
    value: '5+ years',
    label: 'React and TypeScript product work across SaaS, ERP, fintech and internal tools.',
  },
  {
    value: 'Real-time UI',
    label: 'SSE streams, reconnect flows, stale state and browser coordination.',
  },
  {
    value: 'Open source',
    label: 'Small packages extracted from problems I had to solve in real apps.',
  },
  {
    value: 'Flagship',
    label: 'sse-runtime is the first finished package family in this direction.',
  },
];

export const runtimeCapabilities: readonly RuntimeCapability[] = [
  {
    title: 'Stream lifecycle',
    description: 'Connection state, retries, resume and stale detection need one owner.',
    Icon: Code,
  },
  {
    title: 'Browser coordination',
    description: 'Tabs, locks, broadcasts and ownership rules should stay explicit.',
    Icon: GitBranch,
  },
  {
    title: 'Auth at the boundary',
    description: 'Token refresh and protected connections should not spread through UI code.',
    Icon: Lock,
  },
  {
    title: 'Inspectable runtime',
    description: 'Hidden connection state is much easier to trust when it has a debug surface.',
    Icon: Activity,
  },
  {
    title: 'Narrow package APIs',
    description: 'Core logic, React bindings and devtools stay separate by default.',
    Icon: Boxes,
  },
  {
    title: 'Real extraction',
    description: 'A package starts with behavior that has already hurt inside an app.',
    Icon: TestTube2,
  },
];

export const migrationEvidence: readonly MigrationEvidence[] = [
  {
    label: 'Start',
    value: 'Real app pressure',
    description: 'A repeated infrastructure problem starts taking over product code.',
  },
  {
    label: 'Extract',
    value: 'Runtime boundary',
    description: 'The behavior moves behind a typed package API.',
  },
  {
    label: 'Ship',
    value: 'Tests and notes',
    description: 'The package gets behavior tests, migration notes and clear release status.',
  },
];

export const productPrinciples: readonly ProductPrinciple[] = [
  {
    text: 'Solve the behavior before shaping the API',
    Icon: Radar,
  },
  {
    text: 'Keep runtime state out of component trees',
    Icon: AppWindow,
  },
  {
    text: 'Prefer small packages over framework-heavy toolkits',
    Icon: Package,
  },
  {
    text: 'Label planned tools honestly',
    Icon: Compass,
  },
  {
    text: 'Treat diagnostics and tests as part of the feature',
    Icon: Gauge,
  },
  {
    text: 'Improve DX without hiding important behavior',
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
  GitHub: TbBrandGithub,
  Telegram: TbSend,
  LinkedIn: TbBrandLinkedin,
  Email: TbMail,
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
