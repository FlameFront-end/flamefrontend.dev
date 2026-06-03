import type { Metric } from './types';

export const sseRuntimeMetrics: readonly Metric[] = [
  {
    value: '3',
    label: 'npm packages',
  },
  {
    value: '229',
    label: 'unit tests',
  },
  {
    value: '0',
    label: 'runtime dependencies in core',
  },
  {
    value: 'React 18/19',
    label: 'support',
  },
  {
    value: 'Web Locks + BroadcastChannel',
    label: 'coordination',
  },
  {
    value: '~3.5k',
    label: 'lines removed after production migration',
  },
  {
    value: '23',
    label: 'files removed after migration',
  },
];

export const migrationMetrics: readonly Metric[] = [
  {
    value: '-3,455',
    label: 'lines',
  },
  {
    value: '23',
    label: 'files removed',
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
    label: 'runtime deps in core',
  },
  {
    value: 'Production',
    label: 'integration',
  },
];

