import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';

import { ModeToggle } from '@/components/ModeToggle';
import { TanStackRouterDevtools } from '@/components/utils/TanStackRouterDevtools';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <header className="mb-2 border-b px-4 py-2">
        <div className="flex items-center justify-between text-center align-middle">
          <nav className="flex gap-2">
            <Link className="[&.active]:font-bold" to="/">
              Home
            </Link>
            <Link className="[&.active]:font-bold" to="/about">
              About
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
