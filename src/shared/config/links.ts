import type { ExternalLink } from '@/shared/types/link';

export const GITHUB_PROFILE_URL = 'https://github.com/FlameFront-end';
export const NPM_PROFILE_URL = 'https://www.npmjs.com/~flamefrontend';
export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/';
export const TELEGRAM_PROFILE_URL = 'https://t.me/Artem_Kaliganov';
export const EMAIL_CONTACT_URL = 'mailto:flame.kaliganov@gmail.com';

export const profileLinks: readonly ExternalLink[] = [
  {
    label: 'GitHub',
    href: GITHUB_PROFILE_URL,
  },
  {
    label: 'npm',
    href: NPM_PROFILE_URL,
  },
];

export const contactLinks: readonly ExternalLink[] = [
  ...profileLinks,
  {
    label: 'LinkedIn',
    href: LINKEDIN_PROFILE_URL,
  },
  {
    label: 'Telegram',
    href: TELEGRAM_PROFILE_URL,
  },
  {
    label: 'Email',
    href: EMAIL_CONTACT_URL,
  },
];
