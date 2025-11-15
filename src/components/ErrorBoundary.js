import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Swallow R3F context errors (non-fatal)
    if (error.message.includes('subscribe') || error.message.includes('useContext')) {
      console.warn('R3F Transient Error Ignored:', error.message);
      return null;  // No state change, retry render
    }
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong – Reload Reactor.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;