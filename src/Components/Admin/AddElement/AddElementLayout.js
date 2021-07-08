import React, { useState } from "react";
import { Text, Flex, Box } from "@chakra-ui/react";

import AddElementForm from "./AddElementForm";
import DataTable from "../../lib/Table";
import DataPie from "../../lib/Pie";

function AddElementLayout() {
  const [typeOfElement, setTypeOfElement] = useState("");
  const [data, setData] = useState(null);

  function handleChangeElementType(type) {
    setTypeOfElement(type);
  }

  function handleChangeData(data) {
    setData(data);
  }

  return (
    <div>
      <Text>Add New Element Here</Text>
      <Flex my="1rem" flexDirection={["column", "row"]}>
        <AddElementForm
          handleChangeElementType={handleChangeElementType}
          handleChangeData={handleChangeData}
        />
        <Box ml={[0, "3rem"]} mt={["1.5rem", 0]} overflowX="auto" width="100%">
          {typeOfElement === "table" ? (
            <DataTable rawData={data} />
          ) : typeOfElement === "pie" ? (
            <Box width={["100%", "70%"]} mx="auto">
              <DataPie rawData={data} />
            </Box>
          ) : null}
        </Box>
      </Flex>
    </div>
  );
}

export default AddElementLayout;
