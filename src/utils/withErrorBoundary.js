import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

const withErrorBoundary = (WrappedComponent) => {
  return (props) => {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

export default withErrorBoundary;
