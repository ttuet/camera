import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { AuthProvider } from './AuthProvider';

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
            colorPrimary: '#FB8500',
            colorBgContainer: '#5C5C5C',
          },
        }}
      >
        <ErrorBoundary FallbackComponent={OurFallbackComponent}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>{children}</AuthProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </ConfigProvider>
    </Suspense>
  );
};

export default AppProviders;
