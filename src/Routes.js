import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import route from "./config/route";
import TopBar from "./Components/TopBar";

const AdminLayout = React.lazy(() => import("./Components/Admin/AdminLayout"));
const LandingLayout = React.lazy(() =>
  import("./Components/Landing/LandingLayout")
);

function Routes() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path={route.home} exact>
          <Suspense fallback={<Spinner size="lg" />}>
            <LandingLayout />
          </Suspense>
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
