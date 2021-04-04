import React from 'react';
import GenericErrorScreen from './GenericErrorScreen';

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, State> {
  state = {hasError: false};

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Error--', error, errorInfo);
    this.setState(() => ({hasError: true}));
  }

  resetError = () => {
    this.setState(() => ({hasError: false}));
  };

  componentWillUnmount(): void {
    this.resetError();
  }

  render() {
    return this.state.hasError ? <GenericErrorScreen /> : this.props.children;
  }
}
export default ErrorBoundary;
