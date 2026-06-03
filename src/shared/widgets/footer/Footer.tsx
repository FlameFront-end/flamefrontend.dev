import type { IconType } from 'react-icons';
import { TbBrandGithub, TbBrandLinkedin, TbBrandNpm, TbMail, TbSend } from 'react-icons/tb';

import { contactLinks } from '@/shared/config/links';

import styles from './Footer.module.scss';

const CONTACT_ICONS: Record<string, IconType> = {
  GitHub: TbBrandGithub,
  npm: TbBrandNpm,
  LinkedIn: TbBrandLinkedin,
  Telegram: TbSend,
  Email: TbMail,
};

export function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <p className={styles.credit}>Built with React, TypeScript and SCSS.</p>
      <nav className={styles.links} aria-label="Footer navigation">
        {contactLinks.map((link) => {
          const Icon = CONTACT_ICONS[link.label] ?? TbBrandGithub;

          return (
            <a
              aria-label={link.label}
              className={styles.link}
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
              title={link.label}
            >
              <Icon aria-hidden="true" />
            </a>
          );
        })}
      </nav>
    </footer>
  );
}
