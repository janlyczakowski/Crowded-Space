import { ErrorBoundary } from 'react-error-boundary';

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

function ErrorFallback(props) {
  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
}

export default ErrorFallback;
