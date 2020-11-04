import React from 'react';
import styled from "styled-components";
import "./helper.scss";

import Nav from "./components/Nav";
import Layout from "./components/Layout";


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function Overview() {
  return (
    <Layout>
      <h2>Overview</h2>
    </Layout>
  )
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout>
  )
}

function Stats() {
  return (
    <Layout>
      <h2>Stats</h2>
    </Layout>
  )
}

function NoMatch(){
  return (
    <div>404 boi</div>
  )
}

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
