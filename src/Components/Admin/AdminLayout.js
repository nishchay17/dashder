import React, { useState, Suspense } from "react";
import {
  Heading,
  Button,
  Wrap,
  Spinner,
  Flex,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import links from "../../config/route";

const AddElementLayout = React.lazy(() =>
  import("./AddElement/AddElementLayout")
);
const AllUserLayout = React.lazy(() => import("./AllUsers/AllUserLayout"));

const tabs = [
  {
    name: "All Users",
    Component: (
      <Suspense fallback={<Spinner size="lg" />}>
        <AllUserLayout />
      </Suspense>
    ),
  },
  {
    name: "Add New Element",
    Component: (
      <Suspense fallback={<Spinner size="lg" />}>
        <AddElementLayout />
      </Suspense>
    ),
  },
  { name: "View And Edit Current Dashboard", Component: null },
];

function AdminLayout() {
  const [currentTab, setCurrentTab] = useState(0);

  function handleTabChange(newtab) {
    setCurrentTab(newtab);
  }

  return (
    <div>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Hello Admin</Heading>
        <Tooltip label="Go back to home" aria-label="Go home">
          <Link href={links.home} color="blue.500" fontSize="xl">
            Home
          </Link>
        </Tooltip>
      </Flex>
      <Wrap my="2rem">
        {tabs.map(({ name }, index) => (
          <Button
            flexShrink={0}
            colorScheme="teal"
            key={index}
            onClick={() => handleTabChange(index)}
            isActive={currentTab === index}
          >
            {name}
          </Button>
        ))}
      </Wrap>
      {tabs[currentTab].Component}
    </div>
  );
}

export default AdminLayout;
