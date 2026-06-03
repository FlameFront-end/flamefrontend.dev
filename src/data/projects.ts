export type CaseStudyResult = {
  readonly metric: string;
  readonly result: string;
};

export type CaseStudy = {
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly before: readonly string[];
  readonly after: readonly string[];
  readonly results: readonly CaseStudyResult[];
};

export const sseRuntimeProductionMigration: CaseStudy = {
  slug: 'sse-runtime-production-migration',
  title: 'Extracting SSE infrastructure from a production React app',
  subtitle:
    'How an internal real-time layer became an open-source TypeScript runtime and removed ~3.5k lines of application code.',
  before: [
    'custom connection manager',
    'reconnect scheduler',
    'manual leader election',
    'cross-tab forwarding',
    'custom logging widget',
    'resume monitor',
    'health-check logic',
  ],
  after: [
    'thin adapter over library',
    'domain-specific dispatcher',
    'DevTools instead of custom logger',
    'versioned core package',
    'tested runtime',
  ],
  results: [
    {
      metric: 'Lines removed',
      result: '~3.6k',
    },
    {
      metric: 'Net change',
      result: '~-3.5k',
    },
    {
      metric: 'Files removed',
      result: '23',
    },
    {
      metric: 'Library tests',
      result: '229',
    },
    {
      metric: 'Packages',
      result: '3',
    },
    {
      metric: 'Core runtime deps',
      result: '0',
    },
  ],
};

export const caseStudies: readonly CaseStudy[] = [sseRuntimeProductionMigration];
