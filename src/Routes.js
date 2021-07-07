import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import AdminLayout from "./Components/Admin/AdminLayout";

import route from "./config/route";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={route.home} exact>
          <Heading>I'm a Home</Heading>
        </Route>
        <Route path={route.admin} exact>
          <AdminLayout />
        </Route>
        <Route path={route.user} exact></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
