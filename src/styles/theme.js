import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

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
