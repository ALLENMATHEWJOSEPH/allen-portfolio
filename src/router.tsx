import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Create and configure the app router
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

// Required export for TanStack Start hydration (SSR + Client)
export const getRouter = () => router;

// Type registration for TanStack Router
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// ✅ Default export required for build and SSR
export default router;
