import { createBrowserRouter } from 'react-router-dom';

import { AboutPage } from '@/features/about/pages/AboutPage';
import { ArticlesPage } from '@/features/articles/pages/ArticlesPage';
import { HomePage } from '@/features/home/pages/HomePage';
import { SseRuntimeCaseStudyPage } from '@/features/sse-runtime/pages/SseRuntimeCaseStudyPage';
import { SseRuntimePage } from '@/features/sse-runtime/pages/SseRuntimePage';
import { ToolsPage } from '@/features/tools/pages/ToolsPage';
import { ROUTES } from '@/shared/config/routes';
import { RootLayout } from '@/shared/widgets/layout/RootLayout';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.TOOLS, element: <ToolsPage /> },
      { path: ROUTES.SSE_RUNTIME, element: <SseRuntimePage /> },
      {
        path: ROUTES.SSE_RUNTIME_CASE_STUDY,
        element: <SseRuntimeCaseStudyPage />,
      },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.ARTICLES, element: <ArticlesPage /> },
    ],
  },
]);
