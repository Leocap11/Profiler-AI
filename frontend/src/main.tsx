import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './shadcn/lib/i18n.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './shadcn/lib/react-query.ts';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/Router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
