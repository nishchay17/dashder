import React from "react";
import { ChakraProvider, Container, Box, useColorMode } from "@chakra-ui/react";
import Routes from "./Routes";

import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100vw" height="7px" bgColor="teal.400" />
      <Container maxW="container.xl">
        <Routes />
      </Container>
    </ChakraProvider>
  );
}

export default App;
