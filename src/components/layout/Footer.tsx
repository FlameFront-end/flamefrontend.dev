import { contactLinks } from '../../data/links';
import styles from './Footer.module.scss';

export function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <p className={styles.credit}>Built with React, TypeScript and SCSS.</p>
      <nav className={styles.links} aria-label="Footer navigation">
        {contactLinks.map((link) => (
          <a className={styles.link} href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

