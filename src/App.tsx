import React from 'react';
import "./helper.scss";

import Overview from "./views/Overview";
import Money from "./views/Money";
import Stats from "./views/Stats";
import NoMatch from "./views/NoMatch";

import { library } from '@fortawesome/fontawesome-svg-core'
import {faTaxi, faHome, faPlus, faDollarSign, faBook, faList, faChartBar} from "@fortawesome/free-solid-svg-icons";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

library.add(faTaxi, faHome, faPlus, faDollarSign, faBook, faList, faChartBar);

function App() {
  return (
    <Router>
          <Switch >
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/money">
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
