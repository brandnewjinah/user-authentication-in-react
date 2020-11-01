import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Mailchimpreg from "./pages/Mailchimp_reg";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/mailchimpreg" component={Mailchimpreg} />
      </Switch>
    </Router>
  );
};

export default Routes;
