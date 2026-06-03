import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { GITHUB_PROFILE_URL } from '../../data/links';
import { ThemeToggle } from '../theme-toggle/ThemeToggle';
import styles from './Header.module.scss';

const navigationLinks = [
  {
    label: 'Tools',
    href: '/tools',
  },
  {
    label: 'Case Studies',
    href: '/case-studies/sse-runtime-production-migration',
  },
  {
    label: 'Articles',
    href: '/articles',
  },
  {
    label: 'About',
    href: '/about',
  },
] as const;

export function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <NavLink className={styles.brand} to="/" onClick={() => setIsMenuOpen(false)}>
          flamefrontend.dev
        </NavLink>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.srOnly}>Toggle navigation</span>
          </button>
        </div>
      </div>

      <nav
        id="primary-navigation"
        className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ''}`}
        aria-label="Primary navigation"
      >
        {navigationLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navigationLink} ${styles.navigationLinkActive}` : styles.navigationLink
            }
            key={link.href}
            to={link.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a
          className={styles.navigationLink}
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}

