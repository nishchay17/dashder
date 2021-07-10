import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import route from "../../config/route";

function Hero() {
  const history = useHistory();

  return (
    <section>
      <Flex
        my={["2rem", "3rem"]}
        justifyContent="space-between"
        alignItems={["flex-start", "center"]}
        flexDirection={["column-reverse", "row"]}
      >
        <Box width={["100%", "50%"]}>
          <Heading size="3xl" as="h1">
            Dashboard Builder
          </Heading>
          <Text ml="0.35rem" mt="0.5rem" fontSize="lg">
            Build Dashboard and publish it to the users fast
          </Text>
          <ButtonGroup colorScheme="teal" mt={["1rem", "2rem"]}>
            <Tooltip label="Open admin panel" aria-label="Admin tooltip">
              <Button onClick={() => history.push(route.admin)}>
                Go to Admin
              </Button>
            </Tooltip>
            <Tooltip label="Open user panel" aria-label="Admin tooltip">
              <Button
                variant="outline"
                onClick={() => history.push(route.user)}
              >
                Go to User
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Box>
        <Image
          width={["80%", "40%"]}
          height={["auto", "25rem"]}
          alt="dashboard"
          mb={["1rem", 0]}
          src="/svg/landing.svg"
        />
      </Flex>
    </section>
  );
}

export default Hero;
