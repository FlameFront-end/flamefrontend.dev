import type { ExternalLink } from './types';

export const GITHUB_PROFILE_URL = 'https://github.com/FlameFront-end';
export const SSE_RUNTIME_GITHUB_URL = 'https://github.com/FlameFront-end/sse-runtime';
export const SSE_RUNTIME_CORE_NPM_URL =
  'https://www.npmjs.com/package/@flamefrontend/sse-runtime-core';
export const SSE_RUNTIME_REACT_NPM_URL =
  'https://www.npmjs.com/package/@flamefrontend/sse-runtime-react';
export const SSE_RUNTIME_DEVTOOLS_NPM_URL =
  'https://www.npmjs.com/package/@flamefrontend/sse-runtime-devtools';

export const profileLinks: readonly ExternalLink[] = [
  {
    label: 'GitHub',
    href: GITHUB_PROFILE_URL,
  },
  {
    label: 'npm',
    href: 'https://www.npmjs.com/~flamefrontend',
  },
];

export const contactLinks: readonly ExternalLink[] = [
  ...profileLinks,
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/Artem_Kaliganov',
  },
  {
    label: 'Email',
    href: 'mailto:flame.kaliganov@gmail.com',
  },
];
