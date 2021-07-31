import React, { useState } from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";

import AddElementForm from "./AddElementForm";
import DataTable from "../../lib/Table";
import DataPie from "../../lib/Pie";

function AddElementLayout() {
  const [typeOfElement, setTypeOfElement] = useState("");
  const [endpoint, setEndpoint] = useState(null);

  function handleChangeElementType(type) {
    setTypeOfElement(type);
  }

  function handleChangeEndpoint(data) {
    setEndpoint(data);
  }

  return (
    <div>
      <Heading size="md">Add New Element Here</Heading>

      <Flex my="1rem" flexDirection={["column", "row"]}>
        <AddElementForm
          handleChangeElementType={handleChangeElementType}
          handleChangeEndpoint={handleChangeEndpoint}
        />
        <Box ml={[0, "3rem"]} mt={["1.5rem", 0]} overflowX="auto" width="100%">
          {typeOfElement === "table" ? (
            <DataTable endpoint={endpoint} isNew />
          ) : typeOfElement === "pie" ? (
            <Box width={["100%", "70%"]} mx="auto">
              <DataPie endpoint={endpoint} />
            </Box>
          ) : null}
        </Box>
      </Flex>
    </div>
  );
}

export default AddElementLayout;
