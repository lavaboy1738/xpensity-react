import React from 'react';
import "./helper.scss";

import Overview from "./views/Overview";
import Money from "./views/Money/Money";
import Stats from "./views/Stats";
import NoMatch from "./views/NoMatch";
import {EditStatement} from "./views/StatementDetails";


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {

  return (
    <Router>
          <Switch >
            <Route path="/overview/:statementID" exact>
              <EditStatement/>
            </Route>
            <Route path="/overview/" exact>
              <Overview />
            </Route>
            <Route path="/stats" exact>
              <Stats />
            </Route>
            <Route path="/money" exact>
              <Money />
            </Route>
            <Redirect exact from="/" to="/money" />
            <Route path="*" >
              <NoMatch/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
