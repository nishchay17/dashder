import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Box width="100vw" height="7px" bgColor="teal.400" />
          <Container maxW="container.xl" py="3rem">
            <Box textAlign="center">
              <Heading>Something went wrong</Heading>
              <br />
              <Text>
                Please reload or go back to{" "}
                <a href="/">
                  <i>home</i>
                </a>
              </Text>
            </Box>
          </Container>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
