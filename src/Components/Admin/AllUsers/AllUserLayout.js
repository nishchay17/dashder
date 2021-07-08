import React, { useState } from "react";
import {
  Text,
  Flex,
  Select,
  Button,
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

function AllUserLayout() {
  const [users] = useState([
    { name: "Nishchay", role: "admin" },
    { name: "Nishchay", role: "senior" },
  ]);

  return (
    <div>
      <Text>All Users</Text>
      {users.map(({ name, role }, idx) => (
        <Flex
          my="0.5rem"
          key={idx}
          flexDirection={["column", "row"]}
          alignItems={["flex-start", "center"]}
        >
          <Text
            fontWeight="500"
            width={["100%", "20rem"]}
            isTruncated
            mb={["0.5rem", 0]}
          >
            {name}
          </Text>
          <Flex width="100%" justifyContent={["space-between", "flex-start"]}>
            <Select
              width={["75%", "15rem"]}
              ml={[0, "1rem"]}
              value={role}
              name="permission"
              onChange={() => {}}
            >
              <option value="admin">Admin</option>
              <option value="senior">Senior dev</option>
              <option value="junior">Junior</option>
            </Select>

            <Popover>
              <PopoverTrigger>
                <Button colorScheme="red" ml={[0, "1rem"]}>
                  Delete
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Confirm the delete</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody textAlign="end">
                    <Button ml="auto" colorScheme="red">
                      Yes, delete it
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>
        </Flex>
      ))}
    </div>
  );
}

export default AllUserLayout;
