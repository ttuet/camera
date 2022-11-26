import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';

type ErrorProps = {
  error: any;
  resetErrorBoundary: () => void;
};
const OurFallbackComponent = (props: ErrorProps) => {
  const { error, resetErrorBoundary } = props;
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();

const AppProviders = (props: Props) => {
  const { children } = props;

  return (
    <Suspense fallback={<span>Loading.....</span>}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#31B1B4',
          },
        }}
      >
        <ErrorBoundary FallbackComponent={OurFallbackComponent}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ErrorBoundary>
      </ConfigProvider>
    </Suspense>
  );
};

export default AppProviders;
