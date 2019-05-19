import React from 'react';
import ErrorBoundary from './src/components/ErrorBoundary';

export const wrapRootElement = ({ element }) => {
    return <ErrorBoundary>{element}</ErrorBoundary>;
};

export const onClientEntry = () => {
    // Add Logrocket session information to
    // Sentry error events.
    if (!window.LogRocket || !window.Sentry) return;
    window.Sentry.configureScope(scope => {
        scope.addEventProcessor(async event => {
            event.extra.sessionURL = window.LogRocket.sessionURL;
            return event;
        });
    });
};
