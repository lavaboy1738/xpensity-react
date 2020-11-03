import React from 'react';
import styled from "styled-components";
import "./helper.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faList, faChartBar} from "@fortawesome/free-solid-svg-icons";

import Nav from "./components/Nav";


import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function Overview() {
  return <h2>Overview</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

function Stats() {
  return <h2>Stats</h2>;
}

function NoMatch(){
  return (
    <div>404 boi</div>
  )
}

const height = window.innerHeight;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper style={{height: `${height}px`}} >
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

export default App;
