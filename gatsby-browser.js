exports.onClientEntry = () => {
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
