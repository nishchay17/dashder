import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  Flex,
  Stack,
  Select,
  Button,
  Portal,
  Popover,
  useToast,
  Skeleton,
  PopoverBody,
  PopoverArrow,
  PopoverHeader,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";

import userService from "../../service/userService";
import AddUser from "./AddUser";

function AllUserLayout() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const confirmDeleteRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  async function fetchUsers() {
    setIsLoading(true);
    const allUsers = await userService.all();
    setUsers(allUsers.users);
    setIsLoading(false);
  }

  async function updateRole(event, id, index) {
    try {
      updateLocal(id, event.target.value);
      await userService.edit(id, event.target.value);
      toast({
        title: "Role Updated",
        description: `Roled changed to ${event.target.value}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: `Please refresh and try again later`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(err);
    }
  }

  function updateLocal(id, value) {
    setUsers((pre) => {
      const newUsers = pre.map((user) => {
        if (user._id === id) {
          user.role = value;
        }
        return user;
      });
      return newUsers;
    });
  }

  async function deleteUser(id) {
    try {
      deleteLocalUser(id);
      await userService.delete(id);
      toast({
        title: "User deleted",
        description: `User deleted successfully`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: `Please refresh and try again later`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(err);
    }
  }

  function deleteLocalUser(id) {
    setUsers((pre) => {
      const newUser = pre.filter((user) => user._id !== id);
      return newUser;
    });
  }

  function addUserToState(user) {
    setUsers((pre) => {
      pre.push(user);
      return pre;
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" mb="1rem">
        <Heading size="md">All Users</Heading>
        <Button colorScheme="green" onClick={onOpen}>
          Add new user
        </Button>
      </Flex>
      {isLoading ? (
        <Stack mt="1rem" width={["100%", "37.5rem"]}>
          <Skeleton height="2.5rem" />
          <Skeleton height="2.5rem" />
          <Skeleton height="2.5rem" />
        </Stack>
      ) : (
        users &&
        users.map(({ name, role, _id }, idx) => (
          <Flex
            my="0.5rem"
            key={_id}
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
                name="role"
                onChange={(event) => {
                  updateRole(event, _id, idx);
                }}
              >
                <option value="admin">Admin</option>
                <option value="senior">Senior dev</option>
                <option value="junior">Junior</option>
              </Select>

              <Popover initialFocusRef={confirmDeleteRef}>
                {({ onClose }) => (
                  <>
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
                          <Button
                            onClick={() => {
                              onClose();
                              deleteUser(_id);
                            }}
                            ml="auto"
                            colorScheme="red"
                            ref={confirmDeleteRef}
                          >
                            Yes, delete it
                          </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </>
                )}
              </Popover>
            </Flex>
          </Flex>
        ))
      )}
      <AddUser
        isOpen={isOpen}
        onClose={onClose}
        addUserToState={addUserToState}
      />
    </div>
  );
}

export default AllUserLayout;
