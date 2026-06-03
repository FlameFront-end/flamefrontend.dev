import { Outlet } from 'react-router-dom';

import { Footer } from '@/shared/widgets/footer/Footer';
import { Header } from '@/shared/widgets/header/Header';

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
