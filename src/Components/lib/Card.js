import React from "react";
import { Box } from "@chakra-ui/react";

function Card({ children, ...rest }) {
  return (
    <Box
      paddingX="1.5rem"
      paddingY="0.7rem"
      color="white"
      bgColor="blue.900"
      borderRadius="9px"
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Card;
