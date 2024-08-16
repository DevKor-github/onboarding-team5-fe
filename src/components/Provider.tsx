import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </CookiesProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Provider;
