import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageContainer
} from "./error-boundaries.sytles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }
  render() {
    return this.state.hasError ? (
      <ErrorImageOverlay>
        <ErrorImageContainer
          imageUrl={
            "https://i.imgur.com/lKJiT77.png"
          }
        >
          <ErrorImageText>Something Wrong!</ErrorImageText>
        </ErrorImageContainer>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
