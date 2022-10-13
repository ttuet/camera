import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

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
const AppProviders = (props: Props) => {
  const { children } = props;

  return (
    <Suspense fallback={<span>Loading.....</span>}>
      <ErrorBoundary FallbackComponent={OurFallbackComponent}>{children}</ErrorBoundary>
    </Suspense>
  );
};

export default AppProviders;
