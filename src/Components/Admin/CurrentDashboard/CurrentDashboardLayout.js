import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Spinner, useToast } from "@chakra-ui/react";

import elementService from "../../service/elementService";
import ElementWrapper from "./ElementWrapper";

function CurrentDashboardLayout() {
  const [allElements, setAllElements] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const boxRef = useRef();
  const toast = useToast();
  // new change
  const fetchAllElements = useCallback(
    async function () {
      try {
        const data = await elementService.all();
        const elements = data.elements;
        console.log(elements);
        setAllElements(elements);
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: `Please refresh and try again later`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(error);
      }
    },
    [toast]
  );

  useEffect(() => {
    setIsLoading(true);
    fetchAllElements();
    setIsLoading(false);
  }, [fetchAllElements]);

  return (
    <div width="100%" ref={boxRef}>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        allElements?.map(({ dimensions, ...rest }) => (
          <Box border="1px solid black" key={rest._id}>
            <ElementWrapper {...rest} />
          </Box>
        ))
      )}
    </div>
  );
}

export default CurrentDashboardLayout;
