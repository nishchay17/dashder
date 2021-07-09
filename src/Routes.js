import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminLayout from "./Components/Admin/AdminLayout";
import LandingLayout from "./Components/Landing/LandingLayout";
import route from "./config/route";
import TopBar from "./Components/TopBar";

function Routes() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path={route.home} exact>
          <LandingLayout />
        </Route>
        <Route path={route.admin} exact>
          <AdminLayout />
        </Route>
        <Route path={route.user} exact>
          user
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
