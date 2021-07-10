import React from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import Routes from "./Routes";
import { theme } from "./styles/theme";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ErrorBoundary> */}
      <Box width="100vw" height="7px" bgColor="teal.400" />
      <Container maxW="container.xl">
        <Routes />
      </Container>
      {/* </ErrorBoundary> */}
    </ChakraProvider>
  );
}

export default App;
