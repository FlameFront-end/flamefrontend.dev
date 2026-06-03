import {
  SSE_RUNTIME_CORE_NPM_URL,
  SSE_RUNTIME_DEVTOOLS_NPM_URL,
  SSE_RUNTIME_GITHUB_URL,
  SSE_RUNTIME_REACT_NPM_URL,
} from './links';
import { sseRuntimeMetrics } from './metrics';
import type { ToolSummary } from './types';

export const sseRuntime: ToolSummary = {
  slug: 'sse-runtime',
  name: 'sse-runtime',
  description: 'TypeScript runtime for typed SSE streams in React applications.',
  status: 'available',
  statusLabel: 'Available',
  packages: [
    {
      name: '@flamefrontend/sse-runtime-core',
      label: 'npm core',
      purpose: 'Typed SSE client, connection lifecycle and reconnect primitives',
      href: SSE_RUNTIME_CORE_NPM_URL,
    },
    {
      name: '@flamefrontend/sse-runtime-react',
      label: 'npm react',
      purpose: 'React provider and hooks for subscribing to typed server events',
      href: SSE_RUNTIME_REACT_NPM_URL,
    },
    {
      name: '@flamefrontend/sse-runtime-devtools',
      label: 'npm devtools',
      purpose: 'Floating inspector for connection state, events and runtime diagnostics',
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
    description: 'Session state, token refresh and auth transitions behind a small runtime API.',
    status: 'planned',
    statusLabel: 'Planned',
  },
  {
    slug: 'tab-runtime',
    name: 'tab-runtime',
    description: 'Shared ownership, broadcasts and locks for browser features that span tabs.',
    status: 'planned',
    statusLabel: 'Planned',
  },
  {
    slug: 'form-draft-runtime',
    name: 'form-draft-runtime',
    description: 'Draft persistence, restore and conflict handling for long-running forms.',
    status: 'planned',
    statusLabel: 'Planned',
  },
  {
    slug: 'runtime-devtools-kit',
    name: 'runtime-devtools-kit',
    description: 'Reusable building blocks for runtime diagnostics panels and debug views.',
    status: 'in-progress',
    statusLabel: 'In progress',
  },
];
