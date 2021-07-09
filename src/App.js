import React from "react";
import {
  theme as chakraTheme,
  extendTheme,
  ChakraProvider,
  Container,
  Box,
} from "@chakra-ui/react";
import Routes from "./Routes";
import { API } from "./api";

const fonts = {
  ...chakraTheme.fonts,
  body: `"Montserrat", sans-serif`,
  heading: `"Montserrat", sans-serif`,
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: "400",
    },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme({ fonts, components, config });

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
