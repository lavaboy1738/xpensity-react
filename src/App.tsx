import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faList, faChartBar} from "@fortawesome/free-solid-svg-icons";

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
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.nav`
  background-color: #68e2ae;

  ul{
    display: flex;
    li{
      width: 33.33333%;
      text-align: center;
      padding: 0.5rem 0;
      font-size: 2rem;
    }
  }

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
        <Nav>
          <ul>
            <li>
              <Link to="/overview">
                <FontAwesomeIcon icon={faList} ></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link to="/money">
              <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link to="/stats">
              <FontAwesomeIcon icon={faChartBar} ></FontAwesomeIcon>
              </Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

export default App;
