import {
  SSE_RUNTIME_CORE_NPM_URL,
  SSE_RUNTIME_DEVTOOLS_NPM_URL,
  SSE_RUNTIME_GITHUB_URL,
  SSE_RUNTIME_REACT_NPM_URL,
} from './links';
import { sseRuntimeMetrics } from './metrics';
import type { ExternalLink, Metric, PackageLink } from './types';

export type ToolStatus = 'available' | 'planned' | 'in-progress';

export type ToolSummary = {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly status: ToolStatus;
  readonly statusLabel: string;
  readonly packages?: readonly PackageLink[];
  readonly features?: readonly string[];
  readonly metrics?: readonly Metric[];
  readonly links?: readonly ExternalLink[];
};

export const sseRuntime: ToolSummary = {
  slug: 'sse-runtime',
  name: 'sse-runtime',
  description: 'TypeScript SSE runtime for production React applications.',
  status: 'available',
  statusLabel: 'Available',
  packages: [
    {
      name: '@flamefrontend/sse-runtime-core',
      label: 'npm core',
      purpose: 'Framework-agnostic SSE runtime',
      href: SSE_RUNTIME_CORE_NPM_URL,
    },
    {
      name: '@flamefrontend/sse-runtime-react',
      label: 'npm react',
      purpose: 'React hooks and provider',
      href: SSE_RUNTIME_REACT_NPM_URL,
    },
    {
      name: '@flamefrontend/sse-runtime-devtools',
      label: 'npm devtools',
      purpose: 'Floating DevTools panel',
      href: SSE_RUNTIME_DEVTOOLS_NPM_URL,
    },
  ],
  features: [
    'Typed events',
    'Auth refresh',
    'Reconnect/backoff',
    'Last-Event-ID resume',
    'Heartbeat/stale watchdog',
    'Web Locks + BroadcastChannel',
    'Diagnostics API',
    'DevTools panel',
    'Zero-dependency core',
  ],
  metrics: sseRuntimeMetrics,
  links: [
    {
      label: 'GitHub',
      href: SSE_RUNTIME_GITHUB_URL,
    },
    {
      label: 'npm core',
      href: SSE_RUNTIME_CORE_NPM_URL,
    },
    {
      label: 'npm react',
      href: SSE_RUNTIME_REACT_NPM_URL,
    },
    {
      label: 'npm devtools',
      href: SSE_RUNTIME_DEVTOOLS_NPM_URL,
    },
    {
      label: 'Case Study',
      href: '/case-studies/sse-runtime-production-migration',
    },
  ],
};

export const tools: readonly ToolSummary[] = [sseRuntime];

export const plannedTools: readonly ToolSummary[] = [
  {
    slug: 'auth-runtime',
    name: 'auth-runtime',
    description: 'Runtime primitives for auth state, refresh and frontend session boundaries.',
    status: 'planned',
    statusLabel: 'Planned',
  },
  {
    slug: 'tab-runtime',
    name: 'tab-runtime',
    description: 'Coordination utilities for multi-tab browser application behavior.',
    status: 'planned',
    statusLabel: 'Planned',
  },
  {
    slug: 'form-draft-runtime',
    name: 'form-draft-runtime',
    description: 'Draft persistence and recovery primitives for production forms.',
    status: 'planned',
    statusLabel: 'Planned',
  },
  {
    slug: 'runtime-devtools-kit',
    name: 'runtime-devtools-kit',
    description: 'A toolkit for building diagnostics panels around frontend runtimes.',
    status: 'in-progress',
    statusLabel: 'In progress',
  },
];
