import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './ThemeToggle.module.scss';

type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'flamefrontend-theme';
const DEFAULT_THEME: Theme = 'dark';

export function ThemeToggle(): React.ReactElement {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    storeTheme(theme);
  }, [theme]);

  return (
    <button
      className={styles.toggle}
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
    >
      <span className={styles.track} data-theme-state={theme} aria-hidden="true">
        <span className={styles.thumb}>{theme === 'dark' ? <Moon /> : <Sun />}</span>
      </span>
    </button>
  );
}

function readStoredTheme(): Theme {
  const storedTheme = getStoredTheme();

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return DEFAULT_THEME;
}

function getStoredTheme(): string | null {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('Unable to read the stored theme.', error);
    }

    return null;
  }
}

function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('Unable to store the selected theme.', error);
    }
  }
}
