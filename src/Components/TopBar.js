import React from "react";
import { Flex, Text, Link, Tooltip } from "@chakra-ui/react";

function TopBar() {
  return (
    <Flex
      pt="1rem"
      pb={["1.5rem", "2rem"]}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize="2xl" fontWeight="600" color="blue.900">
        Dashder
      </Text>
      <Tooltip label="linkedin Profile" aria-label="linkedin">
        <Text>
          Created by{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/nishchay-trivedi-61219978/"
            rel="noopener noreferrer"
          >
            @nishchay17
          </Link>
        </Text>
      </Tooltip>
    </Flex>
  );
}

export default TopBar;
