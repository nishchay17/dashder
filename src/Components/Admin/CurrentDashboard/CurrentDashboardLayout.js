import React, { useEffect, useState } from "react";
import { Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import elementService from "../../service/elementService";
import PieData from "../../lib/Pie";
import Resize from "../../lib/Resize";

function CurrentDashboardLayout() {
  const [allElements, setAllElements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAllElements() {
    const data = await elementService.all();
    const ele = data.elements;
    setAllElements(ele);
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
        <Wrap>
          {allElements.map(({ name }) => (
            <WrapItem>
              <Resize onResizeStop={() => {}}>
                <PieData />
              </Resize>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </div>
  );
}

export default CurrentDashboardLayout;
