import { TanStackRouterProvider } from './TanStackRouterProvider';
import { ThemeProvider } from './ThemeProvider';

export function Providers() {
  return (
    <ThemeProvider>
      <TanStackRouterProvider />
    </ThemeProvider>
  );
}
