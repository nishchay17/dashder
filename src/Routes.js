import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import route from "./config/route";
import TopBar from "./Components/TopBar";
import LandingLayout from "./Components/Landing/LandingLayout";

const AdminLayout = React.lazy(() => import("./Components/Admin/AdminLayout"));

function Routes() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path={route.home} exact>
          <LandingLayout />
        </Route>
        <Route path={route.admin} exact>
          <Suspense fallback={<Spinner size="lg" />}>
            <AdminLayout />
          </Suspense>
        </Route>
        <Route path={route.user} exact>
          user
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
