import {
  Activity,
  Braces,
  Cable,
  GitBranch,
  LockKeyhole,
  Radio,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react';

import type { Metric } from '@/shared/types/metric';

export type RuntimeLane = {
  readonly title: string;
  readonly description: string;
  readonly Icon: LucideIcon;
};

export type EventSourceLimit = {
  readonly title: string;
  readonly description: string;
  readonly Icon: LucideIcon;
};

export const runtimeOverviewStats: readonly Metric[] = [
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
];

export const runtimeLanes: readonly RuntimeLane[] = [
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
];

export const eventSourceLimits: readonly EventSourceLimit[] = [
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
    description:
      'Retry timing, stale streams and resume behavior are hard to control consistently.',
    Icon: Radio,
  },
];
