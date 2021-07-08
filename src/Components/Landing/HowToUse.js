import React from "react";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

import Card from "../lib/Card";

function HowToUse() {
  function HowToCard({ title, body }) {
    return (
      <Card width={["100%", "30%"]} mb="1rem">
        <Text fontSize="xl" textAlign="center">
          {title}
        </Text>
        <Divider my="0.5rem" />
        <Text textAlign="center">{body}</Text>
      </Card>
    );
  }

  return (
    <section>
      <Heading mb="2rem" mt={["4rem", "2rem"]}>
        How to use
      </Heading>
      <Flex justifyContent="space-between" flexDirection={["column", "row"]}>
        <HowToCard title="Login as Admin" body="All login are open for demo" />
        <HowToCard
          title="Add new dashboard elements"
          body="Add, edit and delete elements from the dashboard"
        />
        <HowToCard
          title="Access them through user panel"
          body="Users can see different element accounding to their permission"
        />
      </Flex>
    </section>
  );
}

export default HowToUse;
