export type ToolStatus = 'available' | 'planned' | 'in-progress';

export type ToolSummary = {
  readonly name: string;
  readonly description: string;
  readonly status: ToolStatus;
};

export const tools: readonly ToolSummary[] = [
  {
    name: 'sse-runtime',
    description: 'TypeScript SSE runtime for production React applications.',
    status: 'available',
  },
];

