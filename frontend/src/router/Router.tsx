import { App } from '@/App';
import { IdentiKitPage } from '@/pages/IdentiKit/identiKit';
import { NotFoundPage } from '@/pages/NotFound/NotFound';
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

// Root route with App and notFound fallback
const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFoundPage,
});

// Route: "/"
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IdentiKitPage,
});

// Router setup
export const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute]),
});
