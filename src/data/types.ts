export type ExternalLink = {
  readonly label: string;
  readonly href: string;
};

export type Metric = {
  readonly value: string;
  readonly label: string;
};

export type PackageLink = ExternalLink & {
  readonly name: string;
  readonly purpose: string;
};

