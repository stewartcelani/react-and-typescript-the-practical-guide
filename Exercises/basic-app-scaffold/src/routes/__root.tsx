import { createRootRoute } from '@tanstack/react-router';
import Layout from '@components/Layout';

export const Route = createRootRoute({
  component: RootRoute
});

function RootRoute() {
  return <Layout />;
}
