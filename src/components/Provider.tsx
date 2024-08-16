import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Toaster } from 'react-hot-toast';
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
          <Toaster
            containerStyle={{ fontSize: '16px', fontWeight: '600' }}
            toastOptions={{
              style: {
                padding: '10px 13px',
                color: '#242424',
                borderRadius: '999px',
              },
            }}
          />
          <ReactQueryDevtools initialIsOpen={false} />
        </CookiesProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Provider;
