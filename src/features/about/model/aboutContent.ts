export type FocusArea = {
  readonly marker: string;
  readonly title: string;
  readonly description: string;
};

export type ExperienceStat = {
  readonly value: string;
  readonly label: string;
  readonly description: string;
};

export const focusAreas: readonly FocusArea[] = [
  {
    marker: '01',
    title: 'Real-time product UI',
    description: 'SSE streams, reconnect flows, stale state, typed events and browser constraints.',
  },
  {
    marker: '02',
    title: 'Frontend runtime',
    description: 'Connection lifecycle, shared browser state, diagnostics and React integration.',
  },
  {
    marker: '03',
    title: 'Library design',
    description: 'Small TypeScript packages with narrow APIs and clear ownership.',
  },
];

export const experienceStats: readonly ExperienceStat[] = [
  {
    value: '5+ years',
    label: 'React and TypeScript',
    description: 'Commercial product work across long-lived frontend codebases.',
  },
  {
    value: 'SaaS',
    label: 'ERP / fintech',
    description: 'Business workflows where regressions are expensive and hard to hide.',
  },
  {
    value: 'Open source',
    label: 'Runtime tools',
    description: 'Packages extracted from problems that already appeared in product code.',
  },
];

export const workPrinciples: readonly string[] = [
  'Pull repeated runtime behavior out of components early.',
  'Keep APIs small, but expose the state callers need.',
  'Make connection behavior visible in diagnostics and tests.',
  'Write down migration trade-offs before changing an API.',
  'Keep React bindings thin around reusable runtime code.',
];

export const collaborationTopics: readonly string[] = [
  'React architecture reviews',
  'Real-time UI with SSE',
  'Frontend runtime extraction',
  'Diagnostics and developer tooling',
];
