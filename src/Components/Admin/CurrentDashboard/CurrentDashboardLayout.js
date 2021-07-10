import React, { useEffect, useState } from "react";
import { Spinner, useToast, Wrap, WrapItem } from "@chakra-ui/react";

import elementService from "../../service/elementService";
import ElementWrapper from "./ElementWrapper";
import Resize from "../../lib/Resize";

function CurrentDashboardLayout() {
  const [allElements, setAllElements] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  async function fetchAllElements() {
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
  }

  useEffect(() => {
    setIsLoading(true);
    fetchAllElements();
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <Wrap spacing={"14px"}>
          {allElements?.map(({ dimensions, ...rest }) => (
            <WrapItem border="1px solid black" key={rest._id}>
              <Resize
                dimensions={dimensions && JSON.parse(dimensions)}
                onResizeStop={() => {}}
              >
                <ElementWrapper {...rest} />
              </Resize>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </div>
  );
}

export default CurrentDashboardLayout;
