import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../store/configureStore';
import { FeatureToggleProvider } from '../context/FeatureToggleContext';
import ErrorBoundary from '../util/withErrorBoundary';

const MyApp = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <FeatureToggleProvider>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </FeatureToggleProvider>
    </Provider>
  );
}

export default withReduxStore(MyApp);
