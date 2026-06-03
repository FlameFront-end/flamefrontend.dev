import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../components/layout/RootLayout';
import { AboutPage } from '../pages/about/AboutPage';
import { ArticlesPage } from '../pages/articles/ArticlesPage';
import { CaseStudyPage } from '../pages/case-study/CaseStudyPage';
import { HomePage } from '../pages/home/HomePage';
import { ToolDetailsPage } from '../pages/tool-details/ToolDetailsPage';
import { ToolsPage } from '../pages/tools/ToolsPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/tools', element: <ToolsPage /> },
      { path: '/tools/sse-runtime', element: <ToolDetailsPage /> },
      {
        path: '/case-studies/sse-runtime-production-migration',
        element: <CaseStudyPage />,
      },
      { path: '/about', element: <AboutPage /> },
      { path: '/articles', element: <ArticlesPage /> },
    ],
  },
]);

