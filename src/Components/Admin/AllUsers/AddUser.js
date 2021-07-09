import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";

import userService from "../../service/userService";

const defaultUserData = { name: "", role: "admin" };

function AddUser({ isOpen, onClose, addUserToState }) {
  const [userData, setUserData] = useState(defaultUserData);
  const toast = useToast();

  function handleChange(event) {
    setUserData((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await userService.add(userData);
      toast({
        title: "User Added",
        description: `User added successfully`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      addUserToState(userData);
      setUserData(defaultUserData);
      onClose();
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

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setUserData(defaultUserData);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add user</ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form" id="add-user" onSubmit={handleSubmit} pb={6}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              onChange={handleChange}
              value={userData.name}
              name={"name"}
              placeholder="Enter name"
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Role</FormLabel>
            <Select name="role" onChange={handleChange} value={userData.role}>
              <option value="admin">Admin</option>
              <option value="senior">Senior dev</option>
              <option value="junior">Junior</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={() => {
              onClose();
              setUserData(defaultUserData);
            }}
          >
            Close
          </Button>
          <Button
            variant="outline"
            type="submit"
            form="add-user"
            colorScheme="teal"
          >
            Add user
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddUser;
