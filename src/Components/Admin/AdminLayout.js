import React, { useState } from "react";
import { Heading, Button, ButtonGroup } from "@chakra-ui/react";

const tabs = ["Add New Element", "View And Edit Current Dashboard"];

function AdminLayout() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  function handleTabChange(newtab) {
    setCurrentTab(newtab);
  }

  return (
    <div>
      <Heading>Hello Admin</Heading>
      <ButtonGroup mt="2rem">
        {tabs.map((tab) => (
          <Button
            onClick={() => handleTabChange(tab)}
            isActive={currentTab === tab}
          >
            {console.log({ currentTab, tab })} {tab}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default AdminLayout;
