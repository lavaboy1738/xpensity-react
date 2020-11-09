import React from "react";
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faList, faChartBar} from "@fortawesome/free-solid-svg-icons";

import {
    Link
  } from "react-router-dom";

const NavStyle = styled.nav`
  background-color: $primary-color;
  min-height: 4.2rem;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);

  ul{
    display: flex;
    li{
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        text-align: center;
        padding: 0.5rem 0;
        width: 100%;
        font-size: 3rem;
      }
    }
  }
`

const Nav = () => {
    return(
        <NavStyle>
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
        </NavStyle>
    )
}

export default Nav;

