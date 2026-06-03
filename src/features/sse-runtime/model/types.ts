import type { ExternalLink } from '@/shared/types/link';
import type { Metric } from '@/shared/types/metric';

export type ToolStatus = 'available' | 'planned' | 'in-progress';

export type PackageLink = ExternalLink & {
  readonly name: string;
  readonly purpose: string;
};

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
