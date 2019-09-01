import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  </main>
);

export default Main;
