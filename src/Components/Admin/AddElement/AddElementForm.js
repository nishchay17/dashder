import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";

import elementService from "../../service/elementService";

const defaultData = {
  name: "",
  type: "",
  endpoint: "",
  permission: "",
};

function AddElementForm({ handleChangeEndpoint, handleChangeElementType }) {
  const [formState, setFormState] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [addToDB, setAddToDB] = useState(false);

  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    let data = null;
    if (!addToDB) {
      handleChangeEndpoint(formState.endpoint);
      setAddToDB(true);
    } else {
      setAddToDB(false);
      await elementService.add(formState);
      setFormState(defaultData);
      handleChangeEndpoint(null);
      toast({
        title: "Done",
        description: "Saved and published successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
    setIsLoading(false);
    console.log(data);
  }

  function handleChange(event) {
    setFormState((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  }

  useEffect(() => {
    handleChangeElementType(formState.type);
  }, [formState.type, handleChangeElementType]);

  return (
    <Box as="form" width={["100%", "35%"]} onSubmit={handleSubmit}>
      <FormControl id="name" mb="1rem" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={formState.name}
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
        />
      </FormControl>
      <FormControl id="type" mb="1rem" isRequired>
        <FormLabel>Type</FormLabel>
        <Select
          value={formState.type}
          name="type"
          onChange={handleChange}
          placeholder="Enter type"
        >
          <option value="table">Table</option>
          <option value="pie">Pie</option>
        </Select>
      </FormControl>
      <FormControl id="endpoint" mb="1rem" isRequired>
        <FormLabel>End point</FormLabel>
        <Input
          value={formState.endpoint}
          name="endpoint"
          onChange={handleChange}
          placeholder="Enter endpoint"
        />
        <FormHelperText>Input the endpoint of the API</FormHelperText>
      </FormControl>

      <FormControl id="permission" mb="1rem" isRequired>
        <FormLabel>Permission</FormLabel>
        <Select
          value={formState.permission}
          name="permission"
          onChange={handleChange}
          placeholder="Enter permission"
        >
          <option value="admin">Only Admin</option>
          <option value="senior">Admin and senior dev</option>
          <option value="all">All</option>
        </Select>
        <FormHelperText>Who can see this element</FormHelperText>
      </FormControl>

      <Button isLoading={isLoading} mt={4} colorScheme="teal" type="submit">
        {addToDB ? "Save and publish" : `Generate ${formState.type}`}
      </Button>
    </Box>
  );
}

export default AddElementForm;
