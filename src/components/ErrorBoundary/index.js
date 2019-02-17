import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error });

        if (!window.Sentry) return;
        window.Sentry.configureScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
        });
        window.Sentry.captureException(error);
    }

    render() {
        if (this.state.hasError) return null;

        return this.props.children;
    }
}

export default ErrorBoundary;
