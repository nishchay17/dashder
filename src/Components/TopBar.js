import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Text,
  Link as Clink,
  Tooltip,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import route from "../config/route";

function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      pt="1rem"
      pb={["1.5rem", "2rem"]}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        as={Link}
        to={route.home}
        fontSize="2xl"
        fontWeight="600"
        color={colorMode === "light" ? "blue.900" : "blue.400"}
      >
        Dashder
      </Text>
      <Flex alignItems="center">
        <Tooltip label="linkedin Profile" aria-label="linkedin">
          <Text width={["7rem", "auto"]}>
            Created by{" "}
            <Clink
              target="_blank"
              href="https://www.linkedin.com/in/nishchay-trivedi-61219978/"
              rel="noopener noreferrer"
            >
              @nishchay17
            </Clink>
          </Text>
        </Tooltip>

        <Button
          colorScheme="teal"
          ml="1rem"
          aria-label="toggle dark/light mood"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Flex>
    </Flex>
  );
}

export default TopBar;
