import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import styles from './RootLayout.module.scss';

export function RootLayout(): React.ReactElement {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
