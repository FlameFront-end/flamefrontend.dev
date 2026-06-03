import { Outlet } from 'react-router-dom';

import styles from './RootLayout.module.scss';

export function RootLayout(): React.ReactElement {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a className={styles.brand} href="/">
          flamefrontend.dev
        </a>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <a href="/tools">Tools</a>
          <a href="/case-studies/sse-runtime-production-migration">Case Studies</a>
          <a href="/articles">Articles</a>
          <a href="/about">About</a>
          <a href="https://github.com/FlameFront-end" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
