import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}

