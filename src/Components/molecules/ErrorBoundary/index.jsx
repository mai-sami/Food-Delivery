import React, { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) return <>obs Noooooooooooooooooo</>;
    return this.props.children;
  }
}

export default ErrorBoundary;
